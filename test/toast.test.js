const expect = chai.expect
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
	it('存在.', () => {
		expect(Toast).to.be.exist
	})
	describe('props', function () {
		it('接受 autoClose', (done) => {
			let div = document.createElement('div')
			document.body.appendChild(div)
			const Constructor = Vue.extend(Toast)
			const vm = new Constructor({
				propsData: {
					autoClose: 1,
				}
			}).$mount(div)
			vm.$on('close', () => {
				expect(document.body.contains(vm.$el)).to.eq(false)
				done()
				vm.$destroy()
			})
		})
		it('接受 closeButton', () => {
			const callback = sinon.fake()
			const Constructor = Vue.extend(Toast)
			const vm = new Constructor({
				propsData: {
					closeButton: {
						text: '文本',
						callback
					}
				}
			}).$mount()
			let span = vm.$el.querySelector('.text')
			expect(span.textContent.trim()).to.eq('文本')
			span.click()
			expect(callback).to.have.been.called
		})
		it('接受 enabledHtml', () => {
			const Constructor = Vue.extend(Toast)
			const vm = new Constructor({
				propsData: {
					enabledHtml: true
				}
			})
			vm.$slots.default = ['<strong id="x">123</strong>']
			vm.$mount()
			let strong = vm.$el.querySelector('#x')
			expect(strong).exist
		})
		it('接受 position', () => {
			const Constructor = Vue.extend(Toast)
			const vm = new Constructor({
				propsData: {
					position: 'middle'
				}
			}).$mount()
			expect(vm.$el.classList.contains('position-middle')).eq(true)
		})
	})
})