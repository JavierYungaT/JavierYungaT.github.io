import type { Practice, PracticesCatalog } from '@/types/content';

export const practicesNote: string =
  'Illustrative snippets written for this portfolio: client code is private, but the decisions are the same. Domain names stay in Spanish, as they do in the real codebases.';

/**
 * Practices shown in the "How I build software" section.
 * `lang` is the syntax highlighting language (ts, java, python, sql, yaml…).
 */
export const practices: Practice[] = [
  {
    id: 'arquitectura',
    label: 'Clean architecture',
    icon: 'layers',
    title: 'Business rules don’t depend on the framework',
    why: 'I separate domain, use cases and infrastructure. Rules live in the domain and talk to the outside world through ports; the database or the SRI web service are adapters that can be swapped or mocked in tests without touching the logic.',
    appliedIn: ['Electronic invoicing with the SRI', 'Multi-firm CRM and audit platform', 'Banking microservices'],
    principles: ['Dependency inversion', 'Ports and adapters', 'Single responsibility'],
    filename: 'emitir-comprobante.use-case.ts',
    lang: 'ts',
    code: `export class EmitirComprobanteUseCase {
  constructor(
    private readonly comprobantes: ComprobanteRepository, // port
    private readonly sri: AutorizadorSri,                  // port
  ) {}

  async ejecutar(cmd: EmitirComprobanteCommand): Promise<Autorizacion> {
    const comprobante = Comprobante.crear(cmd); // rules live in the domain
    const autorizacion = await this.sri.autorizar(comprobante);
    await this.comprobantes.guardar(comprobante.autorizado(autorizacion));
    return autorizacion;
  }
}`,
  },
  {
    id: 'patrones',
    label: 'Design patterns',
    icon: 'cube',
    title: 'A Strategy for each document type',
    why: 'Invoices, credit notes and debit notes share a flow but not a format. Each type is a strategy registered by Spring: adding a new one means writing a class, not editing a switch (open/closed).',
    appliedIn: ['Electronic invoicing with the SRI', 'Finance and inventory modules'],
    principles: ['Strategy', 'Open/closed', 'Dependency injection'],
    filename: 'ComprobanteService.java',
    lang: 'java',
    code: `public interface GeneradorComprobante {
    TipoComprobante tipo();
    Document generarXml(Comprobante comprobante);
}

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
}`,
  },
  {
    id: 'tiempo-real',
    label: 'Real time · Redis',
    icon: 'refresh',
    title: 'WebSocket notifications routed by group',
    why: 'Redis acts as the channel layer and fans messages out across every server instance. Each connection is authenticated with JWT and joins only its firm and user groups, so no one ever receives another firm’s data.',
    appliedIn: ['Multi-firm CRM and audit platform'],
    principles: ['Pub/Sub', 'JWT authentication', 'Tenant isolation'],
    filename: 'consumers.py',
    lang: 'python',
    code: `class NotificacionesConsumer(AsyncJsonWebsocketConsumer):
    async def connect(self):
        user = self.scope["user"]  # resolved by the JWT middleware
        if user.is_anonymous:
            return await self.close(code=4401)

        self.grupos = [f"firma_{user.firma_id}", f"usuario_{user.id}"]
        for grupo in self.grupos:
            await self.channel_layer.group_add(grupo, self.channel_name)
        await self.accept()

    async def notificacion(self, event):
        await self.send_json(event["payload"])`,
  },
  {
    id: 'eventos',
    label: 'Events · RabbitMQ',
    icon: 'branch',
    title: 'Services publish facts instead of calling each other',
    why: 'The customer service publishes "customer created" and the account service reacts. Neither knows about the other: if one goes down, the message waits in the queue. I’m currently going deeper into this approach with Kafka and Event Sourcing.',
    appliedIn: ['Banking microservices'],
    principles: ['Event-driven architecture', 'Loose coupling', 'Eventual consistency'],
    filename: 'ClienteEventsListener.java',
    lang: 'java',
    code: `@Component
@RequiredArgsConstructor
class ClienteEventsListener {

    private final AperturaCuentaService apertura;

    @RabbitListener(queues = "clientes.creados")
    void onClienteCreado(ClienteCreadoEvent evento) {
        apertura.abrirCuentaInicial(evento.clienteId());
    }
}`,
  },
  {
    id: 'datos',
    label: 'Data and performance',
    icon: 'database',
    title: 'Indexes designed for the real query',
    why: 'With OFFSET every page costs more than the last. An index aligned with the filter and sort order, plus cursor pagination, keeps the cost flat. That’s how I made queries 40% faster over large tax-data volumes.',
    appliedIn: ['Electronic invoicing with the SRI', 'Core banking reports'],
    principles: ['Cursor pagination', 'Composite indexes', 'Measure before optimizing'],
    filename: 'comprobantes.sql',
    lang: 'sql',
    code: `CREATE INDEX ix_comprobantes_emisor_fecha
    ON comprobantes (emisor_id, fecha_emision DESC, id DESC)
    INCLUDE (estado, total);

-- Cursor pagination: constant cost, no OFFSET
SELECT TOP (50) id, fecha_emision, estado, total
FROM comprobantes
WHERE emisor_id = @emisor
  AND (fecha_emision < @ultima_fecha
       OR (fecha_emision = @ultima_fecha AND id < @ultimo_id))
ORDER BY fecha_emision DESC, id DESC;`,
  },
  {
    id: 'cloud',
    label: 'Cloud and CI/CD',
    icon: 'cloud',
    title: 'Nothing ships with failing tests',
    why: 'Every push to main runs the tests, builds the Docker image and deploys to AWS with short-lived credentials (no keys stored in the repository). Deploying stops being an event and becomes routine.',
    appliedIn: ['Multi-firm CRM and audit platform', 'Sports facility bookings'],
    principles: ['Continuous integration', 'Reproducible infrastructure', 'Least privilege'],
    filename: '.github/workflows/deploy.yml',
    lang: 'yaml',
    code: `on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions: { id-token: write, contents: read }
    steps:
      - uses: actions/checkout@v4
      - run: docker compose run --rm api pytest --maxfail=1
      - uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: \${{ secrets.AWS_DEPLOY_ROLE }}
          aws-region: us-east-1
      - run: ./scripts/build-push-deploy.sh \${{ github.sha }}`,
  },
];

/** "Architectures and patterns" dialog opened from the practices section. */
export const practicesCatalog: PracticesCatalog = {
  button: 'See architectures and patterns',
  title: 'Architectures and patterns I apply',
  intro: 'Each one linked to the project where I used it, so we can dig deeper in an interview.',
  architecturesLabel: 'Architectures',
  patternsLabel: 'Design patterns',
  close: 'Close',
  architectures: [
    {
      name: 'Clean / hexagonal architecture',
      detail: 'Isolated domain; the database and external services are swappable adapters.',
      usedIn: ['SRI invoicing', 'Multi-firm CRM', 'Banking microservices'],
    },
    {
      name: 'Microservices',
      detail: 'Independent services, each with its own database and deployment.',
      usedIn: ['Banking microservices'],
    },
    {
      name: 'Event-driven',
      detail: 'Asynchronous communication with RabbitMQ; currently studying Kafka and Event Sourcing.',
      usedIn: ['Banking microservices'],
    },
    {
      name: 'Layered / MVC',
      detail: 'Controllers, services and repositories with clear responsibilities.',
      usedIn: ['Finance modules', 'Collections and contracts'],
    },
    {
      name: 'REST APIs',
      detail: 'Clear contracts between frontend, mobile apps and backend.',
      usedIn: ['Document management', 'Sports bookings', 'Multi-firm CRM'],
    },
    {
      name: 'Real time with WebSockets',
      detail: 'Notifications with Django Channels, Redis and JWT authentication.',
      usedIn: ['Multi-firm CRM'],
    },
  ],
  patterns: [
    {
      name: 'Strategy',
      detail: 'One generator per electronic document type.',
      usedIn: ['SRI invoicing'],
    },
    {
      name: 'Adapter',
      detail: 'The SRI SOAP web service sits behind our own interface.',
      usedIn: ['SRI invoicing'],
    },
    {
      name: 'Repository',
      detail: 'Data access decoupled from business logic.',
      usedIn: ['SRI invoicing', 'Multi-firm CRM'],
    },
    {
      name: 'Dependency injection',
      detail: 'Spring and NestJS wire the dependencies, which keeps code easy to test.',
      usedIn: ['Banking microservices', 'WhatsApp ride dispatch'],
    },
    {
      name: 'Observer / Pub-Sub',
      detail: 'Notifications and events without coupling publishers to subscribers.',
      usedIn: ['Multi-firm CRM', 'Banking microservices'],
    },
    {
      name: 'DTO',
      detail: 'Transfer objects so APIs never expose the domain model.',
      usedIn: ['Document management', 'Sports bookings'],
    },
  ],
};
