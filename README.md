# Portafolio personal: Albert Alain Valdivia García

Web personal de una sola página, hecha con HTML, CSS y JavaScript sin frameworks. Está pensada para publicarse gratis en GitHub Pages.

## Estructura

```
index.html                         ← todo el contenido (textos, proyectos, enlaces)
assets/css/style.css               ← diseño (colores en las variables de :root)
assets/js/main.js                  ← tema claro/oscuro, menú móvil, animaciones
assets/img/profile.jpg            ← foto de perfil (recortada, cuadrada)
assets/cv/CV.pdf                   ← CV que se descarga con el botón "Résumé"
```

## Editar el contenido

- **Textos y proyectos:** se editan en `index.html`. Cada sección tiene un comentario `<!-- ... -->` que explica cómo modificarla. Para añadir un proyecto, copia un bloque `<article class="project card">` entero.
- **Pendientes:** busca los textos que faltan con `grep -n COMPLETAR index.html`.
- **Foto:** guarda tu foto en `assets/img/` (por ejemplo `foto.jpg`, cuadrada) y cambia el `src` de `<img class="avatar">`.
- **Color principal:** cambia `--accent` en `assets/css/style.css`, tanto para el tema claro como para el oscuro.
- **CV:** sustituye `assets/cv/CV.pdf` por la versión nueva usando el mismo nombre.

## Verla en local

```bash
cd ~/portafolio-cv
python3 -m http.server 8000
```

Después abre http://localhost:8000 en el navegador.

## Publicar en GitHub Pages

1. Crea en GitHub un repositorio llamado **`tcpalbertvaldivia1993-lang.github.io`**. Con ese nombre, la web queda en `https://tcpalbertvaldivia1993-lang.github.io/`.
2. Sube el código:
   ```bash
   git branch -M main
   git add .
   git commit -m "Primera versión del portafolio"
   git remote add origin https://github.com/tcpalbertvaldivia1993-lang/tcpalbertvaldivia1993-lang.github.io.git
   git push -u origin main
   ```
3. En GitHub, ve a **Settings → Pages** y, en *Source*, elige **Deploy from a branch**, rama `main` y carpeta `/ (root)`.
4. Espera uno o dos minutos y abre la URL.

> El PDF del CV incluye tu número de teléfono. Al publicarlo, cualquiera podrá descargarlo.
