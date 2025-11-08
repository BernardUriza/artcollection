import React from 'react';
import './WeeklyMealPlan.css';

function WeeklyMealPlan() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="weekly-plan">
      <div className="plan-container">
        {/* Header with Print Button */}
        <div className="plan-header no-print">
          <h1>Plan Alimenticio Semanal</h1>
          <button className="print-btn" onClick={handlePrint}>
            🖨️ Imprimir
          </button>
        </div>

        {/* Print-only Header */}
        <div className="print-only">
          <h1>Plan Alimenticio Semanal</h1>
          <p className="print-date">Fecha: _______________</p>
        </div>

        {/* Quick Tips Box */}
        <div className="tips-box">
          <h3>💡 Tips Rápidos</h3>
          <div className="tips-grid-small">
            <div className="tip-item">
              <strong>Pre-gym:</strong> Come 30-60 min antes (fruta simple)
            </div>
            <div className="tip-item">
              <strong>Hidratación:</strong> 1.5L de agua al día
            </div>
            <div className="tip-item">
              <strong>Sin aceite:</strong> Usa agua/caldo para cocinar
            </div>
            <div className="tip-item">
              <strong>Domingo:</strong> 2 horas de meal prep = semana tranquila
            </div>
          </div>
        </div>

        {/* Weekly Table */}
        <table className="meal-table">
          <thead>
            <tr>
              <th>Día</th>
              <th>Desayuno</th>
              <th>Colación 1</th>
              <th>Comida</th>
              <th>Colación 2</th>
              <th>Cena</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="day-cell">L</td>
              <td>Avena cocida (½ taza) con 1 plátano en rodajas, canela y 1 cda de linaza molida</td>
              <td>1 taza de melón + 10 cacahuates</td>
              <td>4–5 tortillas de maíz con frijol entero (1 taza), nopales y pico de gallo + ensalada verde</td>
              <td>1 manzana o 2 mandarinas</td>
              <td>Papas al horno (400–500 g) con salsa de jitomate y brócoli al vapor + ¼ aguacate opcional</td>
            </tr>
            <tr>
              <td className="day-cell">M</td>
              <td>Smoothie suave (2 plátanos + 1 taza papaya + agua + puño de espinaca) y 1–2 tortillas</td>
              <td>1 pera + 1 cda semillas de calabaza</td>
              <td>Arroz jazmín (1½ tazas cocidas) con garbanzo (1 taza) y verduras salteadas en agua/soya + limón</td>
              <td>Vaso de leche de soya sin azúcar + 1 dátil</td>
              <td>2 sopes horneados sin grasa con frijol molido, lechuga y salsa + taza de caldo de verduras</td>
            </tr>
            <tr>
              <td className="day-cell">M</td>
              <td>2 rebanadas de pan integral con plátano machacado o mermelada sin azúcar y 1 cda linaza</td>
              <td>1 taza de sandía o melón</td>
              <td>Ensalada grande (mix verde, maíz, jitomate, pepino) con tofu al vapor ½–1 taza o frijol negro + 3–4 tortillas</td>
              <td>1 plátano + 8 almendras</td>
              <td>Arroz rojo (1½ tazas cocidas) con lentejas guisadas (1 taza) y calabacitas con elote</td>
            </tr>
            <tr>
              <td className="day-cell">J</td>
              <td>Hotcakes caseros (½ taza avena + 1 plátano + agua, sin aceite) con canela y rodajas de fruta</td>
              <td>1 naranja + 1 dátil</td>
              <td>Pasta de trigo duro (80–90 g en seco) con salsa de jitomate, champiñón y espinaca + frijol blanco (1 taza)</td>
              <td>Pepino y jícama con limón y sal</td>
              <td>4 tostadas horneadas con tinga de setas (sin aceite), frijol molido, lechuga y ¼ aguacate opcional</td>
            </tr>
            <tr>
              <td className="day-cell">V</td>
              <td>Smoothie cacao-suave (2 plátanos + 1 taza leche de soya + ¼ taza avena + 1 cdita cacao + hielo)</td>
              <td>1 taza de piña o mango</td>
              <td>Bowl de papas cambray asadas (500 g) con frijol bayo (1 taza), pico de gallo y limón</td>
              <td>Palitos de zanahoria/pepino con 2 cdas de hummus sin tahini</td>
              <td>4 quesadillas veganas sin aceite con frijol refrito casero (sin aceite), calabacitas y cebolla, salsa verde</td>
            </tr>
            <tr>
              <td className="day-cell">S</td>
              <td>Avena cocida (½ taza) con 1 plátano en rodajas, canela y 1 cda de linaza molida</td>
              <td>1 taza de uvas o melón + 8 almendras</td>
              <td>Arroz jazmín (1½ tazas cocidas) con frijol negro (1 taza), pico de gallo y nopales + 3–4 tortillas</td>
              <td>1 manzana o 2 mandarinas</td>
              <td>Papas/camote al horno (400–500 g) con brócoli al vapor, salsa roja y ¼ aguacate opcional</td>
            </tr>
            <tr>
              <td className="day-cell">D</td>
              <td>Smoothie suave (2 plátanos + 1 taza papaya + agua + puño de espinaca) o fruta entera si prefiere masticar</td>
              <td>1 pera + 1 cda semillas de calabaza</td>
              <td>Pasta de trigo duro (80–90 g en seco) con salsa de jitomate y champiñón, espinaca, y al lado garbanzo (¾–1 taza)</td>
              <td>Pepino y jícama con limón y sal</td>
              <td>6–8 tortillas con frijol bayo entero, calabacitas con elote y salsa verde, sin aceite</td>
            </tr>
          </tbody>
        </table>

        {/* Shopping List */}
        <div className="shopping-section">
          <h2>Lista de Compras Semanal</h2>
          <div className="shopping-grid">
            <div className="shopping-category">
              <h3>🌾 Granos</h3>
              <ul>
                <li>Avena: 2 tazas</li>
                <li>Arroz jazmín: 1 taza cruda</li>
                <li>Arroz rojo: ½ taza cruda</li>
                <li>Pasta: 160-180 g</li>
                <li>Pan integral: 4 rebanadas</li>
                <li>Tortillas: 28-35 piezas</li>
                <li>Tostadas: 4 piezas</li>
              </ul>
            </div>

            <div className="shopping-category">
              <h3>🫘 Legumbres</h3>
              <ul>
                <li>Frijol negro: ¾ taza crudo</li>
                <li>Frijol bayo: ¾ taza crudo</li>
                <li>Frijol blanco: ⅓ taza crudo</li>
                <li>Garbanzos: ⅔ taza crudo</li>
                <li>Lentejas: ⅓ taza cruda</li>
              </ul>
            </div>

            <div className="shopping-category">
              <h3>🍎 Frutas</h3>
              <ul>
                <li>Plátanos: 12-15 pzas</li>
                <li>Melón: 2-3 tazas</li>
                <li>Papaya: 2 tazas</li>
                <li>Manzanas: 2-3 pzas</li>
                <li>Mandarinas: 4 pzas</li>
                <li>Peras: 2 pzas</li>
                <li>Dátiles: 3 pzas</li>
              </ul>
            </div>

            <div className="shopping-category">
              <h3>🥬 Verduras</h3>
              <ul>
                <li>Espinaca: 200-300 g</li>
                <li>Nopales: 300 g</li>
                <li>Brócoli: 300-400 g</li>
                <li>Lechuga: 200 g</li>
                <li>Jitomates: 6-8 pzas</li>
                <li>Pepinos: 3-4 pzas</li>
                <li>Calabacitas: 600 g</li>
                <li>Papas: 1.5 kg</li>
              </ul>
            </div>

            <div className="shopping-category">
              <h3>🥜 Extras</h3>
              <ul>
                <li>Almendras: 25 g</li>
                <li>Cacahuates: 15 g</li>
                <li>Linaza molida: 40 g</li>
                <li>Tofu: 120-200 g</li>
                <li>Leche de soya: 500 ml</li>
                <li>Aguacate: 1 pza (opcional)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Simple Tips Section */}
        <div className="simple-tips">
          <h2>Consejos para la Semana</h2>
          <div className="tips-columns">
            <div className="tip-column">
              <h3>🗓️ Domingo de Meal Prep</h3>
              <p>Dedica 2 horas para cocinar:</p>
              <ul>
                <li>Cocina todos los granos (arroz, lentejas)</li>
                <li>Cocina legumbres (3-4 tipos)</li>
                <li>Corta verduras y guarda en tuppers</li>
                <li>Porción fruta y snacks</li>
              </ul>
              <p className="tip-benefit"><strong>Beneficio:</strong> Toda la semana solo recalientas y armas el plato en 10 minutos.</p>
            </div>

            <div className="tip-column">
              <h3>💧 Hidratación</h3>
              <p>Toma 1.5L de agua al día:</p>
              <ul>
                <li>1 vaso al despertar</li>
                <li>1 vaso antes de cada comida</li>
                <li>1 vaso a media tarde</li>
                <li>Lleva una botella contigo</li>
              </ul>
              <p className="tip-benefit"><strong>Beneficio:</strong> Mejor digestión, más energía, menos antojos.</p>
            </div>

            <div className="tip-column">
              <h3>🍽️ Método del Plato</h3>
              <p>Divide tu plato visualmente:</p>
              <ul>
                <li>½ plato = Verduras</li>
                <li>¼ plato = Legumbres (proteína)</li>
                <li>¼ plato = Granos (carbohidrato)</li>
              </ul>
              <p className="tip-benefit"><strong>Beneficio:</strong> Nutrición balanceada sin pesar porciones.</p>
            </div>
          </div>
        </div>

        {/* Checkboxes for tracking */}
        <div className="tracking-section no-print">
          <h2>Seguimiento Semanal</h2>
          <p className="tracking-note">Marca cada día que completes el plan:</p>
          <div className="checkbox-week">
            <label><input type="checkbox" /> Lunes</label>
            <label><input type="checkbox" /> Martes</label>
            <label><input type="checkbox" /> Miércoles</label>
            <label><input type="checkbox" /> Jueves</label>
            <label><input type="checkbox" /> Viernes</label>
            <label><input type="checkbox" /> Sábado</label>
            <label><input type="checkbox" /> Domingo</label>
          </div>
        </div>

        {/* Print-friendly tracking */}
        <div className="print-only tracking-print">
          <h2>Seguimiento Semanal</h2>
          <div className="checkbox-print-week">
            <div>☐ Lunes</div>
            <div>☐ Martes</div>
            <div>☐ Miércoles</div>
            <div>☐ Jueves</div>
            <div>☐ Viernes</div>
            <div>☐ Sábado</div>
            <div>☐ Domingo</div>
          </div>
        </div>

        {/* Footer */}
        <div className="plan-footer">
          <p>💚 Este plan es educativo. Consulta siempre con tu nutriólogo para ajustes personalizados.</p>
          <p className="print-only">Plan generado el: {new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </div>
    </div>
  );
}

export default WeeklyMealPlan;
