<template>
  <div>
    <section id="services" class="services">
      <div class="container-fluid">
        <div class="row">
          <!-- start services item -->
          <div
            class="col-lg-3 col-md-6"
            v-for="itemservices in services"
            :key="itemservices.index"
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
          >
            <div class="text-center services_text ">
              <div class="services_icon">
                <img :src="itemservices.img" :alt="itemservices.alt" />
              </div>
              <h3>{{ itemservices.title }}</h3>
              <p>
                {{ itemservices.description }}
              </p>
            </div>
          </div>
          <!-- end services item -->
        </div>
      </div>
    </section>
    <!--  services  end -->
  </div>
  <!-- silder End -->
</template>

<script>
let url = "https://foodie-bed54.firebaseio.com/services.json";
const axios = require("axios");

export default {
  data() {
    return {
      services: []
    };
  },

  mounted() {
    axios.get(url).then(response => {
      this.services = response.data;
      console.log(this.services);
    });
  },

  props: ["itemservices"]
};
</script>
