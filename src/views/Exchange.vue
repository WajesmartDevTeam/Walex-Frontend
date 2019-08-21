<template>
  <div>
    <TopNav></TopNav>

    <div class="app-content content">
      <div class="content-wrapper d-flex">
        <!-- BEGIN: Main Menu-->
        <Menu></Menu>

        <!-- END: Main Menu-->
        <div class="content-body w-100">
          <div class="content-header text-left">
            <h2 class="ml-2">Redeem Loyalty Points</h2>
          </div>
          <div class="mt-5 d-flex justify-content-around">
            <div class="mr-4">
              <h5>From</h5>
              <div class="x-box container  rounded-circle ">
                <a href="" data-toggle="modal" data-target="#fromModal">
                  <img src="../assets/images/exchange-from.png" alt=""
                /></a>
              </div>
            </div>
            <div class="mr-4">
              <h5>Redeem At</h5>
              <div class="x-box  container rounded-circle">
                <a href="" data-toggle="modal" data-target="#toModal">
                  <img src="../assets/images/exchange-from.png" alt=""
                /></a>
              </div>
            </div>
            <img
              class="img-responsive  d-none d-md-block d-lg-block"
              src="../assets/images/shopping_online.png"
              alt=""
            />
          </div>
          <hr />
          <div>
            <h5>How much do you want to redeem?</h5>
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter points to redeem"
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  disabled
                  class="form-control"
                  placeholder="Actual Points value"
                />
              </div>
            </div>
            <br />
            <div class="d-flex">
              <input
                type="checkbox"
                name="accepted"
                value="accepted"
                required
              /><span id="iAgree"
                >I agree to the WALEXX User Agreement and Privacy Policy</span
              >
            </div>
          </div>
          <hr />
          <div>
            <small>
              MidasTouch drycleaners requires a minimum of 1,000 Points for
              transaction.</small
            >
          </div>
          <br />
          <div><button id="ex-btn">Redeem</button></div>
        </div>
      </div>
    </div>
    <Bottom></Bottom>

    <!-- Modal -->
    <div
      class="modal fade"
      id="fromModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              Redeem From
            </h5>
            <button type="button" class="btn btn-danger" data-dismiss="modal">
              x
            </button>
          </div>
          <div class="modal-body">
            <div class="list-group">
              <a href="#" class="list-group-item list-group-item-action active">
                Wallet
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                Midas Touch Drycleaners
              </a>
              <a href="#" class="list-group-item list-group-item-action"
                >Marketsquare</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="toModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">To</h5>
            <button type="button" class="btn btn-danger" data-dismiss="modal">
              x
            </button>
          </div>
          <div class="modal-body">
            <div class="list-group">
              <a href="#" class="list-group-item list-group-item-action ">
                Midas Touch Drycleaners
              </a>
              <a href="#" class="list-group-item list-group-item-action"
                >Marketsquare</a
              >
            </div>
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
  name: "Exchange",
  components: {
    TopNav,
    Menu,
    Bottom
  }
};
</script>

<style scoped>
.content-body {
  background: #fff;
}
.list-group-item:hover {
  background: #06aa46;
  color: #fff;
}
.list-group-item.active {
  background: #06aa46;
  border: 0;
}
</style>
