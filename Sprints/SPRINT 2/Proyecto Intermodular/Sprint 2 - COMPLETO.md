# Sprint 2: Capítulo II. Análisis del contexto y viabilidad

## Coevaluación

| Integrante | Calificacion |
|---|---|
| Daniel Ortiz | 100% |
| Pepe Gil | 100% |
| Daniel Jimenez | 100% |

## Índice

- 2.1. Sector profesional y perfil de usuarios
- 2.2. Análisis de la necesidad
- 2.3. Estudio de soluciones existentes
- 2.4. Partes interesadas (Stakeholders)
- 2.5. Estudio de viabilidad técnica
- 2.6. Estudio de viabilidad económica
- 2.7. Estudio de viabilidad legal y normativa
  - 2.7.1. Protección de datos personales
  - 2.7.2. Propiedad intelectual y licencias
  - 2.7.3. Accesibilidad y otros requisitos aplicables
- 2.8. Análisis de riesgos inicial

---

## 2.1. Sector profesional y perfil de usuarios

### 2.1.1. Caracterización del sector

StockLink se dirige al sector de la gestión logística y el control de inventario en PYMEs. El público objetivo son negocios con uno o varios locales (retail, hostelería, farmacias y almacenes) que hoy gestionan su stock en Excel, en papel o de memoria, así como multiempresas y franquicias pequeñas-medianas que necesitan ver todos sus locales desde una misma sesión.

Es un sector con un nivel de digitalización medio-bajo. Las empresas son conscientes de la necesidad de digitalizarse, pero buscan soluciones asequibles, sencillas y sin curva de aprendizaje. Las tendencias principales son el software en la nube, el uso de móvil y tablet como terminal de trabajo, el escaneo de códigos de barras o QR, las alertas automáticas de stock y los paneles de control en tiempo real.

* **Ámbito de actividad:** Gestión logística y control de inventario en PYMEs.
* **Tipos de organización:** Retail, hostelería, farmacias, almacenes, multiempresas y franquicias pequeñas-medianas.
* **Estructura:** Uno o varios locales por empresa, con equipos reducidos y roles que se solapan.
* **Procesos clave:** Recepción de mercancía, registro de entradas y salidas, consulta de existencias, reposición e inventarios periódicos.
* **Herramientas actuales:** Excel, papel o memoria; sin integración entre locales.
* **Problemas habituales:** Roturas de stock, excedentes de productos erróneos, falta de organización, pérdida de tiempo y datos dispersos.
* **Nivel de digitalización:** Medio-bajo.
* **Tendencias tecnológicas:** Software en la nube, uso en móvil y tablet, escaneo de códigos, alertas de stock mínimo y dashboards en tiempo real.
* **Necesidades tecnológicas:** Interfaz simple, acceso multidispositivo, visión multilocal desde una sola sesión, roles y permisos, y trazabilidad de movimientos.

---

### 2.1.2. Segmentación de perfiles de usuario

Dentro de cada organización se identifican tres perfiles de usuario final: gerentes, encargados de local y personal operativo.

#### Persona 1: Gerente (visión global y toma de decisiones)
* **Rol laboral:** Gerente o propietario de la PYME o franquicia.
* **Competencias digitales:** Medias. Usa móvil, correo y banca online, pero poco software de gestión.
* **Entorno de uso:** Móvil y portátil; consultas rápidas durante el día, dentro o fuera del local.
* **Objetivos principales:** Ver de un vistazo el estado del stock de todos los locales, recibir alertas de reposición, controlar costes y gestionar los usuarios y permisos.

#### Persona 2: Encargado de local (consulta y actualización diaria)
* **Rol laboral:** Encargado o responsable de un local o almacén.
* **Competencias digitales:** Medias-bajas. Maneja Excel básico y el móvil a diario.
* **Entorno de uso:** Tablet u ordenador en el local; uso frecuente a lo largo de la jornada.
* **Objetivos principales:** Consultar y actualizar el inventario de su local, revisar existencias, detectar faltas de producto y preparar pedidos de reposición.

#### Persona 3: Personal operativo (registro de entradas y salidas)
* **Rol laboral:** Dependiente, camarero, operario de almacén o personal de farmacia.
* **Competencias digitales:** Básicas. Usa el móvil, pero no software de gestión.
* **Entorno de uso:** Móvil o tablet en el puesto de trabajo, de pie, con prisa y a veces con guantes.
* **Objetivos principales:** Registrar entradas y salidas de forma rápida y sin errores, y consultar si hay existencias de un producto.

---

### Conclusión de diseño

En conjunto, se trata de un público con un nivel tecnológico medio-bajo, por lo que la interfaz debe ser simple, sin curva de aprendizaje y usable en móviles y tablets. Cada perfil requiere una vista adaptada: dashboard con resúmenes y alertas para el gerente, tablas y filtros para el encargado, y botones grandes con pocos pasos para el personal operativo. Los permisos diferenciados por rol refuerzan además la seguridad del sistema.

---

## 2.2. Análisis de la necesidad

### 2.2.1. Planteamiento del problema

Muchas pequeñas y medianas empresas tienen dificultades para controlar el stock de sus productos. Algunas utilizan Excel, papel o apuntan las cosas de memoria, lo que provoca errores, falta de productos y compras innecesarias.

Por eso surge **StockLink**, una aplicación que permite gestionar el stock de forma sencilla y consultar las existencias de varios locales desde un mismo sitio.

### 2.2.2. Situación actual (As-Is)

Actualmente, muchas empresas controlan sus productos de forma manual. Cuando llega mercancía, se apunta en papel o en Excel, y las ventas o salidas no siempre se registran al momento.

Esto hace que los datos no estén actualizados y que, para saber si queda un producto, haya que preguntar a los trabajadores o revisar las estanterías. Además, cada local puede llevar su propio control, lo que dificulta tener una visión general del negocio.

### 2.2.3. Problemas y consecuencias

Los principales problemas que se han identificado son:

- Errores al apuntar las entradas y salidas de productos.
- Falta de información actualizada sobre las existencias.
- Productos agotados o compras innecesarias.
- Pérdida de tiempo al revisar el inventario.
- Dificultad para saber quién ha realizado cada movimiento.
- Falta de comunicación entre los diferentes locales.
- Informes realizados manualmente y con datos poco fiables.

### 2.2.4. Propuesta de StockLink (To-Be)

StockLink busca solucionar estos problemas mediante una aplicación sencilla que permita controlar el stock desde el móvil, la tablet o el ordenador.

Las principales ventajas serán:

- Registrar las entradas y salidas de productos fácilmente.
- Consultar las existencias actualizadas.
- Recibir avisos cuando queden pocas unidades.
- Gestionar varios locales desde una misma aplicación.
- Consultar los movimientos realizados y quién los ha hecho.
- Generar informes para ayudar a tomar decisiones.
- Establecer diferentes permisos según el puesto de cada trabajador.

De esta manera, se pretende ahorrar tiempo, reducir errores y facilitar el trabajo diario de las empresas.

### 2.2.5. Aportación documental

#### 2.2.5.1. Investigación y bases teóricas

La idea de StockLink se apoya en diferentes estudios relacionados con la gestión de inventarios.

Estos estudios muestran que tener demasiado stock puede generar gastos innecesarios, mientras que tener poco puede provocar la pérdida de ventas. También señalan que los registros manuales y las hojas de cálculo pueden contener errores y no coincidir con las existencias reales.

Por otro lado, disponer de información actualizada ayuda a organizar mejor las compras y evitar problemas de falta de productos. Por eso, StockLink busca ofrecer una herramienta fácil de utilizar y adaptada a las necesidades de las pequeñas empresas.

Las referencias utilizadas se completarán posteriormente con el formato bibliográfico que se solicite.

#### 2.2.5.2. Flujo actual y flujo propuesto

**Situación actual:** la mercancía llega, se revisa y se apunta manualmente. Las salidas no siempre se registran y, cuando se necesita reponer un producto, muchas veces ya se ha agotado. Finalmente, se realiza un recuento para corregir los errores.

**Situación propuesta:** la mercancía se registra en StockLink y el stock se actualiza automáticamente. Cuando se venden o utilizan productos, se registra su salida. Si quedan pocas unidades, la aplicación avisa para facilitar la reposición.

#### 2.2.5.3. Necesidades principales de la aplicación

Para solucionar los problemas detectados, StockLink deberá incluir las siguientes funciones y características:

- **Gestión de productos:** añadir, modificar y organizar los productos.
- **Control del stock:** registrar entradas y salidas y consultar las existencias.
- **Avisos de reposición:** informar cuando queden pocas unidades.
- **Gestión de varios locales:** consultar y controlar el stock de diferentes establecimientos.
- **Usuarios y permisos:** permitir que cada trabajador acceda a las funciones que necesita.
- **Historial de movimientos:** consultar los cambios realizados en el inventario.
- **Informes:** mostrar información útil para organizar las compras.
- **Proveedores y pedidos:** facilitar la gestión de los productos que se necesitan reponer.
- **Diseño sencillo:** crear una aplicación fácil de entender y utilizar.
- **Acceso desde diferentes dispositivos:** utilizarla desde móviles, tablets y ordenadores.
- **Seguridad y copias de datos:** proteger la información de la empresa.
- **Exportación de datos:** permitir guardar la información en formatos como CSV o PDF.

---

## 2.3. Estudio de soluciones existentes

### ¿En qué consiste?

Se ha realizado un análisis comparativo de mercado (benchmarking) para identificar qué alternativas existen actualmente a StockLink y por qué nuestra propuesta aporta un valor diferencial frente a ellas. Este análisis amplía el benchmarking ya realizado en el Sprint 1, añadiendo los aspectos de coste, curva de aprendizaje, usabilidad, capacidad multiplataforma y extensibilidad que pide este apartado.

### Identificación de software competidor

Se han seleccionado tres alternativas reales del mercado, todas ellas soluciones comerciales SaaS especializadas en gestión de inventario:

1. **Zoho Inventory**
2. **inFlow Inventory**
3. **Sortly**

### Análisis comparativo

**Coste de implantación**

- Zoho Inventory ofrece un plan gratuito permanente y planes de pago desde unos 29 €/mes facturados anualmente, hasta unos 249 €/mes en el plan Enterprise.
- inFlow Inventory no tiene plan gratuito: sus planes de pago arrancan en torno a 129 €/mes y suben hasta varios cientos de euros al mes en los planes más altos.
- Sortly tiene un plan gratuito permanente y planes de pago desde unos 24 €/mes facturados anualmente, hasta 149-299 €/mes según el volumen de artículos y usuarios.

**Curva de aprendizaje**

Zoho Inventory e inFlow Inventory se consideran intuitivas para usuarios sin experiencia previa en gestión de inventario, aunque Zoho puede resultar algo más compleja de configurar al integrarse con todo el ecosistema Zoho (facturación, CRM, etc.). Sortly destaca especialmente por un proceso de incorporación y flujos de trabajo simplificados, siendo la más sencilla de las tres para empezar a usar desde cero.

**Usabilidad de la interfaz gráfica**

Las tres ofrecen interfaces web modernas. Zoho e inFlow están centradas en el inventario con paneles de control y tablas de datos; Sortly destaca por un enfoque mucho más visual, organizando el inventario en carpetas y subcarpetas con fotos de cada producto, lo que la hace especialmente cómoda para usuarios con poca experiencia técnica.

**Capacidad multiplataforma**

- inFlow funciona en Windows y como aplicación web, con apps móviles para iPhone y Android, pero no está disponible en Mac.
- Zoho Inventory es accesible desde navegador web (agnóstico de sistema operativo) y cuenta con apps para Android e iOS.
- Sortly funciona en móvil, escritorio o tablet mediante sincronización en la nube, con apps nativas para iOS y Android.
- Ninguna de las tres ofrece aplicación de escritorio nativa para Linux.

**Extensibilidad**

Zoho se integra bien con el resto de su propio ecosistema (Zoho Books, Zoho CRM) y con plataformas de ecommerce. inFlow ofrece integraciones con contabilidad y más de 35 plataformas de ecommerce. Sortly tiene integraciones más limitadas (principalmente QuickBooks), centrándose más en ser una herramienta independiente y autocontenida.

**Limitaciones detectadas**

- Zoho: interfaz funcional pero algo genérica; puede resultar excesiva para una pyme que solo necesita controlar stock. Permite tener varias organizaciones en una misma cuenta, pero hay que cambiar de una a otra y configurar cada una por separado.
- inFlow: sin plan gratuito, coste de entrada más alto, y no cubre Mac de forma nativa. Está pensada para una sola empresa con varios almacenes.
- Sortly: los límites de artículos únicos son el principal obstáculo (el plan Ultra se queda en 2.000 artículos), y los permisos de usuario no son muy detallados.
- Ninguna de las tres está pensada para que una pyme con varios negocios independientes los gestione todos de forma sencilla desde una misma sesión, que es el problema central que resuelve StockLink.

### Matriz comparativa

| Parámetro | Zoho Inventory | inFlow Inventory | Sortly | StockLink |
|---|---|---|---|---|
| Precio | Gratis – 249 €/mes | Sin gratis, desde 129 €/mes | Gratis – 149/299 €/mes | Sin coste de licencia (proyecto propio) |
| Multiplataforma | Web, Android, iOS | Windows, Web, Android, iOS (no Mac) | Web, Android, iOS | Web responsive (cualquier SO con navegador) |
| Experiencia de usuario | Buena, algo genérica | Muy buena | Muy visual y sencilla | Simple, pensada para 3 perfiles de usuario |
| Generación de informes | Sí (compras/ventas) | Sí (órdenes, stock) | Limitada (reports básicos) | Básica (alertas y stock por empresa/local) |
| Soporte de periféricos | Lectores de código de barras | Lectores de código de barras | Escaneo QR/código de barras por móvil | No contemplado (fuera del alcance) |
| Gestión multiempresa | Sí, con organizaciones separadas (hay que cambiar de una a otra) | No | No | Sí, es la función principal (varias empresas desde una sesión) |

### Justificación de la propuesta

Ninguna de las tres soluciones analizadas está pensada de forma sencilla para el caso de uso central de StockLink: una pyme con varios negocios independientes que necesita gestionarlos todos desde una única cuenta. Zoho permite varias organizaciones, pero cada una se configura y se maneja por separado, dentro de una herramienta más compleja de lo que necesita un negocio pequeño. inFlow está pensada para una sola empresa con varios almacenes, con un coste de entrada que puede no compensar a un negocio pequeño. Sortly, aunque es la más accesible y visual de las tres, limita rápidamente el número de artículos gestionables y tiene permisos poco detallados. StockLink se posiciona así en un hueco que ninguna cubre bien: la sencillez de uso de una herramienta ligera, combinada con una gestión multiempresa pensada específicamente para pymes pequeñas con varios locales, sin coste de licencia ni los límites de artículos o usuarios que imponen estas plataformas comerciales.

---

## 2.4. Partes interesadas (Stakeholders)

En este apartado indicamos quién tiene interés en StockLink o se verá afectado por él, y cuánta influencia tiene cada grupo en las decisiones del proyecto.

### Identificación

**Partes interesadas internas**

- El equipo de desarrollo: Daniel Jiménez Ramírez (UI/UX), Pepe Gil Cué (Frontend) y Daniel Ortiz (SysAdmin y QA).

**Partes interesadas externas**

- Las empresas y pequeños negocios que usarían StockLink (clientes). Todavía no sabemos cuál será el cliente real, pero lo más probable es que sea la empresa Rincoflor.
- Los proveedores de esas empresas, que reciben los pedidos de reposición.
- Los proveedores de servicios tecnológicos, como Google (Firebase Hosting) y GitHub.
- Los organismos reguladores y auditores en protección de datos (AEPD), por el RGPD y la LOPDGDD.

### Análisis de poder e interés

| Rol/Grupo | Tipo | Expectativas principales | Nivel de influencia | Estrategia de comunicación |
| --- | --- | --- | --- | --- |
| Equipo de desarrollo | Interno | Terminar el proyecto a tiempo, repartir bien el trabajo y aprender | Alto | Reuniones semanales, grupo de WhatsApp y tablero de GitHub Projects |
| Gestor o administrador de la empresa | Interno (usuario) | Controlar todo el stock desde un solo sitio y varias empresas con una sesión | Alto | Probar las pantallas con él y recoger su opinión |
| Responsable de local | Interno (usuario) | Ver el stock de su local y recibir avisos de stock bajo | Medio | Pruebas de uso y feedback sobre la interfaz |
| Personal de almacén | Interno (usuario) | Registrar entradas y salidas de forma rápida y sencilla | Bajo | Interfaz clara y pruebas sencillas de uso |
| Empresas clientes | Externo | Reducir errores y roturas de stock a un coste bajo | Medio | Demostración de la aplicación y entrevistas. Todavía no sabemos qué cliente real será, pero lo más seguro es que sea la empresa Rincoflor |
| Proveedores de las empresas | Externo | Recibir pedidos de reposición a tiempo | Bajo | Ninguna comunicación directa con el proyecto |
| Google (Firebase) y GitHub | Externo | Que se cumplan sus condiciones de uso | Bajo | Consulta de su documentación y condiciones |
| AEPD y auditores | Externo | Que se cumpla el RGPD y la LOPDGDD | Medio | Revisión del apartado legal y de protección de datos |

### Conclusión

El grupo con más influencia es el equipo de desarrollo, que decide el alcance y los plazos. Los usuarios y las empresas son los que más interés tienen en el resultado, por lo que su opinión se tendrá en cuenta en el diseño. Los proveedores y los servicios tecnológicos tienen poca influencia, pero hay que respetar sus condiciones de uso.

---

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

---

## 2.6. Estudio de viabilidad económica

### 2.6.1 Costes de personal

Las tarifas corresponden a perfiles junior (Glassdoor España), diferenciadas por rol, igual que en el apartado 1.4.6 del Sprint 1.

| Miembro | Rol | Horas | Coste/hora | Subtotal |
| --- | --- | ---: | ---: | ---: |
| Daniel Jiménez Ramírez | Diseño UI/UX | 138 h | 11 €/h | 1.518 € |
| Pepe Gil Cué | Desarrollo Frontend | 379 h | 14 €/h | 5.306 € |
| Daniel Ortiz | SysAdmin / Control de Calidad | 179 h | 12 €/h | 2.148 € |
| **Subtotal personal** | | **696 h** | | **8.972 €** |

Las reuniones (60 h) y la contingencia (≈10 %, 69 h) ya están incluidas en las 696 h, por lo que no se suman aparte.

**Justificación de las horas.** Las horas de este estudio son las del presupuesto básico del Sprint 1 (apartado 1.4), para mantener la coherencia entre documentos. No se han fijado de forma arbitraria: se han estimado por capacidad del equipo (12 h/semana por persona, 6 en clase y 6 en casa, multiplicadas por las semanas oficiales de cada Resultado de Aprendizaje) y se han repartido en tareas según la complejidad de cada fase. Incluyen reuniones de coordinación y un 10 % de contingencia. Las horas totales salen de sumar las tareas de los seis sprints (567 h de tareas + 60 h de reuniones + 69 h de contingencia) y se contrastan con la dedicación real: 232 h por persona entre 19,4 semanas son ≈12 h/semana.

### 2.6.2 Infraestructura y licencias

| Concepto | Cálculo | Total |
| --- | --- | ---: |
| Hardware (amortización) | 3 portátiles × ≈75 € (800 €, 4 años de vida útil, 19,4 semanas) | 225,00 € |
| Dominio | 15 €/año | 15,00 € |
| Hosting estático | ≈3 €/mes × 12 meses | 36,00 € |
| Licencias y herramientas | VS Code, Git/GitHub, Figma (planes gratuitos), validador W3C, Lighthouse, WAVE, axe DevTools, NVDA | 0,00 € |
| Certificado SSL | Let's Encrypt | 0,00 € |
| Copias de seguridad | El código está en GitHub | 0,00 € |
| IVA (21 %) sobre producción | 51 € × 21 % | 10,71 € |
| **Subtotal infraestructura** | | **286,71 €** |

Todas las herramientas de desarrollo son gratuitas o de código abierto, por lo que no hay coste de licencias.

### 2.6.3 Costes indirectos y mantenimiento

El equipo trabaja de forma mixta (en clase y en casa). Se imputan los costes de forma estimada y conservadora.

| Concepto | Cálculo | Total |
| --- | --- | ---: |
| Electricidad | Portátil ≈50 W × 696 h = 34,8 kWh × 0,15 €/kWh | 5,22 € |
| Conectividad | Fibra ≈35 €/mes × 4,5 meses × 3 personas × 50 % (trabajo en casa) × 25 % (uso atribuible al proyecto) | 59,06 € |
| Soporte post-despliegue (1.er año) | 1 h/mes × 12 meses × 12 €/h | 144,00 € |
| **Subtotal indirectos y mantenimiento** | | **208,28 €** |

Supuestos: la electricidad se calcula con todas las horas del proyecto (aunque la mitad sea en clase) para no infravalorar el coste. En conectividad solo se imputa la mitad del tiempo (el trabajo en casa) y una cuarta parte de la cuota, porque la conexión también se usa para fines personales.

### 2.6.4 Presupuesto resumen

| Partida | Total |
| --- | ---: |
| Personal | 8.972,00 € |
| Hardware | 225,00 € |
| Software/Servicios (con IVA) | 61,71 € |
| Indirectos y mantenimiento | 208,28 € |
| Contingencias | Incluidas en las horas (≈10 %) |
| **TOTAL** | **9.466,99 €** |

- Gasto real durante el desarrollo: **0 €** (el resto es valor imputado del trabajo y de los recursos).
- Coste anual tras el lanzamiento: **205,71 €** (144 € de mantenimiento + 61,71 € de producción).

### 2.6.5 ROI / ahorro estimado

StockLink está pensada sobre todo para pequeñas y medianas empresas, aunque también puede usarse en empresas grandes con varios locales. Se estima el ahorro para una pyme tipo con un local que hoy controla el inventario de forma manual (papel u hojas de cálculo). Son estimaciones con supuestos explícitos, ajustables a cada empresa.

**Supuestos (por empresa):**

- Coste hora de un empleado de administración o almacén: 12 €/h.
- Control manual del inventario: ≈6 h/semana. Con StockLink: ≈2 h/semana. Ahorro: 4 h/semana.
- Menos roturas de stock, excesos y errores de recuento: se estima un ahorro del 2 % sobre un stock medio de 20.000 €.

| Concepto | Cálculo | Ahorro anual |
| --- | --- | ---: |
| Horas de gestión manual | 4 h/semana × 52 semanas × 12 €/h | 2.496 € |
| Menos roturas, excesos y errores | 2 % × 20.000 € de stock medio | 400 € |
| **Ahorro anual por empresa** | | **2.896 €** |

**Plazo de recuperación** = inversión ÷ ahorro neto anual. La inversión es el total del presupuesto (9.466,99 €) y el ahorro neto resta el coste anual de mantenimiento y producción (205,71 €).

| Escenario | Ahorro neto anual | Plazo de recuperación | ROI a 3 años |
| --- | ---: | ---: | ---: |
| 1 empresa usuaria | 2.896 − 205,71 = 2.690,29 € | ≈ 3,52 años | −14,7 % |
| 3 empresas usuarias | 3 × 2.896 − 205,71 = 8.482,29 € | ≈ 1,12 años | +168,8 % |

**Conclusión.** Con una sola empresa, el proyecto recupera la inversión en aproximadamente 3 años y 6 meses. Al ser una plataforma multiempresa, el coste de mantenimiento se reparte entre todos los clientes: con 3 empresas usuarias, la inversión se recupera en aproximadamente 1 año y 1 mes. Como el gasto real durante el desarrollo es de 0 € (herramientas gratuitas y trabajo del equipo), el proyecto es económicamente viable y sostenible.

---

## 2.7. Estudio de viabilidad legal y normativa

El software no funciona al margen de la ley: cualquier tratamiento de datos, interfaz o código está sujeto al marco jurídico vigente en España y la Unión Europea. En este apartado analizamos la protección de datos personales, la propiedad intelectual y licencias, y la accesibilidad.

---

### 2.7.1. Protección de datos personales (RGPD y LOPDGDD)

#### 1. Datos personales que recoge la aplicación

La aplicación va a guardar estos datos de carácter personal:

- **De los usuarios:** nombre, apellidos, email de trabajo, empresa a la que pertenecen y el rol que tienen dentro de la aplicación.
- **De acceso:** la contraseña, que se guarda cifrada y nunca tal cual.
- **De proveedores y clientes de cada empresa:** nombre, teléfono y email de la persona de contacto, y el NIF si es autónomo.
- **De uso:** la IP, el navegador y el registro de accesos.
- **De actividad:** qué usuario hace cada movimiento de stock y cuándo.
- **De facturación:** los datos del cliente si es autónomo.

No se guardan datos especialmente sensibles como salud, ideología. Los datos de las empresas como tal no los protege el RGPD, pero los de autónomos, empleados y personas de contacto sí.

#### 2. Base de legitimación

StockLink tiene dos papeles. Por un lado es **responsable** de las cuentas de usuario y de la facturación. Por otro es **encargado** de los datos que cada empresa cliente mete en la aplicación, como sus proveedores. En ese caso los datos son de la empresa y StockLink solo los gestiona por ella, así que hace falta un contrato entre las dos partes (art. 28 RGPD).

- **Cuentas de usuario:** se basan en la ejecución del contrato (art. 6.1.b), porque sin ellas no se puede ofrecer el servicio.
- **Registro de accesos:** se basa en el interés legítimo (art. 6.1.f), para proteger la plataforma y detectar accesos extraños.
- **Facturación:** se basa en una obligación legal (art. 6.1.c), porque lo exige la normativa fiscal.
- **Newsletter y cookies que no sean necesarias:** se basan en el consentimiento expreso (art. 6.1.a). La casilla viene sin marcar y el usuario puede retirarlo cuando quiera.

Solo se pide consentimiento cuando es realmente necesario. Para usar la aplicación el usuario no puede decir que no a ciertos datos, así que ahí la base correcta es el contrato.

#### 3. Medidas de privacidad desde el diseño y por defecto

##### Control de accesos según el rol
Cada usuario tiene un rol que limita lo que puede hacer:

- **Administrador de empresa:** gestiona los usuarios y todo el inventario de su empresa.
- **Gestor de stock:** crea, modifica y elimina productos y movimientos.
- **Operario:** registra entradas y salidas, y el resto solo lo puede consultar.
- **Solo lectura:** únicamente puede ver información.

Cada persona tiene solo los permisos que necesita para su trabajo. Además, los datos de cada empresa están separados, de forma que una empresa nunca puede ver los de otra. Estos permisos se comprueban siempre en el servidor y no solo en lo que se ve en pantalla, porque lo de la pantalla se puede manipular.

##### Cómo se guardan las contraseñas
Las contraseñas no se guardan nunca tal cual. Se transforman con un algoritmo de hash (bcrypt o Argon2id) al que se le añade un valor aleatorio distinto para cada usuario, así que aunque alguien consiguiera la base de datos no podría leer las contraseñas. Además:

- Mínimo de 12 caracteres.
- La sesión caduca pasado un tiempo corto.
- Se bloquea el acceso un rato tras varios intentos fallidos.
- Para recuperar la contraseña se envía un enlace que solo se puede usar una vez y que caduca.

##### Otras medidas de seguridad
- Toda la aplicación funciona con HTTPS, para que los datos viajen protegidos.
- Se protegen las consultas a la base de datos para evitar ataques que intenten colarse por los formularios.
- El usuario de la base de datos solo tiene los permisos justos.
- Los registros no guardan contraseñas.
- Si hay una brecha de seguridad, se avisa a la AEPD en un máximo de 72 horas.

##### Pedir solo lo necesario
- Solo se piden los datos imprescindibles. De un proveedor, por ejemplo, basta con nombre y email de contacto.
- No se activan cookies ni analítica hasta que el usuario las acepte.
- En los registros se guarda el número de usuario en lugar de su email.

##### Cuánto tiempo se guardan los datos y cuándo se borran

- **Cuenta de usuario:** mientras dure el contrato. Al darse de baja se bloquea y más adelante se borra.
- **Datos de cada empresa:** hasta que termina el contrato. Después la empresa elige si quiere que se los devuelvan o que se borren.
- **Facturas:** 6 años, porque lo exige la ley, y después se eliminan.
- **Registro de accesos:** 12 meses y luego se borra automáticamente.
- **Copias de seguridad:** 30 días y se van sustituyendo por otras nuevas.
- **Cuentas sin usar:** se avisa al usuario a los 12 meses y, si no vuelve, se da de baja o se anonimiza.

El **bloqueo** (art. 32 LOPDGDD) consiste en que, cuando un dato se borra, se guarda aparte y sin que nadie lo use, solo por si hubiera que responder ante algún problema legal. Cuando ese plazo termina, se elimina del todo.

##### Derechos de los usuarios
Cualquier persona puede pedir ver sus datos, corregirlos, borrarlos, limitar su uso, llevárselos en un archivo o oponerse a que se traten. Se le contesta en un máximo de un mes.

#### Conclusión

StockLink cumple el RGPD y la LOPDGDD porque solo recoge los datos necesarios, se apoya sobre todo en el contrato, controla qué puede hacer cada usuario según su rol, mantiene separados los datos de cada empresa, protege las contraseñas y borra los datos cuando ya no hacen falta.

---

### 2.7.2. Propiedad intelectual y licencias

#### 1. Licencia del proyecto

El código fuente desarrollado por el equipo de StockLink, incluyendo HTML, CSS, TypeScript, JavaScript y los componentes propios de la aplicación, se publicará bajo la **licencia MIT**.

Esta licencia permite utilizar, modificar y distribuir el código, incluso con fines comerciales, siempre que se mantengan los avisos de copyright y la licencia original. Se ha elegido por su sencillez y flexibilidad, ya que facilita que otras personas puedan estudiar y reutilizar el proyecto.

Los derechos de autor del código original corresponden a sus autores. La licencia MIT se aplicará al código propio, sin sustituir ni modificar las licencias de las herramientas y recursos de terceros que se incorporen.

#### 2. Inventario de licencias de dependencias

StockLink utiliza tecnologías de desarrollo, librerías y recursos externos que deben identificarse para conocer sus condiciones de uso.

| Componente | Utilidad en StockLink | Licencia |
| -- | -- | -- |
| Angular | Desarrollo de la interfaz de usuario. | MIT |
| Node.js | Entorno de ejecución del backend. | MIT |
| Express | Gestión de rutas y peticiones HTTP del servidor. | MIT |
| MySQL Community Edition | Sistema de gestión de bases de datos. | GPL |
| Work Sans | Tipografía principal de la interfaz. | SIL Open Font License 1.1 |
| JetBrains Mono | Tipografía para elementos técnicos y de marca. | SIL Open Font License 1.1 |
| HTML, CSS y código propio | Estructura, estilos y funcionalidades desarrolladas por el equipo. | MIT, según la licencia elegida para el proyecto. |
| Iconos SVG propios | Elementos gráficos de la interfaz. | 

Las licencias indicadas corresponden a las licencias generales de los componentes identificados. Antes de cerrar la documentación se comprobarán las versiones concretas utilizadas y las licencias de las dependencias adicionales.

#### 3. Compatibilidad de las licencias

Las licencias MIT y SIL Open Font License 1.1 permiten utilizar los componentes correspondientes en proyectos de software y páginas web, respetando sus condiciones. Por ello, son compatibles, en términos generales, con la publicación de StockLink bajo MIT.

MySQL Community Edition utiliza la licencia GPL, por lo que se revisarán sus condiciones según la forma en que se distribuya y utilice el sistema. El simple hecho de conectar una aplicación a una base de datos MySQL no implica automáticamente que todo el código de la aplicación deba publicarse bajo GPL.

Además, se revisarán las dependencias instaladas mediante npm, incluidas las dependencias indirectas, para detectar posibles obligaciones adicionales o incompatibilidades antes de distribuir el proyecto.

#### 4. Gestión y cumplimiento

Para garantizar el cumplimiento de las licencias, el equipo realizará las siguientes acciones:

- Mantener un inventario actualizado de las librerías, fuentes e iconos utilizados.
- Revisar los archivos `package.json` y `package-lock.json` para identificar las dependencias del backend y sus versiones.
- Consultar las licencias oficiales de los componentes antes de incorporarlos.
- Conservar los avisos de copyright y los textos de licencia cuando sea necesario.
- Evitar utilizar imágenes, iconos o recursos gráficos sin una licencia que permita su uso.
- Documentar cualquier cambio importante en las dependencias y sus licencias.

En conclusión, StockLink utilizará componentes con licencias conocidas y documentadas, respetando los derechos de sus autores y manteniendo una política de uso responsable de los recursos de terceros.

---

### 2.7.3. Accesibilidad y otros requisitos aplicables

#### 1. Objetivo de la accesibilidad

La accesibilidad web tiene como objetivo garantizar que StockLink pueda ser utilizado por el mayor número posible de personas, incluidas aquellas que tengan limitaciones visuales, auditivas, motrices o dificultades para comprender la información presentada en pantalla.

Para conseguirlo, el diseño y el desarrollo de la aplicación tendrán en cuenta las pautas de accesibilidad para el contenido web (WCAG) y los requisitos de accesibilidad de la norma UNE-EN 301 549, relacionados con los productos y servicios de las tecnologías de la información y la comunicación.

La accesibilidad se tendrá en cuenta desde el diseño de las interfaces hasta la implementación y las pruebas. No se trata únicamente de mejorar el aspecto visual, sino de facilitar que todos los usuarios puedan navegar, consultar información y gestionar el inventario de forma comprensible y eficaz.

#### 2. Medidas de accesibilidad

##### 2.1. Contraste y uso del color

Se comprobará que exista suficiente contraste entre el texto y el fondo para facilitar la lectura de la información. Como referencia, se utilizarán los criterios WCAG de nivel AA.

StockLink contará con un tema claro y otro oscuro. Ambos deberán mantener un contraste adecuado entre los textos, los fondos, los campos de los formularios, los botones y los elementos de navegación.

Además, los colores no se utilizarán como único medio para transmitir información. Por ejemplo, cuando un producto tenga pocas unidades disponibles, se mostrará un aviso como «Stock bajo» junto con el color de advertencia. De esta manera, los usuarios podrán comprender el estado del inventario aunque tengan dificultades para distinguir determinados colores.

**Justificación:** un contraste insuficiente puede dificultar la lectura, especialmente en personas con baja visión o cuando se utiliza la aplicación en pantallas con mucha iluminación ambiental.

##### 2.2. Navegación mediante teclado

La aplicación permitirá utilizar sus principales funcionalidades sin depender exclusivamente del ratón. Los enlaces, botones, campos de formulario y demás controles interactivos deberán poder alcanzarse mediante el teclado.

Se mantendrá un orden de tabulación lógico, siguiendo la distribución visual de la interfaz. También se mostrará un indicador de foco visible para que el usuario pueda identificar en todo momento qué elemento está seleccionado.

Por ejemplo, un usuario deberá poder recorrer los campos del formulario de inicio de sesión, introducir sus credenciales y activar el botón de acceso utilizando el teclado.

**Justificación:** algunas personas tienen dificultades para utilizar un ratón debido a limitaciones motrices o utilizan dispositivos de entrada alternativos. La navegación por teclado permite acceder a las funciones sin depender de este periférico.

##### 2.3. Tamaño y legibilidad del texto

Se utilizarán tipografías legibles, tamaños de letra adecuados y una jerarquía visual clara mediante títulos, subtítulos y textos secundarios.

El diseño permitirá ampliar el texto y el contenido de la página sin perder información ni funcionalidad. Se evitarán textos excesivamente pequeños, párrafos difíciles de leer y elementos que dependan únicamente de diferencias sutiles de tamaño o color para comunicar su importancia.

En las tablas de inventario, los nombres de los productos, las cantidades, las categorías y los avisos deberán poder identificarse fácilmente.

**Justificación:** una buena legibilidad facilita la comprensión de la información y permite que los usuarios adapten la visualización a sus necesidades.

##### 2.4. Compatibilidad con lectores de pantalla

Se utilizará HTML semántico para estructurar correctamente las páginas.

Los campos de los formularios tendrán etiquetas descriptivas asociadas, y los botones y enlaces utilizarán textos que expliquen claramente su función. Las imágenes que aporten información incluirán textos alternativos adecuados; las imágenes decorativas no generarán información redundante.

También se proporcionarán mensajes de error comprensibles y asociados a los campos correspondientes. Cuando sea necesario, se utilizarán atributos ARIA para aportar información adicional a las tecnologías de asistencia, sin sustituir los elementos HTML semánticos.

**Justificación:** los lectores de pantalla interpretan la estructura y las etiquetas de una página para comunicar su contenido a las personas con discapacidad visual. Una estructura correcta permite comprender mejor la interfaz y utilizar sus funcionalidades.

##### 2.5. Formularios y mensajes de error

Los formularios de StockLink, como los de inicio de sesión, registro y gestión de productos, indicarán claramente qué información debe introducirse en cada campo.

Cuando se produzca un error, se mostrará un mensaje que explique qué ha ocurrido y cómo puede solucionarse. No se dependerá únicamente de un borde rojo o de un icono para señalar el problema.

Por ejemplo, si un usuario introduce una cantidad de stock no válida, la aplicación mostrará un mensaje que indique que debe introducir una cantidad válida. Los errores deberán poder identificarse tanto visualmente como mediante tecnologías de asistencia.

**Justificación:** los mensajes claros ayudan a evitar errores y permiten corregirlos sin confusión, especialmente a usuarios con dificultades de comprensión o que utilizan lectores de pantalla.

##### 2.6. Diseño adaptable y accesible

La interfaz se diseñará para funcionar en ordenadores, tabletas y móviles. Los elementos se reorganizarán según el tamaño de la pantalla, evitando que el contenido se corte o que los controles resulten difíciles de utilizar.

Los botones y enlaces tendrán un tamaño y una separación adecuados para facilitar su selección, especialmente en pantallas táctiles. Las tablas y los listados de productos se adaptarán para que la información importante siga siendo accesible en pantallas pequeñas.

**Justificación:** los usuarios pueden acceder a StockLink desde dispositivos diferentes y en condiciones de uso variadas. Un diseño adaptable facilita la consulta y gestión del inventario sin perder información ni funcionalidades esenciales.

##### 2.7. Consistencia y claridad de la interfaz

Se mantendrá una estructura coherente en las distintas páginas de StockLink. Los botones, menús, formularios, iconos y mensajes seguirán criterios visuales y de funcionamiento consistentes.

Las acciones importantes, como añadir un producto, modificar existencias o eliminar un registro, estarán identificadas mediante textos claros. Cuando una operación pueda tener consecuencias importantes, se proporcionará una confirmación o una forma de revisar la acción antes de completarla.

**Justificación:** una interfaz consistente reduce la necesidad de aprender cómo funciona cada pantalla por separado y facilita la navegación a usuarios con distintos niveles de experiencia tecnológica.

#### 3. Comprobación de la accesibilidad

Durante el desarrollo se realizarán pruebas para comprobar que las medidas previstas funcionan correctamente. Estas comprobaciones incluirán:

- **Contraste:** verificar las combinaciones de colores de los temas claro y oscuro mediante herramientas de análisis de contraste.
- **Teclado:** recorrer las páginas y formularios sin utilizar el ratón, comprobando el orden de navegación y la visibilidad del foco.
- **Ampliación del texto:** aumentar el tamaño del contenido y comprobar que no se pierde información ni funcionalidad.
- **Lectores de pantalla:** revisar la estructura, las etiquetas de los campos, los nombres de los controles y los mensajes de error.
- **Diseño adaptable:** comprobar la visualización en diferentes tamaños de pantalla y navegadores.
- **Formularios:** probar errores de validación para comprobar que los mensajes sean claros y accesibles.

Las herramientas automáticas de evaluación podrán ayudar a detectar determinados problemas, pero se complementarán con comprobaciones manuales, ya que no todos los requisitos de accesibilidad pueden verificarse automáticamente.

#### 4. Resultado esperado

La aplicación StockLink pretende ofrecer una interfaz comprensible, coherente y accesible que facilite la gestión del inventario a usuarios con diferentes capacidades y niveles de experiencia tecnológica.

La aplicación de estas medidas contribuirá a mejorar la legibilidad, la navegación, la prevención de errores y la adaptación a distintos dispositivos. El cumplimiento de los criterios de accesibilidad se evaluará durante las pruebas, por lo que no se considerará garantizado hasta que se hayan realizado las comprobaciones correspondientes.

---

## 2.8. Análisis de riesgos inicial

| ID  | Descripción del riesgo | Probabilidad | Impacto | Criticidad | Justificación |
|-----|------------------------|--------------|---------|------------|---------------|
| R01 | Falta de experiencia con alguna de las tecnologías que vamos a utilizar. | Media | Alto | Alta | **Falta de experiencia tecnológica:** El proyecto utiliza Angular, Node.js, Express y MySQL. La falta de experiencia con alguna de estas tecnologías puede provocar dificultades durante la implementación y aumentar el tiempo necesario para completar las tareas. |
| R02 | Retrasos en las tareas previstas en los sprints. | Media | Alto | Alta | **Retrasos en los sprints:** Cada sprint tiene un periodo de ejecución limitado. Si una tarea requiere más tiempo del previsto o aparecen problemas inesperados, pueden retrasarse las entregas y acumularse tareas pendientes. |
| R03 | Problemas de comunicación o coordinación entre los integrantes. | Media | Alto | Alta | **Problemas de comunicación y coordinación:** El equipo está formado por tres integrantes con responsabilidades diferentes. Una comunicación insuficiente o una mala distribución de las tareas puede provocar duplicación de trabajo, bloqueos o retrasos. |
| R04 | Errores en el diseño o la estructura de la base de datos MySQL. | Media | Alto | Alta | **Errores en la base de datos:** StockLink necesita organizar la información de empresas, locales, usuarios, productos y movimientos de stock. Un diseño incorrecto de la base de datos puede provocar inconsistencias y dificultar la gestión de la información. |
| R05 | Fallos de comunicación entre Angular y la API de Node.js/Express. | Media | Alto | Alta | **Fallos en la comunicación entre frontend y backend:** Angular y la API desarrollada con Node.js y Express deben intercambiar información correctamente. Las diferencias en las rutas, los formatos de datos o las respuestas pueden impedir que determinadas funcionalidades funcionen. |
| R06 | Errores en el registro y actualización de movimientos de stock. | Baja | Alto | Media | **Pérdida de código o cambios defectuosos:** Esot puede acabar provocando cantidades incorrectas o inconsistencias. |
| R07 | Problemas de rendimiento en dispositivos antiguos o con recursos limitados. | Media | Medio | Media | **Problemas de rendimiento y compatibilidad:** Los usuarios pueden acceder a StockLink desde ordenadores, tabletas y móviles con diferentes capacidades y navegadores. Una interfaz poco optimizada puede provocar lentitud o problemas de visualización. |
| R08 | Aumento de requisitos o incorporación de funcionalidades no previstas. | Media | Alto | Alta | **Ampliación del alcance del proyecto:** La incorporación de nuevas funcionalidades durante el desarrollo puede aumentar la carga de trabajo y dificultar el cumplimiento de la planificación inicial. |
| R09 | Falta de tiempo para realizar pruebas y documentar el proyecto. | Media | Alto | Alta | **Falta de tiempo para pruebas y documentación:** El proyecto debe completar sus funcionalidades y generar documentación dentro de un calendario establecido. Si el desarrollo consume más tiempo del previsto, podrían reducirse las pruebas y quedar apartados de la memoria sin completar. |
| R10 | Problemas durante el despliegue | Media | Alto | Alta | **Problemas con el despliegue:** Problemas durante la configuración, despliegue o conexión con la base de datos en el entorno de producción. |
