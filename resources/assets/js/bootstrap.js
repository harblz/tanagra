import Chart from 'Chart.js'

import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

import VueGridLayout from 'vue-grid-layout'

Vue.use(Buefy, {
    defaultIconPack: 'fa',
})

import VueRouter from 'vue-router';

import moment from 'moment';
window.moment = moment;

window.Vue = require('vue');
require('vue-resource');

Vue.http.interceptors.push(function (request, next) {
	request.headers['X-CSRF-TOKEN'] = Tanagra.csrfToken;
	next();
});

Vue.use(VueRouter);


/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.$ = window.jQuery = require('jquery');
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios';

window.axios = axios;

window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    'X-Requested-With': 'XMLHttpRequest'
};
/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}
