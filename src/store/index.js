import { createStore } from "vuex";

export default createStore({
    state: () => ({
        persons: [],
    }),

    getters: {
        getSortedProducts(state, getters) {
            let arr = getters.getfiltredProducts
            switch (state.selectedOption.val) {
                case 'fromExpensive' :
                    return arr.sort((a, b) => b.price - a.price)

                case 'fromCheap' :
                    return arr.sort((a, b) => a.price - b.price)

                case 'fromPopular' :
                    return arr.sort((a, b) => b.rating - a.rating)

                case 'fromNew' :
                    return arr.sort((a, b) => (new Date(b.data)).getTime() - (new Date(a.data)).getTime())

                default:
                    arr.sort((a, b) => b.price - a.price)

            }
        },
    },
    mutations: {
        setPersons(state, persons) {
            state.persons = persons
        },
    },

    actions: {
        fetchPersons({state, commit}) {
            try {
                fetch("https://jsonplaceholder.typicode.com/users")
                    .then(response => {
                        if (response.ok) {
                            console.log(response.data)
                            commit('setPersons', response.data)
                        } 
                    })
            }   catch(e) {
                console.log('error')
            }
        },
    },
    modules: {

    }
})