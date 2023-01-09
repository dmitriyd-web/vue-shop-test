import { createStore } from 'vuex'

export default createStore({
	state: {
		//tovasrsInBasket: []
		tovasrsInBasket: 0,
		tovarIdPage: [],
		tovars: [
			{ id: 11, name: 'Футболка USA', photo: require('../assets/images/tovar-1.png'), full_price: 229, discount_price: 129, count: 0 },
			{ id: 22, name: 'Купальник Glow', photo: require('../assets/images/tovar-2.png'), full_price: '', discount_price: 129, count: 0 },
			{ id: 33, name: 'Свитшот Sweet Shot', photo: require('../assets/images/tovar-3.png'), full_price: '', discount_price: 129, count: 0 }
		]
	},
	getters: {

	},
	mutations: {
		addTovar(state) {
			state.tovasrsInBasket++
		},
		removeTovar(state) {

		},
		setCurrentTovar(state, tovarId) {
			for (let i = 0; i < state.tovars.length; i++) {
				if (state.tovars[i].id === tovarId) {
					
					state.tovarIdPage.push(state.tovars[i])
					
					//state.tovarIdPage = state.tovars[i]
				}
			}
		}
	},
	actions: {
	},
	modules: {
	}
})
