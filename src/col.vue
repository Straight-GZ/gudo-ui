<template>
  <div class = "col" :class = "colClass" :style = "colStyle">
    <slot></slot>
  </div>
</template>
<script>
let validator = (value) => {
  let keys = Object.keys(value)
  let valid
  keys.forEach((key) => {
    valid = ['span', 'offset'].includes(key)
  })
  return valid
}
export default {
  name: 'JianCol',
  props: {
    span: {type: [Number, String]},
    offset: {type: [Number, String]},
    ipad: {type: Object, validator,},
    narrowPc: {type: Object, validator,},
    pc: {type: Object, validator,},
    widePc: {type: Object, validator,},
  },
  methods: {},
  data() {
    return {gutter: 0}
  },
  computed: {
    colClass() {
      let {span, offset, ipad, narrowPc, pc, widePc} = this
      return [span && `col-span-${span}`, offset && `col-offset-span-${offset}`,
        ...(ipad && ipad.span ? [`col-ipad-span-${ipad.span}`] : []),
        ...(narrowPc && narrowPc.span ? [`col-narrow-pc-span-${narrowPc.span}`] : []),
        ...(pc && pc.span ? [`col-pc-span-${pc.span}`] : []),
        ...(widePc && widePc.span ? [`col-wide-pc-span-${widePc.span}`] : [])]
    },
    colStyle() {
      return {paddingLeft: this.gutter / 2 + 'px', paddingRight: this.gutter / 2 + 'px'}
    }
  }
}
</script>
<style lang = "scss" scoped>
.col {
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}span-#{$n} {
      width: $n/24 *100%
    }
    @for $n from 1 through 24 {
      &.#{$class-prefix}offset-#{$n} {
        margin-left: $n/24 *100%
      }
    }
  }
  @media (min-width: 577px) {
    $class-prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}span-#{$n} {
        width: $n/24 *100%
      }
      @for $n from 1 through 24 {
        &.#{$class-prefix}offset-#{$n} {
          margin-left: $n/24 *100%
        }
      }}}
  @media (min-width: 769px) {
    $class-prefix: col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}span-#{$n} {
        width: $n/24 *100%
      }
      @for $n from 1 through 24 {
        &.#{$class-prefix}offset-#{$n} {
          margin-left: $n/24 *100%
        }
      }}}
  @media (min-width: 993px) {
    $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}span-#{$n} {
        width: $n/24 *100%
      }
      @for $n from 1 through 24 {
        &.#{$class-prefix}offset-#{$n} {
          margin-left: $n/24 *100%
        }
      }}}
  @media (min-width: 1201px) {
    $class-prefix: col-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}span-#{$n} {
        width: $n/24 *100%
      }
      @for $n from 1 through 24 {
        &.#{$class-prefix}offset-#{$n} {
          margin-left: $n/24 *100%
        }
      }}}
}

</style>