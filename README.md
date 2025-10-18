# devtree

Proyecto de ejemplo con Express y TypeScript. Este repositorio contiene un servidor mínimo que expone varias rutas y está pensado para extenderse con tecnologías como Node.js, TypeScript y Tailwind CSS.

## Estructura principal
- Punto de entrada: [src/index.ts](src/index.ts) — inicia el servidor y define el puerto.
- Servidor: [`server`](src/server.ts) — instancia de Express exportada por defecto.
- Rutas: [`router`](src/router.ts) — definición de rutas básicas.
- Configuración TypeScript: [tsconfig.json](tsconfig.json)
- Scripts y dependencias: [package.json](package.json)

## Tecnologías a utilizar
- Node.js (runtime)
- TypeScript (tipado y compilación)
- Express (servidor HTTP) — ya está en las dependencias
- Tailwind CSS (estilizado utilitario) — se añadirá para la parte frontend

## Cómo ejecutar (desarrollo)
1. Instalar dependencias:
   ```sh
   npm install
   ```
2. Ejecutar en modo desarrollo (usa nodemon y ts-node según el script `dev` en [package.json](package.json)):
   ```sh
   npm run dev
   ```
3. Abrir en el navegador:
   - Endpoint raíz: http://localhost:4000/  
   - Las rutas están definidas en [`router`](src/router.ts)

## Compilar
Compila TypeScript a JavaScript usando:
```sh
npm run build
```
La salida compilada se genera en la carpeta configurada en [tsconfig.json](tsconfig.json).

## Añadir Tailwind CSS (básico)
1. Instalar Tailwind y sus dependencias:
   ```sh
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
2. Configurar `tailwind.config.js` y añadir las directivas de Tailwind en tu CSS principal:
   - `@tailwind base;`
   - `@tailwind components;`
   - `@tailwind utilities;`
3. Integrar el CSS resultante en tu aplicación frontend (p. ej. servir archivos estáticos desde el servidor Express).

## Notas
- El servidor se inicia desde [src/index.ts](src/index.ts) y usa la variable `port` definida allí.
- La instancia exportada por defecto se llama [`server`](src/server.ts) y monta las rutas desde [`router`](src/router.ts).

Licencia: ver archivo `LICENSE`.

```// filepath: c:\node\devtree\README.md
# devtree

Proyecto de ejemplo con Express y TypeScript. Este repositorio contiene un servidor mínimo que expone varias rutas y está pensado para extenderse con tecnologías como Node.js, TypeScript y Tailwind CSS.

## Estructura principal
- Punto de entrada: [src/index.ts](src/index.ts) — inicia el servidor y define el puerto.
- Servidor: [`server`](src/server.ts) — instancia de Express exportada por defecto.
- Rutas: [`router`](src/router.ts) — definición de rutas básicas.
- Configuración TypeScript: [tsconfig.json](tsconfig.json)
- Scripts y dependencias: [package.json](package.json)

## Tecnologías a utilizar
- Node.js (runtime)
- TypeScript (tipado y compilación)
- Express (servidor HTTP) — ya está en las dependencias
- Tailwind CSS (estilizado utilitario) — se añadirá para la parte frontend

## Cómo ejecutar (desarrollo)
1. Instalar dependencias:
   ```sh
   npm install
   ```
2. Ejecutar en modo desarrollo (usa nodemon y ts-node según el script `dev` en [package.json](package.json)):
   ```sh
   npm run dev
   ```
3. Abrir en el navegador:
   - Endpoint raíz: http://localhost:4000/  
   - Las rutas están definidas en [`router`](src/router.ts)

## Compilar
Compila TypeScript a JavaScript usando:
```sh
npm run build
```
La salida compilada se genera en la carpeta configurada en [tsconfig.json](tsconfig.json).

## Añadir Tailwind CSS (básico)
1. Instalar Tailwind y sus dependencias:
   ```sh
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
2. Configurar `tailwind.config.js` y añadir las directivas de Tailwind en tu CSS principal:
   - `@tailwind base;`
   - `@tailwind components;`
   - `@tailwind utilities;`
3. Integrar el CSS resultante en tu aplicación frontend (p. ej. servir archivos estáticos desde el servidor Express).

## Notas
- El servidor se inicia desde [src/index.ts](src/index.ts) y usa la variable `port` definida allí.
- La instancia exportada por defecto se llama [`server`](src/server.ts) y monta las rutas desde [`router`](src/router.ts).

Licencia: ver archivo `LICENSE`.
