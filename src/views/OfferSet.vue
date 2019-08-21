<template>
  <div>
    <TopNav></TopNav>

    <div class="app-content content">
      <div class="content-wrapper d-flex">
        <!-- BEGIN: Main Menu-->
        <Menu></Menu>

        <!-- END: Main Menu-->
        <div class="content-body w-100 h-100">
          <div class="content-header  text-left">
            <h2 class="ml-2">Gift Vouchers</h2>
          </div>
          <br />
          <div class="row mx-auto">
            <div class="col-5">
              <div id="custom-search-input">
                <div class="input-group">
                  <input
                    type="text"
                    class="search-query form-control"
                    placeholder="Search for other programs"
                  />
                  <span class="input-group-btn">
                    <button type="button" disabled>
                      <span class="fa fa-search"></span>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div class="row container">
            <div class="box-wrapper m-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7PXHKcQNMqPi4F1lWF5niCEFaQhq1pXPFjB1I1zriAz9BglF"
                alt="gift image"
              />
              <div class="box-content">
                <a
                  class="buy"
                  href="javascript:void(0)"
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg"
                  ><span><i class="fa fa-gift"></i></span
                ></a>
                <div class="gift-title ">MIDAS TOUCH DRYCLEANERS</div>

                <span class="price mb-3">&#8358;2000</span>
              </div>
            </div>
            <div class="box-wrapper m-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7PXHKcQNMqPi4F1lWF5niCEFaQhq1pXPFjB1I1zriAz9BglF"
                alt="gift image"
              />
              <div class="box-content">
                <a
                  class="buy"
                  href="javascript:void(0)"
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg"
                  ><span><i class="fa fa-gift"></i></span
                ></a>
                <div class="gift-title ">MIDAS TOUCH DRYCLEANERS</div>

                <span class="price mb-3">&#8358;2000</span>
              </div>
            </div>
            <div class="box-wrapper m-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7PXHKcQNMqPi4F1lWF5niCEFaQhq1pXPFjB1I1zriAz9BglF"
                alt="gift image"
              />
              <div class="box-content">
                <a
                  class="buy"
                  href="javascript:void(0)"
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg"
                  ><span><i class="fa fa-gift"></i></span
                ></a>
                <div class="gift-title ">MIDAS TOUCH DRYCLEANERS</div>

                <span class="price mb-3">&#8358;2000</span>
              </div>
            </div>
            <div class="box-wrapper m-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7PXHKcQNMqPi4F1lWF5niCEFaQhq1pXPFjB1I1zriAz9BglF"
                alt="gift image"
              />
              <div class="box-content">
                <a
                  class="buy"
                  href="javascript:void(0)"
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg"
                  ><span><i class="fa fa-gift"></i></span
                ></a>
                <div class="gift-title ">MIDAS TOUCH DRYCLEANERS</div>

                <span class="price mb-3">&#8358;2000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Bottom> </Bottom>

    <!-- Modal -->
    <div
      class="modal fade bd-example-modal-lg"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Buy a Midas Touch Drycleaners Gift Card
            </h5>
            <button type="button" class="btn btn-danger" data-dismiss="modal">
              X
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="row">
                <div class="col-sm-6 col-xs-12">
                  <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-4 col-form-label"
                      >Recipient Email <span class="text-danger">*</span></label
                    >
                    <div class="col-sm-8">
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail3"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-4 col-form-label"
                      >Recipient Name<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-8">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-4 col-form-label"
                      >Recipient Mobile<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-8">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-4 col-form-label"
                      >Payment Type<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-8">
                      <input
                        type="text"
                        disabled
                        class="form-control"
                        placeholder="Card"
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-4 col-form-label"
                      >Gifter Name <span class="text-danger">*</span></label
                    >
                    <div class="col-sm-8">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-4 col-form-label"
                      >Gifter Email <span class="text-danger">*</span></label
                    >
                    <div class="col-sm-8">
                      <input type="email" class="form-control" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-4 col-form-label"
                      >Sending Option<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-8">
                      <select name="" id="" class="form-control">
                        <option selected value="">select option...</option>
                        <option value="">Via Email</option>
                        <option value="">Via Whatsapp</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 d-none d-sm-block">
                  <div class="box-wrapper ">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7PXHKcQNMqPi4F1lWF5niCEFaQhq1pXPFjB1I1zriAz9BglF"
                      alt="gift image"
                    />
                    <div class="box-content">
                      <a
                        class="buy"
                        href="javascript:void(0)"
                        data-toggle="modal"
                        data-target=".bd-example-modal-lg"
                        ><span><i class="fa fa-gift"></i></span
                      ></a>
                      <div class="gift-title ">MIDAS TOUCH DRYCLEANERS</div>

                      <span class="price mb-3">&#8358;2000</span>
                    </div>
                  </div>
                </div>

                <div class="col-12 form-group row">
                  <label for="inputPassword3" class="col-sm-2 col-form-label"
                    >Message</label
                  >
                  <div class="col-sm-10">
                    <textarea name="" rows="5" class="form-control"></textarea>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary">
              Proceed with Payment
            </button>
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
  name: "OfferSet",
  components: {
    TopNav,
    Menu,
    Bottom
  }
};
</script>

<style scoped>
.content-body {
  background: #fff;
  position: relative;
}
*,
*:hover,
*:focus {
  box-sizing: border-box;
  outline: 0;
}

#custom-search-input {
  margin: 0;
  margin-top: 10px;
  padding: 0;
}

#custom-search-input .search-query {
  width: 100%;
  padding-right: 3px;
  padding-left: 15px;
  /* IE7-8 doesn't have border-radius, so don't indent the padding */
  margin-bottom: 0;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 0;
}

#custom-search-input button {
  border: 0;
  background: none;
  /** belows styles are working good */
  padding: 2px 5px;
  margin-top: 2px;
  position: absolute;
  right: 0;
  /* IE7-8 doesn't have border-radius, so don't indent the padding */
  margin-bottom: 0;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  color: #28a745;
  cursor: unset;
  z-index: 2;
}

.search-query:focus {
  z-index: 0;
}

.box-wrapper {
  background-color: #fff;
  overflow: hidden;
  width: 212px;
  box-shadow: 0px 5px 43px rgba(0, 0, 0, 0.18);
  border-radius: 32px;
  padding: 0;
  text-align: center;
}
.box-wrapper img {
  max-width: 100%;
}

.gift-title {
  text-transform: uppercase;
  margin: 0;
  font-size: 14px;
}
.box-content {
  position: relative;
  z-index: 1;
}
.box-content:before {
  content: "";
  width: 200%;
  height: 100px;
  position: absolute;
  display: block;
  background-color: #fff;
  transform: rotate(-8deg);
  top: -50px;
  left: -10%;
  z-index: -1;
}
.box-content .buy {
  display: block;
  top: -80px;
  right: 30px;
  z-index: 2;
  width: 70px;
  height: 70px;
  position: absolute;
}
.box-content .buy span {
  width: 70px;
  height: 70px;
  background-color: #06aa46;
  display: block;
  border-radius: 50%;
  position: absolute;
  font-size: 36px;
  color: #fff;
  transition: all 0.3s ease;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
.box-content .buy span:hover {
  box-shadow: 1px 2px 8px 3px rgb(192, 192, 192);
}
.box-content .buy span i {
  padding: 15px;
}
.expanded .box-content .buy span {
  width: 750px;
  height: 750px;
}
.expanded .box-content .buy span i {
  display: none;
}
.box-content .price {
  font-size: 1.5em;
  font-weight: 900;
  display: block;
  width: 100px;
  margin: auto;
  position: relative;
  font-family: "Satisfy", cursive;
}
.box-content .price:after,
.box-content .price:before {
  content: "";
  height: 1px;
  width: 50px;
  display: block;
  position: absolute;
  background-color: #ddd;
  top: 18px;
}
.box-content .price:before {
  left: -50px;
}
.box-content .price:after {
  right: -50px;
}
.box-content .footer ul {
  list-style: none;
  padding: 0;
  margin: 1em 0;
}
.box-content .footer ul li {
  color: #efd829;
}
label {
  font-size: 12px !important;
}
button {
  z-index: 1;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: #06aa46;
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
footer {
  position: absolute;
  bottom: 0%;
  left: 42%;
  margin: auto;
  z-index: 2000;
}
</style>
