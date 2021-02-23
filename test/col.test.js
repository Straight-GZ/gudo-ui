const expect = chai.expect
import Vue from 'vue'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
	it('存在', () => {
		expect(Col).to.be.exist
	})
	it('接受span', () => {
		const div = document.createElement('div')
		document.body.appendChild(div)
		const Constructor = Vue.extend(Col)
		const vm = new Constructor({
			propsData: {
				span: 1
			}
		}).$mount(div)
		expect(vm.$el.classList.contains('col-span-1')).eq(true)
		div.remove()
		vm.$destroy()
	})
	it('接受offset', () => {
		const div = document.createElement('div')
		document.body.appendChild(div)
		const Constructor = Vue.extend(Col)
		const vm = new Constructor({
			propsData: {
				offset: 1
			}
		}).$mount(div)
		expect(vm.$el.classList.contains('col-offset-1')).eq(true)
		div.remove()
		vm.$destroy()
	})
	it('接受 pc', () => {
		const div = document.createElement('div')
		document.body.appendChild(div)
		const Constructor = Vue.extend(Col)
		const vm = new Constructor({
			propsData: {
				pc: {span: 1, offset: 2}
			}
		}).$mount(div)
		expect(vm.$el.classList.contains('col-pc-span-1')).eq(true)
		expect(vm.$el.classList.contains('col-pc-offset-2')).eq(true)
		div.remove()
		vm.$destroy()
	})
	it('接受 ipad', () => {
		const div = document.createElement('div')
		document.body.appendChild(div)
		const Constructor = Vue.extend(Col)
		const vm = new Constructor({
			propsData: {
				ipad: {span: 1, offset: 2}
			}
		}).$mount(div)
		expect(vm.$el.classList.contains('col-ipad-span-1')).eq(true)
		expect(vm.$el.classList.contains('col-ipad-offset-2')).eq(true)
		div.remove()
		vm.$destroy()
	})
	it('接受 narrowPc', () => {
		const div = document.createElement('div')
		document.body.appendChild(div)
		const Constructor = Vue.extend(Col)
		const vm = new Constructor({
			propsData: {
				narrowPc: {span: 1, offset: 2}
			}
		}).$mount(div)
		expect(vm.$el.classList.contains('col-narrow-pc-span-1')).eq(true)
		expect(vm.$el.classList.contains('col-narrow-pc-offset-2')).eq(true)
		div.remove()
		vm.$destroy()
	})
	it('接受 widePc', () => {
		const div = document.createElement('div')
		document.body.appendChild(div)
		const Constructor = Vue.extend(Col)
		const vm = new Constructor({
			propsData: {
				widePc: {span: 1, offset: 2}
			}
		}).$mount(div)
		expect(vm.$el.classList.contains('col-wide-pc-span-1')).eq(true)
		expect(vm.$el.classList.contains('col-wide-pc-offset-2')).eq(true)
		div.remove()
		vm.$destroy()
	})
})