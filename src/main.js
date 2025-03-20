import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'



import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPhone, faCakeCandles, faLocationDot, faUserGraduate, faBookBookmark, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-brands-svg-icons'
import { faEye, faEnvelope } from '@fortawesome/free-regular-svg-icons'



/* add icons to the library */
library.add(faEye,faEnvelope, faPhone, faCakeCandles, faLocationDot, faUserGraduate, faBookBookmark, faChevronDown)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
