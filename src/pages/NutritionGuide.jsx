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
          <div className="profile-badge">
            <p><strong>Perfil:</strong> 28 años | 80kg, 1.80m | Vegano/Frutariano | Objetivo: Pérdida de Grasa</p>
          </div>
          <div className="hero-stats">
            <div className="stat-card">
              <span className="stat-number">10</span>
              <span className="stat-label">Semanas para dominar hábitos</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">2000</span>
              <span className="stat-label">Calorías objetivo (déficit moderado)</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">7</span>
              <span className="stat-label">Horas de gym por semana</span>
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
        <h2>Tu Horario Personalizado: Comidas en Tarde/Noche</h2>
        <div className="schedule-note">
          <p><strong>Nota sobre TLP:</strong> La consistencia en horarios ayuda a regular el estado de ánimo. Estos tiempos son anclas de estabilidad.</p>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="time">10:00am</div>
            <div className="activity wake">
              <h4>Despertar</h4>
              <p>Vaso de agua grande + 5 min respiración consciente</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="time">11:00am</div>
            <div className="activity breakfast">
              <h4>Primera Comida (Ligera)</h4>
              <p>Smoothie de frutas o fruta entera + nueces</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="time">2:00pm</div>
            <div className="activity lunch">
              <h4>Comida Principal</h4>
              <p>Poke bowl, burrito vegano, o ensalada abundante</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="time">5:00pm</div>
            <div className="activity snack">
              <h4>Pre-Workout</h4>
              <p>Plátano + dátiles (energía rápida)</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="time">5:30pm</div>
            <div className="activity gym">
              <h4>🏋️ Gym (1 hora)</h4>
              <p>4 días/semana: Fuerza | 2 días/semana: Cardio | 1 día: Descanso activo</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="time">7:00pm</div>
            <div className="activity dinner">
              <h4>Post-Workout + Cena</h4>
              <p>Tacos de berenjena, bowl de quinoa, o burrito</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="time">9:00pm</div>
            <div className="activity snack">
              <h4>Snack Nocturno (opcional)</h4>
              <p>Fruta si tienes hambre real, no emocional</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="time">10:30pm</div>
            <div className="activity prep">
              <h4>Ritual de Cierre</h4>
              <p>10 min: Revisar qué comiste hoy, planear mañana, journaling</p>
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
                <p className="habit-mission"><strong>Misión:</strong> Beber 2.5L de agua al día (esencial para pérdida de grasa)</p>
                <div className="habit-how">
                  <h4>Cómo hacerlo:</h4>
                  <ul>
                    <li><strong>Señal:</strong> Pon 1 botella de 1L en tu escritorio, 1 en el gym, 1 en la mesa de noche</li>
                    <li><strong>Rutina:</strong> 1L antes de las 2pm, 1L entre 2-7pm, 500ml después del gym</li>
                    <li><strong>Recompensa:</strong> Marca ✓ en tracker + mejor claridad mental (crucial con TLP)</li>
                  </ul>
                </div>
                <div className="habit-why">
                  <h4>¿Por qué 2.5L para ti?</h4>
                  <p>Con 80kg y objetivo de pérdida de grasa, necesitas 30-35ml/kg. El agua ayuda a metabolizar grasa, reduce retención de líquidos, y mejora regulación emocional (importante con TLP). Además, comer frutas te da ~500ml adicionales.</p>
                </div>
                <div className="habit-tlp">
                  <h4>🧠 Consideración TLP:</h4>
                  <p>La deshidratación amplifica irritabilidad y dysregulación. Agua constante = estabilidad emocional más fácil.</p>
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
              <h3>Semana 4: Proteína Vegana Estratégica</h3>
              <div className="habit-detail">
                <p className="habit-mission"><strong>Misión:</strong> 120-140g de proteína al día (1.5-1.75g/kg para pérdida de grasa + músculo)</p>
                <div className="habit-how">
                  <h4>Opciones Simples para Delivery/Rápido:</h4>
                  <ul>
                    <li><strong>Poke Bowl:</strong> Pide doble tofu/edamame (~30g proteína)</li>
                    <li><strong>Burrito vegano:</strong> Frijoles negros + guacamole + quinoa (~25g)</li>
                    <li><strong>Tacos de berenjena:</strong> Agrega hummus o frijol refritos (~20g por 3 tacos)</li>
                    <li><strong>Smoothie casero:</strong> 2 plátanos + 2 cucharadas mantequilla de cacahuate + leche de soya (~18g)</li>
                    <li><strong>Snack fácil:</strong> Trail mix (nueces + semillas) (~10g por puño)</li>
                  </ul>
                </div>
                <div className="habit-distribution">
                  <h4>Distribución Diaria:</h4>
                  <p>11am: 20-25g | 2pm: 40-50g | 5pm: 15g | 7pm: 40-50g | Total: ~130g</p>
                </div>
                <div className="habit-why">
                  <h4>¿Por qué tanta proteína vegana?</h4>
                  <p>En déficit calórico, proteína alta preserva músculo mientras pierdes grasa. Las proteínas vegetales tienen menor biodisponibilidad (~70-80% vs animal), así que necesitas un poco más. Esto te mantendrá saciado y recuperando bien del gym.</p>
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
        <h2>Plan de Gym: De 3 a 7 Horas/Semana</h2>
        <div className="gym-progression">
          <h3>Progresión de 4 Semanas</h3>
          <div className="progression-timeline">
            <div className="prog-week">
              <strong>Semanas 1-2:</strong> 4 días (4.5h total) - Adaptación
            </div>
            <div className="prog-week">
              <strong>Semanas 3-4:</strong> 5 días (6h total) - Incremento
            </div>
            <div className="prog-week">
              <strong>Semana 5+:</strong> 6 días (7h total) - Volumen completo
            </div>
          </div>
        </div>

        <div className="gym-split">
          <div className="gym-card">
            <h3>Lunes - Espalda + Bíceps</h3>
            <p className="workout-type">Fuerza (60-75 min)</p>
            <div className="workout-breakdown">
              <ul>
                <li>Dominadas asistidas: 4x8-10</li>
                <li>Remo con barra: 4x10-12</li>
                <li>Pull-downs: 3x12-15</li>
                <li>Curl con mancuernas: 3x12-15</li>
                <li>Curl martillo: 3x12-15</li>
              </ul>
            </div>
          </div>

          <div className="gym-card">
            <h3>Martes - Piernas</h3>
            <p className="workout-type">Fuerza (60-75 min)</p>
            <div className="workout-breakdown">
              <ul>
                <li>Sentadillas: 4x10-12</li>
                <li>Peso muerto rumano: 4x10-12</li>
                <li>Prensa: 3x12-15</li>
                <li>Curl femoral: 3x12-15</li>
                <li>Pantorrillas: 4x15-20</li>
              </ul>
            </div>
          </div>

          <div className="gym-card">
            <h3>Miércoles - LISS Cardio</h3>
            <p className="workout-type">Quema de grasa (45 min)</p>
            <div className="workout-breakdown">
              <ul>
                <li>Caminadora inclinada (12-15%): 30-40 min</li>
                <li>Zona 2 cardio (60-70% FC máx)</li>
                <li>O bicicleta estacionaria a ritmo constante</li>
              </ul>
            </div>
          </div>

          <div className="gym-card">
            <h3>Jueves - Pecho + Tríceps</h3>
            <p className="workout-type">Fuerza (60-75 min)</p>
            <div className="workout-breakdown">
              <ul>
                <li>Press banca/plano: 4x10-12</li>
                <li>Press inclinado: 4x10-12</li>
                <li>Aperturas: 3x12-15</li>
                <li>Fondos en paralelas: 3x8-12</li>
                <li>Extensiones de tríceps: 3x12-15</li>
              </ul>
            </div>
          </div>

          <div className="gym-card">
            <h3>Viernes - Hombros + Abs</h3>
            <p className="workout-type">Fuerza (60 min)</p>
            <div className="workout-breakdown">
              <ul>
                <li>Press militar: 4x10-12</li>
                <li>Elevaciones laterales: 4x12-15</li>
                <li>Elevaciones frontales: 3x12-15</li>
                <li>Pájaros: 3x12-15</li>
                <li>Circuito abs: 3 rondas (plancha, crunches, bicicleta)</li>
              </ul>
            </div>
          </div>

          <div className="gym-card">
            <h3>Sábado - HIIT o Descanso Activo</h3>
            <p className="workout-type">Opcional (30-45 min)</p>
            <div className="workout-breakdown">
              <ul>
                <li>HIIT: 20 seg sprint / 40 seg descanso x 15-20 rondas</li>
                <li>O yoga/stretching profundo</li>
                <li>O caminar 5-10k pasos</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="gym-nutrition">
          <h3>Nutrición para Gym 5:30pm</h3>
          <div className="nutrition-timing">
            <div className="timing-card">
              <h4>Pre-Workout (5:00pm - 30min antes)</h4>
              <p>Carbohidratos rápidos + bajo en fibra/grasa:</p>
              <ul>
                <li>2-3 plátanos maduros</li>
                <li>4-5 dátiles + agua</li>
                <li>Smoothie: 2 plátanos + 1 taza mango congelado</li>
                <li><strong>Evita:</strong> Nueces, semillas, ensaladas (te harán sentir pesado)</li>
              </ul>
            </div>
            <div className="timing-card">
              <h4>Post-Workout (7:00pm - dentro de 1h)</h4>
              <p>Proteína + Carbohidratos para recuperación:</p>
              <ul>
                <li><strong>Delivery:</strong> Burrito vegano grande (frijoles + arroz + guac)</li>
                <li><strong>Delivery:</strong> Poke bowl (arroz + edamame + tofu + verduras)</li>
                <li><strong>Casero rápido:</strong> Tacos de berenjena + frijoles refritos</li>
                <li><strong>Objetivo:</strong> 40-50g proteína + 60-80g carbohidratos</li>
              </ul>
            </div>
          </div>
          <div className="gym-tlp-note">
            <h4>🧠 Nota sobre TLP y Gym:</h4>
            <p>El ejercicio es uno de los mejores reguladores emocionales. Si un día te sientes dysregulado, reduce intensidad pero NO saltes el gym. Incluso 20 min de caminata cuenta. La consistencia &gt; intensidad para salud mental.</p>
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
