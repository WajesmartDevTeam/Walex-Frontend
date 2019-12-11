<template>
  <div>
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
    this.$toasted.show(
      "Hello, " + this.$store.getters.user.first_name + " Welcome to WALEXX"
    );

    let user = this.$store.getters.profile;
    user.memberships.forEach(m => {
      user.services.forEach(s => {
        if (m.service === s.id) {
          m.description = s.description;
        }
      });
    });
    this.tableData = user.memberships;
    this.tableData.forEach(i => {
      i.points = parseFloat(i.points).toFixed(2);
      i.value = "₦" + parseInt(i.points) * parseInt(i.rate);
    });

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
