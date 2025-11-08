import React, { useState } from 'react';
import './NutritionGuide.css';

function NutritionGuide() {
  const [activeWeek, setActiveWeek] = useState(1);
  const [completedHabits, setCompletedHabits] = useState({});

  const toggleHabit = (habitId) => {
    setCompletedHabits(prev => ({
      ...prev,
      [habitId]: !prev[habitId]
    }));
  };

  return (
    <div className="nutrition-guide">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Guía de Nutrición Basada en Hábitos</h1>
          <p className="hero-subtitle">Construye una relación sostenible con la comida en 10 semanas</p>
          <div className="hero-stats">
            <div className="stat-card">
              <span className="stat-number">10</span>
              <span className="stat-label">Semanas</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">66</span>
              <span className="stat-label">Días promedio para formar un hábito</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">30</span>
              <span className="stat-label">Minutos de gym diario</span>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <h2>Filosofía: Hábitos sobre Dietas</h2>
        <div className="philosophy-grid">
          <div className="philosophy-card">
            <div className="philosophy-icon">🧠</div>
            <h3>Psicología del Cambio</h3>
            <p>Las dietas fallan porque dependen de motivación constante. Los hábitos funcionan porque se vuelven automáticos después de ~66 días de repetición consistente.</p>
          </div>
          <div className="philosophy-card">
            <div className="philosophy-icon">🔄</div>
            <h3>Bucle de Hábito</h3>
            <p><strong>Señal → Rutina → Recompensa → Deseo</strong><br/>Cada hábito tiene 4 componentes. Diseñamos señales claras y recompensas inmediatas para que el cambio sea sostenible.</p>
          </div>
          <div className="philosophy-card">
            <div className="philosophy-icon">📊</div>
            <h3>Progreso Medible</h3>
            <p>Auto-monitoreo sin obsesión. Tracking visual de hábitos para ver patrones, no para castigarte. El progreso motiva más que la perfección.</p>
          </div>
          <div className="philosophy-card">
            <div className="philosophy-icon">🎯</div>
            <h3>Micro-Metas</h3>
            <p>Cambios pequeños y específicos son más efectivos que grandes transformaciones. Una nueva acción cada semana construye momentum sostenible.</p>
          </div>
        </div>
      </section>

      {/* Why Not Just a Table Section */}
      <section className="why-section">
        <h2>¿Por qué no solo una tabla de 7x5?</h2>
        <div className="comparison-container">
          <div className="comparison-side old">
            <h3>❌ Enfoque Tradicional</h3>
            <ul>
              <li>Te dice <em>qué</em> comer cada día</li>
              <li>Requiere preparación exacta</li>
              <li>Falla cuando hay imprevistos</li>
              <li>Depende de motivación externa</li>
              <li>Es restrictivo y rígido</li>
              <li>No te enseña a pensar</li>
            </ul>
          </div>
          <div className="comparison-side new">
            <h3>✓ Enfoque Basado en Hábitos</h3>
            <ul>
              <li>Te enseña <em>cómo</em> tomar decisiones</li>
              <li>Flexible y adaptable</li>
              <li>Funciona en cualquier contexto</li>
              <li>Construye motivación intrínseca</li>
              <li>Es sostenible a largo plazo</li>
              <li>Desarrolla autonomía alimentaria</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Your Schedule Section */}
      <section className="schedule-section">
        <h2>Tu Horario: 10am - 8pm de Trabajo</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="time">6:30am</div>
            <div className="activity wake">
              <h4>Despertar</h4>
              <p>Vaso de agua + 5 min de stretching</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="time">7:00am</div>
            <div className="activity breakfast">
              <h4>Desayuno Calmado</h4>
              <p>20-30 min para comer sin prisa</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="time">9:30am</div>
            <div className="activity gym">
              <h4>🏋️ Gym (30 min)</h4>
              <p>Entrenamiento de fuerza o cardio antes del trabajo</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="time">10:00am</div>
            <div className="activity work">
              <h4>Inicio de Trabajo</h4>
              <p>Lleva snacks preparados</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="time">1:00pm</div>
            <div className="activity lunch">
              <h4>Comida</h4>
              <p>Meal prep del domingo, 30-40 min</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="time">4:00pm</div>
            <div className="activity snack">
              <h4>Snack</h4>
              <p>Fruta + nueces pre-porcionadas</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="time">8:00pm</div>
            <div className="activity dinner">
              <h4>Cena en Casa</h4>
              <p>30 min de preparación simple</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="time">9:30pm</div>
            <div className="activity prep">
              <h4>Prep para Mañana</h4>
              <p>15 min: empacar snacks y revisar plan</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10-Week Habit Building Program */}
      <section className="habit-program">
        <h2>Programa de 10 Semanas: Un Hábito a la Vez</h2>
        <p className="program-intro">Cada semana introduces UN nuevo hábito. No avances hasta que el anterior se sienta automático.</p>

        <div className="week-selector">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(week => (
            <button
              key={week}
              className={`week-btn ${activeWeek === week ? 'active' : ''}`}
              onClick={() => setActiveWeek(week)}
            >
              Semana {week}
            </button>
          ))}
        </div>

        <div className="week-content">
          {activeWeek === 1 && (
            <div className="week-card">
              <h3>Semana 1: Hidratación Consciente</h3>
              <div className="habit-detail">
                <p className="habit-mission"><strong>Misión:</strong> Beber 1.5L de agua al día</p>
                <div className="habit-how">
                  <h4>Cómo hacerlo:</h4>
                  <ul>
                    <li><strong>Señal:</strong> Pon 3 botellas de 500ml en lugares visibles (escritorio, gym bag, mesa de noche)</li>
                    <li><strong>Rutina:</strong> Termina 1 botella antes de las 12pm, 1 antes de las 5pm, 1 antes de dormir</li>
                    <li><strong>Recompensa:</strong> Marca una ✓ en tu calendario cada día que completes</li>
                  </ul>
                </div>
                <div className="habit-why">
                  <h4>¿Por qué primero?</h4>
                  <p>La hidratación es el hábito más fácil de implementar y tiene efectos inmediatos en energía y saciedad. Es tu primera victoria rápida que construye confianza.</p>
                </div>
              </div>
            </div>
          )}

          {activeWeek === 2 && (
            <div className="week-card">
              <h3>Semana 2: Desayuno No Negociable</h3>
              <div className="habit-detail">
                <p className="habit-mission"><strong>Misión:</strong> Desayunar todos los días antes de las 7:30am</p>
                <div className="habit-how">
                  <h4>Cómo hacerlo:</h4>
                  <ul>
                    <li><strong>Señal:</strong> Alarma a las 6:50am etiquetada "Desayuno"</li>
                    <li><strong>Rutina:</strong> 3 opciones preparadas la noche anterior (avena overnight, smoothie ingredients, pan + plátano)</li>
                    <li><strong>Recompensa:</strong> Energía estable hasta el gym, sin hambre ansiosa a media mañana</li>
                  </ul>
                </div>
                <div className="habit-stack">
                  <h4>Habit Stacking:</h4>
                  <p>"Después de tomar mi primer vaso de agua (semana 1), preparo mi desayuno"</p>
                </div>
              </div>
            </div>
          )}

          {activeWeek === 3 && (
            <div className="week-card">
              <h3>Semana 3: Meal Prep Dominical</h3>
              <div className="habit-detail">
                <p className="habit-mission"><strong>Misión:</strong> 2 horas de meal prep cada domingo</p>
                <div className="habit-how">
                  <h4>Cómo hacerlo:</h4>
                  <ul>
                    <li><strong>Señal:</strong> Evento de calendario domingos 11am-1pm "Cocina Ritual"</li>
                    <li><strong>Rutina:</strong> Cocina 3 comidas x 5 días (lunes-viernes) + porción de snacks</li>
                    <li><strong>Recompensa:</strong> Tranquilidad mental toda la semana, cero decisiones en días ocupados</li>
                  </ul>
                </div>
                <div className="habit-template">
                  <h4>Template de 2 Horas:</h4>
                  <ol>
                    <li>0:00-0:20 → Cocina arroz/quinoa/pasta (3 tazas)</li>
                    <li>0:20-0:40 → Cocina legumbres (2 tipos, 4 tazas c/u)</li>
                    <li>0:40-1:00 → Asa verduras (brócoli, calabaza, pimientos)</li>
                    <li>1:00-1:20 → Corta fruta y porción snacks</li>
                    <li>1:20-2:00 → Empacar en tuppers + etiquetar + refrigerar</li>
                  </ol>
                </div>
              </div>
            </div>
          )}

          {activeWeek === 4 && (
            <div className="week-card">
              <h3>Semana 4: Proteína en Cada Comida</h3>
              <div className="habit-detail">
                <p className="habit-mission"><strong>Misión:</strong> Incluir 1 puño de proteína vegetal en cada comida principal</p>
                <div className="habit-how">
                  <h4>Opciones Simples:</h4>
                  <ul>
                    <li>Frijoles negros/bayos/pintos (1 taza cocida)</li>
                    <li>Lentejas (1 taza cocida)</li>
                    <li>Garbanzos (1 taza cocida)</li>
                    <li>Tofu (½-1 taza)</li>
                    <li>Edamame (1 taza)</li>
                  </ul>
                </div>
                <div className="habit-why">
                  <h4>¿Por qué importa?</h4>
                  <p>Proteína = saciedad prolongada. Evitas el bajón de energía a las 3pm y los antojos nocturnos. Esencial para recuperación muscular post-gym.</p>
                </div>
              </div>
            </div>
          )}

          {activeWeek === 5 && (
            <div className="week-card">
              <h3>Semana 5: Comer Sin Pantallas</h3>
              <div className="habit-detail">
                <p className="habit-mission"><strong>Misión:</strong> 20 minutos de comida consciente (al menos 1 vez al día)</p>
                <div className="habit-how">
                  <h4>Cómo hacerlo:</h4>
                  <ul>
                    <li><strong>Señal:</strong> Antes de comer, pon el teléfono en otra habitación</li>
                    <li><strong>Rutina:</strong> Sentarte, masticar lento, notar sabores y texturas</li>
                    <li><strong>Recompensa:</strong> Mayor satisfacción con menos comida, mejor digestión</li>
                  </ul>
                </div>
                <div className="habit-science">
                  <h4>La Ciencia:</h4>
                  <p>Comer distraído aumenta consumo en 25-30%. Tu cerebro no registra saciedad si estás en piloto automático. 20 min permiten que las señales de saciedad lleguen.</p>
                </div>
              </div>
            </div>
          )}

          {activeWeek === 6 && (
            <div className="week-card">
              <h3>Semana 6: Verduras Primero</h3>
              <div className="habit-detail">
                <p className="habit-mission"><strong>Misión:</strong> Llenar ½ plato con verduras en almuerzo y cena</p>
                <div className="habit-how">
                  <h4>Hack Visual:</h4>
                  <ul>
                    <li>Dibuja una línea imaginaria en tu plato</li>
                    <li>50% = verduras (crudas o cocidas)</li>
                    <li>25% = proteína (legumbres/tofu)</li>
                    <li>25% = carbohidrato (arroz/papa/tortilla)</li>
                  </ul>
                </div>
                <div className="habit-prep">
                  <h4>Prep Rápido de Verduras:</h4>
                  <p><strong>5 minutos:</strong> Ensalada cruda (lechuga, pepino, jitomate)<br/>
                  <strong>10 minutos:</strong> Verduras al vapor (brócoli, calabaza)<br/>
                  <strong>15 minutos:</strong> Verduras asadas (pimiento, berenjena, cebolla)</p>
                </div>
              </div>
            </div>
          )}

          {activeWeek === 7 && (
            <div className="week-card">
              <h3>Semana 7: Snacks Estratégicos</h3>
              <div className="habit-detail">
                <p className="habit-mission"><strong>Misión:</strong> Pre-porcionar snacks para toda la semana</p>
                <div className="habit-how">
                  <h4>Sistema de Snacks:</h4>
                  <ul>
                    <li><strong>Domingo:</strong> Porción 10 bolsitas pequeñas</li>
                    <li><strong>Cada bolsita:</strong> 1 fruta + 1 puño de nueces/semillas</li>
                    <li><strong>Ubicación:</strong> 5 en la mochila del gym, 5 en el cajón del trabajo</li>
                  </ul>
                </div>
                <div className="snack-combos">
                  <h4>Combos Probados:</h4>
                  <ul>
                    <li>Manzana + 10 almendras</li>
                    <li>Plátano + 1 cda de mantequilla de cacahuate</li>
                    <li>Zanahorias baby + 2 cdas de hummus</li>
                    <li>Naranja + 8 nueces</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeWeek === 8 && (
            <div className="week-card">
              <h3>Semana 8: Timing Pre/Post Gym</h3>
              <div className="habit-detail">
                <p className="habit-mission"><strong>Misión:</strong> Nutrición específica para rendimiento</p>
                <div className="habit-how">
                  <h4>Protocolo:</h4>
                  <ul>
                    <li><strong>30-60 min ANTES del gym (9:00am):</strong> Carbohidrato simple + bajo en fibra<br/>
                    <em>Ejemplos:</em> Plátano, 2 dátiles, smoothie de fruta</li>
                    <li><strong>30-45 min DESPUÉS del gym (10:15am):</strong> Carbohidrato + Proteína<br/>
                    <em>Ejemplos:</em> Avena + leche de soya, tostada + hummus + plátano</li>
                  </ul>
                </div>
                <div className="habit-why">
                  <h4>¿Por qué importa?</h4>
                  <p>Pre-gym: energía rápida sin malestar estomacal.<br/>
                  Post-gym: ventana anabólica para recuperación muscular y reposición de glucógeno.</p>
                </div>
              </div>
            </div>
          )}

          {activeWeek === 9 && (
            <div className="week-card">
              <h3>Semana 9: Flexibilidad Planificada</h3>
              <div className="habit-detail">
                <p className="habit-mission"><strong>Misión:</strong> 1-2 comidas "libres" por semana sin culpa</p>
                <div className="habit-how">
                  <h4>Reglas de Flexibilidad:</h4>
                  <ul>
                    <li>Designa tus comidas flexibles con anticipación (ej: viernes cena, domingo comida)</li>
                    <li>Come lo que quieras, pero aplicando "comer sin pantallas" (semana 5)</li>
                    <li>No es un "cheat meal" es parte del sistema sostenible</li>
                    <li>Al día siguiente, vuelves a tus hábitos sin drama</li>
                  </ul>
                </div>
                <div className="habit-psychology">
                  <h4>Psicología:</h4>
                  <p>La restricción extrema lleva a atracones. La flexibilidad planificada previene rebotes, reduce ansiedad y hace el sistema sostenible por años, no semanas.</p>
                </div>
              </div>
            </div>
          )}

          {activeWeek === 10 && (
            <div className="week-card">
              <h3>Semana 10: Auto-Evaluación y Ajuste</h3>
              <div className="habit-detail">
                <p className="habit-mission"><strong>Misión:</strong> Revisar qué funciona y diseñar tu sistema personalizado</p>
                <div className="habit-reflection">
                  <h4>Preguntas de Reflexión:</h4>
                  <ul>
                    <li>¿Qué 3 hábitos se sienten automáticos?</li>
                    <li>¿Cuál fue el más difícil? ¿Por qué?</li>
                    <li>¿En qué contextos fallas más? (estrés, fin de semana, social)</li>
                    <li>¿Cómo te sientes comparado con la semana 1? (energía, digestión, humor)</li>
                    <li>¿Qué necesitas ajustar para las próximas 10 semanas?</li>
                  </ul>
                </div>
                <div className="habit-next">
                  <h4>Siguientes Pasos:</h4>
                  <p>No agregues más hábitos todavía. Solidifica los 9 anteriores por 2-4 semanas más. Luego, si quieres, introduce nuevos micro-cambios uno a la vez.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Visual Progress Tracker */}
      <section className="tracker-section">
        <h2>Tracker de Hábitos Diarios</h2>
        <p className="tracker-intro">Marca cada día que completes el hábito de la semana. La consistencia importa más que la perfección.</p>
        <div className="habit-grid">
          {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map(day => (
            <div key={day} className="day-column">
              <div className="day-header">{day}</div>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(week => (
                <button
                  key={`${day}-${week}`}
                  className={`habit-cell ${completedHabits[`${day}-${week}`] ? 'completed' : ''}`}
                  onClick={() => toggleHabit(`${day}-${week}`)}
                >
                  {completedHabits[`${day}-${week}`] && '✓'}
                </button>
              ))}
            </div>
          ))}
        </div>
        <div className="tracker-legend">
          <p><strong>Objetivo:</strong> 5-6 días por semana = éxito<br/>
          <strong>Perfección:</strong> No es el objetivo, la consistencia sí</p>
        </div>
      </section>

      {/* Gym Integration */}
      <section className="gym-section">
        <h2>Integrando 30 Minutos de Gym</h2>
        <div className="gym-split">
          <div className="gym-card">
            <h3>Lunes / Miércoles / Viernes</h3>
            <p className="workout-type">Fuerza (30 min)</p>
            <div className="workout-breakdown">
              <ul>
                <li>5 min: Calentamiento dinámico</li>
                <li>20 min: Circuito de fuerza (3 rondas)
                  <ul>
                    <li>Sentadillas: 12 reps</li>
                    <li>Push-ups: 10 reps</li>
                    <li>Peso muerto (mancuernas): 10 reps</li>
                    <li>Plancha: 30 seg</li>
                  </ul>
                </li>
                <li>5 min: Estiramiento</li>
              </ul>
            </div>
          </div>
          <div className="gym-card">
            <h3>Martes / Jueves</h3>
            <p className="workout-type">Cardio (30 min)</p>
            <div className="workout-breakdown">
              <ul>
                <li>5 min: Calentamiento progresivo</li>
                <li>20 min: HIIT o cardio moderado
                  <ul>
                    <li>Opción 1: 20 seg sprint / 40 seg caminata (20 ciclos)</li>
                    <li>Opción 2: Trote constante moderado</li>
                    <li>Opción 3: Bicicleta o elíptica</li>
                  </ul>
                </li>
                <li>5 min: Cool down y estiramiento</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="gym-nutrition">
          <h3>Nutrición para Gym 9:30am</h3>
          <div className="nutrition-timing">
            <div className="timing-card">
              <h4>Pre-Workout (9:00am)</h4>
              <p>Carbohidrato simple para energía rápida:</p>
              <ul>
                <li>1 plátano</li>
                <li>2 dátiles + agua</li>
                <li>½ taza avena cocida</li>
              </ul>
            </div>
            <div className="timing-card">
              <h4>Post-Workout (10:15am)</h4>
              <p>Proteína + Carbohidrato para recuperación:</p>
              <ul>
                <li>Smoothie: plátano + leche de soya + avena</li>
                <li>Tostada integral + hummus + plátano</li>
                <li>Avena + linaza + fruta</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Teach Yourself Section */}
      <section className="education-section">
        <h2>Cómo Enseñarte a Comer (No Solo Qué Comer)</h2>
        <div className="education-grid">
          <div className="education-card">
            <h3>1. Señales de Hambre vs. Antojos</h3>
            <div className="education-content">
              <p><strong>Hambre Real:</strong></p>
              <ul>
                <li>Aparece gradualmente</li>
                <li>Múltiples alimentos suenan bien</li>
                <li>Sensación física en el estómago</li>
                <li>Se satisface con comida nutritiva</li>
              </ul>
              <p><strong>Antojo Emocional:</strong></p>
              <ul>
                <li>Aparece de repente</li>
                <li>Solo UN alimento específico</li>
                <li>Sensación en la cabeza/boca</li>
                <li>Persiste después de comer</li>
              </ul>
              <p className="education-action"><strong>Práctica:</strong> Antes de comer, pregúntate: "¿Tengo hambre o estoy aburrido/estresado/cansado?"</p>
            </div>
          </div>

          <div className="education-card">
            <h3>2. La Regla del 80/20</h3>
            <div className="education-content">
              <p>80% del tiempo: comes según tus hábitos (nutritivo, planificado)<br/>
              20% del tiempo: flexibilidad total (social, antojos, experiencias)</p>
              <p className="education-why">Esto previene el ciclo de restricción → atracón → culpa → restricción</p>
              <p className="education-action"><strong>Práctica:</strong> En una semana de 21 comidas, 4-5 pueden ser completamente flexibles sin afectar resultados.</p>
            </div>
          </div>

          <div className="education-card">
            <h3>3. Escalera de Decisiones</h3>
            <div className="education-content">
              <p>Cuando no tienes tiempo para meal prep o estás de viaje:</p>
              <ol>
                <li><strong>Mejor:</strong> Tu meal prep planificado</li>
                <li><strong>Bueno:</strong> Comida casera simple (arroz + frijol + verdura)</li>
                <li><strong>Aceptable:</strong> Restaurante con opciones vegetales</li>
                <li><strong>Último recurso:</strong> Snacks de tienda (fruta + nueces)</li>
              </ol>
              <p className="education-action"><strong>Mentalidad:</strong> No existe "perfecto vs. arruinado". Existe una escalera de opciones. Siempre elige la mejor disponible en ese momento.</p>
            </div>
          </div>

          <div className="education-card">
            <h3>4. Auto-Experimento de 2 Semanas</h3>
            <div className="education-content">
              <p>Cada 2-3 meses, prueba algo nuevo y documenta:</p>
              <ul>
                <li>Cambia el horario de una comida</li>
                <li>Prueba un tipo nuevo de legumbre</li>
                <li>Ajusta las porciones de carbohidratos</li>
                <li>Cambia la intensidad del ejercicio</li>
              </ul>
              <p className="education-action"><strong>Anota:</strong> Energía (1-10), Digestión (1-10), Saciedad (1-10), Humor (1-10)</p>
              <p className="education-why">Esto te convierte en tu propio científico, no un seguidor ciego de reglas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Science-Backed Tips */}
      <section className="tips-section">
        <h2>Consejos Respaldados por Ciencia</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <div className="tip-icon">💧</div>
            <h4>Bebe agua antes de comer</h4>
            <p>500ml de agua 30 min antes de comidas aumenta saciedad 25-30% y mejora digestión.</p>
          </div>
          <div className="tip-card">
            <div className="tip-icon">🍽️</div>
            <h4>Usa platos más pequeños</h4>
            <p>Reduce consumo en 20% sin sentir restricción. El cerebro percibe "plato lleno" como satisfactorio.</p>
          </div>
          <div className="tip-card">
            <div className="tip-icon">😴</div>
            <h4>Duerme 7-8 horas</h4>
            <p>Menos de 7 horas aumenta grelina (hormona del hambre) en 15% y reduce leptina (saciedad) en 15%.</p>
          </div>
          <div className="tip-card">
            <div className="tip-icon">🥗</div>
            <h4>Come verduras primero</h4>
            <p>Comenzar con verduras mejora control de glucosa en 30% comparado con empezar por carbohidratos.</p>
          </div>
          <div className="tip-card">
            <div className="tip-icon">📱</div>
            <h4>Toma foto de tus comidas</h4>
            <p>Auto-monitoreo visual sin contar calorías. Aumenta adherencia en 40% vs. no trackear.</p>
          </div>
          <div className="tip-card">
            <div className="tip-icon">👥</div>
            <h4>Busca accountability</h4>
            <p>Compartir tu progreso con 1 persona aumenta tasa de éxito de 25% a 65%.</p>
          </div>
        </div>
      </section>

      {/* Final Mindset Section */}
      <section className="mindset-section">
        <h2>Mentalidad Final: Esto Es un Sistema, No un Sprint</h2>
        <div className="mindset-content">
          <div className="mindset-quote">
            <p>"La motivación es lo que te hace empezar. Los hábitos son lo que te mantiene."</p>
          </div>
          <div className="mindset-principles">
            <h3>Principios para los Próximos 10 Años</h3>
            <ul>
              <li><strong>Progreso > Perfección:</strong> 6 días buenos por semana > 3 días perfectos</li>
              <li><strong>Flexibilidad > Rigidez:</strong> Adaptarte a la vida real > seguir reglas ciegamente</li>
              <li><strong>Aprendizaje > Castigo:</strong> "¿Qué aprendí?" > "Me arruiné"</li>
              <li><strong>Proceso > Resultados:</strong> Disfrutar cocinar > solo ver la báscula</li>
              <li><strong>Autonomía > Dependencia:</strong> Tomar decisiones informadas > necesitar un plan externo</li>
            </ul>
          </div>
          <div className="mindset-action">
            <h3>Tu Primer Acción</h3>
            <p>No intentes hacer todo. Escoge SOLO el hábito de la Semana 1 (hidratación) y domínalo por 7 días. Luego regresa aquí.</p>
            <button className="cta-button">Comenzar Semana 1</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NutritionGuide;
