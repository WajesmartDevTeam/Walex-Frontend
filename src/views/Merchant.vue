<template>
  <div id="box">
    <TopNav></TopNav>

    <div class="app-content content">
      <div class="content-header mt-4 text-left">
        <h2 class="ml-3">Loyalty Programs</h2>
      </div>
      <div class="content-wrapper d-flex">
        <!-- BEGIN: Main Menu-->
        <Menu></Menu>

        <!-- END: Main Menu-->
        <div class="content-body w-100">
          <div class="row container">
            <div
              class=" col-md-4 col-sm-6 col-xs-12"
              v-for="merchant in tableData"
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
                      <h5><span class="labe">Points:</span>&nbsp; {{ parseInt(merchant.points) }} points</h5>
                      <h5 class="mr-5"><span class="labe">Value:</span>&nbsp;
                        &#8358;{{
                         formatPrice ( parseInt(merchant.points) * parseInt(merchant.rate) )
                        }}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- <Merchants></Merchants> -->

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
import Merchants from "@/components/MerchantsTable.vue";
export default {
  name: "Merchant",
  components: {
    TopNav,
    Menu,
    Bottom,
    Merchants
  },
  data () {
    return {
      tableData: []
    }
  },
  mounted () {
    // this.$toasted.show(
    //   "Hello, " + this.$store.getters.user.first_name + " Welcome to WALEXX"
    // );

    let user = this.$store.getters.profile;

    user.memberships.forEach(m => {
      user.services.forEach(s => {
        if (m.service === s.id) {
          m.description = s.description;
          m.logo = "http://199.192.22.132/" + s.logo
        }
      });
    });
    this.tableData = user.memberships;
    this.tableData.forEach(i => {
      i.points = parseFloat(i.points).toFixed(2);
      i.value = "₦" + parseInt(i.points) * parseInt(i.rate);
    });

  },
  methods: {
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
.content-body {
  background: #fff;
  min-height: 500px;
}
i {
  font-size: 30px;
}
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
.labe {
  color: #006634;
}
</style>
