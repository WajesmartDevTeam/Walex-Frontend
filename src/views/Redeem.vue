
 /* eslint-disable vue/no-parsing-error */
<template>
  <div>
    <TopNav></TopNav>

    <div class="app-content content">

      <div class="content-wrapper d-flex">
        <!-- BEGIN: Main Menu-->
        <Menu></Menu>

        <!-- END: Main Menu-->
        <div class="content-body w-100 h-100">
          <div class="content-header  text-left">
            <h2 class="ml-2">Redeem Your Points</h2>
          </div>
          <div class="mt-4 row">

            <div class="col">

              <div class="container">
                <div class="frame">
                  <!-- <h4>Redeem yours points </h4> -->
                  <div
                    ng-app
                    ng-init="checked = false"
                  >
                    <form
                      v-if="page === 'A'"
                      class="form-signin"
                      v-on:submit.prevent="animateForm"
                    >
                      <div class="">
                        <label for="receiver">Redeem At</label>

                        <select
                          v-model="credentials.recieving_service"
                          required
                          class="form-styling"
                        >
                          <option
                            v-for="service in all_services"
                            v-bind:key="service.id"
                            :value="service.id"
                          >{{service.name}}</option>
                        </select>

                      </div>
                      <div class="">
                        <label for="amount">Amount (₦)</label>
                        <input
                          class="form-styling"
                          type="text"
                          name="amount"
                          v-model="credentials.amount"
                          v-validate="'required|numeric'"
                          data-vv-as="amount"
                          data-vv-name="amount"
                        />
                        <p
                          class="text-danger"
                          v-if="errors.has('amount')"
                        >*{{errors.first('amount')}}</p>
                      </div>

                      <label for="payment">Select Source</label>

                      <div>
                        <div class="row">
                          <div class="col-xs-1">

                            <a
                              v-on:click="add"
                              class=""
                              title="redeem points from more merchants"
                            > <i class='fa fa-plus text-success'></i> </a>
                          </div>
                          <div class="col-5"> <label>Source</label></div>
                          <div class="col-4"><label>Amount</label></div>

                        </div>
                        <div v-for="(service, index) in credentials.services">
                          <div class="row">

                            <div class="form-group col-8 pr-0 mb-0">

                              <select
                                v-model="credentials.services[index].id"
                                class="form-styling rounded-right"
                              >
                                <option
                                  v-for="option in options"
                                  v-bind:value="option.id"
                                  v-bind:key='option.id'
                                  v-bind:disabled="inServicesArray(option.id)"
                                >
                                  {{ option.name }}&nbsp;&nbsp;({{option.points}})
                                </option>
                              </select>

                            </div>
                            <div class="form-group col-2 p-0 mb-0">

                              <input
                                type="text"
                                class="form-styling rounded-left ml-1"
                                placeholder="amount"
                                max=""
                                required
                                v-validate="'required|numeric'"
                                data-vv-as="source amount"
                                name="source amount"
                                v-model="credentials.services[index].amount"
                              >
                            </div>
                            <div class="col-1 p-1">
                              <a
                                v-on:click="remove(index)"
                                title="remove merchant from list"
                              > <i class='fa fa-trash text-danger'></i></a>
                            </div>
                            <!-- <p
                              class="text-danger"
                              v-if="errors.has('source amount')"
                            >*{{errors.first('source amount')}}</p> -->
                          </div>
                        </div>
                      </div>

                      <div>
                        <label for="charge">Transaction Charge(₦)</label>
                        <input
                          class="form-styling"
                          type="text"
                          name="charge"
                          disabled
                          v-model="credentials.charge"
                        />
                      </div>
                      <div>
                        <label for="description">Description</label>

                        <textarea
                          class="form-styling h-100"
                          v-model="credentials.description"
                          name="description"
                          id=""
                          cols="30"
                          rows="5"
                        ></textarea>
                      </div>

                      <input
                        type="checkbox"
                        id="checkbox"
                        required
                        name="checkbox"
                        v-validate="'required'"
                        data-vv-as="Terms and Condition"
                      />

                      <label for="checkbox"><span class="ui"></span>I accept the Terms and Conditions applied to this transaction.</label>
                      <p
                        class="text-danger"
                        v-if="errors.has('checkbox')"
                      >*{{errors.first('checkbox')}}</p>
                      <div class="form-group ">
                        <button
                          type="submit"
                          class="btn-submit btn-animate"
                        >Next </button>
                      </div>
                    </form>

                  </div>

                  <div v-if="page === 'B'">
                    <!-- <div class="cover-photo"></div>
                    <div class="profile-photo"></div> -->
                    <div class="welcome">
                      <h1>Enter Transaction Pin</h1>
                      <form v-on:submit.prevent='confirmTransaction'>

                        <div class="pinBox">
                          <input
                            name="pin"
                            class="pinEntry form-control mx-auto"
                            type="
                            required
                            text"
                            maxlength="4"
                            v-model="credentials.transactioncode"
                            v-validate="'required|length:4|max:4|numeric'"
                            data-vv-as="Transaction Pin"
                          />
                        </div>
                        <p
                          class="text-danger"
                          v-if="errors.has('pin')"
                        >*{{errors.first('pin')}}</p>
                        <button
                          type="submit"
                          class=" btn-otp mt-3"
                        >Redeem</button>
                      </form>
                    </div>
                    <a
                      class="btn-goback"
                      value="Refresh"
                      @click="goBack"
                    ><i class="fa fa-arrow-left"></i>Go back </a>
                    <a
                      class="btn-cancel"
                      value="Refresh"
                      onClick="history.go()"
                    ><i class="fa fa-times"></i>Cancel</a>
                  </div>
                </div>

              </div>
            </div>

            <div class="col">
              <img
                class="img-responsive d-none d-md-block d-lg-block"
                src="../assets/images/redeem2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Bottom></Bottom>

  </div>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import Menu from "@/components/Menu.vue";
import Bottom from "@/components/Bottom.vue";
export default {
  name: "Redeem",
  components: {
    TopNav,
    Menu,
    Bottom
  },
  data () {
    return {
      page: "A",
      type: "",
      options: [],
      all_services: [],
      extra_point: "",
      service: {
        id: '',
        amount: ''
      },

      credentials: {
        user: "",
        amount: "",
        charge: "100",
        description: "",
        extra: "0",
        services: [
          { "id": "select", "amount": "" },
        ],

        transactioncode: "",

      },

    }
  },
  mounted () {
    this.$store.getters.services.forEach(opt => {
      this.all_services.push({ name: opt.description, id: opt.id.toString() });
    });
    this.extra_point = parseInt(this.$store.getters.profile.extra_points)
    this.credentials.user = this.$store.getters.user.id;
    this.$store.getters.profile.memberships.forEach((opt) => {
      this.$store.getters.profile.services.forEach((j) => {
        if (opt.service === j.id) {
          this.options.push({
            name: j.description,
            id: j.id,
            points: parseInt(opt.points)
          })
        }
      })
      // console.log(this.options)
    });
    this.options.push({
      name: "Bonus",
      id: "0",
      points: parseInt(this.extra_point)
    })


  },
  methods: {
    confirmTransaction () {

      let receiver;
      this.all_services.forEach(i => {
        if (i.id == this.credentials.recieving_service) {
          receiver = i.name;
        }
      })

      this.$swal.fire({
        title: 'Confirm Transaction',
        text: "Please confirm Redemption of " + this.credentials.amount + " points at " + receiver + "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirm'
      }).then((result) => {
        if (result.value) {
          this.handleRedeem()
        }
      })
    },
    handleRedeem () {

      var html =
        '<img src="https://thumbs.gfycat.com/AchingSpeedyArmyworm-size_restricted.gif"/>';

      this.$swal.fire({
        title: "Processing",
        html: html,
        showConfirmButton: false,
        showCancelButton: false,
        width: "380px",
        allowOutsideClick: false
      });
      let amount_error = [];
      let that = this;
      this.credentials.services.forEach((i) => {
        if (i.id == 0) {
          that.credentials.extra = i.amount;
          that.credentials.services.splice(that.credentials.services.indexOf(i), 1);
        };

        this.options.forEach(j => {

          if (i.id === j.id) {
            if (parseInt(i.amount) > parseInt(j.points)) {
              alert("error")
              amount_error.push(j.name)
            }
          }
        })

      })

      if (amount_error.length !== 0) {
        this.$swal.fire("Error", "insufficient points for " + amount_error.join(", "), "error");
      }
      else {
        var req = {
          what: "redeem",
          data: this.credentials,
          useToken: true
        };

        console.log(req.data)
        // this.$request
        //   .makePostRequest(req)
        //   .then(response => {
        //     // console.log(response);

        //     this.$swal.fire("Success", response.data.message, "success");
        //     this.$store.dispatch("profile", this.$store.getters.user.id)
        //     location.reload();
        //   })
        //   .catch(error => {
        //     // console.log(error);
        //     this.$swal.fire("Error", error.message, "error");
        //   });
      }


    },
    animateForm () {
      this.$validator.validate().then(valid => {
        if (valid) {

          this.page = "B"
          document.getElementsByClassName("btn-animate")[0].classList.toggle("btn-animate-grow");
          document.getElementsByClassName("frame")[0].classList.toggle("frame-short");
        }
      })
    },
    goBack () {
      this.page = "A";
      document.getElementsByClassName("frame")[0].classList.toggle("frame-short");

    },
    add: function () {
      // this.credentials.services.push(this.service)
      let blank = {
        id: '',
        amount: ''
      }
      this.credentials.services.push(blank);

    },
    remove: function (index) {
      this.credentials.services.splice(index, 1);
    },
    inServicesArray: function (id) {
      let answer = false
      let arr = this.credentials.services
      let arr_length = arr.length

      for (var i = 0; i < arr_length; i++) {
        if (arr[i].id == id) {
          answer = true
          break
        }
      }
      return answer
    }
  }
};
</script>

<style scoped>
.content-body {
  background: #fff;
  min-height: 600px;
}
* {
  box-sizing: border-box;
}

.wrapper {
  width: 60%;
  height: 100%;
  background: linear-gradient(
    270deg,
    #ffffff,
    #ffffff,
    #ffffff,
    #ffffff,
    #ffffff
  );
  background-size: 1000% 1000%;
  animation: gradient 60s ease infinite;
  box-shadow: 1px 1px 14px 3px #f2f3f0;
}
.accordion {
  width: 100%;
  /* border-image-source: linear-gradient(
    270deg,
    #06aa46,
    #28a745,
    #ffffff,
    #06aa46,
    #06aa46
  ); */
  /* border-image-slice: 1; */
  padding: 1em;
  transition: all 0.25s ease;
  background: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 1.2em;
  outline: none;
  border-bottom: 1px solid #f2f2f2;
  box-shadow: 0 8px 6px -6px #f2f2f2;
}
.accordion:hover {
  background: #fff;
  cursor: pointer;
}
.active {
  background: #fff;
  cursor: pointer;
}
.panel {
  background: #fff;
  margin: 0 2px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  overflow: hidden;
  padding: 0 1em;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
#transfer-btn {
  z-index: 1;
  font-size: inherit;
  font-family: inherit;
  /* color: white; */
  padding: 0.75em 1em;
  outline: none;
  border: none;
  background-color: #06aa46;
  border-radius: 9px;
  width: 200px;
}

#transfer-btn:hover {
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

.frame {
  height: 575px;
  width: 480px;

  background: linear-gradient(rgb(255, 255, 255), rgba(241, 241, 241, 0.95));
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  border-top: solid 1px rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: all 0.5s ease;
}

.frame-short {
  height: 400px;
  margin-top: 50px;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);
}
.frame-short form {
  overflow: unset;
}
.signin-active a {
  padding-bottom: 10px;
  color: #ffffff;
  text-decoration: none;
  border-bottom: solid 2px #1059ff;
  transition: all 0.25s ease;
  cursor: pointer;
}

.signin-inactive a {
  padding-bottom: 0;
  color: rgba(255, 255, 255, 0.3);
  text-decoration: none;
  border-bottom: none;
  cursor: pointer;
}

.form-signin {
  /* width: 430px; */
  height: 500px;
  overflow-y: auto;
  font-size: 16px;
  font-weight: 300;
  padding-left: 37px;
  padding-right: 37px;
  padding-top: 10px;
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.form-signin-left {
  transform: translateX(-400px);
  opacity: 0;
}

#check path {
  stroke: #ffffff;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 0.85px;
  stroke-dasharray: 60px 300px;
  stroke-dashoffset: -166px;
  fill: rgba(255, 255, 255, 0);
  transition: stroke-dashoffset 2s ease 0.5s, fill 1.5s ease 1s;
}

#check.checked path {
  stroke-dashoffset: 33px;
  fill: #999;
}

.form-signin input,
option,
.selected {
  color: #212529;
  font-size: 14px;
  text-align: center;
}

.form-styling {
  width: 100%;
  height: 35px;
  padding-left: 15px;
  border: none;
  border-radius: 20px;
  margin-bottom: 20px;
  background: #dfdfdf;
}

label {
  font-size: 15px;
  padding-left: 15px;
  padding-bottom: 10px;
  color: #6b6f82;
  font-weight: bold;
  display: block;
}

:focus {
  outline: none;
}

.form-signin input:focus,
textarea:focus {
  -moz-box-shadow: inset 0 0 10px #b9b8b8;
  -webkit-box-shadow: inset 0 0 10px #b9b8b8;
  box-shadow: inset 0 0 10px #b9b8b8;
  border: none;
  /* padding-right: 40px; */
  transition: background 0.5s ease;
}

[type="checkbox"]:not(:checked),
[type="checkbox"]:checked {
  position: absolute;
  display: none;
}

[type="checkbox"]:not(:checked) + label,
[type="checkbox"]:checked + label {
  position: relative;
  padding-left: 85px;
  padding-top: 2px;
  cursor: pointer;
  margin-top: 8px;
  text-align: left;
  font-size: 13px;
}

[type="checkbox"]:not(:checked) + label:before,
[type="checkbox"]:checked + label:before,
[type="checkbox"]:not(:checked) + label:after,
[type="checkbox"]:checked + label:after {
  content: "";
  position: absolute;
}

[type="checkbox"]:not(:checked) + label:before,
[type="checkbox"]:checked + label:before {
  width: 60px;
  height: 30px;
  background: #999;
  border-radius: 15px;
  left: 0;
  top: -3px;
  transition: all 0.2s ease;
}

[type="checkbox"]:not(:checked) + label:after,
[type="checkbox"]:checked + label:after {
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  top: 7px;
  left: 10px;
  transition: all 0.2s ease;
}

/* on checked */
[type="checkbox"]:checked + label:before {
  background: #06aa46;
}

[type="checkbox"]:checked + label:after {
  background: #ffffff;
  top: 7px;
  left: 45px;
}

[type="checkbox"]:checked + label .ui,
[type="checkbox"]:not(:checked) + label .ui:before,
[type="checkbox"]:checked + label .ui:after {
  position: absolute;
  left: 6px;
  width: 65px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
  transition: all 0.2s ease;
}

[type="checkbox"]:not(:checked) + label .ui:before {
  content: "no";
  left: 32px;
  color: rgba(255, 255, 255, 0.7);
}

[type="checkbox"]:checked + label .ui:after {
  content: "yes";
  color: #ffffff;
}

[type="checkbox"]:focus + label:before {
  box-sizing: border-box;
  margin-top: -1px;
}

.btn-signin {
  float: left;
  padding-top: 8px;
  width: 100%;
  height: 35px;
  border: none;
  border-radius: 20px;
  margin-top: -8px;
}
button {
  background-color: #06aa46;
}
.btn-animate {
  float: left;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 13px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  padding-top: 8px;
  width: 100%;
  height: 35px;
  border: none;
  border-radius: 20px;
  margin-top: 23px;
  background-color: #06aa46;
  left: 0px;
  top: 0px;
  transition: all 0.5s ease, top 0.5s ease 0.5s, height 0.5s ease 0.5s,
    background-color 0.5s ease 0.75s;
}

.btn-animate-grow {
  width: 130%;
  height: 625px;
  position: relative;
  left: -55px;
  top: -420px;
  color: rgba(255, 255, 255, 0);
  background-color: rgba(255, 255, 255, 1);
}

a.btn-signin:hover {
  cursor: pointer;
  background-color: #06aa46;
  transition: background-color 0.5s;
}

.welcome {
  /* width: 100%;
  height: 50px;
  position: relative;
  color: #2c303b;
  opacity: 0; */
  width: 100%;
  height: 50px;
  margin-top: 20%;
  position: relative;
  color: #2c303b;
  transition: transform 1.5s ease 0.25s, opacity 0.1s ease 1s;
}
.welcome h1 {
  color: #2c303b;
}

.welcome-left {
  /* transform: translateY(-780px); */
  transform: translateY(-952px);
  opacity: 1;
}

h1 {
  color: #ffffff;
  font-size: 35px;
  font-weight: 300;
  text-align: center;
}

.btn-goback {
  position: relative;
  margin-right: auto;
  top: 160px;
  float: right;
  padding: 8px;
  width: 18%;
  margin-left: 37px;
  margin-right: 37px;
  height: 35px;
  border-radius: 20px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 13px;
  text-align: center;
  color: #06aa46 !important;
  border: solid 1px #06aa46;
  /* opacity: 0; */
  transition: top 1.5s ease 0.35s, opacity 0.75s ease 0.5s;
}
.btn-cancel {
  position: relative;
  margin-right: auto;
  top: 160px;
  float: right;
  padding: 8px;
  width: 18%;
  right: -32px;
  height: 35px;
  border-radius: 20px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 13px;
  text-align: center;
  color: #06aa46 !important;
  border: solid 1px #06aa46;
  /* opacity: 0; */
  transition: top 1.5s ease 0.35s, opacity 0.75s ease 0.5s;
}

a.btn-goback:hover,
a.btn-cancel:hover {
  cursor: pointer;
  background-color: #06aa46;
  transition: all 0.5s;
  color: #ffffff !important;
}
input#otp {
  width: 80%;
  padding: 8px;
  text-align: center;
}
input#otp:focus {
  outline: none !important;
}
.btn-otp {
  color: #fff;
  border: solid 1px #06aa46;
  padding: 8px;
  width: 60%;
  border-radius: 20px;
}
.btn-otp:hover {
  border: solid 1px #06aa46;
  color: #06aa46;
  background-color: #fff;
  cursor: pointer;
  animation: jelly 0.5s;
}
#v {
  background: #dbdbdb;
  border-radius: 20px;
  border: 0 !important;
}
#v .vs__search::placeholder,
#v .vs__dropdown-toggle,
#v .vs__dropdown-menu {
  background: #dfe5fb;
  border: none;
  color: #394066;
  text-transform: lowercase;
  font-variant: small-caps;
}
/* pin */
.pinBox {
  display: inline-block;
  overflow: hidden;
  position: relative;
  height: 50px;
  border-radius: 15px;
}
.pinBox:before {
  content: "";
  pointer-events: none;
  display: block;
  height: 100%;
  position: absolute;
  width: 100%;
  border-radius: 15px;
  border: 1px solid #ccc;
  background: linear-gradient(
    to right,
    transparent 23%,
    #ccc 23% 25%,
    transparent 25% 48%,
    #ccc 48% 50%,
    transparent 50% 73%,
    #ccc 73% 75%,
    transparent 75% 100%
  );
}
.pinEntry {
  padding: 5px 24px;
  font-family: courier, monospaced;
  border: none;
  outline: none;
  width: 13em;
  height: 100%;
  letter-spacing: 57px;
  font-size: 21px;
  color: #000;
  font-weight: bold;
  background-color: transparent;
}
</style>



