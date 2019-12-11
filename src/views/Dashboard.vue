/* eslint-disable prettier/prettier */
<template>
  <div>
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
            <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
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
                        <h2 class="info">&#8358;{{ user.total }}</h2>
                        <p>Total Amount</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
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
            <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
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
                        <h2 class="info">&#8358;{{ user.extra }}</h2>
                        <p>Bonus</p>
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
                        <h4 data-v-23c8a2be="">
                          {{ merchant.description.charAt(0).toUpperCase() }}
                        </h4>
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
      }
    };
  },
  beforeMount: function () {

    this.profile()
      .then(response => {
        if (response.memberships.length > 0) {
          this.merchants = response.memberships;
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
      "Hello, " + this.$store.getters.user.first_name + " Welcome to WALEXX"
    );
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

      let total_point = 0;
      user.memberships.forEach(member => {
        total_point += parseInt(member.points * member.rate);
      });
      this.user.total = total_point.toLocaleString();
      this.user.loyalty_count = user.memberships.length;
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
        width: "400px",
        allowOutsideClick: false
      });

      var req = {
        what: "membership",
        data: this.new_merchant
      };
      this.$request
        .makePostRequest(req)
        .then(response => {
          console.log(response);
          this.$swal.fire("Success", response.data.message, "success");
          location.reload();
        })
        .catch(error => {
          this.$swal.fire("Error", error.message, "error");
        });
    }
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
  height: 50px;
  width: 50px;
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
