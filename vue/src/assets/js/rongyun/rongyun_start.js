import http from '../http/http'
import Vue from 'vue'
function getQueryVariable(variable) {
	var query = window.location.href.substring(window.location.href.lastIndexOf("?") + 1);
	var vars = query.split("&");
	for(var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if(pair[0] == variable) {
			return pair[1];
		}
	}
	return localStorage.getItem("token");
}
if(getQueryVariable("token") != undefined) {
	localStorage.setItem('token', getQueryVariable("token"));
	http.post('/V2/PersonalCenter',{token:localStorage.getItem("token")},function(res){
		if(res.data.res_code=='P001'){
			localStorage.setItem('userInfo', JSON.stringify(res.data))
			http.log(res.data);//1 输出
			initRY(res.data.data)
		}
	})

} else {
	MessageBox('温馨提示', 'token值无效');
}

function initRY(userInfo) {
	http.log(userInfo);
	RongIMLib.RongIMClient.init(userInfo.rongyun_appkey, null, {});
	// 连接状态监听器
	RongIMClient.setConnectionStatusListener({
		onChanged: function(status) {
			//console.log(status);
			switch(status) {
				case RongIMLib.ConnectionStatus["CONNECTED"]:
				case 0:
					console.log("连接成功")
					break;

				case RongIMLib.ConnectionStatus["CONNECTING"]:
				case 1:
					console.log("连接中")
					break;

				case RongIMLib.ConnectionStatus["DISCONNECTED"]:
				case 2:
					console.log("当前用户主动断开链接")
					break;

				case RongIMLib.ConnectionStatus["NETWORK_UNAVAILABLE"]:
				case 3:
					console.log("网络不可用")
					break;

				case RongIMLib.ConnectionStatus["CONNECTION_CLOSED"]:
				case 4:
					console.log("未知原因，连接关闭")
					break;

				case RongIMLib.ConnectionStatus["KICKED_OFFLINE_BY_OTHER_CLIENT"]:
				case 6:
					console.log("用户账户在其他设备登录，本机会被踢掉线")
					break;

				case RongIMLib.ConnectionStatus["DOMAIN_INCORRECT"]:
				case 12:
					console.log("当前运行域名错误，请检查安全域名配置")
					break;
			}
		}
	});
	RongIMClient.setOnReceiveMessageListener({
		onReceived: function(message) {

		}
	});
	//开始链接
	RongIMClient.connect(userInfo.rongyun_token, {
		onSuccess: function(userId) {
			Vue.prototype.userId = userId;
			console.log("链接成功，用户id：" + userId);

		},
		onTokenIncorrect: function() {
			console.log('token无效');
		},
		onError: function(errorCode) {
			console.log(errorCode);
		}
	})
}

export default getQueryVariable 