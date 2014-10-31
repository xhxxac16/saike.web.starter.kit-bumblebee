(function($) {

    $.fn.slider = function(options) {

            var opts = $.extend({}, $.fn.slider.defaults, options);
            var showSize = opts.showSize;
            var pageNum = opts.curPage;

            return this.each(function() {

                var scrollTimer;

                var $slider = $(this);

                var $sliderView = $slider.find(".sld-items");

                var $sliderItem = $slider.find("li");

                var $sliderUl = $slider.find("ul:first");

                var len = $sliderUl.find("li").size();

                var mo = len % opts.offsetSize;

                var num = opts.offsetSize - mo;
                //不足1页时自动补足
                if (mo != 0 || len < opts.showSize) {
                    $sliderUl.find("li:lt(" + num + ")").clone().appendTo($sliderUl);
                }

                if (opts.offsetSize > len) {
                    $('<div class="slider-error-tips">请查看相关API</div>').appendTo($slider);
                }
                var totalSize = $sliderUl.find("li").size();
                if (totalSize <= 1) {
                    opts.auto = false;
                }
                var width = ($sliderItem.width() + opts.itemPadding) * showSize - opts.itemPadding;

                $sliderUl.find("li").css({
                    "padding-right": opts.itemPadding
                }).each(function(index, ele) {
                    $(ele).attr("data-item", "item" + index);
                });
                $sliderUl.find("li:first").addClass("cur");
                $sliderUl.width(($sliderItem.width() + opts.itemPadding) * totalSize).height($sliderItem.height());
                $sliderView.height($sliderItem.height()).width(width);
                $slider.width(width);


                //显示类型
                $slider.addClass("slider-" + opts.type);

                //总数及页数
                var $currentPage;

                if (opts.offsetSize == opts.showSize && opts.showSize == 1 && opts.showType) {

                    $('<div class="slider-total"><span class="slider-current-page">' + pageNum + '</span>/<span class="slider-items">' + len + '</span></div>').appendTo($slider);
                    if (opts.showAmount) {
                        $(".slider-total").css({
                            "display": "display"
                        });
                    } else {
                        $(".slider-total").css({
                            "display": "none"
                        });
                    }

                    //图片说明性文案
                    var showAlt = function() {
                        $.each($sliderUl.find("li"), function(key, slide) {
                            var caption = $(slide).find('img').attr('alt');
                            if (caption && opts.alt) {
                                caption = $('<div class="slider-tips">' + caption + '</div>');
                                caption.appendTo($(slide));
                            }
                        });
                    }();

                    var markers = function() {

                        var marker = [];






                        marker.push('<div class="sldCap">');

                            marker.push('<ul class="slider-markers">');

                                for (var i = 0; i < len; i++) {

                                    marker.push('<li>' + (i + 1) + '</li>');

                                }

                            marker.push('</ul>');

                        marker.push('</div>');

                        $slider.append(marker.join(''));


























































































































































                        /*
                         ____                     __                       ____
                        /\  _`\                  /\ \__                   /\  _`\
                        \ \ \/\_\     __     ___ \ \ ,_\     __   _ __    \ \ \/\_\     __     _____
                         \ \ \/_/_  /'__`\ /' _ `\\ \ \/   /'__`\/\`'__\   \ \ \/_/_  /'__`\  /\ '__`\
                          \ \ \L\ \/\  __/ /\ \/\ \\ \ \_ /\  __/\ \ \/     \ \ \L\ \/\ \L\.\_\ \ \L\ \
                           \ \____/\ \____\\ \_\ \_\\ \__\\ \____\\ \_\      \ \____/\ \__/.\_\\ \ ,__/
                            \/___/  \/____/ \/_/\/_/ \/__/ \/____/ \/_/       \/___/  \/__/\/_/ \ \ \/
                                                                                                 \ \_\
                                                                                                  \/_/
                        *   Author: 沈维忠 ( Shen Weizhong / Tony Stark ).

                        *   Creation Date: 2014.10.27 15:49 PM ( Tony ).

                        *   Last Update: 2014.10.28 00:02 PM ( Tony ).
                        */

                        var fnPatch = (function () {

                            return {

                                excute: function () {

                                    var sldRctngl, ifSldRctnglExist;

                                    sldRctngl = $('.slider-rectangle .slider-markers');

                                    ifSldRctnglExist = !sldRctngl.length == 0;

                                    if (ifSldRctnglExist) {

                                        var halfSldRctngl, sldCntnr, halfSldCntnr;

                                        halfSldRctngl = sldRctngl.width() / 2;

                                        sldCntnr = sldRctngl.closest('.sldCap');

                                        halfSldCntnr = sldCntnr.width() / 2;

                                        sldRctngl.css('left', halfSldCntnr - halfSldRctngl);

                                    }

                                }

                            };

                        } ()).excute();


























































































































                        $($slider.find(".slider-markers li").eq(opts.curPage - 1)).addClass("active-marker");

                        $slider.find(".slider-markers").delegate("li", "mouseover", function() {

                            clearInterval(scrollTimer);

                        });

                        $slider.find(".slider-markers").delegate("li", "click", function() {
                            var index = $(this).index(); // 顺序排位置
                            if (!$sliderUl.is(":animated") && index != "undefind") {
                                var ind = $sliderUl.find("li[data-item$=" + index + "]").index(); // 目标元素当前dom中的位置
                                var curInd = parseInt($sliderUl.find("li").eq(0).data("item").match(/\d+/)[0]); // 当前显示的dom
                                if (index === curInd) {
                                    return;
                                }
                                if (index > curInd) {
                                    $sliderUl.stop().animate({
                                        left: '-=' + $sliderItem.outerWidth(true) * ind
                                    }, opts.speed, function() {
                                        $sliderUl.css({
                                            "left": 0
                                        }).find("li").slice(0, ind).appendTo($sliderUl);
                                        $sliderUl.find("li").removeClass("cur");
                                        $sliderUl.find("li:first").addClass("cur");
                                    });
                                } else {
                                    var $toBeMoved = $sliderUl.find("li").slice(ind, len),
                                        dif = curInd - index;
                                    $toBeMoved.prependTo($sliderUl);
                                    $sliderUl.css({
                                        "left": "-=" + $sliderItem.outerWidth(true) * $toBeMoved.length
                                    });
                                    $sliderUl.stop().animate({
                                        "left": 0
                                    }, opts.speed, function() {
                                        $sliderUl.find("li").removeClass("cur");
                                        $sliderUl.find("li:first").addClass("cur");
                                    });
                                }
                            }
                            $(this).siblings().removeClass("active-marker").end().addClass("active-marker");
                            $slider.find(".slider-current-page").text(index + 1);
                            pageNum = parseInt($slider.find(".slider-current-page").text());
                        })

                        $slider.find(".slider-markers").delegate("li", "mouseout", function() {
                            if (!opts.auto) {
                                clearInterval(scrollTimer);
                            } else {
                                scrollTimer = setInterval(function() {
                                    sliderBox($sliderView);
                                }, opts.interval);
                            }
                        });
                    }();
                }

                function showArrow() {
                    var showArrowMarkup = '<div class="arrow-slider-left" id="J_imgLeft">left</div>' + '<div class="arrow-slider-right" id="J_imgRight">right</div>';
                    $(showArrowMarkup).appendTo($slider);
                    var $prevBtn = $slider.find(".arrow-slider-left");
                    var $nextBtn = $slider.find(".arrow-slider-right");

                    var arrowTop = parseInt(($sliderItem.height() - $prevBtn.height()) / 2);
                    $prevBtn.css({
                        "top": arrowTop,
                        "left": $prevBtn.width() / 3
                    });
                    $nextBtn.css({
                        "top": arrowTop,
                        "right": $prevBtn.width() / 3
                    });

                    //绑定mouseover
                    $prevBtn.bind("mouseover", function() {
                        $(this).addClass("arrow-slider-left-hover");
                        clearInterval(scrollTimer);
                    }).bind("mouseout", function() {
                        $(this).removeClass("arrow-slider-left-hover");
                        if (!opts.auto) {
                            clearInterval(scrollTimer);
                        } else {
                            scrollTimer = setInterval(function() {
                                sliderBox($sliderView);
                            }, opts.interval);
                        }

                    });

                    //绑定mouseover
                    $nextBtn.bind("mouseover", function() {
                        $(this).addClass("arrow-slider-right-hover");
                        clearInterval(scrollTimer);
                    }).bind("mouseout", function() {
                        $(this).removeClass("arrow-slider-right-hover");
                        if (!opts.auto) {
                            clearInterval(scrollTimer);
                        } else {
                            scrollTimer = setInterval(function() {
                                sliderBox($sliderView);
                            }, opts.interval);
                        }
                    });

                    //向左 按钮 向右移动
                    $prevBtn.click(function() {
                        if (!$sliderUl.is(":animated")) {
                            $sliderUl.find("li").slice(len - opts.offsetSize, len).insertBefore($sliderUl.find("li:first"));
                            $sliderUl.css({
                                left: '-=' + $sliderItem.outerWidth(true) * opts.offsetSize
                            });
                            $sliderUl.animate({
                                left: '+=' + $sliderItem.outerWidth(true) * opts.offsetSize
                            }, opts.speed, function() {
                                $sliderUl.css({
                                    "left": 0
                                });
                            });
                            if ($slider.find(".slider-current-page").size() > 0) {
                                $currentPage = $slider.find(".slider-current-page");
                                if (parseInt($currentPage.text()) == 1) {
                                    pageNum = Math.ceil(totalSize / showSize);
                                    $currentPage.text(pageNum--);
                                } else {
                                    $currentPage.text(parseInt($currentPage.text()) - 1);
                                }

                                pageNum = $currentPage.text();
                                //当前显示数字
                                var markersItem = $slider.find("ul:last").find("li");
                                markersItem.removeClass("active-marker");
                                $(markersItem.eq($currentPage.text() - 1)).addClass("active-marker");
                            }

                        }
                    });

                    //往右 按钮 向左移动
                    $nextBtn.click(function() {
                        if (!$sliderUl.is(":animated")) {
                            $sliderUl.animate({
                                left: '-=' + $sliderItem.outerWidth(true) * opts.offsetSize
                            }, opts.speed, function() {
                                $sliderUl.css({
                                    "left": 0
                                }).find("li:lt(" + opts.offsetSize + ")").appendTo($sliderUl);
                            });

                            if ($slider.find(".slider-current-page").size() > 0) {
                                $currentPage = $slider.find(".slider-current-page");
                                if (parseInt($currentPage.text()) == Math.ceil(totalSize / showSize)) {
                                    pageNum = 0;
                                    $currentPage.text(++pageNum);
                                } else {
                                    $currentPage.text(1 + parseInt($currentPage.text()));
                                }
                                pageNum = $currentPage.text();
                                //当前显示数字
                                var markersItem = $slider.find("ul:last").find("li");
                                markersItem.removeClass("active-marker");
                                $(markersItem.eq($currentPage.text() - 1)).addClass("active-marker");
                            }
                        }
                    });
                }

                //默认显示第几页
                $sliderUl.animate({
                    left: '-=' + $sliderItem.outerWidth(true) * opts.offsetSize * (opts.curPage - 1)
                }, 0, function() {
                    $sliderUl.css({
                        "left": 0
                    }).find("li:lt(" + opts.offsetSize * (opts.curPage - 1) + ")").appendTo($sliderUl);
                });

                //轮播
                $sliderView.hover(function() {
                    clearInterval(scrollTimer);
                }, function() {
                    if (!opts.auto) {
                        clearInterval(scrollTimer);
                    } else {
                        scrollTimer = setInterval(function() {
                            sliderBox($sliderView);
                        }, opts.interval);
                    }
                });

                //是否显示箭头
                if (opts.showArrow) {
                    showArrow();
                    //只有一页时取消绑定事件
                    if (len == opts.offsetSize || len == opts.showSize) {
                        opts.auto = false;
                        $slider.find(".arrow-slider-left").unbind("click").unbind("mouseover");
                        $slider.find(".arrow-slider-right").unbind("click").unbind("mouseover");
                    }
                } else {
                    if (opts.noArrow) return;
                    // 悬停显示
                    $slider.hover(function() {
                        if ($(".arrow-slider-left").length == 0) {
                            showArrow();
                        }
                    }, function() {
                        $(".arrow-slider-left").remove();
                        $(".arrow-slider-right").remove();
                    });
                }



                //是否自动
                if (opts.auto) {
                    $sliderView.trigger("mouseleave");
                }

                //私有函数
                function sliderBox(obj) {
                    var $self = obj.find("ul:first");

                    if (opts.direction == "left") {
                        $self.animate({
                            left: '-=' + $sliderItem.outerWidth(true) * opts.offsetSize
                        }, opts.speed, function() {
                            $self.css({
                                "left": 0
                            }).find("li:lt(" + opts.offsetSize + ")").appendTo($self);
                        });
                        if (pageNum == Math.ceil(totalSize / showSize)) {
                            pageNum = 0;
                        }
                        if ($slider.find(".slider-current-page").size() > 0) {
                            $slider.find(".slider-current-page").text(++pageNum);
                        }
                    } else {
                        $sliderUl.find("li").slice(len - opts.offsetSize, len).insertBefore($sliderUl.find("li:first"));
                        $sliderUl.css({
                            left: '-=' + $sliderItem.outerWidth(true) * opts.offsetSize
                        });
                        $sliderUl.animate({
                            left: '+=' + $sliderItem.outerWidth(true) * opts.offsetSize
                        }, opts.speed, function() {
                            $sliderUl.css({
                                "left": 0
                            });
                        });

                        if ($slider.find(".slider-current-page").size() > 0) {
                            $currentPage = $slider.find(".slider-current-page");
                            if ($currentPage.text() == 1) {
                                pageNum = Math.ceil(totalSize / showSize);
                            }
                            $currentPage.text(pageNum--);
                        }
                    }
                    var markersItem = $slider.find("ul:last").find("li");
                    markersItem.removeClass("active-marker");
                    $(markersItem.eq(pageNum - 1)).addClass("active-marker");
                }
            });
        }

    // 暴露插件的默认配置
    $.fn.slider.defaults = {
        offsetSize: 1,
        showSize: 1,
        itemPadding: 0,
        auto: true,
        curPage: 1,
        showArrow: true,
        noArrow: false, // added by cd, plz contact fangbin
        speed: 600,
        interval: 5000,
        direction: "left",
        alt: false,
        type: "rectangle", // dot/figure
        showAmount: false,
        showType: true
    };

})(jQuery);