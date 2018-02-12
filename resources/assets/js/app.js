
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import Vue from 'vue'
import VueGridLayout from 'vue-grid-layout'

import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'

// Grab my Font Awesome icons -- only the ones I need, to make the app slightly tinier
import faUserPlus from '@fortawesome/fontawesome-free-solid/faUserPlus'
import faComment from '@fortawesome/fontawesome-free-solid/faComment'
import faKey from '@fortawesome/fontawesome-free-solid/faKey'
import faHome from '@fortawesome/fontawesome-free-solid/faHome'
import faCogs from '@fortawesome/fontawesome-free-solid/faCogs'
import faImage from '@fortawesome/fontawesome-free-solid/faImage'
import faWrench from '@fortawesome/fontawesome-free-solid/faWrench'
import faUser from '@fortawesome/fontawesome-free-solid/faUser'

fontawesome.library.add(brands, faUserPlus, faComment, faKey, faHome, faCogs, faImage, faWrench, faUser)

// All our components....
import TanagraWelcome from './TanagraWelcome.vue'
import TanagraNav from './components/TanagraNav.vue'
import TanagraHome from './components/TanagraHome.vue'
import FileUpload from './components/FileUpload.vue'

$('.some_class').click(function(){
   console.log('hey, stop clicking me')         
});

// this is a test layout for VUE-grid-layout
var testLayout = [
    {"x":0,"y":0,"w":2,"h":2,"i":"0", "path":"/path/to/image/file", "word":"cat"},
    {"x":2,"y":0,"w":2,"h":4,"i":"1", "path":"/path/to/image/file", "word":"apple"},
    {"x":4,"y":0,"w":2,"h":5,"i":"2", "path":"/path/to/image/file", "word":"test"},
    {"x":6,"y":0,"w":2,"h":3,"i":"3", "path":"/path/to/image/file", "word":"The"},
    {"x":8,"y":0,"w":2,"h":3,"i":"4", "path":"/path/to/image/file", "word":"Quick"},
    {"x":10,"y":0,"w":2,"h":3,"i":"5", "path":"/path/to/image/file", "word":"Brown"},
    {"x":0,"y":5,"w":2,"h":5,"i":"6", "path":"/path/to/image/file", "word":"Fox"},
    {"x":2,"y":5,"w":2,"h":5,"i":"7", "path":"/path/to/image/file", "word":"Jumped"},
    {"x":4,"y":5,"w":2,"h":5,"i":"8", "path":"/path/to/image/file", "word":"Over"},
    {"x":6,"y":4,"w":2,"h":4,"i":"9", "path":"/path/to/image/file", "word":"The"},
    {"x":8,"y":4,"w":2,"h":4,"i":"10", "path":"/path/to/image/file", "word":"Lazy"},
    {"x":10,"y":4,"w":2,"h":4,"i":"11", "path":"/path/to/image/file", "word":"Dog"},
    {"x":0,"y":10,"w":2,"h":5,"i":"12", "path":"/path/to/image/file", "word":"While"},
    {"x":2,"y":10,"w":2,"h":5,"i":"13", "path":"/path/to/image/file", "word":"Holding"},
    {"x":4,"y":8,"w":2,"h":4,"i":"14", "path":"/path/to/image/file", "word":"an"},
    {"x":6,"y":8,"w":2,"h":4,"i":"15", "path":"/path/to/image/file", "word":"Orange"},
    {"x":8,"y":10,"w":2,"h":5,"i":"16", "path":"/path/to/image/file", "word":"In"},
    {"x":10,"y":4,"w":2,"h":2,"i":"17", "path":"/path/to/image/file", "word":"It's"},
    {"x":0,"y":9,"w":2,"h":3,"i":"18", "path":"/path/to/image/file", "word":"Clenched"},
    {"x":2,"y":6,"w":2,"h":2,"i":"19", "path":"/path/to/image/file", "word":"Jaws"}
];

const app = new Vue({
    el: '#app',

    components: {
    	TanagraWelcome,
    	TanagraNav,
    	TanagraHome,
    	FileUpload,
    },

    data: {
    	csrfToken: Tanagra.csrfToken,
        loginStatus: null,
        user: null,

        // in case you want to reset your changes: store the old layout in resetLayout, the new layout in newLayout, and toggle a resetLayoutButton for the user to press!
        resetLayoutButtonVisible: null,

        // this is the layout that is currently loaded. TODO: have this load a default from the DB
        layout: testLayout,

        // newLayout == the layout that has not yet been persisted to the database
        newLayout: null,
        // resetLayout == the layout that was previously saved to the DB
        resetLayout: null,

        toggleSaveLayoutButton: false,
        editMode: {
            value: false,
            text: 'Toggle Edit Mode',
        },
    },

    mounted() {
        this.$http.get('/user/login-status')
          .then( response => {
                console.log(response);
                this.loginStatus = response.data.status;
                if ( this.loginStatus == true ) {
                    this.user = response.data.user;
                }
          });
        }
});
