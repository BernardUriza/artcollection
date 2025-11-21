import { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Cloud, Server, DollarSign, Check, X, Minus } from 'lucide-react';
import './AurityCompetitors.css';

const AurityCompetitors = () => {
  const [expandedCompetitor, setExpandedCompetitor] = useState(null);

  const competitors = [
    {
      id: 1,
      name: 'Nuance DAX',
      category: 'Big Tech Healthcare',
      logo: 'Microsoft/Nuance',
      description: 'Documentación clínica ambient AI de Microsoft. Líder en transcripción médica con integración EHR.',
      deployment: 'cloud',
      pricing: '$$$$$',
      strengths: [
        'Integración profunda con EHRs (Epic, Cerner)',
        'ASR médico de alta precisión',
        'Marca establecida en hospitales',
        'Recursos de Microsoft detrás'
      ],
      weaknesses: [
        'Requiere conectividad constante',
        'PHI en cloud de terceros',
        'Pricing enterprise prohibitivo',
        'Sin opción on-premise real',
        'Lock-in con ecosistema Microsoft'
      ],
      aurityAdvantage: 'Aurity ofrece soberanía total de datos. Zero egreso, zero dependencia cloud.'
    },
    {
      id: 2,
      name: 'Suki AI',
      category: 'AI Medical Scribe',
      logo: 'Suki',
      description: 'Asistente de voz AI para documentación clínica. Voice-first approach con integraciones EHR.',
      deployment: 'cloud',
      pricing: '$$$$',
      strengths: [
        'UX voice-first muy pulida',
        'Rápida adopción por médicos',
        'Buenas integraciones EHR',
        'Funding significativo ($165M+)'
      ],
      weaknesses: [
        '100% cloud-dependent',
        'Sin capacidad on-premise',
        'PHI procesado en servidores externos',
        'Modelo de suscripción costoso',
        'Sin evidencia verificable/hash'
      ],
      aurityAdvantage: 'Aurity provee integridad criptográfica y evidencia auditable que Suki no ofrece.'
    },
    {
      id: 3,
      name: 'Nabla',
      category: 'AI Medical Scribe',
      logo: 'Nabla',
      description: 'Copilot médico europeo con ambient documentation. Enfoque en privacidad GDPR.',
      deployment: 'cloud',
      pricing: '$$$',
      strengths: [
        'Diseño GDPR-compliant',
        'UI moderna y limpia',
        'Modelo freemium disponible',
        'Buena adopción en Europa'
      ],
      weaknesses: [
        'Aún cloud-first aunque GDPR',
        'Sin opción on-premise',
        'Limitado en mercado LATAM',
        'Sin integridad criptográfica',
        'Dependencia de terceros para PHI'
      ],
      aurityAdvantage: 'Aurity cumple NOM-004/NOM-024 mexicana con despliegue 100% local.'
    },
    {
      id: 4,
      name: 'DeepScribe',
      category: 'AI Medical Scribe',
      logo: 'DeepScribe',
      description: 'AI scribe con modelo ambient que escucha consultas y genera notas automáticas.',
      deployment: 'cloud',
      pricing: '$$$$',
      strengths: [
        'Ambient AI muy preciso',
        'Buena adopción en especialidades',
        'Integración con EHRs populares',
        'Ahorra tiempo significativo'
      ],
      weaknesses: [
        'Solo cloud, sin on-premise',
        'PHI en servidores externos',
        'Requiere BAA y compliance externo',
        'Pricing por provider costoso',
        'Sin evidencia inmutable'
      ],
      aurityAdvantage: 'Aurity genera evidencia forense con hash SHA-256 que DeepScribe no puede ofrecer.'
    },
    {
      id: 5,
      name: 'Amazon HealthScribe',
      category: 'Big Tech Healthcare',
      logo: 'AWS',
      description: 'Servicio de transcripción médica de AWS. Integrado con ecosistema Amazon.',
      deployment: 'cloud',
      pricing: '$$$',
      strengths: [
        'Pricing por uso competitivo',
        'Infraestructura AWS robusta',
        'HIPAA compliant',
        'APIs bien documentadas'
      ],
      weaknesses: [
        '100% AWS cloud lock-in',
        'PHI en infraestructura Amazon',
        'Sin opción on-premise',
        'Requiere expertise AWS',
        'Costos variables impredecibles'
      ],
      aurityAdvantage: 'Aurity elimina dependencia de hyperscalers. Costos fijos y predecibles.'
    },
    {
      id: 6,
      name: 'Abridge',
      category: 'AI Medical Scribe',
      logo: 'Abridge',
      description: 'Documentación clínica AI con enfoque en conversaciones médico-paciente.',
      deployment: 'cloud',
      pricing: '$$$$',
      strengths: [
        'Experiencia conversacional natural',
        'Buenas integraciones EHR',
        'Funding sólido ($212M+)',
        'Partnerships con sistemas de salud'
      ],
      weaknesses: [
        'Solo disponible en cloud',
        'PHI procesado externamente',
        'Sin opción de despliegue local',
        'Pricing enterprise alto',
        'Sin cadena de evidencia verificable'
      ],
      aurityAdvantage: 'Aurity ofrece WORM lógico y manifests firmados para disputas legales.'
    },
    {
      id: 7,
      name: 'Soluciones EHR locales',
      category: 'Legacy/Traditional',
      logo: 'Legacy',
      description: 'Sistemas EHR tradicionales on-premise (ej. algunos hospitales con servidores propios).',
      deployment: 'on-premise',
      pricing: '$$',
      strengths: [
        'Control total de infraestructura',
        'Sin dependencia cloud',
        'Costos fijos conocidos',
        'Personal IT interno'
      ],
      weaknesses: [
        'Sin AI/ML integrado',
        'Mantenimiento costoso',
        'Sin transcripción automática',
        'UX anticuada',
        'Sin integridad criptográfica moderna'
      ],
      aurityAdvantage: 'Aurity moderniza con AI on-premise sin sacrificar soberanía de datos.'
    }
  ];

  const comparisonMatrix = [
    { feature: 'Despliegue On-Premise', aurity: true, nuance: false, suki: false, nabla: false, aws: false },
    { feature: 'Zero PHI en MVP', aurity: true, nuance: false, suki: false, nabla: false, aws: false },
    { feature: 'Hash SHA-256 por segmento', aurity: true, nuance: false, suki: false, nabla: false, aws: false },
    { feature: 'Manifest firmado auditable', aurity: true, nuance: false, suki: false, nabla: false, aws: false },
    { feature: 'WORM lógico', aurity: true, nuance: false, suki: false, nabla: false, aws: false },
    { feature: 'Sin egreso de datos', aurity: true, nuance: false, suki: false, nabla: false, aws: false },
    { feature: 'Cumplimiento NOM-004', aurity: true, nuance: 'partial', suki: 'partial', nabla: false, aws: 'partial' },
    { feature: 'Pricing predecible', aurity: true, nuance: false, suki: false, nabla: true, aws: false },
    { feature: 'ASR integrado', aurity: 'roadmap', nuance: true, suki: true, nabla: true, aws: true },
    { feature: 'Integración EHR', aurity: 'roadmap', nuance: true, suki: true, nabla: true, aws: true },
  ];

  const toggleExpanded = (id) => {
    setExpandedCompetitor(expandedCompetitor === id ? null : id);
  };

  const getDeploymentIcon = (deployment) => {
    return deployment === 'cloud' ? <Cloud size={16} /> : <Server size={16} />;
  };

  const getDeploymentClass = (deployment) => {
    return deployment === 'cloud' ? 'deployment-cloud' : 'deployment-onprem';
  };

  const renderFeatureStatus = (status) => {
    if (status === true) return <Check className="status-icon check" size={18} />;
    if (status === false) return <X className="status-icon x" size={18} />;
    if (status === 'partial') return <Minus className="status-icon partial" size={18} />;
    if (status === 'roadmap') return <span className="status-roadmap">Fase 2+</span>;
    return <Minus className="status-icon partial" size={18} />;
  };

  return (
    <div className="aurity-competitors">
      {/* Header */}
      <header className="competitors-header">
        <div className="header-badge">AURITY Intelligence</div>
        <h1>Analisis de Competidores</h1>
        <p className="header-subtitle">
          Landscape competitivo en documentacion clinica AI y sistemas de integridad medica
        </p>
      </header>

      {/* Executive Summary */}
      <section className="executive-summary">
        <h2>Resumen Ejecutivo</h2>
        <div className="summary-grid">
          <div className="summary-card">
            <div className="summary-icon">
              <Shield size={32} />
            </div>
            <h3>Posicionamiento Unico</h3>
            <p>
              Aurity es el <strong>unico player</strong> que combina AI medica con
              <strong> despliegue 100% on-premise</strong> e <strong>integridad criptografica</strong> verificable.
            </p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">
              <Server size={32} />
            </div>
            <h3>Gap de Mercado</h3>
            <p>
              Todos los competidores AI son <strong>cloud-first</strong>.
              No existe solucion que ofrezca soberania total de PHI con evidencia forense.
            </p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">
              <DollarSign size={32} />
            </div>
            <h3>Ventaja de Costo</h3>
            <p>
              Competidores cobran <strong>$300-800/provider/mes</strong>.
              Aurity ofrece modelo <strong>appliance + suscripcion fija</strong> mas predecible.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="comparison-section">
        <h2>Matriz Comparativa</h2>
        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th className="aurity-col">AURITY</th>
                <th>Nuance DAX</th>
                <th>Suki AI</th>
                <th>Nabla</th>
                <th>AWS HealthScribe</th>
              </tr>
            </thead>
            <tbody>
              {comparisonMatrix.map((row, index) => (
                <tr key={index}>
                  <td className="feature-name">{row.feature}</td>
                  <td className="aurity-col">{renderFeatureStatus(row.aurity)}</td>
                  <td>{renderFeatureStatus(row.nuance)}</td>
                  <td>{renderFeatureStatus(row.suki)}</td>
                  <td>{renderFeatureStatus(row.nabla)}</td>
                  <td>{renderFeatureStatus(row.aws)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Competitor Analysis */}
      <section className="competitors-list">
        <h2>Analisis Detallado por Competidor</h2>
        <div className="competitors-accordion">
          {competitors.map((competitor) => (
            <div
              key={competitor.id}
              className={`competitor-card ${expandedCompetitor === competitor.id ? 'expanded' : ''}`}
            >
              <button
                className="competitor-header"
                onClick={() => toggleExpanded(competitor.id)}
              >
                <div className="competitor-info">
                  <div className="competitor-logo">{competitor.logo}</div>
                  <div className="competitor-meta">
                    <h3>{competitor.name}</h3>
                    <span className="competitor-category">{competitor.category}</span>
                  </div>
                </div>
                <div className="competitor-tags">
                  <span className={`deployment-tag ${getDeploymentClass(competitor.deployment)}`}>
                    {getDeploymentIcon(competitor.deployment)}
                    {competitor.deployment === 'cloud' ? 'Cloud' : 'On-Premise'}
                  </span>
                  <span className="pricing-tag">{competitor.pricing}</span>
                </div>
                <div className="expand-icon">
                  {expandedCompetitor === competitor.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>

              {expandedCompetitor === competitor.id && (
                <div className="competitor-details">
                  <p className="competitor-description">{competitor.description}</p>

                  <div className="swot-grid">
                    <div className="swot-card strengths">
                      <h4>Fortalezas</h4>
                      <ul>
                        {competitor.strengths.map((strength, idx) => (
                          <li key={idx}>{strength}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="swot-card weaknesses">
                      <h4>Debilidades</h4>
                      <ul>
                        {competitor.weaknesses.map((weakness, idx) => (
                          <li key={idx}>{weakness}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="aurity-advantage">
                    <Shield size={20} />
                    <div>
                      <strong>Ventaja AURITY:</strong>
                      <p>{competitor.aurityAdvantage}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Market Positioning */}
      <section className="positioning-section">
        <h2>Posicionamiento de Mercado</h2>
        <div className="positioning-grid">
          <div className="quadrant-chart">
            <div className="quadrant-labels">
              <span className="label-top">Alta Soberania de Datos</span>
              <span className="label-bottom">Baja Soberania de Datos</span>
              <span className="label-left">Legacy/Manual</span>
              <span className="label-right">AI-Powered</span>
            </div>
            <div className="quadrant-content">
              <div className="quadrant q1">
                <div className="player aurity">AURITY</div>
              </div>
              <div className="quadrant q2">
                <div className="player legacy">EHR Legacy</div>
              </div>
              <div className="quadrant q3">
                <div className="player cloud-ai">Nuance</div>
                <div className="player cloud-ai">Suki</div>
                <div className="player cloud-ai">Abridge</div>
              </div>
              <div className="quadrant q4">
                <div className="player saas">SaaS basico</div>
              </div>
            </div>
          </div>
          <div className="positioning-insights">
            <h3>Insights Clave</h3>
            <ul>
              <li>
                <strong>Cuadrante vacio:</strong> No existe competidor que combine
                AI avanzado con soberania total on-premise.
              </li>
              <li>
                <strong>Todos cloud:</strong> Nuance, Suki, Abridge, DeepScribe
                requieren PHI en servidores externos.
              </li>
              <li>
                <strong>Legacy limitado:</strong> Soluciones on-premise existentes
                no tienen capacidades AI modernas.
              </li>
              <li>
                <strong>Oportunidad regulatoria:</strong> NOM-004 y tendencias de
                soberania de datos favorecen modelo Aurity.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="recommendations-section">
        <h2>Recomendaciones Estrategicas</h2>
        <div className="recommendations-grid">
          <div className="recommendation-card">
            <div className="rec-number">1</div>
            <h3>Diferenciacion por Integridad</h3>
            <p>
              Enfatizar la <strong>cadena de evidencia SHA-256</strong> y
              <strong> manifests firmados</strong> como diferenciador unico.
              Ningun competidor ofrece esto.
            </p>
          </div>
          <div className="recommendation-card">
            <div className="rec-number">2</div>
            <h3>Target: Hospitales con Compliance Estricto</h3>
            <p>
              Enfocarse en instituciones con <strong>requisitos NOM-004 estrictos</strong>
              o que han tenido <strong>incidentes de privacidad</strong> con soluciones cloud.
            </p>
          </div>
          <div className="recommendation-card">
            <div className="rec-number">3</div>
            <h3>Roadmap ASR Acelerado</h3>
            <p>
              Priorizar <strong>faster-whisper on-premise</strong> en Fase 2 para
              cerrar gap funcional con competidores en transcripcion.
            </p>
          </div>
          <div className="recommendation-card">
            <div className="rec-number">4</div>
            <h3>Caso de Uso: Disputas Legales</h3>
            <p>
              Posicionar como solucion para <strong>proteccion legal</strong> del medico.
              La evidencia inmutable es ventaja unica en litigios.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="competitors-footer">
        <p>AURITY Competitive Intelligence</p>
        <p>Documento interno · Actualizado: {new Date().toLocaleDateString('es-MX')}</p>
        <p className="doc-id">ID: f8a2c7e1-9d3b-4f6a-8e5c-2b1a0d9f4e3c</p>
      </footer>
    </div>
  );
};

export default AurityCompetitors;
