<template>
<div class="page case-study ubob" v-bind:class="{init: isInit}">
  <div class="landing"></div>
  <div class="container-fluid">
    <div class="row center-xs content">
      <div class="col-md-9 col-xs-12">
        <img src="../img/ubob-text-1.png" class="text-img" />
        <p>Vodafone (Maharashtra) wanted to launch their new service offering targeted towards the youth - Young professionals, college and school kids called ‘Vodafone U’. Our affair with Radio Mirchi continued and resulted in the fortunate and planned birth of Vodafone U - Battle of the Bands a.k.a UBOB - Maharashtra’s first and largest college band competition.</p>
        <img src="../img/ubob-text-2.png" class="text-img" />
        <p>Vodafone and Radio Mirchi are already massive power houses and have a large following amongst the youth. But, grabbing the attention of the young and energetic minds is always a challenge especially on digital mediums. We created social media accounts on Facebook / Instagram / Twitter We wanted to reach out to a maximum amount of our audience across various towns and succesfully did so! Here’s how it all unfurled.</p>
        <div class="large-img">
          <img src="../img/ubob-image-1.jpg" />
        </div>
      </div>
    </div>
    <div class="row center-xs content">
      <div class="col-md-9 col-xs-12">
        <router-link to="/clients" class="more"><span>More Case Studies &rarr;</span></router-link>
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

var percentInterval

export default {
  name: 'case-study',
  data() {
    return {
      isInit: false
    }
  },
  methods: {},
  mounted() {
    var page = this

    var bodyColorTimer = setTimeout(function() {
      jQuery('body').addClass('b-clients')
    }, 1200)

    // Split on screen
    jQuery('.content .large-img, .content .text-img, .content .wide-img, .content p').each(function(i, e) {
      var splitTimer = setTimeout(function() {
        jQuery(e).toggleClass('active', jQuery(e).offset().top < jQuery(window).height() - 120)
      }, 1200 + 300 * i)
    })
    jQuery('#app').scroll(function() {
      var d = jQuery(window).height() - 120
      jQuery('.content .large-img, .content .text-img, .content .wide-img, .content p, .last').each(function() {
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
    clearInterval(percentInterval)
  }
}
</script>
