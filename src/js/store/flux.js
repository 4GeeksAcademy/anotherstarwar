

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
            vehicles: [],
            infoVehicles: [],

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

            addFavorites: (item) => {
                const store = getStore();

                const array = store.favoritos.map((item) => {
                    return (item.name)
                });

                const res = array.includes(item.name);
                if (res == false) {
                    setStore({
                        favoritos: [...store.favoritos, item],
                    });
                }
            },

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