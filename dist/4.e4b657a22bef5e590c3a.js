webpackJsonp([4],{637:function(e,t,a){"use strict";function l(e){return{type:r,currentFollow:e}}function n(e){return{type:u,currentToggle:e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments[1];switch(t.type){case r:return Object.assign({},e,{currentFollow:t.currentFollow,currentToggle:e.currentToggle});case u:return Object.assign({},e,{currentFollow:e.currentFollow,currentToggle:t.currentToggle});default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.changeFollow=l,t.changeToggle=n,t.default=o;var r=t.CHANGE_FOLLOW="CHANGE_FOLLOW",u=t.CHANGE_TOGGLE="CHANGE_TOGGLE",c={currentFollow:"",currentToggle:"new"}},640:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(17),n=a(255),o=a(637),r=a(781),u=function(e){return e&&e.__esModule?e:{default:e}}(r),c={changeFollow:o.changeFollow,changeToggle:o.changeToggle},i=function(e){return e.follow.currentFollow},s=function(e){return e.follow.currentToggle},f=(0,n.createSelector)([i],function(e){return e}),d=(0,n.createSelector)([s],function(e){return e}),m=function(e){return{uid:e.auth.profile.uid,currentFollow:f(e),currentToggle:d(e)}};t.default=(0,l.connect)(m,c)(u.default)},682:function(e,t,a){"use strict";function l(e){var t=[],a=[];if(!e.parentNode)return t;a=e.parentNode.getElementsByTagName(e.tagName);for(var l=0;l<a.length;l++)a[l]!==e&&t.push(a[l]);return t}function n(e,t){if(e.classList.contains(t)){var a=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(a," "),e.className=e.className.replace(/\s+/g," ")}}Object.defineProperty(t,"__esModule",{value:!0}),t.siblings=l,t.removeClass=n},694:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(13),o=l(n),r=a(14),u=l(r),c=a(16),i=l(c),s=a(15),f=l(s),d=a(1),m=l(d),g=a(682),h=a(6),p=l(h);a(712);var v=function(e){function t(){return(0,o.default)(this,t),(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,u.default)(t,[{key:"handleClick",value:function(e){var t=e.target;t&&t.parentNode&&"LI"===t.nodeName.toUpperCase()&&(t.classList.add("li-active"),(0,g.siblings)(t).forEach(function(e){e.classList.remove("li-active")}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.sign,l=void 0!==a&&a,n=t.changeToggle,o=[];return l&&(o=[m.default.createElement("li",{key:"follow",onClick:function(){return n("follow")}},m.default.createElement("i",{className:"fa fa-eye"}),"Ta的关注"),m.default.createElement("li",{key:"love",onClick:function(){return n("love")}},m.default.createElement("i",{className:"fa fa-heart"}),"Ta喜欢的文章")]),m.default.createElement("ul",{className:"note-trigger list-inline",onClick:function(t){return e.handleClick(t)}},m.default.createElement("li",{onClick:function(){return n("new")},key:"new",className:"li-active"},m.default.createElement("i",{className:"fa fa-paw"}),"最新动态"),m.default.createElement("li",{onClick:function(){return n("notes")},key:"notes"},m.default.createElement("i",{className:"fa fa-book"}),"Ta的笔记"),m.default.createElement("li",{onClick:function(){return n("hot")},key:"hot"},m.default.createElement("i",{className:"fa fa-fire"}),"热门"),o)}}]),t}(d.Component);v.propTypes={sign:p.default.bool.isRequired,changeToggle:p.default.func.isRequired},t.default=v},712:function(e,t){},781:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(13),o=l(n),r=a(14),u=l(r),c=a(16),i=l(c),s=a(15),f=l(s),d=a(1),m=l(d),g=a(6),h=l(g),p=a(783),v=l(p),E=a(782),k=l(E),w=a(694),y=l(w),N=a(257),_=l(N),b=function(e){function t(){var e,a,l,n;(0,o.default)(this,t);for(var r=arguments.length,u=Array(r),c=0;c<r;c++)u[c]=arguments[c];return a=l=(0,i.default)(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),l.state={rightSide:null},n=a,(0,i.default)(l,n)}return(0,f.default)(t,e),(0,u.default)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.currentFollow,a=e.currentToggle,l=e.changeToggle;console.log(t),this.setState({rightSide:m.default.createElement("div",{className:"col-sm-9 col-md-8"},m.default.createElement(k.default,{follow_id:t}),m.default.createElement(y.default,{sign:!1,changeToggle:l}),m.default.createElement(_.default,{uid:t,toggleState:a}))})}},{key:"render",value:function(){var e=this.props,t=e.uid,a=e.changeFollow;return m.default.createElement("div",{className:"container"},m.default.createElement("div",{className:"row"},m.default.createElement("div",{className:"col-sm-4 col-md-3 col-md-offset-1"},m.default.createElement(v.default,{uid:t,changeFollow:a})),this.state.rightSide))}}]),t}(d.Component);b.propTypes={uid:h.default.string.isRequired,currentFollow:h.default.string.isRequired,currentToggle:h.default.string.isRequired,changeFollow:h.default.func.isRequired,changeToggle:h.default.func.isRequired},t.default=b},782:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(13),o=l(n),r=a(14),u=l(r),c=a(16),i=l(c),s=a(15),f=l(s),d=a(1),m=l(d),g=a(6),h=l(g),p=a(38),v=a(256),E=l(v),k=a(151);a(925);var w=function(e){function t(){var e,a,l,n;(0,o.default)(this,t);for(var r=arguments.length,u=Array(r),c=0;c<r;c++)u[c]=arguments[c];return a=l=(0,i.default)(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),l.state={data:{id:"",isFollow:!1}},n=a,(0,i.default)(l,n)}return(0,f.default)(t,e),(0,u.default)(t,[{key:"getData",value:function(e){(0,k.ajax)(this,"follow/msg/"+e.follow_id,"src/routes/Follow/components/FollowMsg.js")}},{key:"componentWillMount",value:function(){this.getData(this.props)}},{key:"componentWillReceiveProps",value:function(e){this.getData(e)}},{key:"shouldComponentUpdate",value:function(e,t){return this.props.follow_id!==e.follow_id||t.data.id!==this.state.data.id}},{key:"render",value:function(){var e=this.state.data;return m.default.createElement("div",{className:"note-top relative clearfix"},m.default.createElement(p.Link,{to:"/u/"+e.id,className:"avatar left"},m.default.createElement("img",{src:e.img,alt:e.name})),m.default.createElement(E.default,{follow_id:e.id,isFollow:e.isFollow}),m.default.createElement(p.Link,{to:"/u/"+e.id,className:"atr-option absolute"},"个人主页"),m.default.createElement(p.Link,{to:"/u/"+e.id,className:"name"},e.name),m.default.createElement("p",{className:"data"},m.default.createElement("a",{className:"icon-set"},m.default.createElement("i",{className:"fa fa-pencil"}),e.writeNum),m.default.createElement("a",{className:"icon-set"},m.default.createElement("i",{className:"fa fa-eye"}),e.follow),m.default.createElement("a",{className:"icon-set"},m.default.createElement("i",{className:"fa fa-thumbs-up"}),e.like)))}}]),t}(d.Component);w.propTypes={follow_id:h.default.string.isRequired},t.default=w},783:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(13),o=l(n),r=a(14),u=l(r),c=a(16),i=l(c),s=a(15),f=l(s),d=a(1),m=l(d),g=a(6),h=l(g),p=a(38);a(926);var v=a(682),E=function(e){function t(){(0,o.default)(this,t);var e=(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.handleActive=e.handleActive.bind(e),e.state={clickedTab:"all",data:[]},e}return(0,f.default)(t,e),(0,u.default)(t,[{key:"handleActive",value:function(e){var t=e.target;t&&"LI"===t.nodeName.toUpperCase()&&(t.classList.add("active"),(0,v.siblings)(t).forEach(function(e){e.classList.remove("active")}),this.setState({clickedTab:t.id}))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://easy-mock.com/mock/5947a6428ac26d795f3f8e99/timenote/follow/list/"+this.props.uid).then(function(e){if(e.status>=200&&e.status<300)return e.json()}).then(function(t){200===t.status&&"OK"===t.statusText?(e.props.changeFollow(t.data[0].uid),e.setState({data:t.data})):console.log("request failed")}).catch(function(e){return console.log("src/routes/Follow/components/FollowNav.js",e)})}},{key:"componentWillUnmount",value:function(){this.props.changeFollow("")}},{key:"content",value:function(e,t){var a=this.props.changeFollow;return m.default.createElement("li",{key:e,onClick:function(){return a(t.uid)}},m.default.createElement("a",{className:"avatar inlineblock"},m.default.createElement("img",{src:t.img,alt:t.name})),m.default.createElement("a",{className:"name"},t.name))}},{key:"render",value:function(){var e=this,t=[],a=[],l=[],n=[];switch(0!==this.state.data.length?(this.state.data.forEach(function(n,o){t.push(e.content(o,n)),"author"===n.type?a.push(e.content(o,n)):l.push(e.content(o,n))}),0===a.length?a=[m.default.createElement("li",{key:"noAuthor"},"还没有关注任何作者,去",m.default.createElement(p.Link,{to:"/hall"},"名人堂"),"看看吧！")]:0===l.length&&(l=[m.default.createElement("li",{key:"noLabel"},"还没有关注任何标签,去",m.default.createElement(p.IndexLink,{to:"/"},"首页"),"看看吧！")])):t=[m.default.createElement("li",{key:"noneOfFollow"},"Hey,看来你是新人，",m.default.createElement(p.IndexLink,{to:"/"},"首页"),"有很多精彩的内容!")],this.state.clickedTab){case"all":n=t;break;case"author":n=a;break;case"label":n=l}return m.default.createElement("div",{className:"follow-tab"},m.default.createElement("p",{className:"title"},"我的关注"),m.default.createElement("ul",{className:"follow-nav list-inline",onClick:this.handleActive,id:"followNav"},m.default.createElement("li",{className:"active",id:"all"},"全部"),m.default.createElement("li",{id:"author"},"作者"),m.default.createElement("li",{id:"label"},"标签"),m.default.createElement("div",{className:"right"},m.default.createElement(p.Link,{to:"/hall"},m.default.createElement("i",{className:"fa fa-plus"})))),m.default.createElement("ul",{className:"content",onClick:function(e){var t=e.target;t&&"LI"===t.nodeName.toUpperCase()&&(t.style.backgroundColor="#dcdcdc",(0,v.siblings)(t).forEach(function(e){e.style.backgroundColor="inherit"}))}},n))}}]),t}(d.Component);E.propTypes={uid:h.default.string.isRequired,changeFollow:h.default.func.isRequired},t.default=E},925:function(e,t){},926:function(e,t){}});
//# sourceMappingURL=4.e4b657a22bef5e590c3a.js.map