<template>
  <div id="about" class="about_section">
    <div class="container">
      <div class="content">
        <img
          src="/images/introduction.png"
          width="100%"
          alt="silder images"
          title="silder images"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          class="about-img"
        />
      </div>
      <!--end .col-->

      <div class="content">
        <div
          class="about_text"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div class="heading_wrapper">
            <h2>{{ about.title }}</h2>
            <p>{{ about.description }}</p>
          </div>

          <ul>
            <li>
              <i class="fa fa-check"></i> There are many variations of passages
              of Lorem Ipsum available
            </li>
            <li>
              <i class="fa fa-check"></i> the majority have suffered alteration
              in some form
            </li>
            <li>
              <i class="fa fa-check"></i> randomised words which don't look even
              slightly believable.
            </li>
          </ul>

          <h3>Contact Us</h3>
          <h2 class="about_contact">
            <i
              class="fa fa-volume-control-phone wow shake"
              data-wow-iteration="infinite"
            >
            </i>
            <span> {{ about.phone }}</span>
          </h2>
        </div>
        <!--end about_text-->
      </div>
      <!--end .col-->
    </div>
    <!--end .container-->
  </div>
  <!--end #about-->
</template>

<script>
//let urlAbout = "http://localhost:3004/about";
//const axios = require("axios");

export default {
  data() {
    return {
      about: {
        title: "100% Natural Fresh Ingredients",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        phone: "55 011 01015566"
      }
    };
  },

  props: ["item", "title"]
};
</script>
