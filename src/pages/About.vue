<template>
    <article class="about active" data-page="about">

        <header>
            <h2 class="h2 article-title">About me</h2>
        </header>

        <section class="about-text">
            <p>
                I'm a student majoring in computer engineering and am good at web developing, web design, and Graphic
                design from Dhaka, Bangladesh working in web development.
                I enjoy
                turning complex problems into simple, beautiful and intuitive designs.
            </p>

            <p>
                My job is to build your website so that it is functional and user-friendly but at the same time
                attractive.
                Moreover, I
                add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to
                bring
                across your
                message and identity in the most creative way.
            </p>
        </section>


        <!--
  - service
-->

        <section class="service">

            <h3 class="h3 service-title">What i'm doing</h3>

            <ul class="service-list">

                <li class="service-item" v-for="item in serviceItem" key="item.id">

                    <div class="service-icon-box">
                        <img :src="item.img" :alt="item.name" width="40">
                    </div>

                    <div class="service-content-box">
                        <h4 class="h4 service-item-title">{{ item.name }}</h4>

                        <p class="service-item-text">
                            {{ item.description }}
                        </p>
                    </div>

                </li>       

            </ul>

        </section>


        <!--
  - Projects
-->

        <section class="testimonials">

            <h3 class="h3 testimonials-title">Projects</h3>

            <ul class="testimonials-list has-scrollbar">

                <li class="testimonials-item" v-for="project in projects" key="project.name">
                    <div class="content-card" data-testimonials-item>

                        <!-- <figure class="testimonials-avatar-box">
          <img src="./assets/images/avatar-1.png" alt="Daniel lewis" width="60" data-testimonials-avatar>
        </figure> -->

                        <a :href="project.link" class="h4 testimonials-item-title"
                            data-testimonials-title><b>{{ project.name }}</b></a>

                        <div class="testimonials-text" data-testimonials-text>
                            <p> {{ project.des }} </p>
                        </div>

                    </div>
                </li>

            </ul>

        </section>


        <!--
  - testimonials modal
-->

        <div class="modal-container" data-modal-container>

            <div class="overlay" data-overlay></div>

            <section class="testimonials-modal">

                <button class="modal-close-btn" data-modal-close-btn>
                    <ion-icon name="close-outline"></ion-icon>
                </button>

                <div class="modal-img-wrapper">
                    <figure class="modal-avatar-box">
                        <img src="./assets/images/avatar-1.png" alt="Daniel lewis" width="80" data-modal-img>
                    </figure>

                    <img src="./assets/images/icon-quote.svg" alt="quote icon">
                </div>

                <div class="modal-content">

                    <h4 class="h3 modal-title" data-modal-title>Daniel lewis</h4>

                    <time datetime="2021-06-14">14 June, 2021</time>

                    <div data-modal-text>
                        <p>
                            Richard was hired to create a corporate identity. We were very pleased with the work done.
                            She has a
                            lot of experience
                            and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous
                            cididt
                            consectetur adipiscing
                            elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                        </p>
                    </div>

                </div>

            </section>

        </div>


        <!--
  - clients
-->

        <!-- <section class="clients">

  <h3 class="h3 clients-title">Clients</h3>

  <ul class="clients-list has-scrollbar">

    <li class="clients-item">
      <a href="#">
        <img src="./assets/images/logo-1-color.png" alt="client logo">
      </a>
    </li>

    <li class="clients-item">
      <a href="#">
        <img src="./assets/images/logo-2-color.png" alt="client logo">
      </a>
    </li>

    <li class="clients-item">
      <a href="#">
        <img src="./assets/images/logo-3-color.png" alt="client logo">
      </a>
    </li>

    <li class="clients-item">
      <a href="#">
        <img src="./assets/images/logo-4-color.png" alt="client logo">
      </a>
    </li>

    <li class="clients-item">
      <a href="#">
        <img src="./assets/images/logo-5-color.png" alt="client logo">
      </a>
    </li>

    <li class="clients-item">
      <a href="#">
        <img src="./assets/images/logo-6-color.png" alt="client logo">
      </a>
    </li>

  </ul>

</section> -->

    </article>
</template>
<script>

import icondesign from "../assets/images/icondesign.svg";
import iconapp from "../assets/images/iconapp.svg";
import icondev from "../assets/images/icondev.svg";
import iconphoto from "../assets/images/iconphoto.svg";



export default {
   name: 'About',
   data() {
      return {
         serviceItem:[
            {
                id: 1,
                name: 'Web design',
                description: 'The most modern and high-quality design made at a professional level.',
                img : icondesign,
            },
            {
                id: 2,
                name: 'Web development',
                description: 'High-quality development of sites at the professional level using PHP, Laravel.',
                img : icondev,
            },
            {
                id: 3,
                name: 'Frontend development',
                description: 'Professional development of applications for Website using ReactJs, Vue3js.',
                img : iconapp,
            },
            {
                id: 4,
                name: 'Photography',
                description: ' I make high-quality photos of any category at a professional level.',
                img : iconphoto,
            },
         ],

         projects: [
            {
                name: 'Rhythm Group BD',
                des: 'I worked in this project as frontend developer.',
                link: 'https://rhythmgroupbd.com/'
            },
            {
                name: '1Point6D',
                des: 'I was a frontend developer of this site.',
                link: '#'
            },
         ]

         
      }
   }

}
</script>
<style></style>