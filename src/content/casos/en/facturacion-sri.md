---
path: electronic-invoicing-sri
title: Electronic invoicing integrated with the SRI
summary: Issuing electronic invoices and credit and debit notes from a retail chain’s enterprise system, with 40% faster queries over large volumes of tax data.
role: Software Developer
period: Mar 2023 — Feb 2024
context: Retail · Ecuador
stack: [Spring Boot, .NET, Hibernate, SRI API, SQL Server, Angular, Laravel, JasperReports]
results:
  - value: 40%
    label: faster queries with indexing and advanced pagination
  - value: '3'
    label: electronic document types in a single flow
---

## The problem

The company issued a high volume of tax documents and needed its enterprise system, with finance, stock and inventory modules, to connect directly to the SRI, Ecuador’s tax authority. On top of that, queries over tax data grew slower as the history piled up, and the accounting team was waiting too long for its reports.

## My role

I built the SRI integration for invoices and credit and debit notes, optimized the queries over tax data, and developed the bank reconciliations and accounting reports.

## Architecture

```text
┌─────────────┐  REST   ┌──────────────────────────┐   SOAP   ┌─────────────┐
│   Angular   │────────>│   Spring Boot            │─────────>│     SRI     │
│  (modules)  │         │   documents · signing    │<─────────│  reception  │
└─────────────┘         │   reports                │          │authorization│
                        └────────────┬─────────────┘          └─────────────┘
                                     │ Hibernate + stored procedures
                              ┌──────┴──────┐        ┌───────────────┐
                              │  SQL Server │───────>│ JasperReports │
                              └─────────────┘        └───────────────┘
```

## How a document flows

1. The system assembles the document from the sale or return data.
2. It generates the XML with the structure the SRI requires for that document type.
3. The XML is digitally signed with the company’s certificate.
4. It is sent to the SRI reception service, and then the authorization is requested.
5. With the authorization, the status is stored and the printable version is generated for the customer.

## Technical decisions

**One generator per document type (Strategy).** Invoices, credit notes and debit notes follow the same flow, but each has its own format. Each type is a class Spring registers automatically, so adding a new one doesn’t require changing existing code.

```java
@Service
public class ComprobanteService {
    private final Map<TipoComprobante, GeneradorComprobante> generadores;

    public ComprobanteService(List<GeneradorComprobante> lista) {
        this.generadores = lista.stream()
            .collect(toMap(GeneradorComprobante::tipo, identity()));
    }

    public Document generar(Comprobante comprobante) {
        return generadores.get(comprobante.tipo()).generarXml(comprobante);
    }
}
```

**Indexes and pagination designed for the real query.** Screens filtered by issuer and sorted by date. A composite index aligned with that usage, plus cursor pagination instead of `OFFSET`, made queries 40% faster and kept response times stable as the history grew.

```sql
CREATE INDEX ix_comprobantes_emisor_fecha
    ON comprobantes (emisor_id, fecha_emision DESC, id DESC)
    INCLUDE (estado, total);
```

**Stored procedures for bulk processes.** For calculations over large volumes of tax data I combined Hibernate with stored procedures: the heavy lifting happens next to the data and the application only receives the result.

**Reports with JasperReports.** Bank reconciliations and accounting reports are generated from JasperReports templates, so layouts can change without touching the logic.

## Outcome

The accounting team stopped waiting on queries, document issuing became part of the same system, and adding a new document type became a well-scoped task.

> Code snippets are illustrative: the client’s code is private. I can walk you through the full implementation in an interview.
