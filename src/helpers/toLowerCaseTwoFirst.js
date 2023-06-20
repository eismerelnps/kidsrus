export const toLowerCaseTwoFirst = (cadena) => {
    const palabras = cadena.split(" ");
    
    if (palabras.length >= 2) {
      palabras[0] = palabras[0].charAt(0).toLowerCase() + palabras[0].slice(1);
      palabras[1] = palabras[1].charAt(0).toLowerCase() + palabras[1].slice(1);
    }
  
    return palabras.join("-");
  }
  