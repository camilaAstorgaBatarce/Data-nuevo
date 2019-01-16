//aqui van las funciones de ordenar, calcular y filtrar

// window.LOL = {
    // con esta función se quiere filtrar los tipos de champion  la data los https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries y https://www.w3schools.com/jsref/jsref_filter.asp
    const dataLol = Object.entries(LOL.data);
    console.log(dataLol);
    function filterByType(dataLol, condition) {
        const filtereData = data.filter((elementChampion) => {
        return elementChampion[1].tags.indexOf(condition) >= 0;
    });
    console.log(filtereData);
    return filtereData;
    }

// con esta función se quiere ordenar los tipos de champion de la A/Z
    // sortData: (data, sortBy, sortOrder) => {
    //     if(sortBy === 'name'){
    //         if (sortOrder === true){// ordena de forma ascendente
    //             return data.slice().sort((a, b) => {
    //                 let x = a[sortBy].toLowerCase();
    //                 let y = b[sortBy].toLowerCase();
    //                 if (x < y) {
    //                     return -1;
    //                 } if (x > y) {
    //                     return 1;
    //                 } else {
    //                     return 0;
    //                 }
    //             });
    //         }
    //     }
    //         } else if (sortOrder === false){ // ordena de forma descendente
    //             return data.slice().sort((a, b) => {
    //                 let x = a[sortBy].toLowerCase();
    //                 let y = b[sortBy].toLowerCase();
    //                 if (x < y) {
    //                     return 1;
    //                 } if (x > y) {
    //                     return -1;
    //                 } else {
    //                     return 0;
    //                 }
    //             });
    //         }
        //}
//     }
// }
