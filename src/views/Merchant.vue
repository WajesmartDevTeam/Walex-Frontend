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
          <Merchants></Merchants>
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
</style>
