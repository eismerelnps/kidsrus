export const randomDate = () => {
  const fechaInicial = new Date(1970, 0, 1); // 1 de enero de 1970
  const fechaFinal = new Date(); // Fecha actual
  const milisegundosEntreFechas = fechaFinal.getTime() - fechaInicial.getTime();
  const milisegundosAleatorios = Math.random() * milisegundosEntreFechas;
  const fechaRandom = new Date(fechaInicial.getTime() + milisegundosAleatorios);
  return fechaRandom.toLocaleDateString('en-US');
  }
  
 
//   export const randomDate = () => {
//     const date = new Date(Date.now)
//     return date
//   }