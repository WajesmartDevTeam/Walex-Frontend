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
              class="fas fa-user-edit text-white border rounded-circle p-2 border-white"
              title="Edit profile"
            ></i>
          </div>
          <div class="d-flex ">
            <div class="card rounded container w-50 p-0">
              <div class="card-content">
                <div>
                  <div
                    id="user-img"
                    class="rounded-circle"
                  >
                    <h1> {{ results.first_name.charAt(0).toUpperCase() }}{{ results.last_name.charAt(0).toUpperCase() }}</h1>
                  </div>
                </div>

                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <h5 class="card-title">My profile</h5>
                    <span class="text-right">Last login: 2days ago</span>
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
            <div class="container w-50">
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
                      Bonus
                    </div>
                    <div>
                      <h2>{{ user.loyalty_count }}</h2>
                      merchants
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
                    <tbody></tbody>
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
            <form>
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
                    name="fname"
                    required
                    placeholder="Enter Your First Name"
                  />
                  <span class="Error"></span>
                </div>
                <div class="form-group col">
                  <label>Last Name:</label>
                  <input
                    class="form-control"
                    type="text"
                    name="lname"
                    required
                    placeholder="Enter Your Last Name"
                  />
                  <span class="Error"></span>
                </div>
              </div>
              <div class="row">
                <div class="form-group col">
                  <label>Email:</label>
                  <input
                    class="form-control"
                    type="email"
                    name="email"
                    required
                    placeholder="Enter Your Email"
                  />
                  <span class="Error"></span>
                </div>
                <div class="form-group col">
                  <label>Phone Number:</label>
                  <input
                    class="form-control"
                    type="text"
                    name="phone"
                    required
                  />
                  <span class="Error"></span>
                </div>
              </div>
             

              <button
                id="update"
                type="button"
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
      results: {},
      user: {
        total: "",
        loyalty_count: "",
        extra: ""
      }
    };
  },

  mounted () {
    this.results = this.$store.getters.user;
    let user = this.$store.getters.profile;
    let total_point = 0;
    user.memberships.forEach(member => {
      total_point += parseInt(member.points * member.rate);
    });
    this.user.total = total_point.toLocaleString();
    this.user.loyalty_count = user.memberships.length;
    this.user.extra = parseInt(user.extra_points).toLocaleString();
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
