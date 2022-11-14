import { App } from "vue";
import MyButton from "./MyButton.vue";

export { MyButton };

export default {
  install(app: App) {
    app.component("MyButton", MyButton);
  },
};