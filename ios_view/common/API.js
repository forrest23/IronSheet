'use strict';
var BASE = 'https://route.showapi.com/';
var ACCESS_TOKEN = '495c7bef0f438c5505ebdecabd4fce87ac7764f79ccaed608412f3199041d66d';

function api(api, v){
	if(v instanceof Object){
		var p = Object.keys(v).map(function(k) {
			return encodeURIComponent(k) + "=" + encodeURIComponent(v[k]);
		}).join('&');
	}else if(v){
		var p = v;
  }else{
    var p ='';
	}
	var timestamp=getNowFormatDate();
	return BASE + api + '?showapi_appid=11110&showapi_timestamp='+timestamp+'&showapi_sign=0e14c6f226ef4065a3ee67bc34badfea&' + p;
}


function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "";
    var seperator2 = "";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var strHours=date.getHours();
    var strMinutes=date.getMinutes();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    if (strHours >= 0 && strHours <= 9) {
        strHours = "0" + strHours;
    }
    if (strMinutes >= 0 && strMinutes <= 9) {
        strMinutes = "0" + strMinutes;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + strHours + seperator2 + strMinutes
        + seperator2 + date.getSeconds();
    return currentdate;
}


function getMovieTop250(offset, limit){
	return api('196-1', {'page':offset, 'num':limit});
}

function getNodeTopics(node_id, offset, limit){
	return api('topics.json', {'node_id':node_id, 'offset':offset, 'limit':limit});
}

function getTopic(id){
	return api('topics/'+id+'.json');
}

module.exports = {
	getMovieTop250: getMovieTop250,
};
