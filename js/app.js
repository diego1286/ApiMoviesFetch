let pagina=1;

const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

//funcionalidad de los botones 
btnSiguiente.addEventListener('click', ()=>{
    if(pagina<100){
        pagina +=1;
        getMovies();
    }
})
//funcionalidad del boton anterior 
btnAnterior.addEventListener('click', ()=>{
    if(pagina>1){
        pagina -=1;
        getMovies();
    }
})



const getMovies  = async()=>{
    /*Se hace la peticion al api que regresa una promes 
    se debe utilzar el await para procesar la promesa en la respuesta 
    para eso la funcion debe ser async */

    let url =` `
    try {
        const res= await fetch(url);
        console.log(res);

        //se hace la peticion y se obtine la respuesta que se guarda en data tambien es asincrona 
        //por eso se utiliza await en la respuesta q se trae mediante json
        // de igual manera de hace la verificacion de la respuesta 
        if (res.status===200) {
            const data = await res.json();
            console.log(data.results);
            //como tenemos el array de resultados iteramos ese array con un ciclo forEach y accedemos a las propiedades que necesitamos
            
            let movies='';
            data.results.forEach(movie => {
            
                movies +=  `
                <div class="movie">
                <img class="poster" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.original_title}">
                <h3 class="titulo">${movie.original_title}</h3>
              </div>
                `
            });
            document.getElementById('contenedor').innerHTML =movies;

        }else{
            console.log('No se encuentra lo que buscas');
        }
    } catch (error) {
        console.log(error, 'este es el error ')
    }
}

getMovies();



