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
            <h2 class="ml-2">Transfer</h2>
          </div>
          <div class="mt-5 row">
            <div class="wrapper col">
              <button class="accordion">
                From My e-Wallet
                <i class="fas fa-arrow-circle-down float-right"></i>
              </button>
              <div class="panel">
                <p>
                  <div class="form-group">
                    <select
                      class="form-control"
                      id="exampleFormControlSelect1"
                    >
                      <option>Select Merchant</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">N</div>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        id="inlineFormInputGroup"
                        placeholder=" Amount"
                      />
                    </div>
                  </div>
                </p>
              </div>

              <button class="accordion">
                Transfer To <i class="fas fa-arrow-circle-down float-right"></i>
              </button>
              <div class="panel">
                <p>
                  <div class="form-group">
                    <select
                      class="form-control"
                      id="exampleFormControlSelect1"
                    >
                      <option>Select Recipient</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div class="d-flex">
                    <input
                      type="checkbox"
                      name="accepted"
                      value="accepted"
                      required
                    /><span id="iAgree">I agree to the WALEXX User Agreement and Privacy Policy</span>
                  </div>
                  <div class="form-group text-white">
                    <button id="transfer-btn">Continue</button>
                  </div>
                </p>

              </div>
            </div>

            <img
              class="img-responsive d-none d-md-block d-lg-block col"
              src="../assets/images/transfer.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <Bottom></Bottom>

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
  name: "Transfer",
  components: {
    TopNav,
    Menu,
    Bottom
  },
  mounted () {
    this.accordion();
  },
  methods: {
    accordion () {
      let accord = document.querySelectorAll(".accordion");
      let i;

      for (i = 0; i < accord.length; i++) {
        accord[i].addEventListener("click", function () {
          this.classList.toggle("active");
          let panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
      }



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
</style>
