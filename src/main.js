window.onload = () => {

    const dataLol = Object.entries(LOL.data);
    let currentLol = dataLol; //esta variable contendra a todos los champion que se estan viendo al momento de filtrar u ordenar

// traer los elementos filtrados de los tipos de champion y mostrarlos en el html
    let fillWithchampion = (champions) => {
        document.getElementById("root").innerHTML = "";
        let filtered = window.data.filter(dataLol, condition);
        filtered.forEach(elementChampion =>{
            document.getElementById("root").innerHTML += championBox(dataLol[i].name, dataLol[i].key, dataLol[i].tags, datalol[i].img);
        })
    }

// al ocupar root se trae los elementos de championbox
    const championBox = document.getElementById('root');
    document.getElementById('select').addEventListener('change', () => {
        let selectValue = document.getElementById('select').value;
        let filteredChamps = window.data.filter(dataLol, selectValue);
        championBox.innerHTML = "";
        filteredChamps.forEach(elementChampion => {
            championBox.innerHTML += `<div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
        <div class="card w-100 champion-box">
        <div  class="card-img-top">
        <img class="img-fluid" src="${elementChampion[1].splash}" alt="imagen de campeón">
        </div>
        <div class="card-body">
        <p class="card-text">Nombre:${elementChampion[1].name}</p>
        <p class="card-text">${elementChampion[1].title}</p>
        </div>
        </div>
        </div>`;
            })
            // return filteredData;
        })
        // mostrar todos los champion en inicio
        fillWithchampion(dataLol);

//Aqui va la función para ordenar de la A-Z y de Z-A
    let sortSelect = document.getElementById('alphabeticalOrder');
    sortSelect,addEventListener('change', () =>
    {
        let valueOrder = sortSelect.value;
        let championOrder = {};
        if (valueOrder === 'aZOrder'){
            championOrder = dataLol.sortData(currentLol, 'name', true)
        } else if (valueOrder === 'zAOrder'){
            championOrder = dataLol.sortData(currentLol, 'name', false)

        } else {
            championOrder = currentLol;
        }
    })
}
