

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

            login: async (email, password) => {
                try {
                    let response = await fetch('https://antoniomorales17-musical-space-guide-j6x9vqxw45qfprw5-3000.preview.app.github.dev/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: email,
                            password: password
                        })
                    });
            
                    if (response.ok) {
                        let data = await response.json();
                        localStorage.setItem("token", data.access_token);
                        setStore({
                            auth: true
                        });
                        return true;
                    } else {
                        let errorData = await response.json();
                        console.log(errorData);
                        if (response.status === 401)
                            alert(errorData.msg);
                        return false;
                    }
                } catch (error) {
                    console.log(error);
                    return false;
                }
            },
            signup: async (email, password, nombre, apellido, fecha_suscripcion) => {
                try {
                    let response = await fetch('https://antoniomorales17-musical-space-guide-j6x9vqxw45qfprw5-3000.preview.app.github.dev/signup', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            nombre: nombre,
                            apellido: apellido,
                            email: email,
                            password: password,
                            fecha_suscripcion: fecha_suscripcion
                        })
                    });
            
                    if (response.ok) {
                        let data = await response.json();
                        alert(data.msg);
                        return true;
                    } else {
                        let errorData = await response.json();
                        console.log(errorData);
                        if (response.status === 401)
                            alert(errorData.msg);
                        return false;
                    }
                } catch (error) {
                    console.log(error);
                    return false;
                }
            },
            logout: () => {
                localStorage.removeItem("token");
                setStore({
                    auth: false
                });
            },
            validToken: async () => {
                let token = localStorage.getItem("token");
                try {
                    let response = await fetch('https://antoniomorales17-musical-space-guide-j6x9vqxw45qfprw5-3000.preview.app.github.dev/profile', {
                        headers: {
                            'Authorization': 'Bearer ' + token
                        }
                    });
            
                    if (response.ok) {
                        let data = await response.json();
                        setStore({
                            auth: data.isLogged
                        });
                        return true;
                    } else {
                        let errorData = await response.json();
                        console.log(errorData);
                        if (response.status === 401)
                            alert(errorData.msg);
                        return false;
                    }
                } catch (error) {
                    console.log(error);
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