webpackJsonp([5],{638:function(e,t,a){"use strict";function l(e){return{type:u,currentToggle:e}}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments[1];switch(t.type){case u:return Object.assign({},e,{currentToggle:t.currentToggle});default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.changeToggle=l,t.default=n;var u=t.CHANGE_TOGGLE="CHANGE_TOGGLE",r={currentToggle:"new"}},646:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(17),n=a(248),u=a(638),r=a(768),c=function(e){return e&&e.__esModule?e:{default:e}}(r),s={changeToggle:u.changeToggle},i=function(e){return e.userPage.currentToggle},o=function(e){return e.auth.isAuth?e.auth.profile.uid:""},f=(0,n.createSelector)([i],function(e){return e}),d=(0,n.createSelector)([o],function(e){return e}),m=function(e){return{uid:d(e),currentToggle:f(e)}};t.default=(0,l.connect)(m,s)(c.default)},670:function(e,t,a){"use strict";function l(e){var t=[],a=[];if(!e.parentNode)return t;a=e.parentNode.getElementsByTagName(e.tagName);for(var l=0;l<a.length;l++)a[l]!==e&&t.push(a[l]);return t}function n(e,t){if(e.classList.contains(t)){var a=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(a," "),e.className=e.className.replace(/\s+/g," ")}}Object.defineProperty(t,"__esModule",{value:!0}),t.siblings=l,t.removeClass=n},679:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(13),u=l(n),r=a(14),c=l(r),s=a(16),i=l(s),o=a(15),f=l(o),d=a(1),m=l(d),g=a(670),p=a(6),E=l(p);a(705);var v=function(e){function t(){return(0,u.default)(this,t),(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,c.default)(t,[{key:"handleClick",value:function(e){var t=e.target;t&&t.parentNode&&"LI"===t.nodeName.toUpperCase()&&(t.classList.add("li-active"),(0,g.siblings)(t).forEach(function(e){e.classList.remove("li-active")}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.sign,l=void 0!==a&&a,n=t.changeToggle,u=[];return l&&(u=[m.default.createElement("li",{key:"follow",onClick:function(){return n("follow")}},m.default.createElement("i",{className:"fa fa-eye"}),"Ta的关注"),m.default.createElement("li",{key:"love",onClick:function(){return n("love")}},m.default.createElement("i",{className:"fa fa-heart"}),"Ta喜欢的文章")]),m.default.createElement("ul",{className:"note-trigger list-inline",onClick:function(t){return e.handleClick(t)}},m.default.createElement("li",{onClick:function(){return n("new")},key:"new",className:"li-active"},m.default.createElement("i",{className:"fa fa-paw"}),"最新动态"),m.default.createElement("li",{onClick:function(){return n("notes")},key:"notes"},m.default.createElement("i",{className:"fa fa-book"}),"Ta的笔记"),m.default.createElement("li",{onClick:function(){return n("hot")},key:"hot"},m.default.createElement("i",{className:"fa fa-fire"}),"热门"),u)}}]),t}(d.Component);v.propTypes={sign:E.default.bool.isRequired,changeToggle:E.default.func.isRequired},t.default=v},705:function(e,t){},767:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(13),u=l(n),r=a(14),c=l(r),s=a(16),i=l(s),o=a(15),f=l(o),d=a(1),m=l(d),g=a(6),p=l(g),E=a(249),v=l(E);a(891);var h=a(149),N=function(e){function t(){var e,a,l,n;(0,u.default)(this,t);for(var r=arguments.length,c=Array(r),s=0;s<r;s++)c[s]=arguments[s];return a=l=(0,i.default)(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),l.state={data:{uid:"",isFollow:!1,medal:[],data:{articleNum:0,follow:0,like:0,love:0}}},n=a,(0,i.default)(l,n)}return(0,f.default)(t,e),(0,c.default)(t,[{key:"componentWillMount",value:function(){(0,h.ajax)(this,"u/"+this.props.uid,"src/routes/Follow/components/FollowMsg.js")}},{key:"render",value:function(){var e=this.props,t=e.mainUserId,a=e.uid,l=this.state.data,n=[];return l.medal.forEach(function(e,t){n.push(m.default.createElement("a",{className:"madalLabel",key:t},e))}),m.default.createElement("div",{className:"userMsg"},m.default.createElement("div",{className:"user-img"},m.default.createElement("a",{className:"avatar block"},m.default.createElement("img",{src:l.user_img,alt:l.nickname}))),m.default.createElement("div",{className:"user-msg"},m.default.createElement("a",{className:"name"},l.nickname),m.default.createElement("span",{className:"sex-age"},l.sex?m.default.createElement("i",{className:"fa fa-mars"}):m.default.createElement("i",{className:"fa fa-venus"}),l.age+" "+l.academy),m.default.createElement("p",{className:"signature"},l.signature),m.default.createElement("p",{className:"info"},m.default.createElement("a",null,m.default.createElement("i",{className:"fa fa-pencil"}),l.data.articleNum),m.default.createElement("a",null,m.default.createElement("i",{className:"fa fa-eye"}),l.data.follow),m.default.createElement("a",null,m.default.createElement("i",{className:"fa fa-thumbs-up"}),l.data.like),m.default.createElement("a",null,m.default.createElement("i",{className:"fa fa-heart"}),l.data.love)),a===t?null:m.default.createElement(v.default,{follow_id:l.uid,isFollow:l.isFollow}),m.default.createElement("h5",null,"个人介绍"),m.default.createElement("p",{className:"introduction"},l.introduction),m.default.createElement("h5",null,"个人成就"),m.default.createElement("p",{className:"introduction"},l.achievement),m.default.createElement("h5",null,"获得勋章"),m.default.createElement("div",{className:"medal text-center"},n)))}}]),t}(d.Component);N.propTypes={mainUserId:p.default.string.isRequired,uid:p.default.string.isRequired},t.default=N},768:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(13),u=l(n),r=a(14),c=l(r),s=a(16),i=l(s),o=a(15),f=l(o),d=a(1),m=l(d),g=a(6),p=l(g),E=a(767),v=l(E),h=a(679),N=l(h),_=a(250),y=l(_),k=function(e){function t(){return(0,u.default)(this,t),(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.uid,a=e.currentToggle,l=e.changeToggle,n=e.params;return m.default.createElement("div",{className:"container",style:{marginTop:"25px"}},m.default.createElement("div",{className:"row"},m.default.createElement("div",{className:"col-sm-4 col-md-3 col-md-offset-1"},m.default.createElement(v.default,{uid:n.userId,mainUserId:t})),m.default.createElement("div",{className:"col-sm-9 col-md-8"},m.default.createElement(N.default,{sign:!0,changeToggle:l}),m.default.createElement(y.default,{uid:n.userId,toggleState:a}))))}}]),t}(d.Component);k.propTypes={uid:p.default.string.isRequired,currentToggle:p.default.string.isRequired,changeToggle:p.default.func.isRequired},t.default=k},891:function(e,t){}});
//# sourceMappingURL=5.a1409190690b065ea93e.js.map