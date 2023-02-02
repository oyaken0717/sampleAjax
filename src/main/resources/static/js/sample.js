console.log("テスト2");

$(function(){
	$('.ajaxButton').click(function() {

//		const xsrf = Cookies.get('XSRF-TOKEN');
        
        var param = {
                title: "title"
        };

//        var url = location.href;
//        var path = location.pathname;
//        var search = location.search
//        var hash = location.hash
//        var uri = url.replace(path, "");
//        uri = uri.replace(search, "");
//        uri = uri.replace(hash, "");
//        const postUrl = uri + "/startAjax";
        var postUrl = 'http://localhost:8080/startAjax';
        
        $.ajax({
            url: postUrl,
            type: "POST",
//            headers: {
//            	'X-XSRF-TOKEN': xsrf
//            },
            contentType: "application/json",
            data: JSON.stringify(param),
            dataType: "json"
        	}).done(function(res, textStatus, jqXHR) {
        		console.log("成功");
        		console.log("res");
        		console.log(res);
        	}).fail(function(jqXHR, textStatus, errorThrown) {
        		console.log("失敗");
            
        });
        
	 });
});

