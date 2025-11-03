import React, { useState } from 'react';
import './LanguageWorkshop.css';

const LanguageWorkshop = () => {
  // Navigation state
  const [activeSection, setActiveSection] = useState('fundamentos');

  // Collapsible sections state
  const [collapsedSections, setCollapsedSections] = useState({});

  // Word counter state for compression exercise
  const [wordCount, setWordCount] = useState({ before: 0, after: 0 });

  // Toggle section collapse
  const toggleSection = (sectionId) => {
    setCollapsedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Count words in text
  const countWords = (text) => {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  };

  // Handle word count for compression exercise
  const handleTextChange = (field, value) => {
    setWordCount(prev => ({
      ...prev,
      [field]: countWords(value)
    }));
  };

  return (
    <div className="language-workshop">
      {/* Header */}
      <header className="workshop-header">
        <h1>Taller de Lenguaje de Alta Precisión</h1>
        <p className="subtitle">Herramientas para comunicación cristalina</p>
      </header>

      {/* Navigation */}
      <nav className="section-nav">
        <button
          className={`nav-pill ${activeSection === 'fundamentos' ? 'active' : ''}`}
          onClick={() => setActiveSection('fundamentos')}
        >
          Fundamentos
        </button>
        <button
          className={`nav-pill ${activeSection === 'techos' ? 'active' : ''}`}
          onClick={() => setActiveSection('techos')}
        >
          Techos
        </button>
        <button
          className={`nav-pill ${activeSection === 'triada' ? 'active' : ''}`}
          onClick={() => setActiveSection('triada')}
        >
          Triada
        </button>
        <button
          className={`nav-pill ${activeSection === 'herramientas' ? 'active' : ''}`}
          onClick={() => setActiveSection('herramientas')}
        >
          Herramientas
        </button>
        <button
          className={`nav-pill ${activeSection === 'estilo' ? 'active' : ''}`}
          onClick={() => setActiveSection('estilo')}
        >
          Estilo
        </button>
        <button
          className={`nav-pill ${activeSection === 'ejercicios' ? 'active' : ''}`}
          onClick={() => setActiveSection('ejercicios')}
        >
          Ejercicios
        </button>
        <button
          className={`nav-pill ${activeSection === 'limites' ? 'active' : ''}`}
          onClick={() => setActiveSection('limites')}
        >
          Límites
        </button>
      </nav>

      {/* Main Content */}
      <main className="workshop-content">
        {/* Fundamentos Section */}
        {activeSection === 'fundamentos' && (
          <section className="content-section fade-in">
            <h2>Fundamentos del Lenguaje de Alta Precisión</h2>

            <div className="principle-card">
              <h3>¿Qué es el Lenguaje de Alta Precisión?</h3>
              <p>Es un sistema de comunicación que maximiza la claridad y minimiza la ambigüedad mediante:</p>
              <ul>
                <li>Definición explícita de términos</li>
                <li>Estructura lógica clara</li>
                <li>Eliminación de redundancia</li>
                <li>Verificación de comprensión</li>
              </ul>
            </div>

            <div className="principle-card">
              <h3>Principios Core</h3>
              <div className="principle-grid">
                <div className="principle-item">
                  <strong>Claridad</strong>
                  <p>Cada palabra tiene un propósito específico</p>
                </div>
                <div className="principle-item">
                  <strong>Economía</strong>
                  <p>Sin palabras innecesarias</p>
                </div>
                <div className="principle-item">
                  <strong>Verificabilidad</strong>
                  <p>Las afirmaciones pueden confirmarse</p>
                </div>
                <div className="principle-item">
                  <strong>Estructura</strong>
                  <p>Organización lógica y coherente</p>
                </div>
              </div>
            </div>

            <div className="comparison-box">
              <h3>Antes y Después</h3>
              <div className="comparison-grid">
                <div className="before">
                  <h4>❌ Lenguaje Difuso</h4>
                  <p>"Creo que quizás deberíamos considerar la posibilidad de tal vez implementar algunas mejoras en el sistema cuando sea posible."</p>
                </div>
                <div className="after">
                  <h4>✓ Lenguaje Preciso</h4>
                  <p>"Propongo implementar tres mejoras específicas en el sistema antes del 15 de noviembre: [lista específica]."</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Techos Section */}
        {activeSection === 'techos' && (
          <section className="content-section fade-in">
            <h2>Techos de Cristal del Lenguaje</h2>
            <p className="section-intro">Patrones que limitan la precisión comunicativa</p>

            <div className="ceiling-card">
              <h3>🔴 Techo 1: Calificadores Débiles</h3>
              <div className="ceiling-content">
                <div className="problem">
                  <strong>Palabras que reducen precisión:</strong>
                  <ul>
                    <li>"Básicamente"</li>
                    <li>"Más o menos"</li>
                    <li>"Tipo"</li>
                    <li>"Como que"</li>
                    <li>"Algo así"</li>
                  </ul>
                </div>
                <div className="solution">
                  <strong>Alternativa:</strong>
                  <p>Eliminar o reemplazar con términos específicos</p>
                  <div className="example">
                    <p>❌ "Es básicamente un problema de comunicación"</p>
                    <p>✓ "Es un problema de comunicación causado por X, Y, Z"</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="ceiling-card">
              <h3>🔴 Techo 2: Generalización Excesiva</h3>
              <div className="ceiling-content">
                <div className="problem">
                  <strong>Palabras absolutas sin evidencia:</strong>
                  <ul>
                    <li>"Siempre"</li>
                    <li>"Nunca"</li>
                    <li>"Todo el mundo"</li>
                    <li>"Nadie"</li>
                    <li>"Todos"</li>
                  </ul>
                </div>
                <div className="solution">
                  <strong>Alternativa:</strong>
                  <p>Cuantificar o especificar el alcance</p>
                  <div className="example">
                    <p>❌ "Nadie usa ese método"</p>
                    <p>✓ "En una muestra de 50 usuarios, 0% usa ese método"</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="ceiling-card">
              <h3>🔴 Techo 3: Pasivas y Evasivas</h3>
              <div className="ceiling-content">
                <div className="problem">
                  <strong>Construcciones que ocultan responsabilidad:</strong>
                  <ul>
                    <li>"Se decidió que..."</li>
                    <li>"Hay quien piensa..."</li>
                    <li>"Se dice que..."</li>
                    <li>"Parece ser que..."</li>
                  </ul>
                </div>
                <div className="solution">
                  <strong>Alternativa:</strong>
                  <p>Identificar agente y acción específica</p>
                  <div className="example">
                    <p>❌ "Se decidió posponer el proyecto"</p>
                    <p>✓ "El equipo directivo decidió posponer el proyecto"</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="ceiling-card">
              <h3>🔴 Techo 4: Metáforas Sin Traducción</h3>
              <div className="ceiling-content">
                <div className="problem">
                  <strong>Usar figuras sin explicación literal:</strong>
                  <ul>
                    <li>"Pensar fuera de la caja"</li>
                    <li>"Dar el 110%"</li>
                    <li>"Tocar base"</li>
                    <li>"Alinearse con..."</li>
                  </ul>
                </div>
                <div className="solution">
                  <strong>Alternativa:</strong>
                  <p>Expresar el significado literal directamente</p>
                  <div className="example">
                    <p>❌ "Necesitamos pensar fuera de la caja"</p>
                    <p>✓ "Necesitamos considerar soluciones no tradicionales"</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="ceiling-card">
              <h3>🔴 Techo 5: Ambigüedad Temporal</h3>
              <div className="ceiling-content">
                <div className="problem">
                  <strong>Referencias temporales vagas:</strong>
                  <ul>
                    <li>"Pronto"</li>
                    <li>"Eventualmente"</li>
                    <li>"En el futuro cercano"</li>
                    <li>"Lo antes posible"</li>
                  </ul>
                </div>
                <div className="solution">
                  <strong>Alternativa:</strong>
                  <p>Especificar fechas o plazos concretos</p>
                  <div className="example">
                    <p>❌ "Lo terminaré pronto"</p>
                    <p>✓ "Lo terminaré antes del viernes 15 a las 17:00"</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Triada Section */}
        {activeSection === 'triada' && (
          <section className="content-section fade-in">
            <h2>La Tríada de Precisión</h2>
            <p className="section-intro">Tres pilares para comunicación efectiva</p>

            <div className="triad-container">
              <div className="triad-pillar">
                <div className="pillar-icon">1</div>
                <h3>Contexto Explícito</h3>
                <p className="pillar-description">Establecer el marco de referencia compartido</p>
                <div className="pillar-content">
                  <h4>Componentes:</h4>
                  <ul>
                    <li><strong>Audiencia:</strong> ¿Quién necesita entender?</li>
                    <li><strong>Propósito:</strong> ¿Para qué se comunica?</li>
                    <li><strong>Alcance:</strong> ¿Qué incluye y qué no?</li>
                    <li><strong>Supuestos:</strong> ¿Qué conocimiento previo se asume?</li>
                  </ul>
                  <div className="pillar-example">
                    <strong>Ejemplo:</strong>
                    <p>"Este documento está dirigido a desarrolladores con experiencia en React, con el propósito de implementar el nuevo sistema de autenticación antes del Q3. Cubre únicamente el flujo de login, no el registro."</p>
                  </div>
                </div>
              </div>

              <div className="triad-pillar">
                <div className="pillar-icon">2</div>
                <h3>Estructura Transparente</h3>
                <p className="pillar-description">Organización lógica y visible</p>
                <div className="pillar-content">
                  <h4>Componentes:</h4>
                  <ul>
                    <li><strong>Jerarquía clara:</strong> Niveles de información obvios</li>
                    <li><strong>Secuencia lógica:</strong> Orden que facilita comprensión</li>
                    <li><strong>Señalización:</strong> Indicadores de transición y relación</li>
                    <li><strong>Sumarios:</strong> Resúmenes en puntos clave</li>
                  </ul>
                  <div className="pillar-example">
                    <strong>Estructura tipo:</strong>
                    <ol>
                      <li>Contexto (qué y por qué)</li>
                      <li>Análisis (situación actual)</li>
                      <li>Propuesta (solución específica)</li>
                      <li>Acción (siguientes pasos concretos)</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="triad-pillar">
                <div className="pillar-icon">3</div>
                <h3>Verificación Activa</h3>
                <p className="pillar-description">Confirmar comprensión mutua</p>
                <div className="pillar-content">
                  <h4>Componentes:</h4>
                  <ul>
                    <li><strong>Puntos de control:</strong> Pausas para verificar entendimiento</li>
                    <li><strong>Reformulación:</strong> Pedir que repitan con sus palabras</li>
                    <li><strong>Ejemplos concretos:</strong> Ilustrar con casos específicos</li>
                    <li><strong>Preguntas dirigidas:</strong> Confirmar elementos críticos</li>
                  </ul>
                  <div className="pillar-example">
                    <strong>Técnicas:</strong>
                    <ul>
                      <li>"¿Qué entiendes por X?"</li>
                      <li>"Dame un ejemplo de cómo aplicarías esto"</li>
                      <li>"Explícame el proceso en tus palabras"</li>
                      <li>"¿Qué preguntas tienes sobre Y?"</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="triad-integration">
              <h3>Integración de la Tríada</h3>
              <p>Los tres pilares trabajan juntos:</p>
              <div className="integration-flow">
                <div className="flow-step">
                  <strong>1. Contexto Explícito</strong>
                  <p>↓</p>
                  <em>Establece el marco</em>
                </div>
                <div className="flow-step">
                  <strong>2. Estructura Transparente</strong>
                  <p>↓</p>
                  <em>Organiza la información</em>
                </div>
                <div className="flow-step">
                  <strong>3. Verificación Activa</strong>
                  <p>↓</p>
                  <em>Confirma comprensión</em>
                </div>
                <div className="flow-step">
                  <strong>✓ Comunicación Precisa</strong>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Herramientas Section */}
        {activeSection === 'herramientas' && (
          <section className="content-section fade-in">
            <h2>Herramientas Prácticas</h2>

            <div className={`tool-card ${collapsedSections['tool1'] ? 'collapsed' : ''}`}>
              <h3 onClick={() => toggleSection('tool1')}>
                <span className="collapse-icon">{collapsedSections['tool1'] ? '▶' : '▼'}</span>
                1. El Protocolo de Definición
              </h3>
              {!collapsedSections['tool1'] && (
                <div className="tool-content">
                  <p><strong>Cuándo usar:</strong> Al introducir términos técnicos, conceptos nuevos o palabras con múltiples interpretaciones.</p>
                  <div className="tool-template">
                    <h4>Template:</h4>
                    <pre>{`[Término]: Definido como [definición específica]
En este contexto significa: [ejemplo concreto]
No incluye: [límites de la definición]`}</pre>
                  </div>
                  <div className="tool-example">
                    <h4>Ejemplo:</h4>
                    <p><strong>Alta Prioridad:</strong> Definido como tareas que bloquean el progreso de otros equipos.</p>
                    <p>En este contexto significa: Debe completarse en las próximas 48 horas.</p>
                    <p>No incluye: Tareas urgentes para un solo equipo sin dependencias externas.</p>
                  </div>
                </div>
              )}
            </div>

            <div className={`tool-card ${collapsedSections['tool2'] ? 'collapsed' : ''}`}>
              <h3 onClick={() => toggleSection('tool2')}>
                <span className="collapse-icon">{collapsedSections['tool2'] ? '▶' : '▼'}</span>
                2. La Matriz de Especificidad
              </h3>
              {!collapsedSections['tool2'] && (
                <div className="tool-content">
                  <p><strong>Cuándo usar:</strong> Para transformar declaraciones vagas en específicas.</p>
                  <table className="specificity-matrix">
                    <thead>
                      <tr>
                        <th>Dimensión</th>
                        <th>Vago</th>
                        <th>Específico</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Tiempo</td>
                        <td>"Pronto"</td>
                        <td>"Viernes 15, 14:00"</td>
                      </tr>
                      <tr>
                        <td>Cantidad</td>
                        <td>"Varios"</td>
                        <td>"7 usuarios"</td>
                      </tr>
                      <tr>
                        <td>Calidad</td>
                        <td>"Bueno"</td>
                        <td>"95% de precisión"</td>
                      </tr>
                      <tr>
                        <td>Quién</td>
                        <td>"El equipo"</td>
                        <td>"María, Juan, Ana"</td>
                      </tr>
                      <tr>
                        <td>Dónde</td>
                        <td>"Ahí"</td>
                        <td>"Sala 3, piso 2"</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <div className={`tool-card ${collapsedSections['tool3'] ? 'collapsed' : ''}`}>
              <h3 onClick={() => toggleSection('tool3')}>
                <span className="collapse-icon">{collapsedSections['tool3'] ? '▶' : '▼'}</span>
                3. El Checklist de Claridad
              </h3>
              {!collapsedSections['tool3'] && (
                <div className="tool-content">
                  <p><strong>Cuándo usar:</strong> Antes de enviar comunicaciones importantes.</p>
                  <div className="checklist">
                    <label>
                      <input type="checkbox" />
                      ¿Cada término clave está definido?
                    </label>
                    <label>
                      <input type="checkbox" />
                      ¿Todas las referencias temporales son específicas?
                    </label>
                    <label>
                      <input type="checkbox" />
                      ¿Los responsables están identificados por nombre?
                    </label>
                    <label>
                      <input type="checkbox" />
                      ¿Las acciones tienen verbos concretos?
                    </label>
                    <label>
                      <input type="checkbox" />
                      ¿Los números y métricas están cuantificados?
                    </label>
                    <label>
                      <input type="checkbox" />
                      ¿Eliminé calificadores débiles innecesarios?
                    </label>
                    <label>
                      <input type="checkbox" />
                      ¿La estructura es visible y lógica?
                    </label>
                    <label>
                      <input type="checkbox" />
                      ¿Incluí mecanismos de verificación?
                    </label>
                  </div>
                </div>
              )}
            </div>

            <div className={`tool-card ${collapsedSections['tool4'] ? 'collapsed' : ''}`}>
              <h3 onClick={() => toggleSection('tool4')}>
                <span className="collapse-icon">{collapsedSections['tool4'] ? '▶' : '▼'}</span>
                4. El Patrón de Acción Clara
              </h3>
              {!collapsedSections['tool4'] && (
                <div className="tool-content">
                  <p><strong>Cuándo usar:</strong> Para delegar tareas o establecer compromisos.</p>
                  <div className="tool-template">
                    <h4>Template:</h4>
                    <pre>{`[Quién] [Verbo específico] [Qué exactamente] [Cuándo] [Dónde/Cómo]
Criterio de éxito: [Cómo sabré que está completo]
Punto de verificación: [Cuándo revisaremos progreso]`}</pre>
                  </div>
                  <div className="tool-example">
                    <h4>Ejemplo:</h4>
                    <p>María implementará el componente de login usando React en el repositorio frontend antes del 20/nov a las 17:00.</p>
                    <p><strong>Criterio de éxito:</strong> Usuario puede autenticarse con email/password y recibir token JWT.</p>
                    <p><strong>Punto de verificación:</strong> Revisión de código el 18/nov a las 10:00.</p>
                  </div>
                </div>
              )}
            </div>

            <div className={`tool-card ${collapsedSections['tool5'] ? 'collapsed' : ''}`}>
              <h3 onClick={() => toggleSection('tool5')}>
                <span className="collapse-icon">{collapsedSections['tool5'] ? '▶' : '▼'}</span>
                5. La Técnica de Compresión Iterativa
              </h3>
              {!collapsedSections['tool5'] && (
                <div className="tool-content">
                  <p><strong>Cuándo usar:</strong> Para eliminar redundancia manteniendo claridad.</p>
                  <div className="compression-steps">
                    <div className="step">
                      <strong>Paso 1:</strong> Escribe versión completa sin restricciones
                    </div>
                    <div className="step">
                      <strong>Paso 2:</strong> Identifica palabras que no cambian el significado
                    </div>
                    <div className="step">
                      <strong>Paso 3:</strong> Elimina o fusiona conceptos repetidos
                    </div>
                    <div className="step">
                      <strong>Paso 4:</strong> Reemplaza frases por términos precisos
                    </div>
                    <div className="step">
                      <strong>Paso 5:</strong> Verifica que mantiene la precisión
                    </div>
                  </div>
                  <div className="compression-example">
                    <div className="version">
                      <strong>Original (45 palabras):</strong>
                      <p>"En mi opinión personal, creo que sería una buena idea que consideráramos la posibilidad de implementar un sistema que nos permita hacer un seguimiento del progreso de los proyectos en tiempo real."</p>
                    </div>
                    <div className="version">
                      <strong>Comprimido (8 palabras):</strong>
                      <p>"Propongo implementar seguimiento de proyectos en tiempo real."</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Estilo Section */}
        {activeSection === 'estilo' && (
          <section className="content-section fade-in">
            <h2>Guía de Estilo</h2>

            <div className="style-category">
              <h3>Verbos de Acción Preferidos</h3>
              <div className="verb-grid">
                <div className="verb-group">
                  <h4>En lugar de "hacer":</h4>
                  <ul>
                    <li>Implementar</li>
                    <li>Desarrollar</li>
                    <li>Ejecutar</li>
                    <li>Construir</li>
                    <li>Crear</li>
                  </ul>
                </div>
                <div className="verb-group">
                  <h4>En lugar de "mejorar":</h4>
                  <ul>
                    <li>Optimizar</li>
                    <li>Refactorizar</li>
                    <li>Incrementar</li>
                    <li>Reducir (latencia/errores)</li>
                    <li>Aumentar (rendimiento)</li>
                  </ul>
                </div>
                <div className="verb-group">
                  <h4>En lugar de "cambiar":</h4>
                  <ul>
                    <li>Modificar</li>
                    <li>Actualizar</li>
                    <li>Reemplazar</li>
                    <li>Transformar</li>
                    <li>Migrar</li>
                  </ul>
                </div>
                <div className="verb-group">
                  <h4>En lugar de "revisar":</h4>
                  <ul>
                    <li>Analizar</li>
                    <li>Evaluar</li>
                    <li>Auditar</li>
                    <li>Inspeccionar</li>
                    <li>Validar</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="style-category">
              <h3>Adjetivos Cuantificables</h3>
              <table className="quantifiable-table">
                <thead>
                  <tr>
                    <th>Evitar</th>
                    <th>Preferir</th>
                    <th>Ejemplo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Rápido</td>
                    <td>X ms de latencia</td>
                    <td>50ms de latencia</td>
                  </tr>
                  <tr>
                    <td>Lento</td>
                    <td>X segundos de respuesta</td>
                    <td>3.5 segundos de respuesta</td>
                  </tr>
                  <tr>
                    <td>Grande</td>
                    <td>X MB/GB/usuarios</td>
                    <td>500MB de memoria</td>
                  </tr>
                  <tr>
                    <td>Pequeño</td>
                    <td>X KB/líneas/funciones</td>
                    <td>150 líneas de código</td>
                  </tr>
                  <tr>
                    <td>Mucho</td>
                    <td>X cantidad específica</td>
                    <td>1,200 usuarios activos</td>
                  </tr>
                  <tr>
                    <td>Poco</td>
                    <td>X cantidad específica</td>
                    <td>3 instancias reportadas</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="style-category">
              <h3>Estructura de Oraciones</h3>
              <div className="sentence-rules">
                <div className="rule">
                  <strong>✓ Sujeto + Verbo + Objeto</strong>
                  <p>El desarrollador implementó la funcionalidad.</p>
                </div>
                <div className="rule">
                  <strong>✓ Voz activa sobre pasiva</strong>
                  <p>"El equipo aprobó el cambio" vs "El cambio fue aprobado"</p>
                </div>
                <div className="rule">
                  <strong>✓ Una idea por oración</strong>
                  <p>Divide oraciones complejas en múltiples simples.</p>
                </div>
                <div className="rule">
                  <strong>✓ Máximo 20 palabras por oración</strong>
                  <p>Si excedes, probablemente puedes dividir en dos.</p>
                </div>
              </div>
            </div>

            <div className="style-category">
              <h3>Patrones de Párrafo</h3>
              <div className="paragraph-pattern">
                <h4>Patrón Afirmación-Evidencia-Implicación (AEI)</h4>
                <ol>
                  <li><strong>Afirmación:</strong> Declara el punto principal</li>
                  <li><strong>Evidencia:</strong> Proporciona datos o ejemplos</li>
                  <li><strong>Implicación:</strong> Explica por qué importa</li>
                </ol>
                <div className="pattern-example">
                  <p><strong>Afirmación:</strong> El sistema actual tiene problemas de escalabilidad.</p>
                  <p><strong>Evidencia:</strong> Con 1,000 usuarios concurrentes, el tiempo de respuesta aumenta a 8 segundos.</p>
                  <p><strong>Implicación:</strong> Esto resultará en pérdida de usuarios cuando lancemos la campaña de marketing el próximo mes.</p>
                </div>
              </div>
            </div>

            <div className="style-category">
              <h3>Formato Visual</h3>
              <ul className="format-tips">
                <li><strong>Listas con viñetas:</strong> Para items sin orden específico</li>
                <li><strong>Listas numeradas:</strong> Para secuencias o prioridades</li>
                <li><strong>Tablas:</strong> Para comparaciones o datos estructurados</li>
                <li><strong>Negritas:</strong> Para términos clave (máximo 3 por párrafo)</li>
                <li><strong>Espaciado:</strong> Línea en blanco entre conceptos distintos</li>
                <li><strong>Encabezados:</strong> Jerarquía clara (H1 &gt; H2 &gt; H3)</li>
              </ul>
            </div>
          </section>
        )}

        {/* Ejercicios Section */}
        {activeSection === 'ejercicios' && (
          <section className="content-section fade-in">
            <h2>Ejercicios Prácticos</h2>

            <div className="exercise-card">
              <h3>Ejercicio 1: Eliminación de Techos</h3>
              <p>Reescribe las siguientes frases eliminando los techos de cristal:</p>
              <div className="exercise-item">
                <p className="prompt">1. "Básicamente, creo que tal vez deberíamos considerar actualizar el sistema pronto."</p>
                <textarea
                  placeholder="Tu versión mejorada aquí..."
                  rows="3"
                />
              </div>
              <div className="exercise-item">
                <p className="prompt">2. "Todo el mundo sabe que nadie usa esa funcionalidad."</p>
                <textarea
                  placeholder="Tu versión mejorada aquí..."
                  rows="3"
                />
              </div>
              <div className="exercise-item">
                <p className="prompt">3. "Se decidió que hay que pensar fuera de la caja para resolver esto lo antes posible."</p>
                <textarea
                  placeholder="Tu versión mejorada aquí..."
                  rows="3"
                />
              </div>
            </div>

            <div className="exercise-card">
              <h3>Ejercicio 2: Aplicación de la Matriz de Especificidad</h3>
              <p>Convierte estas declaraciones vagas en específicas:</p>
              <div className="exercise-item">
                <p className="prompt">1. "El proyecto va bien y lo terminaremos pronto."</p>
                <textarea
                  placeholder="Versión específica (incluye métricas, fechas, criterios)..."
                  rows="3"
                />
              </div>
              <div className="exercise-item">
                <p className="prompt">2. "Necesitamos mejorar el rendimiento del sistema."</p>
                <textarea
                  placeholder="Versión específica (incluye métricas actuales, objetivo, plazo)..."
                  rows="3"
                />
              </div>
            </div>

            <div className="exercise-card">
              <h3>Ejercicio 3: Compresión sin Pérdida</h3>
              <p>Reduce el texto manteniendo toda la información crítica:</p>
              <div className="compression-exercise">
                <div className="compression-input">
                  <label>Texto original:</label>
                  <textarea
                    placeholder="Pega o escribe un texto largo aquí..."
                    rows="5"
                    onChange={(e) => handleTextChange('before', e.target.value)}
                  />
                  <span className="word-count">Palabras: {wordCount.before}</span>
                </div>
                <div className="compression-input">
                  <label>Versión comprimida:</label>
                  <textarea
                    placeholder="Escribe la versión comprimida aquí..."
                    rows="5"
                    onChange={(e) => handleTextChange('after', e.target.value)}
                  />
                  <span className="word-count">Palabras: {wordCount.after}</span>
                </div>
                <div className="compression-result">
                  <strong>Reducción: </strong>
                  {wordCount.before > 0 ? (
                    <span>{Math.round((1 - wordCount.after / wordCount.before) * 100)}%</span>
                  ) : (
                    <span>0%</span>
                  )}
                </div>
              </div>
            </div>

            <div className="exercise-card">
              <h3>Ejercicio 4: Definición de Términos</h3>
              <p>Usa el Protocolo de Definición para estos términos ambiguos:</p>
              <div className="exercise-item">
                <p className="prompt">Define "Urgente" en tu contexto de trabajo:</p>
                <textarea
                  placeholder="[Término]: Definido como...\nEn este contexto significa...\nNo incluye..."
                  rows="4"
                />
              </div>
              <div className="exercise-item">
                <p className="prompt">Define "Calidad" para tu proyecto actual:</p>
                <textarea
                  placeholder="[Término]: Definido como...\nEn este contexto significa...\nNo incluye..."
                  rows="4"
                />
              </div>
            </div>

            <div className="exercise-card">
              <h3>Ejercicio 5: Patrón de Acción Clara</h3>
              <p>Convierte estas solicitudes vagas en acciones claras:</p>
              <div className="exercise-item">
                <p className="prompt">"Alguien debería revisar el código del módulo de pagos."</p>
                <textarea
                  placeholder="[Quién] [Verbo] [Qué] [Cuándo] [Dónde/Cómo]\nCriterio de éxito:\nPunto de verificación:"
                  rows="4"
                />
              </div>
            </div>
          </section>
        )}

        {/* Límites Section */}
        {activeSection === 'limites' && (
          <section className="content-section fade-in">
            <h2>Límites y Contextos Apropiados</h2>

            <div className="limits-intro">
              <p>El Lenguaje de Alta Precisión no es universal. Conocer cuándo y dónde aplicarlo es tan importante como dominarlo.</p>
            </div>

            <div className="context-card appropriate">
              <h3>✓ Contextos Apropiados</h3>
              <div className="context-list">
                <div className="context-item">
                  <strong>Documentación Técnica</strong>
                  <p>Especificaciones, APIs, arquitectura, guías de implementación</p>
                  <span className="precision-level">Precisión: Máxima (95-100%)</span>
                </div>
                <div className="context-item">
                  <strong>Delegación de Tareas</strong>
                  <p>Asignaciones, expectativas, criterios de éxito</p>
                  <span className="precision-level">Precisión: Muy Alta (85-95%)</span>
                </div>
                <div className="context-item">
                  <strong>Análisis y Reportes</strong>
                  <p>Métricas, conclusiones, recomendaciones</p>
                  <span className="precision-level">Precisión: Alta (75-85%)</span>
                </div>
                <div className="context-item">
                  <strong>Comunicación de Crisis</strong>
                  <p>Incidentes, problemas críticos, alertas</p>
                  <span className="precision-level">Precisión: Muy Alta (85-95%)</span>
                </div>
                <div className="context-item">
                  <strong>Decisiones Importantes</strong>
                  <p>Propuestas, aprobaciones, compromisos</p>
                  <span className="precision-level">Precisión: Alta (75-85%)</span>
                </div>
              </div>
            </div>

            <div className="context-card inappropriate">
              <h3>✗ Contextos Inapropiados o de Precisión Reducida</h3>
              <div className="context-list">
                <div className="context-item">
                  <strong>Conversaciones Casuales</strong>
                  <p>Charlas informales, pequeño talk, relaciones sociales</p>
                  <span className="precision-level">Precisión: Baja (20-40%)</span>
                  <em>Razón: La sobre-precisión puede percibirse como rigidez o falta de naturalidad</em>
                </div>
                <div className="context-item">
                  <strong>Expresión Creativa</strong>
                  <p>Brainstorming, ideación, exploración conceptual</p>
                  <span className="precision-level">Precisión: Media (40-60%)</span>
                  <em>Razón: La ambigüedad deliberada puede estimular creatividad</em>
                </div>
                <div className="context-item">
                  <strong>Comunicación Emocional</strong>
                  <p>Empatía, apoyo emocional, situaciones sensibles</p>
                  <span className="precision-level">Precisión: Baja-Media (30-50%)</span>
                  <em>Razón: Priorizar conexión emocional sobre exactitud</em>
                </div>
                <div className="context-item">
                  <strong>Negociación Inicial</strong>
                  <p>Primeras conversaciones, tanteo de posiciones</p>
                  <span className="precision-level">Precisión: Media (50-65%)</span>
                  <em>Razón: La flexibilidad inicial facilita el proceso</em>
                </div>
                <div className="context-item">
                  <strong>Marketing y Persuasión</strong>
                  <p>Contenido promocional, narrativas de marca</p>
                  <span className="precision-level">Precisión: Variable (30-70%)</span>
                  <em>Razón: Depende del balance entre claridad y apelación emocional</em>
                </div>
              </div>
            </div>

            <div className="limits-principles">
              <h3>Principios para Ajustar el Nivel de Precisión</h3>
              <div className="principle-grid-limits">
                <div className="principle-item-limit">
                  <strong>1. Lee la Sala</strong>
                  <p>Observa el nivel de precisión que otros usan y ajusta en consecuencia.</p>
                </div>
                <div className="principle-item-limit">
                  <strong>2. Prioriza el Objetivo</strong>
                  <p>¿Qué es más importante: exactitud o conexión? Elige conscientemente.</p>
                </div>
                <div className="principle-item-limit">
                  <strong>3. Calibra Gradualmente</strong>
                  <p>Empieza con precisión moderada y aumenta si el contexto lo requiere.</p>
                </div>
                <div className="principle-item-limit">
                  <strong>4. Explica tu Intención</strong>
                  <p>"Déjame ser específico aquí" o "Hablando de manera general" señaliza tu enfoque.</p>
                </div>
              </div>
            </div>

            <div className="warning-box">
              <h3>⚠️ Advertencia: El Costo de la Sobre-Precisión</h3>
              <p>Aplicar máxima precisión en contextos inapropiados puede:</p>
              <ul>
                <li>Dañar relaciones interpersonales</li>
                <li>Percibirse como pedante o inflexible</li>
                <li>Crear fricción innecesaria</li>
                <li>Reducir eficiencia en situaciones que requieren rapidez</li>
                <li>Inhibir creatividad en fases exploratorias</li>
              </ul>
            </div>

            <div className="balance-guide">
              <h3>Guía de Balance</h3>
              <table className="balance-table">
                <thead>
                  <tr>
                    <th>Situación</th>
                    <th>Señal de Muy Poca Precisión</th>
                    <th>Señal de Demasiada Precisión</th>
                    <th>Balance Ideal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Email a equipo</td>
                    <td>Confusión en respuestas</td>
                    <td>Email ignorado por ser muy largo</td>
                    <td>Estructura clara, detalles en anexo</td>
                  </tr>
                  <tr>
                    <td>Reunión de brainstorming</td>
                    <td>Ideas vagas sin sustancia</td>
                    <td>Participación inhibida</td>
                    <td>Ideas libres + síntesis precisa al final</td>
                  </tr>
                  <tr>
                    <td>Feedback a colega</td>
                    <td>No entiende qué mejorar</td>
                    <td>Se siente atacado</td>
                    <td>Ejemplos específicos + tono empático</td>
                  </tr>
                  <tr>
                    <td>Presentación ejecutiva</td>
                    <td>Preguntas básicas sin respuesta</td>
                    <td>Pierde la atención en detalles</td>
                    <td>High-level claro + datos de respaldo disponibles</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="final-wisdom">
              <h3>Sabiduría Final</h3>
              <blockquote>
                "La maestría no está en usar siempre el lenguaje de máxima precisión,
                sino en saber exactamente cuánta precisión necesita cada situación,
                y tener la habilidad de modular entre niveles según el contexto y la audiencia."
              </blockquote>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="workshop-footer">
        <p>Taller de Lenguaje de Alta Precisión | UUID: 29f32e2c-0521-4ffe-9f97-662885330037</p>
      </footer>
    </div>
  );
};

export default LanguageWorkshop;
