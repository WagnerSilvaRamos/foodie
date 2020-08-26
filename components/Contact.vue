<template>
  <div>
    <section id="contact" class="contact bg_images">
      <div class="container-fluid">
        <div class="heading_wrapper wow fadeInDown animated">
          <h2 class="wow fadeInDown animated">{{ contact.title }}</h2>
          <p class="wow fadeInDown animated">{{ contact.description }}</p>
        </div>
        <div class="row">
          <div class="col-sm-4 ">
            <div class="info-box wow fadeInLeft">
              <i class="fa fa-map-marker"></i>
              <h3>Our Address</h3>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="info-box wow fadeInUp">
              <i class="fa fa-envelope-o"></i>
              <h3>Email Us</h3>
              <p>contact@example.com</p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="info-box wow fadeInRight">
              <i class="fa fa-volume-control-phone"></i>
              <h3>Call Us</h3>
              <p>+55 9628 254347</p>
            </div>
          </div>
          <div class="clear"></div>
          <div class="col-sm-12">
            <form action="" method="post" role="form" class="php-email-form">
              <div class="form-row">
                <div class="col-sm-6 form-group">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="name"
                    placeholder="Your Name"
                    v-model="formdata.namecontact"
                  />
                </div>
                <div class="col-md-6 form-group">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    v-model="formdata.emailcontact"
                  />
                </div>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  v-model="formdata.subjectcontact"
                />
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  v-model="formdata.messagecontact"
                ></textarea>
              </div>
              <div class="text-center">
                <button class="btn" @click.prevent="checkForm" type="submit">
                  Send Message
                </button>
              </div>
              <div v-if="errors.length" class="custom-error">
                <h3>Please fix the following errors:</h3>
                <ul>
                  <li v-for="error in errors" :key="error.index">
                    {{ error }}
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      contact: {
        title: "Contact Us",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        phone: "55 011 01015566"
      },

      errors: [],

      formdata: {
        namecontact: "",
        emailcontact: "",
        subjectcontact: "",
        messagecontact: ""
      }
    };
  },
  methods: {
    checkForm(e) {
      this.errors = [];

      if (!this.formdata.namecontact) {
        this.errors.push("Name is Required.");
      }

      if (!this.formdata.emailcontact) {
        this.errors.push("E-mail is Required.");
      } else if (!this.validEmail(this.formdata.emailcontact)) {
        this.errors.push("please use a valid email.");
      }

      if (!this.errors.length) {
        return true;
      }

      console.log(this.formdata);
      console.log(JSON.stringify(this.formdata));

      e.preventDefault();
    },
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  },
  props: ["item", "title"]
};
</script>
