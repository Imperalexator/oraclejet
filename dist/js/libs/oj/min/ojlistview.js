/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdomscroller"],function(b,f){b.zc=function(a,b,c){this.sb=b;this.u=a;this.Uy=!1;this.Q4(c);this.Init()};b.b.ga(b.zc,b.b,"oj.DataSourceContentHandler");b.zc.prototype.Init=function(){b.zc.q.Init.call(this)};b.b.g("DataSourceContentHandler.prototype.Init",{Init:b.zc.prototype.Init});b.zc.prototype.HandleResize=function(){};b.zc.prototype.Ne=function(){f(this.sb).empty();this.sb=this.u=null};b.zc.prototype.Qr=function(){return!this.Uy};b.zc.prototype.PO=
function(){this.jl()?this.sb.setAttribute("role","tree"):this.sb.setAttribute("role","listbox")};b.zc.prototype.dQ=function(){this.cb();this.Do(!1);this.PO();this.$a()};b.zc.prototype.sd=function(a){return a.key};b.zc.prototype.Hd=function(a){var b,c,e;b=f(this.sb).find("."+this.u.Lf());for(c=0;c<b.length;c++)if(e=b[c],a==this.sd(e))return e;return null};b.zc.prototype.getDataSource=function(){return this.yg};b.zc.prototype.Q4=function(a){this.yg=a};b.zc.prototype.Do=function(){};b.zc.prototype.HM=
function(a,b,c,e,g){var h;h=document.createElement("li");f(h).uniqueId();a.insertBefore(h,b===a.childElementCount?null:a.children[b]);this.FS(h,b,a,b,c,e,g)};b.zc.prototype.vea=function(a){var b,c,e;a=a.target;f(a).empty().removeClass("oj-listview-item-add-remove-transition").off("transitionend",this.eO);b=f.data(a,"ctx");f.removeData(a,"ctx");c=a.parentNode;e=f(c).children().index(a);this.FS(a,e,c,b.index,b.data,b.b4,b.Cb)};b.zc.prototype.wpa=function(a,b,c,e,g){null==this.eO&&(this.eO=this.vea.bind(this));
f.data(a,"ctx",{index:b,data:c,b4:e,Cb:g});this.cb();f(a).addClass("oj-listview-item-add-remove-transition").on("transitionend",this.eO).css("opacity",0)};b.zc.prototype.FS=function(a,b,c,e,f,h,k){void 0==k&&(k=this.Wq.bind(this));e=this.XM(e,f,h,a);h=this.u.vda();null!=h?(f=h.call(this,e),null!=f&&(null===f.parentNode||f.parentNode instanceof DocumentFragment?a.appendChild(f):null==f.parentNode&&f.toString&&(h=document.createElement("span"),h.appendChild(document.createTextNode(f.toString())),a.appendChild(h)))):
(h=document.createElement("span"),h.appendChild(document.createTextNode(null==f?"":f.toString())),a.appendChild(h));a=c.children[b];e.parentElement=a;k(a,e)};b.zc.prototype.Wq=function(a,b){var c;a.key=b.key;a=f(a);a.uniqueId();c=this.u.gE(a);c.attr("role",this.jl()?"treeitem":"option");c!=a&&a.attr("role","presentation");c.addClass(this.u.Ok());this.TN(b)||a.addClass("oj-skipfocus");a.addClass(this.u.Lf())};b.zc.prototype.XM=function(a,b,c,e){var f,h;f={};f.parentElement=e;f.index=a;f.data=b;f.component=
this.u.vg();f.datasource=this.getDataSource();for(h in c)c.hasOwnProperty(h)&&(f[h]=c[h]);return f};b.zc.prototype.TN=function(a){return this.u.Fw("focusable",a,!0)};b.zc.prototype.mE=function(a){return this.u.Fw("selectable",a,!0)};b.zc.prototype.cb=function(){this.u.cb()};b.zc.prototype.$a=function(){this.u.$a()};b.rb=function(a,d,c){b.rb.q.constructor.call(this,a,d,c)};b.b.ga(b.rb,b.zc,"oj.TableDataSourceContentHandler");b.rb.prototype.Init=function(){b.rb.q.Init.call(this)};b.rb.prototype.jl=
function(){return!1};b.rb.prototype.Ne=function(){b.rb.q.Ne.call(this);this.RZ();null!=this.Fu&&(this.Fu.destroy(),this.hO=this.Fu=null);this.Vy=null};b.rb.prototype.HandleResize=function(a,b){this.xi()&&void 0!=this.W3&&this.W3!=b&&(this.W3=b,this.checkViewport())};b.rb.prototype.xi=function(){return"loadMoreOnScroll"==this.u.options.scrollPolicy?!0:!1};b.rb.prototype.ok=function(){return Math.max(0,this.u.options.scrollPolicyOptions.fetchSize)};b.rb.prototype.$I=function(){return this.u.options.scrollPolicyOptions.maxCount};
b.rb.prototype.Q4=function(a){var d;this.RZ();if(null!=a){this.xi()&&(d=this,this.hO=function(a){null!=a?(d.cb(),d.jL(),d.Qr()&&d.cb(),d.KJ(a),a.maxCountLimit?d.QJ():d.TS(),d.$a(),d.$a()):void 0===a&&(d.jL(),d.$a())},this.Fu=new b.Xf(this.u.EN(),a,{fetchSize:this.ok(),maxCount:this.$I(),success:this.hO,error:this.$a}),this.Fu.RJ=function(a,e){1>=e-a&&d.cb();b.Xf.prototype.RJ.call(this,a,e)});this.V3=this.poa.bind(this);this.U3=this.ooa.bind(this);this.Q3=this.koa.bind(this);this.S3=this.moa.bind(this);
this.R3=this.loa.bind(this);this.T3=this.noa.bind(this);if(b.ka&&a instanceof b.ka)a.on("sync",this.V3);a.on("sort",this.U3);a.on("add",this.Q3);a.on("remove",this.S3);a.on("change",this.R3);a.on("reset",this.T3)}this.yg=a};b.rb.prototype.TS=function(){var a,b;null==this.Vy&&(a=f(document.createElement("li")),a.uniqueId().attr("role","presentation").addClass(this.u.Ij()),b=f(document.createElement("div")),b.addClass("oj-listview-loading-icon"),a.append(b),f(this.sb).append(a),this.Vy=a)};b.rb.prototype.jL=
function(){null!=this.Vy&&this.Vy.remove();this.Vy=null};b.rb.prototype.Wq=function(a,d){var c;b.rb.q.Wq.call(this,a,d);f(a).addClass(this.u.Ij());this.u.wk()&&this.mE(d)&&this.u.me(f(a)).attr("aria-selected",!1);this.xi()&&(c=Math.min(this.yg.totalSize(),this.$I()),-1===c&&(c=this.$I()),0<c&&f(a).attr("aria-setsize",c).attr("aria-posinset",d.index+1));this.u.Qy(a,d)};b.rb.prototype.uma=function(a,b){var c,e,g;this.cb();this.Wq(a,b);c=f(a);e=c.outerHeight();c.css("opacity","0");c.css("maxHeight",
"0");g=this.u.Ij();c.children().wrapAll("\x3cdiv\x3e\x3c/div\x3e");c.removeClass(g).addClass("oj-listview-item-add-remove-transition");c.children().first().addClass(g);null==this.cO&&(this.cO=this.tea.bind(this));f.data(a,"ctx",b);c.on("transitionend",this.cO);this.cb();requestAnimationFrame(function(){c.css("opacity","1");c.css("maxHeight",e+"px")});this.$a()};b.rb.prototype.QJ=function(){b.r.error("max count reached")};b.rb.prototype.RZ=function(){null!=this.yg&&(this.yg.off("sync",this.V3),this.yg.off("sort",
this.U3),this.yg.off("add",this.Q3),this.yg.off("remove",this.S3),this.yg.off("change",this.R3),this.yg.off("reset",this.T3))};b.rb.prototype.Do=function(a){var d=!0,c;this.cb();if(this.Qr()&&(this.Uy=!0,b.ka&&this.yg instanceof b.ka&&(d=!1,this.cb()),d||a)){d&&this.cb();a={fetchType:"init",startIndex:0};this.xi()&&(a.pageSize=this.ok());c=this;a=this.yg.fetch(a);a.then(function(a){d&&(c.KJ(a),c.xi()&&c.TS())},function(a){c.Nl(a);c.$a()});this.$a();return}this.$a()};b.rb.prototype.Nl=function(a){b.r.error(a);
this.xi()&&this.jL();this.u.Xo()};b.rb.prototype.Pn=function(a,b){var c,e,f;c=this.sb.childElementCount;for(e=0;e<a.length;e++)f=a[e],this.HM(this.sb,c,f,this.getMetadata(c,b[e],f)),c+=1};b.rb.prototype.koa=function(a){var b,c,e;if(null!=this.sb){this.cb();b=a.data;c=a.keys;a=a.indexes;if(null!=b&&null!=c&&0<c.length&&0<b.length&&c.length==b.length&&null!=a&&c.length==a.length){for(e=0;e<b.length;e++)this.cb(),this.HM(this.sb,a[e],b[e],this.getMetadata(a[e],c[e],b[e]),this.uma.bind(this)),this.$a();
this.Qr()&&this.cb();this.b2()}this.$a()}};b.rb.prototype.tea=function(a){var b;a=a.target;b=f.data(a,"ctx");f.removeData(a,"ctx");f(a).removeClass("oj-listview-item-add-remove-transition").addClass(this.u.Ij()).off("transitionend",this.cO).children().children().unwrap();this.u.H3(a,b);this.$a()};b.rb.prototype.moa=function(a){var b,c;a=a.keys;if(null!=this.sb&&null!=a&&0!=a.length){this.cb();for(b=0;b<a.length;b++)c=this.Hd(a[b]),null!=c&&(this.cb(),this.wja(c),this.$a());this.u.Kr();this.$a()}};
b.rb.prototype.wja=function(a){var b,c=this;this.cb();null==this.sO&&(this.sO=this.yfa.bind(this));b=this.u.Ij();a=f(a);a.children().wrapAll("\x3cdiv class\x3d'"+b+"'\x3e\x3c/div\x3e");a.removeClass(b).css("maxHeight",a.outerHeight()+"px").addClass("oj-listview-item-add-remove-transition").on("transitionend",this.sO);setTimeout(function(){c.cb();a.css("opacity","0");a.css("maxHeight","0px");c.$a()},10)};b.rb.prototype.yfa=function(a){var b;a=f(a.target);b=a.parent();a.off("transitionend",this.sO);
this.u.WN(a.get(0));a.remove();0==b.get(0).childElementCount&&this.u.Xo();this.$a()};b.rb.prototype.loa=function(a){var b,c,e,f;b=a.keys;if(null!=this.sb&&null!=b&&0!=b.length){this.cb();c=a.data;a=a.indexes;for(e=0;e<b.length;e++)f=this.Hd(b[e]),null!=f&&(this.cb(),this.wpa(f,a[e],c[e],this.getMetadata(a[e],b[e],c[e]),this.tma.bind(this)),this.$a());this.u.Kr();this.$a()}};b.rb.prototype.tma=function(a,b){var c=this;this.cb();f(a).css("opacity",0);this.Wq(a,b);null==this.dO&&(this.dO=this.uea.bind(this));
f(a).on("transitionend",this.dO);setTimeout(function(){f(a).addClass("oj-listview-item-add-remove-transition").css("opacity",1);c.$a()},10)};b.rb.prototype.uea=function(a){f(a.target).removeClass("oj-listview-item-add-remove-transition").off("transitionend",this.dO);this.u.zpa();this.$a()};b.rb.prototype.noa=function(){null!=this.sb&&(this.cb(),f(this.sb).empty(),this.u.Kr(),this.Do(!0),this.$a())};b.rb.prototype.KJ=function(a){var b;null!=this.sb&&(b=a.data,a=a.keys,Array.isArray(b)&&Array.isArray(a)&&
b.length==a.length&&(this.Pn(b,a),this.b2()))};b.rb.prototype.poa=function(a){null!=this.sb&&(this.cb(),0===a.startIndex&&f(this.sb).empty(),this.u.Kr(),this.KJ(a),this.$a())};b.rb.prototype.ooa=function(){null!=this.sb&&(this.cb(),f(this.sb).empty(),this.u.Kr(),this.u.qj()&&this.u.Up(!0),this.Do(!0),this.$a())};b.rb.prototype.b2=function(){this.Uy=!1;this.u.Xo();this.checkViewport();this.$a()};b.rb.prototype.checkViewport=function(){var a=this,b;this.cb();null!=this.Fu&&0<this.yg.totalSize()&&this.Qr()&&
(b=this.Fu.checkViewport(),null!=b&&(this.cb(),b.then(function(b){a.hO(b);a.$a()},null)));this.$a()};b.rb.prototype.getMetadata=function(a,b,c){c=c.context;null==c&&(c={});null==c.index&&(c.index=a);null==c.key&&(c.key=b);return c};b.Lg=function(a,d,c){b.Lg.q.constructor.call(this,a,d,c)};b.b.ga(b.Lg,b.zc,"oj.TreeDataSourceContentHandler");b.Lg.prototype.Init=function(){b.Lg.q.Init.call(this)};b.Lg.prototype.jl=function(){return!0};b.Lg.prototype.Do=function(){this.cb();this.Hf(0,null,this.sb,null);
this.$a()};b.Lg.prototype.Hf=function(a,b,c,e){this.cb();this.Uy=!0;a={start:a,count:this.yg.$e(b)};this.yg.Hf(b,a,{success:function(a){this.Pn(a,b,c,e)}.bind(this),error:function(a){this.Nl(a)}.bind(this)});this.$a()};b.Lg.prototype.Pn=function(a,b,c,e){var f,h,k,l;this.cb();b=a.ta();f=a.R();for(h=0;h<f;h++)k=a.getData(b+h),l=a.getMetadata(b+h),this.HM(c,b+h,k,l);this.Uy=!1;null!=e&&e.call(null,c);this.u.Xo();this.$a()};b.Lg.prototype.Wq=function(a,d){var c,e,g,h,k,l;this.cb();b.Lg.q.Wq.call(this,
a,d);c=this.u.Gi();e=this.u.Ij();g=this.u.mh();h=this.u.dr();l=this.u.Gj();k=this.u.Ok();a=f(a);!1==d.leaf?(a.children().wrapAll("\x3cdiv\x3e\x3c/div\x3e"),a.hasClass(k)?a.removeClass(k).children().first().addClass(k).attr("aria-expanded","false"):a.children().first().attr("role","presentation").find("."+k).attr("aria-expanded","false"),e=a.children().first(),e.uniqueId().addClass(g),this.u.Eu()&&(a.addClass("oj-collapsed"),g=document.createElement("a"),f(g).attr("href","#").attr("aria-labelledby",
e.get(0).id).addClass("oj-component-icon oj-clickable-icon-nocontext").addClass(l),e.prepend(g)),l=document.createElement("ul"),f(l).addClass(c).addClass(h).attr("role","group"),a.append(l)):!0==d.leaf&&a.addClass(e);this.u.wk()&&this.mE(d)&&this.u.me(a).attr("aria-selected",!1);this.u.Qy(a[0],d);this.$a()};b.Lg.prototype.Nl=function(a){this.cb();b.r.error(a);this.u.Xo();this.$a()};b.Lg.prototype.Or=function(a,b){var c,e;this.cb();c=this.sd(a[0]);e=a.children("ul")[0];this.Hf(0,c,e,b);this.$a()};
b.Lg.prototype.Lr=function(a){a.empty()};b.Rc=function(a,b){this.u=a;this.sb=b};b.b.ga(b.Rc,b.b,"oj.StaticContentHandler");b.Rc.prototype.Init=function(){b.Rc.q.Init.call(this)};b.Rc.prototype.Ne=function(){this.J4(this.sb,0);this.iqa()};b.Rc.prototype.Qr=function(){return!0};b.Rc.prototype.HandleResize=function(){};b.Rc.prototype.dQ=function(){this.g4(this.sb,0);this.PO();this.u.Xo()};b.Rc.prototype.Or=function(a,b){var c;c="."+this.u.Gi();c=f(a).children(c)[0];f(c).css("display","block");b.call(null,
c)};b.Rc.prototype.Lr=function(){};b.Rc.prototype.jl=function(){null==this.mO&&(this.mO=0<f(this.sb).children("li").children("ul").length);return this.mO};b.Rc.prototype.J4=function(a,b){var c,e,g,h,k,l,m,n,p,r;c=this.u.Gi();e=this.u.dr();g=this.u.wu();h=this.u.mh();k=this.u.Ij();l=this.u.Lf();m=a.children;for(n=0;n<m.length;n++)p=m[n],this.hqa(p),p=f(p),p.removeClass(l).removeClass(k).removeClass(this.u.uN(b)).removeClass("oj-skipfocus").removeClass("oj-focus").removeClass("oj-hover").removeClass("oj-expanded").removeClass("oj-collapsed").removeClass("oj-selected"),
r=p.children("ul"),0<r.length&&(p.children("."+h).children().unwrap(),p.children(".oj-component-icon").remove(),p=f(r[0]),p.removeClass(c).removeClass(g).removeClass(e).removeAttr("role"),this.J4(p[0],b+1))};b.Rc.prototype.g4=function(a,b){var c,e,g,h,k,l,m,n,p,r,s,q,t,w,x;c=this.u.Ij();e=this.u.Lf();g=this.u.Gi();h=this.u.mh();k=this.u.dr();l=this.u.Gj();m=this.u.Ok();n=a.children;p=this.u.Eu();for(r=0;r<n.length;r++)s=f(n[r]),q=this.XM(s),this.Fpa(s),s.uniqueId().addClass(e),0<b&&s.addClass(this.u.uN(b)),
this.TN(q)||s.addClass("oj-skipfocus"),t=s.children("ul"),0<t.length?(this.mO=!0,s.children(":not(ul)").wrapAll("\x3cdiv\x3e\x3c/div\x3e"),w=s.children().first(),w.addClass(h),this.xoa(t[0])&&(s.hasClass(m)?(s.removeClass(m),w.addClass(m).attr("aria-expanded","false")):(w.attr("role","presentation"),w.find("."+m).attr("aria-expanded","false")),p&&(s.addClass("oj-collapsed"),w.uniqueId(),x=document.createElement("a"),f(x).attr("href","#").attr("role","button").attr("aria-labelledby",w.get(0).id).addClass("oj-component-icon oj-clickable-icon-nocontext").addClass(l),
w.prepend(x))),t=f(t[0]),t.addClass(g).addClass(k).attr("role","group").css("display","none"),this.g4(t[0],b+1)):s.addClass(c),this.u.wk()&&this.mE(q)&&this.u.me(s).attr("aria-selected",!1),this.u.Qy(s[0],q)};b.Rc.prototype.PO=function(){this.jl()?this.sb.setAttribute("role","tree"):this.sb.setAttribute("role","listbox")};b.Rc.prototype.iqa=function(){this.sb.removeAttribute("role")};b.Rc.prototype.xoa=function(a){return 0<f(a).children("li").length};b.Rc.prototype.XM=function(a){var b;b={};b.key=
a.attr("id");b.parentElement=a.children().first()[0];b.index=a.index();b.data=a[0];b.component=this.u.vg();this.jl()&&(b.leaf=0==a.children("ul").length,a=a.parents("li."+this.u.Lf()),b.depth=a.length,b.parentKey=0==a.length?null:a.first().attr("id"));return b};b.Rc.prototype.Fpa=function(a){var b=this.u.gE(a);b.attr("role",this.jl()?"treeitem":"option");b!=a&&a.attr("role","presentation");b.addClass(this.u.Ok())};b.Rc.prototype.hqa=function(a){a=this.u.gE(f(a));a.removeAttr("role");a.removeAttr("aria-selected");
a.removeAttr("aria-expanded");a.removeClass(this.u.Ok())};b.Rc.prototype.sd=function(a){return f(a).attr("id")};b.Rc.prototype.Hd=function(a){return document.getElementById(a)};b.Rc.prototype.TN=function(a){return this.u.Fw("focusable",a,!0)};b.Rc.prototype.mE=function(a){return this.u.Fw("selectable",a,!0)};b.HK=function(a,d){function c(){}b.b.ga(c,a,"");c.prototype=f.extend(c.prototype,d);return c}(Object,{fv:37,rz:39,$E:40,CF:38,I6:9,V5:13,W5:27,X5:113,G6:32,Yi:0,Xi:1,gQ:2,rqa:0,jp:1,sm:function(a){var d=
this;this.Wo=[];this.cb();this.W=a.W;this.element=a.element;this.options=a;this.element.uniqueId().addClass(this.hF()+" oj-component-initnode").attr("tabIndex",0);this.W._on(this.element,{click:function(a){d.mF(a)},touchstart:function(a){d.JP(a)},touchend:function(a){d.nF(a)},touchcancel:function(a){d.nF(a)},mousedown:function(a){0!==a.button||d.Cx()||d.JP(a)},mouseup:function(a){d.gX(a);d.rO=!1},mouseout:function(a){d.eX(a)},mouseover:function(a){d.sfa(a)},keydown:function(a){d.IP(a)},focus:function(a){d.lF(a)},
blur:function(a){d.kF(a)},ojpanmove:function(a){d.gX(a)}});b.Ma.ty().browser===b.Ma.il.yP&&this.W._on(this.hd(),{focus:function(){d.element.focus()}});this.jp===this.jp?this.W._on(this.element,{focusin:function(a){d.lF(a)},focusout:function(a){d.i6(a)}}):this.W._on(this.element,{focus:function(a){d.lF(a)},blur:function(a){d.kF(a)}});this.W.document.bind("touchend.ojlistview touchcancel.ojlistview",this.nF.bind(this));this.NZ()},ju:function(){var a;this.E$();this.DX();a=this.hd();this.vj(a[0]);this.$a()},
refresh:function(){this.h_();this.cb();this.mv();this.DX();this.NZ();this.$a()},whenReady:function(){return this.B4},destroy:function(){this.element.removeClass(this.hF()+" oj-component-initnode");this.Gk(this.hd());this.h_();b.v.unwrap(this.element,this.hd());this.W.document.off(".ojlistview")},h_:function(){var a=this;this.DF();this.baa(this.element);null!=this.Ge&&(this.Ge.Ne(),this.Ge=null);this.kb=null;this.Wo=[];this.B4=new Promise(function(b){a.C4=b});this.Kr()},n4:function(){this.hd().removeClass("oj-focus-ancestor");
null!=this.kb&&f(this.kb.elem).removeClass("oj-focus");null!=this.nO&&this.$l(this.nO,"oj-hover")},Rra:function(){},getNodeBySubId:function(a){var b;if(null==a)return this.element?this.element[0]:null;b=a.subId;if("oj-listview-disclosure"===b||"oj-listview-icon"===b)if(a=a.key,a=this.Hd(a),null!=a&&a.firstElementChild&&(a=a.firstElementChild.firstElementChild,null!=a&&(f(a).hasClass(this.jm())||f(a).hasClass(this.Gj()))))return a;return null},getSubIdByNode:function(a){if(null!=a&&f(a).hasClass(this.jm())||
f(a).hasClass(this.Gj()))if(a=this.Ti(a),null!=a&&0<a.length&&(a=this.sd(a[0]),null!=a))return{subId:"oj-listview-disclosure",key:a};return null},Gk:function(a){a&&this.Fe&&b.v.Sh(a,this.Fe)},vj:function(a){a&&(null==this.Fe&&(this.Fe=this.Ue.bind(this)),b.v.gh(a,this.Fe))},Ue:function(a,b){0<a&&0<b&&null!=this.Ge&&this.Ge.HandleResize(a,b)},jQ:function(a){return null!=a.data||null!=a.drillMode||null!=a.groupHeaderPosition||null!=a.item||null!=a.scrollPolicy||null!=a.scrollPolicyOptions},Cr:function(a){var b,
c,e,g;if(this.jQ(a))return null!=a.data&&(null==a.currentItem&&this.yh("currentItem",null),null==a.selection&&this.Up(!0)),!0;null!=a.currentItem?(c=this.Hd(a.currentItem),null!=c&&(c=f(c),this.bi(c)||this.rn(c,null))):null===a.currentItem&&(this.vz(),this.kb=null);null!=a.expanded&&this.Ge.jl()&&(c=a.expanded,Array.isArray(c)&&(this.cb(),this.oaa(),b=this,f.each(c,function(a,c){b.eN(c,!0,!0,!0)}),this.$a()));if(null!=a.selection&&this.wk())for(a.selection=this.vca(a.selection),e=a.selection,this.Up(!1),
g=0;g<e.length;g++)c=this.Hd(e[g]),null!=c&&this.Vv(c,e[g]);null!=a.selectionMode&&(this.Up(!0),this.mv());return!1},Zm:function(a,b,c){return this.W._trigger(a,b,c)},yh:function(a,b,c){this.W.option(a,b,c)},Sd:function(a){return this.W.option(a)},cb:function(){var a=this;this.Wo&&(0==this.Wo.length&&(this.B4=new Promise(function(b){a.C4=b})),this.Wo.push(1))},$a:function(){this.Wo&&0<this.Wo.length&&(this.Wo.pop(),0==this.Wo.length&&this.C4(null))},DX:function(){var a;this.cb();a=this.Sd("data");
if(null!=a){if("undefined"===typeof b.T||"undefined"===typeof b.qp)throw"oj.TableDataSource or oj.TreeDataSource not found. Ensure the required modules are imported";if(a instanceof b.T)this.Ge=new b.rb(this,this.element[0],a);else if(a instanceof b.qp)this.Ge=new b.Lg(this,this.element[0],a);else throw"Invalid data";}else this.Ge=new b.Rc(this,this.element[0]);this.ila();this.Ge.dQ();this.$a()},K6:function(a){this.element.attr("aria-activedescendant",a.attr("id"))},mv:function(){this.element.attr("aria-activedescendant",
"");this.qj()?this.element.attr("aria-multiselectable",!0):this.wk()&&this.element.attr("aria-multiselectable",!1)},DF:function(){this.element.removeAttr("aria-activedescendant").removeAttr("aria-multiselectable")},E$:function(){var a,b;a=this.hd();this.mv();b=this.H$();a.append(b);this.Y3=b},H$:function(){var a=f(document.createElement("div"));a.addClass("oj-listview-status").attr({id:this.QH("status"),role:"status"});return a},ila:function(){var a=this.W.A("msgFetchingData");this.Y3.text(a).show()},
Qfa:function(){this.Y3.hide()},EN:function(){return this.hd()},hd:function(){null==this.Ty&&(this.Ty=this.Qaa());return this.Ty},Qaa:function(){var a=f(document.createElement("div"));a.addClass(this.EP()).addClass("oj-component");this.element.parent()[0].replaceChild(a[0],this.element[0]);a.prepend(this.element);return a},jda:function(){return this.W.A("msgNoData")},A$:function(){var a,b;a=this.jda();b=document.createElement("li");b.id=this.QH("empty");b.className="oj-listview-empty-text";b.textContent=
a;return b},Qe:function(a){a=this.me(a).attr("aria-expanded");return"true"==a?this.Yi:"false"==a?this.Xi:this.gQ},pp:function(a,b){var c=this.Eu();b==this.Yi?(this.me(a).attr("aria-expanded","true"),c&&a.removeClass("oj-collapsed").addClass("oj-expanded")):b==this.Xi&&(this.me(a).attr("aria-expanded","false"),c&&a.removeClass("oj-expanded").addClass("oj-collapsed"))},Fw:function(a,b,c){a=this.options.item[a];return"function"==typeof a&&c?a.call(this,b):a},vda:function(){var a=this.Fw("renderer",null,
!1);return"function"!=typeof a?null:a},H3:function(){},WN:function(a){var b;if(null!=a&&a.id&&null!=this.Yk)for(b in this.Yk)if(this.Yk.hasOwnProperty(b)&&this.Yk[b]===a.id){delete this.Yk[b];break}},Qy:function(a,b){var c,e,g,h;this.eI(a);if(this.wk())if(c=this.Sd("selection"),this.wh(a))for(g=0;g<c.length;g++){if(c[g]==b.key&&(this.Vv(a,c[g]),!this.qj())){1<c.length&&(e=f(this.Hd(b.key)),this.yh("selection",[b.key],{_context:{originalEvent:null,Za:!0,Ej:{items:e}},changed:!0}));break}}else if(g=
c.indexOf(b.key),-1<g){c=c.slice(0);c.splice(g,1);e=Array(c.length);for(g=0;g<c.length;g++)e[g]=this.Hd(c[g]);this.yh("selection",c,{_context:{originalEvent:null,Za:!0,Ej:{items:f(e)}},changed:!0})}this.Ge.jl()&&this.Qe(f(a))==this.Xi&&(g=this.Sd("expanded"),this.zt()?this.ip(f(a),null,!1,null,!1,!1,!1):Array.isArray(g)&&(h=this,f.each(g,function(c,e){e==b.key&&h.ip(f(a),null,!1,null,!1,!1,!1)})));null!=this.kb&&b.key==this.kb.key&&null!=this.kb.elem&&a!=this.kb.elem.get(0)&&(this.kb.elem=f(a))},
Xo:function(){var a;this.Qfa();f(document.getElementById(this.QH("empty"))).remove();0==this.element[0].childElementCount?(a=this.A$(),this.element.append(a)):(this.Gu=null,a=this.Sd("currentItem"),null==this.kb&&null!=a&&(a=this.Hd(a),null==a||this.bi(f(a))||this.rn(f(a),null)),this.hd().hasClass("oj-focus-ancestor")&&null==this.kb&&this.HX());this.Zm("ready",null,{})},zpa:function(){var a=this.Sd("currentItem");null!=a&&(a=this.Hd(a),null==a||this.bi(f(a))||this.rn(f(a),null))},Kr:function(){this.lO=
this.Gu=null},m4:function(a,b,c){if(this.oz(f(b.target)))return!1;a=f(b.target).closest("."+this.Lf());0<a.length&&!this.bi(f(a[0]))&&this.rn(f(a[0]),null);a={launcher:this.element,initialFocus:"menu"};"keyboard"===c&&(a.position={my:"start top",at:"start bottom",of:this.kb.elem});this.W.qf(b,c,a)},MP:function(a){return null!=a.prop("nodeName").match(/^INPUT|SELECT|OPTION|BUTTON|^A\b|TEXTAREA/)},oz:function(a){for(;null!=a&&a[0]!=this.element[0]&&"LI"!=a.prop("nodeName");){if(3!=a[0].nodeType){var b=
a.attr("tabIndex"),c=a.attr("data-oj-tabindex");if(null!=b&&0<=b&&!a.hasClass(this.Ok())||this.MP(a)&&(-1!=b||-1!=c))return!0}a=a.parent()}return!1},eI:function(a){var b;f(a).find("a, input, select, textarea, button, object, .oj-component-initnode").each(function(){f(this).removeAttr("data-first").removeAttr("data-last");b=parseInt(f(this).attr("tabIndex"),10);(isNaN(b)||0<=b)&&f(this).attr("tabIndex",-1).attr("data-tabmod",isNaN(b)?-1:b)})},dca:function(a){var b;a=f(a).find("[data-tabmod]").each(function(){b=
parseInt(f(this).attr("data-tabmod"),10);f(this).removeAttr("data-tabmod");-1==b?f(this).removeAttr("tabIndex"):f(this).attr("tabIndex",b)});a.first().attr("data-first","true");a.last().attr("data-last","true")},baa:function(a){f(a).find("[data-tabmod]").removeAttr("tabIndex").removeAttr("data-tabmod").removeAttr("data-first").removeAttr("data-last")},bi:function(a){return a.hasClass("oj-skipfocus")},lF:function(a){this.hd().addClass("oj-focus-ancestor");null==this.kb?this.Dt()||this.rO||this.HX(a):
this.rO||this.cv()},HX:function(a){var b,c,e;b=this.Gw();for(c=0;c<b.length;c++)if(e=f(b[c]),!this.bi(e)){this.rn(e,a);break}},i6:function(a){this.kF(a)},kF:function(a){null!=a.relatedTarget&&f.contains(this.element.get(0),a.relatedTarget)||(this.hd().removeClass("oj-focus-ancestor"),this.vz())},eX:function(a){a=this.Ti(a.target);null!=a&&(this.nO=null,this.$l(a,"oj-hover"))},sfa:function(a){this.Cx()||(a=this.Ti(a.target),null==a||this.bi(a)||(this.nO=a,this.dC(a,"oj-hover")))},Cx:function(){return 500>
Date.now()-this.wK},IP:function(a){var b,c;if(this.Eu()&&(b=a.keyCode,b===this.fv||b===this.rz))if(c=this.kb.elem,b===this.fv){if(this.Qe(c)==this.Yi){this.Pm(c,a,!0,this.kb.key,!0,!0);return}}else if(this.Qe(c)==this.Xi){this.ip(c,a,!0,this.kb.key,!0,!0,!0);return}!0===this.KP(a)&&a.preventDefault()},gX:function(){this.tE&&this.$l(this.tE,"oj-focus")},JP:function(a){this.rO=!0;a=this.kj(f(a.target));null==a||0==a.length||this.bi(a)||(this.hd().hasClass("oj-focus-ancestor")||this.hd().addClass("oj-focus-ancestor"),
this.tE=a,this.dC(a,"oj-focus"))},nF:function(a){null!=this.tE&&this.$l(this.tE,"oj-focus");this.wK=Date.now();this.eX(a)},mF:function(a){var b,c,e,g;0===a.button&&(b=this.Gj(),c=this.jm(),e=this.mh(),g=f(a.target),g.hasClass(c)?(this.ik(a),a.preventDefault()):g.hasClass(b)?(this.Zd(a),a.preventDefault()):(this.SX()&&null!=this.kb&&(this.xL(!1),this.eI(this.kb.elem)),b=this.kj(g),null==b||0==b.length||this.bi(b)||(this.hd().hasClass("oj-focus-ancestor")||this.hd().addClass("oj-focus-ancestor"),this.wk()&&
this.wh(b[0])?this.Dt()?this.Hfa(b,a):this.h6(b,a):this.Cea(b,a),this.Eu()&&g.closest("."+e)&&(this.Qe(b)==this.Xi?this.Zd(a):this.Qe(b)==this.Yi&&this.ik(a)))))},Dt:function(){return b.v.Qd()},VH:function(a){return b.v.Ko(a)},QH:function(a){return[this.element.attr("id"),a].join(":")},Ti:function(a){return f(a).closest("."+this.Lf())},Ega:function(a){return a.hasClass("oj-clickthrough-disabled")||a.hasClass("oj-component-initnode")||a.hasClass("oj-component")},kj:function(a){for(;0<a.length&&!this.Ega(a);){if(a.hasClass(this.Lf()))return a;
a=a.parent()}return null},Bda:function(){null==this.P3&&(this.P3=parseInt(this.hd().css("border-top-width"),10)+parseInt(this.hd().css("border-bottom-width"),10));return this.P3},w_:function(a){var b,c,e,g,h,k,l=0;b=a.offsetTop;c=a.offsetHeight;a=this.hd()[0];e=a.scrollTop;g=a.offsetHeight;null!=this.He&&(h=parseInt(this.He.style.top,10),k=f(this.He).outerHeight(),b<=h&&h<b+c?l=(c+b-h)/2:b>=h&&b<h+k&&(l=(h+k-b)/2));b>=e&&b+c<=e+g?0<l&&(a.scrollTop=e-l):(b=Math.max(0,Math.min(b-l,Math.abs(b+c-g))),
b>e&&(b+=this.Bda()),a.scrollTop=b)},sd:function(a){return this.Ge.sd(a)},Hd:function(a){var b;return null!=this.Yk&&(b=this.Yk[a],null!=b)?document.getElementById(b):this.Ge.Hd(a)},Pr:function(a){return a==this.CF||a==this.$E},Gw:function(){var a,b,c;null==this.Gu&&(a=this.dr(),b="."+this.Lf()+":visible",this.Gu=this.element.find(b).filter(function(){return(c=f(this).parent().hasClass(a))?!f(this).parent().parent().hasClass("oj-collapsed"):!0}));return this.Gu},mp:function(a,b,c){var e,g,h;if(!this.Ge.Qr())return!0;
e=!b||this.sE?this.kb.elem:this.Oo;g=!1;h=this.Gw();e=h.index(e);switch(a){case this.CF:e--;if(0<=e){for(a=f(h[e]);this.bi(a);){e--;if(0>e)return!1;a=f(h[e])}b?(this.sI(a,c),this.sE=!1):(this.rn(a,c),this.sE=!0)}g=!0;break;case this.$E:e++;if(e<h.length){for(a=f(h[e]);this.bi(a);){e++;if(e==h.length)return!1;a=f(h[e])}b?(this.sI(a,c),this.sE=!1):(this.rn(a,c),this.sE=!0)}g=!0}return g},SX:function(){return"actionable"==this.Woa},xL:function(a){this.Woa=a?"actionable":"navigation";a||this.element[0].focus()},
sqa:function(){return this.jp},me:function(a){return a.hasClass(this.Ok())?a:f(a.find("."+this.Ok()).first())},Qka:function(a){this.me(a).attr("tabIndex",0)},Qja:function(a){var b;b=!0;"presentation"===a.attr("role")&&(b=!1);a=this.me(a);b?a.removeAttr("tabIndex"):a.attr("tabIndex",-1)},sV:function(a,b){this.jp===this.jp?(null!=a&&this.Qja(a),this.Qka(b),this.element.attr("tabIndex")&&this.element.removeAttr("tabIndex")):this.K6(b)},gE:function(a){var b;b=a.children("a, input, select, textarea, button");
return 1===b.length&&0===b.first().find("a, input, select, textarea, button").length?b.first():a},A_:function(a,b){var c,e,f;null!=a?(c=a[0],c=this.sd(c),null==this.kb||c!=this.kb.key?(e={key:c,item:a},null!=this.kb&&(e.previousKey=this.kb.key,e.previousItem=this.kb.elem),f=!this.Zm("beforeCurrentItem",b,e),f||(this.kb=f={key:c,elem:a},this.sV(e.previousItem,a),this.yh("currentItem",c,{_context:{originalEvent:b,Za:!0,Ej:{item:a}},changed:!0}))):c==this.kb.key&&(this.kb=f={key:c,elem:a},this.sV(null,
a))):this.kb=null},cv:function(a){var b,c;null!=this.kb&&this.hd().hasClass("oj-focus-ancestor")&&(a=a||!1,b=this.kb.elem,this.dC(b,"oj-focus"),this.jp===this.jp&&(b=this.me(b),c=document.activeElement,!a&&b.get(0).contains(c)||b.get(0).focus()))},vz:function(){null!=this.kb&&this.$l(this.kb.elem,"oj-focus")},Cea:function(a,b){this.rn(a,b)},rn:function(a,b){this.w_(a[0]);this.vz();this.A_(a,b);this.cv()},wk:function(){return"none"!=this.Sd("selectionMode")},qj:function(){return"multiple"==this.Sd("selectionMode")},
wh:function(a){a=this.me(f(a)).get(0);return a.hasAttribute("aria-selected")},vca:function(a){var b,c,e;b=[];for(c=0;c<a.length&&(e=this.Hd(a[c]),null==e||!this.wh(e)||(b.push(a[c]),this.qj()));c++);return b},Qla:function(){var a,b;null!=this.Yk&&(a=this,f.each(this.Sd("selection"),function(c,e){b=a.Hd(e);null!=b&&a.$l(b,"oj-selected")}))},dC:function(a,b){this.np(a,b,!0)},$l:function(a,b){this.np(a,b,!1)},np:function(a,b,c){var e;a=f(a);"oj-selected"==b&&this.me(a).attr("aria-selected",c?"true":
"false");e=a.children("."+this.mh());0<e.length&&(a=f(e[0]));c?a.addClass(b):a.removeClass(b)},h6:function(a,b){var c,e;this.w_(a[0]);c=this.VH(b);e=b.shiftKey;this.qj()?c||e?!c&&e?this.sI(a,b):this.WG(a,b):this.lv(a,b):this.lv(a,b)},Hfa:function(a,b){this.qj()?this.WG(a,b):this.lv(a,b)},Up:function(a){this.Qla();a&&this.yh("selection",[],{_context:{originalEvent:null,Za:!0,Ej:{items:f()}},changed:!0});this.Oo=null},lv:function(a,b){this.Up(!1);this.WG(a,b,[])},sI:function(a,b){var c;null!=this.kb&&
(c=this.Oo,c!=a&&(this.$l(a,"oj-focus"),this.bV(this.kb.elem,a,b)))},bV:function(a,b,c){this.Up(!1);this.Oo=b;this.Ufa(a,b,c);this.cv()},Ufa:function(a,b,c){var e,g,h,k,l;e=[];g=[];h=this.Gw();a=h.index(a);k=h.index(b);a>k?b=k:(b=a,a=k);for(;b<=a;b++)k=h[b],this.wh(k)&&(l=this.Ge.sd(k),this.Vv(k,l),e.push(l),g.push(k));this.yh("selection",e,{_context:{originalEvent:c,Za:!0,Ej:{items:f(g)}},changed:!0})},Vv:function(a,b){null==this.Yk&&(this.Yk={});this.Yk[b]=f(a).attr("id");this.dC(a,"oj-selected")},
WG:function(a,b,c){var e,g;e=this.sd(a[0]);void 0==c&&(c=this.Sd("selection").slice(0));this.vz();g=c.indexOf(e);-1<g?(this.$l(a,"oj-selected"),c.splice(g,1)):(this.Oo=a,this.Vv(a,e),c.push(e));e=Array(c.length);for(g=0;g<c.length;g++)e[g]=this.Hd(c[g]);this.A_(a,b);this.cv();this.yh("selection",c,{_context:{originalEvent:b,Za:!0,Ej:{items:f(e)}},changed:!0})},uz:function(a,b,c){var e,g,h,k;e=this.Sd("selection").slice(0);g=this.kb.elem;h=this.kb.key;k=e.indexOf(h);if(-1<k){if(c)return;this.$l(g,
"oj-selected");e.splice(k,1);0==e.length&&(this.Oo=null)}else this.wh(g[0])&&(b||(this.Up(!1),e.length=0),this.Oo=g,this.Vv(g,h),e.push(h));b=Array(e.length);for(c=0;c<e.length;c++)b[c]=this.Hd(e[c]);this.yh("selection",e,{_context:{originalEvent:a,Za:!0,Ej:{items:f(b)}},changed:!0})},KP:function(a){var b,c,e,f=!1;if(null==this.kb)return!1;b=a.keyCode;c=this.kb.elem;this.SX()?b==this.W5?(this.xL(!1),this.eI(c),this.cv(!0),f=!0):b===this.I6&&(b=c.find("[data-first]"),c=c.find("[data-last]"),a.shiftKey?
0<b.length&&0<c.length&&b!=c&&a.target==b[0]&&(c[0].focus(),f=!0):0<b.length&&0<c.length&&b!=c&&a.target==c[0]&&(b[0].focus(),f=!0)):b==this.X5?(this.dca(c),b=c.find("[data-first]"),0<b.length&&(b[0].focus(),this.xL(!0))):b==this.G6&&this.wk()?(c=this.VH(a),(e=a.shiftKey)&&!c&&null!=this.Oo&&this.qj()?this.bV(this.Oo,this.kb.elem,a):this.uz(a,c&&!e&&this.qj(),!1),f=!0):b==this.V5&&this.wk()?this.uz(a,!1,!0):this.Pr(b)&&(c=this.VH(a),e=a.shiftKey,c||(f=this.mp(b,e&&this.wk()&&this.qj(),a)));return f},
Eu:function(){return"none"!=this.Sd("drillMode")},zt:function(){var a=this.Sd("expanded");if("auto"===a){if(!this.Eu())return!0}else if("all"===a)return!0;return!1},eN:function(a,b,c,e){var g=this.Hd(a);null!=g&&this.ip(f(g),null,!1,a,b,e,c)},Zd:function(a){var b=this.Ti(a.target);null!=b&&0<b.length&&this.ip(b,a,!0,null,!0,!0,!0)},ip:function(a,b,c,e,f,h,k){var l;if(this.Qe(a)==this.Xi){null==e&&(e=this.sd(a[0]));l={item:a,key:e};if(k&&(e=!this.Zm("beforeExpand",b,l))&&f)return;this.cb();this.Ge.Or(a,
function(a){this.nca(a,c,b,l,h)}.bind(this));this.Gu=null;null!=b&&b.stopPropagation();this.$a()}},nca:function(a,b,c,e,g){var h;this.cb();this.VE(f(a),b);a=a.parentNode;a=f(a);this.pp(a,this.Yi);b=this.Gj();h=this.jm();a.children("."+this.mh()).find("."+b).removeClass(b).addClass(h);g&&this.Zm("expand",c,e);this.$a()},LS:function(a,b){var c;a.parentsUntil("ul.oj-component-initnode","ul."+this.Gi()).each(function(){c=parseInt(f(this).css("maxHeight"),10);0<c&&f(this).css("maxHeight",c+b+"px")})},
VE:function(a,b){var c=0;b?(this.cb(),a.children().each(function(){c+=f(this).outerHeight(!0)}),this.Dt()&&this.LS(a,c),null==this.iO&&(this.iO=this.Xea.bind(this)),a.css("maxHeight","0px"),a.on("transitionend",this.iO),this.cb(),requestAnimationFrame(function(){a.css("maxHeight",c+"px")}),this.$a()):(this.Dt()?(a.children().each(function(){c+=f(this).outerHeight(!0)}),a.css("maxHeight",c+"px"),this.LS(a,c)):a.css("maxHeight",""),this.WE(a))},Xea:function(a){a=f(a.target);a.off("transitionend",this.iO);
this.Dt()||a.css("maxHeight","");this.WE(a);this.$a()},WE:function(a){a.removeClass(this.dr()).addClass(this.wu())},B1:function(a,b,c){var e=this.Hd(a);null!=e&&this.Pm(f(e),null,!1,a,b,c)},ik:function(a){var b=this.Ti(a.target);null!=b&&0<b.length&&this.Pm(b,a,!0,null,!0,!0)},Pm:function(a,b,c,e,f,h){var k;this.Qe(a)==this.Yi&&(null==e&&(e=this.sd(a[0])),e={item:a,key:e},k=!this.Zm("beforeCollapse",b,e),k&&f||(this.cb(),this.TE(a,c),this.pp(a,this.Xi),c=this.Gj(),f=this.jm(),a.find("."+f).first().removeClass(f).addClass(c),
this.Gu=null,null!=b&&b.stopPropagation(),h&&this.Zm("collapse",b,e),this.$a()))},TE:function(a,b){var c=0,e,g=this;e=a.children("ul").first();b?(this.cb(),null==this.fO&&(this.fO=this.Eea.bind(this)),e.children().each(function(){c+=f(this).outerHeight()}),e.css("transition-property","none"),e.css("maxHeight",c+"px"),e.css("transition-property",""),e.on("transitionend",this.fO),setTimeout(function(){g.cb();e.css("maxHeight","0px");g.$a()},100)):(e.css("maxHeight","0px"),this.UE(a))},Eea:function(a){a=
f(a.target);a.off("transitionend",this.fO);this.UE(a);this.$a()},UE:function(a){a.removeClass(this.wu()).addClass(this.dr());null!=this.Ge&&this.Ge.Lr(a)},oaa:function(){var a;this.cb();a=this;this.Gw().each(function(){a.Pm(f(this),null,!1,null,!1,!1)});this.$a()},getExpanded:function(){var a,b,c;a=[];b=this;this.Gw().each(function(){c=f(this);b.Qe(c)==b.Yi&&a.push(b.sd(c[0]))});return a},vg:function(){return b.Components.vg(this.element)},EP:function(){return this.Dt()?"oj-listview oj-listview-container-touch":
"oj-listview oj-listview-container"},hF:function(){return"oj-listview-element"},Ij:function(){return"oj-listview-item"},Ok:function(){return"oj-listview-focused-element"},Lf:function(){return"oj-listview-item-element"},mh:function(){return"oj-listview-group-item"},Gi:function(){return"oj-listview-group"},wu:function(){return"oj-listview-collapsible-transition"},dr:function(){return this.wu()},Gj:function(){return"oj-listview-collapse-icon"},jm:function(){return"oj-listview-expand-icon"},uN:function(){return""},
NZ:function(){var a=this;this.W._off(this.hd(),"scroll");this.eY()&&this.W._on(this.hd(),{scroll:function(){a.jX()}})},eY:function(){return"static"!=this.Sd("groupHeaderPosition")},Dw:function(){var a;null==this.lO&&(a="."+this.mh()+":visible",this.lO=this.element.find(a).filter(function(){return!f(this).parent().hasClass("oj-collapsed")&&0<f(this).next().children().length?!0:!1}));return this.lO},tM:function(a){a.style.position="static";a.style.top="auto";a.style.width="auto"},jW:function(a){var b;
b=this.Dw();a=b.index(a);return-1<a&&a<b.length-1?b[a+1]:null},lia:function(a,b){var c,e,f;c=a.offsetWidth;e=a.offsetHeight;f=this.jW(a);null!=f&&f.offsetTop<=b+e+5&&(b-=e);a.style.position="absolute";a.style.top=b+"px";a.style.width=c+"px"},jX:function(){var a,b,c,e,f,h,k,l;a=this.hd().get(0).scrollTop;if(null!=this.He&&0==a)this.tM(this.He),this.He=null;else{c=this.Dw();e=0;null!=this.He&&(e=this.He.offsetHeight);for(f=0;f<c.length;f++)if(h=c[f],this.He!=h&&(k=c[f].offsetTop,l=k+h.parentNode.offsetHeight,
k<a&&l>a+e)){b=h;break}null!=b&&b!=this.He?(null!=this.He&&this.tM(this.He),this.lia(b,a),this.He=b):null!=this.He&&(b=this.jW(this.He),this.He.style.top=null!=b&&b.offsetTop<=a+e?b.offsetTop-e+"px":a+"px")}},v_:function(a){var b,c;b=this.hd().get(0);c=b.scrollTop;null!=this.He&&(this.tM(this.He),this.He=null);b.scrollTop=a.offsetTop;this.eY()&&c==b.scrollTop&&this.jX();this.uka(a)},uka:function(a){var b=this,c;f(a).next().children().each(function(){c=f(this);if(!b.bi(c))return b.yh("currentItem",
this.key),!1})}});o_("_ojListView",b.HK,b);b.ya("oj.ojListView",f.oj.baseComponent,{widgetEventPrefix:"oj",options:{currentItem:null,data:null,drillMode:"collapsible",expanded:"auto",groupHeaderPosition:"sticky",item:{focusable:!0,renderer:null,selectable:!0},scrollPolicy:"auto",scrollPolicyOptions:{fetchSize:25,maxCount:500},selection:[],selectionMode:"none",beforeCurrentItem:null,beforeExpand:null,beforeCollapse:null,collapse:null,expand:null,optionChange:null,ready:null},_ComponentCreate:function(){this._super();
this.Aa()},Aa:function(){var a={};a.element=this.element;a.W=this;a=f.extend(this.options,a);this.Zc=new b.HK;this.Zc.sm(a)},kf:function(){this._super();this.Zc.ju()},_destroy:function(){this.Zc.destroy();this._super()},nf:function(a,b,c){this.Zc.m4(a,b,c)},_setOptions:function(a,b){var c=this.Zc.Cr(a,b);this._super(a,b);c&&(this.Zc.refresh(),this.nV())},_setOption:function(a,b){var c=!0;"selectionMode"==a?c="none"==b||"single"==b||"multiple"==b:"drillMode"==a?c="collapsible"==b||"none"==b:"scrollPolicy"==
a?c="auto"==b||"loadMoreOnScroll"==b:"groupHeaderPosition"==a&&(c="static"==b||"sticky"==b);if(c)this._super(a,b);else throw"Invalid value: "+b+" for key: "+a;},ki:function(){this.Zc.n4()},ql:function(){},widget:function(){return this.Zc.EN()},refresh:function(){this._super();this.Zc.refresh();this.nV()},whenReady:function(){return this.Zc.whenReady()},getNodeBySubId:function(a){return this.Zc.getNodeBySubId(a)},getSubIdByNode:function(a){return this.Zc.getSubIdByNode(a)},expand:function(a,b){this.Zc.eN(a,
b,!0,!0)},collapse:function(a,b){this.Zc.B1(a,b,!0)},getExpanded:function(){return this.Zc.getExpanded()},getIndexerModel:function(){null==this.Fy&&b.$f&&(this.Fy=new b.$f(this.Zc));return this.Fy},nV:function(){null!=this.Fy&&this.Fy.e2&&this.Fy.e2()}})});