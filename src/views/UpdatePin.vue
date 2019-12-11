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
            Update Transaction Pin
          </h3>
          <h1 class="heading-51">
            To Perform any Transaction, You have to update your transaction Pin.
          </h1>

          <form v-on:submit.prevent="updatePin">
            <input
              type="text"
              placeholder="Enter your pin"
              name="phone"
              id="phone"
              class="inputboxesHome"
              v-model="credentials.transactioncode"
            />

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
  name: "UpdatePin",
  data () {
    return {
      credentials: {
        transactioncode: ""
      }
    };
  },

  methods: {
    updatePin: function () {
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


      this.$store
        .dispatch("updatePin", this.credentials)
        .then(response => {
          console.log(response)
          this.$swal
            .fire("Success", response, "success")
            .then(() => {
              var _this = this;
              _this.$router.push({ name: "dashboard" });
            });

        })
        .catch(error => {
          console.log(error)
          this.$swal.fire("Error", error.message, "error");
        });
    },
  }
};
</script>

<style scoped>
* {
  outline: none;
}
.footer {
  margin-top: 20px;
  position: absolute;
  bottom: 0;
  left: 42%;
  text-align: center;
  margin: auto;
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

* {
  outline: none;
}
label {
  font-family: Quicksand;
  font-size: 15px;
  color: black;
}
.footer {
  position: absolute;
  bottom: 0%;
  left: 42%;
  margin: auto;
  z-index: 2000;
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


