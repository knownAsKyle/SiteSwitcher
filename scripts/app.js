/*!
 * classie v1.0.1
 * class helper functions
 * from bonzo https://github.com/ded/bonzo
 * MIT license
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
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
/*************
SiteSwitcher
**************/
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
        var css = '.cbp-spmenu{background:#47a3da;position:fixed;-webkit-transition:all .3s ease;-moz-transition:all .3s ease;transition:all .3s ease}.cbp-spmenu h3{color:#afdefa;font-size:1.9em;padding:5px 0 0 5px;margin:0;font-weight:300;background:#0d77b6}.cbp-spmenu a{display:block;color:#fff;font-size:1.1em;font-weight:300}.cbp-spmenu a:hover{background:#258ecd}.cbp-spmenu a:active{background:#afdefa;color:#47a3da}.cbp-spmenu-horizontal{width:100%;height:50px;left:0;z-index:150000011;overflow:hidden}.cbp-spmenu-horizontal h3{height:100%;width:20%;margin-right:6px;float:left}.cbp-spmenu-horizontal a{float:left;width:20%;padding:.8em;border-left:1px solid #258ecd}.cbp-spmenu-top{top:-150px}.cbp-spmenu-top.cbp-spmenu-open{top:0}@media screen and (max-width:55.1875em){.cbp-spmenu-horizontal{font-size:.6em}.cbp-spmenu-top{top:-110px}}#showTop{-webkit-transition:all .2s ease;-moz-transition:all .2s ease;transition:all .2s ease;z-index:150000011;position:fixed;height:50px;width:50px;right:0;top:0;padding:0;background:#47a3da}#nav-icon3{width:100%;height:100%;position:relative;top:5%;-webkit-transform:rotate(0);-moz-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0);-webkit-transition:.5s ease-in-out;-moz-transition:.5s ease-in-out;-o-transition:.5s ease-in-out;transition:.5s ease-in-out;cursor:pointer}#nav-icon3 span{display:block;position:absolute;height:9px;width:90%;margin-left:5%;background:#fff;border-radius:9px;opacity:1;left:0;-webkit-transform:rotate(0);-moz-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0);-webkit-transition:.25s ease-in-out;-moz-transition:.25s ease-in-out;-o-transition:.25s ease-in-out;transition:.25s ease-in-out}#nav-icon3 span:nth-child(1){top:4px}#nav-icon3 span:nth-child(2),#nav-icon3 span:nth-child(3){top:16px}#nav-icon3 span:nth-child(4){top:28px}#nav-icon3.open span:nth-child(1),#nav-icon3.open span:nth-child(4){top:18px;width:0;left:50%}#nav-icon3.open span:nth-child(2){-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}#nav-icon3.open span:nth-child(3){-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg)}.select_style{background:#FFF;overflow:hidden;display:inline-block;color:#525252;font-weight:300;-webkit-border-radius:5px 4px 4px 5px/5px 5px 4px 4px;-moz-border-radius:5px 4px 4px 5px/5px 5px 4px 4px;border-radius:5px 4px 4px 5px/5px 5px 4px 4px;-webkit-box-shadow:0 0 5px rgba(123,123,123,.2);-moz-box-shadow:0 0 5px rgba(123,123,123,.2);box-shadow:0 0 5px rgba(123,123,123,.2);border:1px solid #DADADA;font-family:"helvetica neue",arial;position:relative;cursor:pointer;padding-right:20px;margin-top:2px;margin-right:4px;float:right}.select_style span{position:absolute;right:10px;width:8px;height:8px;background:url(http://projects.authenticstyle.co.uk/niceselect/arrow.png) no-repeat;top:50%;margin-top:-4px}.select_style select{-webkit-appearance:none;appearance:none;width:120%;background:0 0;border:none;outline:0;cursor:pointer;padding:7px 10px;font-size:1.4em}.checkBoxWrapper{float:left;display:inline-block}input[type=checkbox].css-checkbox{position:absolute;z-index:-1000;left:-1000px;overflow:hidden;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;border:0}input[type=checkbox].css-checkbox+label.css-label{padding-left:32px;height:27px;display:inline-block;line-height:27px;background-repeat:no-repeat;background-position:0 0;font-size:27px;vertical-align:middle;cursor:pointer}#switcher_site,.innerSiteDisplay{position:fixed;width:100%;height:100%}input[type=checkbox].css-checkbox:checked+label.css-label{background-position:0 -27px}label.css-label{background-image:url(http://csscheckbox.com/checkboxes/u/csscheckbox_bce24e972f9de57735350efff79f574c.png);-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.innerSiteDisplay{top:0;left:0}',
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style);
    }

    function buildMenu() {
        var h3 = document.createElement("h3");
        h3.appendChild(document.createTextNode("S"));
        var nav = document.createElement("nav");
        nav.id = "cbp-spmenu-s3";
        nav.className = "cbp-spmenu cbp-spmenu-horizontal cbp-spmenu-top";
        nav.appendChild(h3);
        nav.appendChild(buildDropDown(dropdownOptions));
        var wrapper = document.createElement("div");
        wrapper.className = "checkBoxWrapper";
        nav.appendChild(buildCheckBox(wrapper, {
            "name": "Dev"
        }));
        nav.appendChild(buildCheckBox(wrapper, {
            "name": "Stage"
        }));
        nav.appendChild(buildCheckBox(wrapper, {
            "name": "Mobile"
        }));
        document.body.appendChild(nav);
    }

    function addControl() {
        var button = document.createElement("button");
        button.id = "showTop";
        button.appendChild(buildHamburgerThing());
        document.body.appendChild(button);
        var menuTop = document.getElementById('cbp-spmenu-s3'),
            showTop = document.getElementById('showTop');
        hamburgerAnimate = document.getElementById('nav-icon3');
        showTop.addEventListener("click", handleMenuToggleClick);

        function handleMenuToggleClick(e) {
            classie.toggle(this, 'active');
            classie.toggle(menuTop, 'cbp-spmenu-open');
            classie.toggle(hamburgerAnimate, 'open');
            var top = (this.className === "active") ? "50" : "0";
            this.setAttribute("style", "top: " + top + "px");
        }
    }

    function buildCheckBox(parent, options) {
        options = options || {};
        options.name = options.name || "Dev";
        var modeDev = document.createElement("input");
        modeDev.type = "checkbox";
        modeDev.name = "switch_";
        modeDev.id = "switch_" + options.name;
        modeDev.className = "css-checkbox";
        modeDev.addEventListener("click", function() {
            if (this.checked && this.id !== "switch_Mobile") {
                var allChecks = document.getElementsByClassName("css-checkbox");
                for (var i = 0; i < allChecks.length; i++) {
                    if (allChecks[i] !== this && allChecks[i].id !== "switch_Mobile") {
                        allChecks[i].checked = false;
                    }
                }
            }
        });
        var modeDevLbl = document.createElement("label");
        modeDevLbl.htmlFor = modeDev.id;
        modeDevLbl.className = "css-label";
        modeDevLbl.appendChild(document.createTextNode(options.name));
        parent.appendChild(modeDev);
        parent.appendChild(modeDevLbl);
        return parent;
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
        select.addEventListener('change', function(e) {
            var target = this.options[this.options.selectedIndex].value;
            //  var domain = (location.host.match(/([^.]+)\.\w{2,3}(?:\.\w{2})?$/) || [])[1];
            //  var domLoc = window.location.origin.indexOf(domain);
            //  var start = window.location.origin.substring(0, domLoc);
            //   domain = domain || [];
            //   var end = window.location.origin.substring((domLoc + domain.length));
            var start = "http://www.",
                end = ".com";
            if (document.getElementById("switch_Dev").checked) {
                start = "http://dev.www.";
            }
            if (document.getElementById("switch_Stage").checked) {
                start = "http://stage.www.";
            }
            if (document.getElementById("switch_Mobile").checked) {
                end = end + "?d=mobile";
                setUserAgent(window, "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1")
            }
            target = start + target + end;
            setInnerSite({
                "url": target,
                "metrics": {
                    "loadTime":new Date().getTime()
                }
            });

            function setUserAgent(window, userAgent) {
                if (window.navigator.userAgent != userAgent) {
                    var userAgentProp = {
                        get: function() {
                            return userAgent;
                        }
                    };
                    try {
                        Object.defineProperty(window.navigator, 'userAgent', userAgentProp);
                    } catch (e) {
                        window.navigator = Object.create(navigator, {
                            userAgent: userAgentProp
                        });
                    }
                }
            }
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

    function buildInnerSite() {
        var div = document.createElement("div");
        div.id = "switcher_site";
        document.body.appendChild(div);
    }

    function setInnerSite(data) {
        var menuTop = document.getElementById('cbp-spmenu-s3');
        data = data || {};
        data.url = data.url || "www.caller.com";
        var iframe = document.createElement("iframe");
        iframe.className = "innerSiteDisplay";
        iframe.id = "innerSiteDisplay";
        iframe.src = data.url;
        iframe.onload = function(a) {
            var loadTime = ((new Date().getTime()) - data.metrics.loadTime)/1000.0;
            console.info("Load Time: ", loadTime," seconds")
        };
        menuTop.style.opacity = ".5";
        var switcher = document.getElementById("switcher_site");
        while (switcher.firstChild) {
            switcher.removeChild(switcher.firstChild);
        }
        switcher.appendChild(iframe);
        setTimeout(function() {
            menuTop.style.opacity = "1";

            // var menuTop = document.getElementById('cbp-spmenu-s3'),
            //     showTop = document.getElementById('showTop');
            // classie.toggle(showTop, 'active');
            // classie.toggle(menuTop, 'cbp-spmenu-open');
            // classie.toggle(hamburgerAnimate, 'open');
            // var top = (showTop.className === "active") ? "50" : "0";
            // showTop.setAttribute("style", "top: " + top + "px");
        }, 2000);
    }
    //addCSS();
    SiteSwitcher.buildMenu();
    addControl();
    buildInnerSite();
})();