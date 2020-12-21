(this["webpackJsonplunfarda-landing"]=this["webpackJsonplunfarda-landing"]||[]).push([[30],{284:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(258);function r(e){if("string"!==typeof e)throw new Error(Object(a.a)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},290:function(e,t,n){"use strict";var a=n(1),r=n(281),i=n(81);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(r.a)(e,Object(a.a)({defaultTheme:i.a},t))}},291:function(e,t,n){"use strict";var a=n(1),r=n(6),i=n(0),o=(n(13),n(22)),l=n(80),c=n(284),s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},p=i.forwardRef((function(e,t){var n=e.align,l=void 0===n?"inherit":n,p=e.classes,u=e.className,d=e.color,f=void 0===d?"initial":d,g=e.component,m=e.display,h=void 0===m?"initial":m,y=e.gutterBottom,x=void 0!==y&&y,b=e.noWrap,v=void 0!==b&&b,w=e.paragraph,j=void 0!==w&&w,E=e.variant,C=void 0===E?"body1":E,O=e.variantMapping,S=void 0===O?s:O,k=Object(r.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),W=g||(j?"p":S[C]||s[C])||"span";return i.createElement(W,Object(a.a)({className:Object(o.a)(p.root,u,"inherit"!==C&&p[C],"initial"!==f&&p["color".concat(Object(c.a)(f))],v&&p.noWrap,x&&p.gutterBottom,j&&p.paragraph,"inherit"!==l&&p["align".concat(Object(c.a)(l))],"initial"!==h&&p["display".concat(Object(c.a)(h))]),ref:t},k))}));t.a=Object(l.a)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(p)},292:function(e,t,n){"use strict";var a=n(6),r=n(1),i=n(0),o=(n(13),n(22)),l=n(80),c=[0,1,2,3,4,5,6,7,8,9,10],s=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var u=i.forwardRef((function(e,t){var n=e.alignContent,l=void 0===n?"stretch":n,c=e.alignItems,s=void 0===c?"stretch":c,p=e.classes,u=e.className,d=e.component,f=void 0===d?"div":d,g=e.container,m=void 0!==g&&g,h=e.direction,y=void 0===h?"row":h,x=e.item,b=void 0!==x&&x,v=e.justify,w=void 0===v?"flex-start":v,j=e.lg,E=void 0!==j&&j,C=e.md,O=void 0!==C&&C,S=e.sm,k=void 0!==S&&S,W=e.spacing,B=void 0===W?0:W,I=e.wrap,M=void 0===I?"wrap":I,N=e.xl,z=void 0!==N&&N,A=e.xs,T=void 0!==A&&A,G=e.zeroMinWidth,D=void 0!==G&&G,J=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),R=Object(o.a)(p.root,u,m&&[p.container,0!==B&&p["spacing-xs-".concat(String(B))]],b&&p.item,D&&p.zeroMinWidth,"row"!==y&&p["direction-xs-".concat(String(y))],"wrap"!==M&&p["wrap-xs-".concat(String(M))],"stretch"!==s&&p["align-items-xs-".concat(String(s))],"stretch"!==l&&p["align-content-xs-".concat(String(l))],"flex-start"!==w&&p["justify-xs-".concat(String(w))],!1!==T&&p["grid-xs-".concat(String(T))],!1!==k&&p["grid-sm-".concat(String(k))],!1!==O&&p["grid-md-".concat(String(O))],!1!==E&&p["grid-lg-".concat(String(E))],!1!==z&&p["grid-xl-".concat(String(z))]);return i.createElement(f,Object(r.a)({className:R,ref:t},J))})),d=Object(l.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return c.forEach((function(a){var r=e.spacing(a);0!==r&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(p(r,2)),width:"calc(100% + ".concat(p(r),")"),"& > $item":{padding:p(r,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};s.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(r.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(u);t.a=d},496:function(e,t,n){"use strict";n.r(t),n.d(t,"Cancellations",(function(){return s}));var a=n(0),r=n.n(a),i=n(292),o=n(291),l=n(290),c=Object(l.a)((function(e){return{root:{backgroundColor:e.palette.text.primary,padding:"4rem 0"}}})),s=function(e){var t=c();return r.a.createElement(i.a,{item:!0,container:!0,xs:12,className:t.root,justify:"center"},r.a.createElement(i.a,{item:!0,container:!0,xs:10},r.a.createElement(i.a,{item:!0,container:!0,xs:12},r.a.createElement(i.a,{item:!0,xs:12},r.a.createElement(o.a,{variant:"h1",style:{color:"black"}},"Cancellation for tours and experiences")),r.a.createElement(i.a,{item:!0,xs:12},r.a.createElement(o.a,{variant:"subtitle1",style:{color:"black"}},r.a.createElement("ul",null,r.a.createElement("li",null,"Tours cancelled up to 1 week previous to the tour will be refunded 100% refund."),r.a.createElement("li",null,"Cancellations 7-5 days before the tour: 80% refund."),r.a.createElement("li",null,"Cancellations 4-3 days before the tour: 50% refund."),r.a.createElement("li",null,"Cancellations 48 hours or less before the tour: 0% refund."))))),r.a.createElement(i.a,{item:!0,container:!0,xs:12},r.a.createElement(i.a,{item:!0,xs:12},r.a.createElement(o.a,{variant:"h1",style:{color:"black"}},"Cancellation for itineraries")),r.a.createElement(i.a,{item:!0,xs:12},r.a.createElement(o.a,{variant:"subtitle1",style:{color:"black"}},r.a.createElement("ul",null,r.a.createElement("li",null,"If you booked an itinerary across multiple places in the country, our cancellation policy is as follows."),r.a.createElement("li",null,"Cancellations up to 1 month before the first day: 100% refund."),r.a.createElement("li",null,"Cancellations 14-30 days before the first day: 75% refund."),r.a.createElement("li",null,"Cancellations 8-13 days before the first day: 25% refund."),r.a.createElement("li",null,"Cancellations made 1 week or less before the first day: 0% refund.")))))))};t.default=s}}]);
//# sourceMappingURL=30.2670446e.chunk.js.map