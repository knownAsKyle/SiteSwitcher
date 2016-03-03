!function(e){"use strict";function t(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}function n(e,t){var n=o(e,t)?i:a;n(e,t)}var o,a,i;"classList"in document.documentElement?(o=function(e,t){return e.classList.contains(t)},a=function(e,t){e.classList.add(t)},i=function(e,t){e.classList.remove(t)}):(o=function(e,n){return t(n).test(e.className)},a=function(e,t){o(e,t)||(e.className=e.className+" "+t)},i=function(e,n){e.className=e.className.replace(t(n)," ")});var s={hasClass:o,addClass:a,removeClass:i,toggleClass:n,has:o,add:a,remove:i,toggle:n};"function"==typeof define&&define.amd?define(s):"object"==typeof exports?module.exports=s:e.classie=s}(window);var SiteSwitcher=SiteSwitcher||{};!function(){function e(){var e='.cbp-spmenu{background:#47a3da;position:fixed;-webkit-transition:all .3s ease;-moz-transition:all .3s ease;transition:all .3s ease}.cbp-spmenu h3{color:#afdefa;font-size:1.9em;padding:5px 0 0 5px;margin:0;font-weight:300;background:#0d77b6}.cbp-spmenu a{display:block;color:#fff;font-size:1.1em;font-weight:300}.cbp-spmenu a:hover{background:#258ecd}.cbp-spmenu a:active{background:#afdefa;color:#47a3da}.cbp-spmenu-horizontal{width:100%;height:50px;left:0;z-index:150000011;overflow:hidden}.cbp-spmenu-horizontal h3{height:100%;width:20%;margin-right:6px;float:left}.cbp-spmenu-horizontal a{float:left;width:20%;padding:.8em;border-left:1px solid #258ecd}.cbp-spmenu-top{top:-150px}.cbp-spmenu-top.cbp-spmenu-open{top:0}@media screen and (max-width:55.1875em){.cbp-spmenu-horizontal{font-size:.6em}.cbp-spmenu-top{top:-110px}}#showTop{-webkit-transition:all .2s ease;-moz-transition:all .2s ease;transition:all .2s ease;z-index:150000011;position:fixed;height:50px;width:50px;left:0;top:0;padding:0;background:#47a3da}#nav-icon3{width:100%;height:100%;position:relative;top:5%;-webkit-transform:rotate(0);-moz-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0);-webkit-transition:.5s ease-in-out;-moz-transition:.5s ease-in-out;-o-transition:.5s ease-in-out;transition:.5s ease-in-out;cursor:pointer}#nav-icon3 span{display:block;position:absolute;height:9px;width:90%;margin-left:5%;background:#fff;border-radius:9px;opacity:1;left:0;-webkit-transform:rotate(0);-moz-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0);-webkit-transition:.25s ease-in-out;-moz-transition:.25s ease-in-out;-o-transition:.25s ease-in-out;transition:.25s ease-in-out}#nav-icon3 span:nth-child(1){top:4px}#nav-icon3 span:nth-child(2),#nav-icon3 span:nth-child(3){top:16px}#nav-icon3 span:nth-child(4){top:28px}#nav-icon3.open span:nth-child(1),#nav-icon3.open span:nth-child(4){top:18px;width:0;left:50%}#nav-icon3.open span:nth-child(2){-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}#nav-icon3.open span:nth-child(3){-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg)}.select_style{background:#FFF;overflow:hidden;display:inline-block;color:#525252;font-weight:300;-webkit-border-radius:5px 4px 4px 5px/5px 5px 4px 4px;-moz-border-radius:5px 4px 4px 5px/5px 5px 4px 4px;border-radius:5px 4px 4px 5px/5px 5px 4px 4px;-webkit-box-shadow:0 0 5px rgba(123,123,123,.2);-moz-box-shadow:0 0 5px rgba(123,123,123,.2);box-shadow:0 0 5px rgba(123,123,123,.2);border:1px solid #DADADA;font-family:"helvetica neue",arial;position:relative;cursor:pointer;padding-right:20px;margin-top:2px}.select_style span{position:absolute;right:10px;width:8px;height:8px;background:url(http://projects.authenticstyle.co.uk/niceselect/arrow.png) no-repeat;top:50%;margin-top:-4px}.select_style select{-webkit-appearance:none;appearance:none;width:120%;background:0 0;border:none;outline:0;cursor:pointer;padding:7px 10px;font-size:1.4em}',t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e)),t.appendChild(n)}function t(){var e=document.createElement("h3");e.appendChild(document.createTextNode("Switch"));var t=document.createElement("nav");t.id="cbp-spmenu-s3",t.className="cbp-spmenu cbp-spmenu-horizontal cbp-spmenu-top",t.appendChild(e),t.appendChild(o(i)),document.body.appendChild(t)}function n(){function e(e){classie.toggle(this,"active"),classie.toggle(n,"cbp-spmenu-open"),classie.toggle(i,"open");var t="active"===this.className?"50":"0";this.setAttribute("style","top: "+t+"px")}var t=document.createElement("button");t.id="showTop",t.appendChild(a()),document.body.appendChild(t);var n=document.getElementById("cbp-spmenu-s3"),o=document.getElementById("showTop"),i=document.getElementById("nav-icon3");o.addEventListener("click",e)}function o(e){var t=document.createElement("span"),n=document.createElement("div");n.className="select_style";var o=document.createElement("select");o.id="switcher_dropdown";for(var a=0;a<e.length;a++){var i=document.createElement("option");i.value=e[a].url,i.text=e[a].url,o.appendChild(i)}return o.addEventListener("change",function(e){var t=this.options[this.options.selectedIndex].value,n=(location.host.match(/([^.]+)\.\w{2,3}(?:\.\w{2})?$/)||[])[1],o=window.location.origin.indexOf(n),a=window.location.origin.substring(0,o),i=window.location.origin.substring(o+n.length);t=a+t+i;window.open(t,"_blank")}),n.appendChild(o),n.appendChild(t),n}function a(){var e=document.createElement("div");e.id="nav-icon3";for(var t=0;4>t;t++){var n=document.createElement("span");e.appendChild(n)}return e}var i=[{url:"caller"},{url:"commercialappeal"},{url:"courierpress"},{url:"thegleaner"},{url:"naplesnews"},{url:"tcpalm"},{url:"knoxnews"},{url:"vcstar"},{url:"timesrecordnews"},{url:"reporternews"},{url:"independentmail"},{url:"kitsapsun"},{url:"kpbj"},{url:"gosanangelo"},{url:"redding"}];SiteSwitcher.buildMenu=t,e(),SiteSwitcher.buildMenu(),n()}();
/*!
 * classie v1.0.1
 * class helper functions
 * from bonzo https://github.com/ded/bonzo
 * MIT license
 * 
 * classie.has( elem, "my-class" ) -> true/false
 * classie.add( elem, "my-new-class" )
 * classie.remove( elem, "my-unwanted-class" )
 * classie.toggle( elem, "my-class" )
 */
! function(s) {
    "use strict";

    function e(s) {
        return new RegExp("(^|\\s+)" + s + "(\\s+|$)")
    }

    function n(s, e) {
        var n = t(s, e) ? c : a;
        n(s, e)
    }
    var t, a, c;
    "classList" in document.documentElement ? (t = function(s, e) {
        return s.classList.contains(e)
    }, a = function(s, e) {
        s.classList.add(e)
    }, c = function(s, e) {
        s.classList.remove(e)
    }) : (t = function(s, n) {
        return e(n).test(s.className)
    }, a = function(s, e) {
        t(s, e) || (s.className = s.className + " " + e)
    }, c = function(s, n) {
        s.className = s.className.replace(e(n), " ")
    });
    var o = {
        hasClass: t,
        addClass: a,
        removeClass: c,
        toggleClass: n,
        has: t,
        add: a,
        remove: c,
        toggle: n
    };
    "function" == typeof define && define.amd ? define(o) : "object" == typeof exports ? module.exports = o : s.classie = o;
}(window);
var SiteSwitcher = SiteSwitcher || {};
(function() {
    var dropdownOptions = [{
        "url": "caller"
    }, {
        "url": "commercialappeal"
    }, {
        "url": "courierpress"
    }, {
        "url": "thegleaner"
    }, {
        "url": "naplesnews"
    }, {
        "url": "tcpalm"
    }, {
        "url": "knoxnews"
    }, {
        "url": "vcstar"
    }, {
        "url": "timesrecordnews"
    }, {
        "url": "reporternews"
    }, {
        "url": "independentmail"
    }, {
        "url": "kitsapsun"
    }, {
        "url": "kpbj"
    }, {
        "url": "gosanangelo"
    }, {
        "url": "redding"
    }, ];
    SiteSwitcher.buildMenu = buildMenu;

    function addCSS() {
        var css = '.cbp-spmenu{background:#47a3da;position:fixed;-webkit-transition:all .3s ease;-moz-transition:all .3s ease;transition:all .3s ease}.cbp-spmenu h3{color:#afdefa;font-size:1.9em;padding:5px 0 0 5px;margin:0;font-weight:300;background:#0d77b6}.cbp-spmenu a{display:block;color:#fff;font-size:1.1em;font-weight:300}.cbp-spmenu a:hover{background:#258ecd}.cbp-spmenu a:active{background:#afdefa;color:#47a3da}.cbp-spmenu-horizontal{width:100%;height:50px;left:0;z-index:150000011;overflow:hidden}.cbp-spmenu-horizontal h3{height:100%;width:20%;margin-right:6px;float:left}.cbp-spmenu-horizontal a{float:left;width:20%;padding:.8em;border-left:1px solid #258ecd}.cbp-spmenu-top{top:-150px}.cbp-spmenu-top.cbp-spmenu-open{top:0}@media screen and (max-width:55.1875em){.cbp-spmenu-horizontal{font-size:.6em}.cbp-spmenu-top{top:-110px}}#showTop{-webkit-transition:all .2s ease;-moz-transition:all .2s ease;transition:all .2s ease;z-index:150000011;position:fixed;height:50px;width:50px;left:0;top:0;padding:0;background:#47a3da}#nav-icon3{width:100%;height:100%;position:relative;top:5%;-webkit-transform:rotate(0);-moz-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0);-webkit-transition:.5s ease-in-out;-moz-transition:.5s ease-in-out;-o-transition:.5s ease-in-out;transition:.5s ease-in-out;cursor:pointer}#nav-icon3 span{display:block;position:absolute;height:9px;width:90%;margin-left:5%;background:#fff;border-radius:9px;opacity:1;left:0;-webkit-transform:rotate(0);-moz-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0);-webkit-transition:.25s ease-in-out;-moz-transition:.25s ease-in-out;-o-transition:.25s ease-in-out;transition:.25s ease-in-out}#nav-icon3 span:nth-child(1){top:4px}#nav-icon3 span:nth-child(2),#nav-icon3 span:nth-child(3){top:16px}#nav-icon3 span:nth-child(4){top:28px}#nav-icon3.open span:nth-child(1),#nav-icon3.open span:nth-child(4){top:18px;width:0;left:50%}#nav-icon3.open span:nth-child(2){-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}#nav-icon3.open span:nth-child(3){-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg)}.select_style{background:#FFF;overflow:hidden;display:inline-block;color:#525252;font-weight:300;-webkit-border-radius:5px 4px 4px 5px/5px 5px 4px 4px;-moz-border-radius:5px 4px 4px 5px/5px 5px 4px 4px;border-radius:5px 4px 4px 5px/5px 5px 4px 4px;-webkit-box-shadow:0 0 5px rgba(123,123,123,.2);-moz-box-shadow:0 0 5px rgba(123,123,123,.2);box-shadow:0 0 5px rgba(123,123,123,.2);border:1px solid #DADADA;font-family:"helvetica neue",arial;position:relative;cursor:pointer;padding-right:20px;margin-top:2px}.select_style span{position:absolute;right:10px;width:8px;height:8px;background:url(http://projects.authenticstyle.co.uk/niceselect/arrow.png) no-repeat;top:50%;margin-top:-4px}.select_style select{-webkit-appearance:none;appearance:none;width:120%;background:0 0;border:none;outline:0;cursor:pointer;padding:7px 10px;font-size:1.4em}',            
        head = document.head || document.getElementsByTagName("head")[0],
            style = document.createElement("style");
        style.type = "text/css";
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style);
    }

    function buildMenu() {
        var h3 = document.createElement("h3");
        h3.appendChild(document.createTextNode("Switch"));
        var nav = document.createElement("nav");
        nav.id = "cbp-spmenu-s3";
        nav.className = "cbp-spmenu cbp-spmenu-horizontal cbp-spmenu-top";
        nav.appendChild(h3);
        nav.appendChild(buildDropDown(dropdownOptions));
        document.body.appendChild(nav);
    }

    function addControl() {
        var button = document.createElement("button");
        button.id = "showTop";
        button.appendChild(buildHamburgerThing());
        document.body.appendChild(button);
        var menuTop = document.getElementById("cbp-spmenu-s3"),
            showTop = document.getElementById("showTop"),
            hamburgerAnimate = document.getElementById("nav-icon3");
        showTop.addEventListener("click", handleMenuToggleClick);

        function handleMenuToggleClick(e) {
            classie.toggle(this, "active");
            classie.toggle(menuTop, "cbp-spmenu-open");
            classie.toggle(hamburgerAnimate, "open");
            var top = (this.className === "active") ? "50" : "0";
            this.setAttribute("style", "top: " + top + "px");
        }
    }

    function buildDropDown(listOfOptions) {
        var span = document.createElement("span");
        var selectWrapper = document.createElement("div");
        selectWrapper.className = "select_style";
        var select = document.createElement("select");
        select.id = "switcher_dropdown";
        for (var i = 0; i < listOfOptions.length; i++) {
            var option = document.createElement("option");
            option.value = listOfOptions[i].url;
            option.text = listOfOptions[i].url;
            select.appendChild(option);
        }
        select.addEventListener("change", function(e) {
            var target = this.options[this.options.selectedIndex].value;
            var domain = (location.host.match(/([^.]+)\.\w{2,3}(?:\.\w{2})?$/) || [])[1];
            var domLoc = window.location.origin.indexOf(domain);
            var start = window.location.origin.substring(0, domLoc);
            var end = window.location.origin.substring((domLoc + domain.length))
            target = start + target + end;
            var win = window.open(target, "_blank");
        });
        selectWrapper.appendChild(select);
        selectWrapper.appendChild(span);
        return selectWrapper;
    }

    function buildHamburgerThing() {
        var toggler = document.createElement("div");
        toggler.id = "nav-icon3";
        for (var i = 0; i < 4; i++) {
            var span = document.createElement("span");
            toggler.appendChild(span);
        }
        return toggler;
    }
    addCSS();
    SiteSwitcher.buildMenu();
    addControl();
})();

(function(){
    var alert = document.createElement("div");
    var span = document.createElement("span");
    var a1 = document.createElement("a");
    var a2 = document.createElement("a");

    var toggleButton = document.createElement("div");
    toggleButton.id = "toggleAlertButton";
    toggleButton.appendChild(document.createTextNode(" X "));
    toggleButton.style["float"] = "right";
    toggleButton.style["padding"] = "0 6px 2px 0";
    toggleButton.style["cursor"] = "pointer";
    toggleButton.style["font-weight"] = "bold";
    toggleButton.style["-webkit-user-select"] = "none";
    toggleButton.style["-moz-user-select"] = "none";
    toggleButton.style["-ms-user-select"] = "none";
    toggleButton.style["user-select"] = "none";

    toggleButton.addEventListener("click",function(){
        var notice = document.getElementById("privacy_notice");
        var toggleAlertButton = document.getElementById("toggleAlertButton");
        if(notice.style["width"] === "0px"){
            notice.style["width"] = "100%";
            toggleAlertButton.style["color"] = "white";
            toggleAlertButton.style["position"] ="static";
            toggleAlertButton.style["font-size"] = "initial";
            toggleAlertButton.title = "";
            toggleAlertButton.innerHTML = " X ";
            toggleAlertButton.style["text-shadow"] = "";
        }else{
            notice.style["width"] = "0px";
            toggleAlertButton.title = "Policy Change";
            toggleAlertButton.innerHTML = " ! "
            toggleAlertButton.style["position"] ="fixed";
            toggleAlertButton.style["bottom"] ="5px";
            toggleAlertButton.style["right"] ="5px";
            toggleAlertButton.style["color"] = "maroon";
            toggleAlertButton.style["font-size"] = "1.5em";
            toggleAlertButton.style["text-shadow"] = "1px 1px 1px white";
        }
    })

    var b = document.getElementById("body");

    span.style["font-weight"] = "bold";
    span.appendChild(document.createTextNode(" Our privacy policy has changed. "))
    
    a1.href = "http://static.timesrecordnews.com/privacy/";
    a1.appendChild(document.createTextNode("Privacy Policy"));
    a1.style["color"] = "white";
    a1.style["text-decoration"] = "underline";
    
    a2.href="http://static.timesrecordnews.com/terms/";
    a2.appendChild(document.createTextNode("Terms of Use"));
    a2.style["color"] = "white";
    a2.style["text-decoration"] = "underline";

    alert.id="privacy_notice";
    alert.appendChild(span);
    alert.appendChild(document.createTextNode(" By using this site, you agree to the "));
    alert.appendChild(a1);
    alert.appendChild(document.createTextNode(" and "));
    alert.appendChild(a2);
    alert.appendChild(document.createTextNode("."));
    alert.appendChild(toggleButton)
    alert.style["padding"] = "5px 0";
    alert.style["background-color"] = "rgba(128,0,0,.92)";
    alert.style["color"] = "white";
    alert.style["text-align"] = "center";
    alert.style["position"] = "fixed";
    alert.style["bottom"] = "0";
    alert.style["right"] = "0";
    alert.style["width"] = "100%";
    alert.style["z-index"] = "150000010";
    alert.style["max-height"] = "60px";
    alert.style["overflow"] = "hidden";
    alert.style["transition"] = "all .2s";
    
    b.appendChild(alert)
})()
