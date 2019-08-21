import Vue from "vue";
export default {
  name: "Request",

  makeGetRequest: request => {
    console.log(
      "%cSending get request: ",
      "color:#fff;font-size:14px;background:#00ff00;"
    );

    return new Promise((resolve, reject) => {
      if (request.useToken || request.useToken == undefined) {
        var token = request.useToken;

        request.headers = {
          Authorization: "Token " + token
        };
      }

      Vue.prototype.$socket.emit("makeGetRequest", request);
      Vue.prototype.$socket.once("makeGetRequestResponse", response => {
        //console.log(response)
        if (response.status == "true") {
          resolve(response);
        } else {
          reject(response);
        }
      });
    });
  },
  makePostRequest: request => {
    console.log(
      "%cSending post request: ",
      "color:#fff;font-size:14px;background:#00ff00;"
    );

    return new Promise((resolve, reject) => {
      Vue.prototype.$socket.emit("makePostRequest", request);
      Vue.prototype.$socket.once("makePostRequestResponse", response => {
        // if (response.status == "true") {
        //   resolve(response);
        //   console.log(response);
        // } else {
        //   reject(response);
        // }

        resolve(response);
      });
    });
  }
};
