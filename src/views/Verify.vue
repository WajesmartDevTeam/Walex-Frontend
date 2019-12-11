/* eslint-disable prettier/prettier */
<template>
  <div>
    <img
      src="../assets/images/logo.png"
      alt="WALEXX"
    />
    <div class="section-20">
      <div class="div-block-107-copy ">
        <div class="div-block-108-copy">
          <h3 class="mb-5">
            Verify Your Account
          </h3>
          <h1 class="heading-51">
            Your account has been verified, click the button below to login
          </h1>

          <button
            v-on:click.preventSubmit="verify"
            class="btn-success"
          >
            Login
          </button>
        </div>
      </div>
    </div>
    <br /><br />
    <div class=" row">
      <div class="div-block-175 col-12 text-center">
        <h1 class="heading-98 text-success">
          © Wajesmart solutions, 2019.
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Verify",
  data () {
    return {
      key: {}
    };
  },
  mounted () {
    this.key = {
      key: this.$route.params.key
    };
  },

  methods: {
    verify: function () {
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
        what: "verify",
        data: this.key,
        useToken: false
      };

      this.$request
        .makePostRequest(req)
        .then(response => {
          this.$swal
            .fire({
              title: "Success",
              text: response.data.message,
              type: "success"
            })
            .then(function () {
              this.$router.push("Login");
            });
        })
        .catch(error => {
          //reject(error);
          console.log(error);
          this.$swal.fire("Error", error, "error");
        });
    }
  }
};
</script>

<style scoped>
* {
  outline: none;
}
.div-block-107-copy {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 67%;
  height: 400px;
  margin-top: 4%;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 50px;
  background-color: #fff;
  background-position: 50% 100%;
  background-size: cover;
  -webkit-box-shadow: 0 0 50px -5px rgba(0, 0, 0, 0.11);
  box-shadow: 0 0 50px -5px rgba(0, 0, 0, 0.11);
}
.heading-51 {
  font-size: 18px;
}
button {
  background: #28a745;
  padding: 10px 30px;
  border-radius: 16px;
  font-size: 15px;
  z-index: 1;
  font-size: inherit;
  font-family: inherit;
  color: white;
  outline: none;
  border: none;
}
button:hover {
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
