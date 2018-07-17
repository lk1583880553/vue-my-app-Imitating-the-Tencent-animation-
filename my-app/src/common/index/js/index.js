(function () {
    var utils = {
        getByClass: document.getElementsByClassName ?
        function (className, parent) {
            return (parent || document).getElementsByClassName(className) || []
        } : function (className, parent, tagName) {
            var list = [],
                es = (parent || document).getElementsByTagName(tagName || "*");
            for (var i = 0, len = es.length, e; i < len; i++) {
                    e = es[i];
                    if (e.className === className) list.push(e)
                }
            return list
        },
        isDOM: typeof HTMLElement === "object" ?
        function (obj) {
            return obj instanceof HTMLElement
        } : function (obj) {
            return obj && typeof obj === "object" && obj.nodeType === 1 && typeof obj.nodeName === "string"
        },
        each: function (arr, func) {
            for (var i = 0, len = arr.length; i < len; i++) if (func.call(arr[i], i) === false) return
        },
        apply: function (obj, func, args) {
            if (typeof func === "function") return func.apply(obj, args)
        }
    };
    var TouchHandler = function (params) {
        var obj = params.obj,
            downHandler = params.downHandler,
            moveHandler = params.moveHandler,
            upHandler = params.upHandler;
        this.obj = obj;
        this.downHandler = downHandler;
        this.moveHandler = moveHandler;
        this.upHandler = upHandler;
        this.fingerDown = false;
        this.startPos = this.endPos = {
                x: 0,
                y: 0
            };
        this.bind()
    };
    TouchHandler.getTouchPos = function (e) {
        var t = e.touches ? e.touches[0] : e;
        var x = t.pageX || t.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft);
        var y = t.pageY || t.clientY + (document.documentElement.scrollTop || document.body.scrollTop);
        return {
            x: x,
            y: y
        }
    };
    TouchHandler.prototype.bind = function () {
        var _this = this,
            obj = _this.obj;
        var isWindows = window.navigator.userAgent.toLowerCase().indexOf("windows") >= 0;
        obj.addEventListener(isWindows ? "mousedown" : "touchstart", function (e) {
                _this.start(e);
                if (isWindows) e.preventDefault()
            });
        obj.addEventListener(isWindows ? "mousemove" : "touchmove", function (e) {
                _this.move(e)
            });
        obj.addEventListener(isWindows ? "mouseup" : "touchend", function (e) {
                _this.end(e)
            });
        obj.addEventListener("mouseleave", function (e) {
                _this.end(e)
            })
    };
    TouchHandler.prototype.start = function (e) {
        if (!this.fingerDown) {
            var p = TouchHandler.getTouchPos(e);
            if (utils.apply(this, this.downHandler, [e, 0, 0]) === false) return;
            this.fingerDown = true;
            this.startPos = this.endPos = p;
            this.startTime = this.lastMoveTime = new Date
        }
    };
    TouchHandler.prototype.move = function (e) {
        if (this.fingerDown) {
            this.moveTime = new Date;
            if (this.moveTime - this.lastMoveTime > 10) {
                var p = this.endPos = TouchHandler.getTouchPos(e),
                    sp = this.startPos;
                var dx = p.x - sp.x,
                    dy = p.y - sp.y;
                utils.apply(this, this.moveHandler, [e, dx, dy]);
                this.lastMoveTime = this.moveTime
            }
        }
    };
    TouchHandler.prototype.end = function (e) {
        if (this.fingerDown) {
            this.fingerDown = false;
            var p = this.endPos,
                sp = this.startPos;
            var dx = p.x - sp.x,
                dy = p.y - sp.y;
            this.endTime = new Date;
            this.time = this.endTime - this.startTime;
            utils.apply(this, this.upHandler, [e, dx, dy, this.time])
        }
    };
    var styles = ".gallery-list {\r\n  display: block;\r\n  position: relative;\r\n  list-style: none;\r\n  overflow: hidden;\r\n  padding: 0; }\r\n  .gallery-list .gallery-item {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%; }\r\n    .gallery-list .gallery-item > *, .gallery-list .gallery-item img {\r\n      display: block;\r\n      width: 100%;\r\n      height: 100%; }\r\n  .gallery-list.trans .gallery-item {\r\n    -webkit-transition: -webkit-transform 300ms ease;\r\n    transition: -webkit-transform 300ms ease;\r\n    transition: transform 300ms ease;\r\n    transition: transform 300ms ease, -webkit-transform 300ms ease; }\r\n";
    var Gallery = function (opt) {
        var listClass = opt.listClass || "gallery-list",
            itemClass = opt.itemClass || "gallery-item",
            position = opt.position,
            width = opt.width,
            height = opt.height,
            index = opt.index | 0,
            onSwitchStart = opt.onSwitchStart,
            onSwitchEnd = opt.onSwitchEnd,
            playInterval = opt.playInterval | 0;
        var list = this.list = utils.getByClass(listClass)[0];
        if (!list) throw "\u6ca1\u6709\u627e\u5230\u5217\u8868\u5143\u7d20list: ." + listClass;
        this.itemTagName = list.tagName === "UL" || list.tagName === "OL" ? "LI" : "DIV";
        position !== undefined && (list.style.position =
            position || "relative");
        width !== undefined && (list.style.width = typeof width == "string" ? width : (width | 0) + "px");
        height !== undefined && (list.style.height = typeof height == "string" ? height : (height | 0) + "px");
        list.classList.add("trans");
        this.listClass = listClass;
        this.itemClass = itemClass;
        this.onSwitchStart = onSwitchStart;
        this.onSwitchEnd = onSwitchEnd;
        this._createStyle();
        this._bindEvent();
        this.checkItems();
        this.setIndex(index);
        this.setPlayInterval(playInterval)
    };
    Gallery.prototype = {
        _createStyle: function () {
            var listClass =
            String(this.listClass),
                itemClass = String(this.itemClass);
            this.style = document.createElement("STYLE");
            this.styleText = styles.replace(/gallery-list/g, listClass).replace(/gallery-item/g, itemClass);
            this.style.innerHTML = this.styleText;
            this.list.parentNode.insertBefore(this.style, this.list)
        },
        _bindEvent: function () {
            if (!this.touchHandler) {
                var context = this,
                    touchHandler = this.touchHandler = new TouchHandler({
                        obj: this.list
                    }),
                    boxWidth = context.list.offsetWidth;
                window.addEventListener("resize", function () {
                        boxWidth = context.list.offsetWidth
                    });
                touchHandler.context = this;
                touchHandler.downHandler = function (e) {
                        var context = this.context;
                        if (context._isAnimating) return false;
                        else {
                            e.preventDefault();
                            context.cancelPlayInterval();
                            context.list.classList.remove("trans");
                            return true
                        }
                    };
                touchHandler.moveHandler = function (e, dx) {
                        var context = this.context,
                            items = [context.prevItem, context.currItem, context.nextItem],
                            per = dx * 100 / boxWidth;
                        per = Math.min(Math.max(per, -120), 120);
                        utils.each(items, function (i) {
                                var elem = this,
                                    offset = (i - 1) * 100;
                                elem.style.webkitTransform = elem.style.transform = "translate3d(" + (per + offset) + "%,0,0)"
                            });
                        context._isAnimating = true
                    };
                touchHandler.upHandler = function (e, dx, dy, time) {
                        var context = this.context;
                        context.list.classList.add("trans");
                        if (time < 300 && Math.abs(dx) < 10) {
                            context._animateTo(0);
                            context.list.setAttribute("data-can-click", "yes");
                            var link = context.currItem.getElementsByTagName("a")[0];
                            link && link.click()
                        } else {
                            var bound = boxWidth * .1,
                                delta = dx > bound ? -1 : dx < -bound ? 1 : 0;
                            context._animateTo(delta);
                            context.list.setAttribute("data-can-click", "no")
                        }
                    };
                this.list.addEventListener("click", function (e) {
                        var canClick = context.list.getAttribute("data-can-click");
                        if (!canClick || canClick === "no") {
                            e.preventDefault();
                            e.stopPropagation()
                        } else context.list.setAttribute("data-can-click", "no")
                    })
            }
        },
        _animateTo: function (delta) {
            var context = this,
                items = this.items,
                itemsCount = items.length,
                showItems = [this.prevItem, this.currItem, this.nextItem],
                newIndex = (context.index + itemsCount + delta) % itemsCount,
                oldIndex = context.index,
                per = -delta * 100;
            if (utils.apply(context, context.onSwitchStart, [newIndex, oldIndex]) === false) {
                    context.setIndex(oldIndex);
                    return
                }
            utils.each(showItems, function (i) {
                    var elem = this,
                        offset = (i - 1) * 100;
                    elem.style.webkitTransform = elem.style.transform = "translate3d(" + (per + offset) + "%,0,0)"
                });
            window.setTimeout(function () {
                    context.setIndex(newIndex);
                    utils.apply(context, context.onSwitchEnd, [newIndex, oldIndex]);
                    context.setPlayInterval(context.playInterval)
                }, 300)
        },
        _updateItemPos: function (animation) {
            var context = this,
                list = this.list,
                items = this.items,
                index = this.index;
            !animation && list.classList.remove("trans");
            utils.each(items, function (i) {
                    var elem =
                    this,
                        elemIndex = i,
                        offset = elem == context.prevItem ? -100 : elem == context.nextItem ? 100 : elemIndex < index ? -100 : elemIndex > index ? 100 : 0;
                    elem.style.webkitTransform = elem.style.transform = "translate3d(" + offset + "%,0,0)";
                    return elem.offsetWidth || true
                });
            !animation && list.classList.add("trans");
            this._isAnimating = false
        },
        setIndex: function (index, animation) {
            var context = this,
                items = this.items,
                itemsCount = items.length,
                itemClass = this.itemClass,
                prevIndex = (index - 1 + itemsCount) % itemsCount,
                currIndex = (index + itemsCount) % itemsCount,
                nextIndex = (index + 1 + itemsCount) % itemsCount;
            utils.each(items, function (i) {
                    var item = this;
                    switch (i) {
                    case prevIndex:
                        context.prevItem = item;
                        item.className = itemClass + " prev";
                        break;
                    case currIndex:
                        context.currItem = item;
                        item.className = itemClass + " curr";
                        break;
                    case nextIndex:
                        context.nextItem = item;
                        item.className = itemClass + " next";
                        break;
                    default:
                        item.className = itemClass;
                        break
                    }
                });
            this.index = currIndex;
            context._updateItemPos(animation)
        },
        checkItems: function () {
            var list = this.list || {},
                tagName = this.itemTagName,
                itemClass = this.itemClass;
            this.items = utils.getByClass(itemClass, list, tagName)
        },
        cancelPlayInterval: function () {
            if (this._playTimeout) {
                window.clearTimeout(this._playTimeout);
                this._playTimeout = null
            }
        },
        setPlayInterval: function (playInterval) {
            this.cancelPlayInterval();
            this.playInterval = playInterval;
            if (playInterval) {
                var context = this;
                this._playTimeout = window.setTimeout(function () {
                    context._animateTo(1);
                    context.setPlayInterval(context.playInterval)
                }, playInterval)
            }
        }
    };
    window.Gallery = Gallery
})();
(function () {
    var LS = {
        get: function (key) {
            try {
                return window.localStorage ? window.localStorage.getItem(key) : false
            } catch (e) {
                console.log("\u8bfb\u53d6 LocalStorage \u5f02\u5e38\uff1a", e);
                return false
            }
        },
        set: function (key, data) {
            try {
                return window.localStorage ? window.localStorage.setItem(key, data) : false
            } catch (e) {
                console.log("\u5199\u5165 LocalStorage \u5f02\u5e38\uff1a", e);
                return false
            }
        }
    };
})();
