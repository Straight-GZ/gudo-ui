<template>
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
</template>
<script>
export default {
  name: 'JianToast',
  props: {
    autoClose: {type: Boolean, default: true},
    closeDelay: {type: Number, default: 5,},
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
        }, this.closeDelay * 1000)
      }
    },
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
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
.toast {color: white;display: flex;align-items: center;line-height: 1.8;font-size: $font-size;
  min-height: $height;background: $toast-bg;padding: 0 10px;box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.75);
  position: fixed;left: 50%;
  > .line {border-left: 1px solid #666;margin: 0 16px;}
  > .text {flex-shrink: 0}
  > .message {padding: 8px 0;}
  &.position-top {top: 0;transform: translateX(-50%);}
  &.position-middle {top: 50%;transform: translate(-50%, -50%);}
  &.position-bottom {bottom: 0;transform: translateX(-50%);}
}
</style>
