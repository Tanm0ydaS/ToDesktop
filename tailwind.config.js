/** @type {import('tailwindcss').Config} */
export const content = ['./index.html'];
export const theme = {
  extend: {
    colors: {
      'primary': '#3238f2',
    },
    fontFamily: {
      'display': ['Poppins', 'sans-serif'],
      'body': ['Inter', 'sans-serif']
    }
  },
};
export const plugins = [];