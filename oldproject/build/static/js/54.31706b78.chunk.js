(this["webpackJsonplunfarda-landing"]=this["webpackJsonplunfarda-landing"]||[]).push([[54],{293:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m})),a.d(t,"c",(function(){return u}));var n=a(0),o=a.n(n),i=a(292),r=a(291),l=a(296),c=a(290),s=Object(c.a)((function(e){return{root:{},textContainer:{textAlign:"left"},panelRoot:{minHeight:"23rem",margin:"3rem 0"}}})),d=function(e){var t=s();return o.a.createElement(i.a,{item:!0,container:!0,xs:12,className:t.root},o.a.createElement(i.a,{item:!0,container:!0,xs:12},o.a.createElement(m,{image:"https://lun-us.icons8.com/api/assets/00204784-0ac0-472d-9c51-239d943e6f8f/plaza-de-mayo.png",title:"Plaza de Mayo",location:"City center"},"This square has been the heart and center of Buenos Aires since the foundation of the city by the Spaniards in the 1580s. Here you\u2019ll find some of the most iconic buildings and landmarks of Buenos Aires, like the Cabildo -colonial city hall-, the Presidential Palace Casa Rosada or the Cathedral.",o.a.createElement("br",null),'"Explore the colonial heritage, the transformation of BA into a metropolis and the complex political history of Argentina."')),o.a.createElement(i.a,{item:!0,container:!0,xs:12},o.a.createElement(u,{image:"https://lun-us.icons8.com/api/assets/b1883611-219f-4cde-9338-9d82bac02de3/puerto-madero.png",title:"Puerto Madero",location:"City center"},"Sleek and slender, this highrise district is the newest neighborhood of the city, enclaved where the old Port used to be. Enjoy delicious meals by the docks, take a picture by the iconic Woman\u2019s Bridge or stroll to the largest park of BA, the Ecological Reserve.",o.a.createElement("br",null),"Discover how the city reinvents itself in the glossiest neighborhood of BA.")))},m=function(e){var t=s(),a=function(){return e.location?o.a.createElement(r.a,{variant:"h5",style:{color:"black"}},e.location):o.a.createElement(o.a.Fragment,null)};return o.a.createElement(i.a,{item:!0,container:!0,xs:12,className:t.panelRoot},o.a.createElement(i.a,{item:!0,container:!0,xs:12,md:6,className:t.textContainer,justify:"flex-end"},o.a.createElement(i.a,{item:!0,container:!0,md:8},o.a.createElement(i.a,{item:!0,xs:12},o.a.createElement(a,null)),o.a.createElement(i.a,{item:!0,xs:12},o.a.createElement(r.a,{variant:"h1",style:{color:"black"}},e.title)),o.a.createElement(i.a,{item:!0,xs:12},o.a.createElement(r.a,{variant:"body1",style:{color:"black"}},e.children)))),o.a.createElement(l.a,{smDown:!0},o.a.createElement(i.a,{item:!0,md:1})),o.a.createElement(i.a,{item:!0,xs:12,md:5,style:{background:"url('"+e.image+"')",backgroundSize:"100% 100%"}}))},u=function(e){var t=s();return o.a.createElement(i.a,{item:!0,container:!0,xs:12,className:t.panelRoot},o.a.createElement(i.a,{item:!0,xs:12,md:5,style:{background:"url('"+e.image+"')",backgroundSize:"100% 100%"}}),o.a.createElement(l.a,{smDown:!0},o.a.createElement(i.a,{item:!0,md:1})),o.a.createElement(i.a,{item:!0,container:!0,xs:12,md:6,className:t.textContainer,justify:"flex-start"},o.a.createElement(i.a,{item:!0,container:!0,md:8},o.a.createElement(i.a,{item:!0,xs:12},o.a.createElement(r.a,{variant:"h5",style:{color:"black"}},e.location)),o.a.createElement(i.a,{item:!0,xs:12},o.a.createElement(r.a,{variant:"h1",style:{color:"black"}},e.title)),o.a.createElement(i.a,{item:!0,xs:12},o.a.createElement(r.a,{variant:"body1",style:{color:"black"}},e.children)))))}},296:function(e,t,a){"use strict";var n=a(1),o=a(6),i=a(0),r=a(13),l=a.n(r),c=a(280),s=a(28),d=a.n(s),m=a(285),u=a(82),f=a(260);function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=Object(f.a)(),o=Object(c.a)({theme:a,name:"MuiUseMediaQuery",props:{}});var r="function"===typeof e?e(a):e;r=r.replace(/^@media( ?)/m,"");var l="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,s=Object(n.a)({},o,t),d=s.defaultMatches,m=void 0!==d&&d,u=s.matchMedia,h=void 0===u?l?window.matchMedia:null:u,p=s.noSsr,b=void 0!==p&&p,v=s.ssrMatchMedia,g=void 0===v?null:v,x=i.useState((function(){return b&&l?h(r).matches:g?g(r).matches:m})),y=x[0],w=x[1];return i.useEffect((function(){var e=!0;if(l){var t=h(r),a=function(){e&&w(t.matches)};return a(),t.addListener(a),function(){e=!1,t.removeListener(a)}}}),[r,h,l]),y}var p=function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return a?u.b.indexOf(e)<=u.b.indexOf(t):u.b.indexOf(e)<u.b.indexOf(t)},b=function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return a?u.b.indexOf(t)<=u.b.indexOf(e):u.b.indexOf(t)<u.b.indexOf(e)},v="undefined"===typeof window?i.useEffect:i.useLayoutEffect,g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var a=e.withTheme,r=void 0!==a&&a,l=e.noSSR,s=void 0!==l&&l,u=e.initialWidth;function f(e){var a=Object(m.a)(),l=e.theme||a,d=Object(c.a)({theme:l,name:"MuiWithWidth",props:Object(n.a)({},e)}),f=d.initialWidth,p=d.width,b=Object(o.a)(d,["initialWidth","width"]),g=i.useState(!1),x=g[0],y=g[1];v((function(){y(!0)}),[]);var w=l.breakpoints.keys.slice().reverse().reduce((function(e,t){var a=h(l.breakpoints.up(t));return!e&&a?t:e}),null),E=Object(n.a)({width:p||(x||s?w:void 0)||f||u},r?{theme:l}:{},b);return void 0===E.width?null:i.createElement(t,E)}return d()(f,t),f}};function x(e){var t=e.children,a=e.only,n=e.width,o=Object(m.a)(),i=!0;if(a)if(Array.isArray(a))for(var r=0;r<a.length;r+=1){if(n===a[r]){i=!1;break}}else a&&n===a&&(i=!1);if(i)for(var l=0;l<o.breakpoints.keys.length;l+=1){var c=o.breakpoints.keys[l],s=e["".concat(c,"Up")],d=e["".concat(c,"Down")];if(s&&p(c,n)||d&&b(c,n)){i=!1;break}}return i?t:null}x.propTypes={children:l.a.node,className:l.a.string,implementation:l.a.oneOf(["js","css"]),initialWidth:l.a.oneOf(["xs","sm","md","lg","xl"]),lgDown:l.a.bool,lgUp:l.a.bool,mdDown:l.a.bool,mdUp:l.a.bool,only:l.a.oneOfType([l.a.oneOf(["xs","sm","md","lg","xl"]),l.a.arrayOf(l.a.oneOf(["xs","sm","md","lg","xl"]))]),smDown:l.a.bool,smUp:l.a.bool,width:l.a.string.isRequired,xlDown:l.a.bool,xlUp:l.a.bool,xsDown:l.a.bool,xsUp:l.a.bool};var y=g()(x),w=a(34),E=a(284),k=a(80);var O=Object(k.a)((function(e){var t={display:"none"};return e.breakpoints.keys.reduce((function(a,n){return a["only".concat(Object(E.a)(n))]=Object(w.a)({},e.breakpoints.only(n),t),a["".concat(n,"Up")]=Object(w.a)({},e.breakpoints.up(n),t),a["".concat(n,"Down")]=Object(w.a)({},e.breakpoints.down(n),t),a}),{})}),{name:"PrivateHiddenCss"})((function(e){var t=e.children,a=e.classes,n=e.className,r=e.only,l=(Object(o.a)(e,["children","classes","className","only"]),Object(m.a)()),c=[];n&&c.push(n);for(var s=0;s<l.breakpoints.keys.length;s+=1){var d=l.breakpoints.keys[s],u=e["".concat(d,"Up")],f=e["".concat(d,"Down")];u&&c.push(a["".concat(d,"Up")]),f&&c.push(a["".concat(d,"Down")])}return r&&(Array.isArray(r)?r:[r]).forEach((function(e){c.push(a["only".concat(Object(E.a)(e))])})),i.createElement("div",{className:c.join(" ")},t)}));t.a=function(e){var t=e.implementation,a=void 0===t?"js":t,r=e.lgDown,l=void 0!==r&&r,c=e.lgUp,s=void 0!==c&&c,d=e.mdDown,m=void 0!==d&&d,u=e.mdUp,f=void 0!==u&&u,h=e.smDown,p=void 0!==h&&h,b=e.smUp,v=void 0!==b&&b,g=e.xlDown,x=void 0!==g&&g,w=e.xlUp,E=void 0!==w&&w,k=e.xsDown,D=void 0!==k&&k,j=e.xsUp,U=void 0!==j&&j,A=Object(o.a)(e,["implementation","lgDown","lgUp","mdDown","mdUp","smDown","smUp","xlDown","xlUp","xsDown","xsUp"]);return"js"===a?i.createElement(y,Object(n.a)({lgDown:l,lgUp:s,mdDown:m,mdUp:f,smDown:p,smUp:v,xlDown:x,xlUp:E,xsDown:D,xsUp:U},A)):i.createElement(O,Object(n.a)({lgDown:l,lgUp:s,mdDown:m,mdUp:f,smDown:p,smUp:v,xlDown:x,xlUp:E,xsDown:D,xsUp:U},A))}},568:function(e,t,a){"use strict";a.r(t),a.d(t,"FoodAndWine",(function(){return s}));var n=a(0),o=a.n(n),i=a(292),r=a(290),l=a(293),c=Object(r.a)((function(e){return{root:{}}})),s=function(e){var t=c();return o.a.createElement(i.a,{item:!0,container:!0,xs:12,className:t.root},o.a.createElement(i.a,{item:!0,container:!0,xs:12},o.a.createElement(l.b,{image:"https://i.imgur.com/Idks2g0.jpeg",title:"Food & Wine"},"Taste traditional charcuterie platters, explore the flavors of Argentine beef in all its glory in the traditional asado, indulge in scrumptious dulce de leche caramel tastings and beyond.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{style:{fontWeight:500}},"Discover some of the best restaurants in Latin America, and sample the creative and forward pushing cuisine of our young chefs in outings with food critics and gastronomy specialists."))))};t.default=s}}]);
//# sourceMappingURL=54.31706b78.chunk.js.map