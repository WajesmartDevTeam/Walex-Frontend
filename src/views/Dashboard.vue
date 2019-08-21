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
                      <div class="media-body text-right mt-5 col-6">
                        <h1 class="info">&#8358;{{ user.total }}</h1>
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
                      <div class="media-body text-right mt-5 col-6">
                        <h1 class="info">{{ user.loyalty_count }}</h1>
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
                      <div class="media-body text-right mt-5 col-6">
                        <h1 class="info">&#8358;{{ user.extra }}</h1>
                        <p>Extra Points Value</p>
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
            >
              <div class="card dash merchant pull-up">
                <div class="card-body ">
                  <div class="h-100 mt-2">
                    <div class="h-50">
                      <img
                        src="../assets/images/partners/Midas-Logo.png"
                        alt=""
                      />
                    </div>
                    <div class="h-50 mt-3">
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
            <form>
              <div class="preview text-center"></div>
              <div class="form-group">
                <label>Enter Unique ID:</label>
                <input
                  class="form-control"
                  type="text"
                  required
                  v-model="new_merchant.id"
                  placeholder="Enter unique ID"
                />
                <span class="Error"></span>
              </div>
              <div class="form-group">
                <label>Select Loyalty Program</label>
                <v-select
                  label="Select Loyalty Programs"
                  v-model="new_merchant.loyalty"
                  required
                  :options="options"
                ></v-select>
              </div>

              <button
                id="update"
                type="button"
                class="btn btn-success"
              >
                Add
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
      temp: [],
      index: 0,
      num: 5,
      user: {
        total: "",
        loyalty_count: "",
        extra: ""
      },
      merchants: [],
      options: ["Midas Touch Drycleaners", "Marketsquare"],
      new_merchant: {
        loyalty: "",
        id: ""
      }
    };
  },
  mounted () {
    this.$toasted.show(
      "Hello, " + this.$store.getters.user.first_name + " Welcome to WALEXX"
    );
    let user = this.$store.getters.profile;
    let total_point = 0;
    user.memberships.forEach(member => {
      total_point += parseInt(member.points * member.rate);
    });
    this.user.total = total_point.toLocaleString();
    this.user.loyalty_count = user.memberships.length;
    this.user.extra = parseInt(user.extra_points).toLocaleString();
    this.merchants = user.memberships;
  },
  methods: {
    // infiniteHandler($state) {
    //   // setTimeout(() => {
    //   for (let i = this.index; i <= this.num; i++) {
    //     this.merchants.push(this.temp[i]);
    //     this.index += 1;
    //   }
    //   // this.merchants = this.merchants.concat(temp);
    //   if (this.index == this.temp.length) {
    //     $state.complete();
    //   } else {
    //     alert(this.index);
    //     $state.loaded();
    //     this.num += 5;
    //   }
    //   // }, 1000);
    // }
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
.med {
}
</style>
