/* eslint-disable vue/no-parsing-error */
<template>
  <div id="box">
    <TopNav></TopNav>

    <div class="app-content content">

      <div class="content-wrapper d-flex">
        <!-- BEGIN: Main Menu-->
        <Menu></Menu>

        <!-- END: Main Menu-->
        <div class="content-body w-100 h-100">

          <div class="content-header  text-left">
            <h2 class="ml-2">Transfer Points</h2>
          </div>
          <div class="mt-4 row">
            <div class="col-md-8 mx-auto">
              <carousel
                class="d-none d-md-block"
                :per-page="4"
              >
                <slide
                  v-for="(service, index) in options"
                  v-bind:key="index"
                >
                  <div
                    @click="selected=service"
                    class="card dash merchant pull-up"
                  >
                    <div class="card-body p-0 ">
                      <div
                        data-v-23c8a2be=""
                        id="prof-img"
                        class="rounded-circle mx-auto"
                      >
                        <img
                          v-if="service.logo"
                          :src="service.logo"
                          alt="logo"
                        >
                        <img
                          v-else
                          src="data:image/png;base64,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"
                          alt=""
                        >
                        <br>
                      </div>
                      <h5
                        style="font-size: 0.95rem;"
                        class="mt-3"
                      >
                        {{ service.name }}
                      </h5>
                      <p>&nbsp; {{ formatPrice(service.points) }} points</p>

                    </div>
                  </div>
                </slide>
              </carousel>
              <carousel
                class="d-block d-sm-none"
                :per-page="2"
              >
                <slide
                  v-for="(service, index) in options"
                  v-bind:key="index"
                >
                  <div
                    @click="selected=service"
                    class="card dash merchant pull-up"
                  >
                    <div class="card-body p-0 ">
                      <div
                        data-v-23c8a2be=""
                        id="prof-img"
                        class="rounded-circle mx-auto"
                      >
                        <img
                          v-if="service.logo"
                          :src="service.logo"
                          alt="logo"
                        >
                        <img
                          v-else
                          src="data:image/png;base64,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"
                          alt=""
                        >
                        <br>
                      </div>
                      <h5
                        style="font-size: 0.95rem;"
                        class="mt-3"
                      >
                        {{ service.name }}
                      </h5>
                      <p>&nbsp; {{ formatPrice(service.points) }} points</p>

                    </div>
                  </div>
                </slide>
              </carousel>
            </div>
            <div class="col">

              <div class="container">
                <div class="frame">
                  <h4>Transfer Points To Other Users</h4>
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
                        <label for="receiver">Receiver Mobile Number</label>
                        <input
                          class="form-styling"
                          title="enter the user Id of the receiver"
                          type="text"
                          name="receiver"
                          v-model="credentials.receiver_id"
                          placeholder="e.g 0809xxxxxxx, 0818xxxxxxx"
                          v-validate="'required|length:11'"
                          data-vv-as="receiver id"
                        />
                        <p
                          class="text-danger"
                          v-if="errors.has('receiver')"
                        >*{{errors.first('receiver')}}</p>
                      </div>
                      <div class="">
                        <label for="amount">Amount(₦)</label>
                        <input
                          class="form-styling"
                          type="text"
                          name="amount"
                          v-model="credentials.amount"
                          v-validate="'required|numeric'"
                          data-vv-as="amount"
                          title="enter the amount to  transfer"
                        />
                        <p
                          class="text-danger"
                          v-if="errors.has('amount')"
                        >*{{errors.first('amount')}}</p>
                      </div>

                      <!-- <label for="payment">Select Fr</label> -->

                      <div>
                        <div class="row">
                          <div class="col-xs-1">

                            <!-- <a
                              v-on:click="add"
                              class=""
                              title="redeem points from more merchants"
                            > <i class='fa fa-plus text-success'></i> </a> -->
                          </div>
                          <div class="col-5"> <label>Source</label></div>
                          <div class="col-4"><label>Amount</label></div>
                          <div class="col-12">
                            <small class="text-danger">
                              <i>Select Preferred Source From the Merchants Slider Above</i></small></div>
                        </div>
                        <div
                          v-for="(service, index) in credentials.services"
                          v-bind:key="index"
                        >
                          <div class="row">

                            <div class="form-group col-8 pr-0 mb-0">
                              <input
                                class="form-styling rounded-right"
                                type="text"
                                disabled
                                v-model="credentials.services[index].name"
                              >
                              <!-- <select
                                v-model="credentials.services[index].name"
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
                              </select> -->

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
                      <form v-on:submit.prevent='confirmTransfer'>

                        <div class="pinBox">
                          <input
                            name="pin"
                            class="pinEntry form-control mx-auto"
                            type="password"
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
                        >Transfer</button>
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
                src="../assets/images/transfer.png"
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
  name: "Transfer",
  components: {
    TopNav,
    Menu,
    Bottom,
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
      selected: {},
      credentials: {
        services: [],
        sender: "",
        charge: "100",
        transactioncode: "",
        extra: "0"
      },

    }
  },
  mounted () {

    this.extra_point = parseInt(this.$store.getters.profile.extra_points)
    this.credentials.sender = this.$store.getters.user.id;
    this.$store.getters.profile.memberships.forEach((opt) => {
      this.$store.getters.profile.services.forEach((j) => {
        if (opt.service === j.id) {
          this.options.push({
            name: j.description,
            id: j.id,
            logo: "http://199.192.22.132/" + j.logo,
            points: parseInt(opt.points)
          })
        }
      })

    });
    this.options.push({
      name: "Bonus",
      id: "0",
      points: parseInt(this.extra_point)
    })

  },
  watch: {

    selected: {
      deep: true,
      handler (val) {
        console.log(val);
        if (this.credentials.services.length > 0) {
          let status = []
          this.credentials.services.forEach(i => {
            if (i.id == val.id) {
              status.push(true)
            }
            else {
              status.push(false)
            }
          });
          if (!status.includes(true)) {
            this.credentials.services.push({
              id: val.id,
              name: val.name
            })
          }
        }
        else {
          this.credentials.services.push({
            id: val.id,
            name: val.name
          })
        }

      }
    }
  },
  methods: {
    confirmTransfer () {

      if (this.errors.items.length == 0) {
        this.$swal.fire({
          title: 'Confirm Transaction',
          text: "Please confirm Transfer of " + this.credentials.amount + " points to " + this.credentials.receiver_id + "",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Confirm'
        }).then((result) => {
          if (result.value) {
            this.handleTransfer()
          }
        })
      }

    },
    handleTransfer () {
      let that = this;
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
      this.credentials.services.forEach((i) => {
        delete i["name"];
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
          what: "transfer",
          data: this.credentials,
          useToken: true
        };

        console.log(req.data)
        this.$request
          .makePostRequest(req)
          .then(response => {
            this.getPoints()

            // this.$swal.fire("Success", response.data.message, "success");
            this.getPoints()
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

            setTimeout(location.reload(), 1000);

          })
          .catch(error => {
            console.log(error);
            this.$swal.fire("Error", error, "error");
          });
      }


    },
    animateForm () {
      this.$validator.validate().then(valid => {
        if (valid) {

          let amount_error = [];
          let sum = 0;
          let that = this;
          that.credentials.services.forEach((i) => {
            sum += Number(i.amount)
            that.options.forEach(j => {

              if (i.id === j.id) {
                if (parseInt(i.amount) > parseInt(j.points)) {

                  amount_error.push(j.name)
                }
              }
            })

          })
          if (amount_error.length !== 0) {
            that.$swal.fire("Error", "insufficient points for " + amount_error.join(", "), "error");
          }
          else if (that.credentials.amount > sum || that.credentials.amount < sum) {
            that.$swal.fire("Error", "Incorrect Source Amount Sum");
          }

          else {
            this.page = "B"
            document.getElementsByClassName("btn-animate")[0].classList.toggle("btn-animate-grow");
            document.getElementsByClassName("frame")[0].classList.toggle("frame-short");
          }
        }
      })
    },
    goBack () {
      this.page = "A";

      document.getElementsByClassName("frame")[0].classList.toggle("frame-short");

    },
    add: function () {
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
    getPoints () {
      let req = {
        what: "getPoints"
      }
      this.$request.makeGetRequest(req)
        .then(response => {
          this.$store.dispatch("profile", this.$store.getters.user.id)
        })
        .catch(error => {

          console.log(error)
        });
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
.v-select {
  background: #8a8a8a;
  border-radius: 20px;
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
  width: 215px;
  border-radius: 15px;
}
.pinBox:before {
  content: "";
  pointer-events: none;
  display: block;
  height: 100%;
  position: absolute;
  width: 215px;
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
  letter-spacing: 34px;
  font-size: 21px;
  color: #000;
  font-weight: bold;
  background-color: transparent;
}
.card.dash {
  height: 121px;
  width: 150px;
}
</style>
