(function(){var t=function(t,e){return function(){return t.apply(e,arguments)}},e=function(t,e){function r(){this.constructor=t}for(var i in e)n.call(e,i)&&(t[i]=e[i]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},n={}.hasOwnProperty;this.AutoSelect=function(n){function r(e){this.handleChange=t(this.handleChange,this),this.state={busy:!1,value:e.initial||-1}}return e(r,n),r.propTypes={onChange:React.PropTypes.func,confirm:React.PropTypes.string,titles:React.PropTypes.array,ids:React.PropTypes.array,prompt:React.PropTypes.string,initial:React.PropTypes.number},r.prototype.componentWillReceiveProps=function(t){return this.setState({value:t.initial||-1})},r.prototype.handleChange=function(t){if(this.setState({value:t.target.value}),!(t.target.value<0))return null==this.props.confirm||confirm(this.props.confirm)?(this.setState({busy:!0}),this.props.onChange(t.target.value,function(t){return function(){return t.setState({busy:!1})}}(this))):void 0},r.prototype.render=function(){var t;return t=this.props.style||{},t.WebkitAppearance="none",t.backgroundImage="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAYAAAA/33wPAAAAvklEQVQoFY2QMQqEMBBFv7ERa/EMXkGw11K8QbDXzuN4BHv7QO6ifUgj7v4UAdlVM8Uwf+b9YZJISnlqrfEUZVlinucnBGKaJgghbiHOyLyFKIoCbdvecpyReYvo/Ma2bajrGtbaC58kCdZ1RZ7nl/4/4d5EsO/7nzl7IUtodBexMMagaRrs+06JLMvcNWmaOv2W/C/TMAyD58dxROgSmvxFFMdxoOs6lliWBXEcuzokXRbRoJRyvqqqQvye+QDMDz1D6yuj9wAAAABJRU5ErkJggg==)",t.backgroundPosition="right center",t.backgroundRepeat="no-repeat",t.padding="2px 10px",t.borderRadius="0",t.border="1px solid #DDD",React.createElement("select",{value:this.props.initial,style:t,onChange:this.handleChange,disabled:this.state.busy},null!=this.props.propmt&&void 0!=this.props.prompt&&React.createElement("option",{key:"-1",value:"-1"},this.props.prompt),this.props.titles.map(function(t,e){return React.createElement("option",{key:this.props.ids[e],value:this.props.ids[e]},t)},this))},r}(React.Component)}).call(this);