<template>
  <div class = "col" :class = "[span && `col-span-${span}`,offset && `col-offset-${offset}`]"
       :style = "{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}">
    <div style = 'border: 1px solid green;height: 100px;'>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'JianCol',
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    }
  },
  data() {
    return {
      gutter: 0
    }
  }
}
</script>
<style lang = "scss" scoped>
.col {width: 50%;
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
}
</style>