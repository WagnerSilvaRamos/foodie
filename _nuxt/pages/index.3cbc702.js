(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{209:function(t,e,o){},210:function(t,e,o){t.exports=o.p+"img/logo.d1d3d3c.png"},211:function(t,e,o){"use strict";var r=o(209);o.n(r).a},212:function(t,e,o){"use strict";o.r(e);var r={data:function(){return{Logotipo:o(210).default}}},n=o(41),l=Object(n.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"logodark",attrs:{src:"/logo-dark.png",alt:"Logo"}})])}],!1,null,null,null).exports,c=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sidenav",attrs:{id:"mySidenav"}},[o("div",{staticClass:"menu_slid_bg"},[o("a",{staticClass:"closebtn",attrs:{href:"javascript:void(0)",onclick:"closeNav()"}},[t._v("×")]),t._v(" "),o("div",{staticClass:"col-sm-12",staticStyle:{padding:"0"}},[o("h3",[t._v("Categories")]),t._v(" "),o("ul",{staticClass:"accordion",attrs:{id:"accordion-category"}},[o("li",{staticClass:"panel mobile_menu_li"},[o("a",{attrs:{href:"#"}},[t._v(" Home")])]),t._v(" "),o("li",{staticClass:"panel mobile_menu_li"},[o("a",{attrs:{href:"#about"}},[t._v(" about us")])]),t._v(" "),o("li",{staticClass:"panel mobile_menu_li"},[o("a",{attrs:{href:"#menu"}},[t._v(" menu")])]),t._v(" "),o("li",{staticClass:"panel mobile_menu_li"},[o("a",{attrs:{href:"#chefs"}},[t._v(" chefs")])]),t._v(" "),o("li",{staticClass:"panel mobile_menu_li"},[o("a",{attrs:{href:"#gallery"}},[t._v(" gallery")])]),t._v(" "),o("li",{staticClass:"panel mobile_menu_li"},[o("a",{attrs:{href:"#book_table"}},[t._v(" Book a Table")])]),t._v(" "),o("li",{staticClass:"panel mobile_menu_li"},[o("a",{attrs:{href:"#testimonials"}},[t._v(" testimonials")])]),t._v(" "),o("li",{staticClass:"panel mobile_menu_li"},[o("a",{attrs:{href:"#contact"}},[t._v(" contact")])])]),t._v(" "),o("div",{staticClass:"clear"})])])])}],!1,null,null,null).exports,m=o(47),d={data:function(){return{caroussel:[]}},mounted:function(){var t=this;m.get("https://foodie-bed54.firebaseio.com/caroussel.json").then((function(e){t.caroussel=e.data}))},props:["itemcaroussel"]},v=Object(n.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{margin:"0 auto"}},[e("div",{staticClass:"slider"},[e("client-only",[e("carousel",{attrs:{perPage:1,autoplay:!0,paginationEnabled:!1,loop:!0,autoplayTimeout:8e3,mouseDrag:!1,"space-padding":0}},this._l(this.caroussel,(function(t){return e("slide",{key:t.index},[e("img",{attrs:{src:t.img,alt:t.alt}})])})),1)],1)],1)])}),[],!1,null,null,null).exports,_={data:function(){return{about:{title:"100% Natural Fresh Ingredients",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",phone:"55 011 01015566"}}},props:["item","title"]},f=Object(n.a)(_,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"about_section",attrs:{id:"about"}},[o("div",{staticClass:"container"},[t._m(0),t._v(" "),o("div",{staticClass:"content"},[o("div",{staticClass:"about_text",attrs:{"data-aos":"fade-left","data-aos-offset":"300","data-aos-easing":"ease-in-sine"}},[o("div",{staticClass:"heading_wrapper"},[o("h2",[t._v(t._s(t.about.title))]),t._v(" "),o("p",[t._v(t._s(t.about.description))])]),t._v(" "),t._m(1),t._v(" "),o("h3",[t._v("Contact Us")]),t._v(" "),o("h2",{staticClass:"about_contact"},[o("i",{staticClass:"fa fa-volume-control-phone wow shake",attrs:{"data-wow-iteration":"infinite"}}),t._v(" "),o("span",[t._v(" "+t._s(t.about.phone))])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("img",{staticClass:"about-img",attrs:{src:"/images/introduction.png",width:"100%",alt:"silder images",title:"silder images","data-aos":"fade-right","data-aos-offset":"300","data-aos-easing":"ease-in-sine"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("i",{staticClass:"fa fa-check"}),this._v(" There are many variations of passages\n            of Lorem Ipsum available\n          ")]),this._v(" "),e("li",[e("i",{staticClass:"fa fa-check"}),this._v(" the majority have suffered alteration\n            in some form\n          ")]),this._v(" "),e("li",[e("i",{staticClass:"fa fa-check"}),this._v(" randomised words which don't look even\n            slightly believable.\n          ")])])}],!1,null,null,null).exports,h=o(47),C={data:function(){return{features:[],featureHeader:{title:"Why choose Our Restaurant",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry."}}},mounted:function(){var t=this;h.get("https://foodie-bed54.firebaseio.com//features.json").then((function(e){t.features=e.data}))},props:["item"]},y=Object(n.a)(C,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"why_choose",attrs:{id:"why_choose"}},[o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"heading_wrapper"},[o("h2",[t._v(t._s(t.featureHeader.title))]),t._v(" "),o("p",[t._v(t._s(t.featureHeader.description))])]),t._v(" "),o("div",{staticClass:"row"},t._l(t.features,(function(e){return o("div",{key:e.numberitem,staticClass:"col-lg-3 col-md-6 col-sm-4 col-xs-12"},[o("div",{staticClass:"why_choose_sign_box"},[o("div",{staticClass:"sign_box_cont"},[o("span",{staticClass:"cont_number"},[t._v(" "+t._s(e.numberitem))]),t._v(" "),o("h4",[t._v(t._s(e.subtitle))]),t._v(" "),o("p",[t._v(t._s(e.description))])])])])})),0)])])}),[],!1,null,null,null).exports,k=o(47),w={data:function(){return{menu:{title:"our menu",description:"Lorem Ipsum is simply dummy text"},productitem:[]}},mounted:function(){var t=this;k.get("https://foodie-bed54.firebaseio.com/productitem.json").then((function(e){t.productitem=e.data,console.log(t.productitem)}))},props:["itemproduto"]},x=Object(n.a)(w,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"products_section bg_images",attrs:{id:"menu"}},[o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"heading_wrapper"},[o("h2",{attrs:{"data-aos":"fade-down"}},[t._v(t._s(t.menu.title))]),t._v(" "),o("p",[t._v(t._s(t.menu.description))])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{attrs:{id:"product"}},[o("ul",t._l(t.productitem,(function(e){return o("li",{key:e.index,attrs:{"data-aos":"zoom-out-up"}},[o("div",{staticClass:"col-sm-12 col-xs-12"},[o("div",{staticClass:"product-thumb"},[o("div",{staticClass:"image"},[o("a",{attrs:{href:"#"}},[o("img",{attrs:{src:e.img,alt:e.alt,title:"products Spicy Food",width:"100%"}})]),t._v(" "),t._m(0,!0)]),t._v(" "),o("div",{staticClass:"caption"},[o("div",{staticClass:"rate-and-title"},[o("h4",[o("a",{attrs:{href:"#"}},[t._v(t._s(e.title))])]),t._v(" "),t._m(1,!0),t._v(" "),o("p",{staticClass:"price"},[o("span",{staticClass:"price-old"},[t._v("$"+t._s(e.oldcuts))]),t._v(" "),o("span",{staticClass:"price-new"},[t._v("$"+t._s(e.cost))])]),t._v(" "),o("button",{staticClass:"btn",attrs:{type:"button",title:"Order Now","data-toggle":"modal","data-target":"#exampleModalCenter"}},[t._v("\n                        Order Now\n                      ")])])])])])])})),0)])])]),t._v(" "),t._m(2)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sale"},[e("span",{},[this._v("Offer")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rating"},[e("i",{staticClass:"fa fa-star"}),this._v(" "),e("i",{staticClass:"fa fa-star"}),this._v(" "),e("i",{staticClass:"fa fa-star-o"}),this._v(" "),e("i",{staticClass:"fa fa-star-o"}),this._v(" "),e("i",{staticClass:"fa fa-star-o"}),this._v(" "),e("div",{staticClass:"clear"})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal fade",attrs:{id:"exampleModalCenter",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[o("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[o("div",{staticClass:"modal-content"},[o("div",{staticClass:"modal-header"},[o("h4",{staticClass:"modal-title",attrs:{id:"exampleModalCenter"}},[t._v("Quick Order")]),t._v(" "),o("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),o("div",{staticClass:"modal-body"},[o("form",[o("div",{staticClass:"form-group"},[o("label",{staticClass:"col-form-label",attrs:{for:"recipient-name"}},[t._v("Name:")]),t._v(" "),o("input",{staticClass:"form-control",attrs:{type:"text",id:"recipient-name"}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{staticClass:"col-form-label",attrs:{for:"recipient-email"}},[t._v("E-mail:")]),t._v(" "),o("input",{staticClass:"form-control",attrs:{type:"email",id:"recipient-email"}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{staticClass:"col-form-label",attrs:{for:"recipient-phone"}},[t._v("Phone Number:")]),t._v(" "),o("input",{staticClass:"form-control",attrs:{type:"text",id:"recipient-phone"}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{staticClass:"col-form-label",attrs:{for:"message-text"}},[t._v("Message:")]),t._v(" "),o("textarea",{staticClass:"form-control",attrs:{id:"message-text"}})])])]),t._v(" "),o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("\n              Close\n            ")]),t._v(" "),o("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("\n              Send message\n            ")])])])])])}],!1,null,null,null).exports,E=o(47),$={data:function(){return{services:[]}},mounted:function(){var t=this;E.get("https://foodie-bed54.firebaseio.com/services.json").then((function(e){t.services=e.data,console.log(t.services)}))},props:["itemservices"]},I=Object(n.a)($,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("section",{staticClass:"services",attrs:{id:"services"}},[o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"row"},t._l(t.services,(function(e){return o("div",{key:e.index,staticClass:"col-lg-3 col-md-6",attrs:{"data-aos":"fade-up","data-aos-anchor-placement":"center-center"}},[o("div",{staticClass:"text-center services_text "},[o("div",{staticClass:"services_icon"},[o("img",{attrs:{src:e.img,alt:e.alt}})]),t._v(" "),o("h3",[t._v(t._s(e.title))]),t._v(" "),o("p",[t._v("\n              "+t._s(e.description)+"\n            ")])])])})),0)])])])}),[],!1,null,null,null).exports,j=o(47),L={data:function(){return{chefs:[],sectionchefs:{title:"Meet our Chef",description:"Lorem Ipsum is simply dummy text"}}},mounted:function(){var t=this;j.get("https://foodie-bed54.firebaseio.com/chefs.json").then((function(e){t.chefs=e.data,console.log(t.chefs)}))},props:["itemchefs"]},N=Object(n.a)(L,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("section",{staticClass:"chefs bg_images",attrs:{id:"chefs"}},[o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"heading_wrapper"},[o("h2",{attrs:{"data-aos":"zoom-in"}},[t._v(t._s(t.sectionchefs.title))]),t._v(" "),o("p",[t._v(t._s(t.sectionchefs.description))])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{attrs:{id:"chefs_team"}},t._l(t.chefs,(function(e){return o("div",{key:e.index,staticClass:"item",attrs:{"data-aos":"flip-left"}},[o("div",{staticClass:"col-sm-12 col-xs-3"},[o("div",{staticClass:"our-chef"},[o("div",{staticClass:"our-chef_img"},[o("img",{attrs:{src:e.img,alt:e.alt}})]),t._v(" "),o("div",{staticClass:"our-chef-text"},[o("h3",[t._v(t._s(e.title))]),t._v(" "),o("h4",[t._v(t._s(e.subtitle))]),t._v(" "),o("p",[t._v("\n                    "+t._s(e.description)+"\n                  ")])])])])])})),0)])])])])}),[],!1,null,null,null).exports,O=o(47),P={data:function(){return{galleryitem:[],sectiongallery:{title:"Our Gallery",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"}}},mounted:function(){var t=this;O.get("https://foodie-bed54.firebaseio.com/galleryitem.json").then((function(e){t.galleryitem=e.data,console.log(t.galleryitem)}))},props:["itemgallery"]},S=Object(n.a)(P,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"gallery clearfix",attrs:{id:"gallery"}},[o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"heading_wrapper"},[o("h2",{attrs:{"data-aos":"zoom-in"}},[t._v(t._s(t.sectiongallery.title))]),t._v(" "),o("p",[t._v(t._s(t.sectiongallery.description))])]),t._v(" "),o("div",{staticClass:"row"},t._l(t.galleryitem,(function(e){return o("div",{key:e.index,staticClass:"col-sm-4",attrs:{"data-aos":"fade-down"}},[o("a",{staticClass:"example-image-link",attrs:{href:e.img,"data-lightbox":"example-set","data-title":"Click the right half of the image to move forward."}},[o("figure",[o("img",{staticClass:"example-image",attrs:{src:e.img,alt:e.alt}}),t._v(" "),o("figcaption",[o("h2",[t._v(t._s(e.title))]),t._v(" "),o("p",[t._v(t._s(e.description))]),t._v(" "),o("button",[t._v("View Image")])])])])])})),0)])])}),[],!1,null,null,null).exports,A={data:function(){return{errors:[],formdata:{namebook:"",emailbook:"",partybook:"",tablebook:"",phonebook:"",messagebook:"",mesasgeschedule:""}}},methods:{checkForm:function(t){if(this.errors=[],this.formdata.namebook||this.errors.push("Name is Required."),this.formdata.partybook||this.errors.push("Party is Required"),this.formdata.tablebook||this.errors.push("Table is Required"),this.formdata.emailbook?this.validEmail(this.formdata.emailbook)||this.errors.push("please use a valid email."):this.errors.push("E-mail is Required."),!this.errors.length)return!0;this.checkForm.validity||(this.mesasgeschedule="Enviado"),console.log(this.formdata),console.log(JSON.stringify(this.formdata)),t.preventDefault()},validEmail:function(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)}}},M=Object(n.a)(A,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("section",{staticClass:"book_table",attrs:{id:"book_table"}},[o("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),o("div",{staticClass:"row"},[t._m(1),t._v(" "),o("div",{staticClass:"col-sm-6"},[o("form",{attrs:{id:"app",method:"post",novalidate:"true"}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-6 reservation-left-area"},[t._m(2),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Table")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.formdata.tablebook,expression:"formdata.tablebook"}],staticClass:"selectpicker form-control",attrs:{id:"tables"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.formdata,"tablebook",e.target.multiple?o:o[0])}}},[t._m(3)])]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Party")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.formdata.partybook,expression:"formdata.partybook"}],staticClass:"selectpicker form-control",attrs:{id:"party"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.formdata,"partybook",e.target.multiple?o:o[0])}}},[t._m(4)])])]),t._v(" "),o("div",{staticClass:"col-sm-6 reservation-right-area"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Full Name")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.formdata.namebook,expression:"formdata.namebook"}],staticClass:"form-control",attrs:{type:"text",id:"rname"},domProps:{value:t.formdata.namebook},on:{input:function(e){e.target.composing||t.$set(t.formdata,"namebook",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Email")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.formdata.emailbook,expression:"formdata.emailbook"}],staticClass:"form-control",attrs:{type:"email",id:"remail"},domProps:{value:t.formdata.emailbook},on:{input:function(e){e.target.composing||t.$set(t.formdata,"emailbook",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Phone")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.formdata.phonebook,expression:"formdata.phonebook"}],staticClass:"form-control",attrs:{type:"text",id:"rphone"},domProps:{value:t.formdata.phonebook},on:{input:function(e){e.target.composing||t.$set(t.formdata,"phonebook",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col-sm-12 textarea-button"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Message")]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formdata.messagebook,expression:"formdata.messagebook"}],staticClass:"form-control",attrs:{id:"message",rows:"5"},domProps:{value:t.formdata.messagebook},on:{input:function(e){e.target.composing||t.$set(t.formdata,"messagebook",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"text-center"},[o("button",{staticClass:"btn first",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.checkForm(e)}}},[o("i",{staticClass:"fa fa-calendar"}),t._v(" "),o("span",[t._v("Book a table")])]),t._v(" "),o("div",{staticClass:"clear"})])])]),t._v(" "),t.errors.length?o("div",{staticClass:"custom-error"},[o("h3",[t._v("Please fix the following errors:")]),t._v(" "),o("ul",t._l(t.errors,(function(e){return o("li",{key:e.index},[t._v("\n                  "+t._s(e)+"\n                ")])})),0)]):t._e(),t._v(" "),o("h1",[t._v(t._s(t.formdata.mesasgeschedule))])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"heading_wrapper wow fadeInDown animated"},[e("h2",{staticClass:"wow fadeInDown animated"},[e("span",[this._v(" Book a ")]),this._v("table")]),this._v(" "),e("h4",{staticClass:"sub-title"},[this._v("\n          Monday-Friday: "),e("span",{staticClass:"text-primary"},[this._v("09AM - 11PM")]),this._v("  |\n           Saturday-Sunday: "),e("span",{staticClass:"text-primary"},[this._v("10AM - 12PM")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"book_table_images"},[e("img",{staticClass:"example-image",attrs:{src:"reservations.jpg"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",[this._v("Date and Time")]),this._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"datetimepicker1"}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("optgroup",{attrs:{label:"TABLE:"}},[o("option",[t._v("single table")]),t._v(" "),o("option",[t._v("table")]),t._v(" "),o("option",[t._v("table2")]),t._v(" "),o("option",[t._v("standard")]),t._v(" "),o("option",[t._v("premium")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("optgroup",{attrs:{label:"PARTY:"}},[o("option",[t._v("party")]),t._v(" "),o("option",[t._v("single")]),t._v(" "),o("option",[t._v("2")]),t._v(" "),o("option",[t._v("3")]),t._v(" "),o("option",[t._v("4")]),t._v(" "),o("option",[t._v("5")]),t._v(" "),o("option",[t._v("6")])])}],!1,null,null,null).exports,D=o(47),F={data:function(){return{testemonial:[]}},mounted:function(){var t=this;D.get("https://foodie-bed54.firebaseio.com/testemonials.json").then((function(e){t.testemonial=e.data,console.log(t.testemonial)}))},props:["itemtestemonial"]},T={data:function(){return{contact:{title:"Contact Us",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",phone:"55 011 01015566"},errors:[],formdata:{namecontact:"",emailcontact:"",subjectcontact:"",messagecontact:""}}},methods:{checkForm:function(t){if(this.errors=[],this.formdata.namecontact||this.errors.push("Name is Required."),this.formdata.emailcontact?this.validEmail(this.formdata.emailcontact)||this.errors.push("please use a valid email."):this.errors.push("E-mail is Required."),!this.errors.length)return!0;console.log(this.formdata),console.log(JSON.stringify(this.formdata)),t.preventDefault()},validEmail:function(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)}},props:["item","title"]},R={data:function(){return{Logo:o(210).default}}},B={data:function(){return{items:[],about:[],item:"",caroussel:"",features:"",cardapio:"",services:"",chefs:"",galleryitem:"",testemonial:[]}},components:{Logo:l,SideNav:c,Caroussel:v,About:f,Features:y,Cardapio:x,Services:I,Chefs:N,Gallery:S,Booktable:M,Testemonials:Object(n.a)(F,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"testimonial_section",attrs:{id:"testimonials"}},[o("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"slider-testemonials"},[o("client-only",[o("carousel",{attrs:{autoplay:!0,paginationEnabled:!1,loop:!0,autoplayTimeout:8e3,mouseDrag:!1,"space-padding":0,perPageCustom:[[320,1],[568,1],[768,2],[1024,2]]}},t._l(t.testemonial,(function(e){return o("slide",{key:e.index,staticClass:"testimonial_inner_matter"},[o("img",{attrs:{src:e.img,alt:e.alt}}),t._v(" "),o("p",{attrs:{"data-aos":"fade-up","data-aos-delay":"50"}},[t._v("\n                "+t._s(e.description)+"\n              ")]),t._v(" "),o("h5",{attrs:{"data-aos":"fade-up","data-aos-delay":"500"}},[t._v("\n                "+t._s(e.title)+"\n              ")]),t._v(" "),o("h6",{attrs:{"data-aos":"fade-up","data-aos-delay":"1000"}},[t._v("\n                "+t._s(e.subtitle)+"\n              ")])])})),1)],1)],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"heading_wrapper"},[e("h2",[e("span",[this._v("What My ")]),this._v("Client Says")]),this._v(" "),e("p",[this._v("\n        Lorem Ipsum is simply dummy text of the printing and typesetting\n        industry. Lorem Ipsum has been the industry's standard dummy text\n      ")])])}],!1,null,null,null).exports,Contact:Object(n.a)(T,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("section",{staticClass:"contact bg_images",attrs:{id:"contact"}},[o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"heading_wrapper wow fadeInDown animated"},[o("h2",{staticClass:"wow fadeInDown animated"},[t._v(t._s(t.contact.title))]),t._v(" "),o("p",{staticClass:"wow fadeInDown animated"},[t._v(t._s(t.contact.description))])]),t._v(" "),o("div",{staticClass:"row"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),o("div",{staticClass:"clear"}),t._v(" "),o("div",{staticClass:"col-sm-12"},[o("form",{staticClass:"php-email-form",attrs:{action:"",method:"post",role:"form"}},[o("div",{staticClass:"form-row"},[o("div",{staticClass:"col-sm-6 form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.formdata.namecontact,expression:"formdata.namecontact"}],staticClass:"form-control",attrs:{type:"text",name:"name",id:"name",placeholder:"Your Name"},domProps:{value:t.formdata.namecontact},on:{input:function(e){e.target.composing||t.$set(t.formdata,"namecontact",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"col-md-6 form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.formdata.emailcontact,expression:"formdata.emailcontact"}],staticClass:"form-control",attrs:{type:"email",name:"email",id:"email",placeholder:"Your Email"},domProps:{value:t.formdata.emailcontact},on:{input:function(e){e.target.composing||t.$set(t.formdata,"emailcontact",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.formdata.subjectcontact,expression:"formdata.subjectcontact"}],staticClass:"form-control",attrs:{type:"text",name:"subject",id:"subject",placeholder:"Subject"},domProps:{value:t.formdata.subjectcontact},on:{input:function(e){e.target.composing||t.$set(t.formdata,"subjectcontact",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formdata.messagecontact,expression:"formdata.messagecontact"}],staticClass:"form-control",attrs:{name:"message",rows:"5",placeholder:"Message"},domProps:{value:t.formdata.messagecontact},on:{input:function(e){e.target.composing||t.$set(t.formdata,"messagecontact",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"text-center"},[o("button",{staticClass:"btn",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.checkForm(e)}}},[t._v("\n                Send Message\n              ")])]),t._v(" "),t.errors.length?o("div",{staticClass:"custom-error"},[o("h3",[t._v("Please fix the following errors:")]),t._v(" "),o("ul",t._l(t.errors,(function(e){return o("li",{key:e.index},[t._v("\n                  "+t._s(e)+"\n                ")])})),0)]):t._e()])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-4 "},[e("div",{staticClass:"info-box wow fadeInLeft"},[e("i",{staticClass:"fa fa-map-marker"}),this._v(" "),e("h3",[this._v("Our Address")]),this._v(" "),e("p",[this._v("A108 Adam Street, New York, NY 535022")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"info-box wow fadeInUp"},[e("i",{staticClass:"fa fa-envelope-o"}),this._v(" "),e("h3",[this._v("Email Us")]),this._v(" "),e("p",[this._v("contact@example.com")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"info-box wow fadeInRight"},[e("i",{staticClass:"fa fa-volume-control-phone"}),this._v(" "),e("h3",[this._v("Call Us")]),this._v(" "),e("p",[this._v("+55 9628 254347")])])])}],!1,null,null,null).exports,Footer:Object(n.a)(R,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("footer",{attrs:{id:"footer"}},[o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"row wow fadeInUp"},[o("img",{staticClass:"img-responsive",attrs:{src:"logo.png",alt:"footer_logo"}}),t._v(" "),o("p",[t._v("\n          Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni\n          eligendi fuga maxime saepe commodi placeat.\n        ")]),t._v(" "),o("div",{staticClass:"social-links"},[o("a",{staticClass:"twitter",attrs:{href:"#"}},[o("i",{staticClass:"fa fa-twitter"})]),t._v(" "),o("a",{staticClass:"facebook",attrs:{href:"#"}},[o("i",{staticClass:"fa fa-facebook"})]),t._v(" "),o("a",{staticClass:"instagram",attrs:{href:"#"}},[o("i",{staticClass:"fa fa-instagram"})]),t._v(" "),o("a",{staticClass:"google-plus",attrs:{href:"#"}},[o("i",{staticClass:"fa fa-skype"})]),t._v(" "),o("a",{staticClass:"linkedin",attrs:{href:"#"}},[o("i",{staticClass:"fa fa-linkedin"})])]),t._v(" "),o("div",{staticClass:"footer_copyright"},[o("p",[t._v("\n            © Copyright 2020 by food. All right Reserved - Design By\n            "),o("a",{attrs:{href:"http://wagneramos.com.br/",target:"_blank"}},[t._v("Wagner Ramos")])]),t._v(" "),o("p",[t._v("Developed With"),o("a",{attrs:{href:"",target:"_blank"}},[t._v(" Nuxt JS")])])])])])])])}],!1,null,null,null).exports}},z=(o(211),Object(n.a)(B,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._m(0),t._v(" "),o("header",{staticClass:"header-area top-content"},[o("div",{staticClass:"navbar-area"},[o("div",{staticClass:"food-responsive-nav"},[o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"row"},[o("div",{staticClass:"food-responsive-menu"},[o("div",{staticClass:"logo"},[o("a",{attrs:{href:"#"}},[o("Logo")],1)]),t._v(" "),o("SideNav"),t._v(" "),o("span",{staticClass:"menu_open",attrs:{onclick:"openNav()"}},[t._v("☰ Menu")])],1)])])]),t._v(" "),t._m(1)])]),t._v(" "),o("Caroussel",{attrs:{itemcaroussel:t.caroussel}}),t._v(" "),o("About"),t._v(" "),o("Features",{attrs:{item:t.features}}),t._v(" "),o("Cardapio",{attrs:{itemproduto:t.cardapio}}),t._v(" "),o("Services",{attrs:{itemservices:t.services}}),t._v(" "),o("Chefs",{attrs:{itemchef:t.chefs}}),t._v(" "),o("Gallery",{attrs:{itemgallery:t.galleryitem}}),t._v(" "),o("Booktable"),t._v(" "),o("Testemonials",{attrs:{itemtestemonial:t.testemonial}}),t._v(" "),o("Contact"),t._v(" "),o("Footer"),t._v(" "),t._m(2)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"preloader"},[e("div",{staticClass:"status pulse"},[this._v(" ")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"food-nav"},[o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"row"},[o("div",{staticClass:"header_menu_wrapper"},[o("nav",{staticClass:"navbar navbar-expand-md navbar-light"},[o("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[o("img",{staticClass:"lg-tablet",attrs:{src:"/images/logo.png"}}),t._v(" "),o("img",{staticClass:"logodark",attrs:{src:"/logo-dark.png",alt:"Logo"}})]),t._v(" "),o("div",{staticClass:"collapse navbar-collapse mean-menu",staticStyle:{display:"block"}},[o("ul",{staticClass:"navbar-nav"},[o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Home")])]),t._v(" "),o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link",attrs:{href:"#about"}},[t._v("About Us")])]),t._v(" "),o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link",attrs:{href:"#menu"}},[t._v("Menu")])]),t._v(" "),o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link",attrs:{href:"#chefs"}},[t._v("Chefs")])]),t._v(" "),o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link",attrs:{href:"#gallery"}},[t._v("Gallery")])]),t._v(" "),o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link",attrs:{href:"#testimonials"}},[t._v("Testimonials")])]),t._v(" "),o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link",attrs:{href:"#contact"}},[t._v("Contact")])])]),t._v(" "),o("div",{staticClass:"others-option align-items-center"},[o("div",{staticClass:"option-item"},[o("a",{staticClass:"btn",attrs:{href:"#book_table"}},[t._v("Book a table")])])])])]),t._v(" "),o("div",{staticClass:"clear"})])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"top_button"},[e("a",{staticClass:"back-to-top",staticStyle:{cursor:"pointer"},attrs:{id:"top-scrolltop"}},[e("i",{staticClass:"fa fa-angle-up"})])])}],!1,null,null,null));e.default=z.exports}}]);