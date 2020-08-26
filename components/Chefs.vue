<template>
  <div>
    <!-- chefs  -->
    <section id="chefs" class="chefs bg_images">
      <div class="container-fluid">
        <div class="heading_wrapper">
          <h2 data-aos="zoom-in">{{ sectionchefs.title }}</h2>
          <p>{{ sectionchefs.description }}</p>
        </div>
        <div class="row">
          <div id="chefs_team">
            <div
              class="item"
              v-for="chef in chefs"
              :key="chef.index"
              data-aos="flip-left"
            >
              <div class="col-sm-12 col-xs-3">
                <div class="our-chef wow fadeInLeft">
                  <div class="our-chef_img">
                    <img :src="chef.img" :alt="chef.alt" />
                  </div>
                  <div class="our-chef-text">
                    <h3>{{ chef.title }}</h3>
                    <h4>{{ chef.subtitle }}</h4>
                    <p>
                      {{ chef.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!--  chef1 -->
          </div>
        </div>
      </div>
    </section>

    <!-- chefs End -->
  </div>
  <!-- silder End -->
</template>

<script>
let url = "http://localhost:3004/chefs";
const axios = require("axios");

export default {
  data() {
    return {
      chefs: [],
      sectionchefs: {
        title: "Meet our Chef",
        description: "Lorem Ipsum is simply dummy text"
      }
    };
  },

  mounted() {
    axios.get(url).then(response => {
      this.chefs = response.data;
      console.log(this.chefs);
    });
  },

  props: ["itemchefs"]
};
</script>
