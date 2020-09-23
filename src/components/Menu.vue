<template>
  <div
    class="main-menu menu-static menu-light menu-accordion menu-shadow"
    data-scroll-to-active="true"
  >
    <div class="main-menu-content">
      <ul
        class="navigation navigation-main"
        id="main-menu-navigation"
        data-menu="menu-navigation"
      >
        <li class=" nav-item"><a href="/dashboard"><i class="fa fa-wallet"></i><span class="menu-title">My Wallet</span></a>

        </li>
        <li class=" nav-item"><a href="/profile"><i class="fa fa-user"></i><span class="menu-title">My Profile</span></a>
        </li>
        <li class=" nav-item"><a href="/merchant"><i class="fa fa-hand-holding-usd"></i><span class="menu-title">My Loyalty Programs</span></a>

        </li>

        <li class=" nav-item"><a href="/redeem"><i class="fa fa-sync-alt"></i><span
              class="menu-title"
              title="Redeem your points"
            >Redeem</span></a>

        </li>

        <li class=" nav-item"><a href="/transfer"><i class="fa fa-share-square"></i><span
              class="menu-title"
              title="Transfer points to other users"
            >Transfer</span></a>
        </li>
        <li class=" nav-item"><a href="/voucher"><i class="fa fa-gift"></i><span
              class="menu-title"
              title="Buy giftcards from any of our merchants"
            >Buy Gift Cards</span></a>
        </li>
        <li class=" nav-item"><a href="/history"><i class="fa fa-file"></i><span
              class="menu-title"
              title="View your transaction history"
            >Transaction History</span></a>
        </li>

        <li class=" nav-item"><a
            href="javascript:void(0)"
            @click="logout()"
          ><i class="fa fa-sign-out-alt"></i><span class="menu-title">Log Out</span></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  created () {
    let pin = this.$store.getters.user.is_transactioncode;

    // this.$swal.fire({
    //   title: 'Create Transaction Pin',
    //   text: "You won't be able to perform any transaction without your transaction pin",
    //   type: "info",
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   allowOutsideClick: false,
    //   width: "300px",
    //   confirmButtonText: 'Create'
    // }).then((result) => {
    //   if (result.value) {
    //     this.$router.push({ name: 'updatePin' })
    //   }
    // })

    if (!pin) {
      this.$toasted.info(
        "Please Update your Transaction Pin",
        {
          action: {
            text: 'Update',
            push: {
              name: 'updatePin',
              // this will prevent toast from closing
              dontClose: true
            }
          }        }
      );
    }
  },
  methods: {
    logout: function () {
      var html =
        '<img src="https://ui-ex.com/images/background-transparent-loading-4.gif" />';

      this.$swal.fire({
        title: "Processing",
        html: html,
        showConfirmButton: false,
        showCancelButton: false,
        width: "400px",
        allowOutsideClick: false
      });

      this.$store
        .dispatch("logout")
        .then(response => {
          // this.$swal
          //   .fire("Success", "User Sign Out Successful", "success")
          //   .then(() => {
          //     var _this = this;
          //     _this.$router.push({ name: "login" });
          //   });
          this.$swal.fire({
            title: 'Are you sure?',
            html: '<img src="https://media.tenor.com/images/566837eba034cef161f09e090d191bb1/tenor.gif"/>',

            showCancelButton: true,
            confirmButtonColor: '#1d7b33',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Log Out'
          }).then((result) => {
            if (result.value) {
              var _this = this;
              _this.$router.push({ name: "login" });
            }
          })


        })
        .catch(error => {
          console.log(error);
          this.$swal.fire("Error", error, "error");
        });
    }
  }
};
</script>

<style>
.fa {
  position: relative;
  display: table-cell;
  width: 60px;
  height: 36px;
  text-align: center;
  vertical-align: middle;
  font-size: 20px;
}

.main-menu:hover,
nav.main-menu.expanded {
  width: 250px;
  overflow: visible;
}

.main-menu {
  width: 60px;
  text-align: left;
  -webkit-transition: width 0.05s linear;
  transition: width 0.05s linear;
  -webkit-transform: translateZ(0) scale(1, 1);
  z-index: 1000;
  height: 300px;
}

.main-menu li {
  position: relative;
  display: block;
  width: 250px;
}

.main-menu li > a {
  position: relative;
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
  color: #999;
  font-family: arial;
  font-size: 14px;
  text-decoration: none;
  -webkit-transform: translateZ(0) scale(1, 1);
  -webkit-transition: all 0.1s linear;
  transition: all 0.1s linear;
}

.main-menu .nav-icon {
  position: relative;
  display: table-cell;
  width: 60px;
  height: 36px;
  text-align: center;
  vertical-align: middle;
  font-size: 18px;
}

.main-menu li:hover > a,
nav.main-menu li.active > a,
.dropdown-menu > li > a:hover,
.dropdown-menu > li > a:focus,
.dropdown-menu > .active > a,
.dropdown-menu > .active > a:hover,
.dropdown-menu > .active > a:focus,
.no-touch .dashboard-page nav.dashboard-menu ul li:hover a,
.dashboard-page nav.dashboard-menu ul li.active a {
  color: #fff !important;
  background-color: #06aa46;
}
</style>
