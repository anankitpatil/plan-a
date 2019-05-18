<template>
<div class="page case-study lebenor" v-bind:class="{init: isInit}">
  <div class="landing"></div>
  <div class="container-fluid">
    <div class="row center-xs content">
      <div class="col-md-9 col-xs-12">
        <img src="../img/lebenor-text-1.png" class="text-img" />
        <p>Lebenor is a home-automation and IoT startup that is the product of two extremely skilled product development professionals. The organisations sole drive is to make Indian homes a space of interaction with technology to make lives easier & better. The brand offers a range of products from automated lighting to HVAC controls at the tap of a button. They pride themselves in having the ability to introduce international standards of automation at affordable rates.</p>
      </div>
    </div>
    <div class="row center-xs content">
      <div class="col-md-10 col-xs-12 cross">
        <div class="row">
          <div class="col-md-6 col-xs-12">
            <div>
              <img src="../img/lebenor-text-2.png" class="text-img left" />
              <p>What can be done when a company with no name comes knocking on your doors? Well..we were put in a spot that really got us excited - We had to think not just out of the box, had to ponder about things around the box itself! That’s exactly what the now named ‘Lebenor’ brought to us. We were asked to conjure up a name, design a logo and website that defines their vision and value-add without giving a perception of the startup being in an upstarted space. We were given strict instructions to have no restrictions! That made things easy, atleast initially!</p>
            </div>
          </div>
          <div class="col-md-6 col-xs-12">
            <img src="../img/lebenor-image-1.png" class="wide-img" />
          </div>
        </div>
      </div>
    </div>
    <div class="row center-xs content">
      <div class="col-md-9 col-xs-12">
        <img src="../img/lebenor-text-3.png" class="text-img" />
        <p>We first put ourselves in the shoes our direct customers. This brought us to conduct a deep rooted research exercise that scanned every nook and corner for a whole plethora of questions we were asking ourselves. This research extended to interviewing the direct target group of users / integrators / architects and anyone even closely related to home design & decor. Reading between the lines brought us to the conclusion that every aspiring Indian wanted a home that is technologically advanced, only if it has the ‘Made Internationally’ tag to it. This insight led us to create a brand name that was memorable, simple & of course ‘Global’ in appeal. Thus was born ‘Lebenor’ - Leiben is Life + Lore is Knowledge - a German hybrid of sorts that is a symbol of technological evolution. The brand logo and website were a natural extension that proved to a great fit with their branding idea of “Evolving Dimensions”.</p>
        <div class="large-img">
          <img src="../img/lebenor-image-2.png" />
        </div>
        <div class="large-img">
          <img src="../img/lebenor-image-3.png" />
        </div>
        <div class="large-img">
          <img src="../img/lebenor-image-4.png" />
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
