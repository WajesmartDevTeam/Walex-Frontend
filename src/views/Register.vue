<template>
  <div>
    <div class="header">
      <div class="div-block-174">
        <img
          src="../assets/images/logo.png"
          class="img-responsive img-fluid w-25"
          alt="WALEXX"
        />
      </div>
    </div>

    <div class="section-20">
      <div class="div-block-107-copy ">
        <div class="div-block-108-copy">
          <h1 class="heading-51 mb-3">
            <span class="text-span-5">Signup </span>here.
          </h1>
          <div class="formbox-copy ">
            <div class="html-embed-3 w-embed">
              <form
                v-on:submit.prevent="ValidateForm"
                style="width: 100%;"
                class="text-left"
              >
                <div class="d-flex">
                  <label class="">First Name:</label>
                  <input
                    type="text"
                    placeholder=""
                    name="firstName"
                    id="firstName"
                    class="inputboxes"
                    required
                    v-model="new_user.first_name"
                  />
                </div>

                <div class="d-flex">
                  <label>Last Name:</label>
                  <input
                    type="text"
                    placeholder=""
                    name="lastName"
                    id="lastName"
                    class="inputboxes"
                    required
                    v-model="new_user.last_name"
                  />
                </div>

                <div class="d-flex">
                  <label>Email:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type="email"
                    placeholder=""
                    name="email"
                    id="email"
                    class="inputboxes"
                    required
                    v-model="new_user.email"
                  />
                </div>
                <div class="d-flex justify-content-around">
                  <label>Phone No:</label>&nbsp;&nbsp;&nbsp;
                  <div class="">
                    <select
                      v-model="country_code"
                      class="inputboxes"
                    >
                      <option v-for="country in countries">{{
                        country.code
                      }}</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    placeholder="e.g 8012345678"
                    name="phone"
                    id="phone"
                    class="inputboxes"
                    required
                    v-model="new_user.phone"
                  />
                </div>
                <span
                  class="text-danger"
                  v-if="errors.has('password')"
                >
                  {{ errors.first("password") }}
                </span>

                <div class="d-flex">
                  <label>Password:</label>
                  <input
                    v-validate="'required|min:6|verify_password'"
                    type="password"
                    placeholder=""
                    name="password"
                    id="password"
                    class="inputboxes"
                    required
                    v-model="new_user.password"
                    ref="password"
                  />
                </div>
                <span
                  class="text-danger"
                  v-if="errors.has('passwordConfirm')"
                >
                  {{ errors.first("passwordConfirm") }}
                </span>
                <div class="d-flex">
                  <label>Confirm Password:</label>
                  <input
                    type="password"
                    placeholder=""
                    name="passwordConfirm"
                    id="passwordConfirm"
                    class="inputboxes"
                    required
                    v-validate="'confirmed:password'"
                    data-vv-as="password confirmation"
                  />
                </div>

                <div class="d-flex">
                  <input
                    type="checkbox"
                    name="accepted"
                    value="accepted"
                    required
                    v-validate="'required'"
                  /><span id="iAgree">I agree to the WALEXX User Agreement and Privacy
                    Policy</span>
                </div>
                <br />
                <div class="row">
                  <button
                    type="submit"
                    id="submitButton"
                    class="float-left col-4 "
                  >
                    Sign up
                  </button>
                  <span class="login col-8 mt-3">
                    Already have an account?
                    <span style="font-weight: 600"><a
                        class="text-success text-bold"
                        href="/"
                      >Log in</a></span>.
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" row">
      <div class="div-block-175 col-12 text-center">
        <h1 class="heading-98 text-success">
          © Wajesmart solutions, 2019.<a href="http://uconixstudio.com/"></a>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import Countries from "../countries";

export default {
  name: "Register",
  data () {
    return {
      countries: Countries.countries,
      country_code: "234",
      new_user: {
        phone: "",
        email: "",
        password: "",
        first_name: "",
        last_name: ""
      }
    };
  },

  methods: {
    ValidateForm () {
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
      this.$validator.validateAll().then(res => {
        if (res) {
          this.createUser();
        } else {
          this.$swal.fire("Error", "Please correct all error!", "error");
        }
      });
    },
    createUser: function () {
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

      this.new_user.phone = this.country_code + "" + this.new_user.phone;

      var req = {
        what: "signup",
        data: this.new_user,
        useToken: false
      };

      this.$request
        .makePostRequest(req)
        .then(response => {
          console.log(response);
          this.$swal.fire("Success", response.data.message, "success");
          var _this = this;
          _this.$router.push({ name: "login" });
        })
        .catch(error => {
          console.log(error)
          this.$swal.fire("Error", error, "error");
        });
    }
  }
};
</script>

<style scoped>
.footer {
  margin-top: 20px;
  position: absolute;
  bottom: 0;
  left: 42%;
  text-align: center;
  margin: auto;
}
* {
  outline: none;
}
label {
  font-family: Quicksand;
  font-size: 13px;
  color: black;
}
.login {
  font-size: 12px;
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
  padding: 2% 0;
  color: black;
}
#submitButton:hover {
  background-color: #28a745;
  color: #fff;
}
font-siz .register {
  color: black;
  font-size: 12px;
  text-decoration: underline;
  position: relative;
  top: -15px;
  font-family: Quicksand;
}

.aninput2 {
  float: left;
  margin-left: 40px;
}
.inputboxes {
  width: 100%;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 2px solid #eeeeee;
  /* padding-left: 15px; */
  height: 30px;
  margin: 0px 0px 30px 0px;
  float: left;
}
.inputboxes2 {
  width: 100%;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 2px solid #eeeeee;
  padding-left: 15px;
  height: 30px;
  margin: 0px 0px 35px 0px;
  float: left;
}
.uploadButton {
  border: 2px solid #eeeeee;
  border-radius: 25px;
  background-color: transparent;
  font-size: 15px;
  color: gray;
  width: 115px;
  padding: 10px;
  font-weight: 300;
  height: 30px;
  display: table;
  margin-top: 10px;
  cursor: pointer;
  margin-bottom: 40px;
}
#iAgree {
  font-size: 13px;
  margin-top: 10px;
}
.bigTitleForm {
  font-size: 25px;
  font-weight: 500;
  margin: 0px 0px 70px 0px;
  position: relative;
  top: 30px;
  z-index: -1;
}
.pinSubmitBox {
  height: 40px;
  width: 170px;
  background: black;
  color: white;
  margin-left: 30px;
  float: left;
  border-radius: 50px;
  border: none;
}
#register {
  padding: 15px 30px 15px 30px;
  background-color: black;
  color: white;
  border-radius: 30px;
  font-size: 20px;
  margin: 15px 0px 15px 0px;
}
/*  input[type="file"] {
    display: none;
 }
 */
input[type="checkbox"] {
  margin-right: 10px;
  margin-top: 10px;
}

@media (max-width: 479px) {
  .inputboxes {
    width: 300px;
  }
}
</style>
