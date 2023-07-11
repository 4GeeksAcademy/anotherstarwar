import axios from "axios";

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

           //funcion de logueo verifica el usario recibido desde el front 
           login: async (email, password) => {
            try {

                let response = await axios.post('https://antoniomorales17-literate-bassoon-v4xw9qx54wj2xx9j-3000.preview.app.github.dev/login', {
                    email: email,
                    password: password
                })
                //La API valida que nombre de usuario y contraseña sean correctos y regresa un objeto token
                // if (response.status === 200) {
                localStorage.setItem("token", response.data.access_token);
                setStore({
                    auth: true
                });
                return true;
                // }
            } catch (error) {
                console.log(error);
                if (error.response.status === 401)
                    alert(error.response.data.msg)
                return false;
            }
        },
        // funcion para crear nuevo usuario 
        signup: async (email, password, nombre, apellido, fecha_suscripcion) => {

            try {

                let response = await axios.post('https://antoniomorales17-literate-bassoon-v4xw9qx54wj2xx9j-3000.preview.app.github.dev/signup', {
                    nombre: nombre,
                    apellido: apellido,
                    email: email,
                    password: password,
                    fecha_suscripcion
                })

                if (response.status === 200) {
                    alert(response.data.msg)
                    return true;
                }
            } catch (error) {
                if (error.response.status === 401)
                    alert(error.response.data.msg)
                return false;
            }
        },
        //funcion para cerrar sesion 
        logout: () => {
            localStorage.removeItem("token")
            setStore({
                auth: false
            })

        },

        validToken: async () => {
            let token = localStorage.getItem("token");
            try {

                let response = await axios.get('https://antoniomorales17-literate-bassoon-v4xw9qx54wj2xx9j-3000.preview.app.github.dev/profile', {
                    headers: {
                        'Authorization': 'Bearer ' + token,
                    },
                })
                if (response.status === 200) {
                    setStore({
                        auth: response.data.isLogged
                    });
                    return true;
                }
            } catch (error) {
                if (error.response.status === 401)
                    alert(error.response.data.msg)
                return false;
            }
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