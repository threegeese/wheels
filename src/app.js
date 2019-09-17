import Vue from 'vue'
import ButtonGroup from './button-group.vue'
import Button from './button.vue'

import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)

new Vue({
  el: '#app',
  components: {
    'g-button-group': ButtonGroup,
    'g-button': Button
  }
})

// Unit Testing
const expect = chai.expect
{
  const constructor = Vue.extend(Button)
  const button = new constructor({
    propsData: {
      'icon': 'settings'
    }
  })
  button.$mount()

  let useElement = button.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#icon-settings')

  button.$el.remove()
  button.$destroy()
}

{
  const constructor = Vue.extend(Button)
  const gButton = new constructor({
    propsData: {
      'icon': 'settings'
    }
  })
  gButton.$mount()

  let spy = chai.spy(function () {})
  gButton.$on('click', spy)
  gButton.$emit('click')
  expect(spy).to.have.been.called()

  gButton.$el.remove()
  gButton.$destroy()
}