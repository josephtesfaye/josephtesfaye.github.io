/**
 *
 * @author Ivan Huang on 2016/9/19.
 */
window.onload = loadBg;

function loadBg() {
	$(document).ready(function(){
        $.ajax({
            url: 'http://twitter.com/status/user_timeline/padraicb.json?count=10',
            dataType: 'jsonp',
            success: function(dataWeGotViaJsonp){
                var text = '';
                var len = dataWeGotViaJsonp.length;
                for(var i=0;i<len;i++){
                    twitterEntry = dataWeGotViaJsonp[i];
                    text += '<p><img src = "' + twitterEntry.user.profile_image_url_https +'"/>' + twitterEntry['text'] + '</p>'
                }
                $('#twitterFeed').html(text);
            }
        });
    })

	
    // $.ajax({
    //     url:"http://jb-dev.win-sky.com.cn/activity/cashback/detail?UserID=318522&CusToken=cecda282f4284c1c9d1d68ce9109bd9b&payId=1&reqSource=5",
	// 	type: "GET",
	// 	headers: {
	// 		'Access-Control-Allow-Origin':'*',
	// 		'Content-Type': 'application/javascript'
	// 	},
    //     dataType:"jsonp",
    //     // jsonp:"callback",
    //     success:function(json){
    //         console.log(json);
    //     }
    // });


/*    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://jb-dev.win-sky.com.cn/activity/cashback/detail?UserID=318522&CusToken=cecda282f4284c1c9d1d68ce9109bd9b&payId=1&reqSource=5");
    xhr.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*!/!*;q=0.8");
    xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");
    xhr.setRequestHeader("Accept-Language", "en-US,en;q=0.5");
    xhr.setRequestHeader("Connection", "keep-alive");
    xhr.setRequestHeader("Host", "jb-dev.win-sky.com.cn");
    xhr.setRequestHeader("Upgrade-Insecure-Requests", "1");
    xhr.setRequestHeader("User-Agent", "Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:73.0) Gecko/20100101 Firefox/73.0");
    console.info(xhr);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const resp = JSON.parse(xhr.responseText);
                const body = document.getElementsByTagName("body");
                body.style.backgroundImage = "url(\"images/overlay.png\"), linear-gradient(60deg, rgba(255, 165, 150, 0.5) 5%, rgba(0, 228, 255, 0.35)), url(\"" + "https://res.cloudinary.com/ivanhjc/image/upload/v1602736588/lADPBG1Q53OmyVjNCmzNCmw_2668_2668_rxbufo.jpg" + "\")";
            }
        }
    };
    xhr.send();*/

}
