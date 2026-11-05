## 2.5. Estudio de viabilidad técnica

En este apartado explicamos qué tecnologías vamos a usar en StockLink, si nuestros equipos pueden con ellas y si el equipo tiene la capacidad para desarrollarlo.

### Pila tecnológica (Tech Stack)

| Capa | Tecnología | Por qué la elegimos |
| --- | --- | --- |
| Diseño | Figma | Permite hacer los prototipos de las pantallas y trabajar en equipo. Es gratuita para estudiantes. |
| Frontend | HTML5, SCSS (BEM) y Angular | HTML5 y SCSS ya los usamos en la maqueta. Angular nos permite hacer una aplicación con varias pantallas y reutilizar componentes. |
| Backend | Node.js + Express | Usamos JavaScript también en el servidor y es fácil crear una API. Ya lo hemos visto en clase. |
| Base de datos | MySQL 8.x | Los datos de StockLink (empresas, productos, categorías y movimientos) están muy relacionados, y una base de datos relacional lo gestiona bien. |
| Calidad | W3C Validator, Lighthouse, WAVE | Comprueban que el código es correcto y accesible. |
| Control de versiones | Git y GitHub | Para trabajar los tres a la vez sin pisarnos el trabajo. |
| Gestión de tareas | GitHub Projects (Kanban) | Para organizar las tareas de cada sprint. |
| Editor | Visual Studio Code | Gratuito y compatible con todo lo anterior. |
| Despliegue | Firebase Hosting (plan gratuito) | Publica la web de forma gratuita y con HTTPS. |

Todas las herramientas son gratuitas, están muy extendidas y tienen mucha documentación, por lo que no tenemos costes de licencias.

### Requisitos de hardware y despliegue

#### Requisitos mínimos y recomendados

| Recurso | Mínimo | Recomendado |
| --- | --- | --- |
| Procesador | 4 núcleos | 6 núcleos o más |
| Memoria RAM | 8 GB | 16 GB |
| Almacenamiento | 20 GB libres, preferiblemente SSD | 40 GB libres en SSD |
| Gráficos | Integrados | Integrados |
| Sistema operativo | Windows, macOS o Linux | Windows, macOS o Linux |
| Conexión | Internet estable | Internet estable |

Recomendamos 16 GB de RAM porque se usan a la vez Angular, el servidor Node.js, MySQL y el navegador. No hace falta tarjeta gráfica dedicada, porque el proyecto no tiene renderizado 3D ni procesamiento pesado.

El software necesario es Node.js (versión LTS), MySQL 8.x, Angular CLI, Git y Visual Studio Code.

#### Equipos que utilizamos

| Componente | Especificación |
| --- | --- |
| Modelo | Acer Veriton Z2594G (PC de sobremesa) |
| Procesador | Intel Core i5-1235U de 12.ª generación, 10 núcleos |
| Memoria RAM | 16 GB (15,7 GB utilizables) |
| Gráficos | Integrados en el procesador |
| Almacenamiento | *(completar: capacidad y espacio libre)* |
| Sistema operativo | Windows 11 Pro, 64 bits |

Este equipo cumple todos los requisitos mínimos y alcanza los recomendados, así que puede ejecutar todo el entorno de desarrollo sin problemas.

#### Equipos cliente (usuario final)

- Solo necesitan un navegador moderno y actualizado (Chrome, Firefox, Edge o Safari). No hay que instalar nada.
- Resolución mínima de 360 px de ancho (móvil), hasta pantallas de escritorio.
- No hay requisitos especiales de RAM, procesador ni aceleración gráfica más allá de los de cualquier navegador actual.

#### Entorno de despliegue

- El proyecto se orienta a un entorno de desarrollo y pruebas, sin despliegue comercial en producción.
- Entorno local: Node.js, MySQL 8.x y Angular CLI.
- Para desplegar la aplicación vamos a utilizar **Firebase Hosting** con su plan gratuito, que publicará el frontend en una dirección del tipo `https://nombre-del-proyecto.web.app`, con HTTPS.
- El despliegue todavía no se ha realizado. Lo haremos cuando tengamos una versión que se pueda enseñar.
- El backend y la base de datos necesitarían un servicio de alojamiento aparte, con coste (recogido en el estudio de viabilidad económica).

#### Acceso a la aplicación

En esta fase del proyecto la aplicación se ejecuta en un entorno local de desarrollo y pruebas. Las pantallas (HTML y SCSS) son una maqueta sin backend ni base de datos, por lo que todavía no permiten iniciar sesión ni guardar datos. Para que cualquier persona pueda verlas sin instalar nada, vamos a publicar la maqueta de forma gratuita en Firebase Hosting, y se accederá desde el navegador mediante una dirección web pública. El acceso real de los usuarios llegará cuando exista el backend y se despliegue en un servidor, algo que queda fuera del alcance actual.

### Curva de aprendizaje y madurez técnica

La mayoría de las tecnologías que vamos a usar ya las hemos trabajado en el ciclo, así que no necesitamos mucho tiempo de autoformación. La más nueva para nosotros es Angular, que todavía no hemos visto en clase y estamos a la espera de que nos lo explique un profesor.

| Tecnología | Conocimiento del equipo | Autoformación | Madurez |
| --- | --- | --- | --- |
| HTML5, CSS y SCSS (BEM) | Alto, lo hemos usado en Diseño de Interfaces | No | Estándar web |
| Git y GitHub | Alto, lo usamos en todos los módulos | No | Muy madura |
| Node.js + Express | Medio, lo hemos visto en Desarrollo Web en Entorno Servidor | Poca, para repasar rutas y sesiones | Muy madura |
| MySQL | Medio, lo hemos visto en Bases de Datos | Poca, para repasar consultas y relaciones | Muy madura |
| Jest + Supertest | Bajo/medio, lo hemos usado en alguna práctica | Poca | Madura |
| Figma | Medio, lo usa sobre todo quien lleva el diseño | Poca | Madura |
| Angular | Nulo por ahora, pendiente de que nos lo explique un profesor | Sí, hasta que se imparta en clase | Madura, con mucha documentación |

Hasta que el profesor nos explique Angular, empezaremos a familiarizarnos con él por nuestra cuenta, con su documentación oficial y su tutorial de la web. Mientras tanto, avanzaremos con las partes que no dependen de Angular (diseño, maqueta HTML y SCSS, backend y base de datos), para no retrasar el proyecto.

Todas las tecnologías son gratuitas, están muy extendidas y tienen mucha documentación y comunidad, así que es fácil encontrar ayuda si nos atascamos.

### Aportación documental

#### 1. Ficha técnica del stack de desarrollo y entorno de ejecución

| Elemento | Tecnología |
| --- | --- |
| Frontend | Angular, HTML5, SCSS (metodología BEM) |
| Backend | Node.js + Express |
| Base de datos | MySQL 8.x |
| Pruebas | Jest + Supertest |
| Diseño | Figma |
| Control de versiones | Git y GitHub |
| Gestión de tareas | GitHub Projects (Kanban) |
| Editor | Visual Studio Code |
| Despliegue | Firebase Hosting, plan gratuito |

| Entorno de ejecución | Especificación |
| --- | --- |
| Desarrollo | Equipo del aula (Intel Core i5 de 12.ª generación, 16 GB de RAM, Windows 11 Pro) |
| Cliente | Navegador moderno (Chrome, Firefox, Edge o Safari), sin instalación |
| Publicación | Firebase Hosting (frontend) |

#### 2. Conclusión sobre la viabilidad técnica

El desarrollo de StockLink es técnicamente viable. Las tecnologías elegidas son gratuitas y tienen mucha documentación, y casi todas las conocemos ya del ciclo. Angular es lo único nuevo y lo cubriremos con autoformación hasta que se imparta en clase. El equipo de trabajo del aula (Intel Core i5 de 12.ª generación con 16 GB de RAM) cumple con holgura los requisitos para ejecutar a la vez Angular, Node.js, MySQL y el navegador. Los usuarios solo necesitan un navegador actual, y la maqueta se puede publicar gratis con Firebase Hosting. Los principales riesgos son la formación en Angular y el poco tiempo de los sprints, y los tenemos recogidos en el análisis de riesgos.
