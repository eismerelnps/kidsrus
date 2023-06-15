export const removeFirstWordAndLowercase = (text) => {
    const words = text.split(" "); // Divide el texto en un array de palabras
    words.shift(); // Elimina la primera palabra del array
    const remainingText = words.join(" "); // Une las palabras restantes en un solo texto
    const lowercasedText =
      remainingText.charAt(0).toLowerCase() + remainingText.slice(1); // Convierte la primera letra en minúscula

    return lowercasedText;
  };