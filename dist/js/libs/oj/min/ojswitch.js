/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojeditablevalue"],function(b){(function(){b.ya("oj.ojSwitch",$.oj.editableValue,{version:"1.1.0",defaultElement:"\x3cinput\x3e",widgetEventPrefix:"oj",options:{disabled:!1,readOnly:!1,required:!1,title:"",value:!1},refresh:function(){this._super();this.Aa()},widget:function(){return this.Dl},getNodeBySubId:function(b){var a,d=this.widget();a=null==b||null==b.subId?d:null;return a||(b=b.subId,"oj-switch-thumb"!==b&&"oj-switch-track"!==b)?a||null:d.find("."+b)[0]},
getSubIdByNode:function(b){var a=$(this.element).attr("id"),d,c=null;null!=b&&($(b).hasClass("oj-switch-track")||$(b).hasClass("oj-switch-thumb"))&&(d=$(b).parents("div.oj-switch").find("input.oj-component-initnode").attr("id"),a===d&&$(b).hasClass("oj-switch-track")?c={subId:"oj-switch-track"}:a===d&&$(b).hasClass("oj-switch-thumb")&&(c={subId:"oj-switch-thumb"}));return c},xa:{i9:"SwitchOFF",j9:"SwitchON"},Wd:function(f,a){var d;this._super(f,a);b.ue.Tk([{V:"disabled",xc:!0},{V:"readonly",option:"readOnly",
xc:!0},{V:"required",xc:!1,Ye:function(){return!1}},{V:"checked",option:"value",xc:!1,Ye:function(a){return a?!0:!1}},{V:"title"}],a,this);d=this.option("value");this.option({required:!1,value:!!d},{_context:{Hc:!0,Za:!0}})},_ComponentCreate:function(){this._super();if(!this.element.is("input"))throw Error("ojSwitch can be bound to INPUT only.");this.MX=this.element.css("display");this.element.css("display","none").attr("type","checkbox").attr("checked",this.option("value")).attr("tabindex","-1").attr("disabled",
this.option("disabled")).attr("readonly",this.option("readOnly"));this.Dl=this.element.wrap("\x3cdiv\x3e\x3c/div\x3e").parent().addClass("oj-switch oj-component oj-form-control");this.Dl.append("\x3cdiv class\x3d'oj-switch-container'\x3e\x3cdiv class\x3d'oj-switch-track'\x3e\x3cdiv class\x3d'oj-switch-thumb' tabIndex\x3d'0'\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e");this.cl=this.Dl.find(".oj-switch-thumb");this.cl.attr("role","switch checkbox");this.jka(this.element,this.cl);this.Aa()},jka:function(b,
a){var d=b.prop("id"),c=b.attr("aria-labelledby"),e=b.attr("aria-label");e?a.attr("aria-label",e):c?a.attr("aria-labelledby",c):d&&(d=$("label[for\x3d'"+d+"']"))&&(d.attr("id")?a.attr("aria-labelledby",d.attr("id")):a.attr("aria-label",$(d).text()))},Aa:function(){var b=$(this.widget()),a=this.option("title");this.zj();if(void 0!==b){this.element.attr("checked",this.option("value"));b.removeClass("oj-disabled oj-read-only oj-selected oj-hover oj-active");$(this.cl).attr("tabindex","0");$(this.cl).html("");
if(this.option("disabled")||this.option("readOnly"))this.option("disabled")?b.addClass("oj-disabled"):(b.addClass("oj-read-only"),$(this.cl).html(this.Mka())),$(this.cl).removeAttr("tabindex");this.option("value")&&b.addClass("oj-selected");void 0!==a&&$(this.cl).attr("title",a);$(this.cl).attr("aria-checked",this.option("value"));$(this.cl).removeAttr("aria-disabled");b.removeAttr("aria-disabled");this.xv()||$(this.cl).attr("aria-disabled","true")}},Mka:function(){var b=this.xa.i9;this.option("value")&&
(b=this.xa.j9);return this.A(b)},zj:function(){this._off(this.Dl,"keydown keyup mousedown mouseup mouseleave mouseenter touchstart");this.xv()&&(this._on(this.Dl,this.tla),this._hoverable(this.Dl));this._focusable(this.Dl)},tla:{keydown:function(b){if(b.which===$.ui.keyCode.ENTER||b.which===$.ui.keyCode.SPACE)$(b.currentTarget).addClass("oj-active"),b.preventDefault()},keyup:function(b){b.which!==$.ui.keyCode.ENTER&&b.which!==$.ui.keyCode.SPACE||this.gc(!this.option("value"),b)},mousedown:function(b){1===
b.which&&$(b.currentTarget).addClass("oj-active")},mouseup:function(b){1===b.which&&this.gc(!this.option("value"),b)},mouseleave:function(b){1===b.which&&$(b.currentTarget).removeClass("oj-active")},mouseenter:function(b){1===b.which&&$(b.currentTarget).addClass("oj-active")},dsa:function(b){this.gc(!this.option("value"),b);b.preventDefault()}},_GetDefaultStyleClass:function(){return"oj-switch"},sra:function(){return"switch checkbox"},_destroy:function(){this.Dl.find(".oj-switch-track").remove();
b.v.unwrap(this.element);this.ys(this.element);return this._super()},Vd:function(){return this.Dl},_setOption:function(b,a,d){switch(b){case "disabled":case "readOnly":case "value":a=!!a;break;case "required":a=!1;break}this._super(b,a,d);this.Aa()}})})()});