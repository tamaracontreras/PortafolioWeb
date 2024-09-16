// Indicación de tipo para soporte en editores
// @type {import('tailwindcss').Config}

export const content = [
  "./index.html", // Busca en el archivo HTML principal
  "./src/**/*.{js,ts,jsx,tsx}", // Busca en todos los archivos dentro de 'src' con extensiones JS, TS, JSX, y TSX
];
export const theme = {
  extend: {}, // Se puede usar para extender o personalizar el tema predeterminado de Tailwind
};
export const plugins = [
  // eslint-disable-next-line no-undef
  require('tailwindcss-animate') // Plugin que añade animaciones preconfiguradas en Tailwind
];
