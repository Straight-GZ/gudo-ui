<template>
  <div class = "wrapper" :class = "toastClasses">
    <div class = "toast" ref = "toast" :class = "toastClasses">
      <div class = "message">
        <div v-if = "enabledHtml" v-html = "$slots.default[0]"></div>
        <slot v-else></slot>
      </div>
      <span class = "line" ref = "line"></span>
      <span v-if = "closeButton" class = "text" @click = "onClickClose">
      {{ this.closeButton.text }}
    </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'JianToast',
  props: {
    autoClose: {
      type: [Boolean, Number],
      default: 5,
      validator(value) {return value === false || typeof value === 'number'}
    },
    enabledHtml: {type: Boolean, default: false},
    position: {
      type: String, default: 'top', validator(value) {
        return ['top', 'bottom', 'middle'].indexOf(value) >= 0
      }
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: '知道了',
          callback: undefined
        }
      }
    }
  },
  computed: {
    toastClasses() {return {[`position-${this.position}`]: true}}
  },
  mounted() {
    this.updateStyles()
    this.execAutoClose()
  },
  methods: {
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoClose * 1000)
      }
    },
    updateStyles() {
      this.$nextTick(() => {
        if (this.$refs.line) {
          this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
        }
      })
    },
    close() {
      this.$el.remove()
      this.$emit('close',)
      this.$destroy()
    },
    onClickClose() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this)
      }
    }
  }
}
</script>
<style lang = "scss" scoped>
$font-size: 14px;
$height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
$animation-time: 300ms;
@keyframes slide-up {
  0% {opacity: 0;transform: translateY(100%)}
  100% {opacity: 100%;transform: translateY(0%)}
}
@keyframes slide-down {
  0% {opacity: 0;transform: translateY(-100%)}
  100% {opacity: 100%;transform: translateY(0%)}
}
@keyframes fade-in {
  0% {opacity: 0;}
  100% {opacity: 100%;}
}
.wrapper {
  position: fixed; left: 50%;transform: translateX(-50%);
  &.position-top {top: 0;
    > .toast { border-top-left-radius: 0;border-top-right-radius: 0;
      animation: slide-down $animation-time;
    }
  }
  &.position-middle {top: 50%;transform: translate(-50%, -50%);
    > .toast {
      animation: fade-in $animation-time;
    }
  }
  &.position-bottom {bottom: 0;
    > .toast { border-bottom-left-radius: 0;border-bottom-right-radius: 0;
      animation: slide-up $animation-time;
    }
  }
}
.toast {color: white;display: flex;border-radius: 4px;align-items: center;line-height: 1.8;font-size: $font-size;
  min-height: $height;background: $toast-bg;padding: 0 10px;box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.75);
  > .line {border-left: 1px solid #666;margin: 0 16px;}
  > .text {flex-shrink: 0}
  > .message {padding: 8px 0;}
}
</style>
