# Jean Piaget Tambogrande

Sitio estático independiente para la sede de Tambogrande. Presenta ocho escenas de aprendizaje y comunidad, con fotografías sin fondo, navegación adaptable y galería ampliable.

## Dirección y publicación

- Sitio propio: [Jean Piaget Tambogrande](https://adrinoaimar.github.io/jean-piaget-tambogrande-web/).
- Repositorio: `Adrinoaimar/jean-piaget-tambogrande-web`.
- Entrada: `index.html`.
- Publicación: GitHub Pages, rama `main`, carpeta raíz. No requiere compilación ni dependencias.

La publicación de este repositorio es independiente de la web de Sullana. El único vínculo hacia Sullana está identificado en el pie y puede eliminarse sin afectar la página. La configuración del servicio y la disponibilidad pública deben confirmarse al desplegar.

## Estructura

- `css/`: estilos de base, tipografía local, presentación y composición de Tambogrande.
- `js/main.js`: menú, aparición progresiva y galería con teclado y retorno del foco.
- `fonts/`: fuentes locales Montserrat y Source Serif 4.
- `img/recortes/tambogrande/`: ocho motivos únicos, con variantes WebP transparentes de 480 y 960 px.
- `img/escudo-tambogrande.png`: escudo transparente de 256 × 310 px, usado en cabecera y favicon.
- `docs/fotos-tambogrande.md`: procedencia y criterio de edición de los recursos.

Todos los estilos, fuentes, imágenes e interacciones se sirven desde este repositorio. No se solicitan recursos visuales al sitio de Sullana ni se utilizan servicios de formularios.

## Contenido y recursos

Las fotografías corresponden al lote de Tambogrande facilitado por el usuario. Cada motivo aparece una sola vez. Las variantes conservan alfa; los originales permanecen fuera del repositorio. El escudo transparente se obtuvo mediante `image_gen` integrado, solicitando retirar el fondo y conservar el diseño proporcionado sin redibujarlo. El recurso final entregado se incorpora sin nuevas modificaciones.

Los datos confirmados para Sullana no se atribuyen a Tambogrande. No se publican dirección, teléfonos, horarios ni niveles educativos de Tambogrande sin confirmación.

## Vista local

Desde la raíz puede iniciarse un servidor estático, por ejemplo:

```sh
python3 -m http.server 8040
```

La página mantiene contenido y navegación disponibles sin JavaScript. Respeta la preferencia de movimiento reducido. La revisión final y el despliegue corresponden a la integración principal.
