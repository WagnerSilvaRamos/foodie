<template>
  <section id="why_choose" class="why_choose">
    <div class="container-fluid">
      <div class="heading_wrapper wow fadeInDown animated">
        <h2 class="wow fadeInDown animated">{{ featureHeader.title }}</h2>
        <p class="wow fadeInDown animated">{{ featureHeader.description }}</p>
      </div>

      <div class="row">
        <div
          class="col-lg-3 col-md-6 col-sm-4 col-xs-12"
          v-for="item in features"
          :key="item.numberitem"
        >
          <div class="why_choose_sign_box wow fadeInDown animated">
            <div class="sign_box_cont">
              <span class="cont_number"> {{ item.numberitem }}</span>
              <h4>{{ item.subtitle }}</h4>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
let urlFeatures = "http://localhost:3004/features";
const axios = require("axios");

export default {
  data() {
    return {
      features: [],

      featureHeader: {
        title: "Why choose Our Restaurant",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      }
    };
  },

  mounted() {
    axios.get(urlFeatures).then(response => {
      this.features = response.data;
    });
  },

  props: ["item"]
};
</script>
