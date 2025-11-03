import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './AurityDeck.css';

const AurityDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "AURITY",
      tagline: "On-prem. On-record.",
      content: (
        <div className="slide-body">
          <div className="logo-placeholder">[Logo AURITY]</div>
          <p className="subtitle-large">Advanced Universal Reliable Intelligence for Telemedicine Yield</p>

          <div className="badges-container">
            <span className="badge primary">FI-core</span>
            <span className="badge primary">Zero-PHI MVP</span>
            <span className="badge primary">15 días</span>
          </div>

          <p className="demo-label">Demo técnica · Octubre 2025</p>
        </div>
      )
    },
    {
      title: "El problema operativo",
      content: (
        <div className="slide-body">
          <div className="grid-2">
            <div className="info-card">
              <h3>📋 Sin evidencia objetiva</h3>
              <p>Consultas y procedimientos sin registro verificable de lo que realmente ocurrió</p>
            </div>

            <div className="info-card">
              <h3>⏱️ Auditorías lentas</h3>
              <p>Reconstruir eventos toma días o semanas sin trazas estructuradas</p>
            </div>

            <div className="info-card">
              <h3>⚖️ Riesgo de disputas</h3>
              <p>Controversias médico-paciente sin respaldo objetivo de ambas partes</p>
            </div>

            <div className="info-card">
              <h3>🔒 Privacidad frágil</h3>
              <p>Soluciones cloud exponen PHI innecesariamente y pierden soberanía</p>
            </div>
          </div>

          <div className="callout-box primary">
            La memoria institucional se pierde o se vuelve subjetiva
          </div>
        </div>
      )
    },
    {
      title: "Nuestra tesis",
      content: (
        <div className="slide-body">
          <div className="callout-box primary large">
            "FI no es IA; es memoria verificable"
          </div>

          <div className="grid-2">
            <div>
              <h3 className="section-title negative">❌ No somos</h3>
              <ul className="feature-list">
                <li>Un oráculo diagnóstico</li>
                <li>Un reemplazo del médico</li>
                <li>Una solución cloud-first</li>
                <li>Un procesador de PHI en MVP</li>
              </ul>
            </div>

            <div>
              <h3 className="section-title positive">✅ Sí somos</h3>
              <ul className="feature-list">
                <li>Testigo operativo silencioso</li>
                <li>Registro inmutable con hash</li>
                <li>100% on-premise y soberano</li>
                <li>Evidencia para auditoría y calidad</li>
              </ul>
            </div>
          </div>

          <p className="key-points">
            <span className="highlight-text">Anti-oráculo</span> ·
            <span className="highlight-text">Soberanía</span> ·
            <span className="highlight-text">Integridad</span>
          </p>
        </div>
      )
    },
    {
      title: "MVP: 15 días de desarrollo",
      content: (
        <div className="slide-body">
          <div className="grid-3">
            <div className="info-card alert">
              <h3>🚫 Sin cámaras</h3>
              <p>Solo captura de texto y metadatos estructurados</p>
            </div>

            <div className="info-card alert">
              <h3>🚫 Sin PHI</h3>
              <p>IDs anonimizados, sin datos clínicos reales</p>
            </div>

            <div className="info-card alert">
              <h3>🚫 Sin ASR</h3>
              <p>Entrada manual simulada, sin transcripción</p>
            </div>
          </div>

          <h3 className="section-title">Componentes del MVP</h3>
          <div className="grid-2">
            <div className="info-card">
              <h3>💻 DELL con Docker</h3>
              <p>Simula NAS FI-core sin hardware dedicado</p>
            </div>

            <div className="info-card">
              <h3>📝 ConversationCapture</h3>
              <p>UI mínima para capturar sesiones estructuradas</p>
            </div>

            <div className="info-card">
              <h3>🎯 Triage Intake</h3>
              <p>Clasificación verde/amarillo/rojo por gravedad</p>
            </div>

            <div className="info-card">
              <h3>🔐 Hash + Manifests</h3>
              <p>SHA-256 por segmento + manifest.json como evidencia</p>
            </div>
          </div>

          <div className="callout-box success">
            Demo navegable con 3 casos de uso funcionando
          </div>
        </div>
      )
    },
    {
      title: "Flujo de la demo",
      content: (
        <div className="slide-body">
          <div className="flow-diagram">
            <div className="flow-step">
              <h3>1. Captar</h3>
              <p>Usuario ingresa datos de sesión en UI mínima</p>
            </div>

            <div className="flow-step">
              <h3>2. Firmar</h3>
              <p>Backend calcula hash SHA-256 + genera manifest.json</p>
            </div>

            <div className="flow-step">
              <h3>3. Evidenciar</h3>
              <p>Visualizar timeline, descargar PDF/MD con firma</p>
            </div>
          </div>

          <h3 className="section-title">Casos de demo</h3>
          <div className="grid-3">
            <div className="info-card success-border">
              <h3 className="text-success">🟢 Verde</h3>
              <p>Consulta rutinaria, sin hallazgos críticos, cierre normal</p>
            </div>

            <div className="info-card warning-border">
              <h3 className="text-warning">🟡 Amarillo</h3>
              <p>Requiere seguimiento, referencia a especialista</p>
            </div>

            <div className="info-card alert-border">
              <h3 className="text-alert">🔴 Rojo</h3>
              <p>Urgencia, derivación inmediata, protocolo activado</p>
            </div>
          </div>

          <p className="key-points">
            <span className="highlight-text">Navegable, verificable, exportable</span>
          </p>
        </div>
      )
    },
    {
      title: "Arquitectura del MVP",
      content: (
        <div className="slide-body">
          <div className="grid-4">
            <div className="info-card compact">
              <h3>🖥️ UI</h3>
              <p className="bold">React/Vue mínimo</p>
              <p className="small">Formulario captura + timeline visualización</p>
            </div>

            <div className="info-card compact">
              <h3>⚙️ Backend FI</h3>
              <p className="bold">Node.js/Python</p>
              <p className="small">API REST, lógica hash, generación manifests</p>
            </div>

            <div className="info-card compact">
              <h3>💾 Storage</h3>
              <p className="bold">Local filesystem</p>
              <p className="small">JSON + archivos hash por sesión</p>
            </div>

            <div className="info-card compact">
              <h3>🔐 Integridad</h3>
              <p className="bold">SHA-256</p>
              <p className="small">Hash por segmento + manifest firmado</p>
            </div>
          </div>

          <h3 className="section-title">Stack tecnológico</h3>
          <ul className="tech-list">
            <li><strong>Contenedor:</strong> Docker en DELL (simula NAS)</li>
            <li><strong>Frontend:</strong> React + TailwindCSS (opcional: Vue)</li>
            <li><strong>Backend:</strong> Node.js Express o FastAPI Python</li>
            <li><strong>Storage:</strong> filesystem local con estructura /sessions/{'{id}'}/</li>
            <li><strong>Hash:</strong> crypto.SHA256 nativo, manifest.json por sesión</li>
            <li><strong>Red:</strong> localhost o LAN privada, sin egreso</li>
          </ul>
        </div>
      )
    },
    {
      title: "Privacidad: Zero-PHI MVP",
      content: (
        <div className="slide-body">
          <div className="callout-box primary large">
            Sin PHI = sin HIPAA, sin NOM-024, sin BAA
          </div>

          <div className="grid-2">
            <div className="info-card">
              <h3>🔒 Políticas de egreso</h3>
              <p className="bold">egress=deny por defecto en firewall</p>
              <p className="small">Contenedor no puede salir a internet; solo LAN interna</p>
            </div>

            <div className="info-card">
              <h3>🚫 Sin nube</h3>
              <p className="bold">100% on-premise</p>
              <p className="small">Datos nunca salen del sitio; soberanía total del cliente</p>
            </div>

            <div className="info-card">
              <h3>🆔 IDs anonimizados</h3>
              <p className="bold">UUID v4 sin mapeo</p>
              <p className="small">Sesiones identificadas por ID aleatorio, sin vincular a paciente</p>
            </div>

            <div className="info-card">
              <h3>📝 Sin datos clínicos</h3>
              <p className="bold">Metadatos operativos</p>
              <p className="small">Timestamp, gravedad, duración; sin diagnósticos ni historiales</p>
            </div>
          </div>

          <h3 className="section-title">Roadmap de privacidad</h3>
          <ul className="feature-list">
            <li><strong>MVP:</strong> Zero-PHI, sin riesgo regulatorio</li>
            <li><strong>Fase 2:</strong> Opt-in PHI con consentimiento explícito y BAA firmado</li>
            <li><strong>Fase 3:</strong> Redacción automática (antes de captura) si PHI detectado</li>
          </ul>
        </div>
      )
    },
    {
      title: "Entregables del MVP",
      content: (
        <div className="slide-body">
          <div className="grid-3">
            <div className="info-card">
              <h3>📋 Pantalla captura</h3>
              <p>Formulario simple: ID sesión, gravedad, notas operativas, timestamp</p>
              <p className="highlight-text">Funcional y navegable</p>
            </div>

            <div className="info-card">
              <h3>📊 Pantalla timeline</h3>
              <p>Lista de sesiones con color (verde/amarillo/rojo), filtros por fecha/gravedad</p>
              <p className="highlight-text">Visualización clara</p>
            </div>

            <div className="info-card">
              <h3>📄 Descarga evidencia</h3>
              <p>PDF con manifest firmado + MD con segmentos y hashes</p>
              <p className="highlight-text">Auditable e imprimible</p>
            </div>
          </div>

          <h3 className="section-title">Estructura de evidencia</h3>
          <div className="info-card large">
            <p className="bold">manifest.json por sesión contiene:</p>
            <ul className="compact-list">
              <li>session_id (UUID)</li>
              <li>timestamp_utc (ISO 8601)</li>
              <li>severity (green/yellow/red)</li>
              <li>segments[] con hash SHA-256 cada uno</li>
              <li>manifest_hash (hash del manifest completo)</li>
            </ul>
          </div>

          <div className="callout-box success">
            Evidencia lista para auditoría desde día 1
          </div>
        </div>
      )
    },
    {
      title: "KPIs de éxito del MVP",
      content: (
        <div className="slide-body">
          <div className="grid-2">
            <div className="info-card success-border thick">
              <h3>⚡ Latencia p95 &lt; 800ms</h3>
              <p>Desde captura hasta hash generado y almacenado</p>
              <p className="small">Medido con 10 sesiones concurrentes</p>
            </div>

            <div className="info-card success-border thick">
              <h3>✅ 3 casos funcionando</h3>
              <p>Verde, amarillo, rojo navegables con evidencia completa</p>
              <p className="small">Exportación PDF/MD sin errores</p>
            </div>

            <div className="info-card success-border thick">
              <h3>🔐 100% integridad</h3>
              <p>Todos los segmentos con hash y manifest verificable</p>
              <p className="small">0 fallas en cadena de hashes</p>
            </div>

            <div className="info-card success-border thick">
              <h3>📦 Demo portable</h3>
              <p>Docker Compose up en &lt; 5 min en cualquier máquina</p>
              <p className="small">Sin dependencias cloud</p>
            </div>
          </div>

          <div className="callout-box primary large">
            Si cumplimos estos 4 KPIs → MVP exitoso y listo para Fase 2
          </div>
        </div>
      )
    },
    {
      title: "Roadmap post-MVP",
      content: (
        <div className="slide-body">
          <div className="timeline-container">
            <div className="timeline-item">
              <div className="timeline-badge">Fase 2</div>
              <div className="timeline-content">
                <h3>STT offline + LLM on-prem</h3>
                <p className="bold">faster-whisper para transcripción + Ollama para summarization local</p>
                <p className="small">Audio → texto → resumen, todo on-premise</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-badge">Fase 3</div>
              <div className="timeline-content">
                <h3>NAS real: Synology</h3>
                <p className="bold">DS923+ (1 sede) o RS4021xs+ (multi-sede)</p>
                <p className="small">WORM lógico, redundancia, backup automático</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-badge">Fase 4</div>
              <div className="timeline-content">
                <h3>Conectores HL7/FHIR</h3>
                <p className="bold">Interoperabilidad con NOM-024 y sistemas hospitalarios</p>
                <p className="small">Solo metadatos, sin mover PHI crudo</p>
              </div>
            </div>
          </div>

          <p className="key-points">
            <span className="highlight-text">Cada fase validada antes de avanzar</span>
          </p>
        </div>
      )
    },
    {
      title: "Modelo comercial",
      content: (
        <div className="slide-body">
          <div className="grid-2">
            <div className="info-card">
              <h3>🖥️ Appliance on-prem</h3>
              <p className="bold">Hardware incluido:</p>
              <ul className="compact-list small">
                <li>DS923+ o RS4021xs+ según escala</li>
                <li>Instalación y configuración inicial</li>
                <li>Capacitación de 1 día on-site</li>
              </ul>
              <p className="highlight-text pricing">Inversión inicial: USD $3,000-8,000</p>
            </div>

            <div className="info-card">
              <h3>💳 Suscripción modular</h3>
              <p className="bold">Por área o módulo:</p>
              <ul className="compact-list small">
                <li>ConversationCapture: $400-600/mes</li>
                <li>Triage Intake: incluido en base</li>
                <li>FI-Audit (Fase 3): +$200/mes</li>
                <li>Conectores HL7/FHIR: +$300/mes</li>
              </ul>
              <p className="highlight-text pricing">Incluye: soporte, updates, health-check trimestral</p>
            </div>
          </div>

          <h3 className="section-title">Paquetes</h3>
          <div className="grid-3">
            <div className="info-card">
              <h3>Starter</h3>
              <p>1 sede, DS923+, módulo base</p>
              <p className="price-tag success">~USD $500/mes</p>
            </div>

            <div className="info-card">
              <h3>Pro</h3>
              <p>2-3 sedes, bundle módulos</p>
              <p className="price-tag success">~USD $1,200/mes</p>
            </div>

            <div className="info-card">
              <h3>Enterprise</h3>
              <p>Multi-sede, RS4021xs+, todos los módulos</p>
              <p className="price-tag success">Custom pricing</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Plan de ejecución: 15 días",
      content: (
        <div className="slide-body">
          <div className="timeline-container">
            <div className="timeline-item">
              <div className="timeline-badge">D0-D3</div>
              <div className="timeline-content">
                <h3>Setup + Grooming</h3>
                <p>Docker Compose, boilerplate UI/backend, definición de manifest.json</p>
                <p className="small bold">D3: Grooming freeze — no más cambios de scope</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-badge">D4-D7</div>
              <div className="timeline-content">
                <h3>Desarrollo core</h3>
                <p>UI captura + backend hash + storage filesystem + 1 caso verde funcionando</p>
                <p className="small bold">D7: Demo intermedia — caso verde navegable</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-badge">D8-D12</div>
              <div className="timeline-content">
                <h3>Completar casos + exportación</h3>
                <p>Casos amarillo y rojo + timeline UI + exportación PDF/MD</p>
                <p className="small bold">D12: Code freeze — solo bugfixes</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-badge">D13-D15</div>
              <div className="timeline-content">
                <h3>QA + Demo final</h3>
                <p>Testing de los 3 casos, validación de KPIs, pulido de UX</p>
                <p className="small bold">D15: Demo completa — entrega a stakeholders</p>
              </div>
            </div>
          </div>

          <div className="callout-box warning">
            Crítico: respetar freezes en D3 y D12 para entregar a tiempo
          </div>
        </div>
      )
    },
    {
      title: "Riesgos y mitigación",
      content: (
        <div className="slide-body">
          <div className="grid-2">
            <div className="info-card alert-border">
              <h3 className="text-alert">⚠️ Scope creep</h3>
              <p><strong>Riesgo:</strong> añadir features no planificadas</p>
              <p><strong>Mitigación:</strong> grooming freeze D3, roadmap visible, "no" por defecto</p>
            </div>

            <div className="info-card alert-border">
              <h3 className="text-alert">⚠️ Fuga accidental PHI</h3>
              <p><strong>Riesgo:</strong> usuario ingresa datos sensibles en campo de notas</p>
              <p><strong>Mitigación:</strong> disclaimer en UI, logs auditados, sin persistencia cloud</p>
            </div>

            <div className="info-card alert-border">
              <h3 className="text-alert">⚠️ Pérdida de datos</h3>
              <p><strong>Riesgo:</strong> filesystem local sin backup</p>
              <p><strong>Mitigación:</strong> WORM lógico desde día 1, export automático a volumen montado</p>
            </div>

            <div className="info-card alert-border">
              <h3 className="text-alert">⚠️ Demo no portable</h3>
              <p><strong>Riesgo:</strong> dependencias no documentadas</p>
              <p><strong>Mitigación:</strong> Docker Compose con .env claro, README paso a paso</p>
            </div>
          </div>

          <h3 className="section-title">Hardening básico</h3>
          <ul className="feature-list">
            <li><strong>Firewall:</strong> egress=deny, solo puertos 80/443 LAN</li>
            <li><strong>Auth:</strong> JWT básico con expiración 1h (no OAuth en MVP)</li>
            <li><strong>Logs:</strong> append-only, con timestamp UTC y hash por línea</li>
            <li><strong>WORM lógico:</strong> archivos con chmod 444 post-escritura</li>
          </ul>
        </div>
      )
    },
    {
      title: "Siguiente paso",
      content: (
        <div className="slide-body center-content">
          <div className="callout-box primary extra-large">
            Pilotar en 1 sitio con LOI de 60 días
          </div>

          <div className="grid-2">
            <div className="info-card">
              <h3>📋 Entregables piloto</h3>
              <ul className="feature-list">
                <li>Demo funcionando en sitio cliente</li>
                <li>3 casos reales capturados y verificados</li>
                <li>Documentación de evidencia exportada</li>
                <li>Reporte de KPIs alcanzados</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>🎯 Criterios de éxito</h3>
              <ul className="feature-list">
                <li>Latencia p95 &lt; 800ms verificada</li>
                <li>0 fallas de integridad (hash-chain)</li>
                <li>Usuario puede exportar evidencia solo</li>
                <li>Stakeholder aprueba continuar a Fase 2</li>
              </ul>
            </div>
          </div>

          <div className="contact-box">
            <h3>Contacto</h3>
            <p className="contact-name">[Nombre contacto]</p>
            <p>[email@ejemplo.com]</p>
            <p>[+52 xxx xxx xxxx]</p>
          </div>

          <p className="cta-text">
            ¿Agendamos la siguiente reunión para definir sitio piloto?
          </p>
        </div>
      )
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="aurity-deck">
      <div className="aurity-slide-card">
        <div className="aurity-slide-content">
          <div className="aurity-slide-header">
            <h1 className="aurity-slide-title">{slides[currentSlide].title}</h1>
            {slides[currentSlide].tagline && (
              <p className="aurity-tagline">{slides[currentSlide].tagline}</p>
            )}
          </div>
          {slides[currentSlide].content}
        </div>

        <div className="aurity-slide-navigation">
          <button
            onClick={prevSlide}
            className="aurity-nav-button prev"
            disabled={currentSlide === 0}
          >
            <ChevronLeft size={20} />
            <span>Previous</span>
          </button>

          <div className="aurity-slide-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`aurity-indicator-dot ${index === currentSlide ? 'active' : ''}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="aurity-nav-button next"
            disabled={currentSlide === slides.length - 1}
          >
            <span>Next</span>
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="aurity-slide-counter">
          AURITY · FI-core — Slide {currentSlide + 1} of {slides.length}
        </div>
      </div>
    </div>
  );
};

export default AurityDeck;
