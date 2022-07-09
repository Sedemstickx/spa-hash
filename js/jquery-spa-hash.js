/*
Jquery SPA using hash example. A simple code compatible with older browsers!
Version: 0.1.0.
Written by: Sedem stickx <sedemdatsa69@gmail.com>
*/

//performance.navigation.type is a deprecated method(check MDN) but is very useful in showing type of page load action a user has taken
//and using it to track conditions.
console.log(performance.navigation.type);

//Fire this event if a hash(#) symbol is present or has changed in a browser's url bar.
$(window).on('hashchange', function () {

   //get url hash.//if route is empty assign home.html to page to ajax load the default content.
   var page = window.location.hash != '' ? window.location.hash : "#home.html" ;
   console.log(page.substring(1));
   $.get(page.substring(1), function (pageContent) {//remove # from link and return selected page content trough ajax.
      $("#container").html(pageContent);//load content into main div
   });

});



//Fire this event if user reloads or even visit the page for the first time.
$(window).on('load', function () {

   var page;

   if(performance.navigation.type == 1 || window.location.hash) { //if page navigates by type reload(1) or a hash is present upon load. 
    page = window.location.hash;//get url hash.
    console.log(page.substring(1));  
    $.get(page.substring(1), function (pageContent) {//remove # from link and return selected page content trough ajax.
    $("#container").html(pageContent);//load content into main div
      });
   }
   else{//get default page to ajax load.
   page = "home.html";
   console.log(page);  
   $.get(page, function (pageContent) {//return selected page content trough ajax.
   $("#container").html(pageContent);//load content into main div 
      });
   }

}); 