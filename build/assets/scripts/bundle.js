!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),n(2),n(5),n(4),n(6),e.exports=n(3)},function(e,t,n){"use strict";n.r(t);var r=n(2),o=n(3),l=n(4);Object(r.flipCard)(),Object(o.toggleMenu)(),Object(l.menuSpy)()},function(e,t,n){"use strict";n.r(t),n.d(t,"flipCard",function(){return r});const r=function(){for(var e=document.querySelectorAll(".authoriz-btn"),t=0,n=e.length;t<n;t++){e[t].addEventListener("click",function(){var e=document.querySelector(".user__card"),t=e.classList;!0===t.contains("flipped")?t.remove("flipped"):t.add("flipped")})}}},function(e,t,n){"use strict";n.r(t),n.d(t,"toggleMenu",function(){return r});const r=function(){$(".toggle-menu").click(function(){$(".sandwich").toggleClass("toggle-active"),"visible"===$("body").css("overflow")?$("body").css("overflow","hidden"):$("body").css("overflow","visible")}),$(".toggle-menu").click(function(){$(".menu-fullscreen").is(":visible")?($(".menu-fullscreen").css("display","none"),$(".user__scroll").css("display","flex"),$(".toggle-menu").css("margin-right","0")):($(".menu-fullscreen").css("display","block"),$(".user__scroll").css("display","none"),$(".toggle-menu").css("margin-right","17px"))})}},function(e,t,n){"use strict";n.r(t),n.d(t,"menuSpy",function(){return r});const r=function(){$(window).scroll(function(){$(".article").each(function(e,t){var n=$(t).offset().top-100,r=n+$(t).height(),o=$(window).scrollTop(),l=$(t).attr("id");o>n&&o<r&&($("a.active").removeClass("active"),$('a[href="#'+l+'"]').addClass("active"))})})}},function(e,t,n){"use strict";n.r(t),n.d(t,"initMap",function(){return r});const r=function(){var e=new google.maps.Map(document.getElementById("map"),{zoom:16,center:{lat:47.780443,lng:35.175036},disableDefaultUI:!0,styles:[{elementType:"geometry",stylers:[{color:"#ffffff"}]},{elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{elementType:"labels.text.fill",stylers:[{color:"#404040"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#d6d6d6"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#d6d6d6"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#9a9a9a"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#d6d6d6"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#d6d6d6"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#d6d6d6"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#61dac9"}]}]});new google.maps.Marker({position:{lat:47.781488,lng:35.186588},map:e})}},function(e,t,n){"use strict";n.r(t),n.d(t,"parallax",function(){return r});const r=function(){const e=document.getElementById("parallax").children;window.addEventListener("mousemove",function(t){var n=window.innerWidth/2-t.pageX,r=window.innerHeight/2-t.pageY;[].slice.call(e).forEach(function(e,t){let o=t/100,l=n*o,s=r*o,i=window.innerHeight/2*o,c="translate("+l+"px,"+s+"px)",a=e.firstElementChild;e.style.transform=c,a.style.bottom="-"+i+"px"})})}}]);