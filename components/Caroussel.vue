<template>
  <div style="margin:0 auto">
    <div class="slider">
      <client-only>
        <carousel
          :perPage="1"
          :autoplay="true"
          :paginationEnabled="false"
          :loop="true"
          :autoplayTimeout="8000"
          :mouseDrag="false"
          :space-padding="0"
        >
          <slide v-for="itemcaroussel in caroussel" :key="itemcaroussel.index">
            <img :src="itemcaroussel.img" :alt="itemcaroussel.alt" />
          </slide>
        </carousel>
      </client-only>
    </div>
  </div>

  <!-- silder End -->
</template>

<script>
let url = "http://localhost:3004/caroussel";
const axios = require("axios");

export default {
  data() {
    return {
      caroussel: []
    };
  },

  mounted() {
    axios.get(url).then(response => {
      this.caroussel = response.data;
      //console.log(this.caroussel);
    });
  },

  props: ["itemcaroussel"]
};
</script>
