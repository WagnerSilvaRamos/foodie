<template>
  <div>
    <section id="book_table" class="book_table">
      <div class="container-fluid">
        <div class="heading_wrapper wow fadeInDown animated">
          <h2 class="wow fadeInDown animated"><span> Book a </span>table</h2>
          <h4 class="sub-title">
            Monday-Friday: <span class="text-primary">09AM - 11PM</span>&nbsp; |
            &nbsp;Saturday-Sunday: <span class="text-primary">10AM - 12PM</span>
          </h4>
        </div>

        <div class="row">
          <div class="col-sm-6">
            <div class="book_table_images">
              <img class="example-image" src="reservations.jpg" />
            </div>
          </div>

          <div class="col-sm-6">
            <form id="app" method="post" novalidate="true">
              <div class="row">
                <div class="col-sm-6 reservation-left-area">
                  <div class="form-group">
                    <label>Date and Time</label>
                    <input
                      type="text"
                      class="form-control"
                      id="datetimepicker1"
                    />
                  </div>
                  <!-- / form-group -->
                  <div class="form-group">
                    <label>Table</label>
                    <select
                      class="selectpicker form-control"
                      id="tables"
                      v-model="formdata.tablebook"
                    >
                      <optgroup label="TABLE:">
                        <option>single table</option>
                        <option>table</option>
                        <option>table2</option>
                        <option>standard</option>
                        <option>premium</option>
                      </optgroup>
                    </select>
                  </div>
                  <!-- / form-group -->
                  <div class="form-group">
                    <label>Party</label>
                    <select
                      class="selectpicker form-control"
                      id="party"
                      v-model="formdata.partybook"
                    >
                      <optgroup label="PARTY:">
                        <option>party</option>
                        <option>single</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                      </optgroup>
                    </select>
                  </div>
                  <!-- / form-group -->
                </div>
                <div class="col-sm-6 reservation-right-area">
                  <div class="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="rname"
                      v-model="formdata.namebook"
                    />
                  </div>
                  <!-- / form-group -->
                  <div class="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="remail"
                      v-model="formdata.emailbook"
                    />
                  </div>
                  <!-- / form-group -->
                  <div class="form-group">
                    <label>Phone</label>
                    <input
                      type="text"
                      class="form-control"
                      id="rphone"
                      v-model="formdata.phonebook"
                    />
                  </div>
                  <!-- / form-group -->
                </div>
                <!-- textarea and button -->
                <div class="col-sm-12 textarea-button">
                  <div class="form-group">
                    <label>Message</label>
                    <textarea
                      id="message"
                      class="form-control"
                      rows="5"
                      v-model="formdata.messagebook"
                    ></textarea>
                  </div>
                  <!-- / form-group -->
                  <div class="text-center">
                    <button
                      @click.prevent="checkForm"
                      type="submit"
                      class="btn first"
                    >
                      <i class="fa fa-calendar"></i> <span>Book a table</span>
                    </button>
                    <div class="clear"></div>
                  </div>
                  <!-- / text-center -->
                </div>
                <!-- / textarea and button -->
              </div>

              <div v-if="errors.length" class="custom-error">
                <h3>Please fix the following errors:</h3>
                <ul>
                  <li v-for="error in errors" :key="error.index">
                    {{ error }}
                  </li>
                </ul>
              </div>

              <h1>{{ formdata.mesasgeschedule }}</h1>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- book_table end-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      errors: [],

      formdata: {
        namebook: "",
        emailbook: "",
        partybook: "",
        tablebook: "",
        phonebook: "",
        messagebook: "",
        mesasgeschedule: ""
      }
    };
  },
  methods: {
    checkForm(e) {
      this.errors = [];

      if (!this.formdata.namebook) {
        this.errors.push("Name is Required.");
      }
      if (!this.formdata.partybook) {
        this.errors.push("Party is Required");
      }

      if (!this.formdata.tablebook) {
        this.errors.push("Table is Required");
      }

      if (!this.formdata.emailbook) {
        this.errors.push("E-mail is Required.");
      } else if (!this.validEmail(this.formdata.emailbook)) {
        this.errors.push("please use a valid email.");
      }

      if (!this.errors.length) {
        return true;
      }

      if (!this.checkForm.validity) {
        this.mesasgeschedule = "Enviado";
      }

      console.log(this.formdata);
      console.log(JSON.stringify(this.formdata));

      e.preventDefault();
    },
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
};
</script>
