
function ajax(method,url,data,fn){
    let xml=null;
    try{
        xml=new XMLHttpRequest();
    }catch(err){
        xml=new ActiveXObject('Microsoft.XMLHTTP');
    }
    if(method.toUpperCase()=='GET'){
        xml.open(method,url+'?'+data);
        xml.send();
    }
    if(method.toUpperCase()=='POST'){
        console.log(1)
        xml.open(method,url);
        xml.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xml.send(data);
    }
    xml.onreadystatechange=function(){
        if(xml.readyState==4&&xml.status){
            fn(xml.responseText);
        }
    }
}