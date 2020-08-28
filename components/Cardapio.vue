<template>
  <div>
    <div id="menu" class="products_section bg_images">
      <div class="container-fluid">
        <div class="heading_wrapper">
          <h2 data-aos="fade-down">{{ menu.title }}</h2>
          <p>{{ menu.description }}</p>
        </div>

        <div class="row">
          <div id="product">
            <!--1 -->
            <ul>
              <li
                v-for="product in productitem"
                :key="product.index"
                data-aos="zoom-out-up"
              >
                <div class="col-sm-12 col-xs-12">
                  <div class="product-thumb">
                    <div class="image">
                      <a href="#"
                        ><img
                          :src="product.img"
                          :alt="product.alt"
                          title="products Spicy Food"
                          width="100%"
                      /></a>

                      <div class="sale"><span class="">Offer</span></div>
                    </div>
                    <div class="caption">
                      <div class="rate-and-title">
                        <h4>
                          <a href="#">{{ product.title }}</a>
                        </h4>
                        <div class="rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-o"></i>
                          <i class="fa fa-star-o"></i>
                          <i class="fa fa-star-o"></i>
                          <div class="clear"></div>
                        </div>
                        <p class="price">
                          <span class="price-old">${{ product.oldcuts }}</span>
                          <span class="price-new">${{ product.cost }}</span>
                        </p>
                        <button
                          type="button"
                          class="btn"
                          title="Order Now"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- products end -->
      </div>

      <!-- order popup  -->
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="exampleModalCenter">Quick Order</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Name:</label
                  >
                  <input type="text" class="form-control" id="recipient-name" />
                </div>
                <div class="form-group">
                  <label for="recipient-email" class="col-form-label"
                    >E-mail:</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="recipient-email"
                  />
                </div>

                <div class="form-group">
                  <label for="recipient-phone" class="col-form-label"
                    >Phone Number:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-phone"
                  />
                </div>

                <div class="form-group">
                  <label for="message-text" class="col-form-label"
                    >Message:</label
                  >
                  <textarea class="form-control" id="message-text"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- order popup   end-->
    </div>
  </div>

  <!-- silder End -->
</template>

<script>
let urlProdutos = "https://foodie-bed54.firebaseio.com/productitem.json";
const axios = require("axios");

export default {
  data() {
    return {
      menu: {
        title: "our menu",
        description: "Lorem Ipsum is simply dummy text"
      },

      productitem: []
    };
  },

  mounted() {
    axios.get(urlProdutos).then(response => {
      this.productitem = response.data;
      console.log(this.productitem);
    });
  },

  props: ["itemproduto"]
};
</script>
