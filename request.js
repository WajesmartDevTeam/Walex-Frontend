import axios from 'axios'
import Vue from 'vue'
import store from './store'


const URL = 'http://199.192.28.167/API/'

export default{
	name: 'Request',

	makeGetRequest: (request)=>{

		console.log('%cSending get request: ', 'color:#fff;font-size:14px;background:#00ff00;')
		
		return new Promise((resolve, reject)=>{

			if(request.useToken || request.useToken == undefined){
				var token = store.getters.token
				request.headers = {
					'Authorization': 'Bearer ' + token
				}
			}

			console.log(request)

			Vue.prototype.$socket.emit('makeGetRequest', request)
			Vue.prototype.$socket.once('makeGetRequestResponse', (response)=>{

				//console.log(response)
				if(response.status == 'true'){
					resolve(response)

				} else {
					reject(response)
				}
			})
		})
	},

	makePostRequest: (request)=>{

		console.log('%cSending post request: ', 'color:#fff;font-size:14px;background:#00ff00;')

		return new Promise((resolve, reject)=>{

			if(request.useToken || request.useToken == undefined){
				var token = store.getters.token
				request.headers = {
					'Authorization': 'Bearer ' + token
				}
			}

			Vue.prototype.$socket.emit('makePostRequest', request)
			Vue.prototype.$socket.once('makePostRequestResponse', (response)=>{
					
				if(response.status == 'true'){
					resolve(response)
					console.log(response)
				} else {
					reject(response)
				}
			})
		})
			
	},

	editItem: (request)=>{

		console.log('%cSending put request: ', 'color:#fff;font-size:14px;background:#00ff00;')

		return new Promise((resolve, reject)=>{

			if(request.useToken || request.useToken == undefined){
				var token = store.getters.token
				request.headers = {
					'Authorization': 'Bearer ' + token
				}
			}

			Vue.prototype.$socket.emit('editItem', request)
			Vue.prototype.$socket.once('editItemResponse', (response)=>{
					
				if(response.status == 'true'){
					resolve(response)

				} else {
					console.log(response)
					reject(response)
				}
			})
		})
			
	},

	htmltoimg: (html)=>{
		

		return new Promise((resolve, reject)=>{

			var api_key = '1c604c8c-21fb-43b3-8ddc-90659f533ef5'
			var url = "http://api.html2pdfrocket.com/pdf"
			var data = "apikey=" + api_key + "&OutputFormat=jpg&value=" + encodeURIComponent(html);

			var config = {
				headers: {
					'Content-type': 'application/x-www-form-urlencoded'
				},
				responseType: 'blob'
			}

			console.log('Posting to: ' + url)
			
			axios.post(url, data, config)
				.then((response)=>{
					resolve(response.data)
				})
				.catch((error)=>{
					reject(error)
				})
		})
			
	},

	deleteItem: (request)=>{
		var request_urls = {
			
		}

		var request_url = URL + request_urls[request.what] + "/" + request.id
		console.log('%cDeleting: ' + request_url, 'color:#fff;font-size:14px;background:#ff0000;')

		return new Promise((resolve, reject)=>{
			axios.delete(request_url)
				.then((response)=>{
					
					if(response.data.status == 'True' || response.data.status == true || response.data.status == 'true'){

						response = {
							type: request.what,
							status: 'true'
						}

						resolve(response)

					} else {
						reject(response)
					}
				})
				.catch((err)=>{
					reject(err)
				})
		})
	},

	getAccountNameRequest: (account_number, bankcode)=>{

		var config = {
			headers: { 'Authorization': 'Bearer sk_live_e66eab5fbd07bd046cd9ca386496279e71ed1052' }
		}

		var paystack_url = "https://api.paystack.co/bank/resolve?account_number="+account_number+"&bank_code="+bankcode

		console.log("%cQuerying: " + paystack_url, 'color:#00ff00;font-size:14px;background:#000;')

		return new Promise((resolve, reject)=>{
			axios.get(paystack_url, config)
				.then((response)=>{
					if(response.data.status == true){
						resolve(response.data.data.account_name)
					} else {
						reject(response)
					}
				})
				.catch((error)=>{
					reject(error)
				})
		})
	},

	sendWhatsAppMessage: (data)=>{
		var wurl = "https://eu1.chat-api.com/instance56289/sendMessage?token=xg23iy3n47p50k0e"

		var message = data.message
		var r = data.recipients
		var r_count = r.length

		//console.log(r)
		return new Promise((resolve, reject)=>{

			for(var rec=0; rec<r_count; rec++){

				var body = {
					phone: r[rec],
					body: message
				}

				axios.post(wurl, body)
					.then((response)=>{
						resolve(response)
					})
					.catch((error)=>{
						reject(error)
					})
			}
			
		})
	}
}