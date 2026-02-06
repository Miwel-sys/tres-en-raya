# tres-en raya

Juego de tres en raya hecho en javascript con fines didactivos.

## 📋 FASE 0: Preparación del Entorno

### Objetivo
Tener el entorno de desarrollo listo y el repositorio Git configurado.

### Tareas

**1. Instalación de herramientas:**
- [✅] Instalar Visual Studio Code (https://code.visualstudio.com/)
- [✅] Instalar Git (https://git-scm.com/)
- [✅] Crear cuenta en GitHub (https://github.com/)
- [✅] Instalar extensión "Live Server" en VS Code

**2. Crear y configurar el repositorio:**
```bash
mkdir tres-en-raya
cd tres-en-raya
git init
```

**3. Crear archivo `.gitignore`:**
```
.DS_Store
node_modules/
*.log
```

**4. Crear repositorio en GitHub y conectarlo:**
```bash
git remote add origin https://github.com/usuario/tres-en-raya.git
```

---

## 📋 FASE 1: Estructura HTML y CSS Básico

### Objetivo
Crear la interfaz visual del tablero 3x3 con estilos básicos.

### Tareas

**1. Crear estructura de archivos:**
```
tres-en-raya/
├── index.html
├── style.css
└── script.js
```

**2. HTML básico (`index.html`):**
- [ ] Estructura HTML5 correcta
- [ ] Título del juego
- [✅] Tablero con 9 casillas (divs)
- [✅] Botón para reiniciar juego
- [✅] Área para mostrar el turno actual
- [✅] Enlazar CSS y JavaScript

**3. CSS básico (`style.css`):**
- [ ] Centrar el juego en la pantalla
- [✅] Tablero de 3x3 usando Grid o Flexbox
- [✅] Casillas cuadradas con bordes visibles
- [ ] Hover effect en las casillas
- [ ] Estilos para el botón de reinicio
- [ ] Aplicar reglas CSS para su perfecto visionado en movil


**4. JavaScript inicial (`script.js`):**
- [✅] Seleccionar todas las casillas con `querySelectorAll`
- [✅] Añadir console.log() al hacer click en una casilla
- [✅] Verificar que funciona con Live Server

### ✅ Criterios de revisión
- El tablero se ve correctamente en el navegador y el movil
- Los estilos son limpios y centrados
- Click en casillas muestra mensaje en consola
- Commit realizado: `git commit -m "Fase 1: Estructura HTML y CSS"`
- Push a GitHub realizado

---

## 📋 FASE 2: Lógica Básica del Juego

### Objetivo
Implementar la mecánica básica de turnos X y O.

### Tareas

**1. Variables globales necesarias:**
```javascript
let tablero = ['', '', '', '', '', '', '', '', ''];
let jugadorActual = 'X';
let juegoActivo = true;
```

**2. Función para manejar click en casilla:**
- [ ] Verificar que la casilla esté vacía
- [ ] Verificar que el juego esté activo
- [ ] Actualizar el array `tablero`
- [ ] Mostrar X u O en la casilla clickeada
- [ ] Cambiar el turno (X → O → X)
- [ ] Actualizar el texto del turno actual

**3. Función para reiniciar el juego:**
- [ ] Limpiar todas las casillas visualmente
- [ ] Resetear el array `tablero`
- [ ] Volver a X como jugador inicial
- [ ] Reactivar el juego

**4. Testing básico:**
- [ ] Poder jugar alternando X y O
- [ ] No poder hacer click en casilla ocupada
- [ ] Botón de reinicio funciona correctamente

### ✅ Criterios de revisión
- Se pueden colocar X y O alternadamente
- El turno se muestra correctamente
- El botón reiniciar funciona
- Código comentado explicando la lógica
- Commit: `git commit -m "Fase 2: Lógica básica de turnos"`

---

## 📋 FASE 3: Detección de Ganador

### Objetivo
Detectar cuándo hay un ganador o empate.

### Tareas

**1. Definir combinaciones ganadoras:**
```javascript
const combinacionesGanadoras = [
    [0, 1, 2], // Fila 1
    [3, 4, 5], // Fila 2
    [6, 7, 8], // Fila 3
    [0, 3, 6], // Columna 1
    [1, 4, 7], // Columna 2
    [2, 5, 8], // Columna 3
    [0, 4, 8], // Diagonal \
    [2, 4, 6]  // Diagonal /
];
```

**2. Función para verificar ganador:**
- [ ] Recorrer todas las combinaciones ganadoras
- [ ] Verificar si alguna combinación tiene 3 símbolos iguales
- [ ] Retornar true si hay ganador

**3. Función para verificar empate:**
- [ ] Verificar si todas las casillas están llenas
- [ ] Verificar que no hay ganador

**4. Integrar verificaciones después de cada jugada:**
- [ ] Llamar a verificar ganador después de cada movimiento
- [ ] Si hay ganador: mostrar mensaje y detener juego
- [ ] Si hay empate: mostrar mensaje correspondiente
- [ ] Resaltar visualmente la combinación ganadora (opcional)

### ✅ Criterios de revisión
- Detecta correctamente todas las combinaciones ganadoras
- Detecta el empate
- Muestra mensajes claros de resultado
- No se puede seguir jugando tras ganar/empatar
- Commit: `git commit -m "Fase 3: Detección de ganador y empate"`

---

## 📋 FASE 4: Mejoras y Pulido

### Objetivo
Añadir funcionalidades extra y mejorar la experiencia.

### Tareas obligatorias

**1. Contador de puntuaciones:**
- [ ] Variables para contar victorias de X y O
- [ ] Mostrar el marcador en pantalla
- [ ] Actualizar después de cada partida
- [ ] Persistir al reiniciar (solo se resetea con botón específico)

**2. Animaciones CSS:**
- [ ] Transición suave al aparecer X u O
- [ ] Efecto al ganar (resaltar casillas ganadoras)
- [ ] Animación del botón de reinicio

**3. Mejoras de UX:**
- [ ] Cambiar cursor al pasar sobre casillas jugables
- [ ] Cursor "not-allowed" en casillas ocupadas
- [ ] Responsive design (móvil y tablet)

### Tareas opcionales (bonus)

- [ ] Modo 2 jugadores vs Computadora (IA básica)
- [ ] Sonidos al hacer click y al ganar
- [ ] Tema oscuro/claro
- [ ] Historial de partidas
- [ ] Animación de confeti al ganar

### ✅ Criterios de revisión
- Todas las tareas obligatorias completadas
- Código limpio y bien organizado
- README.md con instrucciones de uso
- Commits: uno por cada mejora implementada
- Tag de versión: `git tag v1.0`

---

## 💡 CONSEJOS PARA LA REVISIÓN

**En cada fase revisa:**
1. **Funcionalidad:** ¿Hace lo que debe hacer?
2. **Código limpio:** ¿Es legible? ¿Tiene comentarios?
3. **Git:** ¿Commits con mensajes descriptivos?
4. **Buenas prácticas:** ¿Nombres de variables claros? ¿Funciones pequeñas?

**Reuniones sugeridas:**
- Inicio Fase 0: Explicar el proyecto completo
- Fin de cada fase: Revisar código juntos
- Fin Fase 4: Demo del proyecto final

---

## 📝 RECURSOS ADICIONALES

### Documentación recomendada
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [Git - Documentación oficial](https://git-scm.com/doc)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

### Herramientas útiles
- [Can I Use](https://caniuse.com/) - Compatibilidad de navegadores
- [GitHub Desktop](https://desktop.github.com/) - Alternativa gráfica a Git CLI
- [CodePen](https://codepen.io/) - Para probar código rápidamente
- [Simulador de teléfono móvil](https://chromewebstore.google.com/detail/simulador-de-tel%C3%A9fono-m%C3%B3v/ckejmhbmlajgoklhgbapkiccekfoccmk?hl=es&utm_source=ext_sidebar) - Extensión de chrome para ver apps y web en un móvil

