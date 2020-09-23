<template>
  <div id="box">
    <TopNav></TopNav>

    <div class="app-content content">
      <div class="content-wrapper d-flex">
        <!-- BEGIN: Main Menu-->
        <Menu></Menu>

        <!-- END: Main Menu-->
        <div
          class="content-body w-100 h-100"
          style="padding: 0 2%"
        >
          <!-- <div class="content-header  text-left">
            <h2 class="ml-2">My Profile</h2>
          </div> -->
          <div
            class="text-right mb-1"
            data-toggle="modal"
            data-target="#editModal"
          >
            <i
              class="fas fa-user-edit  border rounded-circle p-2 border-success"
              title="Edit profile"
            ></i>
          </div>
          <div class="d-flex ">
            <div
              class="card rounded container  p-0"
              style="width:40%"
            >
              <div class="card-content">
                <div>
                  <div
                    id="user-img"
                    class="rounded-circle"
                  >
                    <h1>
                      {{ initials }}
                    </h1>
                  </div>
                </div>

                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <h5 class="card-title">My profile</h5>
                    <!-- <span class="text-right">Last login: 2days ago</span> -->
                  </div>
                  <hr />
                  <p class="text-left">
                    <i class="fa fa-user"></i> {{capitalize( results.first_name) }}
                    {{ capitalize(results.last_name) }}
                  </p>
                  <hr />
                  <p class="text-left">
                    <i class="fa fa-phone"></i> {{ results.phone }}
                  </p>
                  <hr />
                  <p class="text-left">
                    <i class="fa fa-envelope"></i> {{ results.email }}
                  </p>
                  <!-- <hr />
                  <p class="text-left">
                    <i class="fa fa-map-marker"></i> Lagos, Nigeria
                  </p> -->
                </div>
              </div>
            </div>
            <div
              class="container pr-0"
              style="width:60%"
            >
              <div class="card rounded">
                <div class="card-header">
                  My e-Wallet <i class="fa fa-wallet"></i>
                </div>
                <div
                  class="card-body"
                  style=""
                >
                  <div class="d-flex justify-content-between">
                    <div>
                      <h1 class="title">&#8358;{{ formatPrice(user.total)  }}</h1>
                      <small class="text-success sub-title">Total Value Of Points Earned</small>
                    </div>

                    <div>
                      <h1 class="title">{{ user.loyalty_count }}</h1>
                      <small class="text-success sub-title">My Loyalty Programs</small>
                    </div>
                  </div>
                </div>

              </div>
              <div class="card rounded">

                <div
                  class="card-body"
                  style=""
                >
                  <div class="d-flex justify-content-between">

                    <div>
                      <h1 class="title">{{ user.points }}</h1>
                      <small class="text-success sub-title">Points Earned Shopping</small>
                    </div>
                    <div>
                      <h1 class="title">{{ user.extra}}</h1>
                      <small class="text-success sub-title">Points Earned Via Transfer</small>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card rounded">
                <div class="card-header">
                  Profile Management <i class="fa fa-cog"></i>
                </div>
                <div class="card-body table-responsive">
                  <p
                    data-toggle="modal"
                    data-target="#editModal"
                    class="text-left edit"
                  > Edit Profile</p>
                  <hr />
                  <!-- <p class="text-left"> Change Password</p> -->
                  <!-- <hr /> -->
                  <p class="text-left"> <a
                      href="/updatePin"
                      class="edit text-dark"
                    >Change Transaction Pin</a> </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Bottom></Bottom>
    <!-- modal -->
    <div
      class="modal fade"
      id="editModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title"
              id="exampleModalLabel"
            >Edit Profile</h5>
            <button
              type="button"
              class="btn btn-danger"
              data-dismiss="modal"
            >
              X
            </button>
          </div>
          <div class="modal-body">
            <form v-on:submit.prevent="updateUser">
              <!-- <div class="preview text-center">
                <img
                  class="preview-img"
                  src="../assets/images/profile.png"
                  alt="Preview Image"
                  width="250"
                  height="250"
                />
                <div class="browse-button">
                  <i class="fa fa-pencil-alt"></i>
                  <input
                    class="browse-input"
                    type="file"
                    required
                    name="UploadedFile"
                    id="UploadedFile"
                  />
                </div>
                <span class="Error"></span>
              </div> -->
              <div class="row">
                <div class="form-group col">
                  <label>First Name:</label>
                  <input
                    class="form-control"
                    type="text"
                    required
                    placeholder="Enter Your First Name"
                    v-model="update.first_name"
                  />
                  <span class="Error"></span>
                </div>
                <div class="form-group col">
                  <label>Last Name:</label>
                  <input
                    class="form-control"
                    type="text"
                    required
                    placeholder="Enter Your Last Name"
                    v-model="update.last_name"
                  />
                </div>
              </div>

              <button
                id="update"
                type="submit"
                class="btn btn-success"
              >
                Update
              </button>
            </form>
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
  name: "Profile",
  components: {
    TopNav,
    Menu,
    Bottom
  },
  data () {
    return {
      initials: "",
      results: {},
      user_log: [],
      user: {
        total: "0",
        loyalty_count: "0",
        extra: "0"
      },
      update: {
        first_name: "",
        last_name: ""
      }
    };
  },

  mounted () {
    this.results = this.$store.getters.user;
    this.initials =
      this.results.first_name.charAt(0).toUpperCase() +
      "" +
      this.results.last_name.charAt(0).toUpperCase();
    this.results.phone = this.results.phone.replace('234', '0');
    let user = this.$store.getters.profile;
    let total_point = 0;
    let points = 0;
    user.memberships.forEach(member => {
      total_point += parseInt(member.points * member.rate);
      points += parseInt(member.points);
    });
    this.user.total = (total_point + parseInt(user.extra_points)).toLocaleString();
    this.user.loyalty_count = user.memberships.length;
    this.user.points = points;
    this.user.extra = parseInt(user.extra_points).toLocaleString();

  },
  methods: {
    updateUser () {
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
        what: "updateUser",
        id: this.results.id,

        data: {
          first_name: this.update.first_name,
          last_name: this.update.last_name
        }
      };

      // console.log(req)
      this.$request
        .editItem(req)
        .then(response => {
          this.$store.dispatch("updateUsername", req.data);
          console.log(response);
          this.$swal.fire({
            title: 'Success!',
            html: response.data.message,
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
          this.$router.go()
        })
        .catch(error => {
          //reject(error);
          console.log(error);
          this.$swal.fire("Error", "error", "error");
        });
    },
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    formatPrice (price) {
      var str = price.toString().split(".");
      if (str[0].length >= 3) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
      }
      // if (!str[1]) {
      //   str[1] = "00";
      // }
      return str.join(".");
    },

  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
i {
  color: #06aa49;
}
#user-img {
  height: 150px;
  width: 150px;
  background: #f7f7f7;
  margin: 10px auto;
  padding: 39px 28px;
}
#user-img h1 {
  font-size: 4em;
  background: -webkit-linear-gradient(#6ff597, #06aa46);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.preview {
  padding: 10px;
  position: relative;
}

.preview i {
  color: white;
  font-size: 35px;
  transform: translate(50px, 130px);
}

.preview-img {
  border-radius: 100%;
  box-shadow: 0px 0px 5px 2px #dfdfdf;
}

.browse-button {
  width: 250px;
  height: 250px;
  border-radius: 100%;
  position: absolute;
  top: 10px;
  left: 110px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(transparent),
    to(#999)
  );
  background: linear-gradient(180deg, transparent, #999);
  opacity: 0;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;
}

.browse-button:hover {
  opacity: 1;
}

.browse-input {
  width: 200px;
  height: 200px;
  border-radius: 100%;
  transform: translate(-1px, -26px);
  opacity: 0;
}

.form-group {
  width: 250px;
  margin: 10px auto;
}

.form-group input {
  transition: 0.3s linear;
}

.form-group input:focus {
  border: 1px solid #498f1a;
  box-shadow: 0 0 0 0;
}
#update {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
}

#update:hover {
  cursor: pointer;
}

#update::before {
  content: "";
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 4px solid hsl(134, 61%, 41%);
  transform-origin: center;
  transform: scale(1);
}

#update:hover::before {
  transition: all 0.75s ease-in-out;
  transform-origin: center;
  transform: scale(1.75);
  opacity: 0;
}
.sub-title {
  font-size: 15px;
}
.edit:hover {
  color: #06aa46;
}
a.edit:hover {
  background: #06aa46;
  color: #fff;
}
</style>
