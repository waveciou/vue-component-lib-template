import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import MyButton from "@lib/core";

const app = createApp(App); 
app.use(MyButton); // 新增
app.mount("#app");
