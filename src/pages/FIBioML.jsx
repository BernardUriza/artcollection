import React from 'react';
import { Github, Lock, Database, Code2, FileCheck, Shield, Layers, Terminal, ChevronRight, Download } from 'lucide-react';

const FIBioMLLanding = () => {
  const darkBg = '#020617';
  const primaryText = '#e2e8f0';
  const accentColor = '#4ade80';
  const accentDark = '#22c55e';
  const secondaryBg = '#0f172a';
  const tertiaryBg = '#1e293b';
  const borderColor = '#334155';

  const styles = {
    container: {
      minHeight: '100vh',
      background: `linear-gradient(to bottom, ${darkBg}, ${secondaryBg}, ${darkBg})`,
      color: primaryText,
    },
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      background: `${darkBg}CC`,
      backdropFilter: 'blur(12px)',
      borderBottom: `1px solid ${borderColor}`,
      zIndex: 50,
    },
    navContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '1rem 1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    navBrand: {
      display: 'flex',
      gap: '0.75rem',
      alignItems: 'center',
    },
    navBrandText: {
      fontSize: '1.25rem',
      fontFamily: 'monospace',
      fontWeight: 'bold',
      color: primaryText,
    },
    navLinks: {
      display: 'flex',
      gap: '1.5rem',
      alignItems: 'center',
    },
    navLink: {
      fontSize: '0.875rem',
      textDecoration: 'none',
      color: primaryText,
      transition: 'color 0.3s ease',
      cursor: 'pointer',
    },
    navLinkHover: {
      color: accentColor,
    },
    navButton: {
      display: 'flex',
      gap: '0.5rem',
      padding: '0.5rem 1rem',
      background: tertiaryBg,
      border: 'none',
      borderRadius: '0.375rem',
      cursor: 'pointer',
      alignItems: 'center',
      fontSize: '0.875rem',
      color: primaryText,
      transition: 'background 0.3s ease',
    },
    section: {
      padding: '2.5rem 1.5rem',
      maxWidth: '1280px',
      margin: '0 auto',
    },
    heroSection: {
      paddingTop: '10rem',
      paddingBottom: '5rem',
    },
    badge: {
      display: 'inline-block',
      padding: '0.5rem 1rem',
      background: `${accentColor}1A`,
      border: `1px solid ${accentColor}4D`,
      borderRadius: '9999px',
      marginBottom: '1.5rem',
    },
    badgeText: {
      color: accentColor,
      fontSize: '0.875rem',
      fontFamily: 'monospace',
    },
    h1: {
      fontSize: '3.75rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      lineHeight: 1.2,
    },
    h1Accent: {
      color: accentColor,
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#94a3b8',
      marginBottom: '2rem',
      lineHeight: 1.6,
      maxWidth: '48rem',
    },
    buttonGroup: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
    },
    buttonPrimary: {
      padding: '0.75rem 1.5rem',
      background: accentDark,
      border: 'none',
      borderRadius: '0.375rem',
      cursor: 'pointer',
      fontWeight: '600',
      color: darkBg,
      textDecoration: 'none',
      fontSize: '1rem',
      display: 'flex',
      gap: '0.5rem',
      alignItems: 'center',
      transition: 'background 0.3s ease',
    },
    buttonSecondary: {
      padding: '0.75rem 1.5rem',
      background: 'transparent',
      border: `1px solid ${borderColor}`,
      borderRadius: '0.375rem',
      cursor: 'pointer',
      color: primaryText,
      textDecoration: 'none',
      fontSize: '1rem',
      display: 'flex',
      gap: '0.5rem',
      alignItems: 'center',
      transition: 'all 0.3s ease',
    },
    statsSection: {
      padding: '3rem 1.5rem',
      borderTop: `1px solid ${borderColor}`,
      borderBottom: `1px solid ${borderColor}`,
    },
    statsGrid: {
      maxWidth: '1280px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '2rem',
    },
    statValue: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      color: accentColor,
      marginBottom: '0.5rem',
    },
    statLabel: {
      fontSize: '0.875rem',
      color: '#94a3b8',
    },
    featuresSection: {
      padding: '5rem 1.5rem',
    },
    sectionTitle: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      textAlign: 'center',
    },
    sectionSubtitle: {
      fontSize: '1.125rem',
      color: '#94a3b8',
      textAlign: 'center',
      maxWidth: '42rem',
      margin: '0 auto 4rem',
    },
    featuresGrid: {
      maxWidth: '1280px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '1.5rem',
    },
    featureCard: {
      padding: '1.5rem',
      background: `${secondaryBg}80`,
      border: `1px solid ${borderColor}`,
      borderRadius: '0.5rem',
      transition: 'all 0.3s ease',
    },
    featureIcon: {
      width: '3rem',
      height: '3rem',
      background: `${accentColor}1A`,
      borderRadius: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1rem',
    },
    featureTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '0.5rem',
    },
    featureText: {
      fontSize: '0.875rem',
      color: '#94a3b8',
      lineHeight: 1.6,
    },
    useCasesSection: {
      padding: '5rem 1.5rem',
      background: `${secondaryBg}4D`,
    },
    useCasesGrid: {
      maxWidth: '1280px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem',
    },
    useCaseCard: {
      padding: '1.5rem',
      background: darkBg,
      border: `1px solid ${borderColor}`,
      borderRadius: '0.5rem',
    },
    caseLabel: {
      color: accentColor,
      fontFamily: 'monospace',
      fontSize: '0.875rem',
      marginBottom: '0.5rem',
    },
    architectureSection: {
      padding: '5rem 1.5rem',
    },
    architectureBox: {
      background: darkBg,
      border: `1px solid ${borderColor}`,
      borderRadius: '0.5rem',
      padding: '2rem',
    },
    architectureGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
    },
    architectureCol: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    architectureTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: accentColor,
    },
    architectureList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      fontSize: '0.875rem',
      color: '#94a3b8',
      fontFamily: 'monospace',
    },
    whyOpenSection: {
      padding: '5rem 1.5rem',
      background: `${secondaryBg}4D`,
    },
    whyOpenContent: {
      maxWidth: '56rem',
      margin: '0 auto',
    },
    whyOpenText: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      color: '#cbd5e1',
      lineHeight: 1.8,
    },
    ulList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      marginLeft: '1.5rem',
    },
    liItem: {
      display: 'flex',
      gap: '0.75rem',
    },
    collaborateSection: {
      padding: '5rem 1.5rem',
    },
    collaborateBox: {
      background: `linear-gradient(to right, ${accentColor}1A, ${accentColor}0D)`,
      border: `1px solid ${accentColor}4D`,
      borderRadius: '0.5rem',
      padding: '3rem',
    },
    collaborateInner: {
      maxWidth: '48rem',
      margin: '0 auto',
      textAlign: 'center',
    },
    roleGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1.5rem',
      margin: '2rem 0',
    },
    roleCard: {
      padding: '1rem',
      background: `${darkBg}80`,
      borderRadius: '0.375rem',
    },
    footer: {
      padding: '3rem 1.5rem',
      borderTop: `1px solid ${borderColor}`,
    },
    footerGrid: {
      maxWidth: '1280px',
      margin: '0 auto 2rem',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2rem',
    },
    footerSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    footerTitle: {
      fontSize: '0.875rem',
      fontWeight: '600',
    },
    footerLinks: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      fontSize: '0.875rem',
    },
    footerLink: {
      color: '#94a3b8',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
    },
    footerBottom: {
      borderTop: `1px solid ${borderColor}`,
      paddingTop: '2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '0.875rem',
      color: '#64748b',
    },
  };

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <div style={styles.navBrand}>
            <Terminal color={accentColor} size={24} />
            <span style={styles.navBrandText}>FI-core + BioML</span>
          </div>
          <div style={styles.navLinks}>
            <a href="#features" style={styles.navLink}>Features</a>
            <a href="#architecture" style={styles.navLink}>Architecture</a>
            <a href="#collaborate" style={styles.navLink}>Collaborate</a>
            <button style={styles.navButton}>
              <Github size={16} />
              <span>GitHub</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ ...styles.section, ...styles.heroSection }}>
        <div style={{ maxWidth: '64rem' }}>
          <div style={styles.badge}>
            <span style={styles.badgeText}>Open Source Biomedical Infrastructure</span>
          </div>
          <h1 style={styles.h1}>
            Simulación reproducible.<br />
            Custodia ética.<br />
            <span style={styles.h1Accent}>Cura verificable.</span>
          </h1>
          <p style={styles.subtitle}>
            FI-core + BioML Adapter: infraestructura soberana para investigación del VIH.
            Simulaciones auditables, pipelines ML seguros, trazabilidad forense de datos genéticos y clínicos.
            Cada input, cada job, cada resultado: verificable.
          </p>
          <div style={styles.buttonGroup}>
            <a href="#features" style={styles.buttonPrimary}>
              Explore la Arquitectura
              <ChevronRight size={16} />
            </a>
            <a href="https://github.com" style={styles.buttonSecondary}>
              <Github size={16} />
              View Repository
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={styles.statsSection}>
        <div style={styles.statsGrid}>
          <div>
            <div style={styles.statValue}>SHA-256</div>
            <div style={styles.statLabel}>Por unidad mínima</div>
          </div>
          <div>
            <div style={styles.statValue}>Zero-Trust</div>
            <div style={styles.statLabel}>Sandboxing estricto</div>
          </div>
          <div>
            <div style={styles.statValue}>On-Prem</div>
            <div style={styles.statLabel}>NAS/edge deployment</div>
          </div>
          <div>
            <div style={styles.statValue}>Forense</div>
            <div style={styles.statLabel}>Cadena de custodia</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" style={{ ...styles.section, ...styles.featuresSection }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={styles.sectionTitle}>Infraestructura de Integridad</h2>
          <p style={styles.sectionSubtitle}>
            Gobernanza como código. Ética ejecutada. Memoria blindada.
          </p>
        </div>

        <div style={styles.featuresGrid}>
          {[
            { icon: FileCheck, title: 'Trazabilidad Total', desc: 'SHA-256 + manifest.json por cada unidad. Encadenamiento tipo Merkle root. Cada resultado porta su procedencia completa.' },
            { icon: Code2, title: 'BioML Adapter', desc: 'Score, align, cluster, simulate. Pipelines reproducibles para reservorios virales, edición génica simulada, hipótesis de cura funcional.' },
            { icon: Shield, title: 'Política Ética Automatizada', desc: 'Tasks permitidos/prohibidos como código. LLM en modo post-hoc explicativo, nunca decisor. Compliance by design.' },
            { icon: Lock, title: 'Sandboxing Estricto', desc: 'Containers verificados. Sin red. Solo lectura. Egreso controlado. Cada job corre en entorno inmutable y auditable.' },
            { icon: Database, title: 'Soberanía Computacional', desc: 'Deploy on-prem (NAS/edge). Nube como tránsito, nunca como memoria. Tus datos, tu hardware, tu jurisdicción.' },
            { icon: Layers, title: 'Evidence Packs', desc: 'Export PDF/MD/ZIP firmables. Cada pack contiene datos, código, logs, hashes. Publicable, reproducible, defendible.' },
          ].map((feature, idx) => (
            <div key={idx} style={styles.featureCard}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = accentColor}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = borderColor}>
              <div style={styles.featureIcon}>
                <feature.icon size={24} color={accentColor} />
              </div>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureText}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section style={{ ...styles.section, ...styles.useCasesSection }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={styles.sectionTitle}>Casos de Uso</h2>
          <p style={styles.sectionSubtitle}>
            Investigación de cura del VIH con integridad computacional
          </p>
        </div>

        <div style={styles.useCasesGrid}>
          {[
            { label: 'CASE_001', title: 'Reactivación Viral "Kick and Kill"', desc: 'Simulaciones de latencia en reservorios CD4+ en memoria. Modelado de agentes latency-reversing (LRAs) con scoring de viabilidad celular.' },
            { label: 'CASE_002', title: 'Edición Génica Simulada', desc: 'Evaluación virtual de terapia CCR5/CXCR4. Predicción de escape viral y fitness penalty bajo presión selectiva.' },
            { label: 'CASE_003', title: 'Hipótesis de Cura Funcional', desc: 'Análisis de cohortes élite controllers. Clustering de perfiles inmunológicos y decay rates de reservorios.' },
            { label: 'CASE_004', title: 'Reproducción de Experimentos', desc: 'Re-run de estudios publicados con datos sintéticos. Validación de claims con trazabilidad completa de artefactos.' },
          ].map((useCase, idx) => (
            <div key={idx} style={styles.useCaseCard}>
              <div style={styles.caseLabel}>{useCase.label}</div>
              <h3 style={styles.featureTitle}>{useCase.title}</h3>
              <p style={styles.featureText}>{useCase.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture Preview */}
      <section id="architecture" style={{ ...styles.section, ...styles.architectureSection }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={styles.sectionTitle}>Arquitectura de Continuidad</h2>
          <p style={styles.sectionSubtitle}>
            No es un producto. Es una arquitectura de memoria y procedencia.
          </p>
        </div>

        <div style={styles.architectureBox}>
          <div style={styles.architectureGrid}>
            <div style={styles.architectureCol}>
              <h3 style={styles.architectureTitle}>Input Layer</h3>
              <div style={styles.architectureList}>
                <div>→ Intake (capture)</div>
                <div>→ Hash (SHA-256)</div>
                <div>→ Manifest (JSON)</div>
                <div>→ Validation</div>
              </div>
            </div>

            <div style={styles.architectureCol}>
              <h3 style={styles.architectureTitle}>Processing Layer</h3>
              <div style={styles.architectureList}>
                <div>→ BioML Adapter</div>
                <div>→ Sandboxed Jobs</div>
                <div>→ Audit Logs</div>
                <div>→ Policy Enforcement</div>
              </div>
            </div>

            <div style={styles.architectureCol}>
              <h3 style={styles.architectureTitle}>Output Layer</h3>
              <div style={styles.architectureList}>
                <div>→ Evidence Pack</div>
                <div>→ Merkle Chain</div>
                <div>→ Export (PDF/MD)</div>
                <div>→ Signature</div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: `1px solid ${borderColor}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem', color: '#94a3b8' }}>
            <div>Storage: HDF5 + Append-Only Policy | Deployment: NAS/Edge | LLM: Post-hoc only</div>
            <a href="https://github.com" style={{ color: accentColor, textDecoration: 'none', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              Ver Diagramas Completos
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Why Open Source */}
      <section style={{ ...styles.section, ...styles.whyOpenSection }}>
        <div style={styles.whyOpenContent}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={styles.sectionTitle}>Why Open Source?</h2>
          </div>

          <div style={styles.whyOpenText}>
            <p style={{ fontSize: '1.125rem' }}>
              <strong style={{ color: accentColor }}>FI-core no es un producto.</strong> Es una arquitectura de continuidad.
              Construida en soledad, liberada como bien común.
            </p>

            <p>
              La investigación de cura del VIH requiere <strong>integridad informacional absoluta</strong>.
              Cada hipótesis, cada simulación, cada resultado debe ser trazable hasta su origen.
              No podemos delegar esto a cajas negras propietarias.
            </p>

            <p>
              Open source garantiza:
            </p>

            <ul style={styles.ulList}>
              <li style={styles.liItem}>
                <ChevronRight size={20} color={accentColor} style={{ flexShrink: 0 }} />
                <span><strong>Auditoría pública</strong> de políticas éticas y enforcement</span>
              </li>
              <li style={styles.liItem}>
                <ChevronRight size={20} color={accentColor} style={{ flexShrink: 0 }} />
                <span><strong>Reproducibilidad</strong> sin dependencia de vendors</span>
              </li>
              <li style={styles.liItem}>
                <ChevronRight size={20} color={accentColor} style={{ flexShrink: 0 }} />
                <span><strong>Soberanía</strong> computacional para laboratorios independientes</span>
              </li>
              <li style={styles.liItem}>
                <ChevronRight size={20} color={accentColor} style={{ flexShrink: 0 }} />
                <span><strong>Evolución comunitaria</strong> sin agenda corporativa</span>
              </li>
            </ul>

            <p style={{ paddingTop: '1rem' }}>
              El código es evidencia. La licencia es compromiso. La custodia es ética ejecutada.
            </p>

            <div style={{ paddingTop: '1.5rem', display: 'flex', justifyContent: 'center' }}>
              <a href="https://github.com" style={{ ...styles.buttonSecondary, gap: '0.5rem' }}>
                <Github size={20} />
                Read the LICENSE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call for Collaborators */}
      <section id="collaborate" style={{ ...styles.section, ...styles.collaborateSection }}>
        <div style={styles.collaborateBox}>
          <div style={styles.collaborateInner}>
            <h2 style={styles.sectionTitle}>Call for Collaborators</h2>
            <p style={{ fontSize: '1.25rem', color: '#cbd5e1', marginBottom: '2rem', lineHeight: 1.6 }}>
              Buscamos científicos, activistas, biohackers, y desarrolladores comprometidos
              con infraestructura soberana para investigación del VIH.
            </p>

            <div style={styles.roleGrid}>
              {[
                { title: 'Científicos', desc: 'Diseño de pipelines, validación de simulaciones, peer review' },
                { title: 'Activistas', desc: 'Advocacy, ética computacional, governance design' },
                { title: 'Developers', desc: 'Core infra, adapters, testing, documentation' },
              ].map((role, idx) => (
                <div key={idx} style={styles.roleCard}>
                  <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: accentColor }}>{role.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>{role.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <a href="https://github.com" style={styles.buttonPrimary}>
                <Github size={20} />
                Join on GitHub
              </a>
              <a href="mailto:contribute@fi-core.org" style={styles.buttonSecondary}>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerGrid}>
          <div style={styles.footerSection}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              <Terminal size={20} color={accentColor} />
              <span style={{ fontWeight: 'bold' }}>FI-core</span>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.6 }}>
              Infraestructura soberana para investigación biomédica verificable.
            </p>
          </div>

          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Resources</h4>
            <div style={styles.footerLinks}>
              <a href="#" style={styles.footerLink}>Documentation</a>
              <a href="#" style={styles.footerLink}>API Reference</a>
              <a href="#" style={styles.footerLink}>Examples</a>
              <a href="#" style={styles.footerLink}>Roadmap</a>
            </div>
          </div>

          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Community</h4>
            <div style={styles.footerLinks}>
              <a href="#" style={styles.footerLink}>GitHub Discussions</a>
              <a href="#" style={styles.footerLink}>Contributor Guide</a>
              <a href="#" style={styles.footerLink}>Code of Conduct</a>
              <a href="#" style={styles.footerLink}>Security Policy</a>
            </div>
          </div>

          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Legal</h4>
            <div style={styles.footerLinks}>
              <a href="#" style={styles.footerLink}>License (AGPLv3)</a>
              <a href="#" style={styles.footerLink}>Privacy Policy</a>
              <a href="#" style={styles.footerLink}>Terms of Use</a>
            </div>
          </div>
        </div>

        <div style={styles.footerBottom}>
          <div>
            © 2025 FI-core Project. Built with purpose. Released as common good.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href="https://github.com" style={{ textDecoration: 'none', color: '#94a3b8' }}>
              <Github size={20} />
            </a>
            <span style={{ fontFamily: 'monospace', fontSize: '0.75rem' }}>
              v0.3.0
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FIBioMLLanding;
