// window.onload = () => {

    const dataLol = Object.entries(LOL.data);
    let currentLol = dataLol; //esta variable contendra a todos los champion que se estan viendo al momento de filtrar u ordenar

// traer los elementos filtrados de los tipos de champion y mostrarlos en el html
    let fillWithchampion = (champions) => {
        document.getElementById("root").innerHTML = "";
        champions.forEach(elementChampion =>{
            document.getElementById("root").innerHTML += championBox(elementChampion[1].splash, elementChampion[1].name, elementChampion[1].title);
        })
    }
//función championBox
    let championBox = (splash, name, title) => {
        return `<div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
    <div class="card w-100 champion-box">
    <div  class="card-img-top">
    <img class="img-fluid" src="${splash}" alt="imagen de campeón">
    </div>
    <div class="card-body">
    <p class="card-text">Nombre:${name}</p>
    <p class="card-text">${title}</p>
    </div>
    </div>
    </div>`;
    }
// al ocupar root se trae los elementos de championbox
    document.getElementById('select').addEventListener('change', () => {
        let selectValue = document.getElementById('select').value;
        let filteredChamps = window.data.filter(dataLol, selectValue);
        fillWithchampion(filteredChamps);
            // return filteredData;
    })


//Aqui va la función para ordenar de la A-Z y de Z-A
    // document.getElementById('alphabeticalOrder').addEventListener('change', () =>
    let sortSelect = document.getElementById('alphabeticalOrder');
    sortSelect.addEventListener('change', () =>
    {
        let valueOrder = sortSelect.value;
        let championOrder = {};
        if (valueOrder === 'aZOrder'){
            championOrder = window.data.sortData(currentLol, 'name', true)
        } else if (valueOrder === 'zAOrder'){
            championOrder = window.data.sortData(currentLol, 'name', false)
        } else {
            championOrder = currentLol;
        }
        fillWithchampion(championOrder);
    })

    // mostrar todos los champion en inicio
    fillWithchampion(dataLol);
// }
