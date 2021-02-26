<template>
  <div class = "popover" @click.stop = "xxx">
    <div ref = "contentWrapper" class = "contentWrapper" v-if = "visible" @click.stop>
      <slot name = "content"></slot>
    </div>
    <div ref = "triggerWrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JianPopover',
  data() {
    return {
      visible: false
    }
  },
  methods: {
    xxx() {
      this.visible = !this.visible
      if (this.visible === true) {
        this.$nextTick(() => {
          document.body.appendChild(this.$refs.contentWrapper)
          let {left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
          this.$refs.contentWrapper.style.left = left + 'px'
          this.$refs.contentWrapper.style.top = top + 'px'
          let eventHandler = () => {
            this.visible = false
            document.removeEventListener('click', eventHandler)
          }
          document.addEventListener('click', eventHandler)
        })
      }
    }
  }
}
</script>

<style lang = "scss" scoped>
.popover {
  display: inline-block;
  position: relative;
  vertical-align: top;
}
.contentWrapper {
  position: absolute;
  transform: translateY(-100%);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
}
</style>