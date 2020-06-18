import Vue from 'vue/dist/vue'
import App from './App.vue'
import router from '@/router/router'

import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

Vue.config.productionTip = false
Vue.config.devtools = true
new Vue({
    el: '#app',
    router,
    //store,
    components: {
        App
    },
    template: '<App/>'
})
