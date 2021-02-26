import Toast from './toast'

function createToast({Vue, propsData, message, onClose}) {
	const Constructor = Vue.extend(Toast)
	const toast = new Constructor({propsData})
	toast.$slots.default = [message]
	toast.$on('close', onClose)
	toast.$mount()
	document.body.appendChild(toast.$el)
	return toast
}

let current
export default {
	install(Vue) {
		Vue.prototype.$toast = function (message, toastOptions) {
			if (current) {
				current.close()
			}
			current = createToast({
				Vue,
				message,
				propsData: toastOptions,
				onClose: () => {
					current = null
				}
			})
		}
	}
}