import { Header } from 'mint-ui';
import $ from 'jquery'

Vue.component(Header.name, Header);
import Vue from 'vue'

export default {
	methods: {
		goback(){
			window.history.go(-1)
		},
		goTop(){
// 			setInterval(() => {
// 				
// 			},400)
			document.body.scrollTop = 0
			document.documentElement.scrollTop = 0
		}
	}
}
$(function () {
    function getTagHead() {
        var pageName = $('meta[name="page-name"]').attr("content") || "unknown";
        return HOT_TAG_ROOT + "top_bar." + pageName
    }
    $(".top-bar .btn-top.back").on("click", function () {
        ek.ping.reportClick(getTagHead() + ".back");
        pageAction.goBack()
    });
    $(".top-bar .btn-top.menu, .nav-menu-bg").on("click", function () {
        var $box = $(".nav-menu-box");
        if ($box.attr("data-animating")) return;
        if ($box.is(".show")) {
            $box.removeClass("show").attr("data-animating", "1");
            window.setTimeout(function () {
                $box.hide().attr("data-animating", "");
                $box = null
            }, 300);
            ek.ping.reportClick(getTagHead() + ".hide_nav")
        } else {
            var repaint = new Function("this.clientWidth");
            $box.show().each(repaint);
            $box.addClass("show").attr("data-animating", "1");
            window.setTimeout(function () {
                $box.attr("data-animating", "");
                $box = null
            }, 300);
            ek.ping.reportClick(getTagHead() + ".show_nav")
        }
    });
    $(".top-bar, .nav-menu-box, .nav-menu-bg").on("touchmove", function (e) {
        e.preventDefault()
    });
    $(".nav-menu-box .nav-list .item").on("click", function () {
        var btnName = $(this).attr("data-name") || "\u672a\u77e5";
        ek.ping.reportClick(getTagHead() + ".nav_" + btnName)
    });
    $(".nav-menu-box .btn-top.search").on("click", function () {
        ek.ping.reportClick(getTagHead() + ".search")
    });
    $(".nav-menu-box .btn-home").on("click", function () {
        ek.ping.reportClick(getTagHead() + ".nav_home")
    })
});