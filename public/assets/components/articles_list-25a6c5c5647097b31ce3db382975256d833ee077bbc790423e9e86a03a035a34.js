(function(){var t=function(t,e){return function(){return t.apply(e,arguments)}},e=function(t,e){function r(){this.constructor=t}for(var i in e)n.call(e,i)&&(t[i]=e[i]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},n={}.hasOwnProperty;this.ArticleList=function(n){function r(e){this.handleSearchKeyDown=t(this.handleSearchKeyDown,this),this.loadNextPage=t(this.loadNextPage,this),this.appendArticles=t(this.appendArticles,this),r.__super__.constructor.call(this,e),this.state={articles:this.props.articles},this.styles={infiniteScrollTriggerRow:{textAlign:"center",fontSize:"40px"}}}return e(r,n),r.propTypes={articles:React.PropTypes.array,fetch:React.PropTypes.string,hideSearch:React.PropTypes.bool,rankSelect:React.PropTypes.bool},r.prototype.appendArticles=function(t){return this.setState({page:this.state.page+1,articles:this.state.articles.concat(t)})},r.prototype.loadNextPage=function(){return this.setState({loading:!0}),axios.get(this.nextPage).then(function(t){return function(e){return e.data.error?alert(e.data.error):(t.nextPage=e.data.nextPage,t.setState({loading:!1}),t.appendArticles(e.data.articles))}}(this))["catch"](function(){return function(t){return logError(t),alert("Unknown error. Please refresh the page. ")}}(this))},r.prototype.componentDidMount=function(){return MessageBus.subscribe("/updates",function(t){return function(e){if(console.log("MessageBus update: ",e),"article"===e.model)return axios.get(Routes.article_path(e.id)).then(function(e){return e.data.error?alert(e.data.error):t.replaceArticle(e.data.article)})["catch"](function(t){return logError(t),alert("Unknown error. Please refresh the page. ")})}}(this)),null!=this.props.fetch&&(this.nextPage=this.props.fetch,this.loadNextPage()),$(this.refs.infiniteScrollTrigger).appear(),$(this.refs.infiniteScrollTrigger).on("appear",function(t){return function(){if(!t.state.loading&&null!=t.nextPage)return t.loadNextPage()}}(this))},r.prototype.replaceArticle=function(t){var e,n;if(e=this.state.articles.slice(),n=_.findIndex(e,{id:t.id}),!(n<0))return t.destroyed?e.splice(n,1):e[n]=t,this.setState({articles:e})},r.prototype.handleAction=function(t,e,n,r,i){return axios({method:e,url:n,data:r}).then(function(t){return function(e){return null!=i&&i(),e.data.error?alert(e.data.error):t.replaceArticle(e.data.article)}}(this))["catch"](function(){return function(t){return logError(t),alert("Cannot complete the action. Please refresh the page and try again. ")}}(this))},r.prototype.handleSearchKeyDown=function(t){if(13===t.keyCode)return this.setState({articles:[]}),this.nextPage=Routes.articles_path({q:t.target.value}),this.loadNextPage()},r.prototype.render=function(){return React.createElement("table",{className:"table"},React.createElement("thead",null,React.createElement("tr",null,this.props.hideSearch||React.createElement("td",{colSpan:"3"},React.createElement("input",{className:"form-control",onKeyDown:this.handleSearchKeyDown,placeholder:'Search for articles by volume (e.g. "V134 N7") or by text. Press ENTER to search. '})))),React.createElement("tbody",null,this.state.articles.map(function(t){return React.createElement(Article,{rankSelect:this.props.rankSelect,article:t,authors:this.props.authors,articles:this.props.articles,key:t.id,onAction:this.handleAction.bind(this,t)})},this),React.createElement("tr",{style:this.styles.infiniteScrollTriggerRow,"data-appear-top-offset":"1000",ref:"infiniteScrollTrigger"},React.createElement("td",{colSpan:"3"},this.state.loading?React.createElement("i",{className:"fa fa-spin fa-circle-o-notch"}):null))))},r}(React.Component)}).call(this);