!function(){CKEDITOR.config.jqueryOverrideVal="undefined"==typeof CKEDITOR.config.jqueryOverrideVal?!0:CKEDITOR.config.jqueryOverrideVal;var e=window.jQuery;"undefined"!=typeof e&&(e.extend(e.fn,{ckeditorGet:function(){var e=this.eq(0).data("ckeditorInstance");if(!e)throw"CKEditor not yet initialized, use ckeditor() with callback.";return e},ckeditor:function(t,n){if(!CKEDITOR.env.isCompatible)return this;if(!e.isFunction(t)){var i=n;n=t,t=i}return n=n||{},this.filter("textarea, div, p").each(function(){var i=e(this),o=i.data("ckeditorInstance"),r=i.data("_ckeditorInstanceLock"),a=this;o&&!r?t&&t.apply(o,[this]):r?CKEDITOR.on("instanceReady",function(e){var n=e.editor;setTimeout(function(){return n.element?void(n.element.$==a&&t&&t.apply(n,[a])):void setTimeout(arguments.callee,100)},0)},null,null,9999):((n.autoUpdateElement||"undefined"==typeof n.autoUpdateElement&&CKEDITOR.config.autoUpdateElement)&&(n.autoUpdateElementJquery=!0),n.autoUpdateElement=!1,i.data("_ckeditorInstanceLock",!0),o=CKEDITOR.replace(a,n),i.data("ckeditorInstance",o),o.on("instanceReady",function(e){var n=e.editor;setTimeout(function(){if(!n.element)return void setTimeout(arguments.callee,100);if(e.removeListener("instanceReady",this.callee),n.on("dataReady",function(){i.trigger("setData.ckeditor",[n])}),n.on("getData",function(e){i.trigger("getData.ckeditor",[n,e.data])},999),n.on("destroy",function(){i.trigger("destroy.ckeditor",[n])}),n.config.autoUpdateElementJquery&&i.is("textarea")&&i.parents("form").length){var o=function(){i.ckeditor(function(){n.updateElement()})};i.parents("form").submit(o),i.parents("form").bind("form-pre-serialize",o),i.bind("destroy.ckeditor",function(){i.parents("form").unbind("submit",o),i.parents("form").unbind("form-pre-serialize",o)})}n.on("destroy",function(){i.data("ckeditorInstance",null)}),i.data("_ckeditorInstanceLock",null),i.trigger("instanceReady.ckeditor",[n]),t&&t.apply(n,[a])},0)},null,null,9999))}),this}}),CKEDITOR.config.jqueryOverrideVal&&(e.fn.val=CKEDITOR.tools.override(e.fn.val,function(t){return function(n,i){var o,r="undefined"!=typeof n;return this.each(function(){var a=e(this),s=a.data("ckeditorInstance");if(!i&&a.is("textarea")&&s){if(!r)return o=s.getData(),null;s.setData(n)}else{if(!r)return o=t.call(a),null;t.call(a,n)}return!0}),r?this:o}})))}();