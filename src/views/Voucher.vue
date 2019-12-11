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
            <h2 class="ml-2">Gift Vouchers</h2>
          </div>
          <br />

          <div class="container">
            <!-- Btn--><button class="btn">
              <span>Select Merchant</span>
              <i class="fas fa-store"></i>
              <ul class="dropdown p-0">
                <li
                  v-for="service in services"
                  v-bind:key="service.id"
                >
                  <a
                    :href="'offerSet/' +service.title"
                    class="d-flex justify-content-between"
                  >
                    <p>{{service.description}}</p>
                    <span>View Merchant</span>
                  </a>
                </li>

              </ul>
            </button>
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
  name: "Voucher",
  components: {
    TopNav,
    Menu,
    Bottom
  },
  data () {
    return {
      services: []
    }
  },
  mounted () {
    this.services = this.$store.getters.services;
  }
};
</script>

<style scoped>
.content-body {
  background: #fff;
  position: relative;
}
* {
  box-sizing: border-box;
}
.footer {
  margin-top: 20px;
  position: absolute;
  bottom: 0;
  left: 42%;
  text-align: center;
  margin: auto;
}
.btn {
  outline: 0;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  background: #06aa46;
  min-width: 260px;
  border: 0;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 16px 20px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  overflow: hidden;
  cursor: pointer;
}
.btn:hover {
  color: #fff;
  box-shadow: 1px 2px 8px 2px #999;
}
.btn:focus .dropdown,
.btn:active .dropdown {
  transform: translate(0, 20px);
  opacity: 1;
  visibility: visible;
}
.btn i {
  border-radius: 100%;
  animation: ripple 0.6s linear infinite;
  font-size: 30px;
}
.btn .dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: left;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s ease;
}
.btn .dropdown:before {
  content: "";
  position: absolute;
  top: -6px;
  left: 20px;
  width: 0;
  height: 0;
  box-shadow: 2px -2px 6px rgba(0, 0, 0, 0.05);
  border-top: 6px solid #fff;
  border-right: 6px solid #fff;
  border-bottom: 6px solid transparent;
  border-left: 6px solid transparent;
  transform: rotate(-45deg);
  mix-blend-mode: multiple;
}
.btn .dropdown li {
  z-index: 1;
  position: relative;
  background: #fff;
  padding: 0 20px;
  color: #666;
  font-size: 20px;
  list-style-type: none;
}
.btn .dropdown li.active {
  color: #049950;
}
.btn .dropdown li:first-child {
  border-radius: 4px 4px 0 0;
}
.btn .dropdown li:last-child {
  border-radius: 0 0 4px 4px;
}
.btn .dropdown li:last-child a {
  border-bottom: 0;
}
.btn .dropdown a {
  display: block;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding: 16px 0;
  color: inherit;
  font-size: 10px;
  text-decoration: none;
}
/* .btn .dropdown li:hover {
  background: #049950;
} */
@keyframes ripple {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1),
      0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1),
      0 0 0 60px rgba(255, 255, 255, 0.1);
  }
  100% {
    box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.1),
      0 0 0 40px rgba(255, 255, 255, 0.1), 0 0 0 60px rgba(255, 255, 255, 0.1),
      0 0 0 80px rgba(255, 255, 255, 0);
  }
}
</style>
