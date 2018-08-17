// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'timezone-picker'
import 'select2'
import 'moment-timezone'

import 'timezone-picker/dist/styles/timezone-picker.css'
import 'select2/dist/css/select2.css'

Vue.config.productionTip = false

Vue.component('vue-timezone-picker', {
  template: `<div></div>`,
  props: ['value', 'options'],
  mounted: function () {
    var vm = this
    var $tzp = $(this.$el).timezonePicker(this.options)
    $tzp.on('map:value:changed', function () {
      vm.$emit('input', $(this).data('timezonePicker').getValue())
    })

    if (this.value) {
      $tzp.data('timezonePicker').setValue(this.value)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
