(function(){$(function(){return $.getJSON("/ads-manifest",function(t){return $("[data-ads]").each(function(n,a){var r,e,o;return o=$(a).data("ads"),r=t[o],r.length>0?(e=r[Math.floor(Math.random()*r.length)],a.src=e):void 0})})})}).call(this);