webpackJsonp([3],{641:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(17),i=n(787),a=function(e){return e&&e.__esModule?e:{default:e}}(i),u=n(666),s={fetchInItData:u.fetchInItData},o=function(e){return{MenuOption:e.hall.CardData.MenuOption}};t.default=(0,r.connect)(o,s)(a.default)},643:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(30),i=n(666),a=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default=(0,r.combineReducers)({CardData:a.default})},665:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.MenuData=[{title:"全部",filter:"SHOW_ALL",search:"all"},{title:"关注最多",filter:"SHOW_MOST_STAR",search:"star",number:"star_number"},{title:"点赞最多",filter:"SHOW_MOST_PRAISE",search:"praise",number:"praise_number"},{title:"技术大牛",filter:"SHOW_MOST_LIKE",search:"like",number:"like_number"},{title:"文章写手",filter:"SHOW_MOST_EDITOR",search:"edit",number:"edit_number"},{title:"通院",filter:"SHOW_TONGYUAN",search:"tongyuan"},{title:"电院",filter:"SHOW_DIANYUAN",search:"dianyuan"},{title:"计院",filter:"SHOW_JIYUAN",search:"jiyuan"},{title:"机电院",filter:"SHOW_JIDIANYUAN",search:"jidianyuan"},{title:"微电院",filter:"SHOW_WEIDIANYUAN",search:"weidianyuan"},{title:"经管",filter:"SHOW_JINGGUAN",search:"jingguanyuan"},{title:"人文",filter:"SHOW_RENWEN",search:"renwen"},{title:"外国语",filter:"SHOW_WAIGUOYU",search:"waiguoyu"},{title:"软院",filter:"SHOW_RUANYUAN",search:"ruanyuan"},{title:"网信",filter:"SHOW_WANGXIN",search:"wangxin"},{title:"材料",filter:"SHOW_CAILIAO",search:"cailiao"},{title:"马克思主义学院",filter:"SHOW_MKS",search:"makesi"},{title:"生科院",filter:"SHOW_SHENGKEYUAN",search:"shengke"}],t.formData=function(e,t){return e.filter(function(e){return t===e.search})[0]}},666:function(e,t,n){"use strict";function r(e){return{type:h,filter:e}}function i(e){return{type:E,index:e}}function a(e){return{type:v,index:e}}function u(e){return{type:b,data:e}}function s(){return{type:g}}function o(e){return{type:A,data:e}}function c(e){var t=e.search,n=e.filter;return function(e){e(r(n));var i=(0,p.unique)(y);e(u("all"===t?i:i))}}function l(e){var t=e.index;e.id;return function(e){e(i(t))}}function d(e){var t=e.index;e.id;return function(e){e(a(t))}}function f(e){return function(e){e(s()),e(o(y))}}Object.defineProperty(t,"__esModule",{value:!0}),t.CANCEL_ATTENTION=t.ADD_ATTENTION=t.UPDATE_DATA=t.START_UPDATE=t.RECEIVE_INIT_DATA=t.SET_VISIBILITY_FILTERS=void 0;var m=n(668),_=function(e){return e&&e.__esModule?e:{default:e}}(m);t.setVisibilityFilters=r,t.fetchInItData=c,t.fetchAddAttention=l,t.fetchCancelAttention=d,t.fetchUpdate=f,t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments[1];switch(t.type){case h:return Object.assign({},e,{MenuOption:t.filter,fetching:!0,data:[]});case b:return Object.assign({},e,{data:t.data,fetching:!1});case E:return Object.assign({},e,{data:[].concat((0,_.default)(e.data.slice(0,t.index)),[Object.assign({},e.data[t.index],{isFollow:!0})],(0,_.default)(e.data.slice(t.index+1)))});case v:return Object.assign({},e,{data:[].concat((0,_.default)(e.data.slice(0,t.index)),[Object.assign({},e.data[t.index],{isFollow:!1})],(0,_.default)(e.data.slice(t.index+1)))});case g:return Object.assign({},e,{fetching:!0});case A:return Object.assign({},e,{data:[].concat((0,_.default)(e.data),(0,_.default)(t.data)),fetching:!1});default:return e}};var p=n(683),h=t.SET_VISIBILITY_FILTERS="SET_VISIBILITY_FILTERS",b=t.RECEIVE_INIT_DATA="UPDATE",g=t.START_UPDATE="START_UPDATE",A=t.UPDATE_DATA="UPDATE_DATA",E=t.ADD_ATTENTION="ADD_ATTENTION",v=t.CANCEL_ATTENTION="CANCEL_ATTENTION",O={MenuOption:"",fetching:!1,data:[]},y=[{img:"https://eopa.bdstatic.com/daoshi/zuming.jpg",userName:"张同学",index:0,id:"cdsc",isFollow:!0,edit_number:234,star_number:3432,like_number:435,praise_number:34,tags:["技术大神, 学霸"]},{img:"https://eopa.bdstatic.com/daoshi%2Fvarsha.png",userName:"张同学",index:2,id:"sdcsd",isFollow:!0,edit_number:234,star_number:3432,like_number:435,praise_number:34,tags:["技术大神, 学霸"]},{img:"https://eopa.bdstatic.com/daoshi%2F%E5%98%89%E6%B1%9B%E5%A4%A7.jpg",userName:"张同学",index:3,id:"gbfgb",isFollow:!0,edit_number:234,star_number:3432,like_number:435,praise_number:34,tags:["技术大神, 学霸"]},{img:"https://eopa.bdstatic.com/daoshi/xiaolv.jpg",userName:"张同学",index:4,id:"vdsfv",isFollow:!0,edit_number:234,star_number:3432,like_number:435,praise_number:34,tags:["技术大神, 学霸"]},{img:"https://eopa.bdstatic.com/daoshi/zhanfang1.jpg",userName:"张同学",index:5,id:"bgfb",isFollow:!0,edit_number:234,star_number:3432,like_number:435,praise_number:34,tags:["技术大神, 学霸"]},{img:"https://eopa.bdstatic.com/daoshi%2F%E8%B6%85%E5%87%A1%E5%A4%A7.jpg",userName:"张同学",index:6,id:"tyjt",isFollow:!0,edit_number:234,star_number:3432,like_number:435,praise_number:34,tags:["技术大神, 学霸"]},{img:"https://eopa.bdstatic.com/daoshi/wangbing.jpg",userName:"张同学",index:7,id:"ewdwef",isFollow:!0,edit_number:234,star_number:3432,like_number:435,praise_number:34,tags:["技术大神, 学霸"]},{img:"https://eopa.bdstatic.com/daoshi/zuming.jpg",userName:"张同学",index:8,id:"rhrhrtht",isFollow:!0,edit_number:234,star_number:3432,like_number:435,praise_number:34,tags:["技术大神, 学霸"]},{img:"https://eopa.bdstatic.com/daoshi%2F%E5%BC%A0%E6%80%9D%E8%BF%9C%E5%B0%8F.jpeg",userName:"张同学",index:9,id:"ferfe",isFollow:!0,edit_number:234,star_number:3432,like_number:435,praise_number:34,tags:["技术大神, 学霸"]},{img:"https://eopa.bdstatic.com/daoshi/xh-big.jpg",userName:"张同学",index:10,id:"evsdvsd",isFollow:!0,edit_number:234,star_number:3432,like_number:435,praise_number:34,tags:["技术大神, 学霸"]},{img:"https://eopa.bdstatic.com/daoshi/sunwei.png",userName:"张同学",index:11,id:"sdva",isFollow:!0,edit_number:234,star_number:3432,like_number:435,praise_number:34,tags:["技术大神, 学霸"]},{img:"https://eopa.bdstatic.com/daoshi%2F%E5%A3%AB%E5%85%A8%E5%A4%A7.jpg",userName:"张同学",index:12,id:"fvdfb",isFollow:!0,edit_number:234,star_number:3432,like_number:435,praise_number:34,tags:["技术大神, 学霸"]},{img:"https://eopa.bdstatic.com/daoshi%2F%E5%91%A8%E6%95%8F%E5%A4%A7.jpeg",userName:"张同学",index:13,id:"sdcsdcsd",isFollow:!0,edit_number:234,star_number:3432,like_number:435,praise_number:34,tags:["技术大神, 学霸"]},{img:"https://eopa.bdstatic.com/daoshi%2F%E6%AE%BF%E6%96%8C%E5%A4%A7.jpg",userName:"张同学",index:14,id:"awdq",isFollow:!0,edit_number:234,star_number:3432,like_number:435,praise_number:34,tags:["技术大神, 学霸"]},{img:"https://eopa.bdstatic.com/daoshi%2F%E4%BB%98%E5%A8%9C%E5%A4%A7.jpg",userName:"张同学",index:15,id:"bgbf",isFollow:!0,edit_number:234,star_number:3432,like_number:435,praise_number:34,tags:["技术大神, 学霸"]},{img:"https://eopa.bdstatic.com/daoshi%2F%E5%BC%A0%E5%8D%93%E5%BD%AC%E5%A4%A7.jpg",userName:"张同学",index:16,id:"ytyt",isFollow:!0,edit_number:234,star_number:3432,like_number:435,praise_number:34,tags:["技术大神, 学霸"]}]},667:function(e,t,n){e.exports={default:n(670),__esModule:!0}},668:function(e,t,n){"use strict";t.__esModule=!0;var r=n(667),i=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return(0,i.default)(e)}},670:function(e,t,n){n(254),n(677),e.exports=n(39).Array.from},671:function(e,t,n){var r=n(149),i=n(37)("toStringTag"),a="Arguments"==r(function(){return arguments}()),u=function(e,t){try{return e[t]}catch(e){}};e.exports=function(e){var t,n,s;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=u(t=Object(e),i))?n:a?r(t):"Object"==(s=r(t))&&"function"==typeof t.callee?"Arguments":s}},672:function(e,t,n){"use strict";var r=n(29),i=n(65);e.exports=function(e,t,n){t in e?r.f(e,t,i(0,n)):e[t]=n}},673:function(e,t,n){var r=n(86),i=n(37)("iterator"),a=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||a[i]===e)}},674:function(e,t,n){var r=n(54);e.exports=function(e,t,n,i){try{return i?t(r(n)[0],n[1]):t(n)}catch(t){var a=e.return;throw void 0!==a&&r(a.call(e)),t}}},675:function(e,t,n){var r=n(37)("iterator"),i=!1;try{var a=[7][r]();a.return=function(){i=!0},Array.from(a,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!i)return!1;var n=!1;try{var a=[7],u=a[r]();u.next=function(){return{done:n=!0}},a[r]=function(){return u},e(a)}catch(e){}return n}},676:function(e,t,n){var r=n(671),i=n(37)("iterator"),a=n(86);e.exports=n(39).getIteratorMethod=function(e){if(void 0!=e)return e[i]||e["@@iterator"]||a[r(e)]}},677:function(e,t,n){"use strict";var r=n(150),i=n(53),a=n(246),u=n(674),s=n(673),o=n(253),c=n(672),l=n(676);i(i.S+i.F*!n(675)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,i,d,f=a(e),m="function"==typeof this?this:Array,_=arguments.length,p=_>1?arguments[1]:void 0,h=void 0!==p,b=0,g=l(f);if(h&&(p=r(p,_>2?arguments[2]:void 0,2)),void 0==g||m==Array&&s(g))for(t=o(f.length),n=new m(t);t>b;b++)c(n,b,h?p(f[b],b):f[b]);else for(d=g.call(f),n=new m;!(i=d.next()).done;b++)c(n,b,h?u(d,p,[i.value,b],!0):i.value);return n.length=b,n}})},683:function(e,t,n){"use strict";function r(e){var t={};return e.reduce(function(e,n){return t[n.id]||(t[n.id]=e.push(n)),e},[])}function i(e,t){for(var n={},r=e.length;r>=2;--r)for(var i=0;i<=r-2;i++)e[i][t]<e[i+1][t]&&(n=e[i][t],e[i][t]=e[i+1][t],e[i+1][t]=n);return e}Object.defineProperty(t,"__esModule",{value:!0}),t.unique=r,t.sortBy=i},691:function(e,t,n){e.exports=n.p+"cee110bd10219ecd6e1e22b0e7caec28.png"},787:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),a=r(i),u=n(14),s=r(u),o=n(16),c=r(o),l=n(15),d=r(l),f=n(1),m=r(f),_=n(6),p=r(_);n(930);var h=n(260),b=r(h),g=n(788),A=r(g),E=function(e){function t(){return(0,a.default)(this,t),(0,c.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.props,t=e.fetchInItData,n=e.MenuOption;return m.default.createElement("div",null,m.default.createElement(b.default,{items:v}),m.default.createElement(A.default,{MenuOption:n,fetchInItData:t}),m.default.createElement("div",{className:"container pd-top-40"},this.props.children))}}]),t}(f.Component);E.propTypes={fetchInItData:p.default.func,MenuOption:p.default.string},t.default=E;var v=[{src:n(691),alt:"名人堂"},{src:n(691),alt:"名人堂"},{src:n(691),alt:"名人堂"},{src:n(691),alt:"名人堂"}]},788:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),a=r(i),u=n(14),s=r(u),o=n(16),c=r(o),l=n(15),d=r(l),f=n(1),m=r(f),_=n(38),p=n(6),h=r(p);n(931);var b=function(e){function t(){(0,a.default)(this,t);var e=(0,c.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.handleClick=function(t){0===e.state.sty.height?e.setState({sty:{height:40}}):e.setState({sty:{height:0}})},e.check=function(e){return!(0===["star","praise","like","edit"].filter(function(t){return e===t}).length)},e.state={sty:{height:0}},e}return(0,d.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){for(var e=this,t=this.props.MenuOption,r=[],i=[],a=n(665),u=a.MenuData,s=0,o=u.length;s<o;s++)!function(n,a){var s=m.default.createElement("li",{key:n,className:(e.check(u[n].search)?"":"hidden-xs")+(t===u[n].filter?" active":""),onClick:function(){return e.props.fetchInItData({search:u[n].search,filter:u[n].filter})}},m.default.createElement(_.Link,{to:"/hall/"+u[n].search},u[n].title));n<9?r.push(s):i.push(s)}(s);return m.default.createElement("div",{className:"menu"},m.default.createElement("ul",{className:"first-menu"},r,m.default.createElement("li",{onClick:this.handleClick,className:"hidden-xs"},"其他学院",m.default.createElement("i",{className:"fa fa-caret-down"}))),m.default.createElement("ul",{className:"second-menu",style:this.state.sty},i))}}]),t}(f.Component);b.propTypes={MenuOption:h.default.string,fetchInItData:h.default.func},t.default=b},930:function(e,t){},931:function(e,t){}});
//# sourceMappingURL=3.7c160fdefb61fbd7f979.js.map