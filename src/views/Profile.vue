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
                    <i class="fa fa-user"></i> {{ results.first_name }}
                    {{ results.last_name }}
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
                  My e-Wallet
                </div>
                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <div>
                      <h2>&#8358;{{ user.total.toLocaleString() }}</h2>
                      Balance
                    </div>
                    <div>
                      <h2>&#8358;{{ user.extra }}</h2>
                      Extra
                    </div>
                    <div>
                      <h2>{{ user.loyalty_count }}</h2>
                      Merchants
                    </div>
                  </div>
                </div>
              </div>

              <div class="card rounded">
                <div class="card-header">
                  My Recent Activities
                </div>
                <div class="card-body table-responsive">
                  <table class="table table-sm">
                    <thead>
                      <tr>
                        <th
                          class="border-0"
                          scope="col"
                        >Action</th>
                        <th
                          class="border-0"
                          scope="col"
                        >Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(item, index) in user_log"
                        v-bind:key="index"
                      >
                        <td class="text-left">{{item.description }}</td>
                        <td class="text-left">{{item.created_at}}</td>
                      </tr>

                    </tbody>
                  </table>
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
    let user = this.$store.getters.profile;
    let total_point = 0;
    user.memberships.forEach(member => {
      total_point += parseInt(member.points * member.rate);
    });
    this.user.total = total_point.toLocaleString();
    this.user.loyalty_count = user.memberships.length;
    this.user.extra = parseInt(user.extra_points).toLocaleString();
    this.getLogs();
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
        width: "400px",
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

      this.$request
        .editItem(req)
        .then(response => {
          console.log(response);
          this.$swal.fire("Success", response, "success");
        })
        .catch(error => {
          //reject(error);
          console.log(error);
          this.$swal.fire("Error", "error", "error");
        });
    },
    getLogs () {
      var req = {
        what: "user_log",
        params: {
          user_id: this.results.id
        }
      };
      this.$request
        .makeGetRequest(req)
        .then(response => {
          response.data.data.forEach(i => {
            var d = new Date(i.created_at);
            var n = d.toUTCString();
            i.created_at = this.timeSince(new Date(n));
          })
          this.user_log = response.data.data
        })
        .catch(error => {
          this.$swal.fire("Error", error.message, "error");
        });
    },
    timeSince (time) {

      switch (typeof time) {
        case 'number':
          break;
        case 'string':
          time = +new Date(time);
          break;
        case 'object':
          if (time.constructor === Date) time = time.getTime();
          break;
        default:
          time = +new Date();
      }
      var time_formats = [
        [60, 'seconds', 1], // 60
        [120, '1 minute ago', '1 minute from now'], // 60*2
        [3600, 'minutes', 60], // 60*60, 60
        [7200, '1 hour ago', '1 hour from now'], // 60*60*2
        [86400, 'hours', 3600], // 60*60*24, 60*60
        [172800, 'Yesterday', 'Tomorrow'], // 60*60*24*2
        [604800, 'days', 86400], // 60*60*24*7, 60*60*24
        [1209600, 'Last week', 'Next week'], // 60*60*24*7*4*2
        [2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
        [4838400, 'Last month', 'Next month'], // 60*60*24*7*4*2
        [29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
        [58060800, 'Last year', 'Next year'], // 60*60*24*7*4*12*2
        [2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
        [5806080000, 'Last century', 'Next century'], // 60*60*24*7*4*12*100*2
        [58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
      ];
      var seconds = (+new Date() - time) / 1000,
        token = 'ago',
        list_choice = 1;

      if (seconds == 0) {
        return 'Just now'
      }
      if (seconds < 0) {
        seconds = Math.abs(seconds);
        token = 'from now';
        list_choice = 2;
      }
      var i = 0,
        format;
      while (format = time_formats[i++])
        if (seconds < format[0]) {
          if (typeof format[2] == 'string')
            return format[list_choice];
          else
            return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
        }
      return time;
    }
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
#box {
  background-image: url("../assets/images/profile_bg.png");
  background-position: 50% 100%;
  background-size: cover;
}
</style>
