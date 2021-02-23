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
  data() {
    return {gutter: 0}
  },
  methods: {
    createClasses(obj, str = '') {
      let array = []
      if (!obj) {return []}
      if (obj.span) {array.push(`col-${str}span-${obj.span}`)}
      if (obj.offset) {array.push(`col-${str}offset-${obj.offset}`)}
      return array
    }
  },
  computed: {
    colClass() {
      let {span, offset, ipad, narrowPc, pc, widePc} = this
      const createClasses = this.createClasses
      return [
        ...createClasses({span: span}),
        ...createClasses({offset: offset}),
        ...createClasses(ipad, 'ipad-'),
        ...createClasses(narrowPc, 'narrow-pc-'),
        ...createClasses(pc, 'pc-'),
        ...createClasses(widePc, 'wide-pc-'),
      ]
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