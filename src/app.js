import Vue from 'vue'
import ButtonGroup from './button-group.vue'
import Button from './button.vue'

new Vue({
  el: '#app',
  components: {
    'g-button-group': ButtonGroup,
    'g-button': Button
  }
})