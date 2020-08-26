<template>
  <div>
    <footer id="footer">
      <div class="container-fluid">
        <div class="row wow fadeInUp">
          <img src="logo.png" alt="footer_logo" class="img-responsive" />
          <p>
            Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
            eligendi fuga maxime saepe commodi placeat.
          </p>
          <div class="social-links">
            <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
            <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
            <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
            <a href="#" class="google-plus"><i class="fa fa-skype"></i></a>
            <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
          </div>
          <div class="footer_copyright">
            <p>
              © Copyright 2020 by food. All right Reserved - Design By
              <a href="http://wagneramos.com.br/" target="_blank"
                >Wagner Ramos</a
              >
            </p>
            <p>Developed With<a href="" target="_blank"> Nuxt JS</a></p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Logo: require("@/assets/images/logo.png").default
    };
  }
};
</script>
