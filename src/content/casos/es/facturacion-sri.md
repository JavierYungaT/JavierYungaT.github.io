---
path: facturacion-sri
title: Facturación electrónica integrada con el SRI
summary: Emisión de facturas y notas de crédito y débito electrónicas desde el sistema empresarial de una cadena de retail, con consultas 40% más rápidas sobre grandes volúmenes de datos fiscales.
role: Desarrollador de Software
period: mar 2023 — feb 2024
context: Retail · Ecuador
stack: [Spring Boot, .NET, Hibernate, API SRI, SQL Server, Angular, Laravel, JasperReports]
results:
  - value: 40%
    label: consultas más rápidas con índices y paginación avanzada
  - value: '3'
    label: tipos de comprobante electrónico en un solo flujo
---

## El problema

La empresa emitía un volumen alto de comprobantes y necesitaba que el sistema empresarial, con módulos financieros, de stock e inventario, se conectara directamente con el SRI. Además, las consultas sobre los datos fiscales se volvían lentas a medida que crecía el histórico, y el área contable esperaba demasiado por sus reportes.

## Mi rol

Desarrollé la integración con el SRI para facturas y notas de crédito y débito, optimicé las consultas sobre los datos fiscales y construí las conciliaciones bancarias y los reportes contables.

## Arquitectura

```text
┌─────────────┐  REST   ┌──────────────────────────┐   SOAP   ┌─────────────┐
│   Angular   │────────>│   Spring Boot            │─────────>│     SRI     │
│  (módulos)  │         │   comprobantes · firma   │<─────────│ recepción / │
└─────────────┘         │   reportes               │          │ autorización│
                        └────────────┬─────────────┘          └─────────────┘
                                     │ Hibernate + procedimientos
                              ┌──────┴──────┐        ┌───────────────┐
                              │  SQL Server │───────>│ JasperReports │
                              └─────────────┘        └───────────────┘
```

## Cómo fluye un comprobante

1. El sistema arma el comprobante con los datos de la venta o la devolución.
2. Se genera el XML con la estructura que exige el SRI para ese tipo de comprobante.
3. El XML se firma electrónicamente con el certificado de la empresa.
4. Se envía al servicio de recepción del SRI y luego se consulta la autorización.
5. Con la autorización se guarda el estado y se genera la representación impresa para el cliente.

## Decisiones técnicas

**Un generador por tipo de comprobante (Strategy).** Facturas, notas de crédito y notas de débito siguen el mismo flujo, pero cada una tiene su propio formato. Cada tipo es una clase que Spring registra sola, así que agregar uno nuevo no obliga a modificar el código existente.

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

**Índices y paginación pensados para la consulta real.** Las pantallas filtraban por emisor y ordenaban por fecha. Un índice compuesto alineado con ese uso, más paginación por cursor en lugar de `OFFSET`, hizo las consultas un 40% más rápidas y mantuvo el tiempo estable al crecer el histórico.

```sql
CREATE INDEX ix_comprobantes_emisor_fecha
    ON comprobantes (emisor_id, fecha_emision DESC, id DESC)
    INCLUDE (estado, total);
```

**Procedimientos almacenados para los procesos masivos.** Para los cálculos sobre grandes volúmenes de datos fiscales combiné Hibernate con procedimientos almacenados: el trabajo pesado se hace cerca de los datos y la aplicación recibe solo el resultado.

**Reportes con JasperReports.** Las conciliaciones bancarias y los reportes contables se generan con plantillas de JasperReports, lo que permite ajustar formatos sin tocar la lógica.

## Resultado

El área contable dejó de esperar por las consultas, la emisión de comprobantes quedó integrada en el mismo sistema y sumar un nuevo tipo de comprobante pasó a ser una tarea acotada.

> Los fragmentos de código son ilustrativos: el código del cliente es privado. Puedo explicar la implementación completa en una entrevista.
