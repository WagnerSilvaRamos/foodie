<template>
  <div>
    <div class="preloader">
      <div class="status pulse">&nbsp;</div>
    </div>
    <!--end .preloader-->

    <header class="header-area top-content">
      <!-- Start Navbar Area -->
      <div class="navbar-area">
        <div class="food-responsive-nav">
          <div class="container-fluid">
            <div class="row">
              <div class="food-responsive-menu">
                <div class="logo">
                  <a href="#">
                    <Logo />
                  </a>
                </div>
                <!--mobile Menu  -->
                <SideNav />
                <span class="menu_open" onclick="openNav()">&#9776; Menu</span>
                <!-- mobile Menu  end-->
              </div>
            </div>
          </div>
        </div>

        <div class="food-nav">
          <div class="container-fluid">
            <div class="row">
              <div class="header_menu_wrapper">
                <nav class="navbar navbar-expand-md navbar-light">
                  <a class="navbar-brand" href="#">
                    <img src="/images/logo.png" class="lg-tablet" />
                    <img src="/logo-dark.png" alt="Logo" class="logodark" />
                  </a>

                  <div
                    class="collapse navbar-collapse mean-menu"
                    style="display: block;"
                  >
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <a href="#" class="nav-link">Home</a>
                      </li>

                      <li class="nav-item">
                        <a href="#about" class="nav-link">About Us</a>
                      </li>

                      <li class="nav-item">
                        <a href="#menu" class="nav-link">Menu</a>
                      </li>

                      <li class="nav-item">
                        <a href="#chefs" class="nav-link">Chefs</a>
                      </li>

                      <li class="nav-item">
                        <a href="#gallery" class="nav-link">Gallery</a>
                      </li>

                      <li class="nav-item">
                        <a href="#testimonials" class="nav-link"
                          >Testimonials</a
                        >
                      </li>

                      <li class="nav-item">
                        <a href="#contact" class="nav-link">Contact</a>
                      </li>
                    </ul>

                    <div class="others-option align-items-center">
                      <div class="option-item">
                        <a href="#book_table" class="btn">Book a table</a>
                      </div>
                    </div>
                  </div>
                </nav>
                <div class="clear"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Navbar Area -->
    </header>
    <!-- Header End -->
    <Caroussel :itemcaroussel="caroussel" />
    <About />
    <Features :item="features" />
    <Cardapio :itemproduto="cardapio" />
    <Services :itemservices="services" />
    <Chefs :itemchef="chefs" />
    <Gallery :itemgallery="galleryitem" />
    <Booktable />
    <Testemonials :itemtestemonial="testemonial" />
    <Contact />
    <Footer />

    <div class="top_button">
      <a class="back-to-top" style="cursor:pointer;" id="top-scrolltop"
        ><i class="fa fa-angle-up"></i
      ></a>
    </div>
  </div>
</template>

<script>
import Logo from "../components/Logo.vue";
import SideNav from "../components/SideNav.vue";
import Caroussel from "../components/Caroussel.vue";
import About from "../components/About.vue";
import Features from "../components/Features.vue";
import Cardapio from "../components/Cardapio.vue";
import Services from "../components/Services.vue";
import Chefs from "../components/Chefs.vue";
import Gallery from "../components/Gallery.vue";
import Booktable from "../components/Booktable.vue";
import Testemonials from "../components/Testemonials.vue";
import Contact from "../components/Contact";
import Footer from "../components/Footer.vue";

export default {
  data() {
    return {
      items: [],
      about: [],
      item: "",
      caroussel: "",
      features: "",
      cardapio: "",
      services: "",
      chefs: "",
      galleryitem: "",
      testemonial: []
    };
  },

  components: {
    Logo,
    SideNav,
    Caroussel,
    About,
    Features,
    Cardapio,
    Services,
    Chefs,
    Gallery,
    Booktable,
    Testemonials,
    Contact,
    Footer
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
