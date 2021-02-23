const expect = chai.expect
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
	it('存在', () => {
		expect(Row).to.be.exist
	})
	it('接受gutter属性', (done) => {
		Vue.component('g-row', Row)
		Vue.component('g-col', Col)
		const div = document.createElement('div')
		document.body.appendChild(div)
		div.innerHTML = `
			<g-row gutter="20">
				<g-col span="12"></g-col>
				<g-col span="12"></g-col>
			</g-row>`
		const vm = new Vue({
			el: div
		})
		setTimeout(() => {
			const cols = vm.$el.querySelectorAll('.col')
			const row = vm.$el.querySelector('.row')
			expect(getComputedStyle(row).marginLeft).eq('-10px')
			expect(getComputedStyle(row).marginRight).eq('-10px')
			expect(getComputedStyle(cols[0]).paddingLeft).eq('10px')
			expect(getComputedStyle(cols[0]).paddingRight).eq('10px')
			vm.$el.remove()
			vm.$destroy()
			done()
		}, 0)
	})
	it('接受align属性', () => {
		const div = document.createElement('div')
		document.body.appendChild(div)
		const Constructor = Vue.extend(Row)
		const vm = new Constructor({
			propsData: {
				align: 'right'
			}
		}).$mount(div)
		expect(getComputedStyle(vm.$el).justifyContent).eq('flex-end')
		div.remove()
		vm.$destroy()
	})
})