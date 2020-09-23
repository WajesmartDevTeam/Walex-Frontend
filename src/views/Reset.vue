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
            Reset Your Password
          </h3>
          <form
            style="width: 100%;"
            v-on:submit.prevent="reset"
          >

            <input
              :type="type"
              placeholder="Enter new password"
              name="p1"
              id="p1"
              class="inputboxesHome"
              v-model="credentials.new_password1"
              v-validate="'required'"
              data-vv-as="Password"
              ref="password"
              required
            /> <i
              v-if="type=='text'"
              title="hide"
              @click="showPassword"
              class="fa fa-eye-slash"
            ></i>
            <i
              @click="showPassword"
              v-if="type == 'password'"
              title="show"
              class="fa fa-eye"
            ></i>
            <p
              class="text-danger"
              v-if="errors.has('p1')"
            >*{{errors.first('p1')}}</p>
            <br>
            <input
              :type="type2"
              placeholder="Confirm password"
              name="psw"
              id="psw"
              class="inputboxesHome"
              v-model="credentials.new_password2"
              v-validate="'required|confirmed:password'"
              data-vv-as=" confirm password"
              required
            /> <i
              v-if="type2=='text'"
              title="hide"
              @click="showPassword2"
              class="fa fa-eye-slash"
            ></i>
            <i
              @click="showPassword2"
              title="show"
              v-if="type2 == 'password'"
              class="fa fa-eye"
            ></i>
            <p
              class="text-danger"
              v-if="errors.has('psw')"
            >*{{errors.first('psw')}}</p>
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
    <br /><br />
    <div class=" row">
      <div class="div-block-175 col-12 text-center">
        <h1 class="heading-98 text-success">
          © Waje Smart Solutions, 2020.
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reset",
  data () {
    return {
      key: {},
      type: 'password',
      type2: 'password',
      credentials: {
        "new_password1": "",
        "new_password2": "",
        "uid": "",
        "token": ""
      },
    };
  },
  mounted () {
    this.credentials.uid = this.$route.params.uid;
    this.credentials.token = this.$route.params.token;
  },

  methods: {
    reset: function () {
      // console.log(this.errors)
      if (this.errors.items.length == 0) {
        var html = '<img src="https://thumbs.gfycat.com/AchingSpeedyArmyworm-size_restricted.gif" />';
        this.$swal.fire({
          title: "Processing",
          html: html,
          showConfirmButton: false,
          showCancelButton: false,
          width: "350px",
          allowOutsideClick: false
        });
        var req = {
          what: "confirmPassword",
          data: this.credentials,
          useToken: false
        };
        let that = this;
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
                that.$router.push({ path: '/' })
              });
          })
          .catch(error => {
            //reject(error);
            console.log(error);
            this.$swal.fire("Error", error, "error");
          });


      }
    },
    showPassword () {
      if (this.type === 'password') {
        this.type = 'text'
      } else {
        this.type = 'password'
      }
    },
    showPassword2 () {
      if (this.type2 === 'password') {
        this.type2 = 'text'
      } else {
        this.type2 = 'password'
      }
    },
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
i {
  position: absolute;
  margin-left: -41px;
  margin-top: 20px;
}
.inputboxesHome {
  width: 222px;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 1px solid black;
  height: 50px;
  margin: 0px 0px 20px 0px;
  background-color: transparent;
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
  margin-left: 22%;
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
