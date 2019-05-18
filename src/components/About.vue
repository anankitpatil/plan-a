<template>
<div class="page about" v-bind:class="{init: isInit}">
  <div class="container-fluid">
    <div class="row center-xs">
      <div class="col-md-9 col-xs-12 text-center first">
        <h2>We’re not your typical</h2>
        <h1>‘advertising’ agency.</h1>
        <p>We’re not your quintessential media buying house. What we could be is your invested partner, your guide and possibly your brand’s other half. We are digital natives, and it is this familiarity with the digital realm that gives us the clarity to transform your product/service into a</p>
      </div>
    </div>
    <div class="row center-xs bulb">
      <div class="col-md-9 col-xs-12">
        <img src="../img/about-born.png" />
        <span>Brand</span>
        <img src="../img/about-bulb-lower.png" />
      </div>
    </div>
    <div class="row center-xs last">
      <div class="col-md-9 col-xs-12">
        <p>If you’re looking for fresh and impactful solutions,<br />we’re your guys.</p>
      </div>
    </div>
    <div class="row center-xs contact-btn">
      <div class="col-md-9 col-xs-12 text-center">
        <router-link to="/contact" class="next"><span>Connect to Create</span></router-link>
        <span class="line"></span>
      </div>
    </div>
    <div class="scroll-btn">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve">
        <g>
        	<path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/>
        </g>
      </svg>
    </div>
  </div>
</div>
</template>

<script>
var jQuery = require('jquery-easing')

export default {
  name: 'clients',
  data() {
    return {
      isInit: false
    }
  },
  methods: {},
  mounted() {
    var page = this

    var bodyColorTimer = setTimeout(function() {
      jQuery('body').addClass('b-about')
    }, 1200)

    // Split on screen
    jQuery('.bulb, .contact-btn').each(function(i, e) {
      var splitTimer = setTimeout(function() {
        jQuery(e).toggleClass('active', jQuery(e).offset().top < jQuery(window).height() - 120)
      }, 1200 + 300 * i)
    })
    jQuery('#app').scroll(function() {
      var d = jQuery(window).height() - 120
      jQuery('.bulb, .last, .contact-btn').each(function() {
        var top = jQuery(this).offset().top
        jQuery(this).toggleClass('active', top < d)
      })
      jQuery('.contact-btn, .scroll-btn').toggleClass('active', jQuery('#app').scrollTop() + window.innerHeight > jQuery('.page').height() - 90)
    })

    // Scroll button
    jQuery('.scroll-btn').click(function() {
      jQuery('#app').animate({
        scrollTop: 0
      }, 600, 'easeOutQuart')
    })

    var mountTimer = setTimeout(function() {
      page.isInit = true
    }, 1000)

  },
  beforeDestroy() {
    jQuery('#app').unbind('scroll')
  }
}
</script>
