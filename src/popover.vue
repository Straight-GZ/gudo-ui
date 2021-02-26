<template>
  <div class = "popover" @click = "onClick" ref = "popover">
    <div ref = "contentWrapper" class = "contentWrapper" v-if = "visible"
         :class = "{[`position-${position}`]:true}">
      <slot name = "content"></slot>
    </div>
    <div ref = "triggerWrapper" style = "display: inline-block">
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
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
      }
    }
  },
  methods: {
    positionContent() {
      const {contentWrapper, triggerWrapper} = this.$refs
      document.body.appendChild(contentWrapper)
      const {left, top, width, height} = triggerWrapper.getBoundingClientRect()
      if (this.position === 'top') {
        contentWrapper.style.left = left + window.scrollX + 'px'
        contentWrapper.style.top = top + window.scrollY + 'px'
      } else if (this.position === 'bottom') {
        contentWrapper.style.left = left + window.scrollX + 'px'
        contentWrapper.style.top = top + height + window.scrollY + 'px'
      } else if (this.position === 'left') {
        contentWrapper.style.left = left + window.scrollX + 'px'
        const {height: height2} = contentWrapper.getBoundingClientRect()
        contentWrapper.style.top = top + (height - height2) / 2 + 'px'
      } else {
        contentWrapper.style.left = left + width + window.scrollX + 'px'
        const {height: height2} = contentWrapper.getBoundingClientRect()
        contentWrapper.style.top = top + (height - height2) / 2 + 'px'
      }
    },
    onClickDocument(e) {
      if (this.$refs.popover &&
        (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
      ) {return }
      if (this.$refs.contentWrapper &&
        (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))
      ) { return}
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
$border-color: #333;
$border-radius: 4px;
.popover {
  display: inline-block;
  position: relative;
  vertical-align: top;
}
.contentWrapper {
  border: 1px solid $border-color;
  border-radius: $border-radius;
  position: absolute;
  //box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  background: white;
  padding: 0.5em 1em;
  max-width: 20em;
  word-break: break-all;
  &::before, &::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    border: 10px solid transparent;
  }
  &.position-top {
    margin-top: -10px;
    transform: translateY(-100%);
    &::before {
      top: 100%;
      border-top-color: black;
    }
    &::after {
      top: calc(100% - 1px);
      border-top-color: white;
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before, &::after {
      left: 10px;
    }
    &::before {
      bottom: 100%;
      border-bottom-color: black;
    }
    &::after {
      bottom: calc(100% - 1px);
      border-bottom-color: white;
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before, &::after {
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      left: 100%;
      border-left-color: black;
    }
    &::after {
      left: calc(100% - 1px);
      border-left-color: white;
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before, &::after {
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      right: 100%;
      border-right-color: black;
    }
    &::after {
      right: calc(100% - 1px);
      border-right-color: white;
    }
  }
}
</style>