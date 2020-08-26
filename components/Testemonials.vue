<template>
  <!-- testimonial -->
  <div id="testimonials" class="testimonial_section">
    <div class="container-fluid">
      <div class="heading_wrapper wow fadeInDown animated">
        <h2><span>What My </span>Client Says</h2>
        <p class="wow fadeInDown animated">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
        </p>
      </div>
      <!-- end.heading_wrapper-->

      <div class="row">
        <div class="slider-testemonials">
          <client-only>
            <carousel
              :autoplay="true"
              :paginationEnabled="false"
              :loop="true"
              :autoplayTimeout="8000"
              :mouseDrag="false"
              :space-padding="0"
              :perPageCustom="[
                [320, 1],
                [568, 1],
                [768, 2],
                [1024, 2]
              ]"
            >
              <slide
                v-for="item in testemonial"
                :key="item.index"
                class="testimonial_inner_matter"
              >
                <img
                  :src="item.img"
                  :alt="item.alt"
                  class="wow fadeInDown animated"
                />
                <p class="wow fadeInDown animated">{{ item.description }}</p>
                <h5 class="wow fadeInDown animated">{{ item.title }}</h5>
                <h6 class="wow fadeInDown animated">{{ item.subtitle }}</h6>
              </slide>
            </carousel>
          </client-only>
        </div>
      </div>
      <!--end .row-->
    </div>
    <!--end .container-fluid-->
  </div>
  <!-- testimonial end -->
</template>

<script>
let url = "http://localhost:3004/testemonials";
const axios = require("axios");

export default {
  data() {
    return {
      testemonial: []
    };
  },

  mounted() {
    axios.get(url).then(response => {
      this.testemonial = response.data;
      console.log(this.testemonial);
    });
  },

  props: ["itemtestemonial"]
};
</script>
