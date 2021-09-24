import Vue from 'vue'
import App from './app.vue'

new Vue({
    
    render(createElement){
        return createElement(App)
    }
}).$mount("#app")