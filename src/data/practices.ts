import type { Practice } from '@/types/content';

export const practicesNote =
  'Fragmentos ilustrativos escritos para este portafolio: el código de los clientes es privado, pero las decisiones son las mismas.';

/**
 * Prácticas que se muestran en la sección "Cómo construyo software".
 * `lang` es el lenguaje para el resaltado de sintaxis (ts, java, python, sql, yaml…).
 */
export const practices: Practice[] = [
  {
    id: 'arquitectura',
    label: 'Arquitectura limpia',
    icon: 'layers',
    title: 'El negocio no depende del framework',
    why: 'Separo dominio, casos de uso e infraestructura. Las reglas viven en el dominio y se hablan con el exterior por puertos; la base de datos o el web service del SRI son adaptadores que se pueden cambiar o simular en pruebas sin tocar la lógica.',
    appliedIn: ['Facturación electrónica con el SRI', 'CRM y auditoría multi-firma', 'Microservicios bancarios'],
    principles: ['Inversión de dependencias', 'Puertos y adaptadores', 'Responsabilidad única'],
    filename: 'emitir-comprobante.use-case.ts',
    lang: 'ts',
    code: `export class EmitirComprobanteUseCase {
  constructor(
    private readonly comprobantes: ComprobanteRepository, // puerto
    private readonly sri: AutorizadorSri,                  // puerto
  ) {}

  async ejecutar(cmd: EmitirComprobanteCommand): Promise<Autorizacion> {
    const comprobante = Comprobante.crear(cmd); // reglas en el dominio
    const autorizacion = await this.sri.autorizar(comprobante);
    await this.comprobantes.guardar(comprobante.autorizado(autorizacion));
    return autorizacion;
  }
}`,
  },
  {
    id: 'patrones',
    label: 'Patrones de diseño',
    icon: 'cube',
    title: 'Strategy para cada tipo de comprobante',
    why: 'Facturas, notas de crédito y notas de débito comparten flujo pero no formato. Cada tipo es una estrategia registrada por Spring: agregar uno nuevo es crear una clase, no editar un switch (abierto/cerrado).',
    appliedIn: ['Facturación electrónica con el SRI', 'Módulos financieros e inventario'],
    principles: ['Strategy', 'Abierto/cerrado', 'Inyección de dependencias'],
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
    label: 'Tiempo real · Redis',
    icon: 'refresh',
    title: 'Notificaciones por WebSocket enrutadas por grupos',
    why: 'Redis funciona como capa de canales: reparte los mensajes entre todas las instancias del servidor. Cada conexión se autentica con JWT y se une solo a los grupos de su firma y su usuario, así nadie recibe datos de otra firma.',
    appliedIn: ['CRM y auditoría multi-firma'],
    principles: ['Pub/Sub', 'Autenticación JWT', 'Aislamiento por tenant'],
    filename: 'consumers.py',
    lang: 'python',
    code: `class NotificacionesConsumer(AsyncJsonWebsocketConsumer):
    async def connect(self):
        user = self.scope["user"]  # resuelto por el middleware JWT
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
    label: 'Eventos · RabbitMQ',
    icon: 'branch',
    title: 'Servicios que publican hechos, no que se llaman',
    why: 'El servicio de clientes publica "cliente creado" y el de cuentas reacciona. Ninguno conoce al otro: si uno cae, el mensaje espera en la cola. Hoy profundizo este enfoque con Kafka y Event Sourcing.',
    appliedIn: ['Microservicios bancarios'],
    principles: ['Arquitectura orientada a eventos', 'Bajo acoplamiento', 'Consistencia eventual'],
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
    label: 'Datos y rendimiento',
    icon: 'database',
    title: 'Índices pensados para la consulta real',
    why: 'Con OFFSET cada página cuesta más que la anterior. Un índice alineado con el filtro y el orden, más paginación por cursor, mantiene el costo constante. Así logré consultas 40% más rápidas sobre grandes volúmenes de datos fiscales.',
    appliedIn: ['Facturación electrónica con el SRI', 'Reportes del core financiero'],
    principles: ['Paginación por cursor', 'Índices compuestos', 'Medir antes de optimizar'],
    filename: 'comprobantes.sql',
    lang: 'sql',
    code: `CREATE INDEX ix_comprobantes_emisor_fecha
    ON comprobantes (emisor_id, fecha_emision DESC, id DESC)
    INCLUDE (estado, total);

-- Paginación por cursor: costo constante, sin OFFSET
SELECT TOP (50) id, fecha_emision, estado, total
FROM comprobantes
WHERE emisor_id = @emisor
  AND (fecha_emision < @ultima_fecha
       OR (fecha_emision = @ultima_fecha AND id < @ultimo_id))
ORDER BY fecha_emision DESC, id DESC;`,
  },
  {
    id: 'cloud',
    label: 'Cloud y CI/CD',
    icon: 'cloud',
    title: 'Nada llega a producción con pruebas en rojo',
    why: 'Cada push a main ejecuta pruebas, construye la imagen de Docker y despliega en AWS con credenciales temporales (sin claves guardadas en el repositorio). Desplegar deja de ser un evento y pasa a ser rutina.',
    appliedIn: ['CRM y auditoría multi-firma', 'Reservas de espacios deportivos'],
    principles: ['Integración continua', 'Infraestructura reproducible', 'Mínimo privilegio'],
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
