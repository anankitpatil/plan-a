<template>
<div class="page case-study qaudio" v-bind:class="{init: isInit}">
  <div class="landing"></div>
  <div class="container-fluid">
    <div class="row center-xs content">
      <div class="col-md-9 col-xs-12">
        <img src="../img/qaudio-text-1.png" class="text-img" />
        <p>Quadio was established in 2009 with an aim to become a provider of affordable high-quality hearing care solutions for all. Founded by two technocrats, the company is headquartered in Pune, Maharashtra, India. Quadio is actively involved in R&amp;D, manufacture and distribution of hearing health care services and devices. Our strength lies in integrating technology into our way of thinking and functioning and coming up with an innovative solution.</p>
      </div>
    </div>
    <div class="row center-xs content">
      <div class="col-md-10 col-xs-12 cross">
        <div class="row">
          <div class="col-md-6 col-xs-12">
            <div>
              <img src="../img/qaudio-text-2.png" class="text-img left" />
              <p>Quadio Technologies was a startup that was struggling to find the right method of marketing its hearing aid technology and making hearing aid impairment a topic that is not considered a taboo anymore. They also had clinics, workshops and other touch points which had to be maximised in its reach and ability to convert patients in to customers of Quadio.</p>
            </div>
          </div>
          <div class="col-md-6 col-xs-12">
            <img src="../img/qaudio-image-3.jpg" class="wide-img" />
          </div>
        </div>
      </div>
    </div>
    <div class="row center-xs content">
      <div class="col-md-9 col-xs-12">
        <img src="../img/qaudio-text-3.png" class="text-img" />
        <img src="../img/qaudio-image-1.jpg" class="text-img" />
        <img src="../img/qaudio-text-4.png" class="text-img" />
        <p>We established a strong brand and marketing strategy that helped position the brand as a reliable provider of hearing aid solutions right from diagnosis to care. The strategy brought together all the services and products of the organisation in to the spotlight; while communicating each offering to a specific targeted audience. Website content was written with keeping search patterns in mind to make the brand more noticeable on Google. Digital marketing channels of Facebook and Twitter were engaged to A. Boost Awareness B. Drive leads towards clinics and products C. Make hearing impairment a topic of conversation in daily lives.</p>
        <div class="large-img">
          <img src="../img/qaudio-image-2.png" />
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
