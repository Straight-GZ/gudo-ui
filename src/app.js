import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './g-button-group'
import Input from './input'

Vue.config.devtools = process.env.NODE_ENV === 'development'
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
new Vue({
	el: '#app',
	data: {
		loading1: false,
		loading2: true,
		loading3: false,
	},
	created() {
		setTimeout(() => {
			const event = new Event('change')
			let inputElement = this.$el.querySelector('input')
			inputElement.dispatchEvent(event)
		}, 3000)
	},
	methods: {
		inputChange: (e) => {
			console.log(e)
		}
	}
})
