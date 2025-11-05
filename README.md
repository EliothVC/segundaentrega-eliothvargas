# Sitio de la Ilustre Municipalidad de Castro (Astro + Tailwind + TypeScript)

Este proyecto es un sitio informativo construido con Astro, TailwindCSS 4.1 y TypeScript. Incluye páginas internas completas, un blog de noticias con contenido dinámico consumido desde un archivo JSON local y diseño responsive para Desktop, Tablet y Celular.

## Instalar Astro

- `npm create astro@latest`

### Instalar tailwindcss

- `npx astro add tailwindcss`

### Correr el Proyecto

- `npm run dev`

## Descripción general

- Uso de `Layout.astro` para integrar `Header` y `Footer` en todas las páginas.
- Componentes reutilizables para secciones principales (Inicio, Blog, Historia, Transparencia, Contacto, etc.).
- archivos TypeScript para la información de las paginas.
- Blog con tarjetas que enlazan a vistas individuales de cada noticia, generadas en build desde `src/data/noticias.json`.
- Tailwind 4.1 para estilos con utilidades responsive y transiciones sutiles.

## Contenido dinámico (JSON)

- Fuente: `src/data/noticias.json`.
- Cada noticia incluye: `id`, `titulo`, `fecha`, `tiempo_lectura`, `imagen`, `categoria`, `resumen`, `href` y `contenido` (bloques de `parrafo`, `subtitulo`, `cita`, `lista`).
- Las páginas individuales se generan con `getStaticPaths` en `src/pages/blog/[id].astro`, mapeando el `href` (por ejemplo `"/blog/noticia1"`) a `params.id`.

### Añadir una nueva noticia

1. Agrega un nuevo objeto en `src/data/noticias.json` dentro de `noticias` con los campos anteriores y un `href` del tipo `"/blog/noticia7"`.
2. Coloca la imagen en `public/` (ejemplo: `"/Noticia7.jpg"`).
3. Ejecuta el build: la ruta `"/blog/noticia7"` se generará automáticamente.

## Estilos y responsive

- TailwindCSS 4.1 configurado y cargado vía `src/styles/global.css`.
- Utilidades responsive (`sm`, `md`, `lg`) aplicadas en grid, tipografías y espaciados.
- Paleta de colores coherente por sección; transiciones y `hover` sutiles en tarjetas.

## Estructura de carpetas (resumen)

```
src/
  assets/
  components/
  data/
  layouts/
  pages/
  styles/
public/
```

## Notas de diseño y decisiones

- Se prioriza HTML semántico y componentes claros.
- `Header` y `Footer` consistentes a través de `Layout.astro`.
- Las vistas de noticia renderizan bloques por `tipo`: subtítulos, párrafos, citas y listas.

## Entrega y pruebas

- Rutas probadas: `/`, `/blog`, `/blog/noticia1`…`/blog/noticia6`, `/nosotros`, `/historia`, `/transparencia`, `/contacto`.
- Responsive comprobado en Desktop, Tablet y Celular.