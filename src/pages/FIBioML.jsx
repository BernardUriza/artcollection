import React from 'react';
import { Github, Lock, Database, Code2, FileCheck, Shield, Layers, Terminal, ChevronRight, Download } from 'lucide-react';

const FIBioMLLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Terminal className="w-6 h-6 text-emerald-400" />
            <span className="text-xl font-mono font-bold">FI-core + BioML</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm hover:text-emerald-400 transition-colors">Features</a>
            <a href="#architecture" className="text-sm hover:text-emerald-400 transition-colors">Architecture</a>
            <a href="#collaborate" className="text-sm hover:text-emerald-400 transition-colors">Collaborate</a>
            <a href="https://github.com" className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-md transition-colors">
              <Github className="w-4 h-4" />
              <span className="text-sm">GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6">
              <span className="text-emerald-400 text-sm font-mono">Open Source Biomedical Infrastructure</span>
            </div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Simulación reproducible.<br />
              Custodia ética.<br />
              <span className="text-emerald-400">Cura verificable.</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-3xl">
              FI-core + BioML Adapter: infraestructura soberana para investigación del VIH.
              Simulaciones auditables, pipelines ML seguros, trazabilidad forense de datos genéticos y clínicos.
              Cada input, cada job, cada resultado: verificable.
            </p>
            <div className="flex items-center gap-4">
              <a href="#features" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold rounded-md transition-colors flex items-center gap-2">
                Explore la Arquitectura
                <ChevronRight className="w-4 h-4" />
              </a>
              <a href="https://github.com" className="px-6 py-3 border border-slate-700 hover:border-emerald-500 rounded-md transition-colors flex items-center gap-2">
                <Github className="w-4 h-4" />
                View Repository
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-6 border-y border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8">
          <div>
            <div className="text-3xl font-bold text-emerald-400 mb-2">SHA-256</div>
            <div className="text-sm text-slate-400">Por unidad mínima</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-400 mb-2">Zero-Trust</div>
            <div className="text-sm text-slate-400">Sandboxing estricto</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-400 mb-2">On-Prem</div>
            <div className="text-sm text-slate-400">NAS/edge deployment</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-400 mb-2">Forense</div>
            <div className="text-sm text-slate-400">Cadena de custodia</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Infraestructura de Integridad</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Gobernanza como código. Ética ejecutada. Memoria blindada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-emerald-500/50 transition-colors">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trazabilidad Total</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                SHA-256 + manifest.json por cada unidad. Encadenamiento tipo Merkle root.
                Cada resultado porta su procedencia completa.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-emerald-500/50 transition-colors">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">BioML Adapter</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Score, align, cluster, simulate. Pipelines reproducibles para reservorios virales,
                edición génica simulada, hipótesis de cura funcional.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-emerald-500/50 transition-colors">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Política Ética Automatizada</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Tasks permitidos/prohibidos como código. LLM en modo post-hoc explicativo,
                nunca decisor. Compliance by design.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-emerald-500/50 transition-colors">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sandboxing Estricto</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Containers verificados. Sin red. Solo lectura. Egreso controlado.
                Cada job corre en entorno inmutable y auditable.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-emerald-500/50 transition-colors">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Soberanía Computacional</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Deploy on-prem (NAS/edge). Nube como tránsito, nunca como memoria.
                Tus datos, tu hardware, tu jurisdicción.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-emerald-500/50 transition-colors">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Evidence Packs</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Export PDF/MD/ZIP firmables. Cada pack contiene datos, código, logs,
                hashes. Publicable, reproducible, defendible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Casos de Uso</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Investigación de cura del VIH con integridad computacional
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="p-6 bg-slate-950 border border-slate-800 rounded-lg">
              <div className="text-emerald-400 font-mono text-sm mb-2">CASE_001</div>
              <h3 className="text-xl font-semibold mb-3">Reactivación Viral "Kick and Kill"</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Simulaciones de latencia en reservorios CD4+ en memoria.
                Modelado de agentes latency-reversing (LRAs) con scoring de viabilidad celular.
              </p>
            </div>

            <div className="p-6 bg-slate-950 border border-slate-800 rounded-lg">
              <div className="text-emerald-400 font-mono text-sm mb-2">CASE_002</div>
              <h3 className="text-xl font-semibold mb-3">Edición Génica Simulada</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Evaluación virtual de terapia CCR5/CXCR4.
                Predicción de escape viral y fitness penalty bajo presión selectiva.
              </p>
            </div>

            <div className="p-6 bg-slate-950 border border-slate-800 rounded-lg">
              <div className="text-emerald-400 font-mono text-sm mb-2">CASE_003</div>
              <h3 className="text-xl font-semibold mb-3">Hipótesis de Cura Funcional</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Análisis de cohortes élite controllers.
                Clustering de perfiles inmunológicos y decay rates de reservorios.
              </p>
            </div>

            <div className="p-6 bg-slate-950 border border-slate-800 rounded-lg">
              <div className="text-emerald-400 font-mono text-sm mb-2">CASE_004</div>
              <h3 className="text-xl font-semibold mb-3">Reproducción de Experimentos</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Re-run de estudios publicados con datos sintéticos.
                Validación de claims con trazabilidad completa de artefactos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Preview */}
      <section id="architecture" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Arquitectura de Continuidad</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              No es un producto. Es una arquitectura de memoria y procedencia.
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-emerald-400">Input Layer</h3>
                <div className="space-y-2 text-sm text-slate-400 font-mono">
                  <div>→ Intake (capture)</div>
                  <div>→ Hash (SHA-256)</div>
                  <div>→ Manifest (JSON)</div>
                  <div>→ Validation</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-emerald-400">Processing Layer</h3>
                <div className="space-y-2 text-sm text-slate-400 font-mono">
                  <div>→ BioML Adapter</div>
                  <div>→ Sandboxed Jobs</div>
                  <div>→ Audit Logs</div>
                  <div>→ Policy Enforcement</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-emerald-400">Output Layer</h3>
                <div className="space-y-2 text-sm text-slate-400 font-mono">
                  <div>→ Evidence Pack</div>
                  <div>→ Merkle Chain</div>
                  <div>→ Export (PDF/MD)</div>
                  <div>→ Signature</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-400">
                  Storage: HDF5 + Append-Only Policy | Deployment: NAS/Edge | LLM: Post-hoc only
                </div>
                <a href="https://github.com" className="text-emerald-400 hover:text-emerald-300 text-sm flex items-center gap-2">
                  Ver Diagramas Completos
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Open Source */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Open Source?</h2>
          </div>

          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p className="text-lg">
              <strong className="text-emerald-400">FI-core no es un producto.</strong> Es una arquitectura de continuidad.
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

            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span><strong>Auditoría pública</strong> de políticas éticas y enforcement</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span><strong>Reproducibilidad</strong> sin dependencia de vendors</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span><strong>Soberanía</strong> computacional para laboratorios independientes</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span><strong>Evolución comunitaria</strong> sin agenda corporativa</span>
              </li>
            </ul>

            <p className="pt-4">
              El código es evidencia. La licencia es compromiso. La custodia es ética ejecutada.
            </p>

            <div className="pt-6 flex justify-center">
              <a href="https://github.com" className="px-6 py-3 bg-slate-950 border border-slate-700 hover:border-emerald-500 rounded-md transition-colors flex items-center gap-2">
                <Github className="w-5 h-5" />
                Read the LICENSE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call for Collaborators */}
      <section id="collaborate" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-lg p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Call for Collaborators</h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Buscamos científicos, activistas, biohackers, y desarrolladores comprometidos
                con infraestructura soberana para investigación del VIH.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 bg-slate-950/50 rounded-lg">
                  <h3 className="font-semibold mb-2 text-emerald-400">Científicos</h3>
                  <p className="text-sm text-slate-400">
                    Diseño de pipelines, validación de simulaciones, peer review
                  </p>
                </div>
                <div className="p-4 bg-slate-950/50 rounded-lg">
                  <h3 className="font-semibold mb-2 text-emerald-400">Activistas</h3>
                  <p className="text-sm text-slate-400">
                    Advocacy, ética computacional, governance design
                  </p>
                </div>
                <div className="p-4 bg-slate-950/50 rounded-lg">
                  <h3 className="font-semibold mb-2 text-emerald-400">Developers</h3>
                  <p className="text-sm text-slate-400">
                    Core infra, adapters, testing, documentation
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <a href="https://github.com" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold rounded-md transition-colors flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  Join on GitHub
                </a>
                <a href="mailto:contribute@fi-core.org" className="px-6 py-3 border border-slate-700 hover:border-emerald-500 rounded-md transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-5 h-5 text-emerald-400" />
                <span className="font-mono font-bold">FI-core</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Infraestructura soberana para investigación biomédica verificable.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Examples</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Roadmap</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm">Community</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">GitHub Discussions</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Contributor Guide</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Code of Conduct</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Security Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">License (AGPLv3)</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Use</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex items-center justify-between text-sm text-slate-400">
            <div>
              © 2025 FI-core Project. Built with purpose. Released as common good.
            </div>
            <div className="flex items-center gap-6">
              <a href="https://github.com" className="hover:text-emerald-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors font-mono text-xs">
                v0.3.0
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FIBioMLLanding;
