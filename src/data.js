//aqui van las funciones de ordenar, calcular y filtrar

window.LOL = {
    // con esta función se quiere filtrar los tipos de champion  la data los https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries
const dataLol = Object.entries(LOL.data);

function filterByType(dataLol, condition) {
  const filtereData = data.filter((elementChampion) => {
    return elementChampion[1].tags.indexOf(condition) >= 0;
  });

  return filtereData;


}
