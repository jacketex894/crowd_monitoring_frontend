import { createApp } from 'vue'
import App from './App.vue'
//import VueNativeSock from "vue-native-websocket-vue3";

createApp(App).mount('#app')

// 使用VueNativeSock插件，並進行相關配置
/*App.use(VueNativeSock, "ws://127.0.0.1:8765", {
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 3000,
});*/