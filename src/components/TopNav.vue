<template>
  <div class="page-header container-fluid">
    <nav class="navbar navbar-expand navbar-light bg-transparent h-100">
      <a
        class="navbar-brand w-50"
        href="/dashboard"
      >
        <img
          id="logo"
          src="../assets/images/logo.png"
          alt="WALEXX"
          class="img-responsive "
        /></a>
      <div class="w-50 ml-5">
        <ul class="navbar-nav pt-1">
          <li class="nav-item dropdown ">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            ><i class="fa fa-bell"></i>
              <span class="badge">0</span>
            </a>
            <div
              class="dropdown-menu notification"
              aria-labelledby="navbarDropdown"
            >
              <div class="card">
                <div class="card-body bg-transparent">
                  <ul class="list-unstyled">
                    <li class="media p-2">
                      <div class="media-body">
                        <h5 class="mt-0 mb-1">List-based media object</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus odio.
                      </div>
                    </li>
                    <li class="media my-4 p-2">
                      <div class="media-body">
                        <h5 class="mt-0 mb-1">List-based media object</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus odio.
                      </div>
                    </li>
                    <li class="media p-2">
                      <div class="media-body">
                        <h5 class="mt-0 mb-1">List-based media object</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus odio.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="/profile"
            >
              <div
                id="prof-img"
                class="rounded-circle"
              >
                <h4>
                  {{ initials }}
                </h4>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script scoped>
export default {
  name: "TopNav",
  data () {
    return {
      initials: "",
      results: {}
    };
  },
  mounted () {
    this.results = this.$store.getters.user;
    this.initials =
      this.results.first_name.charAt(0).toUpperCase() +
      "" +
      this.results.last_name.charAt(0).toUpperCase();
  }
};
</script>

<style scoped>
* {
  outline: none;
}
a,
i,
a:hover {
  border: none;
  font-size: 1.25em;
}
.page-header {
  height: 60px;
}
nav .navbar-brand {
  margin-left: 38%;
}
@media (max-width: 768px) {
  /* .navbar ul li:first-of-type {
    margin-left: 70%;
  } */
}
#prof-img {
  height: 42px;
  width: 42px;
  background: #f7f7f7;
  /* margin: 10px auto; */
  padding: 7px 0px;
}
#prof-img h4 {
  /* font-size: 4em; */
  background: -webkit-linear-gradient(#6ff597, #06aa46);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.dropdown i {
  font-size: 1.35em;
  line-height: 52px;
}
.navbar ul.navbar-nav li a {
  text-decoration: none;
  /* padding: 15px 26px; */
  position: relative;
  display: inline-block;
  border-radius: 2px;
}
#logo {
  margin-left: 11%;
  width: 160px;
}
.navbar ul.navbar-nav li a:hover {
  background: transparent;
}

.navbar ul.navbar-nav li a .badge {
  position: absolute;
  top: 2px;
  right: -37px;
  border-radius: 50%;
  background-color: orangered;
  color: white;
}

.navbar ul.navbar-nav li .dropdown-toggle::after {
  display: none;
}
.navbar ul.navbar-nav li a {
  font-weight: bold;
}

.navbar ul.navbar-nav li .dropdown-toggle::after {
  display: none;
}
.navbar ul.navbar-nav li .notification {
  width: 320px;
  right: 0px;
  left: -100px;
  margin-top: 5px;
}

.navbar ul.navbar-nav li .notification .card {
  border: 0px;
}
.navbar ul.navbar-nav li .notification .card .card-header {
  text-transform: uppercase;
}
.navbar ul.navbar-nav li .dropdown-menu .card .card-body .media {
  -webkit-transition: background-color 1.5s ease-out;
  -moz-transition: background-color 1.5s ease-out;
  -o-transition: background-color 1.5s ease-out;
  transition: background-color 1.5s ease-out;
}
.navbar ul.navbar-nav li .dropdown-menu .card .card-body .media:hover {
  background-color: #dfdfdf;
  /* color: #fff; */
  border-radius: 7px;
}
.navbar ul.navbar-nav li .notification .card .card-body .media img {
  border-radius: 50%;
  width: 50px;
}
.navbar ul.navbar-nav li .notification .card .card-body .media .media-body {
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.navbar ul.navbar-nav li .notification .card .card-body .media .media-body h5 {
  font-size: 15px;
}
.navbar ul.navbar-nav li.active a {
  color: #fff;
}

.navbar ul.navbar-nav li .dropdown-menu .card {
  border: 0px;
}
</style>
