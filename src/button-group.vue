<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
import Button from './button.vue'
export default {
  components: {
    'g-button': Button
  }
}
</script>

<style lang="scss">
.g-button-group {
  display: inline-flex;
  > .g-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      z-index: 1;
    }
  }
}
</style>