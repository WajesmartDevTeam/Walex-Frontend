<template>
  <div id="box">
    <TopNav></TopNav>

    <div class="app-content content">
      <div class="content-header mt-4 text-left">
        <h2 class="ml-3">Transaction History</h2>
      </div>
      <div class="content-wrapper d-flex">
        <!-- BEGIN: Main Menu-->
        <Menu></Menu>

        <!-- END: Main Menu-->
        <div class="content-body w-100">
          <div class="row container">
            <Merchants></Merchants>
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

  },
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
