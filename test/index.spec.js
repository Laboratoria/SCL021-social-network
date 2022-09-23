// importamos la funcion que vamos a testear
import { changeRoute } from '../src/lib/ruta.js';

describe('pruebas de la funcion changeRoute', () => {
  //it es una prueba
  it('debería ser una función', () => {
    expect(typeof changeRoute).toBe('function');
  });
  it('debería mostrar el login', () => {
    expect(typeof changeRoute).toBe('function');
    
  });
});
