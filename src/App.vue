<template>
<div id="app">
  <!-- Mobile button -->
  <div class="mobile-btn" @click="mobileMenuOpen = !mobileMenuOpen" v-bind:class="{init: isInit, open: mobileMenuOpen}">
    <div class="black"><span>Menu</span></div>
    <div class="circle">
      <span></span>
      <span></span>
    </div>
  </div>
  <!-- Logo right -->
  <router-link class="logo-right" active-class="active" to="/"><img src="./img/logo-w.png" /><img src="./img/logo-g.png" /></router-link>
  <!-- Mobile menu -->
  <div class="mobile-menu" v-bind:class="{open: mobileMenuOpen}">
    <div class="container">
      <router-link active-class="active" to="/"><img @click="mobileMenuOpen=false" src="./img/logo.png" class="logo" /></router-link>
      <router-link active-class="active" to="/clients">Clients<span @click="mobileMenuOpen=false">Clients</span></router-link>
      <img class="zig-zag" src="./img/zig-zag.png" />
      <router-link active-class="active" to="/services">Services<span @click="mobileMenuOpen=false">Services</span></router-link>
      <img class="zig-zag" src="./img/zig-zag.png" />
      <router-link active-class="active" to="/about">About<span @click="mobileMenuOpen=false">About</span></router-link>
      <img class="zig-zag" src="./img/zig-zag.png" />
      <router-link active-class="active" to="/contact">Contact<span @click="mobileMenuOpen=false">Contact</span></router-link>
      <img class="zig-zag" src="./img/zig-zag.png" />
      <div class="social">
        Find us on<br />
        <a href="https://www.facebook.com/plan.a.ideas/" target="_blank"><img src="./img/social-fb.png" /></a>
        <a href="https://twitter.com/plan_a_ideas" target="_blank"><img src="./img/social-tw.png" /></a>
        <a href="https://www.instagram.com/plana.digital" target="_blank"><img src="./img/social-ig.png" /></a>
        <a href="https://www.linkedin.com/company/plan-a-for-digital" target="_blank"><img src="./img/social-in.png" /></a>
        <a href="mailto:hello@plan-a.co.in">hello@plan-a.co.in<span>hello@plan-a.co.in</span></a>
      </div>
    </div>
  </div>
  <!-- Main site -->
  <transition v-bind:css="false" v-on:leave="leave" v-on:enter="enter">
    <router-view></router-view>
  </transition>
</div>
</template>

<script>
// Import jQuery
var jQuery = require('jquery-easing')

// Global variables
window.sliderInterval = null
window.homeIndex = 0

export default {
  name: 'app',
  data() {
    return {
      isInit: false,
      mobileMenuOpen: false
    }
  },
  methods: {
    enter: function(el, done) {

    },
    leave: function(el, done) {
      // Scroll up
      jQuery('#app').animate({
        scrollTop: 0
      }, 600, 'easeOutQuart')
      // Clear home
      jQuery('.main').removeClass('one two three four five')
      // Clear inner page
      jQuery('.main, .page').addClass('leave').removeClass('init')
      jQuery('.services .first h1').attr('style', '')
      jQuery('.contact .weekend img').attr('style', '')
      jQuery('.split').removeClass('active')
      jQuery('.clients .icons div:nth-child(2) .row>div').removeClass('active')
      jQuery('.block, .hand').removeClass('active')
      jQuery('.bulb').removeClass('active')
      // Clear background colors
      var bodyColorTimer = setTimeout(function() {
        jQuery('body').removeClass('b-services b-clients b-contact b-about')
      }, 450)
      // Give delay to exit
      var leaveTimer = setTimeout(function() {
        done()
      }, 1000)
      // Clear home timer
      clearInterval(window.sliderInterval)
      window.sliderInterval = null
    }
  },
  mounted() {
    var main = this

    var mountTimer = setTimeout(function() {
      main.isInit = true
    }, 600)
  }
}
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '990169654329040', {
em: 'insert_email_variable'
});
fbq('track', 'PageView');
</script>
