//支持get,post,
function myajax(options){
    options = options || {};
    options.type = (options.type || "get").toUpperCase();
    options.dataType = options.dataType || "json";
    var params = formatParams(params);
    // options.data = 
    var xhr;
    // if(window.ActiveXObject){
    //     xhr = new window.ActiveXObject("Microsoft.XMLHTTP");
    // }else {
        xhr = new XMLHttpRequest();
    //  }
    //接受xhr
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status >=  200 && xhr.status <= 300){
                options.success && options.success(xhr.responseText, xhr.responseXML);
            }else {
                options.error && options.error(xhr.responseText,xhr.responseXML);
            }
        }
    }

    //发送
    if(options.type = "GET"){
        xhr.open('GET',options.url+'?'+params,true);
        xhr.send(null);
    }else if(options.type = "POST") {
        xhr.open('POST',options.url);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(params);
    }

    function formatParams(data){
        var arr = [];
        for (var name in data) {
            arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
        }
        arr.push(("v=" + Math.random()).replace(".", ""));
        return arr.join("&");
    }
};