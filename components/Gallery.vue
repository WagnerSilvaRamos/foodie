<template>
  <section id="gallery" class="gallery clearfix">
    <div class="container-fluid">
      <div class="heading_wrapper">
        <h2 data-aos="zoom-in">{{ sectiongallery.title }}</h2>
        <p>{{ sectiongallery.description }}</p>
      </div>
      <div class="row">
        <div
          class="col-sm-4"
          v-for="item in galleryitem"
          :key="item.index"
          data-aos="fade-down"
        >
          <a
            :href="item.img"
            class="example-image-link"
            data-lightbox="example-set"
            data-title="Click the right half of the image to move forward."
          >
            <figure>
              <img class="example-image" :src="item.img" :alt="item.alt" />
              <figcaption>
                <h2>{{ item.title }}</h2>
                <p>{{ item.description }}</p>
                <button>View Image</button>
              </figcaption>
            </figure>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- gallery end -->
</template>

<script>
let url = "https://foodie-bed54.firebaseio.com/galleryitem.json";
const axios = require("axios");

export default {
  data() {
    return {
      galleryitem: [],

      sectiongallery: {
        title: "Our Gallery",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
      }
    };
  },

  mounted() {
    axios.get(url).then(response => {
      this.galleryitem = response.data;
      console.log(this.galleryitem);
    });
  },

  props: ["itemgallery"]
};
</script>
