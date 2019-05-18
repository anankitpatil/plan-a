<template>
<div class="page case-study ruggedian" v-bind:class="{init: isInit}">
  <div class="landing"></div>
  <div class="container-fluid">
    <div class="row center-xs content">
      <div class="col-md-9 col-xs-12">
        <div class="row">
          <div class="col-md-6">
            <img src="../img/ruggedian-text-1.png" class="text-img" />
          </div>
          <div class="col-md-6">
            <p>Ruggedians are a group of adrenaline and fitness junkies hailing from the city of Kolhapur. The founder, Akash Korgaonkar is a Ironman Finisher came back with the desire to bring the same experience in India. Thus was born Ruggedian (Rugged + Indian) - India’s toughest and longest obstalce race. After an encouraging start in Kolhapur, they wanted to bring the race to the people in Pune. They found a harmonious relationship with Radio Mirchi and plan-a.</p>
          </div>
        </div>
        <div class="large-img">
          <img src="../img/ruggedian-image-1.jpg" />
        </div>
        <img src="../img/ruggedian-text-2.png" class="text-img" />
        <p>The aim was simple to generate massive buzz in Pune and Rest Of Maharashtra about the obstalce race and start a movement of encouraging participation in activities that push the limits of physical & mental resilience.  Another challenge was that they wanted to tap in to the market of Mumbai as well withouth having to using mainstream media.  To achieve this, Radio Mirchi & Mirchi Activations collaborated with us to deliver on their objectives and help kickstart the Ruggedian revolution.</p>
        <div class="large-img">
          <img src="../img/ruggedian-image-2.jpg" />
        </div>
        <div class="row">
          <div class="col-md-6">
            <img src="../img/ruggedian-text-3.png" class="text-img" />
          </div>
          <div class="col-md-6">
            <p>Digital marketing was always going to be the go to springboard to accomplish 2 things<br />&nbsp;<br />
              A) Create buzz about the event in a short span of time amongst the fitness community and attract a general audience<br />&nbsp;<br />
              B) Establish Ruggedian in the minds of an active audience in Mumbai without actually “going there”</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row center-xs content">
      <div class="col-md-10 col-xs-12 cross">
        <div class="row">
          <div class="col-md-6 col-xs-12">
            <div>
              <p>Health & Fitness, Racing, Running all have a common sentiment flowing through it - A sense of competition & accomplishment. We capitalised on this sentiment and also looked to establish a good recall with our audience about the Intellectual Property itself.<br />&nbsp;<br />
                This level of excitement and competition was achieved through the Hashtag and Call To Action of #GetRugged. Our content strategy involved sharing stories of winners from Track & Field, creating contests that took this same message forward in the form of emojis and even spoke about the various activities at the event in fun ways to get the dormant audience excited.</p>
            </div>
          </div>
          <div class="col-md-6 col-xs-12">
            <img src="../img/ruggedian-image-3.jpg" class="wide-img" />
          </div>
        </div>
      </div>
    </div>
    <div class="row center-xs content">
      <div class="col-md-9 col-xs-12">
        <p>Social media posts were designed with  a rugged look and feel, images were used from the events in Kolhapur to give our targeted audience a sneak peak of the experience that awaited them.</p>
        <img src="../img/ruggedian-text-4.png" class="text-img" />
        <p>In a span of 45 Days we were successful in reaching out to 4 Lakh people across Pune, Mumbai and larger cities in Maharashtra with a total of around 15,000 Wesbite visits. We invoked the desire to compete amongst every persona identified from families to college graudates!<br />&nbsp;</br>
          This was achieved through smart ways of optimising ads across Facebook, Instagram & Google PPC / Display campaigns. The event managed to garner nearly 2.5 Lakh impressions on Social Media channels of Facebook | Twitter | Instagram. This buzz resulted in generating ticket sales through online channels of over 1000 participants across all ages and personalities!</p>
        <img src="../img/ruggedian-text-5.png" class="text-img" />
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
