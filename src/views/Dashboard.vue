/* eslint-disable prettier/prettier */
<template>
  <div id="box">
    <TopNav></TopNav>

    <div class="app-content content">
      <div class="content-header mt-4 text-left">
        <h2 class="ml-3">My Wallet</h2>
      </div>
      <div class="content-wrapper d-flex">
        <!-- BEGIN: Main Menu-->
        <Menu></Menu>

        <!-- END: Main Menu-->
        <div class="content-body w-100">
          <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-12">
              <div class="card dash pull-up">
                <div class="card-content">
                  <div class="card-body">
                    <div class="med mt-3 row">
                      <div class="col-6">
                        <img
                          src="../assets/images/wallet-img.png"
                          alt=""
                        />
                      </div>
                      <div class="media-body text-center mt-5 col-6 pl-0">
                        <h2 class="info">&#8358;{{ formatPrice(user.total) }}</h2>
                        <p>Total Amount</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12">
              <div class="card dash pull-up">
                <div class="card-content">
                  <div class="card-body">
                    <div class="med mt-3 row">
                      <div class="col-6">
                        <a href="merchant">
                          <img
                            src="../assets/images/merchants.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="media-body text-center mt-5 col-6 pl-0">
                        <h2 class="info">{{ user.loyalty_count }}</h2>
                        <p>My Loyalty Programs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12">
              <div class="card dash pull-up">
                <div class="card-content">
                  <div class="card-body">
                    <div class="med mt-3 row">
                      <div class="col-6">
                        <img
                          src="../assets/images/shopping.jpg"
                          alt=""
                        />
                      </div>
                      <div class="media-body text-center mt-5 col-6 pl-0">
                        <h2 class="info">{{ formatPrice(user.points) }}</h2>
                        <p>Total Points Earned Shopping</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12">
              <div class="card dash pull-up">
                <div class="card-content">
                  <div class="card-body">
                    <div class="med mt-3 row">
                      <div class="col-6">
                        <img
                          src="../assets/images/extra.png"
                          alt=""
                        />
                      </div>
                      <div class="media-body text-center mt-5 col-6 pl-0">
                        <h2 class="info">{{ user.extra }}</h2>
                        <p>Points Earned Via Transfer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <!-- Add new merchant -->
            <div class="col-lg-2 col-md-3 col-sm-6 col-xs-12">
              <div class="card merchant pull-up bg-light">
                <div
                  class="card-body"
                  data-toggle="modal"
                  data-target="#addModal"
                  title="Add New Merchant"
                >
                  <img
                    class="mt-3"
                    src="../assets/images/add.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              class="col-lg-2 col-md-3 col-sm-6 col-xs-12"
              v-for="merchant in merchants"
              v-bind:key="merchant.id"
            >
              <div class="card dash merchant pull-up">
                <div class="card-body p-0 ">
                  <div class="h-100 mt-2">
                    <div class="h-50 mt-3">
                      <div
                        data-v-23c8a2be=""
                        id="prof-img"
                        class="rounded-circle mx-auto"
                      >
                        <!-- <h4 data-v-23c8a2be="">
                          {{ merchant.description.charAt(0).toUpperCase() }}
                        </h4> -->
                        <img
                          v-if="merchant.logo"
                          :src="merchant.logo"
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
                        style="font-size: 1.04rem;"
                        class="mt-2"
                      >
                        {{ merchant.description }}
                      </h5>
                    </div>
                    <div class=" mt-4">
                      <h5>{{ parseInt(merchant.points) }} points</h5>
                      <h5>
                        &#8358;{{
                          (
                            parseInt(merchant.points) * parseInt(merchant.rate)
                          ).toLocaleString()
                        }}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-if="view_more == true"
              class="col-12"
            >
              <a
                class="btn btn-success"
                href="/merchant"
              >View All</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Bottom></Bottom>

    <!-- modal -->
    <div
      class="modal fade"
      id="addModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title"
              id="exampleModalLabel"
            >
              Add Loyalty Program
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
            <form v-on:submit.prevent="addLoyalty">
              <div class="preview text-center"></div>
              <div class="form-group">
                <label>Enter Unique ID</label>
                <input
                  class="form-control"
                  type="text"
                  required
                  v-model="new_merchant.identifier"
                  placeholder="Enter unique ID"
                />
                <span class="Error"></span>
              </div>
              <div class="form-group">
                <label>Select Loyalty Program</label>
                <br />
                <v-select
                  label="name"
                  :reduce="name => name.id"
                  v-model="new_merchant.service"
                  required
                  :options="options"
                  placeholder="select..."
                ></v-select>
              </div>
              <button
                id="update"
                type="submit"
                class="btn btn-success"
              >
                Add Loyalty
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import Menu from "@/components/Menu.vue";
import Bottom from "@/components/Bottom.vue";
export default {
  name: "Dashboard",
  components: {
    TopNav,
    Menu,
    Bottom
  },
  data () {
    return {
      id: "",
      page: 2,
      lastPage: 0,
      isInit: true,
      user: {
        total: "",
        loyalty_count: "",
        extra: ""
      },
      merchants: [],
      options: [],
      new_merchant: {
        profile: ""
      },
      view_more: false,
    };
  },
  beforeMount: function () {

    this.profile()
      .then(response => {
        console.log(response)
        if (response.memberships.length > 0) {
          response.memberships.forEach((el, index) => {
            if (index < 10) {
              response.services.forEach(j => {
                if (el.service == j.id) {
                  el.logo = "http://199.192.22.132/" + j.logo
                }
              })
              this.merchants.push(el);
              this.view_more = false;
            }
            else {
              this.view_more = true;
            }
          })
          // this.merchants = response.memberships;
          this.isInit = false;
          this.merchants.forEach(i => {
            this.$store.getters.profile.services.forEach(j => {
              if (i.service == j.id) {
                i.description = j.description;
              }
            });
          });


        } else {
          console.log("No users found.");
        }
        this.getServices();
        this.getData();
      })
      .catch(error => {
        console.log(error.message);
        this.getServices();
        this.getData();
      });
  },
  mounted () {
    this.id = this.$store.getters.user.id;

    this.$toasted.show(
      "Hello, " + this.capitalize(this.$store.getters.user.first_name) + " Welcome to WALEXX"
    );
    let pin = this.$store.getters.user.is_transactioncode;


    if (!pin) {
      this.$swal.fire({
        title: 'Create Transaction Pin',
        text: "You won't be able to perform any transaction without your transaction pin",
        type: "info",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        allowOutsideClick: false,
        width: "300px",
        confirmButtonText: 'Create'
      }).then((result) => {
        if (result.value) {
          this.$router.push({ name: 'updatePin' })
        }
      })

    }
  },
  methods: {
    profile: function () {
      return this.$store.dispatch("profile", this.$store.getters.user.id);
    },
    getServices () {
      this.$store.getters.services.forEach(opt => {
        this.options.push({ name: opt.description, id: opt.id.toString() });
      });
    },
    getData () {
      let user = this.$store.getters.profile;
      // console.log(user)
      let total_point = 0;
      let points = 0;
      user.memberships.forEach(member => {
        total_point += parseInt(member.points * member.rate);
        points += parseInt(member.points);
      });
      this.user.total = (total_point + parseInt(user.extra_points)).toLocaleString();
      this.user.loyalty_count = user.memberships.length;
      this.user.points = points;
      this.user.extra = parseInt(user.extra_points).toLocaleString();
    },
    addLoyalty () {
      this.new_merchant.profile = this.id.toString();

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
        what: "membership",
        data: this.new_merchant
      };
      this.$request
        .makePostRequest(req)
        .then(response => {
          this.getPoints();
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
          location.reload();
        })
        .catch(error => {
          this.$swal.fire("Error", error.message, "error");
        });
    },
    getPoints () {
      let req = {
        what: "getPoints",
        useToken: false
      }
      this.$request.makeGetRequest(req)
        .then(response => {
          this.$store.dispatch("profile", this.$store.getters.user.id)
        })
        .catch(error => {

          console.log(error)
        });
    },
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
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
  }
};
</script>

<style scoped>
.merchant {
  height: 180px !important;
}
.h-50 {
  height: 83px !important;
}
#prof-img[data-v-23c8a2be] {
  height: 65px;
  width: 55px;
  background: #f7f7f7;
  /* margin: 10px auto; */
  padding: 8px 0px;
}
#prof-img h4[data-v-23c8a2be] {
  font-size: 2em;
  background: -webkit-linear-gradient(#009c0e, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
