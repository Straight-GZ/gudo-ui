<template>
  <div class = "popover" @click = "onClick" ref = "popover">
    <div ref = "contentWrapper" class = "contentWrapper" v-if = "visible">
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
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper)
      let {left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
      this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
      this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
    },
    onClickDocument(e) {
      if (this.$refs.popover &&
        (this.$refs.popover === e.target
          || this.$refs.popover.contains(e.target)
          || this.$refs.contentWrapper === e.target)
      ) {return }
      this.close()
    },
    open() {
      this.visible = true
      this.$nextTick(() => {
        this.positionContent()
        document.addEventListener('click', this.onClickDocument)
      })
    },
    close() {
      this.visible = false
      document.removeEventListener('click', this.onClickDocument)
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible === true) {
          this.close()
        } else {
          this.open()
        }
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