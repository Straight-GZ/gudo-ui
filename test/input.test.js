const expect = chai.expect
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
	it('存在.', () => {
		expect(Input).to.exist
	})
	describe('props', () => {
		const Constructor = Vue.extend(Input)
		let vm
		afterEach(() => {
			vm.$destroy()
		})
		it('可以接收value', () => {
			vm = new Constructor({
				propsData: {
					value: '1234'
				}
			}).$mount()
			const inputElement = vm.$el.querySelector('input')
			expect(inputElement.value).equal('1234')
		})
		it('可以接收disabled', () => {
			vm = new Constructor({
				propsData: {
					disabled: true
				}
			}).$mount()
			const inputElement = vm.$el.querySelector('input')
			expect(inputElement.disabled).equal(true)
		})
		it('可以接收readonly', () => {
			vm = new Constructor({
				propsData: {
					readonly: true
				}
			}).$mount()
			const inputElement = vm.$el.querySelector('input')
			expect(inputElement.readOnly).equal(true)
		})
		it('可以接收error', () => {
			vm = new Constructor({
				propsData: {
					error: '错了'
				}
			}).$mount()
			const useElement = vm.$el.querySelector('use')
			const errorMessage = vm.$el.querySelector('.error-message')
			expect(errorMessage.innerText).eq('错了')
			expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
		})
	})
	describe('事件', () => {
		const Constructor = Vue.extend(Input)
		let vm
		afterEach(() => {
			vm.$destroy()
		})
		it('支持 change/input/focus/blur 事件', () => {
			['change', 'input', 'focus', 'blur'].forEach((eventName) => {
				vm = new Constructor({}).$mount()
				const callback = sinon.fake()
				vm.$on(eventName, callback)
				const event = new Event(eventName)
				Object.defineProperty(event, 'target', {
					value: {value: 'hi'}, enumerable: true
				})
				let inputElement = vm.$el.querySelector('input')
				inputElement.dispatchEvent(event)
				expect(callback).to.have.been.calledWith('hi')
				
			})
		})
	})
})