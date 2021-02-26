import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './g-button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Content from './content'
import Sider from './sider'
import Footer from './footer'
import Toast from './toast'
import Plugin from './plugin'
import Tabs from './tabs'
import TabsBody from './tabs-body'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'

Vue.config.devtools = process.env.NODE_ENV === 'development'
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-sider', Sider)
Vue.component('g-footer', Footer)
Vue.component('g-toast', Toast)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover', Popover)
Vue.use(Plugin)
new Vue({
	el: '#app',
	data() {
		return {
			selected: 'sports'
		}
	},
	mounted() {
	},
	methods: {
		showToast(position) {
			this.$toast(`确认删除${parseInt((Math.random() * 100).toString())}吗？`, {
				position: position,
				autoClose: false,
				closeButton: {
					text: '确认', callback() {console.log('已经删除了')}
				}
			})
		}
	}
})
