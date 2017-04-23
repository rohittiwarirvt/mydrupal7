function loadPage(e) {
    location.href = e
}

function gotoUrl(e) {
    location.href = e
}

function displayPress() {
    device && ($(".topNav ul li ul").css({
        display: "none"
    }), $("#mPress").css({
        display: "block"
    }), $(".serviceBanner, .aboutusBanner, .solutionBanner").css({
        "background-attachment": "scroll"
    }))
}

function nextPrevClient() {
    $(document).on("keydown", function(e) {
        $(".clientPrev").html() && 37 == e.keyCode && (location.href = $(".clientPrev").attr("href")), $(".clientNext").html() && 39 == e.keyCode && (location.href = $(".clientNext").attr("href"))
    })
}

function errorPageAnimation() {
    device || TweenMax.staggerFrom([$(".errBannerCont h1"), $(".errBannerCont h2"), $(".errBannerCont h3"), $(".errBannerCont h4"), $(".errBannerCont .btnLink")], 1, {
        bottom: -50,
        opacity: 0,
        delay: .3,
        ease: Expo.easeOut,
        force3D: !0
    }, .2)
}

function navigation() {
    $(".topNav ul>li").each(function() {
        $(this).hover(function(e) {
            var t = $(this),
                i = t.find("ul").length;
            1 == i && t.find("ul").slideDown(0), e.preventDefault()
        }, function(e) {
            var t = $(this),
                i = t.find("ul").length;
            1 == i && t.find("ul").slideUp(0), e.preventDefault()
        })
    })
}


$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
		var stickyTop = $('.caraouselMainContainer, .contactBanner, .aboutusBanner, .serviceBanner, .solutionBanner, .clientsBanner, .bannerHeader, .bannerOverlay, .pressBanner, .careerBanner').innerHeight();
		if (scroll >= stickyTop) {
			//clearHeader, not clearheader - caps H
			$(".header").addClass("shortenHeader");
		}
		else{
			$(".header").removeClass("shortenHeader");
		}
}); 


function mobileNavigation() {
    $(".navBtn").on("click", function() {
        var e = $(".topNavMobile>ul").css("display");
        "none" == e ? ($("#btnCls").css({
            display: "block"
        }), TweenMax.to($("#btn"), .3, {
            scale: 0,
            ease: Expo.easeOut
        }), TweenMax.from($("#btnCls"), .3, {
            scale: 0,
            ease: Expo.easeOut
        }), $(".topNavMobile>ul").stop(!0, !0).slideDown(300), $(".navOverlay").css({
            display: "block"
        }), isClick = !0) : ($("#btnCls").css({
            display: "none"
        }), TweenMax.to($("#btn"), .3, {
            scale: 1,
            ease: Expo.easeOut
        }), TweenMax.from($("#btnCls"), .3, {
            scale: 1,
            ease: Expo.easeOut
        }), $(".topNavMobile>ul").stop(!0, !0).slideUp(300), $(".navOverlay").css({
            display: "none"
        }), isClick = !1)
    })
}
$.fn.isOnScreen = function() {
    if (void 0 !== this.html()) {
        var e = $(window),
            t = {
                top: e.scrollTop(),
                left: e.scrollLeft()
            };
        t.right = t.left + e.width(), t.bottom = t.top + e.height();
        var i = this.offset();
        return i.right = i.left + this.outerWidth(), i.bottom = i.top + this.outerHeight(), !(t.right < i.left || t.left > i.right || t.bottom < i.top || t.top > i.bottom)
    }
};
var device = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");
$(function() {
    nextPrevClient(), errorPageAnimation(), $(".bannerOverlay").html() && ($.preload("../images/clientsHeader/NetTexts.jpg", "../images/clientsHeader/SiteCompli.jpg", "../images/clientsHeader/NatGeo.jpg", "../images/clientsHeader/FOX.jpg", "../images/clientsHeader/Ecko.jpg", "../images/clientsHeader/Kenya.jpg", "../images/clientsHeader/Crimson.jpg", "../images/clientsHeader/MLB.jpg", "../images/clientsHeader/NYRR.jpg", "../images/clientsHeader/playbill.jpg", "../images/clientsHeader/shleppers.jpg", "../images/clientsHeader/pepsi.jpg", "../images/clientsHeader/NYU.jpg", "../images/clientsHeader/hki.jpg", "../images/clientsHeader/lcg.jpg", "../images/clientsHeader/snagfilms.jpg", "../images/clientsHeader/nokia.jpg", "../images/clientsHeader/shleppers.jpg", "../images/clientsHeader/wtf.jpg", "../images/Graphics/ipad-net-texts.png", "../images/Graphics/computer-sitecompli.png", "../images/Graphics/computer-ngc.png", "../images/Graphics/iphone-fox.png", "../images/Graphics/computer-ecko.png", "../images/Graphics/computer-kenya.png", "../images/Graphics/computer-crimson.png", "../images/Graphics/iphone-mlbpa.png", "../images/Graphics/computer-nyrr.png", "../images/Graphics/computer-playbill.png"), $(".bannerOverlay").animate({
        opacity: 1
    }, 1e3))
});
var isClick = !1;
$(function() {
        $("#pageContainer").append("<div class='navOverlay'></div>"), mobileNavigation(), displayPress();
        var e = Math.abs($(window).innerWidth()),
            t = Math.abs($(window).innerHeight());
        $(".topNavMobile > ul").css({
            height: t - 54,
            overflow: "auto"
        }), $(window).on("resize", function() {
            e = Math.abs($(window).innerWidth()), t = Math.abs($(window).innerHeight()), !device && e >= 768 && $(".navOverlay").css({
                display: "none"
            }), $(".topNavMobile > ul").css({
                height: t - 54,
                overflow: "auto"
            })
        })
    }),
    function(e, t) {
        e.homePage = function() {
            function e() {
                function e() {}
                this.activeNav = function() {
                    t("*").on("click", function() {
                        return !0
                    });
                    var e = window.location.pathname,
                        i = e.substr(e.lastIndexOf("/") + 1).toLowerCase().split(".")[0];
                    t(".topNav>ul>li").each(function() {
                        t(this).hasClass(i) && t(this).addClass("activeNav")
                    }), t(".topNav>ul>li>ul>li").each(function() {
                        t(this).hasClass(i) && t(this).addClass("activeNav")
                    }), t(".topNavMobile>ul>li").each(function() {
                        t(this).hasClass(i) && t(this).addClass("activeNav")
                    }), t(".topNavMobile>ul>li>ul>li").each(function() {
                        t(this).hasClass(i) && t(this).addClass("activeNav")
                    }), ("press" == i || "career" == i) && (t(".topNav>ul>li").eq(0).addClass("activeNav"), device && "press" == i && t(".topNav>ul>li").eq(0).removeClass("activeNav"), t(".topNavMobile>ul>li").eq(0).addClass("activeNav")), ("web-development" == i || "mobile-application-development" == i || "custom-software-development" == i || "it-audits" == i || "application-maintenance" == i || "technology-consolidation" == i) && (t(".topNav>ul>li").eq(1).addClass("activeNav"), t(".topNavMobile>ul>li").eq(1).addClass("activeNav")), ("e-commerce" == i || "content-management-system" == i || "saas-platforms" == i || "automation-platforms" == i || "social-networks" == i || "scraping-engines" == i || "legacy-migration" == i) && (t(".topNav>ul>li").eq(2).addClass("activeNav"), t(".topNavMobile>ul>li").eq(2).addClass("activeNav")), ("net-text-ipad-app" == i || "sitecompli" == i || "ngc" == i || "fox" == i || "ecko" == i || "kenya-airways" == i || "crimson" == i || "mlbpa" == i || "toto" == i || "sabon" == i || "nyrr" == i || "playbill" == i || "ux-logistics" == i || "pepsico" == i || "nyu" == i || "hk-international" == i || "lcg" == i || "snagfilms" == i || "nokia-siemens-networks" == i || "shleppers" == i || "work-train-fight" == i || "taxinet" == i) && (t(".topNav>ul>li").eq(3).addClass("activeNav"), t(".topNavMobile>ul>li").eq(3).addClass("activeNav"))
                }, this.init = function() {
                    e()
                }
            }
            return new e
        }(), e.aboutUs = function() {
            function e() {
                function e() {
                    t(".aboutSetting li").on("mouseenter", s), t(".aboutSetting li").on("mouseleave", r), 1 == t("#platformLogoList1").isOnScreen() && c(), 1 == t("#platformLogoList2").isOnScreen() && l(), 1 == t("#platformLogoList3").isOnScreen() && d(), 1 == t(".bgLocation").isOnScreen() && p(), 1 == t(".locationList").isOnScreen() && f(), t(document).on("scroll", function() {
                        1 == t("#platformLogoList1").isOnScreen() && c(), 1 == t("#platformLogoList2").isOnScreen() && l(), 1 == t("#platformLogoList3").isOnScreen() && d(), 1 == t(".bgLocation").isOnScreen() && p(), 1 == t(".locationList").isOnScreen() && f()
                    })
                }

                function i() {
                    TweenMax.staggerFrom(t(".aboutusInner h3"), 2, {
                        bottom: -100,
                        opacity: 0,
                        delay: .3,
                        ease: Expo.easeOut,
                        force3D: !0
                    }, .2)
                }

                function n() {
                    t(".workProcess li").css({
                        opacity: 0
                    }), t(".workProcess").waypoint(function() {
                        t(".workProcess li").css({
                            opacity: 1
                        }), TweenMax.staggerFrom(t(".workProcess li"), 1, {
                            bottom: -100,
                            opacity: 0,
                            delay: .2,
                            ease: Expo.easeOut,
                            force3D: !0
                        }, .2)
                    }, {
                        offset: "70%",
                        triggerOnce: !0
                    })
                }

                function o() {
                    t(".team li").each(function() {
                        t(this).on("mouseenter", function() {
                            t(this).find(".teamThumbOverlay").stop(!0, !0).fadeIn(300), t(this).find(".name, .desig").css({
                                color: "#ffffff"
                            })
                        }), t(this).on("mouseleave", function() {
                            t(this).find(".teamThumbOverlay").stop(!0, !0).fadeOut(300), t(this).find(".name, .desig").css({
                                color: "#b4aeb5"
                            })
                        })
                    })
                }

                function a() {
                    t(".technologyAbout li").each(function() {
                        t(this).hover(function() {
                            var e = t(this);
                            t(this).find(".techLogo").hide(), t(this).find(".frameworkContent").stop(!0, !0).animate({
                                zIndex: 9999,
                                width: "+=96",
                                height: "+=107",
                                top: "-=53",
                                left: "-=48"
                            }, 200, function() {
                                t(e).find(".txt").stop(!0, !0).fadeIn(200)
                            })
                        }, function() {
                            t(this).find(".techLogo").show(), t(this).find(".frameworkContent").stop(!0, !0).animate({
                                zIndex: -1,
                                width: "-=96",
                                height: "-=107",
                                top: "+=53",
                                left: "+=48"
                            }, 200), t(this).find(".txt").stop(!0, !0).fadeOut(0)
                        })
                    })
                }

                function s(e) {
                    var i = t(this).attr("data-class");
                    t(this).find("div").eq(0).find("span").stop(!0, !0).animate({
                        top: -148
                    }, 300), t(this).find("div").eq(1).find("span").stop(!0, !0).animate({
                        top: -40
                    }, 300), t(".txtDefault").stop(!0, !0).fadeOut(0), t("#" + i).stop(!0, !0).fadeIn(300), e.preventDefault(), e.stopPropagation()
                }

                function r() {
                    var e = t(this).attr("data-class");
                    t(this).find("span").stop(!0, !0).animate({
                        top: 0
                    }, 300), t(".txtDefault").stop(!0, !0).fadeIn(300), t("#" + e).stop(!0, !0).fadeOut(0), t(".icreonIcon").find("." + e).stop(!0, !0).animate({
                        top: 0
                    }, 300)
                }

                function c() {
                    t("#platformLogoList1 li").each(function(e) {
                        t(this).delay(150 * e).addClass("platformLogoListAnim")
                    })
                }

                function l() {
                    t("#platformLogoList2 li").each(function(e) {
                        t(this).delay(150 * e).addClass("platformLogoListAnim")
                    })
                }

                function d() {
                    t("#platformLogoList3 li").each(function(e) {
                        t(this).delay(150 * e).addClass("platformLogoListAnim")
                    })
                }

                function p() {
                    t(".bgLocation").addClass("bgLocationAnim"), t(".locationCircle").each(function(e) {
                        t(this).delay(1500 * e).addClass("locationCircleAnim")
                    })
                }

                function f() {
                    t(".locationList li").addClass("locationListAnim")
                }

                function u() {
                    t(".locationCircle").hover(function() {
                        t(this).addClass("locationCircleAnimActive");
                        var e = t(this).attr("data-addressid");
                        t(".locationList li").css({
                            transition: "none"
                        }), t(".locationList li").stop(!0, !0).animate({
                            opacity: .2
                        }, 300), t("#" + e).stop(!0, !0).animate({
                            top: 0,
                            opacity: 1
                        }, 0)
                    }, function() {
                        t(this).removeClass("locationCircleAnimActive"), t(".locationList li").css({
                            transition: "none"
                        });
                        t(this).attr("data-addressid");
                        t(".locationList li").stop(!0, !0).animate({
                            opacity: 1
                        }, 300)
                    }), t(".locationList li").hover(function() {
                        t(this).addClass("x");
                        var e = t(this).index();
                        t(".locationList li").css({
                            transition: "none"
                        }), t(".locationCircle").eq(e).addClass("locationCircleAnimActive"), t(".locationList li:not(.x)").stop(!0, !0).animate({
                            opacity: .2
                        }, 0)
                    }, function() {
                        t(this).removeClass("x"), t(".locationList li").css({
                            transition: "none"
                        }), t(".locationCircle").removeClass("locationCircleAnimActive"), t(".locationList li:not(.x)").stop(!0, !0).animate({
                            opacity: 1
                        }, 400)
                    })
                }
                var m = function() {
                    t(".aboutSetting").animate({
                        opacity: 1
                    }, 600, function() {
                        t(".txtDefault").fadeIn(1e3)
                    })
                };
                this.init = function() {
                    i(), device || n(), o(), e(), m(), u(), a()
                }
            }
            return new e
        }(), e.services = function() {
            function i() {
                function i() {
                    t(".serviceRow").on("mouseover", e.services.mHover), t(".serviceRow").on("mouseout", e.services.mOut), t(".sectionList li a").each(function() {
                        t(this).click(s)
                    }), t(".resourcesList li").on("mouseover", d.resourceOver), t(".resourcesList li").on("mouseout", d.resourceOut), t(".serviceRowCont").addClass("serviceRowContAnim"), t(".closeSection").click(r), 1 == t(".changeLogo").isOnScreen() && o(), t(document).on("scroll", function() {})
                }

                function n() {
                    t(".popcontent").html() && t(".popcontent").mCustomScrollbar({
                        scrollButtons: {
                            enable: !1
                        },
                        advanced: {
                            updateOnContentResize: !0
                        }
                    })
                }

                function o() {
                    t(".changeLogo").each(function() {
                        t(this).hover(function() {
                            t(this).find(".logoIcon").stop(!0, !0).animate({
                                marginTop: -43,
                                opacity: 0
                            }, 400), t(this).find(".getInTouch").stop(!0, !0).animate({
                                opacity: 1
                            }, 400)
                        }, function() {
                            t(this).find(".logoIcon").stop(!0, !0).animate({
                                marginTop: 0,
                                opacity: 1
                            }, 400), t(this).find(".getInTouch").stop(!0, !0).animate({
                                opacity: 0
                            }, 400)
                        })
                    })
                }

                function a() {
                    var e = t(".pageHeading"),
                        i = t(".txtPunchline"),
                        n = t(".downArrow");
                    TweenMax.staggerFrom([e, i, n], 1, {
                        top: -100,
                        opacity: 0,
                        delay: .2,
                        ease: Expo.easeOut,
                        force3D: !0
                    }, .2)
                }

                function s() {
                    t(".activeSection").removeClass("activeSection"), t(this).addClass("activeSection"), t(".relatedSection").stop(!0, !0).fadeOut(300), t(this).next(".relatedSection").stop(!0, !0).fadeIn(300);
                    var e = t(this).attr("href");
                    return t("html,body").stop(!0, !0).animate({
                        scrollTop: t(e).offset().top - 230
                    }, 2e3, "easeOutExpo"), !1
                }

                function r() {
                    location.href = "services.html"
                }

                function c() {
                    t(".sectionList li a").each(function() {
                        t(this).hover(function() {
                            t(this).next(".relatedSection").stop(!0, !0).fadeIn(300)
                        }, function() {
                            t(this).hasClass("activeSection") || t(this).next(".relatedSection").stop(!0, !0).fadeOut(300)
                        })
                    })
                }

                function l() {
                    t(".technology li").each(function() {
                        t(this).hover(function() {
                            var e = t(this),
                                i = t(this).find(".frameworkContent").attr("id");
                            t("a." + i).addClass("activeFrm"), t(this).find(".frameworkContent").stop(!0, !0).animate({
                                zIndex: 9999,
                                width: "+=96",
                                height: "+=107",
                                top: "-=53",
                                left: "-=48"
                            }, 300, function() {
                                t(e).find(".txt").stop(!0, !0).fadeIn(300)
                            })
                        }, function() {
                            var e = t(this).find(".frameworkContent").attr("id");
                            t("a." + e).removeClass("activeFrm"), t(this).find(".frameworkContent").stop(!0, !0).animate({
                                zIndex: -1,
                                width: "-=96",
                                height: "-=107",
                                top: "+=53",
                                left: "+=48"
                            }, 300), t(this).find(".txt").stop(!0, !0).fadeOut(0)
                        })
                    })
                }
                var d = this;
                this.showHideSliderArrow = function() {
                    t(".slidePrev").html() && (t(".slidePrev, .slideNext").css({
                        display: "none"
                    }), t(".fluidHeight, .sticker").on("mouseenter", function(e) {
                        t(".slidePrev, .slideNext").stop(!0, !0).fadeIn(), e.preventDefault()
                    }), t(".fluidHeight, .sticker").on("mouseleave", function() {
                        t(".slidePrev, .slideNext").stop(!0, !0).fadeOut()
                    }))
                }, this.customPopup = function() {
                    t(".popup-with-zoom-anim").html() && t(".popup-with-zoom-anim").magnificPopup({
                        type: "inline",
                        fixedContentPos: !1,
                        fixedBgPos: !0,
                        overflowY: "auto",
                        closeBtnInside: !0,
                        preloader: !1,
                        midClick: !0,
                        removalDelay: 300,
                        mainClass: "my-mfp-zoom-in"
                    })
                }, this.fixHeader = function() {
                    var e = t("#logo").attr("data-newlogo"),
                        i = t("#logo").attr("src");
                    return t(window).scrollTop() > 50 && (t(".header").addClass("headerBg"), t("#logo").attr("src", e)), t("body").hasClass("largeScroll") ? (t(window).on("scroll", function() {
                        var n = t(window).scrollTop();
                        n >= 400 ? (t(".header").addClass("headerBg"), t("#logo").attr("src", e)) : (t(".header").removeClass("headerBg"), t("#logo").attr("src", i))
                    }), this) : t("body").hasClass("noHeaderbg") ? (t(".header").addClass("headerBg"), void t("#logo").attr("src", e)) : (t(window).on("scroll", function() {
                        var n = t(window).scrollTop();
                        n >= 50 ? (t(".header").addClass("headerBg"), t("#logo").attr("src", e)) : (t(".header").removeClass("headerBg"), t("#logo").attr("src", i))
                    }), this)
                }, this.resourceOver = function() {
                    t(this).find(".readMore span").addClass("borderAnim")
                }, this.resourceOut = function() {
                    t(this).find(".readMore span").removeClass("borderAnim")
                };
                var p;
                this.clientHoverEffect = function() {
                    t(".item").on("mouseenter", function() {
                        t(this).find(".clientOverlayBg").addClass("clientOverlayBgAnim"), t(this).find(".txtClientHeading").addClass("txtClientHeadingAnim");
                        var e = t(this).find(".elementList li"),
                            i = 0;
                        p = function() {
                            i < e.length && (e.eq(i).addClass("elmAnimation"), i += 1)
                        }, setInterval(p, 0)
                    }), t(".item").on("mouseleave", function() {
                        t(this).find(".clientOverlayBg").removeClass("clientOverlayBgAnim"), t(this).find(".txtClientHeading").removeClass("txtClientHeadingAnim"), t(".elmAnimation").removeClass("elmAnimation"), clearInterval(p, 0)
                    })
                }, this.mHover = function() {
                    var e = t(this).find(".indicateIcon").attr("data-hover");
                    t(this).find(".indicateIcon").attr("src", e), t(this).find(".bgElm1").addClass("bgElm1Anim"), t(this).find(".bgElm2").addClass("bgElm2Anim"), t(this).find(".bgElm3").addClass("bgElm3Anim")
                }, this.mOut = function() {
                    var e = t(this).find(".indicateIcon").attr("data-out");
                    t(this).find(".indicateIcon").attr("src", e), t(this).find(".bgElm1").removeClass("bgElm1Anim"), t(this).find(".bgElm2").removeClass("bgElm2Anim"), t(this).find(".bgElm3").removeClass("bgElm3Anim")
                };
                this.init = function() {
                    e.services.showHideSliderArrow(), e.services.customPopup(), n(), i(), c(), l(), o(), e.services.clientHoverEffect(), a()
                }
            }
            return new i
        }(), e.experience = function() {
            function i() {
                function i() {
                    t(".serviceRow").on("mouseover", e.services.mHover), t(".serviceRow").on("mouseout", e.services.mOut), t(".expSlide").each(function() {
                        t(this).on("mouseenter", s), t(this).on("mouseleave", r)
                    }), t(".expSlideLink").each(function() {
                        t(this).on("mouseover", n)
                    }), t(".expSlideLink:not(.activePage)").each(function() {
                        t(this).on("mouseout", o)
                    }), t(".resourcesList li").on("mouseover", e.services.resourceOver), t(".resourcesList li").on("mouseout", e.services.resourceOut), t(window).on("scroll", function() {
                        var e = t(this).scrollTop();
                        e > 350 ? (t(".layerOuter").css({
                            display: "none"
                        }), t(".experienceListOuter").addClass("setShadow")) : (t(".layerOuter").css({
                            display: "none"
                        }), t(".experienceListOuter").removeClass("setShadow"))
                    }), e.experience.bannerElementWebDev(), e.experience.bannercustomSoftware(), e.experience.bannerTechnologyStrategy(), e.experience.bannerApplicationMaintenance(), e.experience.bannerElement_CMS(), device || (e.experience.theBacics(), e.experience.notSoObvious())
                }

                function n() {
                    t(this).attr("data-expclass")
                }

                function o() {
                    var e = t(this).attr("data-expclass");
                    t(this).removeClass(e)
                }

                function a() {
                    t(".platformElementList li").addClass("elementAnim"), t(".platformBanner h1").addClass("platformHeadingAnim")
                }

                function s() {
                    var e = t(this).attr("data-icons").split(","),
                        i = t(".expIconList li");
                    i.eq(0).find("span").css({
                        background: "url(./images/" + e[0] + ".png) center center no-repeat",
                        display: "none"
                    }).stop(!0, !0).fadeIn(600), i.eq(1).find("span").css({
                        background: "url(./images/" + e[1] + ".png) center center no-repeat",
                        display: "none"
                    }).stop(!0, !0).fadeIn(600), i.eq(2).find("span").css({
                        background: "url(./images/" + e[2] + ".png) center center no-repeat",
                        display: "none"
                    }).stop(!0, !0).fadeIn(600), t(this).find(".platformBg").addClass("platformAnim"), t(this).find(".exp-heading").css({
                        color: "#ffffff"
                    }), t(this).find(".readMore-exp img").attr("src", "images/plus-icon-hover.png")
                }

                function r() {
                    t(".expIconList li span").css({
                        background: "none"
                    }), t(this).find(".platformBg").removeClass("platformAnim"), t(this).find(".exp-heading").css({
                        color: "#ce4132"
                    }), t(this).find(".readMore-exp img").attr("src", "images/plus-icon.png")
                }

                function c() {
                    t(".m_expCont").each(function() {
                        t(this).hover(function() {
                            t(this).find(".platformBg").addClass("platformAnim"), t(this).find(".exp-heading").css({
                                color: "#ffffff"
                            })
                        }, function() {
                            t(this).find(".platformBg").removeClass("platformAnim"), t(this).find(".exp-heading").css({
                                color: "#ce4132"
                            })
                        })
                    })
                }

                function l() {
                    t(".expSlide").each(function(e) {
                        t(this).delay(50 * e).animate({
                            opacity: 1,
                            marginTop: 0
                        }, 600)
                    })
                }

                function d() {
                    t(".theBasicsList li").each(function() {
                        t(this).hover(function() {
                            t(this).find(".theBasicsListContent").addClass("theBasicsListContentAnim")
                        }, function() {
                            t(this).find(".theBasicsListContent").removeClass("theBasicsListContentAnim")
                        })
                    })
                }

                function p() {
                    t(".keyFeatureList li").each(function() {
                        t(this).hover(function() {
                            t(this).find(".blurTxt").stop(!0, !0).animate({
                                opacity: 0
                            }, 600), t(this).find(".obviousHeading").stop(!0, !0).animate({
                                opacity: 0
                            }, 600), t(this).find("p").stop(!0, !0).fadeIn(600)
                        }, function() {
                            t(this).find(".blurTxt").stop(!0, !0).animate({
                                opacity: 1
                            }, 600), t(this).find(".obviousHeading").stop(!0, !0).animate({
                                opacity: 1
                            }, 600), t(this).find("p").stop(!0, !0).fadeOut(600)
                        })
                    })
                }

                function f() {
                    t(".iosSlider").html() && (t(".iosSlider").iosSlider({
                        snapToChildren: !0,
                        desktopClickDrag: !0,
                        infiniteSlider: !0,
                        snapSlideCenter: !0,
                        autoSlide: !0,
                        autoSlideTimer: 2e3,
                        navNextSelector: ".slideNext",
                        navPrevSelector: ".slidePrev"
                    }), t(".iosSlider").find("i").remove())
                }
                this.bannerElementWebDev = function() {
                    var e = new TimelineLite;
                    e.add(TweenLite.from(t(".webdev-bannerElm2"), .3, {
                        bottom: -50,
                        opacity: 0,
                        delay: .3,
                        ease: Expo.easeOut
                    })), e.add(TweenLite.from(t(".webdev-bannerElm1"), .3, {
                        top: -50,
                        delay: .3,
                        opacity: 0,
                        ease: Expo.easeOut
                    }))
                }, this.bannerElement = function() {
                    var e = new TimelineLite;
                    e.add(TweenLite.from(t(".bannerElm2"), .3, {
                        bottom: -100,
                        opacity: 0,
                        delay: .3,
                        ease: Expo.easeOut
                    })), e.add(TweenLite.from(t(".bannerElm1"), .3, {
                        top: -50,
                        delay: .3,
                        opacity: 0,
                        ease: Expo.easeOut
                    }))
                }, this.bannercustomSoftware = function() {
                    var e = new TimelineLite;
                    e.add(TweenLite.from(t(".software-development-bannerElm2"), .3, {
                        bottom: -100,
                        opacity: 0,
                        delay: .3,
                        ease: Expo.easeOut
                    })), e.add(TweenLite.from(t(".software-development-bannerElm1"), .3, {
                        top: -50,
                        delay: .3,
                        opacity: 0,
                        ease: Expo.easeOut
                    }))
                }, this.bannerTechnologyStrategy = function() {
                    var e = new TimelineLite;
                    e.add(TweenLite.from(t(".technology-strategy-bannerElm2"), .3, {
                        bottom: -100,
                        opacity: 0,
                        delay: .3,
                        ease: Expo.easeOut
                    })), e.add(TweenLite.from(t(".technology-strategy-bannerElm1"), .3, {
                        top: -50,
                        delay: .3,
                        opacity: 0,
                        ease: Expo.easeOut
                    }))
                }, this.bannerApplicationMaintenance = function() {
                    var e = new TimelineLite;
                    e.add(TweenLite.from(t(".application-maintenance-bannerElm2"), .3, {
                        bottom: -50,
                        opacity: 0,
                        delay: .3,
                        ease: Expo.easeOut
                    })), e.add(TweenLite.from(t(".application-maintenance-bannerElm1"), .3, {
                        top: -50,
                        delay: .3,
                        opacity: 0,
                        ease: Expo.easeOut
                    }))
                }, this.bannerElement_CMS = function() {
                    var e = new TimelineLite;
                    e.add(TweenLite.from(t(".cms-bannerElm2"), .3, {
                        bottom: -100,
                        opacity: 0,
                        delay: .3,
                        ease: Expo.easeOut
                    })), e.add(TweenLite.from(t(".cms-bannerElm1"), .3, {
                        top: -50,
                        delay: .3,
                        opacity: 0,
                        ease: Expo.easeOut
                    }))
                }, this.theProcess = function() {
                    t(".processList li").css({
                        opacity: 0
                    }), t(".processList").waypoint(function() {
                        t(".processList li").css({
                            opacity: 1
                        }), TweenMax.staggerFrom(t(".processList li"), 1, {
                            bottom: -100,
                            opacity: 0,
                            delay: .2,
                            ease: Expo.easeOut,
                            force3D: !0
                        }, .4)
                    }, {
                        offset: "70%",
                        triggerOnce: !0
                    })
                }, this.theBacics = function() {
                    t(".pArrow").css({
                        opacity: 0
                    }), t(".theBasicsList").waypoint(function() {
                        t(".pArrow").css({
                            opacity: 1
                        });
                        var e = new TimelineLite;
                        e.add(TweenLite.from(t("#pArrow1"), .3, {
                            width: 0,
                            opacity: 0,
                            delay: .2,
                            ease: Linear.easeNone
                        })), e.add(TweenLite.from(t("#pArrow2"), .3, {
                            width: 0,
                            opacity: 0,
                            delay: .2,
                            ease: Linear.easeNone
                        })), e.add(TweenLite.from(t("#pArrow3"), .3, {
                            width: 0,
                            opacity: 0,
                            delay: .2,
                            ease: Linear.easeNone
                        }))
                    }, {
                        offset: "70%",
                        triggerOnce: !0
                    })
                }, this.notSoObvious = function() {
                    t(".theObviousList li").css({
                        opacity: 0
                    }), t(".theObviousList").waypoint(function() {
                        t(".theObviousList li").css({
                            opacity: 1
                        }), TweenMax.staggerFrom(t(".theObviousList li"), 1, {
                            bottom: -100,
                            opacity: 0,
                            delay: .2,
                            ease: Expo.easeOut,
                            force3D: !0
                        }, .2)
                    }, {
                        offset: "70%",
                        triggerOnce: !0
                    })
                }, this.changeLogoExperiences = function() {
                    t(".changeLogo.logoExperience").each(function() {
                        t(this).hover(function() {
                            t(this).find(".logoIcon").stop(!0, !0).animate({
                                marginTop: -43,
                                opacity: 0
                            }, 400), t(this).find(".getInTouch").stop(!0, !0).animate({
                                opacity: 1
                            }, 400)
                        }, function() {
                            t(this).find(".logoIcon").stop(!0, !0).animate({
                                marginTop: 0,
                                opacity: 1
                            }, 400), t(this).find(".getInTouch").stop(!0, !0).animate({
                                opacity: 0
                            }, 400)
                        })
                    })
                }, this.init = function() {
                    i(), l(), a(), d(), p(), e.services.clientHoverEffect(), e.experience.changeLogoExperiences(), e.services.customPopup(), e.services.showHideSliderArrow(), f(), e.homePage.activeNav(), c(), e.experience.bannerElement(), device || e.experience.theProcess()
                }
            }
            return new i
        }(), e.clients = function() {
            function i() {
                function i() {
                    t(window).on("scroll", function() {})
                }

                function n() {
                    t(".clientItem").each(function() {
                        t(this).css({
                            background: "url(" + t(this).attr("data-bgImage") + ".jpg) center center no-repeat"
                        })
                    })
					
					 t(".clientlogoItem").each(function() {
                        t(this).css({
                            background: "url(" + t(this).attr("data-bgImage") + ".svg) center center no-repeat"
                        })
                    })
                }

                function o() {
                    t(".framework").each(function() {
                        t(this).hover(function() {
                            var e = t(this).attr("href");
                            t(".thumbImg").stop(!0, !0).animate({
                                opacity: .3
                            }, 300), t(e).stop(!0, !0).animate({
                                zIndex: 9999,
                                width: "+=96",
                                height: "+=107",
                                top: "-=53",
                                left: "-=48"
                            }, 300, function() {
                                t(e).next(".txt").stop(!0, !0).fadeIn(300)
                            })
                        }, function() {
                            var e = t(this).attr("href");
                            t(".thumbImg").stop(!0, !0).animate({
                                opacity: 1
                            }, 300), t(e).stop(!0, !0).animate({
                                zIndex: -1,
                                width: "-=96",
                                height: "-=107",
                                top: "+=53",
                                left: "+=48"
                            }, 300), t(e).next(".txt").stop(!0, !0).fadeOut(0)
                        })
                    })
                }
                this.urlRedirection = function(e) {
                    var i = t(e);
                    i.each(function() {
                        t(this).on("click", function() {
                            var e = t(this).attr("data-url");
                            location.href = e
                        })
                    })
                };
                var a;
                this.clientListHoverEffect = function() {
                    t(".clientItem").each(function() {
                        t(this).hover(function() {
                            t(this).find(".clientOverlayBg").addClass("clientOverlayBgAnim"), t(this).find(".txtClientHeading2").stop(!0, !0).animate({
                                top: 68
                            }, 300);
                            var e = t(this).find(".elementList2 li"),
                                i = 0;
                            a = function() {
                                i < e.length && (e.eq(i).addClass("elmAnimation2"), i += 1)
                            }, setInterval(a, 0)
                        }, function() {
                            t(this).find(".clientOverlayBg").removeClass("clientOverlayBgAnim"), t(this).find(".txtClientHeading2").stop(!0, !0).animate({
                                top: 168
                            }, 300), t(".elmAnimation2").removeClass("elmAnimation2"), clearInterval(a, 0)
                        })
                    })
                }, this.clientCounter = function(e, i, n) {
                    var o = t("#counterOne"),
                        a = t("#counterTwo"),
                        s = t("#counterThree");
                    o.counter({
                        autoStart: !0,
                        duration: 2500,
                        countTo: e,
                        placeholder: 0,
                        easing: "easeOutCubic"
                    }), a.counter({
                        autoStart: !0,
                        duration: 1500,
                        countTo: i,
                        placeholder: 0,
                        easing: "easeOutCubic"
                    }), s.counter({
                        autoStart: !0,
                        duration: 2e3,
                        countTo: n,
                        placeholder: 0,
                        easing: "easeOutCubic"
                    })
                }, this.init = function() {
                    i(), n(), e.clients.urlRedirection(".clientItem, .clientlogoItem"), e.clients.clientListHoverEffect(), o()
                }
            }
            return new i
        }(), e.caseStudy = function() {
            function e() {
                function e() {}

                function i() {
                    t(".CSBanner h1").addClass("txt1Anim"), t(".CSBanner h3").addClass("txt2Anim"), t(".CSBanner h4").addClass("txt3Anim")
                }
                lastScrollTop = 0;
                t(".slideRow").length, t(window).width();
                this.init = function() {
                    e(), i()
                }
            }
            return new e
        }(), e.press = function() {
            function i() {
                function i() {}
                this.readMore = function() {
                    t(".readMoreNew").on("mouseenter", function() {
                        t(this).find("span").addClass("borderAnim")
                    }), t(".readMoreNew").on("mouseleave", function() {
                        t(this).find("span").removeClass("borderAnim")
                    })
                }, this.init = function() {
                    i(), e.press.readMore()
                }
            }
            return new i
        }(), e.contactus = function() {
            function e() {
                function e() {
                    1 == t(".projectList").isOnScreen() && i(), t(window).on("scroll", function() {
                        1 == t(".projectList").isOnScreen() && i()
                    })
                }

                function i() {
                    t(".projectList li").each(function(e) {
                        t(this).delay(150 * e).addClass("projectListAnim")
                    })
                }
                this.init = function() {
                    e()
                }
            }
            return new e
        }()
    }(window.Icreon = window.Icreon || {}, jQuery), $(function() {
        Icreon.homePage.init(), Icreon.aboutUs.init(), Icreon.services.init(), Icreon.experience.init(), Icreon.clients.init(), Icreon.caseStudy.init(), Icreon.press.init(), Icreon.contactus.init()
    });