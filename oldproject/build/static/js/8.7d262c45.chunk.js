(this["webpackJsonplunfarda-landing"]=this["webpackJsonplunfarda-landing"]||[]).push([[8],{341:function(r,e,t){"use strict";var o=t(1),p=t(6),n=t(0),a=t.n(n),i=t(22),c=(t(13),t(28)),s=t.n(c),f=t(281);function l(r,e){var t={};return Object.keys(r).forEach((function(o){-1===e.indexOf(o)&&(t[o]=r[o])})),t}var u=t(81);e.a=function(r){var e=function(r){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.name,c=Object(p.a)(t,["name"]);var u,m=n,d="function"===typeof e?function(r){return{root:function(t){return e(Object(o.a)({theme:r},t))}}}:{root:e},y=Object(f.a)(d,Object(o.a)({Component:r,name:n||r.displayName,classNamePrefix:m},c));e.filterProps&&(u=e.filterProps,delete e.filterProps),e.propTypes&&(e.propTypes,delete e.propTypes);var b=a.a.forwardRef((function(e,t){var n=e.children,c=e.className,s=e.clone,f=e.component,m=Object(p.a)(e,["children","className","clone","component"]),d=y(e),b=Object(i.a)(d.root,c),h=m;if(u&&(h=l(h,u)),s)return a.a.cloneElement(n,Object(o.a)({className:Object(i.a)(n.props.className,b)},h));if("function"===typeof n)return n(Object(o.a)({className:b},h));var g=f||r;return a.a.createElement(g,Object(o.a)({ref:t,className:b},h),n)}));return s()(b,r),b}}(r);return function(r,t){return e(r,Object(o.a)({defaultTheme:u.a},t))}}},575:function(r,e,t){"use strict";function o(r,e){if(null==r)return{};var t,o,p=function(r,e){if(null==r)return{};var t,o,p={},n=Object.keys(r);for(o=0;o<n.length;o++)t=n[o],e.indexOf(t)>=0||(p[t]=r[t]);return p}(r,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);for(o=0;o<n.length;o++)t=n[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(p[t]=r[t])}return p}t.r(e),t.d(e,"TabPanel",(function(){return W}));var p=t(0),n=t.n(p),a=t(46),i=t(1),c=(t(13),t(47));var s=function(r){var e=function(e){var t=r(e);return e.css?Object(i.a)(Object(i.a)({},Object(c.a)(t,r(Object(i.a)({theme:e.theme},e.css)))),function(r,e){var t={};return Object.keys(r).forEach((function(o){-1===e.indexOf(o)&&(t[o]=r[o])})),t}(e.css,[r.filterProps])):t};return e.propTypes={},e.filterProps=["css"].concat(Object(a.a)(r.filterProps)),e};var f=function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];var o=function(r){return e.reduce((function(e,t){var o=t(r);return o?Object(c.a)(e,o):e}),{})};return o.propTypes={},o.filterProps=e.reduce((function(r,e){return r.concat(e.filterProps)}),[]),o},l=t(34),u=t(91);function m(r,e){return e&&"string"===typeof e?e.split(".").reduce((function(r,e){return r&&r[e]?r[e]:null}),r):null}var d=function(r){var e=r.prop,t=r.cssProperty,o=void 0===t?r.prop:t,p=r.themeKey,n=r.transform,a=function(r){if(null==r[e])return null;var t=r[e],a=m(r.theme,p)||{};return Object(u.a)(r,t,(function(r){var e;return"function"===typeof a?e=a(r):Array.isArray(a)?e=a[r]||r:(e=m(a,r)||r,n&&(e=n(e))),!1===o?e:Object(l.a)({},o,e)}))};return a.propTypes={},a.filterProps=[e],a};function y(r){return"number"!==typeof r?r:"".concat(r,"px solid")}var b=f(d({prop:"border",themeKey:"borders",transform:y}),d({prop:"borderTop",themeKey:"borders",transform:y}),d({prop:"borderRight",themeKey:"borders",transform:y}),d({prop:"borderBottom",themeKey:"borders",transform:y}),d({prop:"borderLeft",themeKey:"borders",transform:y}),d({prop:"borderColor",themeKey:"palette"}),d({prop:"borderRadius",themeKey:"shape"})),h=f(d({prop:"displayPrint",cssProperty:!1,transform:function(r){return{"@media print":{display:r}}}}),d({prop:"display"}),d({prop:"overflow"}),d({prop:"textOverflow"}),d({prop:"visibility"}),d({prop:"whiteSpace"})),g=f(d({prop:"flexBasis"}),d({prop:"flexDirection"}),d({prop:"flexWrap"}),d({prop:"justifyContent"}),d({prop:"alignItems"}),d({prop:"alignContent"}),d({prop:"order"}),d({prop:"flex"}),d({prop:"flexGrow"}),d({prop:"flexShrink"}),d({prop:"alignSelf"}),d({prop:"justifyItems"}),d({prop:"justifySelf"})),v=f(d({prop:"gridGap"}),d({prop:"gridColumnGap"}),d({prop:"gridRowGap"}),d({prop:"gridColumn"}),d({prop:"gridRow"}),d({prop:"gridAutoFlow"}),d({prop:"gridAutoColumns"}),d({prop:"gridAutoRows"}),d({prop:"gridTemplateColumns"}),d({prop:"gridTemplateRows"}),d({prop:"gridTemplateAreas"}),d({prop:"gridArea"})),O=f(d({prop:"position"}),d({prop:"zIndex",themeKey:"zIndex"}),d({prop:"top"}),d({prop:"right"}),d({prop:"bottom"}),d({prop:"left"})),j=f(d({prop:"color",themeKey:"palette"}),d({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),x=d({prop:"boxShadow",themeKey:"shadows"});function w(r){return r<=1?"".concat(100*r,"%"):r}var P=d({prop:"width",transform:w}),K=d({prop:"maxWidth",transform:w}),T=d({prop:"minWidth",transform:w}),S=d({prop:"height",transform:w}),A=d({prop:"maxHeight",transform:w}),C=d({prop:"minHeight",transform:w}),N=(d({prop:"size",cssProperty:"width",transform:w}),d({prop:"size",cssProperty:"height",transform:w}),f(P,K,T,S,A,C,d({prop:"boxSizing"}))),k=t(282),E=f(d({prop:"fontFamily",themeKey:"typography"}),d({prop:"fontSize",themeKey:"typography"}),d({prop:"fontStyle",themeKey:"typography"}),d({prop:"fontWeight",themeKey:"typography"}),d({prop:"letterSpacing"}),d({prop:"lineHeight"}),d({prop:"textAlign"})),R=t(341),z=s(f(b,h,g,v,O,j,x,N,k.b,E)),I=Object(R.a)("div")(z,{name:"MuiBox"}),G=t(290),W=(Object(G.a)((function(r){return{root:{}}})),function(r){var e=r.children,t=r.value,p=r.index,a=o(r,["children","value","index"]);return n.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==p,id:"wrapped-tabpanel-".concat(p),"aria-labelledby":"wrapped-tab-".concat(p)},a),t===p&&n.a.createElement(I,{p:3},e))});e.default=W}}]);
//# sourceMappingURL=8.7d262c45.chunk.js.map