import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
  theme:{
    themes:{
      dark:{
        primary:'#FFD600'
      }
    }
  }
});
