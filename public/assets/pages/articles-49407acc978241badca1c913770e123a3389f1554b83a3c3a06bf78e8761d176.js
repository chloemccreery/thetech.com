(function(){var e;e=function(){var e,t,n,i,o,r;if($("#articles_new, #articles_create, #articles_edit, #articles_update, #article_versions_revert").length>0)for(t=new Bloodhound({datumTokenizer:Bloodhound.tokenizers.obj.whitespace("name"),queryTokenizer:Bloodhound.tokenizers.whitespace,local:gon.authors}),t.initialize(),r=$("input[name=draft\\[comma_separated_author_ids\\]]"),r.tagsinput({itemValue:"id",itemText:"name",typeaheadjs:{name:"authors",displayKey:"name",source:t.ttAdapter()}}),o=gon.prefilled_authors,n=0,i=o.length;n<i;n++)e=o[n],r.tagsinput("add",e);if($("#articles_index").length>0)return $("#keywords").keyup(function(){return window.delay("keywords_search",function(){return $("#keywords").parents("form").submit()},300)})},$(document).ready(e),$(document).on("page:load",e)}).call(this);