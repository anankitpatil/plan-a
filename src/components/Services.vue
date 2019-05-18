<template>
<div class="page services" v-bind:class="{init: isInit}">
  <div class="container-fluid">
    <div class="row center-xs">
      <div class="col-md-9 col-xs-12 text-center first">
        <span>360</span>
        <h1>SOLUTIONS</h1>
        <p>We’re making exploration easy through our focused digital only approach designed to elevate your brand from the clutter.</p>
      </div>
    </div>
    <div class="row center-xs split">
      <div class="col-md-9 col-xs-12">
        <div class="row middle-xs">
          <div class="col-sm-4 col-xs-12">
            <img src="../img/services-strategy.png" />
          </div>
          <div class="col-sm-8 col-xs-12 text-left">
            <h2>Strategy</h2>
            <p>Research-driven strategy that leads to result-driven solutions. We are in constant competition with ourselves to get you more bang for your buck.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row center-xs split">
      <div class="col-md-9 col-xs-12">
        <div class="row middle-xs">
          <div class="col-sm-8 col-xs-12 text-left">
            <h2>Social Media Marketing</h2>
            <p>We deliver content that matters to the consumers and boost engagement metrics that matter for your brand. We specialize in sparking honest, engaging dialogues online.</p>
          </div>
          <div class="col-sm-4 col-xs-12">
            <img src="../img/services-social.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="row center-xs split">
      <div class="col-md-9 col-xs-12">
        <div class="row middle-xs">
          <div class="col-sm-4 col-xs-12">
            <img src="../img/services-branding.png" />
          </div>
          <div class="col-sm-8 col-xs-12 text-left">
            <h2>Branding</h2>
            <p>We believe branding should be like coffee – strong, hot and addictive. Our strategy-driven branding process makes sure your brand meets all 3 requirements.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row center-xs split">
      <div class="col-md-9 col-xs-12">
        <div class="row middle-xs">
          <div class="col-sm-8 col-xs-12 text-left">
            <h2>Content Creation</h2>
            <p>We believe in crafting content that bridges the gap between you and your audience, transforming potential buyers into enthusiastic customers. For us, powerful punchlines and creative memes are a means to get there, not an end by themselves.</p>
          </div>
          <div class="col-sm-4 col-xs-12">
            <img src="../img/services-content.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="row center-xs split">
      <div class="col-md-9 col-xs-12">
        <div class="row middle-xs">
          <div class="col-sm-4 col-xs-12">
            <img src="../img/services-website.png" />
          </div>
          <div class="col-sm-8 col-xs-12 text-left">
            <h2>Website Development</h2>
            <p>We make your website look like a ballerina but work like a horse. We focus on developing interfaces that delight, backed by solid developing skills.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row center-xs split">
      <div class="col-md-9 col-xs-12">
        <div class="row middle-xs">
          <div class="col-sm-8 col-xs-12 text-left">
            <h2>Search Engine Optimisation</h2>
            <p>Get on the digital podium with straight up tangible results. Maximise your brand visibility on the most visited site - Google.</p>
          </div>
          <div class="col-sm-4 col-xs-12">
            <img src="../img/services-search.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="row center-xs split">
      <div class="col-md-9 col-xs-12">
        <div class="row middle-xs">
          <div class="col-sm-4 col-xs-12">
            <img src="../img/services-digital.png" />
          </div>
          <div class="col-sm-8 col-xs-12 text-left">
            <h2>Digital Marketing</h2>
            <p> There are 3 magic words in digital marketing – target, remarket and sell - and we know how to get the best out of all three.</p>
          </div>
        </div>
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

var solutionsInterval

export default {
  name: 'services',
  data() {
    return {
      isInit: false
    }
  },
  methods: {},
  mounted() {
    var page = this

    var bodyColorTimer = setTimeout(function() {
      jQuery('body').addClass('b-services')
    }, 1200)

    // Animate 360
    solutionsInterval = setInterval(function() {
      jQuery('.services .first h1').css({
        'opacity': 0,
        'transform': 'rotate(60deg) translateZ(0)'
      })
      jQuery('.services .first span').css({
        'color': 'rgba(234, 255, 0, 0)'
      })
      jQuery('.services .first span').removeClass('transit').addClass('rotate')
      var rotationTimer = setTimeout(function() {
        jQuery('.services .first span').addClass('transit').removeClass('rotate')
      }, 3000)
      var solutionsTimer_ = setTimeout(function() {
        jQuery('.services .first h1').css({
          'transform': 'rotate(-60deg) translateZ(0)',
          'transition': 'none'
        })
        if (jQuery('.services .first h1').html() == 'SOLUTIONS') {
          jQuery('.services .first span').html('0').addClass('zero')
          jQuery('.services .first h1').html('BULL****&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')
        } else {
          jQuery('.services .first span').html('360').removeClass('zero')
          jQuery('.services .first h1').html('SOLUTIONS')
        }
        var solutionsTimer_ = setTimeout(function() {
          jQuery('.services .first h1').css({
            'transition': '',
            'opacity': 1,
            'transform': 'rotate(0deg) translateZ(0)'
          })
          jQuery('.services .first span').css({
            'color': 'rgba(234, 255, 0, 1)'
          })
        }, 150)
      }, 1500)
    }, 6000)

    // Split on screen
    jQuery('.split').each(function(i, e) {
      var splitTimer = setTimeout(function() {
        jQuery(e).toggleClass('active', jQuery(e).offset().top < jQuery(window).height() - 120)
      }, 1200 + 300 * i)
    })
    jQuery('#app').scroll(function() {
      var d = jQuery(window).height() - 120
      jQuery('.split, .last').each(function() {
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
    clearInterval(solutionsInterval)
  }
}
</script>
