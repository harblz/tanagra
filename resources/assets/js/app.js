
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
var qq = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAKQWlDQ1BJQ0MgUHJvZmlsZQAASA2dlndUU9kWh8+9N73QEiIgJfQaegkg0jtIFQRRiUmAUAKGhCZ2RAVGFBEpVmRUwAFHhyJjRRQLg4Ji1wnyEFDGwVFEReXdjGsJ7601896a/cdZ39nnt9fZZ+9917oAUPyCBMJ0WAGANKFYFO7rwVwSE8vE9wIYEAEOWAHA4WZmBEf4RALU/L09mZmoSMaz9u4ugGS72yy/UCZz1v9/kSI3QyQGAApF1TY8fiYX5QKUU7PFGTL/BMr0lSkyhjEyFqEJoqwi48SvbPan5iu7yZiXJuShGlnOGbw0noy7UN6aJeGjjAShXJgl4GejfAdlvVRJmgDl9yjT0/icTAAwFJlfzOcmoWyJMkUUGe6J8gIACJTEObxyDov5OWieAHimZ+SKBIlJYqYR15hp5ejIZvrxs1P5YjErlMNN4Yh4TM/0tAyOMBeAr2+WRQElWW2ZaJHtrRzt7VnW5mj5v9nfHn5T/T3IevtV8Sbsz55BjJ5Z32zsrC+9FgD2JFqbHbO+lVUAtG0GQOXhrE/vIADyBQC03pzzHoZsXpLE4gwnC4vs7GxzAZ9rLivoN/ufgm/Kv4Y595nL7vtWO6YXP4EjSRUzZUXlpqemS0TMzAwOl89k/fcQ/+PAOWnNycMsnJ/AF/GF6FVR6JQJhIlou4U8gViQLmQKhH/V4X8YNicHGX6daxRodV8AfYU5ULhJB8hvPQBDIwMkbj96An3rWxAxCsi+vGitka9zjzJ6/uf6Hwtcim7hTEEiU+b2DI9kciWiLBmj34RswQISkAd0oAo0gS4wAixgDRyAM3AD3iAAhIBIEAOWAy5IAmlABLJBPtgACkEx2AF2g2pwANSBetAEToI2cAZcBFfADXALDIBHQAqGwUswAd6BaQiC8BAVokGqkBakD5lC1hAbWgh5Q0FQOBQDxUOJkBCSQPnQJqgYKoOqoUNQPfQjdBq6CF2D+qAH0CA0Bv0BfYQRmALTYQ3YALaA2bA7HAhHwsvgRHgVnAcXwNvhSrgWPg63whfhG/AALIVfwpMIQMgIA9FGWAgb8URCkFgkAREha5EipAKpRZqQDqQbuY1IkXHkAwaHoWGYGBbGGeOHWYzhYlZh1mJKMNWYY5hWTBfmNmYQM4H5gqVi1bGmWCesP3YJNhGbjS3EVmCPYFuwl7ED2GHsOxwOx8AZ4hxwfrgYXDJuNa4Etw/XjLuA68MN4SbxeLwq3hTvgg/Bc/BifCG+Cn8cfx7fjx/GvyeQCVoEa4IPIZYgJGwkVBAaCOcI/YQRwjRRgahPdCKGEHnEXGIpsY7YQbxJHCZOkxRJhiQXUiQpmbSBVElqIl0mPSa9IZPJOmRHchhZQF5PriSfIF8lD5I/UJQoJhRPShxFQtlOOUq5QHlAeUOlUg2obtRYqpi6nVpPvUR9Sn0vR5Mzl/OX48mtk6uRa5Xrl3slT5TXl3eXXy6fJ18hf0r+pvy4AlHBQMFTgaOwVqFG4bTCPYVJRZqilWKIYppiiWKD4jXFUSW8koGStxJPqUDpsNIlpSEaQtOledK4tE20Otpl2jAdRzek+9OT6cX0H+i99AllJWVb5SjlHOUa5bPKUgbCMGD4M1IZpYyTjLuMj/M05rnP48/bNq9pXv+8KZX5Km4qfJUilWaVAZWPqkxVb9UU1Z2qbapP1DBqJmphatlq+9Uuq43Pp893ns+dXzT/5PyH6rC6iXq4+mr1w+o96pMamhq+GhkaVRqXNMY1GZpumsma5ZrnNMe0aFoLtQRa5VrntV4wlZnuzFRmJbOLOaGtru2nLdE+pN2rPa1jqLNYZ6NOs84TXZIuWzdBt1y3U3dCT0svWC9fr1HvoT5Rn62fpL9Hv1t/ysDQINpgi0GbwaihiqG/YZ5ho+FjI6qRq9Eqo1qjO8Y4Y7ZxivE+41smsImdSZJJjclNU9jU3lRgus+0zwxr5mgmNKs1u8eisNxZWaxG1qA5wzzIfKN5m/krCz2LWIudFt0WXyztLFMt6ywfWSlZBVhttOqw+sPaxJprXWN9x4Zq42Ozzqbd5rWtqS3fdr/tfTuaXbDdFrtOu8/2DvYi+yb7MQc9h3iHvQ732HR2KLuEfdUR6+jhuM7xjOMHJ3snsdNJp9+dWc4pzg3OowsMF/AX1C0YctFx4bgccpEuZC6MX3hwodRV25XjWuv6zE3Xjed2xG3E3dg92f24+ysPSw+RR4vHlKeT5xrPC16Il69XkVevt5L3Yu9q76c+Oj6JPo0+E752vqt9L/hh/QL9dvrd89fw5/rX+08EOASsCegKpARGBFYHPgsyCRIFdQTDwQHBu4IfL9JfJFzUFgJC/EN2hTwJNQxdFfpzGC4sNKwm7Hm4VXh+eHcELWJFREPEu0iPyNLIR4uNFksWd0bJR8VF1UdNRXtFl0VLl1gsWbPkRoxajCCmPRYfGxV7JHZyqffS3UuH4+ziCuPuLjNclrPs2nK15anLz66QX8FZcSoeGx8d3xD/iRPCqeVMrvRfuXflBNeTu4f7kufGK+eN8V34ZfyRBJeEsoTRRJfEXYljSa5JFUnjAk9BteB1sl/ygeSplJCUoykzqdGpzWmEtPi000IlYYqwK10zPSe9L8M0ozBDuspp1e5VE6JA0ZFMKHNZZruYjv5M9UiMJJslg1kLs2qy3mdHZZ/KUcwR5vTkmuRuyx3J88n7fjVmNXd1Z752/ob8wTXuaw6thdauXNu5Tnddwbrh9b7rj20gbUjZ8MtGy41lG99uit7UUaBRsL5gaLPv5sZCuUJR4b0tzlsObMVsFWzt3WazrWrblyJe0fViy+KK4k8l3JLr31l9V/ndzPaE7b2l9qX7d+B2CHfc3em681iZYlle2dCu4F2t5czyovK3u1fsvlZhW3FgD2mPZI+0MqiyvUqvakfVp+qk6oEaj5rmvep7t+2d2sfb17/fbX/TAY0DxQc+HhQcvH/I91BrrUFtxWHc4azDz+ui6rq/Z39ff0TtSPGRz0eFR6XHwo911TvU1zeoN5Q2wo2SxrHjccdv/eD1Q3sTq+lQM6O5+AQ4ITnx4sf4H++eDDzZeYp9qukn/Z/2ttBailqh1tzWibakNml7THvf6YDTnR3OHS0/m/989Iz2mZqzymdLz5HOFZybOZ93fvJCxoXxi4kXhzpXdD66tOTSna6wrt7LgZevXvG5cqnbvfv8VZerZ645XTt9nX297Yb9jdYeu56WX+x+aem172296XCz/ZbjrY6+BX3n+l37L972un3ljv+dGwOLBvruLr57/17cPel93v3RB6kPXj/Mejj9aP1j7OOiJwpPKp6qP6391fjXZqm99Oyg12DPs4hnj4a4Qy//lfmvT8MFz6nPK0a0RupHrUfPjPmM3Xqx9MXwy4yX0+OFvyn+tveV0auffnf7vWdiycTwa9HrmT9K3qi+OfrW9m3nZOjk03dp76anit6rvj/2gf2h+2P0x5Hp7E/4T5WfjT93fAn88ngmbWbm3/eE8/syOll+AAADjElEQVR4Ae2cS08qQRSED4oCRiURw8PEBdEF//9vKAkLFm4whvAyEjUCCoqPW53b2EAyXglOmZvqxDjMNKem6+s6MysS5+fn76ZBc2CDpixh54AAkDeCAAgA2QGyvBIgAGQHyPJKgACQHSDLKwECQHaALK8ECADZAbK8EiAAZAfI8kqAAJAdIMsrAQJAdoAsrwQIANkBsrwSIABkB8jySoAAkB0gyysBAkB2gCyvBAgA2QGyvBIgAGQHyPJKgACQHSDLKwECQHaALK8ECADZAbK8EiAAZAfI8kqAAJAdIMsrAQJg9vb2tnYbfqLm2m/yT0FqAmBSo9GwarVql5eX9v4+/6sJj4+PdnZ2ZpPJ5J/XPhqNrF6vW61Ws5ubm6XvrVJzqcgaT1ABPDw82P39vVUqFbu9vbXBYDC3tG63a7lczlKp1Nz5qA/X19e2vb1tR0dH1mw2l6auUnOpyBpPUAFgZ2cyGdvb23Mmhzt9Op06KIVCYWm5mPfy8uLOY8eHA9f29/ctm83a6+ur+/PXo2r6OXH/T8YtGOptbm7O2s5i+0Ei0um0PT8/O0gbG597Bdf6/b7t7u7aeDx2CUokEq60r7lYDxejaob3Fefx56riVP2rtbOzY+jJV1dXzsiw1Tw9PTnzW62WXVxczN1dsVg0GA4I5XLZHfsJqInej+8lk0kDED+iavo5cf+nAzg5OZkZiHbkB3Y2jD49PbXhcDj3ptTpdJy56PN4iIe7vVQq2eHhoSsDGOGIqhnOi/OY2oKw0IODA8PORM/e2tqarR39G7vX72C8Mfk2hOcCjMbnfD4/A4gvYz6u4U0IAMMRVTOcF+cxHQBM6fV6bqeHC0c7ws7HGw3ajQeBOWgtfoTQ/Lm7uzv3kMYbVDiiaobz4jymtiAsFObjYYsEhAO7GG80eD4cHx/P7fJw3uIx2lG73Z4lJLy+as2wxrqPE7/9N+PC1rOuxf9EzVXvjZ6Ar27c9/2v5n3n+k/U/I5+OPfXAwhv9n88FgAyVQEQALIDZHklQADIDpDllQABIDtAllcCBIDsAFleCRAAsgNkeSVAAMgOkOWVAAEgO0CWVwIEgOwAWV4JEACyA2R5JUAAyA6Q5ZUAASA7QJZXAgSA7ABZXgkQALIDZHklQADIDpDllQABIDtAllcCBIDsAFleCRAAsgNkeSVAAMgOkOWVAAEgO0CWVwIEgOwAWf4D5T8YQyFWS3QAAAAASUVORK5CYII=';

var testLayout = [
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

            this.$http.get('/words/1/all')
                .then( response => {
                    console.log(response.data.words);
                    this.layout = response.data.words;
                });
        }
});
