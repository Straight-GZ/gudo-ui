const expect = chai.expect
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'
import TabsHead from '../src/tabs-head'

Vue.config.productionTip = false
Vue.config.devtools = false
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
describe('TabsItem', () => {
	it('存在.', () => {
		expect(TabsItem).to.be.exist
	})
	it('接受 name 属性', () => {
		const Constructor = Vue.extend(TabsItem)
		const vm = new Constructor({
			propsData: {
				name: 'xxx'
			}
		}).$mount()
		expect(vm.$el.getAttribute('data-name')).eq('xxx')
		vm.$destroy()
	})
	it('接受 disabled 属性', () => {
		const Constructor = Vue.extend(TabsItem)
		const vm = new Constructor({
			propsData: {
				disabled: true
			}
		}).$mount()
		expect(vm.$el.classList.contains('disabled')).true
		const callback = sinon.fake()
		vm.$on('click', callback)
		vm.$el.click()
		expect(callback).to.have.not.been.called
		vm.$destroy()
	})
})