require('@/assets/sass/main.scss');

import { createApp } from 'vue';
import App from './App.vue';

// -- Font Awesome Initialization

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faUserSecret  } from '@fortawesome/free-solid-svg-icons';

library.add(faUserSecret );

// -- Font Awesome Initialization

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app');
