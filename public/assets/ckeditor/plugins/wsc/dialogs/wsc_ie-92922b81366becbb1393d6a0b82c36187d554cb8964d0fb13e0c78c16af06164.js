CKEDITOR.dialog.add("checkspell",function(e){function t(e,t){var i=0;return function(){"function"==typeof window.doSpell?("undefined"!=typeof n&&window.clearInterval(n),a(e)):180==i++&&window._cancelOnError(t)}}function a(t){var a=new window._SP_FCK_LangCompare,n=CKEDITOR.getUrl(e.plugins.wsc.path+"dialogs/"),i=n+"tmpFrameset.html";window.gFCKPluginName="wsc",a.setDefaulLangCode(e.config.defaultLanguage),window.doSpell({ctrl:r,lang:e.config.wsc_lang||a.getSPLangCode(e.langCode),intLang:e.config.wsc_uiLang||a.getSPLangCode(e.langCode),winType:o,onCancel:function(){t.hide()},onFinish:function(a){e.focus(),t.getParentEditor().setData(a.value),t.hide()},staticFrame:i,framesetPath:i,iframePath:n+"ciframe.html",schemaURI:n+"wsc.css",userDictionaryName:e.config.wsc_userDictionaryName,customDictionaryName:e.config.wsc_customDictionaryIds&&e.config.wsc_customDictionaryIds.split(","),domainName:e.config.wsc_domainName}),CKEDITOR.document.getById(l).setStyle("display","none"),CKEDITOR.document.getById(o).setStyle("display","block")}var n,i=CKEDITOR.tools.getNextNumber(),o="cke_frame_"+i,r="cke_data_"+i,l="cke_error_"+i,i=document.location.protocol||"http:",s=e.lang.wsc.notAvailable,c='<textarea style="display: none" id="'+r+'" rows="10" cols="40"> </textarea><div id="'+l+'" style="display:none;color:red;font-size:16px;font-weight:bold;padding-top:160px;text-align:center;z-index:11;"></div><iframe src="" style="width:100%;background-color:#f1f1e3;" frameborder="0" name="'+o+'" id="'+o+'" allowtransparency="1"></iframe>',d=e.config.wsc_customLoaderScript||i+"//loader.webspellchecker.net/sproxy_fck/sproxy.php?plugin=fck2&customerid="+e.config.wsc_customerId+"&cmd=script&doc=wsc&schema=22";return e.config.wsc_customLoaderScript&&(s+='<p style="color:#000;font-size:11px;font-weight: normal;text-align:center;padding-top:10px">'+e.lang.wsc.errorLoading.replace(/%s/g,e.config.wsc_customLoaderScript)+"</p>"),window._cancelOnError=function(t){if("undefined"==typeof window.WSC_Error){CKEDITOR.document.getById(o).setStyle("display","none");var a=CKEDITOR.document.getById(l);a.setStyle("display","block"),a.setHtml(t||e.lang.wsc.notAvailable)}},{title:e.config.wsc_dialogTitle||e.lang.wsc.title,minWidth:485,minHeight:380,buttons:[CKEDITOR.dialog.cancelButton],onShow:function(){var a=this.getContentElement("general","content").getElement();a.setHtml(c),a.getChild(2).setStyle("height",this._.contentSize.height+"px"),"function"!=typeof window.doSpell&&CKEDITOR.document.getHead().append(CKEDITOR.document.createElement("script",{attributes:{type:"text/javascript",src:d}})),a=e.getData(),CKEDITOR.document.getById(r).setValue(a),n=window.setInterval(t(this,s),250)},onHide:function(){window.ooo=void 0,window.int_framsetLoaded=void 0,window.framesetLoaded=void 0,window.is_window_opened=!1},contents:[{id:"general",label:e.config.wsc_dialogTitle||e.lang.wsc.title,padding:0,elements:[{type:"html",id:"content",html:""}]}]}}),CKEDITOR.dialog.on("resize",function(e){e=e.data;var t=e.dialog;"checkspell"==t._.name&&((t=(t=t.getContentElement("general","content").getElement())&&t.getChild(2))&&t.setSize("height",e.height),t&&t.setSize("width",e.width))});