import './App.scss';
import Vue from 'vue';
import Page from './components/Page.vue';

class App {
  constructor() {
    this.createMountElement();
    this.mountVueApp();
  }

  createMountElement() {
    const mainElement = document.createElement('div');
    mainElement.id = 'app';
    document.querySelector('body').appendChild(mainElement);
  }

  mountVueApp() {
    new Vue({
      render: h => h(Page)
    }).$mount('#app');
  }
}

export default App;
