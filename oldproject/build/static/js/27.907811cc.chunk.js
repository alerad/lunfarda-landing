(this["webpackJsonplunfarda-landing"]=this["webpackJsonplunfarda-landing"]||[]).push([[27],{284:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n(258);function i(t){if("string"!==typeof t)throw new Error(Object(a.a)(7));return t.charAt(0).toUpperCase()+t.slice(1)}},290:function(t,e,n){"use strict";var a=n(1),i=n(281),r=n(81);e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i.a)(t,Object(a.a)({defaultTheme:r.a},e))}},291:function(t,e,n){"use strict";var a=n(1),i=n(6),r=n(0),o=(n(13),n(22)),c=n(80),s=n(284),l={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},p=r.forwardRef((function(t,e){var n=t.align,c=void 0===n?"inherit":n,p=t.classes,d=t.className,g=t.color,u=void 0===g?"initial":g,h=t.component,f=t.display,m=void 0===f?"initial":f,x=t.gutterBottom,y=void 0!==x&&x,b=t.noWrap,v=void 0!==b&&b,w=t.paragraph,j=void 0!==w&&w,O=t.variant,S=void 0===O?"body1":O,k=t.variantMapping,C=void 0===k?l:k,E=Object(i.a)(t,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),W=h||(j?"p":C[S]||l[S])||"span";return r.createElement(W,Object(a.a)({className:Object(o.a)(p.root,d,"inherit"!==S&&p[S],"initial"!==u&&p["color".concat(Object(s.a)(u))],v&&p.noWrap,y&&p.gutterBottom,j&&p.paragraph,"inherit"!==c&&p["align".concat(Object(s.a)(c))],"initial"!==m&&p["display".concat(Object(s.a)(m))]),ref:e},E))}));e.a=Object(c.a)((function(t){return{root:{margin:0},body2:t.typography.body2,body1:t.typography.body1,caption:t.typography.caption,button:t.typography.button,h1:t.typography.h1,h2:t.typography.h2,h3:t.typography.h3,h4:t.typography.h4,h5:t.typography.h5,h6:t.typography.h6,subtitle1:t.typography.subtitle1,subtitle2:t.typography.subtitle2,overline:t.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorTextPrimary:{color:t.palette.text.primary},colorTextSecondary:{color:t.palette.text.secondary},colorError:{color:t.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(p)},292:function(t,e,n){"use strict";var a=n(6),i=n(1),r=n(0),o=(n(13),n(22)),c=n(80),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function p(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(t);return"".concat(n/e).concat(String(t).replace(String(n),"")||"px")}var d=r.forwardRef((function(t,e){var n=t.alignContent,c=void 0===n?"stretch":n,s=t.alignItems,l=void 0===s?"stretch":s,p=t.classes,d=t.className,g=t.component,u=void 0===g?"div":g,h=t.container,f=void 0!==h&&h,m=t.direction,x=void 0===m?"row":m,y=t.item,b=void 0!==y&&y,v=t.justify,w=void 0===v?"flex-start":v,j=t.lg,O=void 0!==j&&j,S=t.md,k=void 0!==S&&S,C=t.sm,E=void 0!==C&&C,W=t.spacing,B=void 0===W?0:W,M=t.wrap,N=void 0===M?"wrap":M,z=t.xl,I=void 0!==z&&z,A=t.xs,J=void 0!==A&&A,T=t.zeroMinWidth,G=void 0!==T&&T,D=Object(a.a)(t,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),P=Object(o.a)(p.root,d,f&&[p.container,0!==B&&p["spacing-xs-".concat(String(B))]],b&&p.item,G&&p.zeroMinWidth,"row"!==x&&p["direction-xs-".concat(String(x))],"wrap"!==N&&p["wrap-xs-".concat(String(N))],"stretch"!==l&&p["align-items-xs-".concat(String(l))],"stretch"!==c&&p["align-content-xs-".concat(String(c))],"flex-start"!==w&&p["justify-xs-".concat(String(w))],!1!==J&&p["grid-xs-".concat(String(J))],!1!==E&&p["grid-sm-".concat(String(E))],!1!==k&&p["grid-md-".concat(String(k))],!1!==O&&p["grid-lg-".concat(String(O))],!1!==I&&p["grid-xl-".concat(String(I))]);return r.createElement(u,Object(i.a)({className:P,ref:e},D))})),g=Object(c.a)((function(t){return Object(i.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(t,e){var n={};return s.forEach((function(a){var i=t.spacing(a);0!==i&&(n["spacing-".concat(e,"-").concat(a)]={margin:"-".concat(p(i,2)),width:"calc(100% + ".concat(p(i),")"),"& > $item":{padding:p(i,2)}})})),n}(t,"xs"),t.breakpoints.keys.reduce((function(e,n){return function(t,e,n){var a={};l.forEach((function(t){var e="grid-".concat(n,"-").concat(t);if(!0!==t)if("auto"!==t){var i="".concat(Math.round(t/12*1e8)/1e6,"%");a[e]={flexBasis:i,flexGrow:0,maxWidth:i}}else a[e]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[e]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(i.a)(t,a):t[e.breakpoints.up(n)]=a}(e,t,n),e}),{}))}),{name:"MuiGrid"})(d);e.a=g},295:function(t,e,n){"use strict";function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return a}))},492:function(t,e,n){"use strict";n.r(e),n.d(e,"HeaderJewish",(function(){return p}));var a=n(295),i=n(0),r=n.n(i),o=n(292),c=n(291),s=n(290),l=Object(s.a)((function(t){var e;return{root:(e={background:"url('https://lun-us.icons8.com/api/assets/16ff6af2-492c-4b1f-a2e8-26bf572645d8/header-jewish.png')"},Object(a.a)(e,t.breakpoints.down("sm"),{backgroundSize:"100% 100%"}),Object(a.a)(e,t.breakpoints.up("md"),{backgroundSize:"cover"}),Object(a.a)(e,"position","relative"),e),subtitle:{color:t.palette.text.secondary},title:{paddingTop:"5rem",marginBottom:"2rem"},blackMask:{zIndex:0,position:"absolute",height:"100%",width:"100%",backgroundColor:"rgb(0,0,0,0.5)"},content:{zIndex:1}}})),p=function(t){var e=l();return r.a.createElement(o.a,{item:!0,container:!0,xs:12,className:e.root,justify:"center"},r.a.createElement(o.a,{item:!0,container:!0,xs:10,className:e.content},r.a.createElement(o.a,{item:!0,xs:12,className:e.title},r.a.createElement(c.a,{variant:"h1"},"Unravel the"),r.a.createElement(c.a,{variant:"h1",className:e.subtitle},"Argentine-jewish identity")),r.a.createElement(o.a,{item:!0,xs:12},r.a.createElement(c.a,{variant:"subtitle1",style:{color:"white",marginBottom:"2rem"}},"Explore the history, landmarks, sorrows and shared identity of Latin America\u2019s largest Jewish population."))),r.a.createElement("div",{className:e.blackMask}))};e.default=p}}]);
//# sourceMappingURL=27.907811cc.chunk.js.map