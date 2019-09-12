<template>
  <button :class="['g-button', `icon-${iconPosition}`]">
    <div class="content">
      <slot>按钮</slot>
    </div>
    <g-icon v-if="icon" :name="icon" class="g-icon"/>
  </button>
</template>

<script>
import Icon from './icon.vue'
export default {
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: 'left',
      validator (value) {
        return value === 'left' || value === 'right'
      }
    }
  },
  components: {
    'g-icon': Icon
  }
}
</script>

<style lang="scss">
.g-button {
  height: var(--button-height);
  padding: 0 1em;
  font-size: var(--font-size);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  background: var(--button-bg);
  vertical-align: middle;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:hover { border-color: var(--border-button-hover); }
  &:active { background-color: var(--button-active-bg); }
  &:focus { outline: none; }

  > .g-icon { order: 1; margin-right: .2em; }
  > .content { order: 2; }

  &.icon-right {
    > .g-icon { order: 2; margin-right: 0; margin-left: .2em; }
    > .content { order: 1; }
  }
}
</style>