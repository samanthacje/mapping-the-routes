!function(n){function t(t){for(var o,a,s=t[0],l=t[1],d=t[2],p=0,f=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(n[o]=l[o]);for(c&&c(t);f.length;)f.shift()();return i.push.apply(i,d||[]),e()}function e(){for(var n,t=0;t<i.length;t++){for(var e=i[t],o=!0,s=1;s<e.length;s++){var l=e[s];0!==r[l]&&(o=!1)}o&&(i.splice(t--,1),n=a(a.s=e[0]))}return n}var o={},r={0:0},i=[];function a(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=n,a.c=o,a.d=function(n,t,e){a.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,t){if(1&t&&(n=a(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)a.d(e,o,function(t){return n[t]}.bind(null,o));return e},a.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(t,"a",t),t},a.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var c=l;i.push([21,1]),e()}([,,,,,,,,function(n,t,e){var o=e(9);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(3)(o,r);o.locals&&(n.exports=o.locals)},function(n,t,e){(n.exports=e(2)(!1)).push([n.i,"body {\n\tmargin: 0px;\n\twidth: 100vw;\n\toverflow-x: hidden;\n\t/*default text sans-serif font*/\n\tfont-family: 'Open Sans', sans-serif;\n}\n\n.container{\n\tmargin: 0 15px;\n\t/*to allow fullwidth elements be shown*/\n\t/*overflow: hidden; */\n}\n\n.row{\n\twidth: 100%;\n}\n\n.center{\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.mobile-hidden{\n\tdisplay: none;\n}\n\n.desktop-hidden{\n\tdisplay: block;\n}\n\n.serif {\n\t/*title serif font */\n\tfont-family: 'ZCOOL XiaoWei', serif;\n}\n\n.white {\n\tcolor: #fff;\n}\n\n.yellow {\n\tcolor: #dcba7d;\n}\n\n.header{\n\twidth: 100vw;\n\theight: 100vh;\n\toverflow: hidden;\n\tbackground: url(assets/images/header-image-v4.jpg) no-repeat center center fixed; \n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n\n  /*IE compatibility*/\n  filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='assets/images/header-image-v4.jpg', sizingMethod='scale');\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='myBackground.jpg', sizingMethod='scale')\";\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.header-container{\n\tmargin: 0 8%;\n\twidth: auto;\n\theight: auto;\n}\n\n.header-title{\n\tfont-size: 3em;\n\tfont-family: 'ZCOOL XiaoWei', serif;\n\tcolor: #fff\n}\n\n.header-intro{\n\tfont-size: 0.8em;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #dcba7d;\n}\n\n.header-indent{\n\tmargin-left: 21px;\n}\n\n.nav {\n\twidth: 100vw;\n\tbox-sizing: border-box;\n\tpadding: 0 10px;\n\theight: 19px;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tbackground-color: #1d1d1d;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tz-index: 999;\n}\n\n.nav-left, .nav-right{\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-around;\n\tfont-size: 12px;\n\tline-height: 12px;\n}\n\n\n.icon {\n\twidth: 20px;\n\theight: 100%;\n\tmax-height: 23px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbox-sizing: border-box;\n\tborder-left: 1px solid #dcba7d;\n\tcursor: pointer;\n}\n\n.nav-right:last-child{\n\tborder-right: 1px solid #dcba7d;\n}\n\n.icon:hover{\n\tbackground: #fff;\n}\n\n.pangolin-logo {\n  width: 12px;\n  height: 12px;\n  margin-right: 10px;\n  object-fit: contain;\n}\n\n/*content styles*/\n.chapter-title{\n\tfont-family: 'ZCOOL XiaoWei', serif;\n\tfont-size: 20px;\n\tcolor: #3b3b3b;\n\ttext-align: center;\n}\n\n.byline{\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-transform: uppercase;\n\tfont-size: 10px;\n\tcolor: #dcba7d;\n}\n\n.bookmark{\n\tposition: absolute;\n\tright:0;\n\tbottom: 0;\n\twidth: 10px;\n\theight: 15px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-image: url(assets/images/bookmark.svg);\n\tbackground-repeat: no-repeat;\n}\n\n.footer{\n\theight: auto;\n\tmin-height: 250px;\n\tmargin-bottom: 50px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-end;\n\talign-items: flex-end;\n\tfont-size: 10px;\n\tcolor: #220f07;\n\ttext-align: right;\n}\n\n.pangolin-logo-footer {\n  width: 68.6px;\n  height: 75px;\n  object-fit: contain;\n}\n\n.footer-icon {\n\twidth: 30px;\n\theight: 100%;\n\tmax-height: 23px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbox-sizing: border-box;\n\tcursor: pointer;\n}\n\n.footer-icons{\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n}\n\n.article-image{\n\twidth: 100%;\n\theight: auto;\n}\n/*content styles*/\n\n/*component*/\n.quote{\n\tposition: relative;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\tpadding: 0 10px 10px 10px;\n\tborder-bottom: 1px solid #dcba7d;\n\tbox-sizing: border-box;\n  font-family: 'ZCOOL XiaoWei', serif;\n  font-size: 26px;\n  font-weight: normal;\n  color: #dcba7d;\n}\n\n.caption{\n  font-size: 10px;\n  font-weight: 300;\n  font-style: normal;\n  font-stretch: normal;\n  color: #3b3b3b;\n  border-bottom: 1px solid #dcba7d;\n  margin: 10px 0 0 0;\n  padding-bottom: 10px; \n}\n/*component*/\n\n/*snazzy map*/\n.snazzy{\n\twidth: 100vw;\n\theight: auto;\n\tmargin-left: -15px;\n\tmargin-right: -15px;\n\tbackground-size: cover;\n}\n/*snazzy map*/\n\n/*animated map svg v1 [deprecated]*/\n/*map container is pinned as position: fixed, margin won't apply*/\n#map-container{\n\twidth: 100vw;\n\theight: auto;\n\tbackground: #fff;\n\toverflow: hidden;\n\tmargin: 0 -15px;\n}\n\n#map{\n\twidth: 100%;\n\tmargin: 15px 0px;\n\theight: auto;\n}\n\npath{\n\tstroke-linecap: round;\n\tstroke-linejoin: round;\n}\n\n.path{\n\tfill:none;\n\tstroke:#000;\n\tstroke-width: 1px;\n}\n\n.path-stop{\n\tfill: #fff;\n\tstroke: #000;\n\tstroke-width: 0.3px;\n}\n\n.path-stop:hover{\n\tcursor: pointer;\n\tfill: #ccc;\n}\n/*animated map svg v1 [deprecated]*/\n\n#geo-map-container{\n\twidth: 100%;\n\theight: auto;\n\tbackground: #fff;\n\toverflow: hidden;\n\tmargin: 15px 0;\n}\n\n#geo-map{\n\twidth: 100%;\n}\n\n#timeline-container{\n\twidth: 100%;\n\theight: auto;\n\toverflow: hidden;\n}\n\n.vis-title {\n  font: 16px 'Open Sans';\n  font-weight: bold;\n  fill: white;\n}\n\n.seizure-total{\n\tfont: 5em 'Open Sans';\n  font-weight: bold;\n  fill: white;\n}\n\n.circle-hover {\n  stroke: #000;\n  stroke-width: 1px;\n}\n\n.area {\n  fill: steelblue;\n  fill-opacity: 0.7;\n}\n\n.axis path,\n.axis line {\n  fill: none;\n  stroke: #000;\n  shape-rendering: crispEdges;\n}\n\n.brush .extent {\n  stroke: #fff;\n  fill: #000;\n  fill-opacity: .25;\n  shape-rendering: crispEdges;\n}\n\n.bartip{\n  position      : absolute;\n  text-align    : center;\n  max-width     : 70px;\n  max-height    : 30px;\n  padding       : 8px;\n  border        : none;\n  border-radius : 8px;\n  margin-top    : -30px;\n  font          : 10px sans-serif;\n  background    : black;\n  color         : white;\n  pointer-events: none;\n}",""])},,function(n,t,e){var o=e(12);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(3)(o,r);o.locals&&(n.exports=o.locals)},function(n,t,e){(n.exports=e(2)(!1)).push([n.i,"@media only screen and (min-device-width: 480px) {\n\t.container{\n\t\tmargin: 0 25%;\n\t}\n\n\t.mobile-hidden{\n\t\tdisplay: block;\n\t}\n\n\t.desktop-hidden{\n\t\tdisplay: none;\n\t}\n\n  .header { \n    background-image: url('assets/images/header-image-v1.jpg'); \n  }\n\n  .header-container{\n\t\tmargin: 0 20%;\n\t}\n\n\t.nav {\n\t\theight: 23px;\n\t\tpadding: 0 30px;\n\t}\n\n\t#progress-div{\n    top: 23px !important;\n  }\n\n  .footer{\n  \tflex-direction: row;\n  \tjustify-content: space-between;\n  \talign-items: flex-end;\n  }\n\n  .quote-para{\n  \tposition: relative;\n  \twidth: 60%;\n  }\n\n  .quote{\n  \tposition: absolute;\n  \ttop: 0;\n  \tleft: 100%;\n  }\n\n  .snazzy{\n\t\tmargin: 0 -25vw;\n\t}\n\t\n\t/*animated map svg v1 [deprecated]*/\n  #map-container{\n\t\tmargin: 0 -25vw !important;\n\t}\n\n\t.scrollmagic-pin-spacer {\n\t\tmargin: 0 -25vw !important;\n\t\tpadding-left: 25vw !important;\n\t}\n  /*animated map svg v1 [deprecated]*/\n}",""])},function(n,t,e){var o=e(14);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(3)(o,r);o.locals&&(n.exports=o.locals)},function(n,t,e){(n.exports=e(2)(!1)).push([n.i,"#map-tooltip{\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tdisplay: none;\n\tflex-direction: column;\n\twidth: 100px;\n\theight: 100px;\n\tbackground: #fff;\n\tborder-radius: 5px;\n\tborder: 1px solid #000;\n\tz-index: 2;\n\toverflow: hidden;\n\tpadding: 5px;\n}\n\n#map-tooltip-title{\n\tfont-size: 14px;\n\tfont-weight: 600;\n}\n\n#map-tooltip-title-close{\n\tfont-family: Sans-serif;\n\tposition: absolute;\n\ttop: 5px;\n\tright: 5px;\n}\n\n#map-tooltip-description{\n\tfont-size: 11px\n}\n\n#map-tooltip-underlay{\n\tdisplay: none;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100vw;\n\theight: 100vh;\n\tz-index: 1;\n\toverflow: hidden;\n}",""])},function(n,t,e){var o=e(16);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(3)(o,r);o.locals&&(n.exports=o.locals)},function(n,t,e){(n.exports=e(2)(!1)).push([n.i,"/* Progress Bar */\n#progress-div{\n    position:fixed;\n    width:100%;\n    height:3.5px;\n    background-color: #dcba7d;\n    top:19px;\n    left:0px;\n    z-index: 999;\n}\n#progress-bar{\n    position: absolute;\n    float:left;\n    height:100%;\n    background-color: #fc7a00;\n    -webkit-transition: width 0.3s; /* Safari */\n    transition: width 0.3s;\n}\n#progress-div:hover, #progress-bar:hover{\n    cursor: pointer;\n}\n/* Progress Bar */",""])},,,function(n,t,e){var o=e(20);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(3)(o,r);o.locals&&(n.exports=o.locals)},function(n,t,e){(n.exports=e(2)(!1)).push([n.i,'#overlay{\n\tdisplay: none;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100vw;\n\theight: 100vh;\n\tz-index: 999;\n\tbackground: rgba(0, 0, 0, 0.4);\n\toverflow: hidden;\n}\n\n#overlay form {\n\tdisplay: inherit;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n\theight: auto;\n}\n\n#overlay input[type="email"]{\n\tdisplay: inherit;\n\twidth: 80%;\n\tmax-width: 300px;\n\tline-height: 25px;\n\tborder-radius: 5px;\n\tz-index: 1000;\n}\n\n#overlay button{\n\tdisplay: inherit;\n\tbackground: #fff;\n\tmargin: 20px; \n\tborder-radius: 5px;\n\tz-index: 1000;\n}\n\n#submit-message{\n\tdisplay: inherit;\n\tfont-size: 10px;\n\tcolor: red;\n}',""])},function(n,t,e){"use strict";e.r(t);e(8),e(11),e(13),e(15);var o=e(1),r=e.n(o),i=(e(17),function(n){return document.querySelector(n)}),a=function(){};a.initScrollController=function(){var n=i("#progress-bar"),t=document.body,e=t.offsetHeight,o=new r.a.Controller,a=(new TimelineMax).to(n,1,{width:"100%",ease:Linear.easeNone});new r.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:e,tweenChanges:!0}).setTween(a).addTo(o)},a.initClickNav=function(){var n=i("#progress-div"),t=(i("#progress-bar"),function(n){var t=document.body.offsetWidth,e=document.body.offsetHeight,o=parseInt(n.pageX);if(o>0){var r=e*(o/t);window.scrollTo({top:r,behavior:"smooth"})}});n.addEventListener("click",t),n.addEventListener("touchend",t)};var s=a,l=function(){};l.initHashController=function(){var n,t=(n=".chapter-anchor",document.querySelectorAll(n)),e=new r.a.Controller;t.forEach(function(n){new r.a.Scene({triggerElement:n,duration:n.offsetHeight}).addTo(e).on("enter leave",function(t){var e=n.id;window.history.pushState(null,null,"#".concat(e))})})};var d=l;e(19);var c=function(n){var t=function(n){var t,e=n.elements,o=Object.keys(e).filter(function(n){return"honeypot"!==e[n].name||(t=e[n].value,!1)}).map(function(n){return void 0!==e[n].name?e[n].name:e[n].length>0?e[n].item(0).name:void 0}).filter(function(n,t,e){return e.indexOf(n)==t&&n}),r={};return o.forEach(function(n){var t=e[n];if(r[n]=t.value,t.length){for(var o=[],i=0;i<t.length;i++){var a=t.item(i);(a.checked||a.selected)&&o.push(a.value)}r[n]=o.join(", ")}}),r.progress=window.location.hash,r.url=window.location.href,o=o.concat(["progress","url"]),r.formDataNameOrder=JSON.stringify(o),r.formGoogleSheetName=n.dataset.sheet||"responses",r.formGoogleSend=n.dataset.email||"",{data:r,honeypot:t}}(n),e=document.querySelector("#submit-message"),o=t.data;if(t.honeypot)return e.innerHTML="Spam Detected!",!1;e.innerHTML="Sending...",function(n){for(var t=n.querySelectorAll("button"),e=0;e<t.length;e++)t[e].disabled=!0}(n);var r=n.action,i=new XMLHttpRequest;i.open("POST",r),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.onreadystatechange=function(){4===i.readyState&&200===i.status&&(n.reset(),e.innerHTML="Your email has been received!")};var a=Object.keys(o).map(function(n){return encodeURIComponent(n)+"="+encodeURIComponent(o[n])}).join("&");i.send(a)},p={},f={isOverlayShown:!1,isEmailSaved:!1},u=function(n){return document.querySelector(n)};p.initBookmark=function(){var n,t=(n=".bookmark",document.querySelectorAll(n)),e=u("#overlay");t.forEach(function(n){n.addEventListener("click",function(n){e.style.display=f.isOverlayShown?"none":"flex",f.isOverlayShown=!f.isOverlayShown})}),e.addEventListener("click",function(n){e.style.display="none",f.isOverlayShown=!1});var o=u("#submit-reminder"),r=u("input#email"),i=u("#submit-message");r.addEventListener("click",function(n){n.stopPropagation()}),o.addEventListener("click",function(n){if(n.preventDefault(),n.stopPropagation(),i.innerHTML="",e=r.value,/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())&&!f.isEmailSaved){var t=u("#bookmark-req-form");c(t),f.isEmailSaved=!0,r.disabled=!0,o.disabled=!0}else i.innerHTML="Invalid Email!";var e})};var h=p,g=e(0);function m(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],o=!0,r=!1,i=void 0;try{for(var a,s=n[Symbol.iterator]();!(o=(a=s.next()).done)&&(e.push(a.value),!t||e.length!==t);o=!0);}catch(n){r=!0,i=n}finally{try{o||null==s.return||s.return()}finally{if(r)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var x={},v=function(n){return document.querySelector(n)},y=g.k().range([5,25]),b=g.m("#geo-map-container").append("svg").attr("x",0).attr("y",0).attr("viewBox","0 0 960 500").attr("id","geo-map"),w=(b.append("rect").attr("width","100%").attr("height","100%").attr("fill","#3b3b3b"),b.append("g").attr("class","countries")),k=g.g().scale(150),S=g.h().projection(k),T=b.append("text").attr("class","vis-title").attr("transform","translate(50,460)").text("pangolin trafficked").append("tspan").attr("x",0).attr("dy","1.3em").text("(select a time range)"),E=b.append("rect").attr("transform","translate(40,420)").attr("fill","red"),z=b.append("text").attr("transform","translate(50,420)").attr("class","seizure-total").text("0"),M=g.m("#timeline-container").append("svg"),O=M.append("g").attr("class","timeline"),j=g.m(".container").append("div").attr("class","bartip").style("display","none");x.renderMap=function(){Promise.all([g.i("assets/maps/world_countries.json"),g.c("assets/data/valid-seizure-num-date.csv")]).then(function(n){var t=m(n,2),e=t[0],o=t[1],r=g.n("%Y-%m-%d %H:%M:%S"),i=[],a={},s=o.map(function(n,t){return n.TIME=r(n.Date),n.YEAR=n.TIME.getFullYear(),n.ESTNUM=+n.ESTNUM,n.Latitude=+n.Latitude,n.Longitude=+n.Longitude,a[n.TIME]?a[n.TIME]+=n.ESTNUM:a[n.TIME]=n.ESTNUM,n});Object.keys(a).forEach(function(n){i.push({TIME:new Date(n),ESTNUM:a[n]})}),i.sort(function(n,t){return n.TIME-t.TIME}),y.domain(g.e(s,function(n){return+n.ESTNUM})),function(n,t){var e={top:10,right:10,bottom:20,left:15},o=v("#timeline-container").offsetWidth-e.left-e.right,r=80-e.top-e.bottom;M.attr("width",o+e.left+e.right).attr("height",r+e.top+e.bottom),O.attr("transform","translate("+e.left+","+e.top+")");var i={};t.forEach(function(n){var t=n.TIME.getFullYear()+"";i[t]||(i[t]=0),i[t]+=+n.ESTNUM});var a=Object.keys(i).map(function(n){return{TIME:new Date(+n,1,1),TOTAL:i[n]}}),s=g.l().domain(g.e(t.map(function(n){return n.TIME}))).range([0,o]),l=g.j().domain(g.e(a.map(function(n){return n.TOTAL}))).range([r,0]),d=g.a(s),c=g.b(l).ticks(3).tickFormat(g.f("~s"));O.append("g").attr("class","bars").selectAll("rect").data(a,function(n){return n.id}).enter().append("rect").attr("class","bar").style("fill","#dcba7d").attr("x",function(n){return s(n.TIME)}).attr("width",Math.round(o/20)-10+"px").attr("y",function(n){return l(n.TOTAL)}).attr("height",function(n){return r-l(n.TOTAL)}).on("mouseover",function(){j.style("display","inline"),g.m(this).style("opacity",.5)}).on("mousemove",function(n){j.html(n.TIME.getFullYear()+"<hr/>"+n.TOTAL).style("left",g.d.pageX-34+"px").style("top",g.d.pageY-12+"px")}).on("mouseout",function(){j.style("display","none"),g.m(this).style("opacity",1)}),O.append("g").attr("class","x axis").attr("transform","translate(0,"+r+")").call(d),O.append("g").attr("class","y axis").call(c),O.append("text").attr("transform","rotate(-90)").attr("dy","-1em").style("text-anchor","end").style("font-size","8px").text("# Pangolins")}(0,i),function(n){var t=[];n.map(function(n){t.indexOf(n.YEAR)<0&&t.push(n.YEAR)});var e=0;setInterval(function(){var o=t[e%t.length];!function(n,t){var e=b.selectAll("circle").data(n,function(n){return n.id});"2000"==t&&b.selectAll("circle").remove();e.enter().append("circle").attr("fill","rgba(240, 135, 24, 0.3)").attr("cx",function(n){return k([+n.Longitude,+n.Latitude])[0]}).attr("cy",function(n){return k([+n.Longitude,+n.Latitude])[1]}).attr("r",0).transition().duration(500).attr("r",function(n){return y(+n.ESTNUM)}),e.exit().transition().duration(500).attr("fill","rgba(201, 62, 62, 0.3)")}(n.filter(function(n){return n.YEAR==o}),o),e+=1,T.text("2000 - "+o);var r=n.filter(function(n){return+n.YEAR<=o}).map(function(n){return n.ESTNUM}).reduce(function(n,t){return n+t},0);z.text("".concat(g.f(",")(Math.round(r)))),E.attr("x",z.node().getBBox().x).attr("y",z.node().getBBox().y).attr("width",+z.node().getBBox().width+20).attr("height","6.5em")},1e3)}(s),w.selectAll("path").data(e.features).enter().append("path").attr("d",S).style("fill","#694b2d").style("stroke","#3b3b3b").style("stroke-width",.5).style("opacity",.8)}).catch(function(n){console.log("d3 err",n)})};var L=x;s.initScrollController(),s.initClickNav(),d.initHashController(),h.initBookmark(),L.renderMap()}]);