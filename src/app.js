import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './g-button-group'
import Input from './input'
import Row from './row'
import Col from './col'


Vue.config.devtools = process.env.NODE_ENV === 'development'
Vue.component('g-row', Row)
Vue.component('g-col', Col)
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
		message: 'hi'
	},
	created() {
	},
	methods: {
		inputChange: (e) => {
			console.log(e)
		}
	}
})
