(function(){$(function(){var e,t,n,i,o,a,r;if($("body.frontend_homepage_show").length>0&&(i=document.referrer,n=/http:\/\/tech.mit.edu\/V(\d+)\/N(\d+)\/(.*)/,o=n.exec(i),o&&(r=parseInt(o[1]),e=parseInt(o[2]),t=o[3],r>=127&&(135!==r||e<=8))))return a="/V"+r+"/N"+e+"/"+t,document.location=a})}).call(this);