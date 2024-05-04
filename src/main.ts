import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import PrimeVue from 'primevue/config';
import Wind from '@/presets/wind';      //import preset        

const app = createApp(App);
app.use(PrimeVue, {
    unstyled: true,
    pt: Wind                            //apply preset        
});
app.use(router)

app.mount('#app')