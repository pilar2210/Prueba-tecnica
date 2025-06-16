Instrucciones funcionales
Página de Inicio: con enlaces a "Series" y "Películas"

Página de Series: muestra las series con programType === "series" y releaseYear >= 2010

Página de Películas: igual pero filtrando por "movie"

Orden alfabético por title, hasta 20 resultados

Modal con detalle al pulsar en el título

Filtro por año en ambas vistas

Mensajes de carga y error


¿Cómo decidiste las opciones técnicas y arquitectónicas?

Utilicé React con Hooks para mantener el código limpio y funcional.

Opté por modularizar los componentes (como Modal, Header, etc.) para mantener la escalabilidad.

Usé CSS Modules para mantener el aislamiento de estilos por componente.

Cargué los datos con fetch desde un JSON y gestioné errores y estados para cumplir con los requerimientos.


¿Qué mejorarías?

Añadir test unitarios con Jest y react-testing-library.

Integrar Redux completo para manejar el estado global.

Mejorar la accesibilidad (atributos ARIA, teclado).

Usar React.lazy para cargar pantallas bajo demanda y mejorar el rendimiento.

¿Qué harías si tuvieras más tiempo?

Implementar paginación completa con query params.

Añadir filtros avanzados (rango de años, búsqueda por título).

Implementar modo oscuro con toggle.

Añadir test de integración para flujos completos.

Utilizar TypeScript y ESLint con configuración estricta.
