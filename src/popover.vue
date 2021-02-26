<template>
  <div class = "popover" @click.stop = "xxx">
    <div class = "contentWrapper" v-if = "visible" @click.stop>
      <slot name = "content"></slot>
    </div>
    <slot></slot>
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
        let eventHandler = () => {
          this.visible = false
          document.removeEventListener('click', eventHandler)
        }
        this.$nextTick(() => {
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
  > .contentWrapper {
    position: absolute;
    bottom: 100%;
    left: 0;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
}

</style>