<template>
  <div class="content">
      <div class="title m-b-md">
          <font-awesome-icon icon="comment" /></font-awesome-icon> Tanagra
      </div>

      <br />

      <div class="subtitle">
          More Talk. Less Action.
      </div>
      
      <br />

      <div class="links">
          <a v-if="loginStatus" href="/home">Home</a>
          <a href="/news">News</a>
          <a href="/docs">Documentation</a>
          <a href="/about">What is it?</a>
      </div>
  </div>
</template>

<script>

import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: 'TanagraWelcome',

  props: ['loginStatus'],

  components: {
    FontAwesomeIcon
  }
  
}
</script>

<style>
    html, body {
        background-color: #fff;
        color: #636b6f;
        font-family: 'Raleway', sans-serif;
        font-weight: 100;
        height: 100vh;
        margin: 0;
    }

    .full-height {
        height: 100vh;
    }

    .flex-center {
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .position-ref {
        position: relative;
    }

    .top-right {
        position: absolute;
        right: 10px;
        top: 18px;
    }

    .content {
        text-align: center;
    }

    .title {
        font-size: 84px;
    }

    .links > a {
        color: #636b6f;
        padding: 0 25px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: .1rem;
        text-decoration: none;
        text-transform: uppercase;
    }

    .m-b-md {
        margin-bottom: 30px;
    }
</style>