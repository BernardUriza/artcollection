import { useState } from 'react';
import './FICold.css';

function FICold() {
  const handleDemoClick = () => {
    alert('Demo en vivo: 30 min con IntakeCoach');
  };

  const handleContactClick = () => {
    alert('WhatsApp: [Por confirmar]\nEmail: bernard.uriza@free-intelligence.health');
  };

  const handleSpecsClick = () => {
    alert('Descarga especificaciones técnicas completas');
  };

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fi-cold">
      {/* HEADER */}
      <header className="fi-header">
        <div className="header-container">
          <div className="logo">FI Cold</div>
          <button onClick={scrollToContact} className="cta-header">
            Agendar Demo
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <span className="badge">🚀 Lanzamiento Limitado — 20% Descuento</span>
        <h1>
          IA Médica que <span className="highlight">vive en tu clínica</span>
        </h1>
        <p>Sin suscripciones. Sin datos en la nube. Sin riesgos de HIPAA.</p>
        <p style={{ fontSize: '1.1rem', color: '#999' }}>
          Documentación automática + Triaje inteligente + Cumplimiento NOM-004
        </p>

        <div>
          <button className="cta-primary" onClick={scrollToPricing}>
            Ver Precios
          </button>
          <button className="cta-secondary" onClick={handleDemoClick}>
            Ver Demo
          </button>
        </div>
      </section>

      {/* TRUST */}
      <div className="trust">
        <p>
          <strong>✅ NOM-004-SSA3-2012 Compliant</strong> |{' '}
          <strong>🔒 100% Local</strong> |{' '}
          <strong>⚡ 60 días implementación</strong> |{' '}
          <strong>📊 ROI 8-10 meses</strong>
        </p>
      </div>

      {/* PROBLEMAS */}
      <section className="section">
        <h2>Problemas Reales que Resolvemos</h2>
        <div className="grid">
          <div className="card">
            <div className="card-icon">⏱️</div>
            <h3>Documentación consume 30% del tiempo</h3>
            <p>
              Médicos escribiendo notas cuando deberían atender pacientes.
              IntakeCoach pre-recopila información automáticamente.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">🚨</div>
            <h3>Pacientes críticos sin prioridad</h3>
            <p>
              Triaje manual = errores. Nuestro sistema clasifica urgencia en
              tiempo real (CRITICAL/HIGH/MODERATE/LOW).
            </p>
          </div>
          <div className="card">
            <div className="card-icon">💾</div>
            <h3>Datos en la nube = riesgo legal</h3>
            <p>
              HIPAA, GDPR, NOM-024. FI Cold corre 100% local. Cero datos egress.
              Cero multas potenciales.
            </p>
          </div>
        </div>
      </section>

      {/* PROPUESTAS DE VALOR */}
      <section className="values">
        <div className="values-container">
          <h2>Por qué Médicos Confían en FI Cold</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>+40% Pacientes/Día</h3>
              <p>Sin contratar más personal. Mismo consultorio, más throughput.</p>
            </div>
            <div className="value-item">
              <h3>SOAP en 60 segundos</h3>
              <p>Notas completas, auditable, lista para firma. Zero toques manual.</p>
            </div>
            <div className="value-item">
              <h3>Seguridad Garantizada</h3>
              <p>
                Append-only logs. SHA256 audit trail. Cumplimiento automático.
              </p>
            </div>
            <div className="value-item">
              <h3>Tu Infraestructura</h3>
              <p>
                Hardware llave-en-mano. Datos siempre TUYOS. Portabilidad
                garantizada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="roi-section">
        <div className="roi-container">
          <div className="roi-grid">
            <div className="roi-text">
              <h2>ROI Medible en 8-10 Meses</h2>

              <div className="roi-metric">
                <div className="roi-number">+5 min/consulta</div>
                <div className="roi-label">
                  Ahorro documentación = 40 pacientes extras al mes
                </div>
              </div>

              <div className="roi-metric">
                <div className="roi-number">-60%</div>
                <div className="roi-label">
                  Errores triaje = cero casos críticos no detectados
                </div>
              </div>

              <div className="roi-metric">
                <div className="roi-number">$0</div>
                <div className="roi-label">
                  Costo mensual licencias cloud = eficiencia pura
                </div>
              </div>
            </div>

            <div className="roi-calculator">
              <h3 style={{ color: '#0066cc', marginBottom: '1.5rem' }}>
                Clínica de 5 Consultorios
              </h3>
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: '#0066cc',
                  marginBottom: '0.5rem',
                }}
              >
                $245,000 MXN
              </div>
              <div style={{ color: '#666', marginBottom: '2rem' }}>
                Inversión inicial (sin suscripciones)
              </div>
              <div
                style={{
                  textAlign: 'left',
                  color: '#555',
                  fontSize: '0.95rem',
                  lineHeight: 1.8,
                }}
              >
                <strong>Beneficio Año 1:</strong>
                <br />
                +480 pacientes = ~$96,000 MXN ingresos extra
                <br />
                <br />
                <strong>Breakeven:</strong> 8-10 meses
                <br />
                <strong>ROI Año 2:</strong> 150%+
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing-section" id="pricing">
        <div className="pricing-container">
          <h2>Opciones de Inversión</h2>
          <p
            style={{
              textAlign: 'center',
              color: '#666',
              fontSize: '1rem',
              marginBottom: '2rem',
            }}
          >
            Elige la que mejor se adapte a tu clínica
          </p>

          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Compra Completa</h3>
              <div className="price">$245K</div>
              <div className="price-period">Pago único</div>
              <ul>
                <li>Hardware (DELL + NAS)</li>
                <li>Software perpetuo</li>
                <li>Instalación on-site</li>
                <li>Capacitación 1 mes</li>
                <li>Soporte técnico incluido</li>
              </ul>
              <button onClick={handleContactClick}>Solicitar Demo</button>
            </div>

            <div className="pricing-card featured">
              <h3>⭐ Leasing 36 Meses</h3>
              <div className="price">$2,900</div>
              <div className="price-period">Mensual (Recomendado)</div>
              <ul>
                <li>Hardware incluido</li>
                <li>Software + updates</li>
                <li>Soporte técnico 24/7</li>
                <li>Mantenimiento preventivo</li>
                <li>Escalamiento ilimitado</li>
              </ul>
              <button onClick={handleContactClick}>Reservar Slot Piloto</button>
            </div>

            <div className="pricing-card">
              <h3>Ampliación</h3>
              <div className="price">$40K+</div>
              <div className="price-period">Por consultorio</div>
              <ul>
                <li>Hardware modular</li>
                <li>Integración inmediata</li>
                <li>Sin recapacitación</li>
                <li>Expansión sin límites</li>
                <li>Mismo soporte incluido</li>
              </ul>
              <button onClick={handleContactClick}>Consultar Escalamiento</button>
            </div>
          </div>

          <div className="launch-offer">
            <strong>🎁 Oferta Lanzamiento (hasta Dic 2025):</strong> 20%
            descuento en compra + primer mes gratis en leasing. Solo primeros 5
            pilotos.
          </div>
        </div>
      </section>

      {/* CASOS DE USO */}
      <section className="section">
        <h2>Casos de Éxito</h2>
        <div className="grid">
          <div className="card">
            <h3>🏥 Clínica Familiar (5 Consultorios)</h3>
            <p>
              <strong>Problema:</strong> 80 pacientes/día, documentación consume
              30% del tiempo.
            </p>
            <p>
              <strong>Resultado:</strong> +40 pacientes/día. ROI 8 meses.
            </p>
          </div>
          <div className="card">
            <h3>🚑 Urgencias 24/7</h3>
            <p>
              <strong>Problema:</strong> Triaje manual, pacientes críticos sin
              prioridad.
            </p>
            <p>
              <strong>Resultado:</strong> -60% tiempo triaje. Cero casos críticos
              no detectados.
            </p>
          </div>
          <div className="card">
            <h3>🧬 Laboratorio Clínico</h3>
            <p>
              <strong>Problema:</strong> Órdenes incompletas, llamadas de
              aclaración.
            </p>
            <p>
              <strong>Resultado:</strong> 95% órdenes completas a la primera. -40%
              llamadas.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-section" id="contacto">
        <h2>¿Listo para Transformar tu Clínica?</h2>
        <p>
          Agendar demo (30 min) → Ver IntakeCoach en acción → Decidir sin
          presión.
        </p>
        <div className="cta-buttons">
          <button className="cta-white" onClick={handleContactClick}>
            Agendar Demo Ahora
          </button>
          <button className="cta-white" onClick={handleSpecsClick}>
            Descargar Specs Técnicas
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="fi-footer">
        <div className="footer-links">
          <a href="#">Privacidad</a>
          <a href="#">Términos</a>
          <a href="#">Documentación</a>
          <a href="#">Blog Técnico</a>
        </div>
        <p>&copy; 2025 Free Intelligence. Inteligencia sin comprometer privacidad.</p>
        <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#999' }}>
          Diseñado en México | Implementado en tu clínica | Datos en tu control
        </p>
      </footer>
    </div>
  );
}

export default FICold;
