<template>
  <div class="box">
    <TopNav></TopNav>

    <div class="app-content content">
      <div class="content-wrapper d-flex">
        <!-- BEGIN: Main Menu-->
        <Menu></Menu>

        <!-- END: Main Menu-->
        <div class="content-body w-100 h-100">
          <div class="content-header  text-left">
            <h2 class="ml-2">{{merchant.name}}</h2>
            <!-- <h5 class="ml-2 text-success">Gift Vouchers</h5> -->
          </div>
          <br />
          <div class=" mx-auto">
            <v-select
              label="description"
              :reduce="name => name.title"
              v-model="search"
              :options="services"
              placeholder="search by merchant"
            ></v-select>
          </div>
          <br />
          <div
            v-if="page=='A'"
            class="row container"
          >
            <div
              v-for="item in vouchers"
              v-bind:key="item.id"
              class="box-wrapper m-2"
            >
              <img
                :src="image"
                alt="gift image"
                class="img-fluid img-responsive"
              />
              <div class="box-content">
                <a
                  @click="picked = item"
                  class="buy"
                  href="javascript:void(0)"
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg"
                ><span><i class="fa fa-gift"></i></span></a>
                <div class="gift-title ">{{item.cardname}}</div>

                <span
                  v-if="item.amount"
                  class="price mb-3"
                >&#8358;{{formatPrice(item.amount)}}</span>
              </div>
            </div>

          </div>
          <div v-if="page=='B'">
            <img
              src="../assets/images/no_data.png"
              alt=""
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade bd-example-modal-lg"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title"
              id="exampleModalLabel"
            >
              {{picked.cardname}} Gift Card
            </h5>
            <button
              type="button"
              class="btn btn-danger"
              data-dismiss="modal"
            >
              X
            </button>
          </div>
          <div class="modal-body">
            <form v-on:submit.prevent="handlePayment">
              <div class="row">
                <div class="col-sm-6 col-xs-12">
                  <div class="form-group row">
                    <label
                      for="inputEmail3"
                      class="col-sm-4 col-form-label"
                    >Recipient Email <span class="text-danger">*</span></label>
                    <div class="col-sm-8">
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail3"
                        required
                        v-model="picked.recipent_email"
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label
                      for="inputPassword3"
                      class="col-sm-4 col-form-label"
                    >Recipient Mobile<span class="text-danger">*</span></label>
                    <div class="col-sm-8">
                      <input
                        type="text"
                        class="form-control"
                        v-model="picked.recipent_phone"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="inputPassword3"
                      class="col-sm-4 col-form-label"
                    >Gifter Name <span class="text-danger">*</span></label>
                    <div class="col-sm-8">
                      <input
                        type="text"
                        class="form-control"
                        v-model="picked.giftername"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="inputPassword3"
                      class="col-sm-4 col-form-label"
                    >Gifter Email <span class="text-danger">*</span></label>
                    <div class="col-sm-8">
                      <input
                        type="email"
                        class="form-control"
                        v-model="picked.gifteremail"
                        required
                      />
                    </div>
                  </div>
                  <!-- <div class="form-group row">
                    <label
                      for="inputPassword3"
                      class="col-sm-4 col-form-label"
                    >Payment Type<span class="text-danger">*</span></label>
                    <div class="col-sm-8">
                      <input
                        type="text"
                        disabled
                        class="form-control"
                        placeholder="Card"
                      />
                    </div>
                  </div> -->

                  <!-- <div class="form-group row">
                    <label
                      for="inputPassword3"
                      class="col-sm-4 col-form-label"
                    >Sending Option<span class="text-danger">*</span></label>
                    <div class="col-sm-8">
                      <select
                        name=""
                        id=""
                        class="form-control"
                      >
                        <option
                          picked
                          value=""
                        >select option...</option>
                        <option value="">Via Email</option>
                        <option value="">Via Whatsapp</option>
                      </select>
                    </div>
                  </div> -->
                </div>
                <div class="col-sm-6 d-none d-sm-block">
                  <div class="box-wrapper box-wrapper-small">
                    <img
                      :src="image"
                      alt="gift image"
                      class="img-fluid img-responsive"
                    />
                    <div class="box-content">
                      <a
                        class="buy"
                        href="javascript:void(0)"
                        data-toggle="modal"
                        data-target=".bd-example-modal-lg"
                      ><span><i class="fa fa-gift"></i></span></a>
                      <div class="gift-title ">{{picked.cardname}}</div>

                      <span
                        v-if="picked.amount"
                        class="price mb-3"
                      >&#8358;{{formatPrice(picked.amount)}}</span>
                    </div>
                  </div>

                  <div
                    class="value-button"
                    id="decrease"
                    @click="decreaseValue"
                    value="Decrease Value"
                  >-</div>
                  <input
                    type="number"
                    id="number"
                    value="1"
                  />
                  <div
                    class="value-button"
                    id="increase"
                    @click="increaseValue"
                    value="Increase Value"
                  >+</div>
                </div>

                <div class="col-12 form-group row">
                  <label
                    for="inputPassword3"
                    class="col-sm-2 col-form-label"
                  >Description</label>
                  <div class="col-sm-10">
                    <textarea
                      name="description"
                      rows="5"
                      class="form-control"
                      v-model="picked.description"
                    >Enter description here</textarea>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                class="btn btn-secondary"
              >
                Proceed with Payment
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>

    <Bottom> </Bottom>
  </div>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import Menu from "@/components/Menu.vue";
import Bottom from "@/components/Bottom.vue";
import Vue from 'vue'
export default {
  name: "OfferSet",
  components: {
    TopNav,
    Menu,
    Bottom
  },
  data () {
    return {
      page: "A",
      quantity: "",
      search: "",
      image: "",
      imagesArray: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7PXHKcQNMqPi4F1lWF5niCEFaQhq1pXPFjB1I1zriAz9BglF",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYgRfd0kQA5GZKg7hXLsIoPX_-mX5EOoOBRk2Cddgo3Dgnmt1WXg&s",
        "https://images.unsplash.com/photo-1512916206820-bd6d503c003e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      ],
      key: {},
      merchant: {},
      vouchers: [],
      all_vouchers: [],
      services: [],
      picked: {
        description: ""
      },
      credentials: {
        giftcards: [],
        service: "",
        reference: "",
        totalamount: "",
        user_id: "",
      }
    }
  },
  created () {
    const script = document.createElement("script");
    script.src = !this.isProduction
      ? "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/flwpbf-inline.js"
      : "https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js";
    document.getElementsByTagName("head")[0].appendChild(script);
  },
  mounted () {
    this.credentials.user_id = this.$store.getters.user.id;
    this.key = {
      serviceid: this.$route.params.key
    };
    this.services = this.$store.getters.services;
    this.quantity = document.getElementById('number').value
    this.getVouchers();
    this.displayImage();
  },

  watch: {
    'search': function (val) {
      this.key.serviceid = this.search;
      this.getVouchers();

    },
    'vouchers': function (val) {
      if (val.length === 0) {
        this.page = "B"
      }
      else {
        this.page = "A"
      }
    },

    // 'this.quantity': function (val) {
    //   this.credentials.giftcards = [];
    // }
  },
  methods: {
    displayImage () {

      //the first statement should generate a random number in the range 0 to 6 (the subscript values of the image file names in the imagesArray)
      var num = Math.floor(Math.random() * 5); // 0...6
      //the second statement display the random image from the imagesArray array in the canvas image using the random number as the subscript value
      this.image = this.imagesArray[num];

    },
    getVouchers () {
      this.vouchers = []
      var html =
        '<img src="https://thumbs.gfycat.com/AchingSpeedyArmyworm-size_restricted.gif" />';

      this.$swal.fire({
        title: "Processing",
        html: html,
        showConfirmButton: false,
        showCancelButton: false,
        width: "350px",
        allowOutsideClick: false
      });

      let merchant = this.$store.getters.services.forEach((i) => {
        if (i.title === this.key.serviceid) {
          this.merchant = {
            id: i.id,
            name: i.description
          }
        }
      })

      var req = {
        what: "vouchers",
        params: this.key
      };
      this.$request
        .makeGetRequest(req)
        .then(response => {
          console.log(response)
          var idiot = response.data.date

          const byName = this.groupBy(idiot.filter(it => it.cardname), it => it.cardname)

          var array = [];
          const output = Object.keys(byName).map(name => {
            const byAmount = this.groupBy(byName[name], it => it.amount)
            var obj = {};
            obj[name] = byAmount;
            array.push(obj);
          })


          array.forEach(i => {
            for (let key in i) {
              if (i.hasOwnProperty(key)) {
                let array2 = i[key];

                for (let key in array2) {
                  if (array2.hasOwnProperty(key)) {

                    let array3 = array2[key];
                    this.vouchers.push({
                      cardname: array3[0].cardname,
                      amount: array3[0].amount,
                      quantity: array3.length

                    })
                    this.all_vouchers.push(array3);

                  }
                }
              }
            }
          })


        })
        .catch(error => {
          console.log(error)
          this.$swal.fire("Error", error, "error");
        });
    },
    groupBy (a, keyFunction) {
      const groups = {};
      a.forEach(function (el) {
        const key = keyFunction(el);
        if (key in groups === false) {
          groups[key] = [];
        }
        groups[key].push(el);
      });
      return groups;
    },
    handlePayment () {

      this.$swal.fire({
        title: 'Are you sure?',
        text: "Please confirm that all details are correct. ",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFJHNuWnWWC4g86Hf34dWkFDPAFxmnLmQQJ67xeUvUAwGOCpjd",
        imageWidth: 100,
        imageHeight: 100,
        showCancelButton: true,
        confirmButtonColor: 'green',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.value) {
          this.pay()
        }
      })



    },
    pay () {

      this.picked.description = (this.picked.description == undefined) ? "" : this.picked.description
      let all_array = [];
      let total = 0;
      this.all_vouchers.forEach(i => {

        i.forEach(j => {
          if (j.cardname === this.picked.cardname && j.amount === this.picked.amount) {
            all_array.push(j);
          }
        })
      })

      for (let q = 0; q <= this.quantity - 1; q++) {
        // console.log(all_array[q])
        this.credentials.giftcards.push({
          serialnumber: all_array[q].serialnumber,
          cardname: all_array[q].cardname,
          amount: all_array[q].amount
        })
      }

      this.credentials.giftcards.forEach(i => {
        i.recipent_email = this.picked.recipent_email;
        i.recipent_phone = this.picked.recipent_phone;
        i.gifteremail = this.picked.gifteremail;
        i.giftername = this.picked.giftername;
        i.description = this.picked.description;
        i.commission = "1000";
        total += i.amount;
      })

      this.credentials.service = this.key.serviceid;
      this.credentials.totalamount = total;
      window.getpaidSetup({
        customer_email: this.picked.gifteremail,
        amount: total,
        PBFPubKey: "FLWPUBK-a90716eafed1ab1c2fc490448bc76e62-X",
        onclose: () => this.onclose(),
        callback: response => this.callback(response),
        currency: "NGN",
        txref: "rave-123456",
        custom_title: "Walexx Giftcards Payment",
        custom_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7PXHKcQNMqPi4F1lWF5niCEFaQhq1pXPFjB1I1zriAz9BglF",

      });
    },
    onclose () {
    },
    callback: function (response) {


      if (
        response.tx.chargeResponseCode == "00" ||
        response.tx.chargeResponseCode == "0"
      ) {

        this.credentials.reference = response.tx.txRef;
        // console.log(this.credentials)
        this.$swal.fire({
          title: 'Success!',
          html: response.data.message,
          type: "success",
          timer: 8000,
          onBeforeOpen: () => {
            this.$swal.showLoading()
          },
          onClose: () => {
            clearInterval(setInterval(() => {
              const content = this.$swal.getContent()
              if (content) {
                const b = content.querySelector('b')
                if (b) {
                  b.textContent = this.$swal.getTimerLeft()
                }
              }
            }, 100))
          }
        })
        this.submitVoucher();
      } else {
        this.$swal.fire("Error", "Transaction Failed, Please try again", "error");
      }
      window.close();

    },
    submitVoucher () {
      var html =
        '<img src="https://thumbs.gfycat.com/AchingSpeedyArmyworm-size_restricted.gif" />';

      this.$swal.fire({
        title: "Processing",
        html: html,
        showConfirmButton: false,
        showCancelButton: false,
        width: "350px",
        allowOutsideClick: false
      });

      var req = {
        what: "giftcard",
        data: this.credentials
      };

      // console.log(this.credentials)

      this.$request
        .makePostRequest(req)
        .then(response => {
          alert(response.data.message)
          // console.log(response.data.message)

          Vue.prototype.$swal.fire({
            title: 'Success!',
            html: response.data.message,
            type: "success",
            timer: 8000,
            onBeforeOpen: () => {
              Vue.prototype.$swal.showLoading()
            },
            onClose: () => {
              clearInterval(setInterval(() => {
                const content = Vue.prototype.$swal.getContent()
                if (content) {
                  const b = content.querySelector('b')
                  if (b) {
                    b.textContent = Vue.prototype.$swal.getTimerLeft()
                  }
                }
              }, 100))
            }
          })
          setTimeout(this.$router.go(), 1000);

        })
        .catch(error => {
          console.log(error)
          alert(error.message)
          this.$swal.fire("Error", error.message, "error");
          this.credentials.giftcards = [];
        });
    },
    formatPrice (price) {
      var str = price.toString().split(".");
      if (str[0].length >= 3) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
      }
      // if (!str[1]) {
      //   str[1] = "00";
      // }
      return str.join(".");
    },
    increaseValue () {
      var value = parseInt(document.getElementById('number').value, this.picked.quantity);
      value = isNaN(value) ? 0 : value;
      if (value < this.picked.quantity) {
        value++;
        document.getElementById('number').removeAttribute("disabled", "")
      }
      else {
        document.getElementById('number').setAttribute("disabled", "")
      }
      document.getElementById('number').value = value;
      this.quantity = value;
    },
    decreaseValue () {
      document.getElementById('number').removeAttribute("disabled", "")
      var value = parseInt(document.getElementById('number').value, this.picked.quantity);
      value = isNaN(value) ? 0 : value;
      value < 1 ? value = 1 : '';
      value--;
      document.getElementById('number').value = value;
      this.quantity = value;
    }
  },

};
</script>

<style scoped>
.content-body {
  background: #fff;
  position: relative;
}
*,
*:hover,
*:focus {
  box-sizing: border-box;
  outline: 0;
}

#custom-search-input {
  margin: 0;
  margin-top: 10px;
  padding: 0;
}

#custom-search-input .search-query {
  width: 100%;
  padding-right: 3px;
  padding-left: 15px;
  /* IE7-8 doesn't have border-radius, so don't indent the padding */
  margin-bottom: 0;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 0;
}

#custom-search-input button {
  border: 0;
  background: none;
  /** belows styles are working good */
  padding: 2px 5px;
  margin-top: 2px;
  position: absolute;
  right: 0;
  /* IE7-8 doesn't have border-radius, so don't indent the padding */
  margin-bottom: 0;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  color: #28a745;
  cursor: unset;
  z-index: 2;
}

.search-query:focus {
  z-index: 0;
}

.box-wrapper {
  background-color: #fff;
  overflow: hidden;
  /* width: 212px; */
  box-shadow: 0px 5px 43px rgba(0, 0, 0, 0.18);
  border-radius: 32px;
  padding: 0;
  text-align: center;
}
.box-wrapper-small {
  width: 212px;
}
.box-wrapper img {
  max-width: 100%;
  width: 259px;
  height: 195px;
}

.gift-title {
  text-transform: uppercase;
  margin: 0;
  font-size: 14px;
}
.box-content {
  position: relative;
  z-index: 1;
}
.box-content:before {
  content: "";
  width: 200%;
  height: 100px;
  position: absolute;
  display: block;
  background-color: #fff;
  transform: rotate(-8deg);
  top: -50px;
  left: -10%;
  z-index: -1;
}
.box-content .buy {
  display: block;
  top: -80px;
  right: 30px;
  z-index: 2;
  width: 70px;
  height: 70px;
  position: absolute;
}
.box-content .buy span {
  width: 70px;
  height: 70px;
  background-color: #06aa46;
  display: block;
  border-radius: 50%;
  position: absolute;
  font-size: 36px;
  color: #fff;
  transition: all 0.3s ease;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
.box-content .buy span:hover {
  box-shadow: 1px 2px 8px 3px rgb(192, 192, 192);
}
.box-content .buy span i {
  padding: 20px;
}
.expanded .box-content .buy span {
  width: 750px;
  height: 750px;
}
.expanded .box-content .buy span i {
  display: none;
}
.box-content .price {
  font-size: 1.5em;
  font-weight: 900;
  display: block;
  width: 100px;
  margin: auto;
  position: relative;
  font-family: "Satisfy", cursive;
}
.box-content .price:after,
.box-content .price:before {
  content: "";
  height: 1px;
  width: 50px;
  display: block;
  position: absolute;
  background-color: #ddd;
  top: 18px;
}
.box-content .price:before {
  left: -50px;
}
.box-content .price:after {
  right: -50px;
}
.box-content .footer ul {
  list-style: none;
  padding: 0;
  margin: 1em 0;
}
.box-content .footer ul li {
  color: #efd829;
}
label {
  font-size: 12px !important;
}
button {
  z-index: 1;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: #06aa46;
}

button:hover {
  cursor: pointer;
  animation: jelly 0.5s;
}

@keyframes jelly {
  0%,
  100% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
}

.value-button {
  display: inline-block;
  border: 1px solid #ddd;
  margin: 0px;
  width: 40px;
  height: 30px;
  text-align: center;
  vertical-align: middle;
  padding: 3px 0;
  background: #eee;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.value-button:hover {
  cursor: pointer;
}

form #decrease {
  margin-right: -4px;
  border-radius: 8px 0 0 8px;
}

form #increase {
  margin-left: 0px;
  border-radius: 0 8px 8px 0;
}

form #input-wrap {
  margin: 0px;
  padding: 0px;
}

input#number {
  text-align: center;
  border: none;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin: 0px;
  width: 44px;
  height: 34px;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
