window.onload = () => {

    const dataLol = Object.entries(LOL.data);
// traer los elementos filtrados de los tipos de champion y mostrarlos en el html
    let fillWithchampion = (champions) => {
        document.getElementById("root").innerHTML = "";
        filtered.forEach(elementChampion =>{
            document.getElementById("root").innerHTML += championBox(dataLol[i].name, dataLol[i].key, dataLol[i].tags, datalol[i].img);
        })
    }
}
// al ocupar root se trae los elementos de championbox
    const championBox = document.getElementById('root');
    document.getElementById('select').addEventListener('change', () => {
        let selectValue = document.getElementById('select').value;
        let filteredChamps = filter(dataLol,selectValue);
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
