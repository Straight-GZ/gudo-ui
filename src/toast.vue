<template>
  <div class = "toast">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'JianToast',
}
</script>
<style lang = "scss" scoped>
$font-size: 14px;
$height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  color: white;
  display: flex;
  align-items: center;
  line-height: 1.8;
  font-size: $font-size;
  height: $height;
  background: $toast-bg;
  padding: 0 10px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
