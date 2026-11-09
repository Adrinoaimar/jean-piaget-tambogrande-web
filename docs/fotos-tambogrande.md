# Fotografías de Tambogrande

## Uso y procedencia

Ocho escenas seleccionadas del lote de Tambogrande proporcionado por el usuario. El 9 de noviembre de 2026 el usuario autoriza un sitio y una publicación independientes para Tambogrande, enlazados desde Sullana. La página de entrada es `index.html`, con identidad local explícita y fondos retirados. No se trasladan contactos, dirección, horarios, grados ni logros de Sullana.

URL propia: `https://adrinoaimar.github.io/jean-piaget-tambogrande-web/`. El repositorio se publica de forma independiente mediante GitHub Pages. La disponibilidad pública requiere completar el despliegue.

Cada imagen aparece una sola vez: un grupo en portada, tres escenas de aprendizaje, un retrato en comunidad y tres escenas en galería. Las variantes WebP conservan transparencia y se exportan a 480 y 960 px. Los originales permanecen fuera del repositorio.

| Recurso | Fuente | Ubicación |
| --- | --- | --- |
| companeros-de-camino | IMG_9895.JPG | Portada |
| concentracion-al-aprender | IMG_9906.JPG | Aprendizaje |
| aprender-con-movimiento | IMG_9735.JPG | Aprendizaje |
| acompanamiento-en-aula | IMG_9731.JPG | Aprendizaje |
| confianza-para-crecer | IMG_9741.JPG | Comunidad |
| ideas-en-clase | IMG_9913.JPG | Galería |
| amistad-escolar | IMG_9816.JPG | Galería |
| aprender-con-dedicacion | IMG_9903.JPG | Galería |

## Edición y prompts

Modo: herramienta integrada `image_gen`, edición con referencia y `transparent_background: true`. Pillow se usa únicamente para conversión y redimensionamiento del resultado RGBA, conservando su canal alfa. La edición generativa puede introducir variaciones finas respecto de la fotografía original; no se considera una extracción píxel a píxel. No se atribuyen nombres a estudiantes.

Prompt común: retirar completamente el entorno, conservar rostros, poses, uniformes y emblemas de referencia; fondo realmente transparente, sin nuevos personajes ni partes del cuerpo, sin embellecimiento, sin marco, sin sombra añadida ni tablero de transparencia dibujado.

Instrucción por escena:

- **Compañeros:** conservar los cuatro estudiantes completos; retirar pared, escaleras, barandillas y suelo.
- **Concentración:** conservar estudiante, brazos, mesa, cuaderno, lápiz y útiles; retirar paredes, carteles y mobiliario distante.
- **Movimiento:** conservar docente, tres estudiantes, mesa roja, bolsos y sillas; retirar televisor, pizarra, paredes y suelo. No reconstruir partes ocultas.
- **Acompañamiento:** conservar tres estudiantes de primer plano y dos docentes, mesa roja, sillas y útiles; retirar personas y muebles distantes y el aula.
- **Confianza:** conservar estudiante y uniforme; retirar pared, barandilla y reflejos. Mantener el corte inferior original, sin inventar piernas.
- **Ideas:** conservar estudiantes, escritorios, sillas y cuadernos; retirar paredes, pizarra, aros y suelo.
- **Patio:** conservar docente y comunidad presentes; retirar techo, vigas, edificios y suelo. No inventar piernas.
- **Participación:** conservar personas reales, uniformes y zapatos; retirar pared y retratos impresos en carteles.

Una segunda pasada solicita corregir únicamente la máscara alfa: eliminar halos difusos del fondo, mantener las siluetas y no añadir brillo ni sombra. Se conserva el resultado con mejor apariencia al componerlo sobre el verde del sitio.

## Recuperación del 9 de noviembre de 2026

La página, sus estilos, este documento y las dieciséis variantes WebP se recuperan del commit `557393f`. Se conserva el retorno «Inicio · Sullana» y la marca Tambogrande visible también en móvil. Las dimensiones declaradas corresponden a los archivos recuperados; cada uno de los ocho motivos aparece una sola vez. Los elementos de aula útiles para comprender la escena se conservan deliberadamente. Esta recuperación no incorpora nuevas generaciones ni modifica los originales. La revisión del navegador y la publicación quedan a cargo de la integración principal.

## Retiro de docentes — 9 de noviembre de 2026

Por solicitud del usuario se retiran únicamente las dos profesoras de la escena `acompanamiento-en-aula`. Se conserva el grupo de tres estudiantes, la mesa y los útiles, con fondo transparente. Edición con image_gen integrado; exportación WebP a 480/960 px conservando alfa. Se actualizan dimensiones, versión de recurso, texto alternativo y descripción de la tarjeta.

Prompt: retirar completamente a las dos mujeres con vestidos grises situadas detrás de la mesa; conservar los tres estudiantes, sus rasgos, uniformes, poses y objetos; completar mínimamente bordes ocultos, sin inventar personas, fondo, texto, brillo ni sombras. Mantener transparencia alfa real.

## Sustitución y logo — 9 de noviembre de 2026

El usuario solicita sustituir las dos formaciones y publicar ambas páginas. Se reemplazan por `amistad-escolar` (IMG_9816.JPG, cinco compañeros) y `aprender-con-dedicacion` (IMG_9903.JPG, estudiante escribiendo). Permanecen ocho motivos distintos y dieciséis variantes WebP. Los cuatro recursos antiguos se retiran del árbol final.

Edición mediante image_gen integrado con transparencia real: conservar los cinco estudiantes, sus rostros, poses, uniformes y zapatos; retirar pared, escaleras, barandillas, puerta y suelo. En la segunda escena conservar a la estudiante de primer plano con lentes, trenza, manos, lápiz, mesa, silla, cuaderno y útiles; retirar a la persona distante, dispensador y aula. No añadir personas, texto, bordes ni sombras. La exportación conserva el alfa generado.

La integración anterior empleaba el PNG adjunto en cabecera y favicon. La separación posterior sustituye el despliegue compartido por un repositorio propio para Tambogrande.


## Sitio independiente y escudo transparente

El sitio conserva los dieciséis WebP actuales, las fuentes, los estilos y las interacciones en carpetas locales. La galería no depende del sitio de Sullana. El único vínculo externo hacia Sullana aparece identificado expresamente en el pie. Se retira del JavaScript la configuración y la lógica de formularios de Sullana: Tambogrande no publica datos de contacto sin confirmar.

El archivo `img/escudo-tambogrande.png` es la versión con fondo transparente obtenida mediante `image_gen` integrado. La edición solicita retirar el fondo y conservar el escudo proporcionado, sin redibujar su diseño. Se usa el archivo entregado de 256 × 310 px, sin nuevas modificaciones, en cabecera y favicon.
