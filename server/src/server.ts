import App from './app';
import router from './router';
 
const app = new App(router, 5000);
 
app.listen();