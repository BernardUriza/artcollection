import React from 'react';
import './NutritionalPlan.css';

function NutritionalPlan() {
  const openPrintableVersion = () => {
    window.open('/plan-nutricional-imprimible.html', '_blank');
  };

  return (
    <div className="nutritional-container">
      <div className="container">
        <div className="header-with-button">
          <h1>Plan Alimenticio Semanal</h1>
          <button className="printable-button" onClick={openPrintableVersion}>
            📄 Versión Imprimible
          </button>
        </div>
        <div className="tip">
          <strong>Mini tip gym:</strong> usa la colación más cercana al entreno (30–60 min antes). Cero aceite, sal/limón/especias a gusto.
        </div>

        <table>
          <thead>
            <tr>
              <th style={{ width: '12%' }}>Día</th>
              <th style={{ width: '22%' }}>Desayuno</th>
              <th style={{ width: '16%' }}>Colación 1</th>
              <th style={{ width: '22%' }}>Comida</th>
              <th style={{ width: '16%' }}>Colación 2</th>
              <th style={{ width: '22%' }}>Cena</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="day">Lunes</td>
              <td>Avena cocida (½ taza) con 1 plátano en rodajas, canela y 1 cda de linaza molida</td>
              <td>1 taza de melón + 10 cacahuates</td>
              <td>4–5 tortillas de maíz con frijol entero (1 taza), nopales y pico de gallo + ensalada verde</td>
              <td>1 manzana o 2 mandarinas</td>
              <td>Papas al horno (400–500 g) con salsa de jitomate y brócoli al vapor + ¼ aguacate opcional</td>
            </tr>
            <tr>
              <td className="day">Martes</td>
              <td>Smoothie suave (2 plátanos + 1 taza papaya + agua + puño de espinaca) y 1–2 tortillas</td>
              <td>1 pera + 1 cda semillas de calabaza</td>
              <td>Arroz jazmín (1½ tazas cocidas) con garbanzo (1 taza) y verduras salteadas en agua/soya + limón</td>
              <td>Vaso de leche de soya sin azúcar + 1 dátil</td>
              <td>2 sopes horneados sin grasa con frijol molido, lechuga y salsa + taza de caldo de verduras</td>
            </tr>
            <tr>
              <td className="day">Miércoles</td>
              <td>2 rebanadas de pan integral con plátano machacado o mermelada sin azúcar y 1 cda linaza</td>
              <td>1 taza de sandía o melón</td>
              <td>Ensalada grande (mix verde, maíz, jitomate, pepino) con tofu al vapor ½–1 taza o frijol negro + 3–4 tortillas</td>
              <td>1 plátano + 8 almendras</td>
              <td>Arroz rojo (1½ tazas cocidas) con lentejas guisadas (1 taza) y calabacitas con elote</td>
            </tr>
            <tr>
              <td className="day">Jueves</td>
              <td>Hotcakes caseros (½ taza avena + 1 plátano + agua, sin aceite) con canela y rodajas de fruta</td>
              <td>1 naranja + 1 dátil</td>
              <td>Pasta de trigo duro (80–90 g en seco) con salsa de jitomate, champiñón y espinaca + frijol blanco (1 taza)</td>
              <td>Pepino y jícama con limón y sal</td>
              <td>4 tostadas horneadas con tinga de setas (sin aceite), frijol molido, lechuga y ¼ aguacate opcional</td>
            </tr>
            <tr>
              <td className="day">Viernes</td>
              <td>Smoothie cacao-suave (2 plátanos + 1 taza leche de soya + ¼ taza avena + 1 cdita cacao + hielo)</td>
              <td>1 taza de piña o mango</td>
              <td>Bowl de papas cambray asadas (500 g) con frijol bayo (1 taza), pico de gallo y limón</td>
              <td>Palitos de zanahoria/pepino con 2 cdas de hummus sin tahini</td>
              <td>4 quesadillas veganas sin aceite con frijol refrito casero (sin aceite), calabacitas y cebolla, salsa verde</td>
            </tr>
            <tr>
              <td className="day">Sábado</td>
              <td>Avena cocida (½ taza) con 1 plátano en rodajas, canela y 1 cda de linaza molida</td>
              <td>1 taza de uvas o melón + 8 almendras</td>
              <td>Arroz jazmín (1½ tazas cocidas) con frijol negro (1 taza), pico de gallo y nopales + 3–4 tortillas</td>
              <td>1 manzana o 2 mandarinas</td>
              <td>Papas/camote al horno (400–500 g) con brócoli al vapor, salsa roja y ¼ aguacate opcional</td>
            </tr>
            <tr>
              <td className="day">Domingo</td>
              <td>Smoothie suave (2 plátanos + 1 taza papaya + agua + puño de espinaca) o fruta entera si prefiere masticar</td>
              <td>1 pera + 1 cda semillas de calabaza</td>
              <td>Pasta de trigo duro (80–90 g en seco) con salsa de jitomate y champiñón, espinaca, y al lado garbanzo (¾–1 taza)</td>
              <td>Pepino y jícama con limón y sal</td>
              <td>6–8 tortillas con frijol bayo entero, calabacitas con elote y salsa verde, sin aceite</td>
            </tr>
          </tbody>
        </table>

        <h2>Lista Completa de Ingredientes</h2>
        <div className="ingredients">
          <div className="ingredients-grid">
            <div className="ingredient-category">
              <h3>Cereales y Granos</h3>
              <ul>
                <li>Avena: 2 tazas (aproximadamente)</li>
                <li>Arroz jazmín: 3 tazas cocidas (1 taza cruda)</li>
                <li>Arroz rojo: 1½ tazas cocidas (½ taza cruda)</li>
                <li>Pasta de trigo duro: 160–180 g en seco</li>
                <li>Pan integral: 4 rebanadas</li>
                <li>Tortillas de maíz: 28–35 piezas</li>
                <li>Tostadas: 4 piezas</li>
                <li>Masa para sopes: 2 piezas</li>
              </ul>
            </div>

            <div className="ingredient-category">
              <h3>Leguminosas</h3>
              <ul>
                <li>Frijol negro: 2 tazas cocido (¾ taza crudo)</li>
                <li>Frijol bayo: 2 tazas cocido (¾ taza crudo)</li>
                <li>Frijol blanco: 1 taza cocido (⅓ taza crudo)</li>
                <li>Frijol molido/refrito: 1½ tazas (sin aceite)</li>
                <li>Garbanzos: 1¾–2 tazas cocidos (⅔ taza crudo)</li>
                <li>Lentejas: 1 taza cocida (⅓ taza cruda)</li>
              </ul>
            </div>

            <div className="ingredient-category">
              <h3>Frutas</h3>
              <ul>
                <li>Plátanos: 12–15 piezas</li>
                <li>Melón: 2–3 tazas</li>
                <li>Sandía: 1 taza</li>
                <li>Papaya: 2 tazas</li>
                <li>Manzanas: 2–3 piezas</li>
                <li>Mandarinas: 4 piezas</li>
                <li>Peras: 2 piezas</li>
                <li>Naranjas: 1–2 piezas</li>
                <li>Piña: 1 taza</li>
                <li>Mango: 1 taza</li>
                <li>Uvas: 1 taza</li>
                <li>Dátiles: 3 piezas</li>
              </ul>
            </div>

            <div className="ingredient-category">
              <h3>Verduras</h3>
              <ul>
                <li>Espinaca: 2–3 puños (200–300 g)</li>
                <li>Nopales: 2 tazas cocidos (300 g)</li>
                <li>Brócoli: 2 tazas (300–400 g)</li>
                <li>Lechuga/mix verde: 3–4 tazas (200 g)</li>
                <li>Jitomates: 6–8 piezas medianas</li>
                <li>Pepinos: 3–4 piezas</li>
                <li>Calabacitas: 4–5 piezas medianas (600 g)</li>
                <li>Elote/maíz: 3 tazas desgranado (400 g)</li>
                <li>Champiñones: 2 tazas (200 g)</li>
                <li>Setas: 1½ tazas (150 g)</li>
                <li>Zanahorias: 3–4 piezas medianas</li>
                <li>Jícama: 1 pieza mediana (300 g)</li>
                <li>Cebollas: 3–4 piezas medianas</li>
                <li>Papas: 1.3–1.5 kg</li>
                <li>Papas cambray: 500 g</li>
                <li>Camote: 400–500 g</li>
              </ul>
            </div>

            <div className="ingredient-category">
              <h3>Proteínas Vegetales</h3>
              <ul>
                <li>Tofu: ½–1 taza (120–200 g)</li>
              </ul>
            </div>

            <div className="ingredient-category">
              <h3>Lácteos Vegetales</h3>
              <ul>
                <li>Leche de soya sin azúcar: 2 tazas (500 ml)</li>
              </ul>
            </div>

            <div className="ingredient-category">
              <h3>Nueces y Semillas</h3>
              <ul>
                <li>Cacahuates: 10 piezas (15 g)</li>
                <li>Semillas de calabaza: 2 cdas (20 g)</li>
                <li>Almendras: 16 piezas (25 g)</li>
                <li>Linaza molida: 5 cdas (40 g)</li>
              </ul>
            </div>

            <div className="ingredient-category">
              <h3>Grasas Saludables</h3>
              <ul>
                <li>Aguacate: 1 pieza mediana (opcional)</li>
                <li>Hummus sin tahini: 2 cdas (30 g)</li>
              </ul>
            </div>

            <div className="ingredient-category">
              <h3>Condimentos y Especias</h3>
              <ul>
                <li>Canela: 2 cdtas (molida)</li>
                <li>Cacao en polvo: 1 cdta (sin azúcar)</li>
                <li>Limones: 4–5 piezas</li>
                <li>Sal: al gusto</li>
                <li>Salsa de jitomate: 2 tazas (500 ml)</li>
                <li>Salsa roja: 1 taza (250 ml)</li>
                <li>Salsa verde: 1½ tazas (400 ml)</li>
                <li>Salsa de soya: 3–4 cdas</li>
                <li>Chile fresco: 3–4 piezas (para pico de gallo)</li>
              </ul>
            </div>

            <div className="ingredient-category">
              <h3>Otros</h3>
              <ul>
                <li>Mermelada sin azúcar: 2–3 cdas (opcional)</li>
                <li>Caldo de verduras: 1 taza (250 ml)</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Plan Narrativo de Nutrición</h2>
        <div className="narrative-plan">
          <div className="narrative-intro">
            <p className="narrative-subtitle">Preparación los fines de semana, tranquilidad entre semana. No es médico, solo educativo.</p>
            <p className="narrative-text">Sábado y domingo son los días para organizarte. En total, unas 2 a 4 horas entre los dos días, para que entre semana solo dediques una horita en la noche a dejar todo listo: tu cena y lo de mañana. Así no corres y comes rico.</p>
          </div>

          <div className="day-narrative">
            <div className="day-header">
              <span className="day-label">Lunes</span>
            </div>
            <div className="narrative-content">
              <p><strong>Desayuno:</strong> calientas ½ taza de avena con agua, cuando espese apagas, le echas canela y encima un plátano en rebanadas. Tranquila, sin prisas.</p>
              <p><strong>Media mañana:</strong> una taza de melón bien frío.</p>
              <p><strong>Comida:</strong> tortillas calientes (unas 4 o 5) con frijoles enteros, nopales y pico de gallo. A un ladito, unas hojitas verdes.</p>
              <p><strong>Antes del ejercicio:</strong> un plátano y un dátil.</p>
              <p><strong>Después del ejercicio:</strong> una mandarina.</p>
              <p><strong>Cena:</strong> papas al horno (400–500 g) con brócoli al vapor y salsa roja. Si se te antoja, un pedacito de aguacate.</p>
              <div className="ritual">
                <p className="ritual-title">Ritual de noche (1 hora):</p>
                <ul>
                  <li>Saca tus tuppers</li>
                  <li>Calienta con un chorrito de agua</li>
                  <li>Saltea verduras sin aceite</li>
                  <li>Sirve tu cena y prepara desayuno y colaciones para el martes</li>
                  <li>Lava lo que usaste y deja avena remojando o fruta lista</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="day-narrative">
            <div className="day-header">
              <span className="day-label">Martes</span>
            </div>
            <div className="narrative-content">
              <p><strong>Desayuno:</strong> un licuado con 2 plátanos, papaya, agua y un puñito de espinaca. Si te dan ganas de masticar, acompáñalo con 1 o 2 tortillas.</p>
              <p><strong>Colación:</strong> 1 pera con una cucharada de semillas de calabaza.</p>
              <p><strong>Comida:</strong> arroz jazmín con garbanzos salteados con cebolla y pimiento; limón encima.</p>
              <p><strong>Antes del ejercicio:</strong> 2 mandarinas.</p>
              <p><strong>Después del ejercicio:</strong> un vaso de leche de soya sin azúcar.</p>
              <p><strong>Cena:</strong> 2 sopes horneados (sin grasa) con frijoles molidos, lechuga y salsa. Acompaña con un caldito sencillo de verduras.</p>
              <div className="ritual">
                <p className="ritual-title">Ritual de noche:</p>
                <ul>
                  <li>Precalienta el comal</li>
                  <li>Recalienta arroz y legumbre</li>
                  <li>Pica verdura para el miércoles</li>
                  <li>Porciona fruta</li>
                  <li>Etiqueta dos tuppers: uno para la comida y otro para colaciones</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="day-narrative">
            <div className="day-header">
              <span className="day-label">Miércoles</span>
            </div>
            <div className="narrative-content">
              <p><strong>Desayuno:</strong> pan integral con plátano machacado o mermelada sin azúcar, y linaza espolvoreada.</p>
              <p><strong>Colación:</strong> una taza de sandía.</p>
              <p><strong>Comida:</strong> ensalada grande con lechugas, maíz, pepino, jitomate y tofu al vapor o frijoles. 3 o 4 tortillas al lado.</p>
              <p><strong>Antes del ejercicio:</strong> un plátano.</p>
              <p><strong>Después del ejercicio:</strong> un dátil y agua.</p>
              <p><strong>Cena:</strong> arroz rojo con lentejas guisadas y calabacitas con elote.</p>
              <div className="ritual">
                <p className="ritual-title">Ritual de noche:</p>
                <ul>
                  <li>Cuece lentejas si necesitas</li>
                  <li>Lava hojas verdes</li>
                  <li>Arma tupper con ensalada lista para el jueves</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="day-narrative">
            <div className="day-header">
              <span className="day-label">Jueves</span>
            </div>
            <div className="narrative-content">
              <p><strong>Desayuno:</strong> hotcakes de avena (1 plátano, ½ taza de avena y agua), sin aceite. Sirve con canela y fruta fresca.</p>
              <p><strong>Colación:</strong> 1 naranja y 1 dátil.</p>
              <p><strong>Comida:</strong> pasta con champiñones, espinaca y salsa de jitomate. Al lado, frijoles blancos.</p>
              <p><strong>Antes del ejercicio:</strong> melón.</p>
              <p><strong>Después del ejercicio:</strong> agua con sal y limón.</p>
              <p><strong>Cena:</strong> tostadas horneadas (unas 4) con tinga de setas, frijol molido y lechuga. Puedes agregar un poco de aguacate.</p>
              <div className="ritual">
                <p className="ritual-title">Ritual de noche:</p>
                <ul>
                  <li>Hornea más tostadas si ya no hay</li>
                  <li>Prepara salsa extra</li>
                  <li>Deja lista la comida del viernes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="day-narrative">
            <div className="day-header">
              <span className="day-label">Viernes</span>
            </div>
            <div className="narrative-content">
              <p><strong>Desayuno:</strong> smoothie de cacao (plátano, avena, leche de soya y una pizca de cacao).</p>
              <p><strong>Colación:</strong> piña o mango en cubitos.</p>
              <p><strong>Comida:</strong> papitas cambray al horno con frijoles bayos, pico de gallo y limón.</p>
              <p><strong>Antes del ejercicio:</strong> fruta (mandarinas o plátano).</p>
              <p><strong>Después del ejercicio:</strong> una manzana.</p>
              <p><strong>Cena:</strong> quesadillas en comal (sin aceite) con frijoles, calabacitas y cebolla. Salsa verde encima.</p>
              <div className="ritual">
                <p className="ritual-title">Ritual de noche:</p>
                <ul>
                  <li>Remoja frijoles si los usarás el domingo</li>
                  <li>Revisa qué frutas hay</li>
                  <li>Congela lo que haya sobrado</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="day-narrative meal-prep-day">
            <div className="day-header">
              <span className="day-label">Sábado</span>
              <span className="prep-badge">Día de cocina</span>
            </div>
            <div className="narrative-content">
              <p><strong>Desayuno:</strong> avena con plátano y canela.</p>
              <p><strong>Colación:</strong> uvas o melón.</p>
              <p><strong>Comida:</strong> arroz con frijol negro, nopales, pico de gallo y tortillas.</p>
              <p><strong>Cena:</strong> papas o camote al horno con brócoli y salsa roja.</p>
              <div className="ritual meal-prep">
                <p className="ritual-title">Meal prep (2.5 horas aprox):</p>
                <ul>
                  <li>Cocina arroz y lentejas</li>
                  <li>Asa papas o camote</li>
                  <li>Prepara salsas</li>
                  <li>Lava y porciona fruta</li>
                  <li>Etiqueta tuppers para los días siguientes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="day-narrative meal-prep-day">
            <div className="day-header">
              <span className="day-label">Domingo</span>
              <span className="prep-badge">Cocina más larga</span>
            </div>
            <div className="narrative-content">
              <p><strong>Desayuno:</strong> smoothie con plátano, papaya, agua y espinaca, o fruta entera.</p>
              <p><strong>Colación:</strong> pera con semillas de calabaza.</p>
              <p><strong>Comida:</strong> pasta con champiñones y jitomate; garbanzos al lado.</p>
              <p><strong>Cena:</strong> tortillas con frijol, calabacitas con elote y salsa verde.</p>
              <div className="ritual meal-prep">
                <p className="ritual-title">Meal prep (4 horas):</p>
                <ul>
                  <li>Cocina arroz, frijoles o lentejas</li>
                  <li>Asa papas, elote o verduras</li>
                  <li>Prepara salsas grandes y fruta</li>
                  <li>Porciona todo y etiqueta</li>
                  <li>Deja lista la comida del lunes y un kit para la cena</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="daily-tips">
            <h3>Consejos diarios</h3>
            <ul>
              <li>Ten siempre tu botellita de agua cerca (1–1.5 L al día).</li>
              <li>Usa sal, limón y especias al gusto, pero nada de aceite extra.</li>
              <li>Si un día no alcanzas a cocinar, hazte un "plato SOS": tortillas, frijoles, salsita y alguna verdura cruda como pepino o jícama.</li>
              <li>Siempre come fruta antes de entrenar y algo ligero después.</li>
              <li>Si tu alimentación es completamente vegetal, consulta a un profesional sobre la vitamina B12.</li>
            </ul>
          </div>

          <div className="narrative-closing">
            <p>La cocina puede ser un lugar de calma. En el día, fruta fresca; en la noche, maíz y papita para cerrar bonito. Que te dé gusto cocinarte.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NutritionalPlan;
