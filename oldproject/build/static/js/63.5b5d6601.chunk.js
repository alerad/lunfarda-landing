(this["webpackJsonplunfarda-landing"]=this["webpackJsonplunfarda-landing"]||[]).push([[63],{396:function(e,t,n){"use strict";n.r(t),n.d(t,"Header",(function(){return E})),n.d(t,"hButtons",(function(){return b}));var a=n(0),r=n(289),o=n(290),l=n(291),c=n(520),i=n(407),s=n(83),u=Object(o.a)((function(e){return{header:{height:"60px",backgroundColor:"#000000",width:"100%"},mainButton:{color:"#FAFAFA",textDecoration:"none"}}})),m=function(e){var t=e.Text,n=e.Url,r=e.ClassName,o=e.subItems;u();return o?a.createElement(h,{Text:t,Url:n,ClassName:r,subItems:o}):a.createElement(d,{Text:t,Url:n,ClassName:r})},d=function(e){var t=u();return a.createElement(s.b,{to:"".concat(e.Url),style:{textDecoration:"none"}},a.createElement("div",{className:"".concat(t.mainButton)},a.createElement(l.a,{className:e.ClassName},e.Text)))},h=function(e){var t,n=u(),o=a.useState(null),m=Object(r.a)(o,2),d=m[0],h=m[1],f=function(){h(null)},x={color:"white",backgroundColor:"black"};return a.createElement(a.Fragment,null,a.createElement(s.b,{to:"".concat(e.Url),style:{textDecoration:"none"}},a.createElement("div",{className:"".concat(n.mainButton),onMouseEnter:function(e){h(e.currentTarget)}},a.createElement(l.a,{className:e.ClassName},e.Text))),a.createElement(c.a,{id:"simple-menu",anchorEl:d,keepMounted:!0,open:Boolean(d),onClose:f,style:{marginTop:"2.5rem"}},null===(t=e.subItems)||void 0===t?void 0:t.map((function(e){return a.createElement(s.b,{to:"".concat(e.Url),style:{textDecoration:"none"}},a.createElement(i.a,{onClick:f,style:x},e.Text))}))))},f=n(292),x=(n(347),n(346),Object(o.a)((function(e){return{header:{height:"10vh",backgroundColor:"#000000",width:"100%"},mainButtons:{justify:"center"},homeButton:{fontFamily:"LuloCleanOneBold"},socialIcons:{justify:"flex-end"},cta:{}}}))),E=function(){var e=x();return a.createElement(a.Fragment,null,a.createElement(f.a,{item:!0,xs:12,container:!0,justify:"center",alignItems:"center",className:e.header},a.createElement(f.a,{item:!0,xs:8,container:!0,justify:"center",alignItems:"center",spacing:4,style:{height:"100%"}},a.createElement(f.a,{item:!0},a.createElement(m,{ClassName:e.homeButton,Text:"LUNFARDA TRAVEL",Url:"/"})),b.map((function(e,t){return a.createElement(f.a,{item:!0,key:t},a.createElement(m,{Text:e.Text,Url:e.Url,key:e.Text,subItems:e.subItems}))})))))},b=(t.default=E,[{Text:"Buenos Aires",Url:"/buenos-aires",subItems:[{Text:"Neighborhoods",Url:"/neighborhoods"},{Text:"Culture",Url:"/culture"},{Text:"Day trips",Url:"/day-trips"}]},{Text:"Kids",Url:"/kids"},{Text:"Jewish Heritage",Url:"/jewish-heritage"},{Text:"Argentina",Url:"/argentina"},{Text:"Book",Url:"/book"},{Text:"About Us",Url:"/about-us"},{Text:"FAQ",Url:"/faq"}])},586:function(e,t,n){"use strict";n.r(t),n.d(t,"MobileHeader",(function(){return U}));var a=n(289),r=n(0),o=n.n(r),l=n(557),c=n(558),i=n(336),s=n(291),u=n(290),m=n(409),d=n.n(m),h=n(83),f=n(581),x=n(292),E=n(408),b=n(556),g=n(350),p=n.n(g),T=Object(u.a)((function(e){return{root:{backgroundColor:"black",height:"100%",width:"100vw"},listItem:{color:"white",fontWeight:500,fontSize:"10rem",textAlign:"center","& span, & svg":{textDecoration:"none",fontSize:"1.4rem"}},linkItem:{margin:"4rem 0",textDecoration:"none"}}})),y=function(e){var t=T();return o.a.createElement(f.a,{anchor:"left",open:e.open,onClose:e.handleClose,onOpen:e.handleOpen},o.a.createElement("div",{className:t.root},o.a.createElement(x.a,{item:!0,container:!0,xs:12,justify:"flex-start"},o.a.createElement(x.a,{item:!0,xs:2},o.a.createElement(p.a,{style:{width:"100%",color:"white",textAlign:"center",fontSize:"2.5rem",marginTop:"1rem"},onClick:e.handleClose}))),o.a.createElement(x.a,{item:!0,container:!0,xs:12,justify:"center"},e.buttons.map((function(n,a){return o.a.createElement(x.a,{item:!0,xs:12,key:a},o.a.createElement(h.b,{to:"".concat(n.Url),className:t.linkItem,onClick:e.handleClose},o.a.createElement(E.a,{button:!0,key:n.Text,className:t.listItem},o.a.createElement(b.a,{primary:n.Text}))))})))))},k=n(396),C=Object(u.a)((function(e){return{root:{},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,textDecoration:"none",color:"black"}}})),U=function(e){var t=C(),n=o.a.useState(null),r=Object(a.a)(n,2),u=r[0],m=r[1],f=Boolean(u),x=function(e){m(e.currentTarget)},E=function(){m(null)};return window.onpopstate=function(e){window.location.hash;f&&(E(),e.stopImmediatePropagation(),window.history.go(1))},o.a.createElement(l.a,{position:"static"},o.a.createElement(c.a,{style:{backgroundColor:"black"}},o.a.createElement(i.a,{edge:"start",className:t.menuButton,color:"secondary","aria-label":"menu",onClick:x},o.a.createElement(d.a,null)),o.a.createElement(y,{open:f,handleClose:E,anchorEl:u,buttons:k.hButtons,handleOpen:x}),o.a.createElement(h.b,{to:"/",style:{textDecoration:"none"}},o.a.createElement(s.a,{variant:"h6",className:t.title,style:{color:"white"}},"LUNFARDA TRAVEL"))))};t.default=U}}]);
//# sourceMappingURL=63.5b5d6601.chunk.js.map