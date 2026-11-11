# Colegio Privado Jean Piaget Tambogrande

Web institucional independiente: https://adrinoaimar.github.io/jean-piaget-tambogrande-web/

Sitio estático, sin compilación. GitHub Pages publica `main` desde la raíz. Todos los estilos, fuentes, fotografías y scripts se sirven desde este repositorio.

## Páginas

- `index.html`: portada, propuesta educativa, niveles, escenas de aprendizaje y admisión.
- `nosotros.html`: propuesta, instalaciones, acompañamiento y preparación académica.
- `niveles.html`: Inicial, Primaria y Secundaria.
- `vida-escolar.html`: aprendizaje y convivencia.
- `galeria.html`: ocho escenas con visor accesible y encuadres completos.
- `admision.html`: información 2027 y preparación de consulta por WhatsApp.
- `contacto.html`: dirección, teléfonos y formulario de consulta.
- `privacidad.html`: información sobre formularios y servicios externos.
- `404.html`, `robots.txt`, `sitemap.xml`: navegación y publicación.

## Información institucional

El usuario confirmó el 11 de noviembre de 2026 que los datos del volante 2027 siguen vigentes: Prolongación Catacaos s/n, Tambogrande; teléfonos 959 287 205 y 959 425 312; Inicial, Primaria y Secundaria; apertura de clases el 4 de marzo de 2027. La procedencia y los límites están en `docs/informacion-institucional.md`.

No se atribuyen a Tambogrande los requisitos ni horarios de Sullana. Los formularios preparan mensajes editables dirigidos al WhatsApp principal de Tambogrande; la familia debe pulsar Enviar en ese servicio. No almacenan datos en la base de Sullana ni afirman que el colegio recibió la consulta antes de enviarla. Funcionan sin servicios de formularios ni credenciales. Incluyen enlace de respaldo y alternativa cuando JavaScript está desactivado.

La identidad, fuentes y ocho recortes transparentes existentes se conservan. La procedencia está en `docs/fotos-tambogrande.md`. Las imágenes editadas mediante image_gen pueden tener variaciones finas respecto de los originales. El escudo se usa sin redibujarlo. La imagen social se compone con HTML/CSS y el escudo existente.

## Vista local

```sh
python3 -m http.server 8875 --bind 127.0.0.1
```

Abrir http://127.0.0.1:8875/ .

## Revisión

Nueve páginas a 320, 390, 768 y 1440 px, claro/oscuro; comprobación de desbordamiento, archivos enlazados y carga de imágenes. Fotografías diferidas revisadas tras desplazarse hasta ellas y decodificarlas. Menú, Escape, visor de galería, formularios válidos/inválidos, mensaje correcto y respaldo WhatsApp comprobados sin enviar mensajes. Sin JavaScript se muestran la navegación y el enlace de consulta directo. Preferencia de movimiento reducido respetada; botón de pausa retirado.
