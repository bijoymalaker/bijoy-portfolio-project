<template lang="">
    <article class="contact active" data-page="contact">

<header>
  <h2 class="h2 article-title">Contact</h2>
</header>

<section class="mapbox" data-mapbox>
  <figure>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d912.9582491074683!2d90.36082495446237!3d23.753334073320477!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bfa2743002b5%3A0xb15ec2060d7187f5!2z4KaV4Ka-4Kam4Ka_4Kaw4Ka-4Kas4Ka-4KamIOCmueCmvuCmieCmnOCmv-CmgiDgp6ngpqjgpoIg4Kaw4KeL4KahIOCmruCni-CmueCmvuCmruCnjeCmruCmpuCmquCngeCmsCDgpqLgpr7gppXgpr4!5e0!3m2!1sen!2sbd!4v1741464201905!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </figure>
</section>

<section class="contact-form">

  <h3 class="h3 form-title">Contact Form</h3>

  <form action="#" class="form" data-form>

    <div class="input-wrapper">
      <input type="text" name="fullname" class="form-input" placeholder="Full name" required data-form-input>

      <input type="email" name="email" class="form-input" placeholder="Email address" required data-form-input>
    </div>

    <textarea name="message" class="form-input" placeholder="Your Message" required data-form-input></textarea>

    <button class="form-btn" type="submit" disabled data-form-btn>
      <ion-icon name="paper-plane"></ion-icon>
      <span>Send Message</span>
    </button>

  </form>

</section>

</article>
</template>
<script>
export default {

}
</script>
<style>

</style>