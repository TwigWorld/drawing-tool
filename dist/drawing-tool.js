!function(){"use strict";var r="undefined"!=typeof window?window:global;if("function"!=typeof r.require){var n={},e={},i=function(r,n){return{}.hasOwnProperty.call(r,n)},t=function(r,n){var e,i,t=[];e=/^\.\.?(\/|$)/.test(n)?[r,n].join("/").split("/"):n.split("/");for(var o=0,u=e.length;u>o;o++)i=e[o],".."===i?t.pop():"."!==i&&""!==i&&t.push(i);return t.join("/")},o=function(r){return r.split("/").slice(0,-1).join("/")},u=function(n){return function(e){var i=o(n),u=t(i,e);return r.require(u,n)}},f=function(r,n){var i={id:r,exports:{}};return e[r]=i,n(i.exports,u(r),i),i.exports},s=function(r,o){var u=t(r,".");if(null==o&&(o="/"),i(e,u))return e[u].exports;if(i(n,u))return f(u,n[u]);var s=t(u,"./index");if(i(e,s))return e[s].exports;if(i(n,s))return f(s,n[s]);throw new Error('Cannot find module "'+r+'" from "'+o+'"')},c=function(r,e){if("object"==typeof r)for(var t in r)i(r,t)&&(n[t]=r[t]);else n[r]=e},a=function(){var r=[];for(var e in n)i(n,e)&&r.push(e);return r};r.require=s,r.require.define=c,r.require.register=c,r.require.list=a,r.require.brunch=!0}}(),require.register("scripts/drawing-tool",function(r,n,e){function i(){console.log("Drawing Tool created")}e.exports=i}),window.DrawingTool=require("scripts/drawing-tool");