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
          <h1 class="heading-51 text-center">
            <span class="text-span-5">Login </span>with your unique ID. <br>
            <small>(mobile number)</small>
          </h1>

          <div class="html-embed-3 w-embed ">
            <form
              style="width: 100%;"
              v-on:submit.prevent="login"
            >
              <div class="d-flex inputboxesHome">
                <select
                  style="width:32%"
                  v-model="country_code"
                  class="inputboxesHome"
                >
                  <option
                    v-for="(country,index) in countries"
                    v-bind:key="index"
                    :title="country.name"
                  >{{
                        country.dial_code
                      }}</option>
                </select>
                <input
                  type="text"
                  placeholder="Enter your unique ID (e.g 080xxxxxxxxxx)"
                  name="phone"
                  id="phone"
                  class="inputboxesHome"
                  v-model="credentials.username"
                  v-validate="'required|length:11|numeric'"
                  data-vv-as="Unique id"
                  required
                />
              </div>
              <p
                class="text-danger err"
                v-if="errors.has('phone')"
              >*{{errors.first('phone')}}</p>
              <div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="psw"
                  id="psw"
                  class="inputboxesHome"
                  v-model="credentials.password"
                  v-validate="'required'"
                  data-vv-as="password"
                  required
                />
              </div>

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
              <a
                href="register"
                class=" float-left register"
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
          © Waje Smart Solutions, 2020.<a href="http://uconixstudio.com/"></a>
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
              <button
                type="submit"
                class="btn btn-success"
              >
                Send
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Countries from "../countries";
export default {
  name: "Login",
  data () {
    return {
      countries: Countries.countries,
      country_code: "+234",
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
        width: "350px",
        allowOutsideClick: false
      });

      if (this.credentials.username[0] == '0') {
        this.credentials.username = this.credentials.username.substring(1)
      }
      this.credentials.username = this.country_code.substring(1) + "" + this.credentials.username;
      // console.log(this.credentials.username)
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
            // this.$swal.fire({
            //   title: 'Welcome To WALEXX',
            //   html: html,
            //   showConfirmButton: false,
            //   showCancelButton: false,
            //   timer: 3000,
            //   onClose: () => {
            //     var _this = this;
            //     _this.$router.push({ name: "dashboard" });
            //   }
            // });

            this.$swal.fire({
              title: 'Welcome To WALEXX',
              html: html,
              type: "success",
              timer: 5000,
              onBeforeOpen: () => {
                this.$swal.showLoading()
              },
              onClose: () => {
                clearInterval(setInterval(() => {
                  const content = this.$swal.getContent()
                  if (content) {
                    const b = content.querySelector('b')
                    if (b) {
                      b.textContent = this.$swal.getTimerLeft()
                    }
                  }
                }, 100));
                var _this = this;
                _this.$router.push({ name: "dashboard" });
              }
            })
          }
        })
        .catch(error => {
          console.log(error)
          this.$swal.fire("Error", error, "error");
          this.credentials.username = "";
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
        width: "350px",
        allowOutsideClick: false
      });
      var req = {
        what: "reset",
        useToken: false,
        data: {
          email: this.email
        }
      };
      console.log(req)
      this.$request
        .makePostRequest(req)
        .then(response => {
          console.log(response);
          this.$swal.fire({
            title: 'Success!',
            html: "Please check your mail box for your password reset link.",
            type: "success",
            timer: 8000,
            onBeforeOpen: () => {
              this.$swal.showLoading()
            },
            onClose: () => {
              clearInterval(setInterval(() => {
                const content = this.$swal.getContent()
                if (content) {
                  const b = content.querySelector('b')
                  if (b) {
                    b.textContent = this.$swal.getTimerLeft()
                  }
                }
              }, 100))
            }
          })
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
  width: 100%;
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
.err {
  font-size: 10px;
  margin-top: -22px;
  /* margin-left: 35%; */
}
</style>
