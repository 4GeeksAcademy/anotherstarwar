import {
    array
} from "prop-types";

const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            
            people: [],
            infoPeople: [],
            planets: [],
            infoPlanets: [],
            favoritos: [],
            
            //demo: [{
                   // title: "FIRST",
                  //  background: "white",
                   // initial: "white"
               // },
              //  {
                 //   title: "SECOND",
                 //   background: "white",
                  //  initial: "white"
           //     }
           // ]
        },
        actions: {
           
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            
            loadPeople: () => {
                fetch('https://swapi.dev/api/people')
                    .then((response) => response.json())
                    .then(data => setStore({
                        people: data.results
                    }))
            },

            loadPlanets: () => {
                fetch("https://swapi.dev/api/planets")
                    .then(res => res.json())
                    .then(data => setStore({
                        planets: data.results
                    }))
            },

            loadVehicles: () => {
                fetch("https://www.swapi.tech/api/vehicles/")
                    .then(res => res.json())
                    .then(data => setStore({
                        vehicles: data.results
                    }))
            },
           
            loadinfoPeople: (uid) => {
                // fetch(`https://www.swapi.tech/api/people/${uid}`)
                fetch('https://www.swapi.tech/api/people/' + uid)
                    .then((response) => response.json())
                    .then(data => setStore({
                        infoPeople: data.result
                    }))
            },

            loadinfoPlanets: (uid) => {
                fetch('https://www.swapi.tech/api/planets/' + uid)
                    .then((response) => response.json())
                    .then(data => setStore({
                        infoPlanets: data.result
                    }))
            },

            loadinfoVehicles: (uid) => {
                fetch('https://www.swapi.tech/api/vehicles/' + uid)
                    .then((response) => response.json())
                    .then(data => setStore({
                        infoVehicles: data.result
                    }))
            },
             // funcion para agregar favoritos asociadas al boton corazon de cada card en home 
             agregarFavoritos: (item) => {
                const store = getStore();
                // forma un array extrayendo la propiedad nombre de favoritos
                const array = store.favoritos.map((item) => {
                    return (item.name)
                });
                //verifica si el nombre se ecuentra en el array, sino esta lo agrega a el array favoritos 
                const res = array.includes(item.name);
                if (res == false) {
                    setStore({
                        favoritos: [...store.favoritos, item],
                    });
                }
            },
              //funcion para borrar favoritos asociadas al boton X dentro de la lista en el dropdown de navbar
              borrarFavoritos: (itemBorrar) => {
                const store = getStore();
                const newfavoritos = store.favoritos.filter((item) => item !== itemBorrar)
                setStore({
                    favoritos: newfavoritos
                })
            },

           

            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo
                });
            }
        }
    };
};

export default getState;