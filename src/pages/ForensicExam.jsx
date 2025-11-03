import './ForensicExam.css';

function ForensicExam() {
  return (
    <div className="forensic-exam">
      <div className="container">
        <header>
          <h1>Examen Forense: Biografía de un Artista</h1>
          <p className="subtitle">
            "El arte es la mentira que nos permite comprender la verdad" - Pablo Picasso
          </p>
        </header>

        {/* Phase I: Programación Temprana */}
        <div className="phase">
          <div className="phase-header">
            <div className="phase-number">I</div>
            <div className="phase-title">
              <h2>Programación Temprana</h2>
              <p className="age-range">0-7 años</p>
            </div>
          </div>

          <div className="prompt">
            <div className="prompt-label">Prompt Inicial</div>
            <p>¿Qué códigos familiares, religiosos y culturales se instalaron antes de que pudieras cuestionarlos?</p>
          </div>

          <div className="analysis">
            <h3>Mecanismos de Instalación</h3>
            <div className="mechanism-grid">
              <div className="mechanism-card">
                <div className="mechanism-title">Repetición Ritual</div>
                <div className="mechanism-desc">Patrones que se normalizan por constancia sin análisis crítico</div>
              </div>
              <div className="mechanism-card">
                <div className="mechanism-title">Autoridad Incuestionable</div>
                <div className="mechanism-desc">Figuras parentales como fuente única de verdad</div>
              </div>
              <div className="mechanism-card">
                <div className="mechanism-title">Castigo/Recompensa</div>
                <div className="mechanism-desc">Condicionamiento operante que moldea comportamiento</div>
              </div>
              <div className="mechanism-card">
                <div className="mechanism-title">Narrativas Fundacionales</div>
                <div className="mechanism-desc">Historias que definen identidad y pertenencia</div>
              </div>
            </div>

            <div className="flow-diagram">
              <h4>Flujo de Instalación</h4>
              <div className="flow-step">
                <div className="flow-arrow">→</div>
                <div className="flow-text">Exposición constante a valores y creencias</div>
              </div>
              <div className="flow-step">
                <div className="flow-arrow">→</div>
                <div className="flow-text">Adopción sin capacidad crítica desarrollada</div>
              </div>
              <div className="flow-step">
                <div className="flow-arrow">→</div>
                <div className="flow-text">Integración en estructura cognitiva base</div>
              </div>
              <div className="flow-step">
                <div className="flow-arrow">→</div>
                <div className="flow-text">Naturalización como "verdad absoluta"</div>
              </div>
            </div>
          </div>

          <div className="prompt">
            <div className="prompt-label">Marcadores Forenses</div>
            <ul className="marker-list">
              <li>Resistencia emocional a cuestionar ciertas ideas ("esto no se toca")</li>
              <li>Frases que comienzan con "siempre" o "nunca" sobre temas específicos</li>
              <li>Reacciones desproporcionadas ante violaciones de códigos implícitos</li>
              <li>Adopción de roles familiares sin haberlos elegido conscientemente</li>
            </ul>
          </div>
        </div>

        {/* Phase II: Adolescencia */}
        <div className="phase">
          <div className="phase-header">
            <div className="phase-number">II</div>
            <div className="phase-title">
              <h2>Adolescencia: Primera Rebelión</h2>
              <p className="age-range">12-18 años</p>
            </div>
          </div>

          <div className="prompt">
            <div className="prompt-label">Prompt de Investigación</div>
            <p>¿Qué rechazaste de tu familia/entorno para construir identidad? ¿Qué mantuviste sin saberlo?</p>
          </div>

          <div className="analysis">
            <h3>La Paradoja del Rebelde</h3>
            <p className="quote">
              "La rebelión adolescente es muchas veces una confirmación disfrazada:
              rechazo lo que me dieron pero usando exactamente los mismos métodos y estructuras"
            </p>

            <div className="checklist">
              <h4>Checklist de Rebeldía Aparente vs. Real</h4>
              <div className="checklist-item">
                <span className="check-icon">✗</span>
                <div>
                  <strong>Aparente:</strong> Cambiar estética pero mantener estructura de valores intacta
                </div>
              </div>
              <div className="checklist-item">
                <span className="check-icon">✗</span>
                <div>
                  <strong>Aparente:</strong> Criticar a los padres usando exactamente su método de crítica
                </div>
              </div>
              <div className="checklist-item">
                <span className="check-icon">✓</span>
                <div>
                  <strong>Real:</strong> Cuestionar las preguntas mismas, no solo las respuestas
                </div>
              </div>
              <div className="checklist-item">
                <span className="check-icon">✓</span>
                <div>
                  <strong>Real:</strong> Construir nuevas métricas de éxito/fracaso, no invertir las existentes
                </div>
              </div>
            </div>

            <div className="formula">
              Rebeldía Real = Deconstrucción de Preguntas + Construcción de Nuevas Métricas
            </div>
          </div>

          <div className="warning-box">
            <strong>ALERTA FORENSE:</strong> La mayoría de "artistas rebeldes" simplemente invirtieron
            el signo de las ecuaciones familiares sin cambiar las variables.
          </div>
        </div>

        {/* Phase III: Escuela/Gremio */}
        <div className="phase">
          <div className="phase-header">
            <div className="phase-number">III</div>
            <div className="phase-title">
              <h2>Escuela/Gremio: Segunda Programación</h2>
              <p className="age-range">18-25 años</p>
            </div>
          </div>

          <div className="prompt">
            <div className="prompt-label">Prompt Crítico</div>
            <p>¿Qué te enseñaron sobre "cómo se hace arte"? ¿Qué reglas nunca cuestionaste porque "así funciona el mundo del arte"?</p>
          </div>

          <div className="analysis">
            <h3>Instalación de Protocolos Profesionales</h3>

            <div className="mechanism-grid">
              <div className="mechanism-card">
                <div className="mechanism-title">Jerarquías Naturalizadas</div>
                <div className="mechanism-desc">Maestros, galeristas, críticos como gatekeepers incuestionables</div>
              </div>
              <div className="mechanism-card">
                <div className="mechanism-title">Definición Externa de Éxito</div>
                <div className="mechanism-desc">Exposiciones, ventas, reconocimiento como únicos validadores</div>
              </div>
              <div className="mechanism-card">
                <div className="mechanism-title">Técnica como Dogma</div>
                <div className="mechanism-desc">"Primero aprende las reglas para poder romperlas" (pero nunca las rompes)</div>
              </div>
              <div className="mechanism-card">
                <div className="mechanism-title">Red de Contactos como Capital</div>
                <div className="mechanism-desc">No es qué haces sino a quién conoces</div>
              </div>
            </div>

            <p className="quote">
              "La escuela de arte te enseña a hablar el idioma que los compradores entienden.
              Luego pasas la vida creyendo que es tu idioma."
            </p>
          </div>

          <div className="prompt">
            <div className="prompt-label">Test de Independencia</div>
            <p>Si mañana desaparecieran todas las galerías, todos los críticos, todo el mercado del arte... ¿seguirías haciendo lo mismo? ¿Cómo?</p>
          </div>
        </div>

        {/* Phase IV: Consagración */}
        <div className="phase">
          <div className="phase-header">
            <div className="phase-number">IV</div>
            <div className="phase-title">
              <h2>Consagración: El Pacto Fáustico</h2>
              <p className="age-range">25-35 años</p>
            </div>
          </div>

          <div className="prompt">
            <div className="prompt-label">Prompt de Análisis</div>
            <p>¿En qué momento empezaste a hacer lo que "funciona" en lugar de lo que querías explorar?</p>
          </div>

          <div className="analysis">
            <h3>Anatomía del Compromiso</h3>

            <div className="warning-box">
              <strong>PACTO IMPLÍCITO:</strong> Te damos reconocimiento, tú produces repeticiones reconocibles.
            </div>

            <div className="mechanism-grid">
              <div className="mechanism-card">
                <div className="mechanism-title">Marca Personal</div>
                <div className="mechanism-desc">Tu estilo se vuelve tu cárcel - "el público espera esto de ti"</div>
              </div>
              <div className="mechanism-card">
                <div className="mechanism-title">Inversión de Sunk Cost</div>
                <div className="mechanism-desc">Has invertido tanto en este camino que cambiar parece suicidio</div>
              </div>
              <div className="mechanism-card">
                <div className="mechanism-title">Red de Dependencias</div>
                <div className="mechanism-desc">Galeristas, coleccionistas, críticos esperan cierto producto</div>
              </div>
              <div className="mechanism-card">
                <div className="mechanism-title">Miedo al Ostracismo</div>
                <div className="mechanism-desc">Salir del sistema = desaparecer del mapa cultural</div>
              </div>
            </div>

            <div className="formula">
              Obra Madura = (Descubrimiento Juvenil × Repeticiones) - Riesgo
            </div>

            <p className="quote">
              "El artista consagrado es aquel que ha perfeccionado el arte de producir
              variaciones infinitas de su primer éxito."
            </p>
          </div>
        </div>

        {/* Phase V: Apogeo */}
        <div className="phase">
          <div className="phase-header">
            <div className="phase-number">V</div>
            <div className="phase-title">
              <h2>Apogeo: Máximo Reconocimiento, Mínima Libertad</h2>
              <p className="age-range">35-50 años</p>
            </div>
          </div>

          <div className="prompt">
            <div className="prompt-label">Diagnóstico Paradójico</div>
            <p>Tienes todo lo que soñaste cuando empezaste. ¿Por qué se siente como una trampa?</p>
          </div>

          <div className="analysis">
            <h3>El Balance de la Jaula Dorada</h3>

            <div className="balance-grid">
              <div className="balance-box income">
                <h4>Ingresos</h4>
                <ul>
                  <li>Reconocimiento internacional</li>
                  <li>Estabilidad económica</li>
                  <li>Influencia en el campo</li>
                  <li>Acceso a recursos ilimitados</li>
                  <li>Legado asegurado</li>
                </ul>
              </div>
              <div className="balance-box expense">
                <h4>Egresos</h4>
                <ul>
                  <li>Libertad de experimentación</li>
                  <li>Posibilidad de fracaso</li>
                  <li>Exploración sin agenda</li>
                  <li>Anonimato creativo</li>
                  <li>Cambio radical de dirección</li>
                </ul>
              </div>
            </div>

            <div className="warning-box">
              <strong>SÍNTOMA CRÍTICO:</strong> Cada nueva obra es evaluada no por lo que ES,
              sino por cómo se relaciona con tu obra canónica.
            </div>

            <div className="metric">Índice de Libertad Creativa: 15%</div>
            <div className="metric">Índice de Reconocimiento: 95%</div>
            <div className="metric">Ratio Experimentación/Consolidación: 1:20</div>
          </div>

          <div className="quote">
            "En la cima de la montaña descubres que estás parado sobre tu propia tumba.
            La vista es magnífica pero no puedes moverte."
          </div>
        </div>

        {/* Phase VI: Choque con el Testigo */}
        <div className="phase">
          <div className="phase-header">
            <div className="phase-number">VI</div>
            <div className="phase-title">
              <h2>Choque con el Testigo: La Fisura</h2>
              <p className="age-range">50-60 años</p>
            </div>
          </div>

          <div className="prompt">
            <div className="prompt-label">Evento Desencadenante</div>
            <p>Algo/alguien te muestra el espejo: has sido exitoso en un juego que nunca quisiste jugar.</p>
          </div>

          <div className="analysis">
            <h3>Formas del Despertar</h3>

            <div className="mechanism-grid">
              <div className="mechanism-card">
                <div className="mechanism-title">El Artista Joven</div>
                <div className="mechanism-desc">Alguien hace lo que tú ya no te atreves, y recuerda lo que perdiste</div>
              </div>
              <div className="mechanism-card">
                <div className="mechanism-title">La Enfermedad/Pérdida</div>
                <div className="mechanism-desc">La mortalidad te obliga a preguntarte qué fue real</div>
              </div>
              <div className="mechanism-card">
                <div className="mechanism-title">El Fracaso Inesperado</div>
                <div className="mechanism-desc">Una obra "segura" que no funciona y revela la fórmula agotada</div>
              </div>
              <div className="mechanism-card">
                <div className="mechanism-title">El Outsider Lúcido</div>
                <div className="mechanism-desc">Alguien de fuera del sistema articula lo que nunca te atreviste a decir</div>
              </div>
            </div>

            <div className="response-box">
              <div className="response-title">Respuestas Típicas al Despertar</div>
              <ol>
                <li><strong>Negación Activa:</strong> Trabajar más duro en la misma dirección</li>
                <li><strong>Cinismo Defensivo:</strong> "Así es el mundo, todos hacemos concesiones"</li>
                <li><strong>Nostalgia Paralizante:</strong> "Antes era puro, ahora es imposible"</li>
                <li><strong>Fuga hacia Adelante:</strong> Cambio radical sin procesar lo anterior</li>
                <li><strong>Integración Consciente:</strong> (Raro) Reconocer el patrón sin destruir lo construido</li>
              </ol>
            </div>
          </div>

          <div className="quote">
            "El testigo no te juzga. Solo refleja la distancia entre quien eras y quien te convertiste."
          </div>
        </div>

        {/* Phase VII: Deriva */}
        <div className="phase">
          <div className="phase-header">
            <div className="phase-number">VII</div>
            <div className="phase-title">
              <h2>Deriva: El Intervalo</h2>
              <p className="age-range">60-70 años</p>
            </div>
          </div>

          <div className="prompt">
            <div className="prompt-label">Estado Liminal</div>
            <p>Ya no puedes seguir como antes, pero no sabes cómo seguir. ¿Es esto el fin o la preparación?</p>
          </div>

          <div className="analysis">
            <h3>Características de la Deriva</h3>

            <ul className="marker-list">
              <li>Producción errática - períodos de hiperactividad alternados con silencio</li>
              <li>Trabajo "para el cajón" - obras que no muestras porque no encajan en tu marca</li>
              <li>Revisitación obsesiva de temas juveniles</li>
              <li>Distanciamiento del circuito - rechazas invitaciones, evitas inauguraciones</li>
              <li>Experimentación secreta con medios/temas "no propios"</li>
            </ul>

            <div className="warning-box">
              <strong>SÍNTOMA CLAVE:</strong> Produces más pero expones menos. La brecha entre obra privada y obra pública se amplía.
            </div>

            <div className="formula">
              Deriva = Consciencia del Patrón + Incapacidad de Romperlo + Rechazo a Continuar
            </div>
          </div>

          <div className="quote">
            "La deriva no es inactividad. Es actividad sin dirección aparente, búsqueda sin mapa, movimiento sin destino conocido."
          </div>
        </div>

        {/* Phase VIII: Residuo */}
        <div className="phase">
          <div className="phase-header">
            <div className="phase-number">VIII</div>
            <div className="phase-title">
              <h2>Residuo: Lo que Queda</h2>
              <p className="age-range">70+ años</p>
            </div>
          </div>

          <div className="prompt">
            <div className="prompt-label">Inventario Final</div>
            <p>¿Qué permanece cuando se apagan los reflectores? ¿Qué hiciste que nunca fue por el mercado, el reconocimiento o el legado?</p>
          </div>

          <div className="analysis">
            <h3>Tres Tipos de Residuo</h3>

            <div className="mechanism-grid">
              <div className="mechanism-card">
                <div className="mechanism-title">Residuo Público</div>
                <div className="mechanism-desc">Lo que el mundo conserva - obra musealizada, mercantilizada, academizada</div>
              </div>
              <div className="mechanism-card">
                <div className="mechanism-title">Residuo Privado</div>
                <div className="mechanism-desc">Lo que guardaste - bocetos, experimentos, obras "fallidas" que amaste</div>
              </div>
              <div className="mechanism-card">
                <div className="mechanism-title">Residuo Fantasma</div>
                <div className="mechanism-desc">Lo que nunca hiciste - las obras que autocensuraste, los riesgos no tomados</div>
              </div>
            </div>

            <div className="warning-box">
              <strong>PREGUNTA FORENSE:</strong> ¿Cuál de estos tres residuos representa realmente tu búsqueda?
            </div>

            <p className="quote">
              "Al final, el mercado conserva lo que pudo vender.
              La historia conserva lo que pudo explicar.
              Tú conservas lo que nunca pudiste resolver."
            </p>
          </div>
        </div>

        {/* Phase IX: Autopsia */}
        <div className="phase">
          <div className="phase-header">
            <div className="phase-number">IX</div>
            <div className="phase-title">
              <h2>POST-SCRIPTUM / AUTOPSIA</h2>
              <p className="age-range">Perspectiva Retroactiva</p>
            </div>
          </div>

          <div className="autopsy">
            <h3 className="autopsy-header">INFORME FORENSE FINAL</h3>

            <div className="autopsy-section">
              <div className="autopsy-label">Causa de Muerte Artística</div>
              <p>Éxito prematuro seguido de petrificación en fórmula reconocible.
              El sujeto fue progresivamente reemplazado por su marca.</p>
            </div>

            <div className="autopsy-section">
              <div className="autopsy-label">Hallazgos Principales</div>
              <ul>
                <li>Instalación de protocolos familiares nunca cuestionados (Fase I)</li>
                <li>Rebelión superficial que mantuvo estructura base (Fase II)</li>
                <li>Adopción de jerarquías profesionales como naturales (Fase III)</li>
                <li>Pacto implícito con el mercado no reconocido conscientemente (Fase IV)</li>
                <li>Sacrificio de libertad por reconocimiento sin balance consciente (Fase V)</li>
                <li>Despertar tardío insuficiente para revertir trayectoria (Fase VI)</li>
                <li>Deriva como resistencia pasiva en lugar de ruptura activa (Fase VII)</li>
                <li>Residuo fantasma más grande que residuo real (Fase VIII)</li>
              </ul>
            </div>

            <div className="autopsy-section">
              <div className="autopsy-label">Pregunta Sin Respuesta</div>
              <p className="quote" style={{ borderLeft: '3px solid #ff6b6b' }}>
                ¿En qué momento exacto el artista dejó de hacer arte para comenzar a producir
                simulacros de su propia historia? ¿Y pudo haber sido de otra manera?
              </p>
            </div>

            <div className="autopsy-section">
              <div className="autopsy-label">Nota Final del Forense</div>
              <p>
                Este no es el informe de un artista particular. Es el mapa de un sistema
                que produce artistas como productos predecibles. El sujeto no falló.
                El sujeto cumplió exactamente con el protocolo esperado.
              </p>
              <p>
                <strong>La verdadera pregunta no es "¿qué falló?", sino "¿para qué funcionó?"</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Epilogue */}
        <div className="epilogue">
          <h2>EPÍLOGO: Alternativas Post-Mortem</h2>

          <div className="epilogue-content">
            <h3>¿Puede hacerse diferente?</h3>
            <p>
              Este examen forense no es una condena sino un mapa. Conocer el patrón no garantiza
              escaparlo, pero la ignorancia garantiza repetirlo.
            </p>

            <h4>Posibles Rutas de Resistencia:</h4>
            <ul>
              <li>
                <strong>Consciencia Activa:</strong> Revisar constantemente qué produces "porque funciona"
                vs. "porque necesitas explorarlo"
              </li>
              <li>
                <strong>Protocolos de Ruptura:</strong> Establecer momentos deliberados de destrucción
                creativa - cambiar de medio, anonimizar obra, regalar trabajo
              </li>
              <li>
                <strong>Doble Producción:</strong> Mantener paralelamente un cuerpo de obra "para el sistema"
                y otro "para la búsqueda" (consciente de la esquizofrenia)
              </li>
              <li>
                <strong>Rechazo Estratégico:</strong> Aprender a decir no al tipo de éxito que te encierra
              </li>
              <li>
                <strong>Comunidades Alternativas:</strong> Construir redes de validación fuera del mercado
                que sostengan experimentación real
              </li>
            </ul>

            <div className="warning-box" style={{ marginTop: '20px' }}>
              <strong>ADVERTENCIA:</strong> Conocer estos patrones puede convertirse en su propia trampa -
              "ser el artista que conscientemente navega el sistema" es simplemente un nivel más sofisticado
              de captura. La autoconsciencia no es liberación automática.
            </div>

            <p className="epilogue-highlight">
              Al final, quizás la pregunta no sea "¿cómo evitar este patrón?" sino
              "¿qué haré sabiendo que el patrón existe?"
            </p>
          </div>
        </div>

        <footer>
          <p>
            Este documento es una herramienta de análisis, no una sentencia.
            Cada biografía artística contiene desviaciones, resistencias y momentos de verdadera
            ruptura que ningún modelo puede capturar completamente.
          </p>
          <p>
            "El mapa no es el territorio, pero ayuda a no perderse en el mismo círculo
            creyendo que avanzas."
          </p>
        </footer>
      </div>
    </div>
  );
}

export default ForensicExam;
