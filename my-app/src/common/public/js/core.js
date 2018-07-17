/*
 art-template - Template Engine | http://aui.github.com/artTemplate/*/
!
function (t, e) {
    "function" == typeof define && define.amd ? define(function () {
        return e(t)
    }) : e(t)
}(this, function (t) {
    var e = function () {
        function A(t) {
            return null == t ? String(t) : S[j.call(t)] || "object"
        }
        function L(t) {
            return "function" == A(t)
        }
        function k(t) {
            return null != t && t == t.window
        }
        function F(t) {
            return null != t && t.nodeType == t.DOCUMENT_NODE
        }
        function R(t) {
            return "object" == A(t)
        }
        function $(t) {
            return R(t) && !k(t) && Object.getPrototypeOf(t) == Object.prototype
        }
        function _(t) {
            var e = !! t && "length" in t && t.length,
                n = i.type(t);
            return "function" != n && !k(t) && ("array" == n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }
        function Z(t) {
            return s.call(t, function (t) {
                return null != t
            })
        }
        function z(t) {
            return t.length > 0 ? i.fn.concat.apply([], t) : t
        }
        function I(t) {
            return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
        }
        function B(t) {
            return t in l ? l[t] : l[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
        }
        function q(t, e) {
            return "number" != typeof e || h[I(t)] ? e : e + "px"
        }
        function V(t) {
            var e, n;
            return f[t] || (e =
            c.createElement(t), c.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), f[t] = n),
            f[t]
        }
        function H(t) {
            return "children" in t ? u.call(t.children) : i.map(t.childNodes, function (t) {
                return 1 == t.nodeType ? t : void 0
            })
        }
        function U(t, e) {
            var n, i = t ? t.length : 0;
            for (n = 0; i > n; n++) this[n] = t[n];
            this.length = i,
            this.selector = e || ""
        }
        function X(t, i, r) {
            for (n in i) r && ($(i[n]) || D(i[n])) ? ($(i[n]) && !$(t[n]) && (t[n] = {}), D(i[n]) && !D(t[n]) && (t[n] = []), X(t[n], i[n], r)) : i[n] !== e && (t[n] = i[n])
        }
        function W(t, e) {
            return null == e ? i(t) : i(t).filter(e)
        }
        function Y(t, e, n, i) {
            return L(e) ? e.call(t, n, i) : e
        }
        function J(t, e, n) {
            null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
        }
        function G(t, n) {
            var i = t.className || "",
                r = i && i.baseVal !== e;
            return n === e ? r ? i.baseVal : i : void(r ? i.baseVal = n : t.className = n)
        }
        function K(t) {
            try {
                return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? i.parseJSON(t) : t) : t
            } catch (e$0) {
                return t
            }
        }
        function Q(t, e) {
            e(t);
            for (var n = 0, i = t.childNodes.length; i > n; n++) Q(t.childNodes[n], e)
        }
        var e, n, i, r, P, N, o = [],
            a = o.concat,
            s = o.filter,
            u = o.slice,
            c = t.document,
            f = {},
            l = {},
            h = {
                "column-count": 1,
                columns: 1,
                "font-weight": 1,
                "line-height": 1,
                opacity: 1,
                "z-index": 1,
                zoom: 1
            },
            p = /^\s*<(\w+|!)[^>]*>/,
            d = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            m = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            g = /^(?:body|html)$/i,
            v = /([A-Z])/g,
            y = ["val", "css", "html", "text", "data", "width", "height", "offset"],
            b = ["after", "prepend", "before", "append"],
            x = c.createElement("table"),
            E = c.createElement("tr"),
            T = {
                tr: c.createElement("tbody"),
                tbody: x,
                thead: x,
                tfoot: x,
                td: E,
                th: E,
                "*": c.createElement("div")
            },
            w = /^[\w-]*$/,
            S = {},
            j = S.toString,
            C = {},
            O = c.createElement("div"),
            M = {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            D = Array.isArray ||
        function (t) {
                return t instanceof Array
            };
        return C.matches = function (t, e) {
                if (!e || !t || 1 !== t.nodeType) return !1;
                var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
                if (n) return n.call(t, e);
                var i, r = t.parentNode,
                    o = !r;
                return o && (r = O).appendChild(t),
                i = ~C.qsa(r, e).indexOf(t),
                o && O.removeChild(t),
                i
            },
        P = function (t) {
                return t.replace(/-+(.)?/g, function (t, e) {
                    return e ? e.toUpperCase() : ""
                })
            },
        N = function (t) {
                return s.call(t, function (e, n) {
                    return t.indexOf(e) == n
                })
            },
        C.fragment = function (t, n, r) {
                var o, a, s;
                return d.test(t) && (o = i(c.createElement(RegExp.$1))),
                o || (t.replace && (t = t.replace(m, "<$1></$2>")), n === e && (n = p.test(t) && RegExp.$1), n in T || (n = "*"), s = T[n], s.innerHTML = "" + t, o = i.each(u.call(s.childNodes), function () {
                    s.removeChild(this)
                })),
                $(r) && (a = i(o), i.each(r, function (t, e) {
                    y.indexOf(t) > -1 ? a[t](e) : a.attr(t, e)
                })),
                o
            },
        C.Z = function (t, e) {
                return new U(t, e)
            },
        C.isZ = function (t) {
                return t instanceof C.Z
            },
        C.init = function (t, n) {
                var r;
                if (!t) return C.Z();
                if ("string" == typeof t) if (t = t.trim(), "<" == t[0] && p.test(t)) r = C.fragment(t, RegExp.$1, n),
                t = null;
                else {
                    if (n !== e) return i(n).find(t);
                    r = C.qsa(c, t)
                } else {
                    if (L(t)) return i(c).ready(t);
                    if (C.isZ(t)) return t;
                    if (D(t)) r = Z(t);
                    else if (R(t)) r = [t],
                    t = null;
                    else if (p.test(t)) r = C.fragment(t.trim(), RegExp.$1, n),
                    t = null;
                    else {
                        if (n !== e) return i(n).find(t);
                        r = C.qsa(c, t)
                    }
                }
                return C.Z(r, t)
            },
        i = function (t, e) {
                return C.init(t, e)
            },
        i.extend = function (t) {
                var e, n = u.call(arguments, 1);
                return "boolean" == typeof t && (e = t, t = n.shift()),
                n.forEach(function (n) {
                    X(t, n, e)
                }),
                t
            },
        C.qsa = function (t, e) {
                var n, i = "#" == e[0],
                    r = !i && "." == e[0],
                    o = i || r ? e.slice(1) : e,
                    a = w.test(o);
                return t.getElementById && a && i ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : u.call(a && !i && t.getElementsByClassName ? r ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
            },
        i.contains = c.documentElement.contains ?
        function (t, e) {
                return t !== e && t.contains(e)
            } : function (t, e) {
                for (; e && (e = e.parentNode);) if (e === t) return !0;
                return !1
            },
        i.type = A,
        i.isFunction = L,
        i.isWindow = k,
        i.isArray = D,
        i.isPlainObject = $,
        i.isEmptyObject = function (t) {
                var e;
                for (e in t) return !1;
                return !0
            },
        i.isNumeric = function (t) {
                var e =
                Number(t),
                    n = typeof t;
                return null != t && "boolean" != n && ("string" != n || t.length) && !isNaN(e) && isFinite(e) || !1
            },
        i.inArray = function (t, e, n) {
                return o.indexOf.call(e, t, n)
            },
        i.camelCase = P,
        i.trim = function (t) {
                return null == t ? "" : String.prototype.trim.call(t)
            },
        i.uuid = 0,
        i.support = {},
        i.expr = {},
        i.noop = function () {},
        i.map = function (t, e) {
                var n, r, o, i = [];
                if (_(t)) for (r = 0; r < t.length; r++) n = e(t[r], r),
                null != n && i.push(n);
                else for (o in t) n = e(t[o], o),
                null != n && i.push(n);
                return z(i)
            },
        i.each = function (t, e) {
                var n, i;
                if (_(t)) for (n = 0; n < t.length; n++) {
                    if (e.call(t[n], n, t[n]) === !1) return t
                } else for (i in t) if (e.call(t[i], i, t[i]) === !1) return t;
                return t
            },
        i.grep = function (t, e) {
                return s.call(t, e)
            },
        t.JSON && (i.parseJSON = JSON.parse),
        i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
                S["[object " + e + "]"] = e.toLowerCase()
            }),
        i.fn = {
                constructor: C.Z,
                length: 0,
                forEach: o.forEach,
                reduce: o.reduce,
                push: o.push,
                sort: o.sort,
                splice: o.splice,
                indexOf: o.indexOf,
                concat: function () {
                    var t, e, n = [];
                    for (t = 0; t < arguments.length; t++) e = arguments[t],
                    n[t] = C.isZ(e) ? e.toArray() : e;
                    return a.apply(C.isZ(this) ? this.toArray() : this, n)
                },
                map: function (t) {
                    return i(i.map(this, function (e, n) {
                        return t.call(e, n, e)
                    }))
                },
                slice: function () {
                    return i(u.apply(this, arguments))
                },
                ready: function (e) {
                    if ("complete" === c.readyState || "loading" !== c.readyState && !c.documentElement.doScroll) setTimeout(function () {
                        e(i)
                    }, 0);
                    else {
                        var n = function () {
                            c.removeEventListener("DOMContentLoaded", n, !1),
                            t.removeEventListener("load", n, !1),
                            e(i)
                        };
                        c.addEventListener("DOMContentLoaded", n, !1),
                        t.addEventListener("load", n, !1)
                    }
                    return this
                },
                get: function (t) {
                    return t === e ? u.call(this) : this[t >= 0 ? t : t + this.length]
                },
                toArray: function () {
                    return this.get()
                },
                size: function () {
                    return this.length
                },
                remove: function () {
                    return this.each(function () {
                        null != this.parentNode && this.parentNode.removeChild(this)
                    })
                },
                each: function (t) {
                    return o.every.call(this, function (e, n) {
                        return t.call(e, n, e) !== !1
                    }),
                    this
                },
                filter: function (t) {
                    return L(t) ? this.not(this.not(t)) : i(s.call(this, function (e) {
                        return C.matches(e, t)
                    }))
                },
                add: function (t, e) {
                    return i(N(this.concat(i(t, e))))
                },
                is: function (t) {
                    return this.length > 0 && C.matches(this[0], t)
                },
                not: function (t) {
                    var n = [];
                    if (L(t) && t.call !== e) this.each(function (e) {
                        t.call(this, e) || n.push(this)
                    });
                    else {
                        var r = "string" == typeof t ? this.filter(t) : _(t) && L(t.item) ? u.call(t) : i(t);
                        this.forEach(function (t) {
                            r.indexOf(t) < 0 && n.push(t)
                        })
                    }
                    return i(n)
                },
                has: function (t) {
                    return this.filter(function () {
                        return R(t) ? i.contains(this, t) : i(this).find(t).size()
                    })
                },
                eq: function (t) {
                    return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
                },
                first: function () {
                    var t = this[0];
                    return t && !R(t) ? t : i(t)
                },
                last: function () {
                    var t = this[this.length - 1];
                    return t && !R(t) ? t : i(t)
                },
                find: function (t) {
                    var e, n = this;
                    return e = t ? "object" == typeof t ? i(t).filter(function () {
                        var t = this;
                        return o.some.call(n, function (e) {
                            return i.contains(e, t)
                        })
                    }) : 1 == this.length ? i(C.qsa(this[0], t)) : this.map(function () {
                        return C.qsa(this, t)
                    }) : i()
                },
                closest: function (t, e) {
                    var n = [],
                        r = "object" == typeof t && i(t);
                    return this.each(function (i, o) {
                            for (; o && !(r ? r.indexOf(o) >= 0 : C.matches(o, t));) o = o !== e && !F(o) && o.parentNode;
                            o && n.indexOf(o) < 0 && n.push(o)
                        }),
                    i(n)
                },
                parents: function (t) {
                    for (var e = [], n = this; n.length > 0;) n = i.map(n, function (t) {
                        return (t = t.parentNode) && !F(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
                    });
                    return W(e, t)
                },
                parent: function (t) {
                    return W(N(this.pluck("parentNode")), t)
                },
                children: function (t) {
                    return W(this.map(function () {
                        return H(this)
                    }), t)
                },
                contents: function () {
                    return this.map(function () {
                        return this.contentDocument || u.call(this.childNodes)
                    })
                },
                siblings: function (t) {
                    return W(this.map(function (t, e) {
                        return s.call(H(e.parentNode), function (t) {
                            return t !== e
                        })
                    }), t)
                },
                empty: function () {
                    return this.each(function () {
                        this.innerHTML = ""
                    })
                },
                pluck: function (t) {
                    return i.map(this, function (e) {
                        return e[t]
                    })
                },
                show: function () {
                    return this.each(function () {
                        "none" == this.style.display && (this.style.display = ""),
                        "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = V(this.nodeName))
                    })
                },
                replaceWith: function (t) {
                    return this.before(t).remove()
                },
                wrap: function (t) {
                    var e = L(t);
                    if (this[0] && !e) var n = i(t).get(0),
                        r = n.parentNode || this.length > 1;
                    return this.each(function (o) {
                            i(this).wrapAll(e ? t.call(this, o) : r ? n.cloneNode(!0) : n)
                        })
                },
                wrapAll: function (t) {
                    if (this[0]) {
                        i(this[0]).before(t = i(t));
                        for (var e;
                        (e = t.children()).length;) t = e.first();
                        i(t).append(this)
                    }
                    return this
                },
                wrapInner: function (t) {
                    var e = L(t);
                    return this.each(function (n) {
                        var r = i(this),
                            o = r.contents(),
                            a = e ? t.call(this, n) : t;
                        o.length ? o.wrapAll(a) : r.append(a)
                    })
                },
                unwrap: function () {
                    return this.parent().each(function () {
                        i(this).replaceWith(i(this).children())
                    }),
                    this
                },
                clone: function () {
                    return this.map(function () {
                        return this.cloneNode(!0)
                    })
                },
                hide: function () {
                    return this.css("display", "none")
                },
                toggle: function (t) {
                    return this.each(function () {
                        var n = i(this);
                        (t === e ? "none" == n.css("display") : t) ? n.show() : n.hide()
                    })
                },
                prev: function (t) {
                    return i(this.pluck("previousElementSibling")).filter(t || "*")
                },
                next: function (t) {
                    return i(this.pluck("nextElementSibling")).filter(t || "*")
                },
                html: function (t) {
                    return 0 in arguments ? this.each(function (e) {
                        var n = this.innerHTML;
                        i(this).empty().append(Y(this, t, e, n))
                    }) : 0 in this ? this[0].innerHTML : null
                },
                text: function (t) {
                    return 0 in arguments ? this.each(function (e) {
                        var n =
                        Y(this, t, e, this.textContent);
                        this.textContent = null == n ? "" : "" + n
                    }) : 0 in this ? this.pluck("textContent").join("") : null
                },
                attr: function (t, i) {
                    var r;
                    return "string" != typeof t || 1 in arguments ? this.each(function (e) {
                        if (1 === this.nodeType) if (R(t)) for (n in t) J(this, n, t[n]);
                        else J(this, t, Y(this, i, e, this.getAttribute(t)))
                    }) : 0 in this && 1 == this[0].nodeType && null != (r = this[0].getAttribute(t)) ? r : e
                },
                removeAttr: function (t) {
                    return this.each(function () {
                        1 === this.nodeType && t.split(" ").forEach(function (t) {
                            J(this, t)
                        }, this)
                    })
                },
                prop: function (t, e) {
                    return t = M[t] || t,
                    1 in arguments ? this.each(function (n) {
                        this[t] = Y(this, e, n, this[t])
                    }) : this[0] && this[0][t]
                },
                removeProp: function (t) {
                    return t = M[t] || t,
                    this.each(function () {
                        delete this[t]
                    })
                },
                data: function (t, n) {
                    var i = "data-" + t.replace(v, "-$1").toLowerCase(),
                        r = 1 in arguments ? this.attr(i, n) : this.attr(i);
                    return null !== r ? K(r) : e
                },
                val: function (t) {
                    return 0 in arguments ? (null == t && (t = ""), this.each(function (e) {
                        this.value = Y(this, t, e, this.value)
                    })) : this[0] && (this[0].multiple ? i(this[0]).find("option").filter(function () {
                        return this.selected
                    }).pluck("value") : this[0].value)
                },
                offset: function (e) {
                    if (e) return this.each(function (t) {
                        var n = i(this),
                            r = Y(this, e, t, n.offset()),
                            o = n.offsetParent().offset(),
                            a = {
                                top: r.top - o.top,
                                left: r.left - o.left
                            };
                        "static" == n.css("position") && (a.position = "relative"),
                        n.css(a)
                    });
                    if (!this.length) return null;
                    if (c.documentElement !== this[0] && !i.contains(c.documentElement, this[0])) return {
                        top: 0,
                        left: 0
                    };
                    var n = this[0].getBoundingClientRect();
                    return {
                        left: n.left + t.pageXOffset,
                        top: n.top + t.pageYOffset,
                        width: Math.round(n.width),
                        height: Math.round(n.height)
                    }
                },
                css: function (t, e) {
                    if (arguments.length < 2) {
                        var r = this[0];
                        if ("string" == typeof t) {
                            if (!r) return;
                            return r.style[P(t)] || getComputedStyle(r, "").getPropertyValue(t)
                        }
                        if (D(t)) {
                            if (!r) return;
                            var o = {},
                                a = getComputedStyle(r, "");
                            return i.each(t, function (t, e) {
                                    o[e] = r.style[P(e)] || a.getPropertyValue(e)
                                }),
                            o
                        }
                    }
                    var s = "";
                    if ("string" == A(t)) e || 0 === e ? s = I(t) + ":" + q(t, e) : this.each(function () {
                        this.style.removeProperty(I(t))
                    });
                    else for (n in t) t[n] || 0 === t[n] ? s += I(n) + ":" + q(n, t[n]) + ";" : this.each(function () {
                        this.style.removeProperty(I(n))
                    });
                    return this.each(function () {
                        this.style.cssText += ";" + s
                    })
                },
                index: function (t) {
                    return t ? this.indexOf(i(t)[0]) : this.parent().children().indexOf(this[0])
                },
                hasClass: function (t) {
                    return t ? o.some.call(this, function (t) {
                        return this.test(G(t))
                    }, B(t)) : !1
                },
                addClass: function (t) {
                    return t ? this.each(function (e) {
                        if ("className" in this) {
                            r = [];
                            var n = G(this),
                                o = Y(this, t, e, n);
                            o.split(/\s+/g).forEach(function (t) {
                                    i(this).hasClass(t) || r.push(t)
                                }, this),
                            r.length && G(this, n + (n ? " " : "") + r.join(" "))
                        }
                    }) : this
                },
                removeClass: function (t) {
                    return this.each(function (n) {
                        if ("className" in this) {
                            if (t === e) return G(this, "");
                            r = G(this),
                            Y(this, t, n, r).split(/\s+/g).forEach(function (t) {
                                r = r.replace(B(t), " ")
                            }),
                            G(this, r.trim())
                        }
                    })
                },
                toggleClass: function (t, n) {
                    return t ? this.each(function (r) {
                        var o = i(this),
                            a = Y(this, t, r, G(this));
                        a.split(/\s+/g).forEach(function (t) {
                                (n === e ? !o.hasClass(t) : n) ? o.addClass(t) : o.removeClass(t)
                            })
                    }) : this
                },
                scrollTop: function (t) {
                    if (this.length) {
                        var n = "scrollTop" in this[0];
                        return t === e ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ?
                        function () {
                            this.scrollTop = t
                        } : function () {
                            this.scrollTo(this.scrollX, t)
                        })
                    }
                },
                scrollLeft: function (t) {
                    if (this.length) {
                        var n = "scrollLeft" in this[0];
                        return t === e ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ?
                        function () {
                            this.scrollLeft = t
                        } : function () {
                            this.scrollTo(t, this.scrollY)
                        })
                    }
                },
                position: function () {
                    if (this.length) {
                        var t = this[0],
                            e = this.offsetParent(),
                            n = this.offset(),
                            r = g.test(e[0].nodeName) ? {
                                top: 0,
                                left: 0
                            } : e.offset();
                        return n.top -= parseFloat(i(t).css("margin-top")) || 0,
                        n.left -= parseFloat(i(t).css("margin-left")) || 0,
                        r.top += parseFloat(i(e[0]).css("border-top-width")) || 0,
                        r.left += parseFloat(i(e[0]).css("border-left-width")) || 0,
                        {
                                top: n.top - r.top,
                                left: n.left - r.left
                            }
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (var t = this.offsetParent || c.body; t && !g.test(t.nodeName) && "static" == i(t).css("position");) t = t.offsetParent;
                        return t
                    })
                }
            },
        i.fn.detach = i.fn.remove,
        ["width", "height"].forEach(function (t) {
                var n = t.replace(/./, function (t) {
                    return t[0].toUpperCase()
                });
                i.fn[t] = function (r) {
                    var o, a = this[0];
                    return r === e ? k(a) ? a["inner" + n] : F(a) ? a.documentElement["scroll" + n] : (o = this.offset()) && o[t] : this.each(function (e) {
                        a = i(this),
                        a.css(t, Y(this, r, e, a[t]()))
                    })
                }
            }),
        b.forEach(function (n, r) {
                var o = r % 2;
                i.fn[n] = function () {
                    var n, s, a = i.map(arguments, function (t) {
                        var r = [];
                        return n = A(t),
                        "array" == n ? (t.forEach(function (t) {
                            return t.nodeType !== e ? r.push(t) : i.zepto.isZ(t) ? r = r.concat(t.get()) : void(r = r.concat(C.fragment(t)))
                        }), r) : "object" == n || null == t ? t : C.fragment(t)
                    }),
                        u = this.length > 1;
                    return a.length < 1 ? this : this.each(function (e, n) {
                            s = o ? n : n.parentNode,
                            n = 0 == r ? n.nextSibling : 1 == r ? n.firstChild : 2 == r ? n : null;
                            var f = i.contains(c.documentElement, s);
                            a.forEach(function (e) {
                                if (u) e = e.cloneNode(!0);
                                else if (!s) return i(e).remove();
                                s.insertBefore(e, n),
                                f && Q(e, function (e) {
                                    if (!(null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src)) {
                                        var n = e.ownerDocument ? e.ownerDocument.defaultView : t;
                                        n.eval.call(n, e.innerHTML)
                                    }
                                })
                            })
                        })
                },
                i.fn[o ? n + "To" : "insert" + (r ? "Before" : "After")] = function (t) {
                    return i(t)[n](this),
                    this
                }
            }),
        C.Z.prototype = U.prototype = i.fn,
        C.uniq = N,
        C.deserializeValue = K,
        i.zepto = C,
        i
    }();
    return t.Zepto = e,
    void 0 === t.$ && (t.$ = e),


    function (e) {
        function h(t) {
            return t._zid || (t._zid = n++)
        }
        function p(t, e, n, i) {
            if (e = d(e), e.ns) var r = m(e.ns);
            return (s[h(t)] || []).filter(function (t) {
                return t && (!e.e || t.e == e.e) && (!e.ns || r.test(t.ns)) && (!n || h(t.fn) === h(n)) && (!i || t.sel == i)
            })
        }
        function d(t) {
            var e = ("" + t).split(".");
            return {
                e: e[0],
                ns: e.slice(1).sort().join(" ")
            }
        }
        function m(t) {
            return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
        }
        function g(t, e) {
            return t.del && !c && t.e in f || !! e
        }
        function v(t) {
            return l[t] || c && f[t] || t
        }
        function y(t, n, r, o, a, u, c) {
            var f = h(t),
                p = s[f] || (s[f] = []);
            n.split(/\s/).forEach(function (n) {
                    if ("ready" == n) return e(document).ready(r);
                    var s = d(n);
                    s.fn = r,
                    s.sel = a,
                    s.e in l && (r = function (t) {
                        var n = t.relatedTarget;
                        return !n || n !== this && !e.contains(this, n) ? s.fn.apply(this, arguments) : void 0
                    }),
                    s.del = u;
                    var f = u || r;
                    s.proxy = function (e) {
                        if (e = S(e), !e.isImmediatePropagationStopped()) {
                            e.data = o;
                            var n = f.apply(t, e._args == i ? [e] : [e].concat(e._args));
                            return n === !1 && (e.preventDefault(), e.stopPropagation()),
                            n
                        }
                    },
                    s.i = p.length,
                    p.push(s),
                    "addEventListener" in t && t.addEventListener(v(s.e), s.proxy, g(s, c))
                })
        }
        function b(t, e, n, i, r) {
            var o = h(t);
            (e || "").split(/\s/).forEach(function (e) {
                p(t, e, n, i).forEach(function (e) {
                    delete s[o][e.i],
                    "removeEventListener" in t && t.removeEventListener(v(e.e), e.proxy, g(e, r))
                })
            })
        }
        function S(t, n) {
            if (n || !t.isDefaultPrevented) {
                n || (n = t),
                e.each(w, function (e, i) {
                    var r = n[e];
                    t[e] = function () {
                        return this[i] = x,
                        r && r.apply(n, arguments)
                    },
                    t[i] = E
                });
                try {
                    t.timeStamp || (t.timeStamp = Date.now())
                } catch (r$1) {}(n.defaultPrevented !== i ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (t.isDefaultPrevented = x)
            }
            return t
        }
        function j(t) {
            var e, n = {
                originalEvent: t
            };
            for (e in t) T.test(e) || t[e] === i || (n[e] = t[e]);
            return S(n, t)
        }
        var i, n = 1,
            r = Array.prototype.slice,
            o = e.isFunction,
            a = function (t) {
                return "string" == typeof t
            },
            s = {},
            u = {},
            c = "onfocusin" in t,
            f = {
                focus: "focusin",
                blur: "focusout"
            },
            l = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            };
        u.click = u.mousedown = u.mouseup = u.mousemove = "MouseEvents",
        e.event = {
                add: y,
                remove: b
            },
        e.proxy = function (t, n) {
                var i =
                2 in arguments && r.call(arguments, 2);
                if (o(t)) {
                    var s = function () {
                        return t.apply(n, i ? i.concat(r.call(arguments)) : arguments)
                    };
                    return s._zid = h(t),
                    s
                }
                if (a(n)) return i ? (i.unshift(t[n], t), e.proxy.apply(null, i)) : e.proxy(t[n], t);
                throw new TypeError("expected function");
            },
        e.fn.bind = function (t, e, n) {
                return this.on(t, e, n)
            },
        e.fn.unbind = function (t, e) {
                return this.off(t, e)
            },
        e.fn.one = function (t, e, n, i) {
                return this.on(t, e, n, i, 1)
            };
        var x = function () {
                return !0
            },
            E = function () {
                return !1
            },
            T = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
            w = {
                preventDefault: "isDefaultPrevented",
                stopImmediatePropagation: "isImmediatePropagationStopped",
                stopPropagation: "isPropagationStopped"
            };
        e.fn.delegate = function (t, e, n) {
                return this.on(e, t, n)
            },
        e.fn.undelegate = function (t, e, n) {
                return this.off(e, t, n)
            },
        e.fn.live = function (t, n) {
                return e(document.body).delegate(this.selector, t, n),
                this
            },
        e.fn.die = function (t, n) {
                return e(document.body).undelegate(this.selector, t, n),
                this
            },
        e.fn.on = function (t, n, s, u, c) {
                var f, l, h = this;
                return t && !a(t) ? (e.each(t, function (t, e) {
                    h.on(t, n, s, e, c)
                }), h) : (a(n) || o(u) || u === !1 || (u = s, s = n, n = i), (u === i || s === !1) && (u = s, s = i), u === !1 && (u = E), h.each(function (i, o) {
                    c && (f = function (t) {
                        return b(o, t.type, u),
                        u.apply(this, arguments)
                    }),
                    n && (l = function (t) {
                        var i, a = e(t.target).closest(n, o).get(0);
                        return a && a !== o ? (i = e.extend(j(t), {
                            currentTarget: a,
                            liveFired: o
                        }), (f || u).apply(a, [i].concat(r.call(arguments, 1)))) : void 0
                    }),
                    y(o, t, u, s, n, l || f)
                }))
            },
        e.fn.off = function (t, n, r) {
                var s = this;
                return t && !a(t) ? (e.each(t, function (t, e) {
                    s.off(t, n, e)
                }), s) : (a(n) || o(r) || r === !1 || (r = n, n = i), r === !1 && (r = E), s.each(function () {
                    b(this, t, r, n)
                }))
            },
        e.fn.trigger = function (t, n) {
                return t = a(t) || e.isPlainObject(t) ? e.Event(t) : S(t),
                t._args = n,
                this.each(function () {
                    t.type in f && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, n)
                })
            },
        e.fn.triggerHandler = function (t, n) {
                var i, r;
                return this.each(function (o, s) {
                    i = j(a(t) ? e.Event(t) : t),
                    i._args = n,
                    i.target = s,
                    e.each(p(s, t.type || t), function (t, e) {
                        return r = e.proxy(i),
                        i.isImmediatePropagationStopped() ? !1 : void 0
                    })
                }),
                r
            },
        "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (t) {
                e.fn[t] = function (e) {
                    return 0 in arguments ? this.bind(t, e) : this.trigger(t)
                }
            }),
        e.Event = function (t, e) {
                a(t) || (e = t, t = e.type);
                var n = document.createEvent(u[t] || "Events"),
                    i = !0;
                if (e) for (var r in e)"bubbles" == r ? i = !! e[r] : n[r] = e[r];
                return n.initEvent(t, i, !0),
                S(n)
            }
    }(e),


    function (e) {
        function p(t, n, i) {
            var r = e.Event(n);
            return e(t).trigger(r, i),
            !r.isDefaultPrevented()
        }
        function d(t, e, n, r) {
            return t.global ? p(e || i, n, r) : void 0
        }
        function m(t) {
            t.global && 0 === e.active++ && d(t, null, "ajaxStart")
        }
        function g(t) {
            t.global && !--e.active && d(t, null, "ajaxStop")
        }
        function v(t, e) {
            var n = e.context;
            return e.beforeSend.call(n, t, e) === !1 || d(e, n, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void d(e, n, "ajaxSend", [t, e])
        }
        function y(t, e, n, i) {
            var r = n.context,
                o = "success";
            n.success.call(r, t, o, e),
            i && i.resolveWith(r, [t, o, e]),
            d(n, r, "ajaxSuccess", [e, n, t]),
            x(o, e, n)
        }
        function b(t, e, n, i, r) {
            var o = i.context;
            i.error.call(o, n, e, t),
            r && r.rejectWith(o, [n, e, t]),
            d(i, o, "ajaxError", [n, i, t || e]),
            x(e, n, i)
        }
        function x(t, e, n) {
            var i = n.context;
            n.complete.call(i, e, t),
            d(n, i, "ajaxComplete", [e, n]),
            g(n)
        }
        function E(t, e, n) {
            if (n.dataFilter == T) return t;
            var i = n.context;
            return n.dataFilter.call(i, t, e)
        }
        function T() {}
        function w(t) {
            return t && (t = t.split(";", 2)[0]),
            t && (t == f ? "html" : t == c ? "json" : s.test(t) ? "script" : u.test(t) && "xml") || "text"
        }
        function S(t, e) {
            return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
        }
        function j(t) {
            t.processData && t.data && "string" != e.type(t.data) && (t.data = e.param(t.data, t.traditional)),
            !t.data || t.type && "GET" != t.type.toUpperCase() && "jsonp" != t.dataType || (t.url = S(t.url, t.data), t.data = void 0)
        }
        function C(t, n, i, r) {
            return e.isFunction(n) && (r = i, i = n, n = void 0),
            e.isFunction(i) || (r = i, i = void 0),
            {
                url: t,
                data: n,
                success: i,
                dataType: r
            }
        }
        function N(t, n, i, r) {
            var o, a = e.isArray(n),
                s = e.isPlainObject(n);
            e.each(n, function (n, u) {
                    o = e.type(u),
                    r && (n = i ? r : r + "[" + (s || "object" == o || "array" == o ? n : "") + "]"),
                    !r && a ? t.add(u.name, u.value) : "array" == o || !i && "object" == o ? N(t, u, i, n) : t.add(n, u)
                })
        }
        var r, o, n = +new Date,
            i = t.document,
            a = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            s = /^(?:text|application)\/javascript/i,
            u = /^(?:text|application)\/xml/i,
            c = "application/json",
            f = "text/html",
            l = /^\s*$/,
            h = i.createElement("a");
        h.href = t.location.href,
        e.active = 0,
        e.ajaxJSONP = function (r, o) {
                if (!("type" in r)) return e.ajax(r);
                var f, p, a = r.jsonpCallback,
                    s = (e.isFunction(a) ? a() : a) || "Zepto" + n++,
                    u = i.createElement("script"),
                    c = t[s],
                    l = function (t) {
                        e(u).triggerHandler("error", t || "abort")
                    },
                    h = {
                        abort: l
                    };
                return o && o.promise(h),
                e(u).on("load error", function (n, i) {
                        clearTimeout(p),
                        e(u).off().remove(),
                        "error" != n.type && f ? y(f[0], h, r, o) : b(null, i || "error", h, r, o),
                        t[s] = c,
                        f && e.isFunction(c) && c(f[0]),
                        c = f = void 0
                    }),
                v(h, r) === !1 ? (l("abort"), h) : (t[s] = function () {
                        f = arguments
                    }, u.src = r.url.replace(/\?(.+)=\?/, "?$1=" + s), i.head.appendChild(u), r.timeout > 0 && (p = setTimeout(function () {
                        l("timeout")
                    }, r.timeout)), h)
            },
        e.ajaxSettings = {
                type: "GET",
                beforeSend: T,
                success: T,
                error: T,
                complete: T,
                context: null,
                global: !0,
                xhr: function () {
                    return new t.XMLHttpRequest
                },
                accepts: {
                    script: "text/javascript, application/javascript, application/x-javascript",
                    json: c,
                    xml: "application/xml, text/xml",
                    html: f,
                    text: "text/plain"
                },
                crossDomain: !1,
                timeout: 0,
                processData: !0,
                cache: !0,
                dataFilter: T
            },
        e.ajax = function (n) {
                var u, c, a = e.extend({}, n || {}),
                    s = e.Deferred && e.Deferred();
                for (r in e.ajaxSettings) void 0 === a[r] && (a[r] = e.ajaxSettings[r]);
                m(a),
                a.crossDomain || (u = i.createElement("a"), u.href = a.url, u.href = u.href, a.crossDomain = h.protocol + "//" + h.host != u.protocol + "//" + u.host),
                a.url || (a.url = t.location.toString()),
                (c = a.url.indexOf("#")) > -1 && (a.url = a.url.slice(0, c)),
                j(a);
                var f = a.dataType,
                    p = /\?.+=\?/.test(a.url);
                if (p && (f = "jsonp"), a.cache !== !1 && (n && n.cache === !0 || "script" != f && "jsonp" != f) || (a.url = S(a.url, "_=" + Date.now())), "jsonp" == f) return p || (a.url = S(a.url, a.jsonp ? a.jsonp + "=?" : a.jsonp === !1 ? "" : "callback=?")),
                e.ajaxJSONP(a, s);
                var O, d = a.accepts[f],
                    g = {},
                    x = function (t, e) {
                        g[t.toLowerCase()] = [t, e]
                    },
                    C = /^([\w-]+:)\/\//.test(a.url) ? RegExp.$1 : t.location.protocol,
                    P = a.xhr(),
                    N = P.setRequestHeader;
                if (s && s.promise(P), a.crossDomain || x("X-Requested-With", "XMLHttpRequest"), x("Accept", d || "*/*"), (d = a.mimeType || d) && (d.indexOf(",") > -1 && (d = d.split(",", 2)[0]), P.overrideMimeType && P.overrideMimeType(d)), (a.contentType || a.contentType !== !1 && a.data && "GET" != a.type.toUpperCase()) && x("Content-Type", a.contentType || "application/x-www-form-urlencoded"), a.headers) for (o in a.headers) x(o, a.headers[o]);
                if (P.setRequestHeader = x, P.onreadystatechange = function () {
                        if (4 == P.readyState) {
                            P.onreadystatechange =
                            T,
                            clearTimeout(O);
                            var t, n = !1;
                            if (P.status >= 200 && P.status < 300 || 304 == P.status || 0 == P.status && "file:" == C) {
                                if (f = f || w(a.mimeType || P.getResponseHeader("content-type")), "arraybuffer" == P.responseType || "blob" == P.responseType) t = P.response;
                                else {
                                    t = P.responseText;
                                    try {
                                        t = E(t, f, a),
                                        "script" == f ? (1, eval)(t) : "xml" == f ? t = P.responseXML : "json" == f && (t = l.test(t) ? null : e.parseJSON(t))
                                    } catch (i$2) {
                                        n = i$2
                                    }
                                    if (n) return b(n, "parsererror", P, a, s)
                                }
                                y(t, P, a, s)
                            } else b(P.statusText || null, P.status ? "error" : "abort", P, a, s)
                        }
                    }, v(P, a) === !1) return P.abort(),
                b(null, "abort", P, a, s),
                P;
                var M = "async" in a ? a.async : !0;
                if (P.open(a.type, a.url, M, a.username, a.password), a.xhrFields) for (o in a.xhrFields) P[o] = a.xhrFields[o];
                for (o in g) N.apply(P, g[o]);
                return a.timeout > 0 && (O = setTimeout(function () {
                        P.onreadystatechange = T,
                        P.abort(),
                        b(null, "timeout", P, a, s)
                    }, a.timeout)),
                P.send(a.data ? a.data : null),
                P
            },
        e.get = function () {
                return e.ajax(C.apply(null, arguments))
            },
        e.post = function () {
                var t = C.apply(null, arguments);
                return t.type = "POST",
                e.ajax(t)
            },
        e.getJSON = function () {
                var t = C.apply(null, arguments);
                return t.dataType = "json",
                e.ajax(t)
            },
        e.fn.load = function (t, n, i) {
                if (!this.length) return this;
                var s, r = this,
                    o = t.split(/\s/),
                    u = C(t, n, i),
                    c = u.success;
                return o.length > 1 && (u.url = o[0], s = o[1]),
                u.success = function (t) {
                        r.html(s ? e("<div>").html(t.replace(a, "")).find(s) : t),
                        c && c.apply(r, arguments)
                    },
                e.ajax(u),
                this
            };
        var P = encodeURIComponent;
        e.param = function (t, n) {
                var i = [];
                return i.add = function (t, n) {
                    e.isFunction(n) && (n = n()),
                    null == n && (n = ""),
                    this.push(P(t) + "=" + P(n))
                },
                N(i, t, n),
                i.join("&").replace(/%20/g, "+")
            }
    }(e),

    function (t) {
        t.fn.serializeArray = function () {
            var e, n, i = [],
                r = function (t) {
                    return t.forEach ? t.forEach(r) : void i.push({
                        name: e,
                        value: t
                    })
                };
            return this[0] && t.each(this[0].elements, function (i, o) {
                    n = o.type,
                    e = o.name,
                    e && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && r(t(o).val())
                }),
            i
        },
        t.fn.serialize = function () {
            var t = [];
            return this.serializeArray().forEach(function (e) {
                t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
            }),
            t.join("&")
        },
        t.fn.submit = function (e) {
            if (0 in arguments) this.bind("submit", e);
            else if (this.length) {
                var n = t.Event("submit");
                this.eq(0).trigger(n),
                n.isDefaultPrevented() || this.get(0).submit()
            }
            return this
        }
    }(e),


    function () {
        try {
            getComputedStyle(void 0)
        } catch (e$3) {
            var n = getComputedStyle;
            t.getComputedStyle = function (t, e) {
                try {
                    return n(t, e)
                } catch (i) {
                    return null
                }
            }
        }
    }(),


    function (t) {
        function e(t, e) {
            var n = this.os = {},
                i = this.browser = {},
                r = t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
                o = t.match(/(Android);?[\s\/]+([\d.]+)?/),
                a = !! t.match(/\(Macintosh\; Intel /),
                s = t.match(/(iPad).*OS\s([\d_]+)/),
                u = t.match(/(iPod)(.*OS\s([\d_]+))?/),
                c = !s && t.match(/(iPhone\sOS)\s([\d_]+)/),
                f = t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
                l = /Win\d{2}|Windows/.test(e),
                h = t.match(/Windows Phone ([\d.]+)/),
                p = f && t.match(/TouchPad/),
                d = t.match(/Kindle\/([\d.]+)/),
                m = t.match(/Silk\/([\d._]+)/),
                g = t.match(/(BlackBerry).*Version\/([\d.]+)/),
                v = t.match(/(BB10).*Version\/([\d.]+)/),
                y = t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
                b = t.match(/PlayBook/),
                x = t.match(/Chrome\/([\d.]+)/) || t.match(/CriOS\/([\d.]+)/),
                E = t.match(/Firefox\/([\d.]+)/),
                T = t.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),
                w = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
                S = !x && t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
                j = S || t.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
                (i.webkit = !! r) && (i.version = r[1]),
            o && (n.android = !0, n.version = o[2]),
            c && !u && (n.ios = n.iphone = !0, n.version = c[2].replace(/_/g, ".")),
            s && (n.ios = n.ipad = !0, n.version = s[2].replace(/_/g, ".")),
            u && (n.ios = n.ipod = !0, n.version = u[3] ? u[3].replace(/_/g, ".") : null),
            h && (n.wp = !0, n.version = h[1]),
            f && (n.webos = !0, n.version = f[2]),
            p && (n.touchpad = !0),
            g && (n.blackberry = !0, n.version = g[2]),
            v && (n.bb10 = !0, n.version = v[2]),
            y && (n.rimtabletos = !0, n.version = y[2]),
            b && (i.playbook = !0),
            d && (n.kindle = !0, n.version = d[1]),
            m && (i.silk = !0, i.version = m[1]),
            !m && n.android && t.match(/Kindle Fire/) && (i.silk = !0),
            x && (i.chrome = !0, i.version = x[1]),
            E && (i.firefox = !0, i.version = E[1]),
            T && (n.firefoxos = !0, n.version = T[1]),
            w && (i.ie = !0, i.version =
                w[1]),
            j && (a || n.ios || l) && (i.safari = !0, n.ios || (i.version = j[1])),
            S && (i.webview = !0),
            n.tablet = !! (s || b || o && !t.match(/Mobile/) || E && t.match(/Tablet/) || w && !t.match(/Phone/) && t.match(/Touch/)),
            n.phone = !(n.tablet || n.ipod || !(o || c || f || g || v || x && t.match(/Android/) || x && t.match(/CriOS\/([\d.]+)/) || E && t.match(/Mobile/) || w && t.match(/Touch/)))
        }
        e.call(t, navigator.userAgent, navigator.platform),
        t.__detect = e
    }(e),


    function (e) {
        function c(t, e, n, i) {
            return Math.abs(t - e) >= Math.abs(n - i) ? t - e > 0 ? "Left" : "Right" : n - i > 0 ? "Up" : "Down"
        }
        function f() {
            a =
            null,
            n.last && (n.el.trigger("longTap"), n = {})
        }
        function l() {
            a && clearTimeout(a),
            a = null
        }
        function h() {
            i && clearTimeout(i),
            r && clearTimeout(r),
            o && clearTimeout(o),
            a && clearTimeout(a),
            i = r = o = a = null,
            n = {}
        }
        function p(t) {
            return ("touch" == t.pointerType || t.pointerType == t.MSPOINTER_TYPE_TOUCH) && t.isPrimary
        }
        function d(t, e) {
            return t.type == "pointer" + e || t.type.toLowerCase() == "mspointer" + e
        }
        var i, r, o, a, u, n = {},
            s = 750;
        e(document).ready(function () {
                var m, g, b, x, v = 0,
                    y = 0;
                "MSGesture" in t && (u = new MSGesture, u.target = document.body),
                e(document).bind("MSGestureEnd", function (t) {
                        var e = t.velocityX > 1 ? "Right" : t.velocityX < -1 ? "Left" : t.velocityY > 1 ? "Down" : t.velocityY < -1 ? "Up" : null;
                        e && (n.el.trigger("swipe"), n.el.trigger("swipe" + e))
                    }).on("touchstart MSPointerDown pointerdown", function (t) {
                        (!(x = d(t, "down")) || p(t)) && (b = x ? t : t.touches[0], t.touches && 1 === t.touches.length && n.x2 && (n.x2 = void 0, n.y2 = void 0), m = Date.now(), g = m - (n.last || m), n.el = e("tagName" in b.target ? b.target : b.target.parentNode), i && clearTimeout(i), n.x1 = b.pageX, n.y1 = b.pageY, g > 0 && 250 >= g && (n.isDoubleTap = !0), n.last = m, a =
                        setTimeout(f, s), u && x && u.addPointer(t.pointerId))
                    }).on("touchmove MSPointerMove pointermove", function (t) {
                        (!(x = d(t, "move")) || p(t)) && (b = x ? t : t.touches[0], l(), n.x2 = b.pageX, n.y2 = b.pageY, v += Math.abs(n.x1 - n.x2), y += Math.abs(n.y1 - n.y2))
                    }).on("touchend MSPointerUp pointerup", function (t) {
                        (!(x = d(t, "up")) || p(t)) && (l(), n.x2 && Math.abs(n.x1 - n.x2) > 30 || n.y2 && Math.abs(n.y1 - n.y2) > 30 ? o = setTimeout(function () {
                            n.el && (n.el.trigger("swipe"), n.el.trigger("swipe" + c(n.x1, n.x2, n.y1, n.y2))),
                            n = {}
                        }, 0) : "last" in n && (30 > v && 30 > y ? r = setTimeout(function () {
                            var t =
                            e.Event("tap");
                            t.cancelTouch = h,
                            n.el && n.el.trigger(t),
                            n.isDoubleTap ? (n.el && n.el.trigger("doubleTap"), n = {}) : i = setTimeout(function () {
                                i = null,
                                n.el && n.el.trigger("singleTap"),
                                n = {}
                            }, 250)
                        }, 0) : n = {}), v = y = 0)
                    }).on("touchcancel MSPointerCancel pointercancel", h),
                e(t).on("scroll", h)
            }),
        ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function (t) {
                e.fn[t] = function (e) {
                    return this.on(t, e)
                }
            })
    }(e),
    e
});
!
function () {
    function a(a) {
        return a.replace(t, "").replace(u, ",").replace(v, "").replace(w, "").replace(x, "").split(y)
    }
    function b(a) {
        return "'" + a.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "'"
    }
    function c(c, d) {
        function e(a) {
            return m += a.split(/\n/).length - 1,
            k && (a = a.replace(/\s+/g, " ").replace(/\x3c!--[\w\W]*?--\x3e/g, "")),
            a && (a = s[1] + b(a) + s[2] + "\n"),
            a
        }
        function f(b) {
            var c = m;
            if (j ? b = j(b, d) : g && (b = b.replace(/\n/g, function () {
                return m++,
                "$line=" + m + ";"
            })), 0 === b.indexOf("=")) {
                var e = l && !/^=[=#]/.test(b);
                if (b = b.replace(/^=[=#]?|[\s;]*$/g, ""), e) {
                    var f = b.replace(/\s*\([^\)]+\)/, "");
                    n[f] || /^(include|print)$/.test(f) || (b = "$escape(" + b + ")")
                } else b = "$string(" + b + ")";
                b = s[1] + b + s[2]
            }
            return g && (b = "$line=" + c + ";" + b),
            r(a(b), function (a) {
                if (a && !p[a]) {
                    var b;
                    b = "print" === a ? u : "include" === a ? v : n[a] ? "$utils." + a : o[a] ? "$helpers." + a : "$data." + a,
                    w += a + "=" + b + ",",
                    p[a] = !0
                }
            }),
            b + "\n"
        }
        var g = d.debug,
            h = d.openTag,
            i = d.closeTag,
            j = d.parser,
            k = d.compress,
            l = d.escape,
            m = 1,
            p = {
                $data: 1,
                $filename: 1,
                $utils: 1,
                $helpers: 1,
                $out: 1,
                $line: 1
            },
            q = "".trim,
            s =
        q ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"],
            t = q ? "$out+=text;return $out;" : "$out.push(text);",
            u = "function(){var text=''.concat.apply('',arguments);" + t + "}",
            v = "function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);" + t + "}",
            w = "'use strict';var $utils=this,$helpers=$utils.$helpers," + (g ? "$line=0," : ""),
            x = s[0],
            y = "return new String(" + s[3] + ");";
        r(c.split(h), function (a) {
                a = a.split(i);
                var b = a[0],
                    c = a[1];
                1 === a.length ? x += e(b) : (x += f(b), c && (x += e(c)))
            });
        var z = w + x + y;
        g && (z = "try{" + z + "}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:" + b(c) + ".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");
        try {
                var A = new Function("$data", "$filename", z);
                return A.prototype = n,
                A
            } catch (B) {
                throw B.temp = "function anonymous($data,$filename) {" + z + "}",
                B;
            }
    }
    var d = function (a, b) {
        return "string" == typeof b ? q(b, {
            filename: a
        }) : g(a, b)
    };
    d.version = "3.0.0",
    d.config = function (a, b) {
        e[a] = b
    };
    var e = d.defaults = {
        openTag: "<%",
        closeTag: "%>",
        escape: !0,
        cache: !0,
        compress: !1,
        parser: null
    },
        f = d.cache = {};
    d.render = function (a, b) {
            return q(a, b)
        };
    var g = d.renderFile = function (a, b) {
            var c = d.get(a) || p({
                filename: a,
                name: "Render Error",
                message: "Template not found"
            });
            return b ? c(b) : c
        };
    d.get = function (a) {
            var b;
            if (f[a]) b = f[a];
            else if ("object" == typeof document) {
                var c = document.getElementById(a);
                if (c) {
                    var d = (c.value || c.innerHTML).replace(/^\s*|\s*$/g, "");
                    b = q(d, {
                        filename: a
                    })
                }
            }
            return b
        };
    var h = function (a, b) {
            return "string" != typeof a && (b = typeof a, "number" === b ? a += "" : a = "function" === b ? h(a.call(a)) : ""),
            a
        },
        i = {
            "<": "&#60;",
            ">": "&#62;",
            '"': "&#34;",
            "'": "&#39;",
            "&": "&#38;"
        },
        j = function (a) {
            return i[a]
        },
        k = function (a) {
            return h(a).replace(/&(?![\w#]+;)|[<>"']/g, j)
        },
        l = Array.isArray ||
    function (a) {
            return "[object Array]" === {}.toString.call(a)
        },
        m = function (a, b) {
            var c, d;
            if (l(a)) for (c = 0, d = a.length; d > c; c++) b.call(a, a[c], c, a);
            else for (c in a) b.call(a, a[c], c)
        },
        n = d.utils = {
            $helpers: {},
            $include: g,
            $string: h,
            $escape: k,
            $each: m
        };
    d.helper = function (a, b) {
            o[a] = b
        };
    var o = d.helpers = n.$helpers;
    d.onerror = function (a) {
            var b = "Template Error\n\n";
            for (var c in a) b += "<" + c + ">\n" + a[c] + "\n\n";
            "object" == typeof console && console.error(b)
        };
    var p = function (a) {
            return d.onerror(a),


            function () {
                return "{Template Error}"
            }
        },
        q = d.compile = function (a, b) {
            function d(c) {
                try {
                    return new i(c, h) + ""
                } catch (d$4) {
                    return b.debug ? p(d$4)() : (b.debug = !0, q(a, b)(c))
                }
            }
            b = b || {};
            for (var g in e) void 0 === b[g] && (b[g] = e[g]);
            var h = b.filename;
            try {
                var i = c(a, b)
            } catch (j$5) {
                return j$5.filename = h || "anonymous",
                j$5.name = "Syntax Error",
                p(j$5)
            }
            return d.prototype = i.prototype,
            d.toString =

            function () {
                return i.toString()
            },
            h && b.cache && (f[h] = d),
            d
        },
        r = n.$each,
        s = "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",
        t = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,
        u = /[^\w$]+/g,
        v = new RegExp(["\\b" + s.replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g"),
        w = /^\d[^,]*|,\d[^,]*/g,
        x = /^,+|,+$/g,
        y = /^$|,+/;
    e.openTag = "{{",
    e.closeTag = "}}";
    var z = function (a, b) {
            var c = b.split(":"),
                d = c.shift(),
                e = c.join(":") || "";
            return e && (e = ", " + e),
            "$helpers." + d + "(" + a + e + ")"
        };
    e.parser = function (a) {
            a = a.replace(/^\s/, "");
            var b = a.split(" "),
                c = b.shift(),
                e = b.join(" ");
            switch (c) {
                case "if":
                    a = "if(" + e + "){";
                    break;
                case "else":
                    b = "if" === b.shift() ? " if(" + b.join(" ") + ")" : "",
                    a = "}else" + b + "{";
                    break;
                case "/if":
                    a = "}";
                    break;
                case "each":
                    var f = b[0] || "$data",
                        g = b[1] || "as",
                        h = b[2] || "$value",
                        i = b[3] || "$index",
                        j = h + "," + i;
                    "as" !== g && (f = "[]"),
                    a = "$each(" + f + ",function(" + j + "){";
                    break;
                case "/each":
                    a = "});";
                    break;
                case "echo":
                    a = "print(" + e + ");";
                    break;
                case "print":
                case "include":
                    a = c + "(" + b.join(",") + ");";
                    break;
                default:
                    if (/^\s*\|\s*[\w\$]/.test(e)) {
                            var k = !0;
                            0 === a.indexOf("#") && (a = a.substr(1), k = !1);
                            for (var l = 0, m = a.split("|"), n = m.length, o = m[l++]; n > l; l++) o = z(o, m[l]);
                            a = (k ? "=" : "=#") + o
                        } else a = d.helpers[c] ? "=#" + c + "(" + b.join(",") + ");" : "=" + a
                }
            return a
        },
    "function" == typeof define ? define(function () {
            return d
        }) : "undefined" != typeof exports ? module.exports = d : this.template = d
}();
(function () {
    function d(o, k) {
        var p;
        k = k || {};
        this.trackingClick = false;
        this.trackingClickStart = 0;
        this.targetElement = null;
        this.touchStartX = 0;
        this.touchStartY = 0;
        this.lastTouchIdentifier = 0;
        this.touchBoundary = k.touchBoundary || 10;
        this.layer = o;
        this.tapDelay = k.tapDelay || 200;
        this.tapTimeout = k.tapTimeout || 700;
        if (d.notNeeded(o)) return;

        function q(l, i) {
            return function () {
                return l.apply(i, arguments)
            }
        }
        var j = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"];
        var n = this;
        for (var m = 0, h = j.length; m < h; m++) n[j[m]] = q(n[j[m]], n);
        if (b) {
            o.addEventListener("mouseover", this.onMouse, true);
            o.addEventListener("mousedown", this.onMouse, true);
            o.addEventListener("mouseup", this.onMouse, true)
        }
        o.addEventListener("click", this.onClick, true);
        o.addEventListener("touchstart", this.onTouchStart, false);
        o.addEventListener("touchmove", this.onTouchMove, false);
        o.addEventListener("touchend", this.onTouchEnd, false);
        o.addEventListener("touchcancel", this.onTouchCancel, false);
        if (!Event.prototype.stopImmediatePropagation) {
            o.removeEventListener =

            function (l, s, i) {
                var r = Node.prototype.removeEventListener;
                if (l === "click") r.call(o, l, s.hijacked || s, i);
                else r.call(o, l, s, i)
            };
            o.addEventListener = function (r, s, l) {
                var i = Node.prototype.addEventListener;
                if (r === "click") i.call(o, r, s.hijacked || (s.hijacked = function (t) {
                    if (!t.propagationStopped) s(t)
                }), l);
                else i.call(o, r, s, l)
            }
        }
        if (typeof o.onclick === "function") {
            p = o.onclick;
            o.addEventListener("click", function (i) {
                p(i)
            }, false);
            o.onclick = null
        }
    }
    var c = navigator.userAgent.indexOf("Windows Phone") >= 0;
    var b = navigator.userAgent.indexOf("Android") > 0 && !c;
    var g = /iP(ad|hone|od)/.test(navigator.userAgent) && !c;
    var e = g && /OS 4_\d(_\d)?/.test(navigator.userAgent);
    var f = g && /OS [6-7]_\d/.test(navigator.userAgent);
    var a = navigator.userAgent.indexOf("BB10") > 0;
    d.prototype.needsClick = function (h) {
        switch (h.nodeName.toLowerCase()) {
        case "button":
        case "select":
        case "textarea":
            if (h.disabled) return true;
            break;
        case "input":
            if (g && h.type === "file" || h.disabled) return true;
            break;
        case "label":
        case "iframe":
        case "video":
            return true
        }
        return /\bneedsclick\b/.test(h.className)
    };
    d.prototype.needsFocus = function (h) {
        switch (h.nodeName.toLowerCase()) {
        case "textarea":
            return true;
        case "select":
            return !b;
        case "input":
            switch (h.type) {
            case "button":
            case "checkbox":
            case "file":
            case "image":
            case "radio":
            case "submit":
                return false
            }
            return !h.disabled && !h.readOnly;
        default:
            return /\bneedsfocus\b/.test(h.className)
        }
    };
    d.prototype.sendClick = function (i, j) {
        var h, k;
        if (document.activeElement && document.activeElement !== i) document.activeElement.blur();
        k = j.changedTouches[0];
        h = document.createEvent("MouseEvents");
        h.initMouseEvent(this.determineEventType(i), true, true, window, 1, k.screenX, k.screenY, k.clientX, k.clientY, false, false, false, false, 0, null);
        h.forwardedTouchEvent = true;
        i.dispatchEvent(h)
    };
    d.prototype.determineEventType = function (h) {
        if (b && h.tagName.toLowerCase() === "select") return "mousedown";
        return "click"
    };
    d.prototype.focus = function (h) {
        var i;
        if (g && h.setSelectionRange && h.type.indexOf("date") !== 0 && h.type !== "time" && h.type !== "month") {
            i = h.value.length;
            h.setSelectionRange(i, i)
        } else h.focus()
    };
    d.prototype.updateScrollParent =

    function (i) {
        var j, h;
        j = i.fastClickScrollParent;
        if (!j || !j.contains(i)) {
            h = i;
            do {
                if (h.scrollHeight > h.offsetHeight) {
                    j = h;
                    i.fastClickScrollParent = h;
                    break
                }
                h = h.parentElement
            } while (h)
        }
        if (j) j.fastClickLastScrollTop = j.scrollTop
    };
    d.prototype.getTargetElementFromEventTarget = function (h) {
        if (h.nodeType === Node.TEXT_NODE) return h.parentNode;
        return h
    };
    d.prototype.onTouchStart = function (j) {
        var h, k, i;
        if (j.targetTouches.length > 1) return true;
        h = this.getTargetElementFromEventTarget(j.target);
        k = j.targetTouches[0];
        if (g) {
            i = window.getSelection();
            if (i.rangeCount && !i.isCollapsed) return true;
            if (!e) {
                if (k.identifier && k.identifier === this.lastTouchIdentifier) {
                    j.preventDefault();
                    return false
                }
                this.lastTouchIdentifier = k.identifier;
                this.updateScrollParent(h)
            }
        }
        this.trackingClick = true;
        this.trackingClickStart = j.timeStamp;
        this.targetElement = h;
        this.touchStartX = k.pageX;
        this.touchStartY = k.pageY;
        if (j.timeStamp - this.lastClickTime < this.tapDelay) j.preventDefault();
        return true
    };
    d.prototype.touchHasMoved = function (h) {
        var j = h.changedTouches[0],
            i = this.touchBoundary;
        if (Math.abs(j.pageX - this.touchStartX) > i || Math.abs(j.pageY - this.touchStartY) > i) return true;
        return false
    };
    d.prototype.onTouchMove = function (h) {
        if (!this.trackingClick) return true;
        if (this.targetElement !== this.getTargetElementFromEventTarget(h.target) || this.touchHasMoved(h)) {
            this.trackingClick = false;
            this.targetElement = null
        }
        return true
    };
    d.prototype.findControl = function (h) {
        if (h.control !== undefined) return h.control;
        if (h.htmlFor) return document.getElementById(h.htmlFor);
        return h.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    };
    d.prototype.onTouchEnd = function (j) {
        var l, k, i, n, m, h = this.targetElement;
        if (!this.trackingClick) return true;
        if (j.timeStamp - this.lastClickTime < this.tapDelay) {
            this.cancelNextClick = true;
            return true
        }
        if (j.timeStamp - this.trackingClickStart > this.tapTimeout) return true;
        this.cancelNextClick = false;
        this.lastClickTime = j.timeStamp;
        k = this.trackingClickStart;
        this.trackingClick = false;
        this.trackingClickStart = 0;
        if (f) {
            m = j.changedTouches[0];
            h = document.elementFromPoint(m.pageX - window.pageXOffset, m.pageY - window.pageYOffset) || h;
            h.fastClickScrollParent = this.targetElement.fastClickScrollParent
        }
        i = h.tagName.toLowerCase();
        if (i === "label") {
            l = this.findControl(h);
            if (l) {
                this.focus(h);
                if (b) return false;
                h = l
            }
        } else if (this.needsFocus(h)) {
            if (j.timeStamp - k > 100 || g && window.top !== window && i === "input") {
                this.targetElement = null;
                return false
            }
            this.focus(h);
            this.sendClick(h, j);
            if (!g || i !== "select") {
                this.targetElement = null;
                j.preventDefault()
            }
            return false
        }
        if (g && !e) {
            n = h.fastClickScrollParent;
            if (n && n.fastClickLastScrollTop !== n.scrollTop) return true
        }
        if (!this.needsClick(h)) {
            j.preventDefault();
            this.sendClick(h, j)
        }
        return false
    };
    d.prototype.onTouchCancel = function () {
        this.trackingClick = false;
        this.targetElement = null
    };
    d.prototype.onMouse = function (h) {
        if (!this.targetElement) return true;
        if (h.forwardedTouchEvent) return true;
        if (!h.cancelable) return true;
        if (!this.needsClick(this.targetElement) || this.cancelNextClick) {
            if (h.stopImmediatePropagation) h.stopImmediatePropagation();
            else h.propagationStopped = true;
            h.stopPropagation();
            h.preventDefault();
            return false
        }
        return true
    };
    d.prototype.onClick = function (h) {
        var i;
        if (this.trackingClick) {
            this.targetElement = null;
            this.trackingClick = false;
            return true
        }
        if (h.target.type === "submit" && h.detail === 0) return true;
        i = this.onMouse(h);
        if (!i) this.targetElement = null;
        return i
    };
    d.prototype.destroy = function () {
        var h = this.layer;
        if (b) {
            h.removeEventListener("mouseover", this.onMouse, true);
            h.removeEventListener("mousedown", this.onMouse, true);
            h.removeEventListener("mouseup", this.onMouse, true)
        }
        h.removeEventListener("click", this.onClick, true);
        h.removeEventListener("touchstart", this.onTouchStart, false);
        h.removeEventListener("touchmove", this.onTouchMove, false);
        h.removeEventListener("touchend", this.onTouchEnd, false);
        h.removeEventListener("touchcancel", this.onTouchCancel, false)
    };
    d.notNeeded = function (i) {
        var h;
        var l;
        var k;
        var j;
        if (typeof window.ontouchstart === "undefined") return true;
        l = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];
        if (l) if (b) {
            h = document.querySelector("meta[name=viewport]");
            if (h) {
                if (h.content.indexOf("user-scalable=no") !== -1) return true;
                if (l > 31 && document.documentElement.scrollWidth <= window.outerWidth) return true
            }
        } else return true;
        if (a) {
            k = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);
            if (k[1] >= 10 && k[2] >= 3) {
                h = document.querySelector("meta[name=viewport]");
                if (h) {
                    if (h.content.indexOf("user-scalable=no") !== -1) return true;
                    if (document.documentElement.scrollWidth <= window.outerWidth) return true
                }
            }
        }
        if (i.style.msTouchAction === "none" || i.style.touchAction === "manipulation") return true;
        j = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];
        if (j >= 27) {
            h = document.querySelector("meta[name=viewport]");
            if (h && (h.content.indexOf("user-scalable=no") !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) return true
        }
        if (i.style.touchAction === "none" || i.style.touchAction === "manipulation") return true;
        return false
    };
    d.attach = function (i, h) {
        return new d(i, h)
    };
    if (typeof define === "function" && typeof define.amd === "object" && define.amd) define(function () {
        return d
    });
    else if (typeof module !== "undefined" && module.exports) {
        module.exports = d.attach;
        module.exports.FastClick = d
    } else window.FastClick = d
})();
(function () {
    var __makeExtend = function (Parent) {
        return function (extProto) {
            var ChildClass = function () {
                var args = Array.prototype.slice.apply(arguments, [0]);
                Parent && Parent.apply(this, args);
                extProto.__construct && extProto.__construct.apply(this, args)
            };
            var childProto = Parent ? new Parent({
                name: "__for__proto__"
            }) : {};
            for (var prop in extProto) {
                if (!extProto.hasOwnProperty(prop)) continue;
                if (!/^__/.test(extProto)) childProto[prop] = extProto[prop]
            }
            ChildClass.prototype = childProto;
            ChildClass.extend = __makeExtend(ChildClass);
            return ChildClass
        }
    },
        baseExtend = __makeExtend();
    var BIU = baseExtend({
            "__construct": function (opt) {
                opt = opt || {};
                this.__allListeners = [];
                this.__typeListenerMap = {};
                this.__unitListenerMap = {};
                this.__typeUniListenerMap = {};
                for (var prop in opt) {
                    if (!opt.hasOwnProperty(prop)) continue;
                    this[prop] = opt[prop]
                }
                if (this.name === "__for__proto__") return;
                var initChain = this.__getPropChain("init");
                for (var i = 0, init, len = initChain.length; i < len; i++) {
                    init = initChain[i];
                    init && init.apply(this)
                }
            },
            "on": function (typeArg, func) {
                var typeName, unitName;
                typeArg = typeArg.split(":");
                typeName = typeArg[0] || "*";
                unitName = typeArg[1] || "*";
                typeArg = typeName + ":" + unitName;
                var listener = {
                    __this: this,
                    __func: func
                },
                    listeners;
                listeners = this.__allListeners;
                listeners.push(listener);
                if (typeName !== "*") {
                        listeners = this.__typeListenerMap[typeName] || (this.__typeListenerMap[typeName] = []);
                        listeners.push(listener)
                    }
                if (unitName !== "*") {
                        listeners = this.__unitListenerMap[unitName] || (this.__unitListenerMap[unitName] = []);
                        listeners.push(listener)
                    }
                listeners = this.__typeUniListenerMap[typeArg] || (this.__typeUniListenerMap[typeArg] = []);
                listeners.push(listener);
                return true
            },
            "trigger": function (typeArg, e) {
                var typeName, unitName;
                typeArg = typeArg.split(":");
                typeName = typeArg[0] || "*";
                unitName = typeArg[1] || "*";
                typeArg = typeName + ":" + unitName;
                e = e || {};
                e.path = e.path || [];
                if (typeof e !== "object") throw new Error("BIU.trigger \u51fd\u6570\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570 e \u4e3a Object \u578b\u7684\u4e8b\u4ef6\u5bf9\u8c61\uff0c\u8bf7\u68c0\u67e5\u662f\u5426\u6709\u8bef\u3002");
                e.typeName = typeName;
                e.unitName =
                unitName;
                var listeners = this.__typeUniListenerMap["*:*"] || [];
                if (typeArg === "*:*") listeners = this.__allListeners;
                else if (unitName === "*") listeners = listeners.concat(this.__typeListenerMap[typeName] || []);
                else if (typeName === "*") listeners = listeners.concat(this.__unitListenerMap[unitName] || []);
                else listeners = listeners.concat(this.__typeUniListenerMap[typeArg] || []);
                var args = [].slice.call(arguments, 1),
                    i, len = listeners.length,
                    listener;
                args[0] = e;
                for (i = 0; i < len; i++) {
                        listener = listeners[i];
                        listener.__unCalled = true
                    }
                for (i =
                    0; i < len; i++) {
                        listener = listeners[i];
                        var __this = listener.__this,
                            __func = listener.__func;
                        if (!listener.__unCalled) continue;
                        delete listener.__unCalled;
                        e.path.push(__this);
                        if (typeof __func === "string") __func = this[__func] || window[__func];
                        if (__func.apply(__this, args) === false) return false
                    }
                return true
            },
            "__getPropChain": function (prop) {
                var __values = [],
                    __context = this;
                while (__context) {
                        if (__context.hasOwnProperty(prop) && __context[prop]) __values.push(__context[prop]);
                        else __values.push(undefined);
                        __context = __context.__proto__ || Object.getPrototypeOf(__context)
                    }
                __values.reverse();
                return __values
            }
        });
    BIU.Page = BIU.extend({
            "__construct": function (opt) {
                opt = opt || {};
                this.__isReady = false;
                this.__views = [];
                this.__models = [];
                this.__children = [];
                this.name = opt["name"] || null;
                if (!this.name) throw new Error("\u521b\u5efa BIU.Page \u5bf9\u8c61\u65f6\u7f3a\u5c11 name \u53c2\u6570\u3002");
                if (this.name === "__for__proto__") return;
                this.addView(opt["views"] || []);
                this.addModel(opt["models"] || []);
                this.addChild(opt["children"] || []);
                this.on("*", function (e) {
                    e =
                    e || {};
                    var typeArg = e.typeName + ":" + e.unitName;
                    var args = [].slice.call(arguments, 0),
                        list = this.__models.concat(this.__views, this.__children),
                        i, len = list.length,
                        item;
                    args.splice(0, 0, typeArg);
                    for (i = 0; i < len; i++) {
                            item = list[i];
                            item.trigger.apply(item, args)
                        }
                })
            },
            "addModel": function (models) {
                this.__addList(this.__models, models)
            },
            "addView": function (views) {
                this.__addList(this.__views, views)
            },
            "addChild": function (children) {
                this.__addList(this.__children, children)
            },
            "add": function (list) {
                var models = [],
                    views = [],
                    children = [],
                    item, _set;
                if (!Array.isArray(list)) list = [list];
                for (var i = 0, len = list.length; i < len; i++) {
                        item = list[i];
                        _set = null;
                        if (BIU.Model.__instances[item.name] || BIU.Model.__instances[item]) _set = models;
                        else if (BIU.View.__instances[item.name] || BIU.View.__instances[item]) _set = views;
                        else _set = children;
                        _set && _set.push(item)
                    }
                this.__addList(this.__models, models);
                this.__addList(this.__views, views);
                this.__addList(this.__children, children)
            },
            "__addList": function (__set, list) {
                var item;
                if (!Array.isArray(list)) list = [list];
                for (var i =
                0, len = list.length; i < len; i++) {
                    item = list[i];
                    if (typeof item === "string") {
                        item = BIU.Model.__instances[item] || BIU.View.__instances[item];
                        if (!item) throw new Error("\u6ca1\u6709\u627e\u5230\u540d\u4e3a " + item + " \u7684 BIU \u5bf9\u8c61\u3002");
                    }
                    __set.push(item);
                    item.page = this
                }
            },
            "findModel": function (name) {
                return this.find(name, "model")
            },
            "findView": function (name) {
                return this.find(name, "view")
            },
            "findChild": function (name) {
                return this.find(name, "child")
            },
            "find": function (name, type) {
                var list = this.__models.concat(this.__views, this.__children),
                    item;
                switch (type) {
                    case "model":
                        list = this.__models;
                        break;
                    case "view":
                        list = this.__views;
                        break;
                    case "child":
                        list = this.__children;
                        break
                    }
                for (var i = 0, len = list.length; i < len; i++) {
                        item = list[i];
                        if (item.name === name) return item
                    }
                return null
            },
            "load": function (name) {
                var data = this.find(name, "model"),
                    args = Array.prototype.slice.apply(arguments, [1]);
                if (data && typeof data.load === "function") return data.load.apply(data, args);
                return null
            },
            "set": function (name) {
                var child = this.find(name, "model"),
                    args = Array.prototype.slice.apply(arguments, [1]);
                if (child && typeof child.set === "function") return child.set.apply(child, args);
                return null
            },
            "get": function (name) {
                var child = this.find(name, "model");
                if (child && child.get !== undefined) return typeof child.get === "function" ? child.get() : child.get;
                return null
            },
            "pageReady": function (e) {
                if (this.__isReady) throw new Error("\u4e0d\u8981\u591a\u6b21\u89e6\u53d1 BIU.Page(" + this.name + ") \u7684 pageReady \u4e8b\u4ef6\u3002");
                e = e || {};
                var type = "pageReady";
                this.trigger(type, e);
                this.__isReady = true
            }
        });
    BIU.Model = BIU.extend({
            "__construct": function (opt) {
                opt =
                opt || {};
                this.__listen = {};
                this.name = opt["name"] || null;
                if (!this.name) throw new Error("\u521b\u5efa BIU.Model \u5bf9\u8c61\u65f6\u7f3a\u5c11 name \u53c2\u6570\u3002");
                this.load = opt["load"] || this.load || this.__load;
                this.set = opt["set"] || this.set || this.__set;
                this.get = opt["get"] || this.get || this.__get;
                if (this.name === "__for__proto__") return;
                if (BIU.Model.__instances[this.name]) throw new Error("\u540d\u4e3a " + this.name + " \u7684 BIU.Model \u5bf9\u8c61\u5df2\u5b58\u5728\u3002");
                BIU.Model.__instances[this.name] =
                this;
                var listenChain = this.__getPropChain("listen");
                for (var i = 0, listen, len = listenChain.length; i < len; i++) {
                    listen = listenChain[i];
                    listen && this.bindListeners(listen)
                }
                var pageReadyChain = this.__getPropChain("pageReady");
                for (var i = 0, pageReady, len = pageReadyChain.length; i < len; i++) {
                    pageReady = pageReadyChain[i];
                    pageReady && this.on("pageReady", pageReady)
                }
            },
            "bindListeners": function (listen) {
                for (var name in listen) {
                    if (!listen.hasOwnProperty(name)) continue;
                    var func = listen[name];
                    this.__bindListener(name, func)
                }
            },
            "__bindListener": function (name, func) {
                var _this = this;
                if (typeof func === "string") func = _this[func] || window[func];
                this.on("change:" + name, function (e) {
                    func.apply(_this, [e && e.value])
                });
                this.__listen[name] = func
            },
            "__data": null,
            "__load": function () {
                this.__data = null
            },
            "__get": function () {
                return this.__data
            },
            "__set": function (value) {
                var args = Array.prototype.slice.apply(arguments, [0]),
                    argLen = args.length;
                if (argLen > 1) {
                        var data = this.__data,
                            key;
                        while (args.length > 2) {
                                key = args.shift();
                                data = data[key] || (data[key] = {})
                            }
                        key = args[0];
                        value = args[1];
                        data[key] =
                        value
                    } else this.__data = value;
                this.change()
            },
            "change": function () {
                var page = this.page;
                page && page.trigger("change:" + this.name, {
                    value: this.get()
                })
            }
        });
    BIU.Model.__instances = {};
    BIU.View = BIU.extend({
            "__construct": function (opt) {
                opt = opt || {};
                this.__listen = {};
                this.__events = {};
                this.name = opt["name"] || null;
                if (!this.name) throw new Error("\u521b\u5efa BIU.View \u5bf9\u8c61\u65f6\u7f3a\u5c11 name \u53c2\u6570\u3002");
                if (this.name === "__for__proto__") return;
                if (BIU.View.__instances[this.name]) throw new Error("\u540d\u4e3a " + this.name + " \u7684 BIU.View \u5bf9\u8c61\u5df2\u5b58\u5728\u3002");
                BIU.View.__instances[this.name] = this;
                var eventsChain = this.__getPropChain("events");
                for (var i = 0, events, len = eventsChain.length; i < len; i++) {
                    events = eventsChain[i];
                    events && this.bindEvents(events)
                }
                var listenChain = this.__getPropChain("listen");
                for (var i = 0, listen, len = listenChain.length; i < len; i++) {
                    listen = listenChain[i];
                    listen && this.bindListeners(listen)
                }
                var pageReadyChain = this.__getPropChain("pageReady");
                for (var i = 0, pageReady, len = pageReadyChain.length; i < len; i++) {
                    pageReady = pageReadyChain[i];
                    pageReady && this.on("pageReady", pageReady)
                }
            },
            "bindEvents": function (events) {
                for (var key in events) {
                    if (!events.hasOwnProperty(key)) continue;
                    var listener = events[key] || null;
                    this.bindEvent(key, listener)
                }
            },
            "bindEvent": function (key, listener) {
                var t = key.split(" "),
                    type = t.shift(),
                    sl = t.join(" ");
                var elem = this.__id(sl) || this.__sl(sl);
                if (!elem || elem.length === 0) throw new Error("\u627e\u4e0d\u5230 BIU.View(" + this.name + ") \u4e2d\u7684\u5143\u7d20\uff1a" + sl + "\u3002");
                this.__bindEvent(elem, type, listener);
                this.__events[key] = listener
            },
            "__bindEvent": function (elem, type, listener) {
                if (!elem.length) elem = [elem];
                if (typeof listener === "string") listener = this[listener] || window[listener];
                for (var i = 0, len = elem.length; i < len; i++) {
                    var _elem = elem[i],
                        _listener = listener.bind ? listener.bind(this) : function (context, func) {
                            return function () {
                                func.apply(context, arguments)
                            }
                        }(this, listener);
                    _elem && _elem.addEventListener && _elem.addEventListener(type, _listener, false)
                }
            },
            "bindListeners": function (listen) {
                for (var name in listen) {
                    if (!listen.hasOwnProperty(name)) continue;
                    var func = listen[name];
                    this.__bindListener(name, func)
                }
            },
            "__bindListener": function (name, func) {
                var _this = this;
                if (typeof func === "string") func = _this[func] || window[func];
                this.on("change:" + name, function (e) {
                    func.apply(_this, [e && e.value])
                });
                this.__listen[name] = func
            },
            "__id": function (id) {
                return document.getElementById(id)
            },
            "__sl": function (sl) {
                return document.querySelectorAll && document.querySelectorAll(sl)
            }
        });
    BIU.View.__instances = {};
    window.BIU = BIU
})();
(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND",
                f;
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s
})({
    1: [function (require, module, exports) {
        var dialogTypes = require("./_dialog-types.js"),
            dialogPrototypes = require("./_dialog-prototypes.js");
        module.exports = DialogButton;

        function DialogButton(opt) {
                var self = this;
                if (!self instanceof DialogButton) return new DialogButton(opt);
                var text = opt.text || "",
                    style = opt.style || {},
                    className = opt.className || "dialog-btn";
                self.opt = opt;
                self.text = opt.text;
                self.click = opt.click;
                self.dom = document.createElement("A");
                self.dom.className = className;
                self.dom.innerHTML = text;
                self.dom.addEventListener("click", function (e) {
                        if (!self.dom.hasAttribute("disabled")) self.click(e)
                    });
                self.setStyle(style)
            }
        dialogTypes.register("BUTTON", DialogButton, [dialogPrototypes.ENTITY, dialogPrototypes.IN_CONTAINER], function parser(thing) {
                if (thing instanceof Object && typeof thing.text === "string" && typeof thing.click === "function") return new DialogButton(thing);
                else return null
            }, function comparator(instance, thing) {
                return instance === thing || instance.opt === thing || instance.text === thing.text && instance.click === thing.click
            })
    },
    {
        "./_dialog-prototypes.js": 5,
        "./_dialog-types.js": 7
    }],
    2: [function (require, module, exports) {
        var dialogTypes = require("./_dialog-types.js"),
            dialogPrototypes = require("./_dialog-prototypes.js");
        module.exports = DialogChild;

        function DialogChild(opt) {
                var self = this;
                if (!self instanceof DialogChild) return new DialogChild(opt);
                self.dom = opt.dom
            }
        dialogTypes.register("CHILD", DialogChild, [dialogPrototypes.ENTITY, dialogPrototypes.IN_CONTAINER], function parser(thing) {
                if (thing instanceof HTMLElement) return new DialogChild({
                    dom: thing
                });
                else return null
            }, function comparator(instance, thing) {
                return instance === thing || instance.opt === thing || instance.dom === thing
            })
    },
    {
        "./_dialog-prototypes.js": 5,
        "./_dialog-types.js": 7
    }],
    3: [function (require, module, exports) {
        var dialogTypes = require("./_dialog-types.js"),
            dialogPrototypes = require("./_dialog-prototypes.js");
        module.exports = DialogPara;

        function DialogPara(opt) {
                var self = this;
                if (!self instanceof DialogPara) return new DialogPara(opt);
                var text = opt.text || "",
                    style = opt.style || {},
                    className = opt.className || "dialog-para";
                self.text = opt.text;
                self.dom = document.createElement("P");
                self.dom.className = className;
                self.dom.innerHTML = text;
                self.setStyle(style)
            }
        dialogTypes.register("PARA", DialogPara, [dialogPrototypes.ENTITY, dialogPrototypes.IN_CONTAINER], function parser(thing) {
                if (typeof thing === "string") return new DialogPara({
                    text: thing
                });
                else return null
            }, function comparator(instance, thing) {
                return instance === thing || instance.opt === thing || instance.text === thing
            })
    },
    {
        "./_dialog-prototypes.js": 5,
        "./_dialog-types.js": 7
    }],
    4: [function (require, module, exports) {
        module.exports = DialogPromise;

        function DialogPromise() {
            var self =
            this;
            self.callbacks = []
        }
        DialogPromise.prototype = {
            "construct": DialogPromise,
            "resolve": function (result) {
                this.complete("resolve", result)
            },
            "reject": function (result) {
                this.complete("reject", result)
            },
            "complete": function (type, result) {
                while (this.callbacks[0]) {
                    var callback = this.callbacks.shift()[type];
                    typeof callback === "function" && callback(result)
                }
            },
            "then": function (successHandler, failedHandler) {
                this.callbacks.push({
                    resolve: successHandler,
                    reject: failedHandler
                });
                return this
            }
        }
    },
    {}],
    5: [function (require, module, exports) {
        var dialogUtils =
        require("./_dialog-utils.js"),
            dialogTypes = require("./_dialog-types.js");
        module.exports = {
                ENTITY: {
                    "setAttr": function (attr, value) {
                        var self = this;
                        self.dom.setAttribute(attr, value)
                    },
                    "removeAttr": function (attr) {
                        var self = this;
                        self.dom.removeAttribute(attr)
                    },
                    "setText": function (text) {
                        var self = this;
                        self.dom.innerHTML = text
                    },
                    "setStyle": function (style) {
                        var self = this,
                            dom = self.dom;
                        for (var name in style) {
                                if (!style.hasOwnProperty(name)) continue;
                                dom.style[name] = style[name]
                            }
                    },
                    "show": function () {
                        var self = this;
                        self.dom.style.display = "block"
                    },
                    "hide": function () {
                        var self = this;
                        self.dom.style.display = "none"
                    }
                },
                CONTAINER: {
                    "prepend": function (thing, _index) {
                        var self = this,
                            child = dialogTypes.tryParse(thing);
                        if (!child) {
                                var err = new Error("\u65e0\u6cd5\u8f6c\u6362\u4e3a\u5bf9\u8bdd\u6846\u76f8\u5173\u7c7b\uff1a");
                                err.target = thing;
                                throw err;
                            }
                        self._prepend(child, _index)
                    },
                    "append": function (thing) {
                        var self = this,
                            child = dialogTypes.tryParse(thing);
                        if (!child) {
                                var err = new Error("\u65e0\u6cd5\u8f6c\u6362\u4e3a\u5bf9\u8bdd\u6846\u76f8\u5173\u7c7b\uff1a");
                                err.target = thing;
                                throw err;
                            }
                        self._append(child)
                    },
                    "_prepend": function (child, _index) {
                        var self = this,
                            index = _index | 0,
                            children = self.children;
                        if (child._parent) child._parent.remove(child);
                        child._parent = self;
                        children.splice(index, 0, child);
                        var nextNode = dialogUtils.getChildElem(self.dom, index);
                        if (nextNode) self.dom.insertBefore(child.dom, nextNode);
                        else self.dom.appendChild(child.dom)
                    },
                    "_append": function (child) {
                        var self = this,
                            children = self.children;
                        if (child._parent) child._parent.remove(child);
                        child._parent = self;
                        children.push(child);
                        self.dom.appendChild(child.dom)
                    },
                    "find": function (thing) {
                        var self = this,
                            children = self.children,
                            child = null;
                        if (thing.dialogType && children.indexOf(thing) >= 0) child = thing;
                        else if (typeof thing === "number") {
                                if (thing < 0) thing = children.length + thing;
                                child = children[thing]
                            } else children.forEach(function (_child) {
                                if (dialogTypes.compare(_child, thing)) child = _child
                            });
                        return child
                    },
                    "remove": function (thing) {
                        var self = this,
                            child = self.find(thing);
                        if (!child) return;
                        this._remove(child)
                    },
                    "_remove": function (child) {
                        var self =
                        this,
                            children = self.children;
                        delete child._parent;
                        children.splice(children.indexOf(child), 1);
                        self.dom.removeChild(child.dom)
                    },
                    "clear": function () {
                        var self = this,
                            children = self.children,
                            len = children.length;
                        for (var i = 0, child; i < len && (child = children[i]); i++) delete child._parent;
                        self.children = [];
                        self.dom.innerHTML = ""
                    },
                    "setContent": function (content) {
                        var self = this,
                            arr = content.length === undefined ? [content] : content;
                        self.clear();
                        for (var i = 0, len = arr.length; i < len; i++) self.append(content[i])
                    }
                },
                IN_CONTAINER: {
                    "prev": function () {
                        var self =
                        this,
                            parent = self && self._parent,
                            children = parent && parent.children,
                            pos = children && children.indexOf(self);
                        return pos >= 0 && parent && parent.find && parent.find(pos - 1)
                    },
                    "next": function () {
                        var self = this,
                            parent = self && self._parent,
                            children = parent && parent.children,
                            pos = children && children.indexOf(self);
                        return pos >= 0 && parent && parent.find && parent.find(pos + 1)
                    },
                    "parent": function () {
                        var self = this;
                        return self._parent
                    },
                    "dialog": function () {
                        var self = this;
                        while (self && !(self instanceof PileDialog)) self = self._parent;
                        return self
                    }
                }
            }
    },
    {
        "./_dialog-types.js": 7,
        "./_dialog-utils.js": 8
    }],
    6: [function (require, module, exports) {
        var dialogTypes = require("./_dialog-types.js"),
            dialogPrototypes = require("./_dialog-prototypes.js");
        module.exports = DialogRow;

        function DialogRow(opt) {
                var self = this;
                if (!self instanceof DialogRow) return new DialogRow(opt);
                self.children = [];
                var content = opt.content || "",
                    style = opt.style || {},
                    className = opt.className || "dialog-row";
                self.opt = opt;
                self.dom = document.createElement("DIV");
                self.dom.className = className;
                content && self.setContent(content);
                self.setStyle(style)
            }
        dialogTypes.register("ROW", DialogRow, [dialogPrototypes.ENTITY, dialogPrototypes.CONTAINER, dialogPrototypes.IN_CONTAINER])
    },
    {
        "./_dialog-prototypes.js": 5,
        "./_dialog-types.js": 7
    }],
    7: [function (require, module, exports) {
        var dialogUtils = require("./_dialog-utils.js");
        var types = {},
            parsers = {},
            comparators = {};
        module.exports = {
                register: function (name, constructor, prototypes, parser, comparator) {
                    types[name] = constructor;
                    parsers[name] = parser || null;
                    comparators[name] = comparator || null;
                    prototypes = prototypes || [];
                    prototypes.splice(0, 0, {
                        dialogType: name
                    });
                    constructor.prototype = dialogUtils.extend.apply(dialogUtils, prototypes)
                },
                getType: function (name) {
                    return types[name]
                },
                tryParse: function (thing) {
                    var typeObject;
                    if (thing.dialogType) return thing;
                    for (var name in types) {
                        if (!types.hasOwnProperty(name)) continue;
                        var parser = parsers[name];
                        typeObject = parser && parser(thing);
                        if (typeObject) break
                    }
                    return typeObject || null
                },
                compare: function (instance, thing) {
                    var name = instance.dialogType,
                        comparator = comparators[name];
                    return comparator && comparator(instance, thing)
                }
            }
    },
    {
        "./_dialog-utils.js": 8
    }],
    8: [function (require, module, exports) {
        var dialogUtils = {
            NODE_TYPES: {
                ELEMENT_NODE: 1,
                ATTRIBUTE_NODE: 2,
                TEXT_NODE: 3,
                CDATA_SECTION_NODE: 4,
                ENTITY_REFERENCE_NODE: 5,
                ENTITY_NODE: 6,
                PROCESSING_INSTRUCTION_NODE: 7,
                COMMENT_NODE: 8,
                DOCUMENT_NODE: 9,
                DOCUMENT_TYPE_NODE: 10,
                DOCUMENT_FRAGMENT_NODE: 11,
                NOTATION_NODE: 12
            },
            extend: function (extPrototype, basePrototype) {
                var undefined = void 0,
                    basePrototypes = Array.prototype.slice.call(arguments, 1);
                while (basePrototype = basePrototypes.shift()) for (var p in basePrototype) if (basePrototype.hasOwnProperty(p) && extPrototype[p] === undefined) extPrototype[p] = basePrototype[p];
                return extPrototype
            },
            isArray: function (tar) {
                return Object.prototype.toString.call(tar) === "[object Array]"
            },
            getChildElem: function (dom, index) {
                var childNodes = dom.childNodes,
                    TYPES = this.NODE_TYPES,
                    _pos = 0,
                    _index = 0,
                    node;
                while (node = childNodes[_pos++]) if (node.nodeType === TYPES.ELEMENT_NODE) {
                        if (index !== _index) {
                            _index++;
                            continue
                        }
                        break
                    }
                return node
            },
            getPrevElem: function (dom) {
                do dom = dom.previousSibling;
                while (dom && dom.nodeType !== 1);
                return dom
            },
            getNextElem: function (dom) {
                do dom =
                dom.nextSibling;
                while (dom && dom.nodeType !== 1);
                return dom
            }
        };
        module.exports = dialogUtils
    },
    {}],
    9: [function (require, module, exports) {
        var dialogUtils = require("./_dialog-utils.js"),
            dialogTypes = require("./_dialog-types.js"),
            dialogPrototypes = require("./_dialog-prototypes.js"),
            WRAP_CLASS_NAME = "dialog-wrap",
            TRANSITION_TIME = 300,
            TEMPLATE_TEXT = null;
        module.exports = Dialog;

        function Dialog(opt) {
                var self = this;
                if (!self instanceof Dialog) return new Dialog(opt);
                var prop = opt.prop || {
                    skin: "default",
                    cover: true,
                    closeBtn: true,
                    lock: false
                },
                    title = opt.title || "",
                    content = opt.content || "",
                    onOpen = opt["onOpen"],
                    onClose = opt["onClose"];
                self.children = [];
                self.prop = {};
                self.doms = {};
                self.callbacks = {};
                var wrap = self.doms.wrap = document.createElement("DIV");
                wrap.className = WRAP_CLASS_NAME;
                wrap.innerHTML = TEMPLATE_TEXT;
                self.doms.cover = wrap.getElementsByClassName("dialog-cover")[0];
                self.doms.box = wrap.getElementsByClassName("dialog-box")[0];
                self.doms.title = wrap.getElementsByClassName("dialog-title")[0];
                self.doms.closeBtn = wrap.getElementsByClassName("dialog-close-btn")[0];
                self.doms.content = wrap.getElementsByClassName("dialog-content")[0];
                self.doms.wrap.addEventListener("touchmove", function (e) {
                        e.preventDefault()
                    });
                self.doms.cover.addEventListener("click", function (e) {
                        if (!self.isLocked) self.close(e)
                    });
                self.doms.closeBtn.addEventListener("click", function (e) {
                        self.close(e)
                    });
                self.dom = self.doms.content;
                document.body.appendChild(wrap);
                self.setProp("skin", String(prop.skin || "default"));
                self.setProp("cover", !! prop.cover);
                self.setProp("closeBtn", !! prop.closeBtn);
                self.setProp("lock", !! prop.lock);
                self.setTitle(title);
                self.setContent(content);
                onOpen && self.on("open", onOpen);
                onClose && self.on("close", onClose)
            }
        Dialog.topZIndex = 1E6;
        Dialog.setOptions = function (options) {
                options["TRANSITION_TIME"] && (TRANSITION_TIME = options["TRANSITION_TIME"]);
                options["WRAP_CLASS_NAME"] && (WRAP_CLASS_NAME = options["WRAP_CLASS_NAME"]);
                options["TEMPLATE_TEXT"] && (TEMPLATE_TEXT = options["TEMPLATE_TEXT"])
            };
        dialogTypes.register("DIALOG", Dialog, [{
                "setTitle": function (title) {
                    this.title = title;
                    this.doms.title.innerHTML =
                    title
                },
                "showTitle": function () {
                    this.doms.title.style.display = "block"
                },
                "hideTitle": function () {
                    this.doms.title.style.display = "none"
                },
                "setProp": function (name, value) {
                    var self = this,
                        prop = self.prop;
                    prop[name] = value;
                    switch (name) {
                        case "skin":
                            var oldSkin = self._skin;
                            if (oldSkin) self.doms.wrap.classList.remove(oldSkin);
                            self.doms.wrap.classList.add(value);
                            self._skin = value;
                            break;
                        case "cover":
                            self.doms.cover.style.display = value ? "block" : "none";
                            break;
                        case "closeBtn":
                            self.doms.closeBtn.style.display = value ? "block" : "none";
                            break;
                        case "lock":
                            self.isLocked = value;
                            break
                        }
                },
                "open": function (e) {
                    var self = this;
                    if (self.trigger("open", e) === false) return;
                    self._waitingTimeout && window.clearTimeout(self._waitingTimeout);
                    self._waitingTimeout = window.setTimeout(function () {
                        self._waitingTimeout = null
                    }, TRANSITION_TIME);
                    var z = Dialog.topZIndex += 10;
                    self.doms.wrap.style.zIndex = z;
                    self.doms.cover.style.zIndex = z + 1;
                    self.doms.box.style.zIndex = z + 2;
                    self.doms.wrap.classList.add("open");
                    self.doms.wrap.offsetWidth = self.doms.wrap.offsetWidth | 0;
                    self.doms.cover.classList.add("show");
                    self.doms.box.classList.add("show")
                },
                "close": function (e) {
                    var self = this;
                    if (self.trigger("close", e) === false) return;
                    self._waitingTimeout && window.clearTimeout(self._waitingTimeout);
                    self._waitingTimeout = window.setTimeout(function () {
                        self.doms.wrap.classList.remove("open");
                        self.doms.wrap.offsetWidth = self.doms.wrap.offsetWidth | 0;
                        self._waitingTimeout = null
                    }, TRANSITION_TIME);
                    self.doms.cover.classList.remove("show");
                    self.doms.box.classList.remove("show")
                },
                "on": function (type, callback) {
                    var self = this,
                        typeCallbacks =
                    self.callbacks[type];
                    if (!dialogUtils.isArray(typeCallbacks)) self.callbacks[type] = typeCallbacks = [];
                    typeCallbacks.push(callback)
                },
                "trigger": function (type) {
                    var self = this,
                        typeCallbacks = self.callbacks[type] || [],
                        args = Array.prototype.splice.apply(arguments, [1]);
                    for (var i = 0, callback; callback = typeCallbacks[i]; i++) {
                            var res = callback.apply(this, args);
                            if (res === false) return res
                        }
                }
            },
            dialogPrototypes.ENTITY, dialogPrototypes.CONTAINER])
    },
    {
        "./_dialog-prototypes.js": 5,
        "./_dialog-types.js": 7,
        "./_dialog-utils.js": 8
    }],
    10: [function (require, module, exports) {
        var _loaded = false,
            _cbs = [];
        var DOMLoadState = module.exports = {
                isLoaded: function () {
                    return _loaded
                },
                whenLoad: function (cb) {
                    _cbs.push(cb)
                },
                _bindEvent: function () {
                    var self = this,
                        onLoad = function () {
                            self._onLoad()
                        };
                    if (document.addEventListener) document.addEventListener("DOMContentLoaded", onLoad);
                    else if (window.addEventListener) window.addEventListener("load", onLoad);
                    else if (window.attachEvent) window.attachEvent("onload", onLoad)
                },
                _onLoad: function () {
                    _loaded = true;
                    _cbs.forEach(function (cb) {
                        cb && cb()
                    })
                }
            };
        DOMLoadState._bindEvent()
    },
    {}],
    11: [function (require, module, exports) {
        var dialogUtils = require("./_dialog-utils.js"),
            Promise = require("./_dialog-promise.js"),
            Dialog = require("./_dialog.js"),
            DialogChild = require("./_dialog-child.js"),
            DialogPara = require("./_dialog-para.js"),
            DialogButton = require("./_dialog-button.js"),
            DialogRow = require("./_dialog-row.js"),
            DOMLoadState = require("./_dom-load-state.js");
        var initializer = module.exports = {
                _initialized: false,
                _creators: [],
                init: function (opts) {
                    var self = this,
                        initialized = self._initialized,
                        transitionTime = opts["transitionTime"] || 300,
                        dialogWrapClassName = opts["dialogWrapClassName"] || "pile-dialog-wrap",
                        templateText = opts["templateText"] || "",
                        styleText = opts["styleText"] || "";
                    if (initialized) return;
                    Dialog.setOptions({
                            TRANSITION_TIME: transitionTime,
                            WRAP_CLASS_NAME: dialogWrapClassName,
                            TEMPLATE_TEXT: templateText
                        });
                    styleText && self._createStyle(styleText);
                    if (DOMLoadState.isLoaded()) self._doCreate();
                    else DOMLoadState.whenLoad(function () {
                            self._doCreate()
                        })
                },
                _createStyle: function (styleText) {
                    var style =
                    document.createElement("STYLE");
                    style.innerHTML = styleText;
                    document.body.appendChild(style)
                },
                expose: function () {
                    window.PileDialog = Dialog;
                    window.PileDialogChild = DialogChild;
                    window.PileDialogPara = DialogPara;
                    window.PileDialogButton = DialogButton;
                    window.PileDialogRow = DialogRow;
                    return Dialog
                },
                _doCreate: function () {
                    var creators = this._creators;
                    creators.forEach(function (creator) {
                        creator()
                    })
                },
                lazyCreate: function (dialogName, funcName, creator) {
                    if (Dialog[dialogName]) {
                        console.error("PileDialog.%s \u5df2\u5b58\u5728\u3002\n(PileDialog.%s already exists.)", dialogName, dialogName);
                        return
                    }
                    if (Dialog[funcName]) {
                        console.error("PileDialog.%s \u5df2\u5b58\u5728\u3002\n(PileDialog.%s already exists.)", funcName, funcName);
                        return
                    }
                    Dialog[funcName] = function () {
                        var args = arguments;
                        window.setTimeout(function () {
                            Dialog[funcName].apply(Dialog[dialogName], args)
                        }, 50)
                    };
                    this._creators.push(creator)
                }
            };
        initializer.lazyCreate("toastDialog", "toast", function () {
                Dialog.toastDialog = new Dialog({
                    prop: {
                        skin: "toast",
                        cover: false,
                        closeBtn: false,
                        lock: false
                    },
                    content: [""]
                });
                Dialog.toastDialog.hideTitle();
                Dialog.toast = function (msg, time, callback) {
                    var dialog = Dialog.toastDialog;
                    dialog.find(0).setText(msg);
                    dialog.open();
                    if (dialog._closeTimeout) window.clearTimeout(dialog._closeTimeout);
                    if (arguments.length === 2 && typeof time === "function") {
                        callback = time;
                        time = undefined
                    }
                    time = time === undefined ? 2500 : time;
                    if (time) dialog._closeTimeout = window.setTimeout(function () {
                        dialog.close();
                        dialog._closeTimeout = null;
                        callback && callback()
                    }, time)
                }
            });
        initializer.lazyCreate("alertDialog", "alert", function () {
                Dialog.alertDialog = new Dialog({
                    prop: {
                        skin: "default",
                        cover: true,
                        closeBtn: true,
                        lock: false
                    },
                    content: [{
                        text: "\u786e\u5b9a",
                        click: function () {
                            var dialog = this.dialog();
                            dialog._resolved = true;
                            dialog.close()
                        }
                    }]
                });
                Dialog.alertDialog.on("close", function (e) {
                    var dialog = this,
                        promise = dialog._promise,
                        resolved = dialog._resolved;
                    promise && (resolved ? promise.resolve(e) : promise.reject(e))
                });
                Dialog.alert = function (contents, title, btnText) {
                    var dialog = Dialog.alertDialog,
                        btnOk = dialog.find(-1),
                        promise = new Promise;
                    if (!dialogUtils.isArray(contents)) contents = [contents];
                    dialog.remove(btnOk);
                    dialog.clear();
                    contents.forEach(function (content) {
                            dialog.append(content)
                        });
                    dialog.append(btnOk);
                    dialog.setTitle(title || "\u63d0\u793a");
                    btnOk.setText(btnText || "\u786e\u5b9a");
                    dialog._promise = promise;
                    dialog._resolved = false;
                    dialog.open();
                    return promise
                }
            });
        initializer.lazyCreate("confirmDialog", "confirm", function () {
                Dialog.confirmDialog = new Dialog({
                    prop: {
                        skin: "default",
                        cover: true,
                        closeBtn: true,
                        lock: true
                    },
                    content: [new PileDialogRow({
                        content: [{
                            text: "\u53d6\u6d88",
                            style: {
                                flex: 1
                            },
                            click: function () {
                                var dialog =
                                this.dialog();
                                dialog._resolved = false;
                                dialog.close()
                            }
                        },
                        {
                            text: "\u786e\u5b9a",
                            style: {
                                flex: 1,
                                marginLeft: 0
                            },
                            click: function () {
                                var dialog = this.dialog();
                                dialog._resolved = true;
                                dialog.close()
                            }
                        }]
                    })]
                });
                Dialog.confirmDialog.on("close", function (e) {
                    var dialog = this,
                        promise = dialog._promise,
                        resolved = dialog._resolved;
                    promise && (resolved ? promise.resolve(e) : promise.reject(e))
                });
                Dialog.confirm = function (contents, title, btnTextCancel, btnTextConfirm) {
                    var dialog = Dialog.confirmDialog,
                        btnRow = dialog.find(-1),
                        promise = new Promise,
                        btnText = {
                            cancel: btnTextCancel || "\u53d6\u6d88",
                            confirm: btnTextConfirm || "\u786e\u5b9a"
                        };
                    if (!dialogUtils.isArray(contents)) contents = [contents];
                    dialog.remove(btnRow);
                    dialog.clear();
                    contents.forEach(function (content) {
                            dialog.append(content)
                        });
                    dialog.append(btnRow);
                    dialog.setTitle(title || "\u63d0\u793a");
                    btnRow.find(0).setText(btnText.cancel);
                    btnRow.find(1).setText(btnText.confirm);
                    dialog._promise = promise;
                    dialog._resolved = false;
                    dialog.open();
                    return promise
                }
            })
    },
    {
        "./_dialog-button.js": 1,
        "./_dialog-child.js": 2,
        "./_dialog-para.js": 3,
        "./_dialog-promise.js": 4,
        "./_dialog-row.js": 6,
        "./_dialog-utils.js": 8,
        "./_dialog.js": 9,
        "./_dom-load-state.js": 10
    }],
    12: [function (require, module, exports) {
        (function () {
            var templateText = '<div class="dialog-cover"></div>\r\n<div class="dialog-box">\r\n    <p class="dialog-title"></p>\r\n    <a class="dialog-close-btn"></a>\r\n\r\n    <div class="dialog-content"></div>\r\n</div>\r\n',
                styleText = '@charset "UTF-8";html{font-size:20px}html{font-size:10px}@media screen and (min-width:320px){html{font-size:17px}}@media screen and (min-width:360px){html{font-size:19.2px}}@media screen and (min-width:375px){html{font-size:20px}}@media screen and (min-width:414px){html{font-size:22px}}body{font-size:14px}\n/*! Pile Dialog Styles */\n.pile-dialog-wrap{-webkit-tap-highlight-color:transparent}.pile-dialog-wrap.default .dialog-box{border-radius:.2rem;background-color:#fff;-webkit-box-shadow:0 0 .375rem rgba(0,0,0,.3);box-shadow:0 0 .375rem rgba(0,0,0,.3);margin:0 .4rem;min-width:40%}.pile-dialog-wrap.default .dialog-box .dialog-title{height:2.75rem;line-height:2.75rem;margin:0;padding-left:1.05rem;padding-right:1.05rem;border-radius:.2rem .2rem 0 0;border-bottom:1px solid #dadada;background-color:#fff;color:#333;font-size:.75rem}.pile-dialog-wrap.default .dialog-box .dialog-close-btn{width:1.9rem;height:1.9rem;padding:.375rem .425rem .475rem .425rem}.pile-dialog-wrap.default .dialog-box .dialog-close-btn::after{content:"";display:block;width:1.9rem;height:1.9rem;border-radius:.1rem;background:url("data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAA51BMVEUAAABRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVHw6GZRUVHu5mbo4GXj3GTf2GRtbFVhYVPs5GXJw2FmZVReXVPb1GPX0GOMiVmIhVh4dlZqaVRxb1Xl3mXUzWLRy2K8tl+no1yPjFmFglh/fFd0clZaWlJXV1JSUlGgnFyZllrOx2HCvWC9t1+qpl2VklqRjlmBf1dDolf5AAAAJXRSTlMAKcMmvKscFu7Vt7Kvh08hEAJvDAf69enizMelnUEaYNypejYx4/ITWwAAAgdJREFUSMft1NlS8kAQBeBJlEhYJYAKKK45ypKIBFwAF8Bd3/95/plM/1pWOgbLC284F1SK4atMNXVaLLPM71PIm3mLP7LkUSHObUMmbXBHRhoy27wrYj7xB6gajKti4E/mKLJwF4HrHl9jw4i4DVwfu26A3Rj45koZIL0SuWcgnfsGh4UGZiMlB9j8Ilc2MVBuNIMRN5zelZI32AoluS3cKHfVU8Phk0KvL3/i3WKv+DGyPdx68st+DykWkeyeaWkXydnanXXJ8SnltDwZwrbC/93G8ES7XEl8k0oWp20ta5Z0Ne3ap8hWxLcpZ0jeod5s1nFHLlMWCVlfxXlLyQuYJi6Ua51jdT2BadlRstXB/wfGcVmTL7oMXxS++rIDcy3JkKzrK7bb+sr1BZ0aph6KHlLN+kGjMR9rOJ6j8BOHF5fygsXlDjBRxvfV5wTYWdjdh242C+X9gvKQ3OMUmD6qpwfgMNkdAQ+uzGiKRgPTEcmjJGdU8Uq1bQjRoGq/MiuMWUu6tvtCZl9Vm11h/Frqh7WlaocyiCxcZi1RbT+rzawwmchaotp+rTatMDYlG+9etLYVqrb3DrvEwjyGHtVWO0pZVjuUQ+RZaML/rC1XbR8mC3N4ptoy1e7Iaj8jx0IH3fGTdpx8GnfhCDZZyJhN7qhpQiYrYuKkMgdxZweZlCOWWebv8g9gBmPlYiejIwAAAABJRU5ErkJggg==") no-repeat center center;background-size:1.4rem 1.4rem}.pile-dialog-wrap.default .dialog-box .dialog-close-btn:active::after{background-color:#dcdcd6}.pile-dialog-wrap.default .dialog-box .dialog-content{padding-bottom:1.25rem;border-radius:.2rem .2rem 0 0;background-color:#fff;color:#333;font-size:.7rem}.pile-dialog-wrap.default .dialog-box .dialog-content .weak{color:#868686}.pile-dialog-wrap.default .dialog-box .dialog-content .small{font-size:.6rem}.pile-dialog-wrap.default .dialog-box .dialog-content .del{text-decoration:line-through}.pile-dialog-wrap.default .dialog-box .dialog-content .em{font-style:normal;text-shadow:0 0 4px #fcf988}.pile-dialog-wrap.default .dialog-box .dialog-content .link{display:inline-block;padding:.1rem 0;color:#e65d52;border-bottom:1px solid #e65d52}.pile-dialog-wrap.default .dialog-box .dialog-para{margin:1.25rem 1.05rem 0 1.05rem;padding:0}.pile-dialog-wrap.default .dialog-box .dialog-btn{margin:1.25rem 1.05rem 0 1.05rem;padding:0 .5rem;height:2rem;line-height:2rem;border-radius:.15rem;border:2px solid #767676;background-color:#fdf986;color:#545253;font-size:.75rem;text-align:center}.pile-dialog-wrap.default .dialog-box .dialog-btn:active,.pile-dialog-wrap.default .dialog-box .dialog-btn.active{background-color:#827e02}.pile-dialog-wrap.default .dialog-box .dialog-btn[disabled],.pile-dialog-wrap.default .dialog-box .dialog-btn.disabled{background-color:#c5c5c5}.pile-dialog-wrap.light-salmon .dialog-box{border-radius:.2rem;background-color:#fff;-webkit-box-shadow:0 0 .375rem rgba(0,0,0,.3);box-shadow:0 0 .375rem rgba(0,0,0,.3);margin:0 .4rem;min-width:40%}.pile-dialog-wrap.light-salmon .dialog-box .dialog-title{height:2.75rem;line-height:2.75rem;margin:0;padding-left:1.05rem;padding-right:1.05rem;border-radius:.2rem .2rem 0 0;border-bottom:1px solid #dadada;background-color:#fff;color:#333;font-size:.75rem}.pile-dialog-wrap.light-salmon .dialog-box .dialog-close-btn{width:1.9rem;height:1.9rem;padding:.375rem .425rem .475rem .425rem}.pile-dialog-wrap.light-salmon .dialog-box .dialog-close-btn::after{content:"";display:block;width:1.9rem;height:1.9rem;border-radius:.1rem;background:url("data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAADgAAAA4BAMAAABaqCYtAAAAElBMVEUAAAD/mmr/mmr/mmr/mmr/mmpfN+OxAAAABXRSTlMAnM2GSc5Tm0cAAACTSURBVDjL7dTNDYAgDIZh/wbw4t3EBYwTuAKH7r+KBw1tfRO+BeiJFh6jSBl6fLEc/8p11+Fka54bba/j2Uqe3OyMyZphQYa1nmIpc0IvEHoF0EuEoA5JHYI6JE2Q1CFpgKQBkgZISshJ/Vj9QvwUvQl6+/TG85cRgspjwgNGSCoPNdtBNJJowUbzirZvXBg93ngA5lQopdA864gAAAAASUVORK5CYII=") no-repeat center center;background-size:1.4rem 1.4rem}.pile-dialog-wrap.light-salmon .dialog-box .dialog-close-btn:active::after{background-color:#dcdcd6}.pile-dialog-wrap.light-salmon .dialog-box .dialog-content{padding-bottom:1.25rem;border-radius:.2rem .2rem 0 0;background-color:#fff;color:#333;font-size:.7rem}.pile-dialog-wrap.light-salmon .dialog-box .dialog-content .weak{color:#868686}.pile-dialog-wrap.light-salmon .dialog-box .dialog-content .small{font-size:.6rem}.pile-dialog-wrap.light-salmon .dialog-box .dialog-content .del{text-decoration:line-through}.pile-dialog-wrap.light-salmon .dialog-box .dialog-content .em{font-style:normal;text-shadow:0 0 4px #ff7737}.pile-dialog-wrap.light-salmon .dialog-box .dialog-content .link{display:inline-block;padding:.1rem 0;color:#eb6056;border-bottom:1px solid #eb6056}.pile-dialog-wrap.light-salmon .dialog-box .dialog-para{margin:1.25rem 1.05rem 0 1.05rem;padding:0}.pile-dialog-wrap.light-salmon .dialog-box .dialog-btn{margin:1.25rem 1.05rem 0 1.05rem;padding:0 .5rem;height:2.15rem;line-height:2.15rem;border-radius:.15rem;background-color:#ff9a6a;color:#fff;font-size:.75rem;text-align:center}.pile-dialog-wrap.light-salmon .dialog-box .dialog-btn:active,.pile-dialog-wrap.light-salmon .dialog-box .dialog-btn.active{background-color:#ff7737}.pile-dialog-wrap.light-salmon .dialog-box .dialog-btn[disabled],.pile-dialog-wrap.light-salmon .dialog-box .dialog-btn.disabled{background-color:#c5c5c5}.pile-dialog-wrap.flat{top:auto;bottom:0;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;-ms-grid-row-align:flex-end;align-items:flex-end}.pile-dialog-wrap.flat .dialog-box{background-color:#fff;width:100%}.pile-dialog-wrap.flat .dialog-box .dialog-title{height:2.5rem;line-height:2.5rem;color:#333;text-align:center;font-size:.8rem}.pile-dialog-wrap.flat .dialog-box .dialog-close-btn{display:none}.pile-dialog-wrap.flat .dialog-box .dialog-content{color:#535252;font-size:.7rem}.pile-dialog-wrap.flat .dialog-box .dialog-content .weak{color:#969696}.pile-dialog-wrap.flat .dialog-box .dialog-content .small{font-size:.6rem}.pile-dialog-wrap.flat .dialog-box .dialog-content .del{text-decoration:line-through}.pile-dialog-wrap.flat .dialog-box .dialog-content .em{font-style:normal;text-shadow:0 0 4px #e86a3e}.pile-dialog-wrap.flat .dialog-box .dialog-para{margin:1.25rem 1.75rem 0 1.75rem;padding:0}.pile-dialog-wrap.flat .dialog-box .dialog-btn{margin:1.25rem 0 0 0;padding:0;height:3rem;line-height:3rem;border-top:1px solid #c5c5c5;background-color:#f5f5ee;color:#535252;font-size:.8rem;text-align:center}.pile-dialog-wrap.toast{top:auto;bottom:3.75rem;height:auto}.pile-dialog-wrap.toast .dialog-box{display:inline-block;background-color:rgba(40,40,40,.95);border-radius:2.5rem;margin:0 auto}.pile-dialog-wrap.toast .dialog-box .dialog-title{height:2.5rem;line-height:2.5rem;color:#333;text-align:center;font-size:.8rem}.pile-dialog-wrap.toast .dialog-box .dialog-close-btn{display:none}.pile-dialog-wrap.toast .dialog-box .dialog-content{color:#c5c5c5;font-size:.65rem}.pile-dialog-wrap.toast .dialog-box .dialog-content .weak{color:#969696}.pile-dialog-wrap.toast .dialog-box .dialog-content .small{font-size:.6rem}.pile-dialog-wrap.toast .dialog-box .dialog-content .del{text-decoration:line-through}.pile-dialog-wrap.toast .dialog-box .dialog-content .em{font-style:normal;text-shadow:0 0 4px #e86a3e}.pile-dialog-wrap.toast .dialog-box .dialog-para{height:2.5rem;line-height:2.5rem;padding:0 1.75rem}.pile-dialog-wrap{display:none;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;-ms-grid-row-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:fixed;top:0;left:0;z-index:1000000;width:100%;height:100%;text-align:center;pointer-events:none}.pile-dialog-wrap.open{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.pile-dialog-wrap .dialog-box,.pile-dialog-wrap .dialog-cover{pointer-events:auto}.dialog-cover{position:fixed;z-index:1000001;top:0;left:0;width:100%;height:100%;background-color:#000;-webkit-transition:opacity 300ms ease;transition:opacity 300ms ease;opacity:0}.dialog-cover.show{opacity:.25}.dialog-box{position:relative;z-index:1000002;overflow:hidden;-webkit-transition:opacity 300ms ease,-webkit-transform 300ms ease;transition:opacity 300ms ease,-webkit-transform 300ms ease;transition:transform 300ms ease,opacity 300ms ease;transition:transform 300ms ease,opacity 300ms ease,-webkit-transform 300ms ease;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;text-align:left}.dialog-box.show{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}.dialog-box .dialog-title{-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.dialog-box .dialog-close-btn{display:block;position:absolute;top:0;right:0;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);cursor:pointer}.dialog-box .dialog-content{position:relative;overflow:hidden;text-overflow:ellipsis}.dialog-box .dialog-para{display:block;line-height:1.4}.dialog-box .dialog-btn{display:block;text-align:center;cursor:pointer}.dialog-box .dialog-row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}',
                initializer = require("./js/_initializer.js");
            initializer.init({
                    templateText: templateText,
                    styleText: styleText
                });
            module.exports = initializer.expose()
        })()
    },
    {
        "./js/_initializer.js": 11
    }]
}, {}, [12]);
(function () {
    console.log("EasyKit (v2.4.1-beta)\n\n" + (new Array(16)).join("="));
    var CLIENT = {
        QQAC_ANDROID: "QQAC_Android",
        QQAC_IOS: "QQAC_iOS",
        WEIXIN: "Weixin",
        QQ: "MobileQQ",
        MYAPP: "MyApp",
        WEIBO: "Weibo",
        QZONE: "QZone",
        QQNEWS: "QQNews",
        QQVIDEO: "QQVideo",
        QQBROWSER_HD: "QQBrowser_HD",
        QQBROWSER: "QQBrowser",
        UCBROWSER: "UCBrowser",
        MANGOTV: "MangoTV",
        OTHER: "Other"
    };
    var RULES = {
        QQAC_ANDROID: /(^| )QQAC_Client_Android( |\/|$)/i,
        QQAC_IOS: /(^| )QQAC_Client_iOS( |\/|$)/i,
        WEIXIN: /(^| )MicroMessenger( |\/|$)/i,
        QQ: /(^| )(QQ)( |\/|$)/i,
        MYAPP: /(^| |\/)(QQDownloader)( |\/|$)/i,
        WEIBO: /(^| )(Weibo)( |\/|$|\()/i,
        QZONE: /(^| )(Qzone)( |\/|$)/i,
        QQNEWS: /(^| )(QQNews)( |\/|$)/i,
        QQVIDEO: /(^| )(QQLiveBrowser)( |\/|$)/i,
        QQBROWSER_HD: /iPad.*?(^| )(MQQBrowser)( |\/|$)/i,
        QQBROWSER: /(^| )(MQQBrowser)( |\/|$)/i,
        UCBROWSER: /(^| )(UCBrowser)( |\/|$)/i,
        MANGOTV: /(^| )(ImgoTV-iphone|ImgoTV-aPhone)( |\/|$)/i
    };
    var _clientType = CLIENT.OTHER;
    var UA = window.navigator.userAgent;
    for (var type in CLIENT) {
        if (!CLIENT.hasOwnProperty(type) || !RULES.hasOwnProperty(type)) continue;
        if (RULES[type].test(UA)) {
            _clientType = CLIENT[type];
            break
        }
    }
    var clientType = _clientType;
    var isAndroid = /(^| |\()(android)(;| |\/|$)/i.test(UA);
    var isIOS = /(^| |\()(iPhone|iPad)(;| |\/|$)/i.test(UA);
    var os = isAndroid ? "Android" : isIOS ? "iOS" : "Other";
    var isIPad = /(^| |\()(iPad)(;| |\/|$)/i.test(UA);
    var isAndroidApp = clientType == CLIENT.QQAC_ANDROID;
    var isIOSApp = clientType === CLIENT.QQAC_IOS;
    var isApp = isAndroidApp || isIOSApp;
    var isWeixin = clientType == CLIENT.WEIXIN;
    var isQQ = clientType == CLIENT.QQ;
    var isQZone = clientType == CLIENT.QZONE;
    var isSNS = isWeixin || isQQ || isQZone;
    var _appVerStr = "not_qqac_client";
    var _appVer = 0;
    var _appVers = [0];
    if (isApp) {
        var ms = /QQAC_Client_(Android|iOS)\/([0-9.]*)/i.exec(UA);
        var verStr = ms && ms[2];
        if (verStr) {
            _appVerStr = verStr;
            _appVer = parseFloat(verStr);
            _appVers = verStr.split(".")
        }
    }
    var appVerStr = appVerStr;
    var appVer = appVer;
    var appVers = appVers;
    var base = {
        CLIENT: CLIENT,
        RULES: RULES,
        clientType: clientType,
        isAndroid: isAndroid,
        isIOS: isIOS,
        os: os,
        isIPad: isIPad,
        isAndroidApp: isAndroidApp,
        isIOSApp: isIOSApp,
        isApp: isApp,
        isWeixin: isWeixin,
        isQQ: isQQ,
        isQZone: isQZone,
        isSNS: isSNS,
        appVerStr: appVerStr,
        appVer: appVer,
        appVers: appVers
    };

    function apply(func, thisArg, argArr) {
        if (typeof func === "function") func.apply(thisArg, argArr)
    }
    function throttle(func, timeSpan, thisArg) {
        var last = 0;
        return function () {
            var args = Array.prototype.splice.apply(arguments, [0]);
            var now = Date.now();
            if (now - last > timeSpan) {
                last = now;
                apply(func, thisArg, args)
            }
        }
    }
    function debounce(func, timeSpan, thisArg) {
        var timeout = null;
        return function () {
            var args = Array.prototype.splice.apply(arguments, [0]);
            if (timeout) window.clearTimeout(timeout);
            timeout = window.setTimeout(function () {
                apply(func, thisArg, args)
            }, timeSpan)
        }
    }
    function deepCopy(origin, _copy) {
        var type = Object.prototype.toString.call(origin),
            copy = origin;
        switch (type) {
            case "[object Object]":
                copy = _copy || {};
                for (var k in origin) if (origin.hasOwnProperty(k)) copy[k] = deepCopy(origin[k]);
                break;
            case "[object Array]":
                copy = _copy || [];
                for (var i = 0, l = origin.length; i < l; i++) copy[i] = deepCopy(origin[i]);
                break;
            case "[object Function]":
                copy = origin;
                break
            }
        return copy
    }

    function extend(obj) {
        var length = arguments.length;
        if (length < 2 || obj == null) return obj;
        for (var index = 1; index < length; index++) {
            var source = arguments[index];
            deepCopy(source, obj)
        }
        return obj
    }
    var makeSureWindowLoaded = {
        _loaded: false,
        _loadEvent: null,
        _loadCallbacks: [],
        wrap: function wrap(func) {
            if (this._loaded) func(this._loadEvent);
            else this._loadCallbacks.push(func)
        },
        _init: function _init() {
            var _this = this;
            window.addEventListener("load", function () {
                return _this._onWindowLoad()
            })
        },
        _onWindowLoad: function _onWindowLoad(e) {
            var callbacks =
            this._loadCallbacks,
                callback;
            this._loaded = true;
            this._loadEvent = e;
            while (callback = callbacks.shift()) callback(e)
        }
    };
    makeSureWindowLoaded._init();

    function loadScript(src, cb) {
        makeSureWindowLoaded.wrap(function () {
            var dom = document.createElement("SCRIPT");
            dom.onload = cb;
            dom.setAttribute("type", "text/javascript");
            dom.setAttribute("src", src);
            document.body.appendChild(dom)
        })
    }
    var anonymousCallbackExposer = {
        KEY: "_anonymous_callbacks",
        _callbacks: {},
        _genCallbackID: function _genCallbackID() {
            var id = null;
            do id = "cb_" + Date.now() + "_" + String(Math.random()).substring(2);
            while (this._callbacks[id]);
            return id
        },
        _delCallbackID: function _delCallbackID(id) {
            delete this._callbacks[id]
        },
        expose: function expose(func, keepAfterExec) {
            var self = this,
                id = self._genCallbackID(),
                name = ["window", self.KEY, id].join(".");
            this._callbacks[id] = function () {
                    if (!keepAfterExec) self._delCallbackID(id);
                    func.apply(this, arguments)
                };
            var parentWindow = window.parent;
            if (parentWindow) {
                    var parentCallbacks = parentWindow[self.KEY];
                    if (!parentCallbacks) parentWindow[self.KEY] = self._callbacks;
                    else parentCallbacks[id] = self._callbacks[id]
                }
            return name
        },
        parse: function parse(name) {
            if (typeof name === "string") {
                var arr = name.split("."),
                    context = window,
                    level = 0,
                    cur;
                while (cur = arr.shift()) {
                        level++;
                        if (!(cur === "window" && level === 1)) context = context[cur]
                    }
                return context
            } else return name
        },
        _init: function _init() {
            window[this.KEY] = this._callbacks
        }
    };
    anonymousCallbackExposer._init();
    var functionHelper = {
        apply: apply,
        throttle: throttle,
        debounce: debounce,
        deepCopy: deepCopy,
        extend: extend,
        makeSureWindowLoaded: makeSureWindowLoaded,
        loadScript: loadScript,
        anonymousCallbackExposer: anonymousCallbackExposer
    };

    function encodeHTML(text) {
        var temp = document.createElement("div");
        temp.textContent != null ? temp.textContent = text : temp.innerText = text;
        var output = temp.innerHTML;
        temp = null;
        return output
    }
    function decodeHTML(html) {
        var temp = document.createElement("div");
        temp.innerHTML = html;
        var output = temp.innerText || temp.textContent;
        temp = null;
        return output
    }
    function preventHTML(text) {
        return text.replace(/</g, "&lt;")
    }
    var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

    function encodeBase64(str) {
        var out, i, len;
        var c1, c2, c3;
        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
            c1 =
            str.charCodeAt(i++) & 255;
            if (i == len) {
                out += base64EncodeChars.charAt(c1 >> 2);
                out += base64EncodeChars.charAt((c1 & 3) << 4);
                out += "==";
                break
            }
            c2 = str.charCodeAt(i++);
            if (i == len) {
                out += base64EncodeChars.charAt(c1 >> 2);
                out += base64EncodeChars.charAt((c1 & 3) << 4 | (c2 & 240) >> 4);
                out += base64EncodeChars.charAt((c2 & 15) << 2);
                out += "=";
                break
            }
            c3 = str.charCodeAt(i++);
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt((c1 & 3) << 4 | (c2 & 240) >> 4);
            out += base64EncodeChars.charAt((c2 & 15) << 2 | (c3 & 192) >> 6);
            out += base64EncodeChars.charAt(c3 & 63)
        }
        return out
    }
    function decodeBase64(str) {
        var c1, c2, c3, c4;
        var i, len, out;
        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
            do c1 = base64DecodeChars[str.charCodeAt(i++) & 255];
            while (i < len && c1 == -1);
            if (c1 == -1) break;
            do c2 = base64DecodeChars[str.charCodeAt(i++) & 255];
            while (i < len && c2 == -1);
            if (c2 == -1) break;
            out += String.fromCharCode(c1 << 2 | (c2 & 48) >> 4);
            do {
                c3 = str.charCodeAt(i++) & 255;
                if (c3 == 61) return out;
                c3 = base64DecodeChars[c3]
            } while (i < len && c3 == -1);
            if (c3 == -1) break;
            out += String.fromCharCode((c2 & 15) << 4 | (c3 & 60) >> 2);
            do {
                c4 = str.charCodeAt(i++) & 255;
                if (c4 == 61) return out;
                c4 = base64DecodeChars[c4]
            } while (i < len && c4 == -1);
            if (c4 == -1) break;
            out += String.fromCharCode((c3 & 3) << 6 | c4)
        }
        return out
    }
    function utf16To8(str) {
        var out, i, len, c;
        out = "";
        len = str.length;
        for (i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if (c >= 1 && c <= 127) out += str.charAt(i);
            else if (c > 2047) {
                out += String.fromCharCode(224 | c >> 12 & 15);
                out += String.fromCharCode(128 | c >> 6 & 63);
                out += String.fromCharCode(128 | c >> 0 & 63)
            } else {
                out += String.fromCharCode(192 | c >> 6 & 31);
                out += String.fromCharCode(128 | c >> 0 & 63)
            }
        }
        return out
    }
    function utf8To16(str) {
        var out, i, len, c;
        var char2, char3;
        out = "";
        len = str.length;
        i = 0;
        while (i < len) {
            c = str.charCodeAt(i++);
            switch (c >> 4) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                out += str.charAt(i - 1);
                break;
            case 12:
            case 13:
                char2 = str.charCodeAt(i++);
                out += String.fromCharCode((c & 31) << 6 | char2 & 63);
                break;
            case 14:
                char2 = str.charCodeAt(i++);
                char3 = str.charCodeAt(i++);
                out += String.fromCharCode((c & 15) << 12 | (char2 & 63) << 6 | (char3 & 63) << 0);
                break
            }
        }
        return out
    }
    function fromJSON(json) {
        try {
            return (new Function("return (" + json + ")"))()
        } catch (e) {
            return null
        }
    }

    function toJSON(obj, _last) {
        var buffer = [],
            type = Object.prototype.toString.call(obj),
            last = _last || [];
        if (last.indexOf(obj) >= 0) throw new Error("Converting circular structure to JSON");
        last.push(obj);
        switch (type) {
            case "[object Function]":
                break;
            case "[object Array]":
                buffer.push("[");
                for (var i = 0, l = obj.length; i < l; i++) {
                    buffer.push(toJSON(obj[i], last));
                    buffer.push(",")
                }
                if (buffer[buffer.length - 1] == ",") buffer.pop();
                buffer.push("]");
                break;
            case "[object Object]":
                buffer.push("{");
                for (var k in obj) if (obj.hasOwnProperty(k)) {
                    buffer.push('"');
                    buffer.push(k);
                    buffer.push('":');
                    buffer.push(toJSON(obj[k], last));
                    buffer.push(",")
                }
                if (buffer[buffer.length - 1] == ",") buffer.pop();
                buffer.push("}");
                break;
            case "[object String]":
                buffer.push('"');
                buffer.push(obj.replace(/"/g, '\\"'));
                buffer.push('"');
                break;
            default:
                buffer.push(String(obj));
                break
            }
        last.pop();
        return buffer.join("")
    }
    var encodingHelper = {
        encodeHTML: encodeHTML,
        decodeHTML: decodeHTML,
        preventHTML: preventHTML,
        encodeBase64: encodeBase64,
        decodeBase64: decodeBase64,
        utf16To8: utf16To8,
        utf8To16: utf8To16,
        fromJSON: fromJSON,
        toJSON: toJSON
    };

    function validUrl(url) {
        return /^((http(s)?:)?\/\/([\w\d\-_]*\.){1,3}qq\.com)?\/([^\/]|$)/.test(url)
    }
    function getDomain() {
        var domain = window.location.domain;
        if (!domain) {
            var a = document.createElement("A");
            a.href = "/";
            domain = String(a.href).replace(/(^http:\/\/|^https:\/\/|\/+$)/g, "")
        }
        return domain
    }
    function getPathName() {
        var url = window.location.href.replace(/^(http|https):\/\//, "");
        var posL = url.indexOf("/") + 1;
        url = posL ? url.substr(posL - 1) : "";
        var posR = url.indexOf("?") + 1;
        url = posR ? url.substr(0, posR - 1) : url;
        return url
    }
    function getSearch() {
        var search = window.location.href.split("#")[0].split("?")[1];
        return search ? "?" + search : ""
    }
    function getQueryString(name) {
        var search = getSearch(),
            result = search.match(new RegExp("[\\?\\&]" + name + "=([^\\&]+)", "i"));
        if (result == null || result.length < 1) return "";
        return decodeURIComponent(result[1])
    }
    function getPathQueryString(name) {
        var pathName = getPathName(),
            tmp = pathName.split("/");
        for (var i = 1, l = tmp.length; i < l; i += 2) {
                var key = tmp[i],
                    value = decodeURIComponent(tmp[i + 1]);
                if (key === name) return value
            }
        return ""
    }
    function getQueryStringSet(_url) {
        var url = _url || window.location.href,
            queryString = (url.split("#")[0].split("?")[1] || "").split("&"),
            queryStringSet = {};
        for (var i = 0, l = queryString.length; i < l; i++) {
                var qs = queryString[i];
                if (!qs) continue;
                var tmp = qs.split("="),
                    name = tmp[0] || "",
                    value = tmp[1] || "";
                queryStringSet[name] = decodeURIComponent(value)
            }
        return queryStringSet
    }
    function appendQueryString(_url, queryStringSet) {
        var modCurrent = arguments.length === 1 && Object.prototype.toString.call(arguments[0]) === "[object Object]";
        if (modCurrent) {
            queryStringSet = arguments[0];
            _url = null
        }
        var url = _url || window.location.href,
            buffer = [],
            joinedSet = getQueryStringSet(url),
            name, value;
        for (name in queryStringSet) if (queryStringSet.hasOwnProperty(name)) {
                value = queryStringSet[name];
                joinedSet[name] = value
            }
        for (name in joinedSet) if (joinedSet.hasOwnProperty(name)) {
                value = joinedSet[name];
                buffer.push(name + "=" + encodeURIComponent(value))
            }
        url = url.split("#")[0].split("?")[0] + "?" + buffer.join("&");
        if (modCurrent) window.history && window.history.replaceState && window.history.replaceState(null, "", url);
        return url
    }
    var urlHelper = {
        validUrl: validUrl,
        getDomain: getDomain,
        getPathName: getPathName,
        getSearch: getSearch,
        getQueryString: getQueryString,
        getPathQueryString: getPathQueryString,
        getQueryStringSet: getQueryStringSet,
        appendQueryString: appendQueryString
    };

    function setCookie(key, value, expires, domain, path) {
        var values = [key + "=" + encodeURIComponent(value)];
        if (expires) if (typeof expires === "number") {
            var expiresTime = new Date;
            expiresTime.setMinutes(expiresTime.getMinutes() + expires);
            values.push("expires=" + expiresTime.toGMTString())
        } else values.push("expires=" + expires);
        values.push("domain=" + (domain || "ac.qq.com"));
        values.push("path=" + (path || "/"));
        document.cookie = values.join(";")
    }
    function removeCookie(key, domain, path) {
        setCookie(key, "", -1440, domain, path)
    }
    function getCookie(key) {
        var allcookies = document.cookie;
        var cookiesReg = new RegExp("(^|;)\\s*" + key + "\\s*(=\\s*([^;$]*?))?(;|$)");
        var groups = cookiesReg.exec(allcookies);
        return decodeURIComponent(groups ? groups[3] || "" : "")
    }
    var cookieHelper = {
        setCookie: setCookie,
        removeCookie: removeCookie,
        getCookie: getCookie
    };

    function use() {
        var _ver, _speedTestUrl, pvRepeatCount;
        (function () {
            function tcss(e) {
                this.url = [],
                this.init(e)
            }
            function loadScript(e) {
                var t = document.createElement("script"),
                    n = document.getElementsByTagName("script")[0];
                t.src = e,
                t.type = "text/javascript",
                t.async = !0,
                n.parentNode.insertBefore(t, n)
            }
            var _d, _l, _b, _n = "-",
                _params, _curDomain, _curUrl, _domainToSet, _refDomain, _refUrl, _image, _ext, _hurlcn, _tt, _ch = 0,
                _crossDomain = 0;
            _ver = "tcss.3.1.5",
            _speedTestUrl = "http://jsqmt.qq.com/cdn_djl.js",
            window.Tcss = {};
            var _pgvVersion = typeof tracert == "function" && typeof pgvGetColumn == "function" && typeof pgvGetTopic == "function" && typeof pgvGetDomainInfo == "function" && typeof pgvGetRefInfo == "function";
            if (typeof _rep == "undefined") var _rep = 1;
            tcss.prototype = {
                    init: function init(e) {
                        e ? _params = e : _params = {},
                        _d = document;
                        if (!_params.statIframe && window != top) try {
                            _d = top.document
                        } catch (t) {}
                        typeof _d == "undefined" && (_d = document),
                        _l = _d.location,
                        _b = _d.body,
                        _pgvVersion && (Tcss.d = _d, Tcss.l = _l),
                        _ext = [],
                        _hurlcn = [],
                        _tt = []
                    },
                    run: function run() {
                        var e, t, n;
                        e = (new Date).getTime(),
                        _cookie.init(),
                        this.url.push(this.getDomainInfo()),
                        this.coverCookie(),
                        _cookie.setCookie("ssid"),
                        _cookie.save(),
                        this.url.unshift("http://pingfore." + this.getCookieSetDomain(_curDomain) + "/pingd?"),
                        this.url.push(this.getRefInfo(_params));
                        try {
                            navigator.cookieEnabled ? this.url.push("&pvid=" + _cookie.setCookie("pgv_pvid", !0)) : this.url.push("&pvid=NoCookie")
                        } catch (r) {
                            this.url.push("&pvid=NoCookie")
                        }
                        this.url.push(this.getMainEnvInfo()),
                        this.url.push(this.getExtendEnvInfo()),
                        Tcss.pgUserType = "";
                        if (_params.pgUserType || _params.reserved2) {
                            var i = _params.pgUserType || _params.reserved2;
                            i = escape(i.substring(0, 256)),
                            Tcss.pgUserType = i,
                            _tt.push("pu=" + Tcss.pgUserType)
                        }
                        _pgvVersion && (pgvGetColumn(), pgvGetTopic(), this.url.push("&column=" + Tcss.column + "&subject=" + Tcss.subject), tracert()),
                        this.url.push("&vs=" + _ver),
                        _cookie.setCookie("ts_uid", !0),
                        t = (new Date).getTime(),
                        _ext.push("tm=" + (t - e)),
                        _ch && _ext.push("ch=" + _ch),
                        _params.extParam ? n = _params.extParam + "|" : n = "",
                        this.url.push("&ext=" + escape(n + _ext.join(";"))),
                        this.url.push("&hurlcn=" + escape(_hurlcn.join(";"))),
                        this.url.push("&rand=" + Math.round(Math.random() * 1E5)),
                        typeof _speedMark == "undefined" ? this.url.push("&reserved1=-1") : this.url.push("&reserved1=" + (new Date - _speedMark));
                        var s = this.getSud();
                        s && _tt.push("su=" + escape(s.substring(0, 256))),
                        this.url.push("&tt=" + escape(_tt.join(";"))),
                        this.sendInfo(this.url.join(""));
                        if (_crossDomain == 1) {
                            var o = this.getParameter("tcss_rp_dm", _d.URL);
                            if (o != Tcss.dm) {
                                var u =
                                this.url.join("").replace(/\?dm=(.*?)\&/, "?dm=" + o + "&");
                                this.sendInfo(u)
                            }
                        }
                        _params.hot && (document.attachEvent ? document.attachEvent("onclick", function (e) {
                            pgvWatchClick(e)
                        }) : document.addEventListener("click", function (e) {
                            pgvWatchClick(e)
                        }, !1)),
                        _params.repeatApplay && _params.repeatApplay == "true" && typeof _rep != "undefined" && (_rep = 1)
                    },
                    getSud: function getSud() {
                        if (_params.sessionUserType) return _params.sessionUserType;
                        var e = _params.sudParamName || "sessionUserType",
                            t = this.getParameter(e, _d.URL);
                        return t
                    },
                    coverCookie: function coverCookie() {
                        if (_params.crossDomain && _params.crossDomain == "on") {
                            var e = this.getParameter("tcss_uid", _d.URL),
                                t = this.getParameter("tcss_sid", _d.URL),
                                n = this.getParameter("tcss_refer", _d.URL),
                                r = this.getParameter("tcss_last", _d.URL);
                            t && e && (_crossDomain = 1, _cookie.setCookie("ssid", !1, t), _cookie.save(), _cookie.setCookie("ts_refer", !0, n), _cookie.setCookie("ts_last", !0, r), _cookie.setCookie("pgv_pvid", !0, e))
                        }
                    },
                    getDomainInfo: function getDomainInfo(e) {
                        var t, n;
                        return t = _l.hostname.toLowerCase(),
                        _params.virtualDomain && (_hurlcn.push("ad=" + t), t = _params.virtualDomain),
                        n = this.getCurrentUrl(),
                        Tcss.dm = t,
                        _pgvVersion && pgvGetDomainInfo(),
                        _curDomain = Tcss.dm,
                        _domainToSet || (_domainToSet = this.getCookieSetDomain(_l.hostname.toLowerCase()), _pgvVersion && (Tcss.domainToSet = _domainToSet)),
                        e && (Tcss.dm += ".hot"),
                        "dm=" + Tcss.dm + "&url=" + Tcss.url
                    },
                    getCurrentUrl: function getCurrentUrl() {
                        var e = "",
                            t = _n;
                        e = _curUrl = escape(_l.pathname),
                        _l.search != "" && (t = escape(_l.search.substr(1)));
                        if (_params.senseParam) {
                                var n = this.getParameter(_params.senseParam, _d.URL);
                                n && (e += "_" + n)
                            }
                        _params.virtualURL && (_hurlcn.push("au=" + e), e = _params.virtualURL),
                        Tcss.url = e,
                        Tcss.arg = t
                    },
                    getRefInfo: function getRefInfo(e) {
                        var t = _n,
                            n = _n,
                            r = _n,
                            i = _d.referrer,
                            s, o, u;
                        s = e.tagParamName || "ADTAG",
                        o = this.getParameter(s, _d.URL),
                        u = i.indexOf("://");
                        if (u > -1) {
                                var a = /(\w+):\/\/([^\:|\/]+)(\:\d*)?(.*\/)([^#|\?|\n]+)?(#.*)?(\?.*)?/i,
                                    f = i.match(a);
                                f && (t = f[2], n = f[4] + (f[5] ? f[5] : ""))
                            }
                        if (i.indexOf("?") != -1) {
                                var u = i.indexOf("?") + 1;
                                r = i.substr(u)
                            }
                        var l = t;
                        _params.virtualRefDomain && (t != _n && _hurlcn.push("ard=" + t), t = _params.virtualRefDomain),
                        _params.virtualRefURL && (n != _n && _hurlcn.push("aru=" + escape(n)), n = _params.virtualRefURL);
                        var c;
                        o && (c = t + n, t = "ADTAG", n = o),
                        _refDomain = t,
                        _refUrl = escape(n);
                        if (_refDomain == _n || _refDomain == "ADTAG" && l == _n) {
                                var h = _cookie.get("ts_last=", !0);
                                h != _n && _ext.push("ls=" + h)
                            }
                        _cookie.setCookie("ts_last", !0, escape((_l.hostname + _l.pathname).substring(0, 128)));
                        var p = _cookie.get("ts_refer=", !0);
                        p != _n && _ext.push("rf=" + p);
                        var d = _l.hostname;
                        _params.inner && (d = "," + d + "," + _params.inner + ",");
                        if (!(_refDomain == _n || ("," + d + ",").indexOf(_refDomain) > -1 || _crossDomain == 1)) {
                                var v = escape((_refDomain + n).substring(0, 128));
                                v != p && (_ch = 2),
                                _cookie.setCookie("ts_refer", !0, v)
                            }
                        return Tcss.rdm = _refDomain,
                        Tcss.rurl = _refUrl,
                        Tcss.rarg = escape(r),
                        _pgvVersion && pgvGetRefInfo(),
                        c ? "&rdm=" + Tcss.rdm + "&rurl=" + Tcss.rurl + "&rarg=" + Tcss.rarg + "&or=" + c : "&rdm=" + Tcss.rdm + "&rurl=" + Tcss.rurl + "&rarg=" + Tcss.rarg
                    },
                    getMainEnvInfo: function getMainEnvInfo() {
                        var e = "";
                        try {
                            var t = _n,
                                n = _n,
                                r = _n,
                                i = _n,
                                s = _n,
                                o = 0,
                                u = navigator;
                            self.screen && (t = screen.width + "x" + screen.height, n = screen.colorDepth + "-bit"),
                            u.language ? r =
                            u.language.toLowerCase() : u.browserLanguage && (r = u.browserLanguage.toLowerCase()),
                            o = u.javaEnabled() ? 1 : 0,
                            i = u.platform,
                            s = (new Date).getTimezoneOffset() / 60,
                            e = "&scr=" + t + "&scl=" + n + "&lang=" + r + "&java=" + o + "&pf=" + i + "&tz=" + s
                        } catch (a) {} finally {
                            return e
                        }
                    },
                    getExtendEnvInfo: function getExtendEnvInfo() {
                        var e = "";
                        try {
                            var t, n = _l.href,
                                r = _n;
                            e += "&flash=" + this.getFlashInfo(),
                            _b.addBehavior && (_b.addBehavior("#default#homePage"), _b.isHomePage(n) && (e += "&hp=Y")),
                            _b.addBehavior && (_b.addBehavior("#default#clientCaps"), r = _b.connectionType),
                            e += "&ct=" + r
                        } catch (i) {} finally {
                            return e
                        }
                    },
                    getFlashInfo: function getFlashInfo() {
                        var f = _n,
                            n = navigator;
                        try {
                                if (n.plugins && n.plugins.length) for (var i = 0; i < n.plugins.length; i++) {
                                    if (n.plugins[i].name.indexOf("Shockwave Flash") > -1) {
                                        f = n.plugins[i].description.split("Shockwave Flash ")[1];
                                        break
                                    }
                                } else if (window.ActiveXObject) for (var i = 12; i >= 5; i--) try {
                                    var fl = window["eva" + String.fromCharCode(108)]("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + i + "');");
                                    if (fl) {
                                        f = i + ".0";
                                        break
                                    }
                                } catch (e) {}
                            } catch (e$6) {}
                        return f
                    },
                    getParameter: function getParameter(e, t) {
                        if (e && t) {
                            var n = new RegExp("(\\?|#|&)" + e + "=([^&^#]*)(#|&|$)"),
                                r = t.match(n);
                            return r ? r[2] : ""
                        }
                        return ""
                    },
                    getCookieSetDomain: function getCookieSetDomain(e) {
                        var t, n, r, i = [],
                            s = 0;
                        for (var o = 0; o < e.length; o++) e.charAt(o) == "." && (i[s] = o, s++);
                        return t = i.length,
                        n = e.indexOf(".cn"),
                        n > -1 && t--,
                        r = "qq.com",
                        t == 1 ? r = e : t > 1 && (r = e.substring(i[t - 2] + 1)),
                        r
                    },
                    watchClick: function watchClick(e) {
                        try {
                            var t = !0,
                                n = "",
                                r;
                            r = window.event ? window.event.srcElement : e.target;
                            switch (r.tagName) {
                                case "A":
                                    n = "<A href=" + r.href + ">" + r.innerHTML + "</a>";
                                    break;
                                case "IMG":
                                    n = "<IMG src=" + r.src + ">";
                                    break;
                                case "INPUT":
                                    n = "<INPUT type=" + r.type + " value=" + r.value + ">";
                                    break;
                                case "BUTTON":
                                    n = "<BUTTON>" + r.innerText + "</BUTTON>";
                                    break;
                                case "SELECT":
                                    n = "SELECT";
                                    break;
                                default:
                                    t = !1
                                }
                            if (t) {
                                    var i = new tcss(_params),
                                        s = i.getElementPos(r);
                                    if (_params.coordinateId) {
                                            var o = i.getElementPos(document.getElementById(_params.coordinateId));
                                            s.x -= o.x
                                        }
                                    i.url.push(i.getDomainInfo(!0)),
                                    i.url.push("&hottag=" + escape(n)),
                                    i.url.push("&hotx=" + s.x),
                                    i.url.push("&hoty=" + s.y),
                                    i.url.push("&rand=" + Math.round(Math.random() * 1E5)),
                                    i.url.unshift("http://pinghot." + this.getCookieSetDomain(_curDomain) + "/pingd?"),
                                    i.sendInfo(i.url.join(""))
                                }
                        } catch (u) {}
                    },
                    getElementPos: function getElementPos(e) {
                        if (e.parentNode === null || e.style.display == "none") return !1;
                        var t = navigator.userAgent.toLowerCase(),
                            n = null,
                            r = [],
                            i;
                        if (e.getBoundingClientRect) {
                                var s, o, u, a;
                                return i = e.getBoundingClientRect(),
                                s = Math.max(document.documentElement.scrollTop, document.body.scrollTop),
                                o = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft),
                                u = document.body.clientTop,
                                a = document.body.clientLeft,
                                {
                                    x: i.left + o - a,
                                    y: i.top + s - u
                                }
                            }
                        if (document.getBoxObjectFor) {
                                i = document.getBoxObjectFor(e);
                                var f = e.style.borderLeftWidth ? Math.floor(e.style.borderLeftWidth) : 0,
                                    l = e.style.borderTopWidth ? Math.floor(e.style.borderTopWidth) : 0;
                                r = [i.x - f, i.y - l]
                            } else {
                                r = [e.offsetLeft, e.offsetTop],
                                n = e.offsetParent;
                                if (n != e) while (n) r[0] += n.offsetLeft,
                                r[1] += n.offsetTop,
                                n = n.offsetParent;
                                if (t.indexOf("opera") > -1 || t.indexOf("safari") > -1 && e.style.position == "absolute") r[0] -= document.body.offsetLeft,
                                r[1] -= document.body.offsetTop
                            }
                        e.parentNode ? n = e.parentNode : n = null;
                        while (n && n.tagName != "BODY" && n.tagName != "HTML") r[0] -= n.scrollLeft,
                        r[1] -= n.scrollTop,
                        n.parentNode ? n = n.parentNode : n = null;
                        return {
                                x: r[0],
                                y: r[1]
                            }
                    },
                    sendClick: function sendClick() {
                        _params.hottag && (this.url.push(this.getDomainInfo(!0)), this.url.push("&hottag=" + escape(_params.hottag)), this.url.push("&hotx=9999&hoty=9999"), this.url.push("&rand=" + Math.round(Math.random() * 1E5)), this.url.unshift("http://pinghot." + this.getCookieSetDomain(_curDomain) + "/pingd?"), this.sendInfo(this.url.join("")))
                    },
                    pgvGetArgs: function pgvGetArgs() {
                        this.getDomainInfo();
                        var e = [];
                        return e.push("tcss_rp_dm=" + Tcss.dm),
                        e.push("tcss_uid=" + _cookie.get("pgv_pvid=", !0)),
                        e.push("tcss_sid=" + _cookie.get("ssid=", !0)),
                        e.push("tcss_refer=" + _cookie.get("ts_refer=", !0)),
                        e.push("tcss_last=" + _cookie.get("ts_last=", !0)),
                        e.join("&")
                    },
                    sendInfo: function sendInfo(e) {
                        _image = new Image(1, 1),
                        Tcss.img = _image,
                        _image.onload = _image.onerror = _image.onabort = function () {
                            _image.onload = _image.onerror =
                            _image.onabort = null,
                            Tcss.img = null
                        },
                        _image.src = e
                    }
                };
            var _cookie = {
                    sck: [],
                    sco: {},
                    init: function init() {
                        var e = this.get("pgv_info=", !0);
                        if (e != _n) {
                            var t = e.split("&");
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n].split("=");
                                this.set(r[0], unescape(r[1]))
                            }
                        }
                    },
                    get: function get(e, t) {
                        var n = t ? _d.cookie : this.get("pgv_info=", !0),
                            r = _n,
                            i, s;
                        i = n.indexOf(e);
                        if (i > -1) {
                                i += e.length,
                                s = n.indexOf(";", i),
                                s == -1 && (s = n.length);
                                if (!t) {
                                    var o = n.indexOf("&", i);
                                    o > -1 && (s = Math.min(s, o))
                                }
                                r = n.substring(i, s)
                            }
                        return r
                    },
                    set: function set(e, t) {
                        this.sco[e] =
                        t;
                        var n = !1,
                            r = this.sck.length;
                        for (var i = 0; i < r; i++) if (e == this.sck[i]) {
                                n = !0;
                                break
                            }
                        n || this.sck.push(e)
                    },
                    setCookie: function setCookie(e, t, n) {
                        var r = _l.hostname,
                            i = _cookie.get(e + "=", t);
                        if (i == _n && !n) {
                                switch (e) {
                                case "ts_uid":
                                    _ext.push("nw=1");
                                    break;
                                case "ssid":
                                    _ch = 1
                                }
                                t ? i = "" : i = "s";
                                var s = (new Date).getUTCMilliseconds();
                                i += Math.round(Math.abs(Math.random() - 1) * 2147483647) * s % 1E10
                            } else i = n ? n : i;
                        if (t) switch (e) {
                            case "ts_uid":
                                this.saveCookie(e + "=" + i, r, this.getExpires(1051200));
                                break;
                            case "ts_refer":
                                this.saveCookie(e + "=" + i, r, this.getExpires(259200));
                                break;
                            case "ts_last":
                                this.saveCookie(e + "=" + i, r, this.getExpires(30));
                                break;
                            default:
                                this.saveCookie(e + "=" + i, _domainToSet, "expires=Sun, 18 Jan 2038 00:00:00 GMT;")
                            } else this.set(e, i);
                        return i
                    },
                    getExpires: function getExpires(e) {
                        var t = new Date;
                        return t.setTime(t.getTime() + e * 60 * 1E3),
                        "expires=" + t.toGMTString()
                    },
                    save: function save() {
                        if (_params.sessionSpan) {
                            var e = new Date;
                            e.setTime(e.getTime() + _params.sessionSpan * 60 * 1E3)
                        }
                        var t = "",
                            n = this.sck.length;
                        for (var r = 0; r < n; r++) t += this.sck[r] + "=" + this.sco[this.sck[r]] + "&";
                        t = "pgv_info=" + t.substr(0, t.length - 1);
                        var i = "";
                        e && (i = "expires=" + e.toGMTString()),
                        this.saveCookie(t, _domainToSet, i)
                    },
                    saveCookie: function saveCookie(e, t, n) {
                        _d.cookie = e + ";path=/;domain=" + t + ";" + n
                    }
                };
            window.pgvMain = function (e, t) {
                    var n = "";
                    t ? (n = t, _ver = "tcsso.3.1.5") : (n = e, _ver = "tcss.3.1.5");
                    try {
                        _pgvVersion && (typeof pvRepeatCount != "undefined" && pvRepeatCount == 1 ? (_rep = 1, pvRepeatCount = 2) : _rep = 2);
                        if (_rep != 1) return;
                        _rep = 2,
                        (new tcss(n)).run()
                    } catch (r) {}
                },
            window.pgvSendClick = function (e) {
                    (new tcss(e)).sendClick()
                },
            window.pgvWatchClick = function (e) {
                    (new tcss(e)).watchClick(e)
                },
            window.pgvGetArgs = function (e) {
                    return (new tcss(e)).pgvGetArgs()
                },
            loadScript(_speedTestUrl)
        })()
    }
    function use$1() {
        var _ver, _speedTestUrl, pvRepeatCount;
        (function () {
            function t(a) {
                this.url = [];
                this.init(a)
            }
            var g, l, n, f, x, w, p, B, k, q, u, y, z = 0,
                A = 0;
            _ver = "tcss.3.1.5";
            window.Tcss = {};
            var v = "function" == typeof tracert && "function" == typeof pgvGetColumn && "function" == typeof pgvGetTopic && "function" == typeof pgvGetDomainInfo && "function" == typeof pgvGetRefInfo;
            if ("undefined" == typeof r) var r = 1;
            t.prototype = {
                    init: function init(a) {
                        a ? f = a : f = {};
                        g = document;
                        if (!f.statIframe && window != top) try {
                            g = top.document
                        } catch (c) {}
                        "undefined" == typeof g && (g = document);
                        l = g.location;
                        n = g.body;
                        v && (Tcss.d = g, Tcss.l = l);
                        q = [];
                        u = [];
                        y = []
                    },
                    run: function run() {
                        var a, c, b;
                        a = (new Date).getTime();
                        h.init();
                        this.url.push(this.getDomainInfo());
                        this.coverCookie();
                        h.setCookie("ssid");
                        h.save();
                        this.url.unshift("https://pingfore." + this.getCookieSetDomain(x) + "/pingd?");
                        this.url.push(this.getRefInfo(f));
                        try {
                            navigator.cookieEnabled ? this.url.push("&pvid=" + h.setCookie("pgv_pvid", !0)) : this.url.push("&pvid=NoCookie")
                        } catch (d) {
                            this.url.push("&pvid=NoCookie")
                        }
                        this.url.push(this.getMainEnvInfo());
                        this.url.push(this.getExtendEnvInfo());
                        Tcss.pgUserType = "";
                        if (f.pgUserType || f.reserved2) c = f.pgUserType || f.reserved2,
                        c = escape(c.substring(0, 256)),
                        Tcss.pgUserType = c,
                        y.push("pu=" + Tcss.pgUserType);
                        v && (pgvGetColumn(), pgvGetTopic(), this.url.push("&column=" + Tcss.column + "&subject=" + Tcss.subject), tracert());
                        this.url.push("&vs=" + _ver);
                        h.setCookie("ts_uid", !0);
                        c = (new Date).getTime();
                        q.push("tm=" + (c - a));
                        z && q.push("ch=" + z);
                        f.extParam ? b = f.extParam + "|" : b = "";
                        this.url.push("&ext=" + escape(b + q.join(";")));
                        this.url.push("&hurlcn=" + escape(u.join(";")));
                        this.url.push("&rand=" + Math.round(1E5 * Math.random()));
                        "undefined" == typeof _speedMark ? this.url.push("&reserved1=-1") : this.url.push("&reserved1=" + (new Date - _speedMark));
                        (a = this.getSud()) && y.push("su=" + escape(a.substring(0, 256)));
                        this.url.push("&tt=" + escape(y.join(";")));
                        this.sendInfo(this.url.join(""));
                        1 == A && (a =
                        this.getParameter("tcss_rp_dm", g.URL), a != Tcss.dm && (a = this.url.join("").replace(/\?dm=(.*?)\&/, "?dm=" + a + "&"), this.sendInfo(a)));
                        f.hot && (document.attachEvent ? document.attachEvent("onclick", function (a) {
                            pgvWatchClick(a)
                        }) : document.addEventListener("click", function (a) {
                            pgvWatchClick(a)
                        }, !1));
                        f.repeatApplay && "true" == f.repeatApplay && "undefined" != typeof r && (r = 1)
                    },
                    getSud: function getSud() {
                        return f.sessionUserType ? f.sessionUserType : this.getParameter(f.sudParamName || "sessionUserType", g.URL)
                    },
                    coverCookie: function coverCookie() {
                        if (f.crossDomain && "on" == f.crossDomain) {
                            var a = this.getParameter("tcss_uid", g.URL),
                                c = this.getParameter("tcss_sid", g.URL),
                                b = this.getParameter("tcss_refer", g.URL),
                                d = this.getParameter("tcss_last", g.URL);
                            c && a && (A = 1, h.setCookie("ssid", !1, c), h.save(), h.setCookie("ts_refer", !0, b), h.setCookie("ts_last", !0, d), h.setCookie("pgv_pvid", !0, a))
                        }
                    },
                    getDomainInfo: function getDomainInfo(a) {
                        var c;
                        c = l.hostname.toLowerCase();
                        f.virtualDomain && (u.push("ad=" + c), c = f.virtualDomain);
                        this.getCurrentUrl();
                        Tcss.dm = c;
                        v && pgvGetDomainInfo();
                        x = Tcss.dm;
                        w || (w = this.getCookieSetDomain(l.hostname.toLowerCase()), v && (Tcss.domainToSet = w));
                        a && (Tcss.dm += ".hot");
                        return "dm=" + Tcss.dm + "&url=" + Tcss.url
                    },
                    getCurrentUrl: function getCurrentUrl() {
                        var a = "",
                            c = "-",
                            a = escape(l.pathname);
                        "" != l.search && (c = escape(l.search.substr(1)));
                        if (f.senseParam) {
                                var b = this.getParameter(f.senseParam, g.URL);
                                b && (a += "_" + b)
                            }
                        f.virtualURL && (u.push("au=" + a), a = f.virtualURL);
                        Tcss.url = a;
                        Tcss.arg = c
                    },
                    getRefInfo: function getRefInfo(a) {
                        var c = "-",
                            b = "-",
                            d = "-",
                            e = g.referrer,
                            m;
                        a = this.getParameter(a.tagParamName || "ADTAG", g.URL);
                        m = e.indexOf("://"); - 1 < m && (m = e.match(/(\w+):\/\/([^\:|\/]+)(\:\d*)?(.*\/)([^#|\?|\n]+)?(#.*)?(\?.*)?/i)) && (c = m[2], b = m[4] + (m[5] ? m[5] : "")); - 1 != e.indexOf("?") && (m = e.indexOf("?") + 1, d = e.substr(m));
                        e = c;
                        f.virtualRefDomain && ("-" != c && u.push("ard=" + c), c = f.virtualRefDomain);
                        f.virtualRefURL && ("-" != b && u.push("aru=" + escape(b)), b = f.virtualRefURL);
                        var k;
                        a && (k = c + b, c = "ADTAG", b = a);
                        p = c;
                        B = escape(b);
                        if ("-" == p || "ADTAG" == p && "-" == e) c = h.get("ts_last=", !0),
                        "-" != c && q.push("ls=" + c);
                        h.setCookie("ts_last", !0, escape((l.hostname + l.pathname).substring(0, 128)));
                        c = h.get("ts_refer=", !0);
                        "-" != c && q.push("rf=" + c);
                        e = l.hostname;
                        f.inner && (e = "," + e + "," + f.inner + ",");
                        "-" == p || -1 < ("," + e + ",").indexOf(p) || 1 == A || (b = escape((p + b).substring(0, 128)), b != c && (z = 2), h.setCookie("ts_refer", !0, b));
                        Tcss.rdm = p;
                        Tcss.rurl = B;
                        Tcss.rarg = escape(d);
                        v && pgvGetRefInfo();
                        return k ? "&rdm=" + Tcss.rdm + "&rurl=" + Tcss.rurl + "&rarg=" + Tcss.rarg + "&or=" + k : "&rdm=" + Tcss.rdm + "&rurl=" + Tcss.rurl + "&rarg=" + Tcss.rarg
                    },
                    getMainEnvInfo: function getMainEnvInfo() {
                        var a = "";
                        try {
                            var c = "-",
                                b = "-",
                                d = "-",
                                e = "-",
                                f = "-",
                                h = 0,
                                g = navigator;
                            self.screen && (c = screen.width + "x" + screen.height, b = screen.colorDepth + "-bit");
                            g.language ? d = g.language.toLowerCase() : g.browserLanguage && (d = g.browserLanguage.toLowerCase());
                            h = g.javaEnabled() ? 1 : 0;
                            e = g.platform;
                            f = (new Date).getTimezoneOffset() / 60;
                            a = "&scr=" + c + "&scl=" + b + "&lang=" + d + "&java=" + h + "&pf=" + e + "&tz=" + f
                        } catch (k$7) {} finally {
                            return a
                        }
                    },
                    getExtendEnvInfo: function getExtendEnvInfo() {
                        var a = "";
                        try {
                            var c = l.href,
                                b = "-",
                                a = a + ("&flash=" + this.getFlashInfo());
                            n.addBehavior && (n.addBehavior("#default#homePage"), n.isHomePage(c) && (a += "&hp=Y"));
                            n.addBehavior && (n.addBehavior("#default#clientCaps"), b = n.connectionType);
                            a += "&ct=" + b
                        } catch (d) {} finally {
                            return a
                        }
                    },
                    getFlashInfo: function getFlashInfo() {
                        var a = "-",
                            c = navigator;
                        try {
                                if (c.plugins && c.plugins.length) for (var b = 0; b < c.plugins.length; b++) {
                                    if (-1 < c.plugins[b].name.indexOf("Shockwave Flash")) {
                                        a = c.plugins[b].description.split("Shockwave Flash ")[1];
                                        break
                                    }
                                } else if (window.ActiveXObject) for (b = 12; 5 <= b; b--) try {
                                    if (window["eva" + String.fromCharCode(108)]("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + b + "');")) {
                                        a = b + ".0";
                                        break
                                    }
                                } catch (d) {}
                            } catch (e) {}
                        return a
                    },
                    getParameter: function getParameter(a, c) {
                        if (a && c) {
                            var b = c.match(new RegExp("(\\?|#|&)" + a + "=([^&^#]*)(#|&|$)"));
                            return b ? b[2] : ""
                        }
                        return ""
                    },
                    getCookieSetDomain: function getCookieSetDomain(a) {
                        var c, b, d = [];
                        for (b = c = 0; b < a.length; b++)"." == a.charAt(b) && (d[c] = b, c++);
                        c = d.length; - 1 < a.indexOf(".cn") && c--;
                        b = "qq.com";
                        1 == c ? b = a : 1 < c && (b = a.substring(d[c - 2] + 1));
                        return b
                    },
                    watchClick: function watchClick(a) {
                        try {
                            var c = !0,
                                b = "",
                                d;
                            d = window.event ? window.event.srcElement : a.target;
                            switch (d.tagName) {
                                case "A":
                                    b = "<A href=" + d.href + ">" + d.innerHTML + "</a>";
                                    break;
                                case "IMG":
                                    b = "<IMG src=" + d.src + ">";
                                    break;
                                case "INPUT":
                                    b = "<INPUT type=" + d.type + " value=" + d.value + ">";
                                    break;
                                case "BUTTON":
                                    b = "<BUTTON>" + d.innerText + "</BUTTON>";
                                    break;
                                case "SELECT":
                                    b = "SELECT";
                                    break;
                                default:
                                    c = !1
                                }
                            if (c) {
                                    var e = new t(f),
                                        g = e.getElementPos(d);
                                    if (f.coordinateId) {
                                            var h = e.getElementPos(document.getElementById(f.coordinateId));
                                            g.x -= h.x
                                        }
                                    e.url.push(e.getDomainInfo(!0));
                                    e.url.push("&hottag=" + escape(b));
                                    e.url.push("&hotx=" + g.x);
                                    e.url.push("&hoty=" + g.y);
                                    e.url.push("&rand=" + Math.round(1E5 * Math.random()));
                                    e.url.unshift("https://pingfore." + this.getCookieSetDomain(x) + "/pingd?");
                                    e.sendInfo(e.url.join(""))
                                }
                        } catch (k$8) {}
                    },
                    getElementPos: function getElementPos(a) {
                        if (null === a.parentNode || "none" == a.style.display) return !1;
                        var c = navigator.userAgent.toLowerCase(),
                            b = null,
                            d = [];
                        if (a.getBoundingClientRect) return c = a.getBoundingClientRect(),
                        a = Math.max(document.documentElement.scrollTop, document.body.scrollTop),
                        b = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft),
                        {
                                x: c.left + b - document.body.clientLeft,
                                y: c.top + a - document.body.clientTop
                            };
                        if (document.getBoxObjectFor) c = document.getBoxObjectFor(a),
                        d = [c.x - (a.style.borderLeftWidth ? Math.floor(a.style.borderLeftWidth) : 0), c.y - (a.style.borderTopWidth ? Math.floor(a.style.borderTopWidth) : 0)];
                        else {
                                d = [a.offsetLeft, a.offsetTop];
                                b = a.offsetParent;
                                if (b != a) for (; b;) d[0] += b.offsetLeft,
                                d[1] += b.offsetTop,
                                b = b.offsetParent;
                                if (-1 < c.indexOf("opera") || -1 < c.indexOf("safari") && "absolute" == a.style.position) d[0] -= document.body.offsetLeft,
                                d[1] -= document.body.offsetTop
                            }
                        for (b = a.parentNode ? a.parentNode : null; b && "BODY" != b.tagName && "HTML" != b.tagName;) d[0] -= b.scrollLeft,
                        d[1] -= b.scrollTop,
                        b = b.parentNode ? b.parentNode : null;
                        return {
                                x: d[0],
                                y: d[1]
                            }
                    },
                    sendClick: function sendClick() {
                        f.hottag && (this.url.push(this.getDomainInfo(!0)), this.url.push("&hottag=" + escape(f.hottag)), this.url.push("&hotx=9999&hoty=9999"), this.url.push("&rand=" + Math.round(1E5 * Math.random())), this.url.unshift("https://pingfore." + this.getCookieSetDomain(x) + "/pingd?"), this.sendInfo(this.url.join("")))
                    },
                    pgvGetArgs: function pgvGetArgs() {
                        this.getDomainInfo();
                        var a = [];
                        a.push("tcss_rp_dm=" + Tcss.dm);
                        a.push("tcss_uid=" + h.get("pgv_pvid=", !0));
                        a.push("tcss_sid=" + h.get("ssid=", !0));
                        a.push("tcss_refer=" + h.get("ts_refer=", !0));
                        a.push("tcss_last=" + h.get("ts_last=", !0));
                        return a.join("&")
                    },
                    sendInfo: function sendInfo(a) {
                        k = new Image(1, 1);
                        Tcss.img = k;
                        k.onload = k.onerror = k.onabort = function () {
                            k.onload = k.onerror = k.onabort = null;
                            Tcss.img = null
                        };
                        k.src = a
                    }
                };
            var h = {
                    sck: [],
                    sco: {},
                    init: function init() {
                        var a = this.get("pgv_info=", !0);
                        if ("-" != a) for (var a = a.split("&"), c = 0; c < a.length; c++) {
                            var b = a[c].split("=");
                            this.set(b[0], unescape(b[1]))
                        }
                    },
                    get: function get(a, c) {
                        var b = c ? g.cookie : this.get("pgv_info=", !0),
                            d = "-",
                            e;
                        e = b.indexOf(a);
                        if (-1 < e) {
                                e += a.length;
                                d = b.indexOf(";", e); - 1 == d && (d = b.length);
                                if (!c) {
                                    var f = b.indexOf("&", e); - 1 < f && (d = Math.min(d, f))
                                }
                                d = b.substring(e, d)
                            }
                        return d
                    },
                    set: function set(a, c) {
                        this.sco[a] = c;
                        for (var b = !1, d = this.sck.length, e = 0; e < d; e++) if (a == this.sck[e]) {
                            b = !0;
                            break
                        }
                        b || this.sck.push(a)
                    },
                    setCookie: function setCookie(a, c, b) {
                        var d = l.hostname,
                            e = h.get(a + "=", c);
                        if ("-" != e || b) e = b ? b : e;
                        else {
                                switch (a) {
                                case "ts_uid":
                                    q.push("nw=1");
                                    break;
                                case "ssid":
                                    z = 1
                                }
                                c ? e = "" : e = "s";
                                b = (new Date).getUTCMilliseconds();
                                e += Math.round(2147483647 * Math.abs(Math.random() - 1)) * b % 1E10
                            }
                        if (c) switch (a) {
                            case "ts_uid":
                                this.saveCookie(a + "=" + e, d, this.getExpires(1051200));
                                break;
                            case "ts_refer":
                                this.saveCookie(a + "=" + e, d, this.getExpires(259200));
                                break;
                            case "ts_last":
                                this.saveCookie(a + "=" + e, d, this.getExpires(30));
                                break;
                            default:
                                this.saveCookie(a + "=" + e, w, "expires=Sun, 18 Jan 2038 00:00:00 GMT;")
                            } else this.set(a, e);
                        return e
                    },
                    getExpires: function getExpires(a) {
                        var c = new Date;
                        c.setTime(c.getTime() + 6E4 * a);
                        return "expires=" + c.toGMTString()
                    },
                    save: function save() {
                        if (f.sessionSpan) {
                            var a = new Date;
                            a.setTime(a.getTime() + 6E4 * f.sessionSpan)
                        }
                        for (var c = "", b = this.sck.length, d = 0; d < b; d++) c += this.sck[d] + "=" + this.sco[this.sck[d]] + "&";
                        c = "pgv_info=" + c.substr(0, c.length - 1);
                        b = "";
                        a && (b = "expires=" + a.toGMTString());
                        this.saveCookie(c, w, b)
                    },
                    saveCookie: function saveCookie(a, c, b) {
                        g.cookie = a + ";path=/;domain=" + c + ";" + b
                    }
                };
            window.pgvMain = function (a, c) {
                    var b = "";
                    c ? (b = c, _ver = "tcsso.3.1.5") : (b = a, _ver = "tcss.3.1.5");
                    try {
                        v && ("undefined" != typeof pvRepeatCount && 1 == pvRepeatCount ? (r = 1, pvRepeatCount = 2) : r = 2),
                        1 == r && (r = 2, (new t(b)).run())
                    } catch (d) {}
                };
            window.pgvSendClick = function (a) {
                    (new t(a)).sendClick()
                };
            window.pgvWatchClick = function (a) {
                    (new t(a)).watchClick(a)
                };
            window.pgvGetArgs = function (a) {
                    return (new t(a)).pgvGetArgs()
                }
        })()
    }
    var pageHref = window.location.href;
    var isHTTPS = /^https:/i.test(pageHref);
    if (isHTTPS) use$1();
    else use();
    var _defaultOpt = {
        virtualUrl: _getVirtualUrl,
        virtualDomain: _getVirtualDomain,
        withSearch: true,
        downAppTag: function downAppTag() {
            return _getDownAppTag("default")
        }
    };
    var _defaultAppUrls = {
        url_ios: "https://itunes.apple.com/cn/app/id569387346",
        url_ipad: "https://itunes.apple.com/cn/app/id569388052",
        url_android: "http://mobile.ac.qq.com/apkSet/qqcomic_android_dm2309.apk"
    };
    var _opt = {};
    var downAppTagHead = "event_app_down";
    var appAdUrls = _defaultAppUrls;
    var appAdUrl = _defaultAppUrls.url_android;

    function getDownAppTagHead() {
        return downAppTagHead
    }
    function getAppAdUrls() {
        return appAdUrls
    }

    function getAppAdUrl() {
        return appAdUrl
    }
    function getDownAppTag(pageName) {
        return _opt.downAppTag()
    }
    function getVirtualUrl(_clientType) {
        return _opt.virtualUrl()
    }
    function getVirtualDomain() {
        return _opt.virtualDomain()
    }
    function init(opt) {
        _opt = opt || _defaultOpt;
        var optUrl = {
            url_ios: _opt.iOSAppUrl,
            url_ipad: _opt.iPadAppUrl,
            url_android: _opt.androidAppUrl
        };
        setAdUrls(optUrl);
        _opt.downAppTag && (downAppTagHead = _opt.downAppTag);
        if (typeof _opt.downAppTag != "function") {
            var downAppTag = _opt.downAppTag || "";
            _opt.downAppTag =

            function () {
                return downAppTag
            }
        }
        if (typeof _opt.virtualUrl != "function") {
            var virtualUrl = _opt.virtualUrl || "";
            _opt.virtualUrl = virtualUrl ?
            function () {
                return virtualUrl
            } : _getVirtualUrl
        }
        if (typeof _opt.virtualDomain != "function") {
            var virtualDomain = _opt.virtualDomain || "";
            _opt.virtualDomain = virtualDomain ?
            function () {
                return virtualDomain
            } : _getVirtualDomain
        }
        _opt.withSearch = !! _opt.withSearch;
        if (_opt.reportVisit) reportVisit(_opt.virtualUrl(), _opt.virtualDomain())
    }
    function reportVisit(virtualUrl, virtualDomain) {
        var para = {
            repeatApplay: "true"
        };
        if (virtualUrl) para.virtualURL = virtualUrl;
        virtualDomain = virtualDomain || _opt.virtualDomain();
        if (virtualDomain) para.virtualDomain = virtualDomain;
        window["pgvMain"] && window["pgvMain"](para)
    }
    function reportClick(hotTag, virtualDomain) {
        var para = {};
        para.hottag = hotTag;
        virtualDomain = virtualDomain || _opt.virtualDomain();
        if (virtualDomain) para.virtualDomain = virtualDomain;
        window["pgvSendClick"] && window["pgvSendClick"](para)
    }
    function setAdUrls(urls) {
        if (Object.prototype.toString.call(urls) === "[object Object]") appAdUrls = urls;
        appAdUrl = isIPad ? appAdUrls.url_ipad : isIOS ? appAdUrls.url_ios : appAdUrls.url_android
    }
    function downAppAndReport(_appUrl, _downAppTag) {
        reportClick(_downAppTag || _opt.downAppTag());
        window.setTimeout(function () {
            window.location.href = _appUrl || appAdUrl
        }, 100)
    }
    function _getDownAppTag(pageName) {
        return downAppTagHead + "." + pageName + "." + clientType + "." + os
    }
    function _getVirtualUrl(_clientType) {
        var pathName = getPathName();
        pathName = pathName.split(".")[0];
        if (/\/$/.test(pathName)) pathName += "index";
        var client = _clientType || clientType;
        var search = getSearch();
        return pathName + "/" + client + (_opt.withSearch ? search : "")
    }
    function _getVirtualDomain() {
        return ""
    }
    var pingHelper = {
        getDownAppTagHead: getDownAppTagHead,
        getAppAdUrls: getAppAdUrls,
        getAppAdUrl: getAppAdUrl,
        getDownAppTag: getDownAppTag,
        getVirtualUrl: getVirtualUrl,
        getVirtualDomain: getVirtualDomain,
        init: init,
        reportVisit: reportVisit,
        reportClick: reportClick,
        setAdUrls: setAdUrls,
        downAppAndReport: downAppAndReport
    };
    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i =
            0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor
        }
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function ajax(_options) {
        var options = convertArgs(Array.prototype.slice.call(arguments, 0)),
            ajaxEntity = new AjaxEntity(options);
        window.setTimeout(function () {
                ajaxEntity.send()
            }, 0);
        return ajaxEntity
    }
    var convertArgs = function convertArgs(args) {
        var param = {
            url: "/action/",
            type: "get",
            data: {},
            timeout: 0,
            async: true,
            rawResult: false,
            pathArgs: false,
            success: function success() {},
            error: function error() {}
        },
            _param = null,
            i, p, t;
        if (Object.prototype.toString.call(args[0]) === "[object Object]") {
                _param = args[0];
                for (i in _param) {
                    if (!_param.hasOwnProperty(i)) continue;
                    param[i] = _param[i]
                }
            } else {
                var _prop = ["url", "type", "data", "timeout", "async", "rawResult", "pathArgs", "success", "error"],
                    _type = ["string", "string", "object", "number", "boolean", "boolean", "boolean", "function", "function"];
                for (i = 0;
                    (p = _prop[i]) && (t = _type[i]); i++) {
                        var _t = Object.prototype.toString.call(args[0]);
                        if (_t.replace(/^\[object (.*?)]$/, "$1").toLowerCase() === t) param[p] = args.splice(0, 1)[0]
                    }
            }
        return param
    };
    var AjaxEntity = function () {
        function AjaxEntity(options) {
            _classCallCheck(this, AjaxEntity);
            if (!(this instanceof
            AjaxEntity)) return new AjaxEntity(options);
            var self = this;
            self.options = options;
            self.status = {};
            self.data = options.data
        }
        _createClass(AjaxEntity, [{
            key: "send",
            value: function send(_data) {
                var self = this,
                    options = self.options,
                    status = self.status;
                self.data = _data ? options.data = _data : options.data;
                var xhr = self.createXHR(),
                    undefined = void 0,
                    url = String(options.url),
                    type = String(options.type || options.method).toLowerCase(),
                    async = !! options.async,
                    timeout = parseInt(options.timeout),
                    isGet = type === "get",
                    isPost = type === "post",
                    stamp = "t=" + String((new Date).getTime()),
                    sp = url.indexOf("?") < 0 ? "?" : "&",
                    finalUrl = url + sp + stamp,
                    encodedData = status.encodedData = self.encodeData(),
                    finalData = undefined;
                if (status.completed === false) throw new Error("\u8bf7\u6c42\u5c1a\u672a\u5b8c\u6210\uff0c\u6682\u65f6\u65e0\u6cd5\u518d\u6b21\u8bf7\u6c42");
                status.completed = false;
                if (isGet) finalUrl += "&" + encodedData;
                status.finalUrl = finalUrl;
                status.encodedData = encodedData;
                xhr.open(type.toUpperCase(), finalUrl, async);
                if (isPost) {
                        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                        finalData = encodedData
                    }
                xhr.onreadystatechange = function () {
                        if (xhr.readyState == 4) self._xhrFinish(xhr.status, xhr.responseText)
                    };
                timeout && self._abortTimeout(timeout);
                xhr.send(finalData);
                xhr.async = options.async
            }
        },
        {
            key: "_xhrFinish",
            value: function _xhrFinish(code, res) {
                var self = this,
                    options = self.options,
                    status = self.status;
                if (status.completed) return;
                if (code == 200) {
                        if (!options.rawResult) try {
                            res = JSON.parse(res)
                        } catch (ex) {
                            self._complete(-1001, res, ex);
                            return
                        }
                        self._complete(code, res)
                    } else {
                        var err = new Error("\u56de\u590d\u72b6\u6001\u5f02\u5e38");
                        self._complete(code, res, err)
                    }
            }
        },
        {
            key: "_abortTimeout",
            value: function _abortTimeout(time) {
                var self = this,
                    status = self.status;
                status.abortTimeout = window.setTimeout(function () {
                        delete status.abortTimeout;
                        if (status.completed) return;
                        var err = new Error("\u8bf7\u6c42\u8d85\u65f6");
                        self._complete(-1E3, "", err)
                    }, time)
            }
        },
        {
            key: "_complete",
            value: function _complete(code, res, ex) {
                var self = this,
                    options = self.options,
                    status = self.status,
                    abortTimeout = status.abortTimeout;
                if (status.completed) return;
                status.completed = true;
                abortTimeout && window.clearTimeout(abortTimeout);
                delete status.abortTimeout;
                var success = options.success,
                    error = options.error;
                if (code == 200) success.apply(this, [res]);
                else error.apply(this, [code, res, ex])
            }
        },
        {
            key: "createXHR",
            value: function createXHR() {
                var xhr = null;
                if (window.XMLHttpRequest) {
                    xhr = new XMLHttpRequest;
                    if (xhr.overrideMimeType) xhr.overrideMimeType("text/xml")
                } else if (window.ActiveXObject) try {
                    xhr = new ActiveXObject("Msxml2.XMLHTTP")
                } catch (e$9) {
                    try {
                        xhr = new ActiveXObject("Microsoft.XMLHTTP")
                    } catch (e) {}
                }
                if (!xhr) throw "\u65e0\u6cd5\u521b\u5efaXMLHttpRequest\u5bf9\u8c61";
                return xhr
            }
        },
        {
            key: "encodeData",
            value: function encodeData() {
                var self = this,
                    data = self.data,
                    enJson = window.JSON && JSON.stringify,
                    buffer = [];
                if (data) for (var key in data) {
                        if (!data.hasOwnProperty(key)) continue;
                        var value = data[key];
                        if (enJson && typeof value !== "string") value = enJson(value);
                        value = encodeURIComponent(value);
                        buffer.push(key + "=" + value)
                    }
                return buffer.join("&")
            }
        }]);
        return AjaxEntity
    }();
    var myAjax = {
        ajax: ajax
    };
    var doms = null;

    function callbackPusher(cbs) {
        return {
            or: function or(cb) {
                if (typeof cb !== "function") throw new Error("catch \u5904\u7406\u5fc5\u987b\u662f\u51fd\u6570\uff0c\u7528\u6765\u5904\u7406\u547c\u8d77\u5931\u8d25\u7684\u60c5\u51b5");
                cbs.push(cb);
                return this
            }
        }
    }
    function callCallbacks(cbs) {
        return function () {
            cbs.forEach(function (cb) {
                cb()
            })
        }
    }
    function loadScheme(msgPre, ccb, needUniversal) {
        var msg = msgPre.replace(/{protocol}/, "txcomicout://");
        if (needUniversal && isIOS) {
            var msg2 = msgPre.replace(/{protocol}/, "http://universallink.m.ac.qq.com/");
            commonLoadScheme(msg2);
            setTimeout(function () {
                ccb()
            }, 3E3)
        } else if (clientType == CLIENT.WEIXIN) {
            var callSchemeInWX = function callSchemeInWX() {
                WeixinJSBridge.invoke("launchApplication", {
                    schemeUrl: msg
                }, function (res) {
                    if (res.err_msg == "launchApplication:ok") return;
                    ccb()
                })
            };
            if (window.WeixinJSBridge && typeof WeixinJSBridge.invoke == "function") callSchemeInWX();
            else if (document.addEventListener) document.addEventListener("WeixinJSBridgeReady", callSchemeInWX, false);
            else if (document.attachEvent) {
                document.attachEvent("WeixinJSBridgeReady", callSchemeInWX);
                document.attachEvent("onWeixinJSBridgeReady", callSchemeInWX)
            }
        } else if (clientType == CLIENT.QQ) {
            var onGotApi = function onGotApi() {
                if (isAndroid) mqq.app.isAppInstalled("com.qq.ac.android", function (result) {
                    if (result) commonLoadScheme(msg);
                    else ccb()
                });
                else {
                    mqq.app.launchApp({
                        name: msg
                    });
                    setTimeout(function () {
                        ccb()
                    }, 3E3)
                }
            };
            typeof mqq != "undefined" ? onGotApi() : _parent.func.loadScript("http://pub.idqqimg.com/qqmobile/qqapi.js", onGotApi)
        } else {
            commonLoadScheme(msg);
            setTimeout(function () {
                ccb()
            }, 3E3)
        }
    }
    function commonLoadScheme(msg) {
        var ua = window.navigator.userAgent,
            isMQQBrowser = clientType == CLIENT.QQBROWSER,
            isChrome = (ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/)) && !isMQQBrowser,
            isSafari = ua.match(/Safari\/([\d.]+)\s*$/) && !isMQQBrowser,
            domType = isIOS && isSafari || isAndroid && isChrome ? "A" : "IFRAME",
            total = 10;
        if (!doms) {
                doms = {
                    box: null,
                    lastUsed: 0,
                    list: []
                };
                var box = doms.box = document.createElement("div");
                box.className = "call-client-doms";
                box.style.display = "none";
                document.body.appendChild(box);
                for (var i = 0; i < total; i++) {
                    var dom = document.createElement(domType);
                    doms.list.push(dom);
                    box.appendChild(dom)
                }
            }
        var index = (doms.lastUsed + 1) % total,
            dom = doms.list[index];
        doms.lastUsed = index;
        if (isIOS && isSafari) location.href = msg;
        else if (domType == "A") {
                dom.href = msg;
                dom.click()
            } else dom.src = msg
    }
    var callClient = function (msg, needUniversal) {
        var cbs = [],
            ccb = callCallbacks(cbs);
        setTimeout(function () {
                loadScheme(msg, ccb, needUniversal)
            }, 0);
        return callbackPusher(cbs)
    };
    var UA$1 = window.navigator.userAgent;
    var _VER_NUMBER = 0;
    var ms$1 = /WITH_QQAC_UNIFY_API\/([0-9.]*)/i.exec(UA$1);
    var verStr$1 = ms$1 && ms$1[1];
    if (verStr$1) _VER_NUMBER = Number(verStr$1);
    var VER_NUMBER = _VER_NUMBER;
    var keyList = {};
    var callbackList = {};
    var Pre_Callbacks = {
        unLogin: function unLogin(res) {
            if (window.Dialog) Dialog.alert("\u5f53\u524d\u64cd\u4f5c\u9700\u8981\u767b\u5f55\u624d\u80fd\u6267\u884c\u54e6~~", "\u63d0\u793a", "\u53bb\u767b\u5f55~").then(function () {
                ek.ac.User.Login()
            });
            else {
                alert("\u5f53\u524d\u64cd\u4f5c\u9700\u8981\u767b\u5f55\u624d\u80fd\u6267\u884c\u54e6~~");
                ek.ac.User.Login()
            }
        },
        missApi: function missApi(res) {
            if (window.Dialog) Dialog.alert("\u5f53\u524d\u7248\u672cAPP\u4e0d\u652f\u6301\u6b64\u64cd\u4f5c\uff0c<br>\u8bf7\u66f4\u65b0\u5230\u6700\u65b0\u7248\u817e\u8baf\u52a8\u6f2bAPP<br>iOS\u7528\u6237\u8bf7\u5728App Store\u66f4\u65b0\u54e6~", "\u63d0\u793a", "\u66f4\u65b0\u817e\u8baf\u52a8\u6f2bAPP").then(function () {
                ek.ping.downAppAndReport()
            });
            else {
                alert("\u5f53\u524d\u7248\u672cAPP\u4e0d\u652f\u6301\u6b64\u64cd\u4f5c\n,\u8bf7\u66f4\u65b0\u5230\u6700\u65b0\u7248\u817e\u8baf\u52a8\u6f2bAPP");
                ek.ping.downAppAndReport()
            }
        },
        mistake: function mistake(res) {
            if (window.Dialog) Dialog.alert(res.msg);
            else alert(res.msg)
        },
        discardApi: function discardApi(res) {
            if (window.Dialog) Dialog.alert("\u9875\u9762\u9519\u8befQAQ<br>\u622a\u56fe\u8054\u7cfbQQ\uff1a1931804005\uff1b<br>\u9875\u9762\u7f51\u5740\uff1a" + window.location.href);
            else alert("\u9875\u9762\u9519\u8befQAQ\n\u622a\u56fe\u8054\u7cfbQQ\uff1a1931804005\uff1b\n\u9875\u9762\u7f51\u5740\uff1a" + window.location.href)
        }
    };
    var port = 0;
    var controlList = [];
    var txcomicOut = {
        User: {
            PopUpSignDialog: 2
        },
        Client: {
            CallUpComicDetail: 2,
            CallUpAnimationView: 2,
            CallUpLiveQT: 2,
            CallUpLiveNow: 2,
            CallUpLeagueDetail: 2,
            CallUpTopicInComic: 2,
            CallUpTopicInLeague: 2,
            CallUpTopicInPRPR: 2,
            CallUpCategory: 2,
            CallUpHomeOfGirl: 2,
            CallUpHomeOfRecommend: 2,
            CallUpHomeOfVip: 2,
            CallUpHomeOfAnimation: 2,
            CallUpHomeOfLive: 2,
            CallUpHomeOfBoy: 2,
            CallUpBookshelfOfCollect: 2,
            CallUpBookshelfOfHistory: 2,
            CallUpBookshelfOfDownload: 2,
            CallUpUserMessage: 2,
            CallUpRank: 2,
            CallUpDailyGift: 2,
            CallUpSpecialGift: 2,
            CallUpFriendsGift: 2,
            CallUpComicList: 2,
            CallUpFeedback: 2,
            CallUpComicDownload: 2,
            CallUpTopicDetailOfV: 2,
            CallUpGroundV: 2,
            CallUpGroundFollow: 2,
            CallUpCooperationWangZhe: 2,
            CallUpComicViewContinue: 2,
            CallUpComicViewChapter: 2
        },
        WebView: {
            OpenUrl: 2
        }
    };
    if (isIOSApp) {
        var iframes = {
            box: null,
            lastUsed: 0,
            list: []
        };
        var total = 10;
        var createIframes = function createIframes() {
            if (iframes.box) return;
            var box = document.createElement("div");
            iframes.box = box;
            box.className = "call-client-iframes";
            box.style.display = "none";
            document.body.appendChild(box);
            for (var i = 0; i < total; i++) {
                var iframe = document.createElement("IFRAME");
                iframes.list.push(iframe);
                box.appendChild(iframe)
            }
        };
        document.addEventListener("DOMContentLoaded", createIframes, false);
        var callClientForiOS = function callClientForiOS(href, port) {
            if (!iframes.box) createIframes();
            for (var i = 0; i < total; i++) if (!iframes.list[i].src || iframes.list[i].getAttribute("data-use") == "true") {
                iframes.list[i].src = href;
                iframes.list[i].setAttribute("data-port", port);
                iframes.list[i].setAttribute("data-use", "false");
                return false
            }
        }
    }
    function acOutput(msg, detail) {
        var output = {};
        output['<span style="color: #1a83a6">[ac-api v-' + VER_NUMBER + "]</span>"] = msg;
        output.detail = detail;
        console.log(output)
    }
    function reportClick$1(className, methodName, type) {
        reportClick("acApi." + className + "." + methodName + "." + type, window.location.host)
    }
    function setInterface(obj) {
        var className = obj.className;
        var methodName = obj.methodName;
        var params = obj.params;
        var callback = obj.callback;
        var paramsType = obj.paramsType;
        var business = obj.business;
        if (!className) {
            console.error("convertInterface\u8f6c\u6362\u51fd\u6570\u7f3a\u5c11Method\u540d\u5b57\u6216\u7c7b\u578b\u9519\u8bef");
            return false
        }
        if (!methodName) {
            console.error("convertInterface\u8f6c\u6362\u51fd\u6570\u7f3a\u5c11Method\u540d\u5b57\u6216\u7c7b\u578b\u9519\u8bef");
            return false
        }
        if (!params) {
            params = {};
            console.warn("\u6ce8\u610f\uff0c\u8c03\u7528\u4e86" + className + "." + methodName + "\u65b9\u6cd5\uff0c\u6ca1\u6709\u4f20\u9012\u53c2\u6570")
        } else if (typeof params == "function") {
            callback =
            params;
            params = {};
            console.warn("\u6ce8\u610f\uff0c\u8c03\u7528\u4e86" + className + "." + methodName + "\u65b9\u6cd5\uff0c\u6ca1\u6709\u4f20\u9012\u53c2\u6570")
        } else if (Object.prototype.toString.call(params) != "[object Object]") {
            console.error("params\u53c2\u6570\u5fc5\u987b\u662f\u5bf9\u8c61\u7c7b\u578b");
            return false
        }
        if (!callback) console.warn("\u6ce8\u610f\uff0c\u8c03\u7528\u4e86" + className + "." + methodName + "\u65b9\u6cd5\uff0c\u6ca1\u6709\u4f20\u9012\u56de\u8c03\u51fd\u6570");
        else if (typeof callback != "function") {
            console.error("\u56de\u8c03\u51fd\u6570\u4e0d\u662ffunction\u7c7b\u578b\uff0c\u7c7b\u578b\u4f20\u9012\u51fa\u9519");
            return false
        }
        if (business) params.business = business;
        port++;
        controlList[port] = {
            callback: callback ||
            function () {
                console.warn("\u5f53\u524d\u5e8f\u53f7\u4e3a" + port + "\u7684\u63a5\u53e3\u6ca1\u6709\u4f20\u5165\u56de\u8c03\u51fd\u6570")
            },
            interfaceName: className + "|" + methodName
        };
        var paramsStr = "";
        var reg = /callback_\w*/;
        if (paramsType == "json") {
            params._UserLoginInfo = true;
            params._DeviceInfo = true;
            params.keyList = keyList;
            paramsStr = "params=" + encodeURIComponent(JSON.stringify(params))
        } else {
            for (var i in params) if (i) if ((i == "callback" || reg.test(i)) && typeof params[i] == "function") {
                var callbackName = i.split("callback")[1] || "";
                callbackList[className + "_" + methodName + "_" + port + callbackName] = params[i];
                paramsStr = paramsStr + "&" + i + "=" + encodeURIComponent("ek.ac.callbackList." + className + "_" + methodName + "_" + port + callbackName)
            } else paramsStr = paramsStr + "&" + i + "=" + encodeURIComponent(params[i]);
            paramsStr = paramsStr.substring(1)
        }
        function consoleTxcomic(appType, interfaceType) {
            acOutput("\u8c03\u7528 " + className + "|" + methodName + " - " + port, {
                send: interfaceType + "://" + className + ":" + port + "/" + methodName + "?" + decodeURIComponent(paramsStr)
            })
        }
        if (isAndroidApp) {
            reportClick$1(className, methodName, "in");
            if (VER_NUMBER >= 2) {
                consoleTxcomic("Android", "txcomicin");
                window.prompt("txcomicin://" + className + ":" + port + "/" + methodName + "?" + paramsStr)
            } else if (VER_NUMBER == 1) {
                consoleTxcomic("Android", "txcomic");
                window.prompt("txcomic://" + className + ":" + port + "/" + methodName + "?" + paramsStr)
            }
            return {
                or: function or() {}
            }
        } else if (isIOSApp) {
            reportClick$1(className, methodName, "in");
            if (VER_NUMBER >= 2) {
                consoleTxcomic("iOS", "txcomicin");
                callClientForiOS("txcomicin://" + className + ":" + port + "/" + methodName + "?" + paramsStr, port)
            } else if (VER_NUMBER == 1) {
                consoleTxcomic("iOS", "txcomic");
                callClientForiOS("txcomic://" + className + ":" + port + "/" + methodName + "?" + paramsStr, port)
            }
            return {
                or: function or() {}
            }
        } else {
            reportClick$1(className, methodName, "out");
            if (txcomicOut[className] && txcomicOut[className][methodName] == 2) {
                consoleTxcomic("\u5916\u90e8\u63a5\u53e3", "txcomicout");
                return callClient("{protocol}" + className + ":" + port + "/" + methodName + "?" + paramsStr, false)
            } else console.warn("\u6b64\u63a5\u53e3:" + className + "." + methodName + "\u6ca1\u6709\u5916\u90e8\u63a5\u53e3")
        }
    }
    var inform$1 = function inform$$1(port, res, resDes) {
        resDes = resDes || {};
        acOutput("\u56de\u8c03 " + controlList[port]["interfaceName"] + " - " + port, {
            res: res,
            resDes: resDes
        });
        var iframe = document.querySelector('iframe[data-port="' + port + '"]');
        if (iframe) iframe.setAttribute("data-use", "true");
        if (resDes.from_server) controlList[port]["callback"].call(this, res);
        else if (res.status == 1) controlList[port]["callback"].call(this, res);
        else if (res.status == 2) {
            console.log("debugger-keyList:" + JSON.stringify(controlList));
            if (res.data && res.data.key) keyList[controlList[port]["interfaceName"]] = res.data.key;
            controlList[port]["callback"].call(this, res)
        } else if (res.status == -99) Pre_Callbacks.unLogin.call(this, res);
        else if (res.status == -2) Pre_Callbacks.missApi.call(this, res);
        else if (res.status == -1) Pre_Callbacks.mistake.call(this, res);
        else if (res.status == -3) Pre_Callbacks.discardApi.call(this, res)
    };

    function registerInterface(name, business) {
        return {
            User: function User(params, callback) {
                return setInterface({
                    className: "User",
                    methodName: name,
                    params: params,
                    callback: callback,
                    business: business
                })
            },
            Client: function Client(params, callback) {
                return setInterface({
                    className: "Client",
                    methodName: name,
                    params: params,
                    callback: callback,
                    business: business
                })
            },
            Pay: function Pay(params, callback) {
                return setInterface({
                    className: "Pay",
                    methodName: name,
                    params: params,
                    callback: callback,
                    business: business
                })
            },
            Share: function Share(params, callback) {
                return setInterface({
                    className: "Share",
                    methodName: name,
                    params: params,
                    callback: callback,
                    business: business
                })
            },
            WebView: function WebView(params, callback) {
                return setInterface({
                    className: "WebView",
                    methodName: name,
                    params: params,
                    callback: callback,
                    business: business
                })
            },
            Connect: function Connect(params, callback) {
                return setInterface({
                    className: "Connect",
                    methodName: name,
                    params: params,
                    callback: callback,
                    paramsType: "json",
                    business: business
                })
            },
            Device: function Device(params, callback) {
                return setInterface({
                    className: "Device",
                    methodName: name,
                    params: params,
                    callback: callback,
                    business: business
                })
            },
            Business: function Business(params, callback) {
                return setInterface({
                    className: "Business",
                    methodName: name,
                    params: params,
                    callback: callback,
                    paramsType: "json"
                })
            }
        }
    }
    function sample(params, callback) {}
    function interfaceLowerCase(name) {
        var name_start = name.charAt(0);
        var name_content = name.substring(1);
        return name_start.toLowerCase() + name_content
    }
    var User = {
        HasLogin: sample,
        Login: sample,
        UserCenter: sample,
        HasReadComic: sample,
        HasWatchAnimation: sample,
        HasSign: sample,
        HasCommentInComic: sample,
        HasCommentInLeague: sample,
        HasCommentInPRPR: sample,
        HasTopicInComic: sample,
        HasTopicInLeague: sample,
        HasWatchLive: sample,
        HasShareComic: sample,
        HasFollowLeague: sample,
        HasCollect: sample,
        AddCollect: sample,
        RemoveCollect: sample,
        GetReadDuration: sample,
        PopUpSignDialog: sample,
        AddTopicInComic: sample,
        AddTopicInLeague: sample,
        SendGiftOfReadTicket: sample,
        ComicListOnWait: sample,
        TodayTask: sample,
        ComicMonthTicketDetail: sample
    };
    for (var i$1 in User) {
        User[i$1] = registerInterface(i$1)["User"];
        User[interfaceLowerCase(i$1)] = registerInterface(i$1)["User"]
    }
    var Client = {
        CallUpComicDetail: sample,
        CallUpComicDetail_1: sample,
        CallUpComicViewChapter: sample,
        CallUpComicViewContinue: sample,
        CallUpAnimationView: sample,
        CallUpLiveQT: sample,
        CallUpLiveNow: sample,
        CallUpLeagueDetail: sample,
        CallUpTopicInComic: sample,
        CallUpTopicInLeague: sample,
        CallUpTopicInPRPR: sample,
        CallUpCategory: sample,
        CallUpHomeOfGirl: sample,
        CallUpHomeOfRecommend: sample,
        CallUpHomeOfVip: sample,
        CallUpHomeOfAnimation: sample,
        CallUpHomeOfLive: sample,
        CallUpHomeOfBoy: sample,
        CallUpBookshelfOfCollect: sample,
        CallUpBookshelfOfHistory: sample,
        CallUpBookshelfOfDownload: sample,
        CallUpUserMessage: sample,
        CallUpRank: sample,
        CallUpDailyGift: sample,
        CallUpSpecialGift: sample,
        CallUpFriendsGift: sample,
        CallUpComicList: sample,
        CallUpFeedback: sample,
        CallUpComicDownload: sample,
        CallUpCooperationWangZhe: sample,
        CallUpTopicDetailOfV: sample,
        CallUpGroundV: sample,
        CallUpGroundFollow: sample
    };
    for (var _i in Client) {
        Client[_i] = registerInterface(_i)["Client"];
        Client[interfaceLowerCase(_i)] =
        registerInterface(_i)["Client"]
    }
    var Pay = {
        VipPage: sample,
        PointTicketPage: sample,
        ReadBagPage: sample,
        MonthPage: sample,
        VipDialog: sample,
        PointTicketDialog: sample,
        ReadBagDialog: sample,
        MonthDialog: sample,
        ReadTicketPage: sample,
        CoinPage: sample,
        MonthTicketPage: sample,
        CoinDialog: sample
    };
    for (var _i2 in Pay) {
        Pay[_i2] = registerInterface(_i2)["Pay"];
        Pay[interfaceLowerCase(_i2)] = registerInterface(_i2)["Pay"]
    }
    var Share = {
        SetConfig: sample,
        PopUp: sample
    };
    for (var _i3 in Share) {
        Share[_i3] = registerInterface(_i3)["Share"];
        Share[interfaceLowerCase(_i3)] = registerInterface(_i3)["Share"]
    }
    var WebView = {
        PopTopBar: sample,
        PopNativeEditor: sample,
        ChangeOrientation: sample,
        OpenUrl: sample,
        Close: sample,
        Back: sample,
        SupportList: sample,
        Update: sample,
        SetAppearConfig: sample,
        SetActiveConfig: sample,
        Toast: sample
    };
    for (var _i4 in WebView) {
        WebView[_i4] = registerInterface(_i4)["WebView"];
        WebView[interfaceLowerCase(_i4)] = registerInterface(_i4)["WebView"]
    }
    var Connect = {
        Get: sample,
        Post: sample
    };
    for (var _i5 in Connect) {
        Connect[_i5] = registerInterface(_i5)["Connect"];
        Connect[interfaceLowerCase(_i5)] = registerInterface(_i5)["Connect"]
    }
    var Device = {
        GetDeviceConfig: sample
    };
    for (var _i6 in Device) {
        Device[_i6] = registerInterface(_i6)["Device"];
        Device[interfaceLowerCase(_i6)] = registerInterface(_i6)["Device"]
    }
    var Business = {
        TodayTaskReadComic: sample,
        TodayTaskShareComic: sample,
        TodayTaskGroundVAddLike: sample,
        TodayTaskWatchAnimation: sample,
        TodayTaskHomeGirlAddLike: sample,
        TodayTaskHomeBoyAddLike: sample
    };
    for (var _i7 in Business) {
        Business[_i7] = registerInterface(_i7)["Business"];
        Business[interfaceLowerCase(_i7)] = registerInterface(_i7)["Business"]
    }
    Business.TodayTaskShareComic = registerInterface("CallUpBookshelfOfCollect", "TodayTask")["Client"];
    Business.TodayTaskGroundVAddLike = registerInterface("CallUpGroundV", "TodayTask")["Client"];
    Business.TodayTaskWatchAnimation = registerInterface("CallUpHomeOfAnimation", "TodayTask")["Client"];
    Business.TodayTaskHomeGirlAddLike = registerInterface("CallUpHomeOfGirl", "TodayTask")["Client"];
    Business.TodayTaskHomeBoyAddLike = registerInterface("CallUpHomeOfBoy", "TodayTask")["Client"];
    var acApp = {
        VER_NUMBER: VER_NUMBER,
        keyList: keyList,
        callbackList: callbackList,
        Pre_Callbacks: Pre_Callbacks,
        txcomicOut: txcomicOut,
        inform: inform$1,
        User: User,
        Client: Client,
        Pay: Pay,
        Share: Share,
        WebView: WebView,
        Connect: Connect,
        Device: Device,
        Business: Business
    };
    var inform$$1 = inform$1;
    var CB = {
        callback2string: function callback2string(callback, keepAfterExec) {
            return anonymousCallbackExposer.expose(callback, keepAfterExec)
        },
        string2callback: function string2callback(func) {
            if (typeof func == "string") func = func.anonymousCallbackExposer.parse(func);
            return func
        },
        string2obj: function string2obj(obj) {
            if (typeof obj == "string") obj = JSON.parse(obj || "{}");
            return obj
        },
        parseCallbackRes: function parseCallbackRes(callback) {
            return function (res) {
                res = CB.string2obj(res);
                callback(res)
            }
        }
    };
    var _prompt = function () {
        if (isAndroidApp) return function (params, forceAsync) {
            var callback = params.callback;
            if (forceAsync) {
                delete params.callback;
                var res = window["prompt"](JSON.stringify(params));
                res = CB.string2obj(res);
                callback(res);
                return null
            } else {
                params.callback =
                CB.callback2string(function (res) {
                    res = CB.string2obj(res);
                    callback = CB.string2callback(callback);
                    callback.apply(params, arguments)
                });
                return window["prompt"](JSON.stringify(params))
            }
        };
        else if (isIOSApp) {
            var iframes = {
                box: null,
                lastUsed: 0,
                list: []
            };
            var total = 10,
                createIframes = function createIframes() {
                    if (iframes.box) return;
                    var box = document.createElement("div");
                    box.className = "call-client-iframes";
                    box.style.display = "none";
                    document.body.appendChild(box);
                    for (var i = 0; i < total; i++) {
                        var iframe = document.createElement("IFRAME");
                        iframes.list.push(iframe);
                        box.appendChild(iframe)
                    }
                    iframes.box = box
                };
            document.addEventListener("DOMContentLoaded", createIframes, false);
            return window["callClient"] = function (params, forceAsync) {
                    if (!iframes.box) if (document.body) createIframes();
                    else {
                        var args = [].slice.call(arguments, 0);
                        window.setTimeout(function () {
                            window["callClient"].apply(window, args)
                        }, 100);
                        return
                    }
                    if (typeof params.callback == "function") params.callback = CB.callback2string(params.callback);
                    var url = "callClient://".toLowerCase() + encodeURIComponent(JSON.stringify(params));
                    var index = (iframes.lastUsed + 1) % total;
                    iframes.list[index].src = url;
                    iframes.lastUsed = index
                }
        } else return function () {
            console.log("_prompt: (%s)", JSON.stringify(Array.prototype.slice.call(arguments, 0)))
        }
    }();
    window["_prompt"] = _prompt;

    function isAppLogin(_callback) {
        var json = {
            "interface": "isLogin",
            "callback": function callback(response) {
                var obj = response;
                obj = CB.string2obj(obj);
                _callback = CB.string2callback(_callback);
                if (obj && obj.ret == 1) _callback(obj);
                else {
                    console.warn("[isLogin] result: ", response);
                    _callback(null)
                }
            }
        };
        _prompt(json, true)
    }
    function appLogin(callback) {
        var json = {
            "interface": "appLogin",
            "callback": callback
        };
        if (isAndroidApp) {
            json.callback = function (response) {
                var obj = response;
                obj = CB.string2obj(obj);
                callback = CB.string2callback(callback);
                if (obj && obj.ret == 1) isAppLogin(callback);
                else callback(null)
            };
            var obj = _prompt(json);
            obj = CB.string2obj(obj);
            if (obj && obj.ret == 1) isAppLogin(callback)
        } else _prompt(json)
    }
    function appRelogin(loginShowType, _callback2) {
        if (arguments.length == 1) {
            _callback2 = arguments[0];
            loginShowType =
            1
        }
        var json = {
            "interface": "app_relogin",
            "login_show_type": loginShowType,
            "callback": function callback(response) {
                console.log("app_relogin callback: ", response);
                var obj = response;
                obj = CB.string2obj(obj);
                _callback2 = CB.string2callback(_callback2);
                if (obj && obj.ret == 1) isAppLogin(_callback2);
                else _callback2(null)
            }
        };
        console.log("app_relogin prompt: ", json);
        _prompt(json)
    }
    function goComicDetail(comicId) {
        if (!comicId) return;
        var json = {
            "interface": "goComicDetail",
            "data": {
                id: comicId
            }
        };
        _prompt(json)
    }
    function goUserCenter() {
        if (isIOS || isAndroid && appVer >= 5.2) {
            var json = {
                "interface": "goUserCenter",
                "data": {}
            };
            _prompt(json)
        } else console.error("\u6b64\u7248\u672c\u6682\u4e0d\u652f\u6301 goUserCenter \u63a5\u53e3")
    }
    function goVisitorCenter(uin) {
        if (isIOS || isAndroid && appVer >= 5.3) {
            var json = {
                "interface": "goVisitorCenter",
                "data": {
                    uin: uin
                }
            };
            _prompt(json, true)
        } else console.error("\u6b64\u7248\u672c\u6682\u4e0d\u652f\u6301 goVisitorCenter \u63a5\u53e3")
    }
    function refreshUserCenter() {
        if (isIOS || isAndroid && appVer >= 5.5) {
            var json = {
                "interface": "refreshUserCenter",
                "data": {}
            };
            _prompt(json)
        } else console.error("\u6b64\u7248\u672c\u6682\u4e0d\u652f\u6301 refreshUserCenter \u63a5\u53e3")
    }
    function goGround() {
        if (isIOS || isAndroid && appVer >= 5.4) {
            var json = {
                "interface": "goGround",
                "data": {}
            };
            _prompt(json)
        } else console.error("\u6b64\u7248\u672c\u6682\u4e0d\u652f\u6301 goGround \u63a5\u53e3")
    }
    function goHistory() {
        if (isIOS || isAndroid && appVer >= 5.4) {
            var json = {
                "interface": "goHistory",
                "data": {}
            };
            _prompt(json)
        } else console.error("\u6b64\u7248\u672c\u6682\u4e0d\u652f\u6301 goHistory \u63a5\u53e3")
    }

    function goHomePage() {
        if (isIOS || isAndroid && appVer >= 6.3) {
            var json = {
                "interface": "goHomePage",
                "data": {}
            };
            _prompt(json)
        } else console.error("\u6b64\u7248\u672c\u6682\u4e0d\u652f\u6301 goHomePage \u63a5\u53e3")
    }
    function goAnimationList() {
        if (isIOS || isAndroid && appVer >= 6.3) {
            var json = {
                "interface": "goAnimationList",
                "data": {}
            };
            _prompt(json)
        } else console.error("\u6b64\u7248\u672c\u6682\u4e0d\u652f\u6301 goAnimationList \u63a5\u53e3")
    }
    function goSignin() {
        if (isIOS || isAndroid && appVer >= 6.3) {
            var json = {
                "interface": "goSignin",
                "data": {}
            };
            _prompt(json)
        } else console.error("\u6b64\u7248\u672c\u6682\u4e0d\u652f\u6301 goSignin \u63a5\u53e3")
    }
    function goTopicDetail(id, topicId) {
        if (isIOS || isAndroid && appVer >= 5.4) {
            if (arguments.length == 1) {
                topicId = arguments[0];
                id = null
            }
            var json = {
                "interface": "goTopicDetail",
                "data": {
                    id: id,
                    topic_id: topicId
                }
            };
            _prompt(json)
        } else console.error("\u6b64\u7248\u672c\u6682\u4e0d\u652f\u6301 goTopicDetail \u63a5\u53e3")
    }
    function goLeague(leagueId) {
        if (isIOS || isAndroid && appVer >= 6.1) {
            var json = {
                "interface": "goLeague",
                "data": {
                    league_id: leagueId
                }
            };
            _prompt(json)
        } else console.error("\u6b64\u7248\u672c\u6682\u4e0d\u652f\u6301 goLeague \u63a5\u53e3")
    }
    function collectComic(comicId, title, coverUrl, latedSeqno, callback) {
        if (!comicId || !title || !coverUrl) return;
        if (isIOS || isAndroid && appVer >= 5.2) {
            var json = {
                "interface": "collectComic",
                "callback": CB.parseCallbackRes(callback),
                "data": {
                    comic_id: comicId,
                    title: title,
                    cover_url: coverUrl,
                    lated_seqno: latedSeqno
                }
            };
            _prompt(json, true)
        }
    }
    function isComicCollected(comicId, callback) {
        if (!comicId) return;
        if (isIOS || isAndroid && appVer >= 5.2) {
            var json = {
                "interface": "isComicCollected",
                "callback": CB.parseCallbackRes(callback),
                "data": {
                    comic_id: comicId
                }
            };
            _prompt(json, true)
        }
    }
    function cancelComicCollected(comicId, callback) {
        if (!comicId) return;
        if (isIOS || isAndroid && appVer >= 5.2) {
            var json = {
                "interface": "cancelComicCollected",
                "callback": CB.parseCallbackRes(callback),
                "data": {
                    comic_id: comicId
                }
            };
            _prompt(json, true)
        }
    }
    function getReadHistory(comicId, callback) {
        if (!comicId) return;
        if (isIOS || isAndroid && appVer >= 5.2) {
            var json = {
                "interface": "getReadHistory",
                "callback": CB.parseCallbackRes(callback),
                "data": {
                    comic_id: comicId
                }
            };
            _prompt(json, true)
        }
    }
    function setReadHistory(comicId, title, coverUrl, cid, seq, callback) {
        if (!comicId) return;
        if (isIOS || isAndroid && appVer >= 5.2) {
            var json = {
                "interface": "setReadHistory",
                "callback": CB.parseCallbackRes(callback),
                "data": {
                    comic_id: comicId,
                    title: title,
                    cover_url: coverUrl,
                    chapter_id: cid,
                    seq_no: seq
                }
            };
            _prompt(json, true)
        }
    }
    function vipPay(month, aid) {
        month = month === undefined ? "" : month;
        aid = aid === undefined ? "h5_app_pay" : aid;
        var json = {
            "interface": "payVip",
            "data": {
                month: month,
                aid: aid
            }
        };
        _prompt(json)
    }
    function share(params) {
        var callback = params.callback;
        if (typeof callback == "function") callback = CB.callback2string(callback, true);
        var json = {
            "interface": "appShare",
            "callback": callback || "",
            "data": {
                "imgurl": params.imgurl,
                "title": params.title,
                "content": params.content,
                "pageurl": params.pageurl
            }
        };
        _prompt(json)
    }
    function setShareInfo(params) {
        if (isIOS || isAndroid && appVer >= 5.1) window.setTimeout(function () {
            var callback = params.callback;
            if (typeof callback == "function") callback = CB.callback2string(callback, true);
            var json = {
                "interface": "setShareInfo",
                "callback": callback || "",
                "data": {
                    "imgurl": params.imgurl,
                    "title": params.title,
                    "content": params.content,
                    "pageurl": params.pageurl
                }
            };
            _prompt(json)
        }, 100)
    }
    function deviceInfo(callback) {
        var json = {
            "interface": "device_info",
            "callback": CB.parseCallbackRes(callback)
        };
        _prompt(json, true)
    }
    function getAppNetWorkState(_callback3) {
        var json = {
            "interface": "getAppNetWorkState",
            "callback": function callback(getAppNetWorkState) {
                var obj =
                getAppNetWorkState;
                obj = CB.string2obj(obj);
                _callback3(obj)
            }
        };
        _prompt(json, true)
    }
    function webFinish() {
        var json = {
            "interface": "web_finish"
        };
        _prompt(json)
    }
    function goMidasDq(dq, canChange, pf, callback) {
        if (isIOS || isAndroid && appVer >= 5.4) {
            if (typeof pf === "function") {
                callback = pf;
                pf = null
            }
            pf = pf || "20120321";
            var json = {
                "interface": "goMidasDq",
                "callback": callback,
                "data": {
                    dq: dq,
                    pf: pf,
                    canChange: canChange
                }
            };
            _prompt(json)
        }
    }
    function goMidasVIP(month, aid, callback) {
        if (isIOS || isAndroid && appVer >= 5.4) {
            var productId = {
                1: "MHVIPD1",
                3: "MHVIPB3",
                6: "MHVIPC6",
                12: "MHVIPA12"
            }[month];
            if (!productId) throw new Error("\u5f00\u901a\u6708\u4efd\u6570\u6709\u8bef\uff0c\u4e0d\u80fd\u4e3a " + month);
            var json = {
                "interface": "goMidasVIP",
                "callback": callback,
                "data": {
                    productId: productId,
                    aid: aid
                }
            };
            _prompt(json)
        }
    }
    function goMidasVIPList(aid, callback) {
        if (isIOS || isAndroid && appVer >= 5.4) {
            var json = {
                "interface": "goMidasVIPList",
                "callback": callback,
                "data": {
                    aid: aid
                }
            };
            _prompt(json)
        }
    }
    function readBagPage(pf, callback) {
        if (arguments.length == 1) {
            callback = arguments[0];
            pf = ""
        }
        if (isIOS || isAndroid && appVer >= 6.2) {
            var json = {
                "interface": "read_bag_page",
                "callback": callback,
                "data": {
                    "pf": pf
                }
            };
            _prompt(json)
        }
    }
    function readBagPurchase(pf, readBagId, callback) {
        if (arguments.length == 2) {
            callback = arguments[1];
            readBagId = arguments[0];
            pf = ""
        }
        if (isIOS || isAndroid && appVer >= 6.2) {
            var json = {
                "interface": "read_bag_purchase",
                "callback": callback,
                "data": {
                    "pf": pf,
                    "read_bag_id": readBagId
                }
            };
            _prompt(json)
        }
    }
    function changeOrientation(screenType, callback) {
        if (isIOS || isAndroid && appVer >= 6.2) {
            var json = {
                "interface": "event_orientation",
                "data": {
                    screen_type: screenType
                },
                "callback": callback || ""
            };
            _prompt(json)
        }
    }
    function nativeEditor(visibleType, callback) {
        if (isIOS || isAndroid && appVer >= 6.2) {
            if (typeof callback == "function") callback = CB.callback2string(callback, true);
            var json = {
                "interface": "event_editor",
                "data": {
                    "visible_type": visibleType
                },
                "callback": callback || ""
            };
            _prompt(json)
        }
    }
    function setTopBarState(visibleType, callback) {
        if (isIOS || isAndroid && appVer >= 6.2) {
            var json = {
                "interface": "event_topBarState",
                "data": {
                    "visible_type": visibleType
                },
                "callback": callback || ""
            };
            _prompt(json)
        }
    }
    function dqIap(dq, callback) {
        if (isIOS) {
            var json = {
                "interface": "dqIap",
                "callback": CB.parseCallbackRes(callback),
                "data": {
                    dq: dq
                }
            };
            _prompt(json)
        }
    }
    function readBagIap(readBagId, isVip, callback) {
        if (isIOS) {
            isVip = isVip === undefined ? 0 : isVip;
            var priceList = {
                1010: [1, 1],
                8040: [8, 6]
            };
            var json = {
                "interface": "readBagIap",
                "callback": CB.parseCallbackRes(callback),
                "data": {
                    read_bag_price: priceList[readBagId][isVip],
                    read_bag_id: readBagId
                }
            };
            _prompt(json)
        }
    }
    function payVipIap(month, callback) {
        if (isIOS) {
            var json = {
                "interface": "payVipIap",
                "callback": CB.parseCallbackRes(callback),
                "data": {
                    month: month
                }
            };
            _prompt(json)
        }
    }
    var appPlus = {
        isAppLogin: isAppLogin,
        appRelogin: appRelogin,
        getAppNetWorkState: getAppNetWorkState,
        inform: inform$$1,
        appLogin: appLogin,
        goComicDetail: goComicDetail,
        goUserCenter: goUserCenter,
        goVisitorCenter: goVisitorCenter,
        refreshUserCenter: refreshUserCenter,
        goGround: goGround,
        goHistory: goHistory,
        goHomePage: goHomePage,
        goAnimationList: goAnimationList,
        goSignin: goSignin,
        goTopicDetail: goTopicDetail,
        goLeague: goLeague,
        collectComic: collectComic,
        isComicCollected: isComicCollected,
        cancelComicCollected: cancelComicCollected,
        getReadHistory: getReadHistory,
        setReadHistory: setReadHistory,
        vipPay: vipPay,
        share: share,
        setShareInfo: setShareInfo,
        deviceInfo: deviceInfo,
        webFinish: webFinish,
        goMidasDq: goMidasDq,
        goMidasVIP: goMidasVIP,
        goMidasVIPList: goMidasVIPList,
        readBagPage: readBagPage,
        readBagPurchase: readBagPurchase,
        changeOrientation: changeOrientation,
        nativeEditor: nativeEditor,
        setTopBarState: setTopBarState,
        dqIap: dqIap,
        readBagIap: readBagIap,
        payVipIap: payVipIap
    };
    var shareConfig = window["shareConfig"] || {
        img_url: "http://ac.gtimg.com/h5_phone/logo-app_54661c9c1c4b5bfb.png",
        title: document.title || "\u7cbe\u5f69\u6761\u6f2b - \u817e\u8baf\u52a8\u6f2b",
        desc: "\u4e2d\u56fd\u6700\u5927\u6700\u6743\u5a01\u7684\u6b63\u7248\u52a8\u6f2b\u7f51\u7ad9",
        link: window.location.href,
        callback: function callback(res) {
            console.log("onAppShare: ", res)
        }
    };

    function setShare(_shareConfig) {
        if (Object.prototype.toString.call(arguments[0]) === "[object Object]") for (var k in _shareConfig) {
            if (_shareConfig.hasOwnProperty(k)) shareConfig[k] = _shareConfig[k]
        } else if (typeof arguments[0] === "string" && arguments[1]) {
            var key = arguments[0],
                value = arguments[1];
            shareConfig && (shareConfig[key] = value)
        }
        setQQShare();
        setWxShare();
        setQQBrowserShare();
        if (isApp) setAppShare()
    }
    function readMeta(itemProp) {
        return document.querySelector('meta[itemprop="' + itemProp + '"]').getAttribute("content")
    }
    function appShare(cb) {
        var _callback = shareConfig.callback;
        if (VER_NUMBER > 0) Share.PopUp();
        else share({
            "imgurl": shareConfig.img_url,
            "title": shareConfig.title,
            "content": shareConfig.desc,
            "pageurl": shareConfig.link,
            "callback": function callback(res) {
                if (typeof _callback == "string") {
                    var name = _callback.replace(/^window\./i, "");
                    _callback = window[name]
                }
                if (typeof _callback == "function") _callback(res);
                cb && cb(res)
            }
        })
    }
    function setAppShare() {
        if (VER_NUMBER > 0) Share.SetConfig({
            "imgurl": shareConfig.img_url,
            "title": shareConfig.title,
            "content": shareConfig.desc,
            "pageurl": shareConfig.link,
            "callback": shareConfig.callback
        });
        else setShareInfo({
            "imgurl": shareConfig.img_url,
            "title": shareConfig.title,
            "content": shareConfig.desc,
            "pageurl": shareConfig.link,
            "callback": shareConfig.callback
        })
    }
    var wxShareContent = {};

    function setWxShare() {
        var callback = shareConfig.callback;
        callback = typeof callback === "string" ? window[callback] : callback;
        callback = typeof callback === "function" ? callback : null;
        wxShareContent = {
            "img_url": shareConfig.img_url,
            "img_width": 120,
            "img_height": 120,
            "link": shareConfig.link,
            "desc": shareConfig.desc,
            "title": shareConfig.title,
            "title_raw": shareConfig.title,
            "callback": callback
        };
        var _share = function _share() {
            try {
                WeixinJSBridge.on("menu:share:timeline", function (argv) {
                    var shareContent = wxShareContent,
                        callback = shareContent.callback;
                    shareContent.title = shareConfig.title_timeline || shareContent.title;
                    WeixinJSBridge.invoke("shareTimeline", shareContent, function (res) {
                            callback && callback(res)
                        })
                });
                WeixinJSBridge.on("menu:share:appmessage", function (argv) {
                    var shareContent = wxShareContent,
                        callback = shareContent.callback;
                    shareContent.title = shareConfig.title_raw || shareContent.title;
                    WeixinJSBridge.invoke("sendAppMessage", shareContent, function (res) {
                            callback && callback(res)
                        })
                })
            } catch (e) {}
        };
        if (window.WeixinJSBridge && typeof WeixinJSBridge.invoke == "function") _share();
        else if (document.addEventListener) document.addEventListener("WeixinJSBridgeReady", _share, false);
        else if (document.attachEvent) {
            document.attachEvent("WeixinJSBridgeReady", _share);
            document.attachEvent("onWeixinJSBridgeReady", _share)
        }
    }
    function setQQShare() {
        if (clientType !== CLIENT.QQ) return;
        var callback = shareConfig.callback;
        callback = typeof callback === "string" ? window[callback] : callback;
        callback = typeof callback === "function" ? callback : null;
        _setQQShare2({
            "share_url": shareConfig.link,
            "title": shareConfig.title,
            "desc": shareConfig.desc,
            "image_url": shareConfig.img_url
        }, callback)
    }
    var _setQQShare2 = function _setQQShare() {
        _setQQShare2.cache = arguments
    };
    if (clientType === CLIENT.QQ) {
        var onGotApi = function onGotApi() {
            var cache = _setQQShare2.cache,
                mqqData = window["mqq"] && window["mqq"].data,
                setShare = mqqData && mqqData.setShareInfo;
            cache && setShare.apply(setShare || window, cache);
            _setQQShare2 = setShare
        };
        typeof mqq != "undefined" ? onGotApi() : loadScript("http://pub.idqqimg.com/qqmobile/qqapi.js", onGotApi)
    }
    function setQQBrowserShare() {
        if (clientType !== CLIENT.QQBROWSER) return;
        var callback = shareConfig.callback;
        callback = typeof callback === "string" ? window[callback] : callback;
        callback = typeof callback === "function" ? callback : null;
        _setQQBrowserShare2({
            "url": shareConfig.link,
            "title": shareConfig.title,
            "description": shareConfig.desc,
            "img_url": shareConfig.img_url
        }, callback)
    }
    var _setQQBrowserShare2 = function _setQQBrowserShare() {
        _setQQBrowserShare2.cache = arguments
    };

    function QQBrowserShare() {
        if (clientType !== CLIENT.QQBROWSER) return;
        var callback = shareConfig.callback;
        callback = typeof callback === "string" ? window[callback] : callback;
        callback = typeof callback === "function" ? callback : null;
        _QQBrowserShare2({
            "url": shareConfig.link,
            "title": shareConfig.title,
            "description": shareConfig.desc,
            "img_url": shareConfig.img_url
        }, callback)
    }
    var _QQBrowserShare2 = function _QQBrowserShare() {
        _QQBrowserShare2.cache = arguments
    };
    if (clientType === CLIENT.QQBROWSER) loadScript("http://jsapi.qq.com/get?api=app.canShareTo,app.setShareInfo,app.share", function () {
        var cache1 = _setQQBrowserShare2.cache,
            cache2 = _QQBrowserShare2.cache,
            browserApp = window["browser"] && window["browser"].app,
            setShare = browserApp && browserApp.setShareInfo,
            share$$1 = browserApp && browserApp.share;
        cache1 && setShare.apply(browserApp || window, cache1);
        cache2 && share$$1.apply(browserApp || window, cache2);
        _setQQBrowserShare2 = setShare;
        _QQBrowserShare2 = share$$1
    });
    var _shareToQZone = function _shareToQZone() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var siteUrl = "http://" + getDomain() + "/";
        var defaultParams = {
            uin: "",
            skey: "",
            lskey: "",
            sid: "",
            title: "\u817e\u8baf\u52a8\u6f2b",
            summary: "\u817e\u8baf\u52a8\u6f2b",
            desc: "\u817e\u8baf\u52a8\u6f2b",
            imageUrl: "",
            url: siteUrl,
            site: siteUrl,
            successUrl: siteUrl,
            page: "qzshare.html",
            loginpage: "loginindex.html",
            logintype: "qzone"
        };
        var actionUrl = "http://openmobile.qq.com/api/check2";
        var formContent = [];
        for (var key in defaultParams) {
            if (!defaultParams.hasOwnProperty(key)) continue;
            var value = params[key];
            if (value === undefined) value = defaultParams[key];
            formContent.push('<input type="hidden" name="' + key + '" value="' + value + '" />')
        }
        var div = document.createElement("div");
        div.className = "qzone-share-form";
        document.body.appendChild(div);
        var form = document.createElement("form");
        form.action = actionUrl;
        form.method = "GET";
        form.innerHTML = formContent.join("\n");
        div.appendChild(form);
        form.submit();
        box.removeChild(form)
    };

    function shareToQZone(user) {
        user = user || {};
        var uin = user.uin || "";
        var skey = user.skey || "";
        var lskey = user.lskey || "";
        var sid = user.sid || "";
        var url = shareConfig.link;
        var title = shareConfig.title;
        var img = shareConfig.img_url;
        var desc = shareConfig.desc;
        var summary = shareConfig.title;
        var prefix = url.indexOf("?") + 1 ? "&" : "?";
        var successUrl = shareConfig.successUrl || url + (typeof shareConfig.callback === "string" ? prefix + "shareCallback=" + shareConfig.callback : "");
        _shareToQZone({
            uin: uin,
            skey: skey,
            lskey: lskey,
            sid: sid,
            title: title,
            desc: desc,
            imageUrl: img,
            url: url,
            summary: summary,
            successUrl: successUrl
        })
    }
    var shareHelper = {
        shareConfig: shareConfig,
        setShare: setShare,
        readMeta: readMeta,
        appShare: appShare,
        setAppShare: setAppShare,
        setWxShare: setWxShare,
        setQQShare: setQQShare,
        setQQBrowserShare: setQQBrowserShare,
        QQBrowserShare: QQBrowserShare,
        shareToQZone: shareToQZone
    };

    function frontPage() {
        return callClient("txcomic://frontpage/path")
    }
    function web(url, title) {
        return callClient("txcomic://web/path?url=" + encodeURIComponent(url) + "&title=" + encodeURIComponent(title))
    }
    function topic(topicId) {
        return callClient("txcomic://topic/path?topic_id=" + topicId)
    }
    function prpr(pid) {
        return callClient("txcomic://prpr/path?pid=" + pid)
    }
    function detail(comicId) {
        return callClient("txcomic://detail/comic?comic_id=" + comicId)
    }
    function cartoon(cartoonId, cartoonTitle) {
        return callClient("txcomic://cartoon/path?cartoon_id=" + encodeURIComponent(cartoonId) + "&cartoon_title=" + encodeURIComponent(cartoonTitle))
    }
    function league(leagueId) {
        return callClient("txcomic://league/path?league_id=" + encodeURIComponent(leagueId))
    }
    var appScheme = {
        frontPage: frontPage,
        web: web,
        topic: topic,
        prpr: prpr,
        detail: detail,
        cartoon: cartoon,
        league: league
    };
    (function () {
        var pt_logout = {
            ret: 0,
            appDomain: "",
            mainDomain: "",
            httpWhiteDomain: {
                "qq.com": 1,
                "soso.com": 1,
                "paipai.com": 1,
                "tenpay.com": 1,
                "taotao.com": 1,
                "tencent.com": 1,
                "oa.com": 1,
                "webdev.com": 1,
                "3366.com": 1,
                "imqq.com": 1,
                "pengyou.com": 1,
                "qplus.com": 1,
                "qzone.com": 1,
                "server.com": 1,
                "myapp.com": 1,
                "kuyoo.cn": 1,
                "weiyun.com": 1,
                "wechatapp.com": 1,
                "51buy.com": 1,
                "yixun.com": 1,
                "qcloud.com": 1,
                "wechat.com": 1,
                "weishi.com": 1,
                "superfix.cn": 1,
                "bkcloud.cc": 1,
                "bkclouds.cc": 1
            },
            getCookie: function getCookie$$1(o) {
                var t = document.cookie.match(new RegExp("(^| )" + o + "=([^;]*)(;|$)"));
                return t ? decodeURIComponent(t[2]) : ""
            },
            delCookie: function delCookie(o, t, n) {
                document.cookie = o + "=; expires=Mon, 26 Jul 1997 05:00:00 GMT; path=" + (n ? n : "/") + "; " + (t ? "domain=" + t + ";" : "")
            },
            jsonp: function jsonp(o) {
                var t = document.createElement("script");
                t.setAttribute("src", o),
                document.getElementsByTagName("head")[0].appendChild(t),
                t.onerror = function () {
                    t.onerror = null,
                    pt_logout.set_ret(0, "")
                }
            },
            nlog: function nlog(o, t, n) {
                if (Math.random() <= (n || 1)) {
                    var e = "https:" == location.protocol ? "https://ssl.qq.com/ptlogin/cgi-bin/ptlogin_report?" : "http://log.wtlogin.qq.com/cgi-bin/ptlogin_report?",
                        p = location.href,
                        i = encodeURIComponent(o + "|_|" + p + "|_|" + window.navigator.userAgent),
                        l = e + "mid=" + t + "&msg=" + i + "&v=" + Math.random(),
                        u = new Image;
                    u.src = l
                }
            },
            init: function init() {
                var o = location.hostname.match(/\w*\.(cc|com|cn|com\.cn)$/);
                pt_logout.mainDomain = o ? o[0] : "",
                pt_logout.httpWhiteDomain[pt_logout.mainDomain] || pt_logout.nlog("\u516c\u53f8\u5916\u90e8\u57df\u540d\u5f15\u7528logout", "350448");
                var t = location.hostname.match(/\w+(\.\w+)\.(cc|com|cn|com\.cn)$/);
                pt_logout.appDomain = t ? t[0] : "",
                "qq.com" != pt_logout.mainDomain && (pt_logout.appDomain = pt_logout.mainDomain),
                pt_logout.nlog("logout pv", "365716", .05)
            },
            getLogoutUrl: function getLogoutUrl(o) {
                var t = pt_logout.getCookie("pt4_token"),
                    n = pt_logout.getCookie("skey"),
                    e = pt_logout.time33(n),
                    p = pt_logout.getCookie("ptcz"),
                    i = pt_logout.hash33(p),
                    l = "",
                    u = o ? "qq.com" : pt_logout.mainDomain;
                return l = ("https:" == location.protocol ? "https://ssl." : "http://") + "ptlogin2." + u + "/logout?",
                l += "pt4_token=" + t + "&pt4_hkey=" + e + "&pt4_ptcz=" + i + "&deep_logout=1"
            },
            time33: function time33(o) {
                for (var t = 0, n = 0, e = o.length; e > n; n++) t = 33 * t + o.charCodeAt(n);
                return t % 4294967296
            },
            hash33: function hash33(o) {
                for (var t = 0, n = 0, e = o.length; e > n; ++n) t += (t << 5) + o.charCodeAt(n);
                return 2147483647 & t
            },
            clearCookie: function clearCookie(o) {
                o = o || pt_logout.appDomain,
                pt_logout.delCookie("p_uin", o),
                pt_logout.delCookie("p_skey", o),
                pt_logout.delCookie("p_luin", o),
                pt_logout.delCookie("p_lskey", o),
                pt_logout.delCookie("pt4_token", o),
                pt_logout.delCookie("pt_mbkey", pt_logout.mainDomain || "qq.com"),
                "" != pt_logout.appDomain && "" != pt_logout.getCookie("skey_m") && (pt_logout.delCookie("uin_m", pt_logout.appDomain), pt_logout.delCookie("skey_m", pt_logout.appDomain))
            },
            set_ret: function set_ret(o, t) {
                try {
                    var n = pt_logout.getCookie("pt4_token");
                    pt_logout.clearCookie(t),
                    o > 0 || (pt_logout.delCookie("uin", pt_logout.mainDomain), pt_logout.delCookie("skey", pt_logout.mainDomain), pt_logout.nlog("logout fail", "285851", .1)),
                    "function" == typeof pt_logout.callback && pt_logout.callback(2),
                    "" != t && t != pt_logout.appDomain && pt_logout.nlog("domain unsame:n=" + o + ":pt4_token=" + n + ":cgi_domain=" + t + ":js_domain=" + pt_logout.appDomain, "285852", .1)
                } catch (e) {
                    return
                }
            },
            logout: function logout(o, t) {
                pt_logout.init();
                var n = pt_logout.getCookie("pt4_token"),
                    e = pt_logout.getCookie("skey"),
                    p = pt_logout.getCookie("ptcz");
                "function" == typeof o && (pt_logout.callback = o);
                var i = pt_logout.getLogoutUrl(t);
                n || e || p ? pt_logout.jsonp(i) : ("function" == typeof o && o(2), pt_logout.nlog("logout without cookie", 365715))
            },
            logoutQQCom: function logoutQQCom(o) {
                pt_logout.logout(o, !0),
                pt_logout.delCookie("uin", pt_logout.mainDomain),
                pt_logout.delCookie("skey", pt_logout.mainDomain)
            }
        };
        window.pt_logout = pt_logout
    })();

    function login(backUrl, useOneKey) {
        if (Object.prototype.toString.call(arguments[0]) === "[object Object]") {
            var opts = arguments[0];
            backUrl = opts["backUrl"];
            useOneKey = opts["useOneKey"]
        }
        backUrl = encodeURIComponent(backUrl || window.location);
        window.location.href = "http://ui.ptlogin2.qq.com/cgi-bin/login?style=9&low_login=1&appid=637009801&daid=43" + "&pt_no_onekey=" + (useOneKey ? "0" : "1") + "&s_url=" + backUrl
    }
    function isLogin() {
        var uin = getCookie("uin");
        uin = String(Number(uin.replace(/^[^0-9]/, "")));
        var skey = getCookie("skey");
        var lskey = getCookie("lskey");
        if (!uin || uin == "0") return null;
        else return {
            uin: uin,
            skey: skey,
            lskey: lskey
        }
    }
    function isLogin_async(callback) {
        window.setTimeout(function () {
            var user = isLogin();
            callback(user)
        }, 0)
    }
    function logout(backUrl) {
        var wlh = backUrl || "http://" + window.location.host;
        pt_logout.logout(function () {
            removeCookie("luin", ".qq.com", "/");
            removeCookie("lskey", ".qq.com", "/")
        });
        pt_logout.clearCookie();
        if (backUrl !== false) setTimeout(function () {
            window.location.href = wlh
        }, 200)
    }
    var loginLite = {
        login: login,
        isLogin: isLogin,
        isLogin_async: isLogin_async,
        logout: logout
    };
    !
    function () {
        function e(e) {
            window.console && console.log("\nReceived cross orign stream \nSELF:" + location.href + "\nSOURCE:" + e.origin + "\nDATA:" + e.data + "\n");
            var i, n = e.source;
            for (var o in t) t[o].contentWindow === n && (i = o);
            if (i) {
                var a, s = t[i];
                try {
                    a = JSON.parse(e.data)
                } catch (e$10) {}
                a && s._handle(a.action, a.data)
            }
        }
        function i() {
            c.forEach(function (e) {
                e.resize()
            })
        }

        function n(e, i, n) {
            var t = document.getElementsByTagName("head")[0],
                o = document.createElement("script"),
                a = function a() {
                    if (o) {
                        try {
                            o.src = ""
                        } catch (e$11) {}
                        o.removeEventListener("load", a),
                        t.removeChild(o),
                        o = null,
                        "function" == typeof i && i(n, !0)
                    }
                };
            o.addEventListener("load", a),
            o.src = e,
            t.insertBefore(o, t.firstChild)
        }
        var t = {},
            o = 0,
            a = function a(e) {
                this.name = "midas_iframe_" + o,
                e.name = this.name,
                this.iframeDom = e,
                this.contentWindow = e.contentWindow,
                t[this.name] = this,
                this.handlers = {},
                o++
            };
        a.prototype = {
                on: function on(e, i, n) {
                    this.handlers[e] = this.handlers[e] || [],
                    this.handlers[e].push({
                        handler: i,
                        self: n
                    })
                },
                off: function off(e, i) {
                    if (this.handlers[e]) if (i) {
                        for (var n = this.handlers[e].length - 1; n >= 0; n--) {
                            var t = this.handlers[e][n];
                            t.handler === i && this.handlers[e].splice(n, 1)
                        }
                        this.handlers[e].length || delete this.handlers[e]
                    } else delete this.handlers[e]
                },
                postMessage: function postMessage(e) {
                    this.contentWindow.postMessage(JSON.stringify(e), "*"),
                    window.console && console.log("\nSend cross orign stream \nFROM:" + location.href + '\nTO:frames["' + this.name + '"]\nDATA:' + JSON.stringify(e) + "\n")
                },
                close: function close() {
                    delete t[this.name]
                },
                _handle: function _handle(e, i) {
                    var n = this;
                    this.handlers[e] && this.handlers[e].forEach(function (e) {
                        e.handler.call(e.self || n, i)
                    })
                }
            },
        window.addEventListener("message", e),
        window.addEventListener("beforeunload", function () {
                window.removeEventListener("message", e)
            });
        var s = function s() {
                var e = this.section = document.createElement("div");
                e.style.cssText = ["position:absolute;left:0;top:0;width:100%;z-index:999;background:rgba(0,0,0,0.7);"].join(""),
                this.resize(),
                document.body.appendChild(e)
            };
        s.prototype = {
                resize: function resize() {
                    this.section.style.height = Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight) + "px"
                },
                hide: function hide() {
                    this.section && (document.body.removeChild(this.section), this.section = null)
                }
            };
        var d = function d() {
                var e = this.section = document.createElement("div");
                e.className = "fpm-loading",
                e.innerHTML = '<i class="fpm-loading-dot"></i><i class="fpm-loading-dot"></i><i class="fpm-loading-dot"></i>',
                document.body.appendChild(e)
            };
        d.prototype = {
                hide: function hide() {
                    this.section && (document.body.removeChild(this.section), this.section = null)
                }
            },


        function (e) {
                var i;
                document.createStyleSheet ? (i = document.createStyleSheet(), i.cssText = e) : (i = document.createElement("style"), i.type = "text/css", i.innerHTML = e, document.getElementsByTagName("head")[0].appendChild(i))
            }([".fpm-loading {padding:0;margin:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-family:inherit;font-size:100%;vertical-align:baseline;width:100%;box-sizing:border-box;text-align:center;position:fixed;left:0;top:50%;transform:translateY(-50%);z-index:1000}", ".fpm-loading-dot {background:#9e9e9e;display:inline-block;*display:inline;*zoom:1;width:12px;height:12px;border-radius:12px;margin-right:15px;-webkit-animation-name:fpm-loadingAnim;animation-name:fpm-loadingAnim;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-delay:0.3s;animation-delay:0.3s;}", ".fpm-loading-dot:first-child {-webkit-animation-delay:0s;animation-delay:0s;}", ".fpm-loading-dot:last-child {-webkit-animation-delay:0.6s;animation-delay:0.6s;margin-right:0;}", "@-webkit-keyframes fpm-loadingAnim {0% {opacity:0.5;}100% {opacity:1;}}", "@keyframes fpm-loadingAnim {0% {opacity:0.5;}100% {opacity:1;}}"].join("\r\n"));
        var c = [],
            r = function r(e) {
                var i, n = navigator.userAgent;
                n.indexOf("Android") > -1 && (i = parseFloat(n.slice(n.indexOf("Android") + 8))),
                this.iframeDom = document.createElement("iframe"),
                this.iframeDom.style.cssText = ["border:0;position:", 4 > i ? "absolute" : "fixed", ";left:0;top:0px;width:100%;height:", document.documentElement.clientHeight, "px;z-index:2000;"].join(""),
                this.iframeDom.scrolling = "auto",
                this.iframeDom.src = e.url,
                document.body.appendChild(this.iframeDom),
                this.stream = new a(this.iframeDom),
                this.shader = new s,
                this.loading = new d;
                for (var t in e.methods) this.stream.on(t, e.methods[t], this);
                c.push(this);
                var o = this;
                this.on("ready", function () {
                    o.loading && (o.loading.hide(), o.loading = null)
                })
            };
        r.prototype = {
                close: function close() {
                    document.body.removeChild(this.iframeDom),
                    this.iframeDom = null,
                    this.stream.close(),
                    this.stream = null,
                    this.shader.hide(),
                    this.shader = null,
                    c.splice(c.indexOf(this), 1)
                },
                on: function on(e, i, n) {
                    this.stream.on(e, i, n)
                },
                off: function off(e, i) {
                    this.stream.off(e, i)
                },
                postMessage: function postMessage(e) {
                    this.stream.postMessage(e)
                },
                resize: function resize() {
                    this.shader.resize();
                    var e = document.documentElement.clientHeight;
                    this.iframeDom.style.height = e + "px",
                    this.postMessage({
                        action: "resize",
                        data: {
                            height: document.documentElement.clientHeight
                        }
                    })
                }
            },
        window.addEventListener("resize", i),
        window.addEventListener("beforeunload", function () {
                window.removeEventListener("resize", i)
            });
        var u = window.Midas = window.Midas || {};
        u.API_VERSION = 5;
        var l = "https:" === location.protocol ? "https:" : "http:",
            h = u.buyGoods = function (e) {
                if (!e.params) return alert("Midas.buyGoods params not specified."),
                !1;
                if (!e.pf) return alert("Midas.buyGoods pf not specified."),
                !1;
                var i = {
                    m: "buy",
                    c: "goods",
                    dialog: "1",
                    midasApiVersion: u.API_VERSION,
                    dh: "1",
                    params: encodeURIComponent(e.params)
                };
                1 == e.sandbox ? i.sandbox = 1 : 2 == e.sandbox && (i.sandbox = 2),
                ["wxAppid", "wxAppid2", "mpid", "u", "sid", "dc", "groupid", "showprovide", "shownick", "schema", "schema_url", "pfkey", "_version", "openid", "openkey", "sessionid", "sessiontype"].forEach(function (n) {
                    void 0 !== e[n] && (i[n] = encodeURIComponent(e[n]))
                });
                var n = [];
                for (var t in i) n.push(t + "=" + i[t]);
                h._dlg = new r({
                    url: l + "//pay.qq.com/h5/index.shtml?" + n.join("&"),
                    methods: {
                        wechat_buy: g.wechat_buy,
                        mqq_buy: g.mqq_buy,
                        wechat_wapbuy: g.wechat_wapbuy,
                        mqq_wapbuy: g.mqq_wapbuy,
                        MidasJSBridge_detect: g.MidasJSBridge_detect,
                        success: function success() {
                            e.onSuccess && e.onSuccess()
                        },
                        close: function close() {
                            this.close(),
                            h._dlg = null,
                            e.onClose && e.onClose()
                        },
                        resize: function resize(e) {
                            e.height && (this.iframeDom.style.height = e.height + "px")
                        },
                        ready: function ready() {
                            h._dlg.resize()
                        }
                    }
                })
            },
            p = u.rechargeGameCurrency = function (e) {
                if (!e.pf) return alert("Midas.rechargeGameCurrency pf not specified."),
                !1;
                if (!e.appid) return alert("Midas.rechargeGameCurrency appid not specified."),
                !1;
                if (!e.zoneid) return alert("Midas.rechargeGameCurrency zoneid not specified."),
                !1;
                if (!e.account) return alert("Midas.rechargeGameCurrency account not specified."),
                !1;
                if ("qq" !== e.account && "wechat" !== e.account) return alert("Midas.rechargeGameCurrency account not valid."),
                !1;
                var i = {
                    m: "buy",
                    c: {
                        qq: "game",
                        wechat: "wechat_game"
                    }[e.account],
                    dialog: "1",
                    midasApiVersion: u.API_VERSION,
                    dh: "1",
                    pf: e.pf,
                    appid: e.appid,
                    zoneid: e.zoneid
                };
                1 == e.sandbox ? i.sandbox = 1 : 2 == e.sandbox && (i.sandbox = 2),
                ["n", "da", "al", "as", "hideInfo", "hidePrice", "wxAppid", "shownick", "groupid", "wxAppid2", "mpid", "u", "u2", "dc", "pfkey", "schema", "schema_url", "openid", "openkey", "sessionid", "sessiontype"].forEach(function (n) {
                    void 0 !== e[n] && (i[n] = encodeURIComponent(e[n]))
                });
                var n = [];
                for (var t in i) n.push(t + "=" + i[t]);
                p._dlg = new r({
                    url: l + "//pay.qq.com/h5/index.shtml?" + n.join("&"),
                    methods: {
                        wechat_buy: g.wechat_buy,
                        mqq_buy: g.mqq_buy,
                        wechat_wapbuy: g.wechat_wapbuy,
                        mqq_wapbuy: g.mqq_wapbuy,
                        MidasJSBridge_detect: g.MidasJSBridge_detect,
                        success: function success() {
                            e.onSuccess && e.onSuccess()
                        },
                        close: function close() {
                            this.close(),
                            h._dlg = null,
                            e.onClose && e.onClose()
                        },
                        resize: function resize(e) {
                            e.height && (this.iframeDom.style.height = e.height + "px")
                        },
                        ready: function ready() {
                            p._dlg.resize()
                        }
                    }
                })
            },
            m = u.openSubscribe = function (e) {
                if (!e.appid) return alert("Midas.openSubscribe appid not specified."),
                !1;
                if (!e.service) return alert("Midas.openSubscribe service not specified."),
                !1;
                if (!e.pf) return alert("Midas.openSubscribe pf not specified."),
                !1;
                if (!e.account) return alert("Midas.openSubscribe account not specified."),
                !1;
                if ("qq" !== e.account && "wechat" !== e.account) return alert("Midas.openSubscribe account not valid."),
                !1;
                var i = {
                    m: "buy",
                    c: {
                        qq: "qqsubscribe",
                        wechat: "subscribe"
                    }[e.account],
                    dialog: "1",
                    midasApiVersion: u.API_VERSION,
                    dh: "1",
                    appid: e.appid,
                    service: e.service,
                    pf: e.pf
                },
                    n = ["productid", "as", "aid", "ap", "shownick", "groupid", "wxAppid", "wxAppid2", "mpid", "tc", "u", "u2", "sid", "dc", "coupons_ext", "schema", "schema_url", "pfkey", "maxn", "n", "hideInfo", "hidePrice", "openid", "openkey", "sessionid", "sessiontype", "lp"];
                window.MidasJSBridge && n.push("sdkpay"),
                n.forEach(function (n) {
                        void 0 !== e[n] && (i[n] = encodeURIComponent(e[n]))
                    }),
                1 == e.sandbox ? i.sandbox = 1 : 2 == e.sandbox && (i.sandbox = 2);
                var t = [];
                for (var o in i) t.push(o + "=" + i[o]);
                m._dlg = new r({
                        url: l + "//pay.qq.com/h5/index.shtml?" + t.join("&"),
                        methods: {
                            wechat_buy: g.wechat_buy,
                            mqq_buy: g.mqq_buy,
                            wechat_wapbuy: g.wechat_wapbuy,
                            mqq_wapbuy: g.mqq_wapbuy,
                            MidasJSBridge_call: g.MidasJSBridge_call,
                            redirect_url: g.redirect_url,
                            MidasJSBridge_detect: g.MidasJSBridge_detect,
                            success: function success() {
                                e.onSuccess && e.onSuccess()
                            },
                            close: function close() {
                                this.close(),
                                h._dlg = null,
                                e.onClose && e.onClose()
                            },
                            ready: function ready() {}
                        }
                    })
            },
            f = u.openService = function (e) {
                if (!e.c) return alert("Midas.openService c not specified."),
                !1;
                if (!e.pf) return alert("Midas.openService pf not specified."),
                !1;
                var i = {
                    m: "buy",
                    c: e.c,
                    dialog: "1",
                    midasApiVersion: u.API_VERSION,
                    dh: "1",
                    pf: e.pf
                },
                    n = ["account", "shownick", "n", "da", "aid", "u", "u2", "mode", "fixed_mode", "mpid", "al", "ap", "sl", "tabService", "dc", "coupons_ext", "tc", "appid", "groupid", "schema", "schema_url", "configs", "as", "open_detail", "paybyday", "wxAppid", "wxAppid2", "sid", "hideInfo", "hidePrice", "pfkey", "openid", "openkey", "sessionid", "sessiontype"];
                window.MidasJSBridge && n.push("sdkpay"),
                n.forEach(function (n) {
                        void 0 !== e[n] && (i[n] = encodeURIComponent(e[n]))
                    }),
                e.sandbox === !0 ? i.sandbox = 1 : e.sandbox && (i.sandbox = e.sandbox);
                var t = [];
                for (var o in i) t.push(o + "=" + i[o]);
                f._dlg = new r({
                        url: l + "//pay.qq.com/h5/index.shtml?" + t.join("&"),
                        methods: {
                            wechat_buy: g.wechat_buy,
                            mqq_buy: g.mqq_buy,
                            wechat_wapbuy: g.wechat_wapbuy,
                            mqq_wapbuy: g.mqq_wapbuy,
                            MidasJSBridge_call: g.MidasJSBridge_call,
                            redirect_url: g.redirect_url,
                            MidasJSBridge_detect: g.MidasJSBridge_detect,
                            success: function success() {
                                e.onSuccess && e.onSuccess()
                            },
                            close: function close() {
                                this.close(),
                                h._dlg = null,
                                e.onClose && e.onClose()
                            },
                            ready: function ready() {}
                        }
                    })
            },
            g = {
                wechat_buy: function wechat_buy(e) {
                    var i = this,
                        n = e.info;
                    WeixinJSBridge.invoke("getBrandWCPayRequest", {
                            appId: n.wx_appid,
                            timeStamp: n.wx_time,
                            nonceStr: n.wx_noncenum,
                            "package": n.wx_package,
                            signType: n.wx_signtype || "SHA1",
                            paySign: n.wx_sign
                        }, function (e) {
                            i.postMessage({
                                action: "wechat_buy",
                                data: {
                                    res: e
                                }
                            })
                        })
                },
                mqq_buy: function mqq_buy(e) {
                    function i() {
                        mqq.tenpay.pay(e.info, function (e) {
                            t.postMessage({
                                action: "mqq_buy",
                                data: {
                                    res: e
                                }
                            })
                        })
                    }
                    var t = this;
                    window.mqq ? i() : n(l + "//pub.idqqimg.com/qqmobile/qqapi.js?_bid=152", function () {
                        i()
                    })
                },
                wechat_wapbuy: function wechat_wapbuy(e) {
                    location.href = e.url
                },
                mqq_wapbuy: function mqq_wapbuy(e) {
                    location.href = e.url
                },
                MidasJSBridge_call: function MidasJSBridge_call(e) {
                    var i = this;
                    MidasJSBridge.call(e.cmd, e.params, function (e) {
                        i.postMessage({
                            action: "MidasJSBridge_call",
                            data: {
                                res: e
                            }
                        })
                    }, "")
                },
                redirect_url: function redirect_url(e) {
                    location.href = e.url
                },
                MidasJSBridge_detect: function MidasJSBridge_detect() {
                    function e(e) {
                        i.postMessage({
                            action: "MidasJSBridge_detect",
                            data: {
                                result: e
                            }
                        })
                    }
                    var i = this;
                    e(window.MidasJSBridge ? !0 : !1)
                }
            }
    }();

    function vipDialog(month, pf, cb) {
        pf = pf || "event2208";
        var aid = "h5_event_" + pf;
        if (!isApp) vipDialog_h5(month, pf, cb);
        else if (isAndroid) goMidasVIP(month, aid, function (res) {
            cb({
                ret: res == 1
            })
        });
        else if (isIOS) payVipIap(month, cb)
    }
    function vipDialog_h5(month, pf, cb) {
        pf = pf || "event2208";
        var aid = "h5_event_" + pf;
        var productId = {
            1: "MHVIPD1",
            3: "MHVIPB3",
            6: "MHVIPC6",
            12: "MHVIPA12"
        }[month];
        if (!productId) throw new Error("\u5f00\u901a\u6708\u4efd\u6570\u6709\u8bef\uff0c\u4e0d\u80fd\u4e3a " + month);
        var isSuccess = false;
        Midas.openSubscribe({
            account: "qq",
            appid: "1450008907",
            service: "MHVIP",
            pf: "huyu_m-" + pf + "-html5-android",
            aid: aid,
            productid: productId,
            as: "1",
            onSuccess: function onSuccess() {
                isSuccess = true
            },
            onClose: function onClose() {
                cb({
                    ret: isSuccess ? 1 : 0
                })
            }
        })
    }
    function dqDialog(dq, pf, cb) {
        pf = pf || "event2208";
        var level = DQ_LEVELS[dq];
        if (!isApp) {
            if (isIOS) throw new Error("iOS \u4e0d\u80fd\u5728 APP \u5916\u5145\u503c\u70b9\u5238\uff08\u6570\u636e\u4e0d\u4e92\u901a\uff09");
            dqDialog_h5(dq, pf, cb)
        } else if (isAndroid) goMidasDq(dq, false, pf, function (res) {
            cb({
                ret: res == 1
            })
        });
        else if (isIOS) {
            if (!level) throw new Error("\u5145\u503c\u70b9\u5238\u6570\u6709\u8bef\uff0c\u4e0d\u80fd\u4e3a " + dq + "\n\uff08\u53ef\u7528\u6863\u4f4d\uff1a" + "\uff09");
            dqIap(dq, cb)
        }
    }
    var DQ_LEVELS = {
        100: 100,
        600: 600,
        3E3: 3E3,
        5E3: 5E3,
        9800: 9800
    };

    function dqDialog_h5(dq, pf, cb) {
        var pfHead = "huyu_m-1000-html5-1.0.0-";
        pf = pf || "h5_default";
        var isSuccess = false;
        Midas.rechargeGameCurrency({
            account: "qq",
            appid: "1450008902",
            pf: pfHead + pf,
            zoneid: "1",
            n: dq,
            as: "1",
            sandbox: false,
            onSuccess: function onSuccess() {
                isSuccess = true
            },
            onClose: function onClose() {
                cb({
                    ret: isSuccess ? 1 : 0
                })
            }
        })
    }
    function readBagDialog(price, pf, cb) {
        pf = pf || "event2208";
        var bagId = {
            1: 1010,
            8: 8040
        }[price];
        if (!isApp) readBagDialog_h5(price, pf, cb);
        else if (isAndroid) readBagPurchase(pf, bagId, function (res) {
            cb({
                ret: res == 1
            })
        });
        else if (isIOS) readBagIap(bagId, 0, cb)
    }
    function readBagDialog_h5(level, pf, cb) {
        pf = pf || "event2208";
        var isSuccess = false;
        throw new Error("\u6682\u4e0d\u652f\u6301 APP \u5916\u76f4\u63a5\u8d2d\u4e70\u9605\u8bfb\u5305");
        var params = "url_params";
        Midas.buyGoods({
            params: params,
            pf: "huyu_m-" + pf + "-html5-android",
            _version: "v3",
            sandbox: false,
            onSuccess: function onSuccess() {
                isSuccess = true
            },
            onClose: function onClose() {
                cb({
                    ret: isSuccess ? 1 : 0
                })
            }
        })
    }
    function buyVip(retUrl, aid) {
        if (Object.prototype.toString.call(arguments[0]) === "[object Object]") {
            var opts =
            arguments[0];
            retUrl = opts["retUrl"];
            aid = opts["aid"]
        }
        var pageHref = window.location.href;
        retUrl = retUrl || pageHref;
        window.location.href = pageHref.appendQueryString("/home/buyVip", {
            "retUrl": retUrl,
            "aid": aid
        })
    }
    function buyGoods(retUrl, als, pf, noBack) {
        if (Object.prototype.toString.call(arguments[0]) === "[object Object]") {
            var opts = arguments[0];
            retUrl = opts["retUrl"];
            als = opts["als"];
            pf = opts["pf"];
            noBack = opts["noBack"]
        }
        var cu = encodeURIComponent(window.location.href);
        retUrl = retUrl ? encodeURIComponent(retUrl) : cu;
        pf = "huyu_m-" + (pf || "20120321") + "-html5-h5";
        var pageHref = "http://pay.qq.com/h5/index.shtml?m=buy&c=game&appid=1450008902" + "&pf=" + pf + "&ru=" + retUrl;
        if (als) {
            if (typeof als !== "string" && als.join) als = als.join(",");
            pageHref += "&al=" + als
        }!noBack && (pageHref += "&pu=" + cu);
        window.location.href = pageHref
    }
    var payHelper = {
        vipDialog: vipDialog,
        vipDialog_h5: vipDialog_h5,
        dqDialog: dqDialog,
        DQ_LEVELS: DQ_LEVELS,
        dqDialog_h5: dqDialog_h5,
        readBagDialog: readBagDialog,
        readBagDialog_h5: readBagDialog_h5,
        buyVip: buyVip,
        buyGoods: buyGoods
    };
    var ek$1 = {
        functionHelper: functionHelper,
        func: functionHelper,
        encodingHelper: encodingHelper,
        encoding: encodingHelper,
        enc: encodingHelper,
        urlHelper: urlHelper,
        url: urlHelper,
        cookieHelper: cookieHelper,
        cookie: cookieHelper,
        pingHelper: pingHelper,
        ping: pingHelper,
        myAjax: myAjax,
        ajax: ajax,
        shareHelper: shareHelper,
        share: shareHelper,
        acApp: acApp,
        ac: acApp,
        appPlus: appPlus,
        app: appPlus,
        appScheme: appScheme,
        scheme: appScheme,
        payHelper: payHelper,
        pay: payHelper,
        loginLite: loginLite
    };
    extend(ek$1, base);
    window.EasyKit = window.EK =
    window.ek = ek$1;
    if (typeof module !== "undefined") module.exports = ek$1
})();

(function () {
    var template = '<a class="back-to-top" href="javascript: void(0);">[\u8fd4\u56de\u9876\u90e8]</a>';

    function BackToTop(para) {
        this.init(para);
        this.bindScroll()
    }
    BackToTop.prototype = {
        init: function (para) {
            var that = this;
            para = para || {};
            that.scrollElem = para.scrollElem || document.body;
            that.scrollLimit = para.scrollLimit || 200;
            that.cssStyle = para.cssStyle || "";
            that.dom = $(template).on("click", function () {
                that.click()
            });
            that.dom.css(that.cssStyle);
            $("body").append(that.dom)
        },
        click: function () {
            var that = this;
            var scrollElem =
            that.scrollElem,
                box = scrollElem == document.body ? document.documentElement : scrollElem;
            box.scrollTop = scrollElem.scrollTop = window.scrollY = window.pageYOffset = 0
        },
        "bindScroll": function () {
            var that = this;
            var scrollElem = that.scrollElem,
                box = scrollElem == document.body ? document.documentElement : scrollElem,
                tar = scrollElem == document.body ? window : scrollElem,
                limit = that.scrollLimit;
            tar.addEventListener("scroll", function () {
                    var scrollTop = box.scrollTop || scrollElem.scrollTop || window.scrollY || window.pageYOffset;
                    if (scrollTop >= limit && !that.disabled) that.dom.addClass("show");
                    else that.dom.removeClass("show")
                })
        },
        "disable": function () {
            var that = this;
            that.disabled = true;
            that.dom.removeClass("show")
        },
        "enable": function () {
            var that = this;
            that.disabled = false
        }
    };
    window.BackToTop = BackToTop
})();
$(function () {
    var checkClickAppAds = function (e) {
        var $target = $(e.target),
            $close = $target.is(".app-guiding-close") ? $target : $target.parents(".app-guiding-close"),
            $parent = $target.parents(".app-guiding");
        if ($close.length) {
                $parent.addClass("closed");
                window.setTimeout(function () {
                    $parent.hide().removeClass("closed");
                    $parent = null
                }, 300)
            } else if ($parent.length) {
                var url_iOS = $parent.attr("data-url-iOS");
                var url_Android = $parent.attr("data-url-Android");
                var id = $parent.attr("data-id");
                var tag = "h5_v3_app_down." + "theme_" + id + "." + ek.clientType + "." + ek.os;
                if (url_Android && url_iOS) if (ek.isIOS) callUpOrDown(url_iOS, tag);
                else {
                    if (ek.isAndroid) callUpOrDown(url_Android, tag)
                } else callUpOrDown()
            }
    };
    var callUpOrDown = function (url, tag) {
        var pageHref = window.location.href,
            matchId = /\/id\/([0-9]+)/g.exec(pageHref),
            id = parseInt(matchId && matchId[1]);
        if (ek.clientType == ek.CLIENT.WEIBO) {
                var hideTips = function () {
                    $tips.hide().off("click", hideTips)
                };
                var $tips = $(".tips-go-safari");
                if (!$tips.length) {
                    $tips = $('<div class="tips-go-safari"></div>');
                    $("body").append($tips)
                }
                $tips.show().on("click", hideTips);
                history.replaceState(null, "", "/event/downloadGuide201607/index.html?aci=5&auto=1&ver=dm14542")
            }(id ? ek.appScheme.detail(id) : ek.appScheme.frontPage()).or(function () {
                ek.ping.downAppAndReport(url, tag)
            })
    };
    $("body").on("click", checkClickAppAds)
});
(function () {
    function createBlockDialog() {
        var blocker = new Blocker({
            timeKey: "default"
        });
        var dialog = new Dialog({
            title: '<i class="small-icon"></i>\u817e\u8baf\u52a8\u6f2bAPP',
            prop: {
                skin: "light-salmon",
                cover: true,
                closeBtn: true,
                lock: true
            },
            content: ['<em class="em">\u66f4\u65b0\u66f4\u5feb\u3001\u6d41\u91cf\u8d85\u7701\u3001\u5185\u5bb9\u66f4\u5168</em>', "\u5b89\u88c5\u817e\u8baf\u52a8\u6f2bAPP\uff0c\u5373\u4eab\u6240\u6709\uff01", new PileDialogRow({
                content: [{
                    text: "\u7ee7\u7eed\u9605\u8bfb",
                    style: {
                        flex: 1,
                        backgroundColor: "gray"
                    },
                    click: function () {
                        dialog.close()
                    }
                },
                {
                    text: "\u5b89\u88c5\u4eab\u798f\u5229",
                    style: {
                        flex: 1,
                        marginLeft: 0
                    },
                    click: function () {
                        ek.ping.reportClick("h5_v3_app_down.box_block.down_app");
                        var url = window.location.href,
                            matchId = /\/id\/([0-9]+)/g.exec(url),
                            id = parseInt(matchId && matchId[1]);
                        if (ek.clientType == ek.CLIENT.WEIBO) {
                                var hideTips = function () {
                                    $tips.hide().off("click", hideTips)
                                };
                                var $tips = $(".tips-go-safari");
                                if (!$tips.length) {
                                    $tips = $('<div class="tips-go-safari"></div>');
                                    $("body").append($tips)
                                }
                                $tips.show().on("click", hideTips);
                                history.replaceState(null, "", "/event/downloadGuide201607/index.html?aci=5&auto=1&ver=dm14542");
                                dialog.close()
                            }(id ? ek.appScheme.detail(id) : ek.appScheme.frontPage()).or(function () {
                                window.setTimeout(function () {
                                    var appUrl = ek.isAndroid ? "http://m.ac.qq.com/apkSet/qqcomic_android_dm10006.apk" : ek.isIOS ? "https://itunes.apple.com/app/apple-store/id569387346?pt=604140&ct=h5zhuzhan6&mt=8" : null;
                                    ek.ping.downAppAndReport(appUrl)
                                }, 100)
                            })
                    }
                }]
            })]
        });
        dialog.on("open", function () {
            ek.ping.reportClick("h5_v3_app_down.box_block.load")
        });
        dialog.on("close", function () {
            ek.ping.reportClick("h5_v3_app_down.box_block.read")
        });
        window.blockDialog = dialog
    }
    function tryCreate() {
        if (window.Dialog) createBlockDialog();
        else window.setTimeout(tryCreate, 50)
    }
    tryCreate()
})();
!window.Dialog && (window.Dialog = PileDialog);
(function () {
    if (!window.PileDialog) return;
    (function setDialogSkin() {
        if (!PileDialog.alertDialog || !PileDialog.confirmDialog) {
            window.setTimeout(setDialogSkin, 50);
            return
        }
        PileDialog.alertDialog.setProp("skin", "light-salmon");
        PileDialog.confirmDialog.setProp("skin", "light-salmon")
    })()
})();
(function ($) {
    $ && $.extend($.fn, {
        nextAll: function (s) {
            var $els = $(),
                $el = this.next();
            while ($el.length) {
                    if (typeof s === "undefined" || $el.is(s)) $els = $els.add($el);
                    $el = $el.next()
                }
            return $els
        },
        prevAll: function (s) {
            var $els = $(),
                $el = this.prev();
            while ($el.length) {
                    if (typeof s === "undefined" || $el.is(s)) $els = $els.add($el);
                    $el = $el.prev()
                }
            return $els
        }
    })
})(typeof Zepto === "undefined" ? null : Zepto);
(function () {
    var wl = window.location,
        href = wl.href,
        prefix = wl.protocol + "//" + wl.hostname,
        uri = href.replace(prefix, "");
        (new Image).src = "/stats.php?t=" + +new Date + "&uri=" + uri
})();
(function () {
    if ("addEventListener" in document) document.addEventListener("DOMContentLoaded", function () {
        FastClick.attach(document.body);
        document.body.addEventListener("touchstart", function () {})
    }, false)
})();
(function () {
    var onVertical = undefined;

    function checkOrientation() {
        if (window.orientation == "-90" || window.orientation == "90") {
            var wl = window.location.href;
            if (wl.indexOf(ek.url.getDomain() + "/chapter/index/") == -1) {
                if (onVertical == undefined) onVertical = false;
                else if (onVertical == true) onVertical = false;
                Dialog.toast("\u7ad6\u5c4f\u770b\u6f2b\u753b\u66f4\u723d\u54e6\uff0c\u8f6c\u4e00\u4e0b\u561b\u256e(\u256f\u25bd\u2570)\u256d")
            }
        } else if (onVertical == undefined) onVertical = true;
        else if (onVertical == false) onVertical = true
    }
    window.onorientationchange = function () {
        checkOrientation()
    };
    $(function () {
        checkOrientation()
    })
})();
window.pageAction = window.pageAction || {};
window.presetPageAction = window.presetPageAction || {};
window.pageAction = function () {
    function PageAction(presetPageAction) {
        this.origin = PageAction.prototype;
        if (presetPageAction) for (var key in presetPageAction) if (presetPageAction.hasOwnProperty(key)) this[key] = presetPageAction[key]
    }
    PageAction.prototype = {
        goBack: function () {
            if (document.referrer) window.history.go(-1);
            else {
                var backAddress = $('meta[name="backAddress"]').attr("content");
                if (backAddress) window.location.href = backAddress;
                else window.location.href = "/"
            }
        },
        getLogin: function (cb) {
            ek.isApp ? ek.app.isAppLogin(cb) : ek.loginLite.isLogin_async(cb)
        },
        goLogin: function (retUrl) {
            retUrl = retUrl || window.location.href;
            ek.isApp ? ek.app.appLogin(function () {
                if (window.location.href === retUrl) window.location.reload();
                else window.location.href = retUrl
            }) : ek.loginLite.login(retUrl, !ek.isApp)
        }
    };
    var pageAction = new PageAction(window.pageAction || window.presetPageAction);
    return pageAction
}();
var TokenKey = {
    _data: undefined,
    _loading: false,
    clearCache: function () {
        this._data = null
    },
    set: function (token) {
        if (!token) return;
        this._data = token
    },
    get: function (cb) {
        var self = this,
            data = self._data;
        if (data !== undefined || ek.isApp) {
                cb && cb(data);
                return
            }
        if (self._loading) {
                window.setTimeout(function () {
                    self.getData(cb)
                }, 100);
                return
            }
        self._loading = true;
        ek.ajax({
                url: "/Ajax/getToken",
                data: {},
                success: function (res) {
                    console.log("\u8bf7\u6c42\u6210\u529f\uff1a", this);
                    console.log("\u8fd4\u56de\u6570\u636e\uff1a", res);
                    self._loading =
                    false;
                    var data = res && res.data,
                        token = data && data.token || "";
                    self._data = token;
                    cb && cb(token)
                }
            })
    }
};
if (typeof module != "undefined" && module.exports) module.exports = TokenKey;
!
function (a) {
    function b(a) {
        var b = new RegExp("(^|&)" + a + "=([^&]*)(&|$)"),
            c = location.search.substr(1).match(b);
        return null != c ? decodeURIComponent(c[2]) : null
    }
    function c() {
        var a = "iframe_hijack_redirected";
        if (b(a)) f(0);
        else if (self != top) {
            var c = location.href,
                d = c.split("#");
            d[0] += location.search ? "&" + a + "=1" : "?" + a + "=1";
            try {
                    top.location = d.join("#")
                } catch (e$12) {}
        }
    }
    function d() {
        if (a.XMLSerializer) {
            var b = (new XMLSerializer).serializeToString(document),
                c = b.match(/\x3c!--headTrap.*?--\x3e/),
                d = b.match(/\x3c!--tailTrap.*?--\x3e/);
                (c && c[0] && c[0].length > 54 || d && d[0] && d[0].length > 54) && f(3)
        }
    }
    function e(a) {
        var b = a ? a.srcElement : document.documentElement;
        if (b.outerHTML) {
            for (var c = /(https?:)?\/\/[a-zA-Z0-9\._-]+\.[a-zA-Z]{2,6}(:[0-9]{1,6})?\/?[^'")\s]*/gi, d = /^(https?:)?\/\/([a-zA-Z0-9\._-]+\.[a-zA-Z]{2,6})/i, e = [], g = [b], h = b.getElementsByTagName("*"), i = 0; i < h.length; i++) g.push(h[i]);
            for (var i = 0; i < g.length; i++) {
                var j = g[i],
                    l = null;
                if ("IMG" == j.nodeName.toUpperCase() && j.src && d.test(j.src)) l = [j.src];
                else if ("LINK" == j.nodeName.toUpperCase()) {
                        var m =
                        j.getAttribute("href");
                        m && d.test(m) && (l = [m])
                    } else "STYLE" == j.nodeName.toUpperCase() ? l = j.innerHTML.match(c) : "IFRAME" == j.nodeName.toUpperCase() && j.src && d.test(j.src) ? l = [j.src] : j.getAttribute("style") && (l = j.getAttribute("style").match(c));
                if (l) {
                        for (var n = !1, o = 0; o < l.length; o++) {
                            var p = d.exec(l[o]);
                            p && p[2] && k.test(p[2]) || (e.push(l[o]), n = !0)
                        }
                        n && j.setAttribute("style", "display:none;position:fixed;top:10000px;")
                    }
            }
            e.length && (a && b.setAttribute("style", "display:none;position:fixed;top:-10000px;"), f(a ? 2 : 1, e))
        }
    }

    function f(a, b) {
        if (!l[a]) {
            l[a] = !0;
            var c = {
                project_id: j,
                department_id: i,
                hijack_type: a,
                page_url: location.href,
                blocked: 1
            };
            if (b && (c.ad_url = b.join("||")), 1 == a) {
                for (var d = document.head.outerHTML, e = document.body.children, f = 0; f < e.length; f++) {
                    var g = e[f];
                    "IFRAME" == g.nodeName.toUpperCase() && g.src && 0 != g.src.indexOf("http") || (d += g.outerHTML)
                }
                d = d.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, ""),
                d = d.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, ""),
                c.html_dom = d
            }
            setTimeout(function () {
                h(c)
            }, 500)
        }
    }
    function g() {
        50 * Math.random() < 1 && h({
            project_id: j,
            department_id: i,
            pv: 1
        })
    }
    function h(a) {
        var b = [];
        for (var c in a) b.push(c + "=" + encodeURIComponent(a[c]));
        var d = new XMLHttpRequest;
        d.open("POST", "http://hijack.qq.com/cgi/r", !0),
        d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
        d.send(b.join("&"))
    }
    var i, j, k = /^.*\.(qq\.com|gtimg\.cn|qlogo\.cn|qpic\.cn|sogoucdn\.com)$/i,
        l = {};
    a.HijackReport = {
            init: function (a) {
                i = a.departmentId,
                j = a.projectId,
                a.whiteReg && (k = a.whiteReg)
            },
            watch: function () {
                a.addEventListener("DOMNodeInserted", e),
                c(),
                document.addEventListener("DOMContentLoaded", function () {
                    e(),
                    d(),
                    g()
                }, !1)
            }
        }
}(window);
HijackReport.init({
    departmentId: 3,
    projectId: 10,
    whiteReg: /^.*\.(qq\.com|gtimg\.com|gtimg\.cn|qpic\.cn|qlogo\.cn|idqqimg\.com)$/i
});
HijackReport.watch();
(function () {
    function initUlink($target, dm, str, cssObj) {
        var href = "https://universallink.m.ac.qq.com/Client:";
        if (ek.isIOS && !ek.isApp) {
            if ($target.is("a")) $target.attr({
                "data-ulink": "ulink",
                "href": href + dm + "/" + str
            });
            else {
                var html = "<a data-ulink='ulink' class='ulink' href='" + href + dm + "/" + str + "'>";
                $target.prepend(html);
                $target.css(cssObj)
            }
            $('a[data-ulink="ulink"]').click(function (e) {
                e.stopPropagation()
            })
        }
    }
    window.initUlink = initUlink
})();