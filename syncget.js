var request = getXmlHttpRequest();
function getServ(){
   var url='http://lcalhost/';
   request.onreadystatechange = function(){
   if(request.readyState == 4){
       var responseText = String(request.responseText);
       alert(responseText);
   }
}
request.open('GET', url, true);
request.send(null);
}
 
window.onload = function(){
		  getServ();
}
