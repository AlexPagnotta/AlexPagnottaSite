require('@/assets/sass/main.scss');

import { createApp } from 'vue';
import App from './App.vue';

// -- Font Awesome Initialization

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faLinkedinIn   } from '@fortawesome/free-brands-svg-icons';
import { faFile,faEnvelope  } from '@fortawesome/free-regular-svg-icons';

library.add(faLinkedinIn, faEnvelope, faFile );

// -- Font Awesome Initialization

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app');
