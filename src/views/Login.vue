<template>
  <div>
    <div class="header">
      <div class="div-block-174">
        <img
          src="../assets/images/logo.png"
          alt="WALEXX"
          class="w-25"
        />
      </div>
    </div>

    <div class="section-20">
      <div class="div-block-107 ">
        <div class="div-block-108">
          <h1 class="heading-51">
            <span class="text-span-5">Login </span>with your unique ID.
          </h1>
          <div class="html-embed-3 w-embed">
            <form
              style="width: 100%;"
              v-on:submit.prevent="login"
            >
              <input
                type="text"
                placeholder="Enter your unique ID"
                name="phone"
                id="phone"
                class="inputboxesHome"
                v-model="credentials.username"
              />
              <!-- <input
                type="email"
                placeholder="Enter your email address"
                name="loginemail"
                id="loginemail"
                class="inputboxesHome"
              /> -->
              <input
                type="password"
                placeholder="Enter your password"
                name="psw"
                id="psw"
                class="inputboxesHome"
                v-model="credentials.password"
              />
              <br />
              <a
                href="#"
                class="float-left register"
                data-toggle="modal"
                data-target="#forgotPass"
              >
                Forgot Password?
              </a>
              <br />
              <br />
              <a
                href="register"
                class="register"
              >
                New to Loyalty system? Sign up here
              </a>
              <br />
              <br />
              <button
                type="submit"
                id="submitButton"
                class="float-left "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="footer row">
      <div class="div-block-175 col-12 text-center">
        <h1 class="heading-98 text-success">
          © Wajesmart solutions, 2019.<a href="http://uconixstudio.com/"></a>
        </h1>
      </div>
    </div>
    <!-- Modal -->
    <div
      id="forgotPass"
      class="modal fade "
      tabindex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog ">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title"
              id="exampleModalLabel"
            >
              Forgot Password
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
            <form v-on:submit.prevent="reset">
              <div class="form-group">
                <label
                  for="inputEmail3"
                  class="form-label"
                >Enter your Email Address</label>
                <input
                  v-model="email"
                  type="email"
                  class="form-control"
                  id="inputEmail3"
                  placeholder="Email"
                  required
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-success"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data () {
    return {
      email: "",
      credentials: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login: function () {
      var html =
        '<img src="https://thumbs.gfycat.com/AchingSpeedyArmyworm-size_restricted.gif" />';


      //https://thumbs.gfycat.com/AchingSpeedyArmyworm-size_restricted.gif
      this.$swal.fire({
        title: "Processing",
        html: html,
        showConfirmButton: false,
        showCancelButton: false,
        width: "400px",
        allowOutsideClick: false
      });
      if (this.credentials.username.charAt(0) == "+") {
        this.credentials.username = this.credentials.username.slice(1);
      }
      //console.log(this.credentials.username)
      this.$store
        .dispatch("login", this.credentials)
        .then(response => {
          if (this.$store.getters.isLoggedIn) {
            // this.$swal
            //   .fire("Success", "Welcome To WALEXX", "success")
            //   .then(() => {
            //     var _this = this;
            //     _this.$router.push({ name: "dashboard" });
            //   });
            var html = '<img src="https://thumbs.gfycat.com/InfamousJollyArrowcrab-size_restricted.gif"/>'
            this.$swal.fire({
              title: 'Welcome To WALEXX',
              html: html,
              showConfirmButton: false,
              showCancelButton: false,
              timer: 3000,
              onClose: () => {
                var _this = this;
                _this.$router.push({ name: "dashboard" });
              }
            });
          }
        })
        .catch(error => {
          console.log(error)
          this.$swal.fire("Error", error.message, "error");
        });
    },
    reset: function () {
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
        what: "reset",
        data: this.email
      };

      this.$request
        .makePostRequest(req)
        .then(response => {
          console.log(response);
          this.$swal.fire("Success", response, "success");
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
label {
  font-family: Quicksand;
  font-size: 15px;
  color: black;
}
.footer {
  margin-top: 20px;
  position: absolute;
  bottom: 0;
  left: 42%;
  text-align: center;
  margin: auto;
}
.inputboxesHome {
  width: 350px;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 1px solid black;
  height: 50px;
  margin: 0px 0px 20px 0px;
  background-color: transparent;
}

.inputboxesHome::placeholder {
  color: black;
  font-size: 12px;
  font-family: Quicksand;
}

#submitButton {
  background-color: transparent;
  border: 2px solid #28a745;
  border-radius: 20px;
  padding: 10px 20px 10px 20px;
  font-size: 16px;
  color: black;
}
#submitButton:hover {
  background-color: #28a745;
  color: #fff;
}
.register {
  color: black;
  font-size: 12px;
  text-decoration: underline;
  position: relative;
  top: -15px;
  font-family: Quicksand;
}

@media (max-width: 991px) {
  .inputboxesHome {
    width: 270px;
  }

  textarea {
    width: 270px;
  }
}

@media (max-width: 767px) {
  .inputboxesHome {
    width: 220px;
  }
}

@media (max-width: 479px) {
  .inputboxesHome {
    width: 190px;
  }
}
</style>
