(this["webpackJsonpreact-challenge"]=this["webpackJsonpreact-challenge"]||[]).push([[0],{31:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(19),s=n.n(a),i=n(17),j=n(4),r=n(11),o=n(2),l=n(0),u=function(t){var e=t.contacts,n=t.onChange;return Object(l.jsxs)("select",{onChange:n,children:[Object(l.jsx)("option",{value:"",children:"Select a contact"}),e.map((function(t){return Object(l.jsx)("option",{value:t.name,children:t.name})}))]})},b=function(t){var e=t.contacts,n=t.title,c=t.setTitle,a=t.contact,s=t.setContact,i=t.date,r=t.setDate,o=t.time,b=t.setTime,O=t.handleSubmit;return Object(l.jsxs)("form",{onSubmit:O,children:[Object(l.jsx)("input",{type:"text",value:n,onChange:function(t){var e=t.target;return c(e.value)},placeholder:"Title"}),Object(l.jsx)("input",{type:"date",value:i,min:function(){var t=(new Date).toLocaleDateString("en-US").split("/"),e=Object(j.a)(t,3),n=e[0],c=e[1],a=e[2];return"".concat(a,"-").concat(n.padStart(2,"0"),"-").concat(c.padStart(2,"0"))}(),onChange:function(t){var e=t.target;return r(e.value)}}),Object(l.jsx)("input",{type:"time",value:o,onChange:function(t){var e=t.target;return b(e.value)}}),Object(l.jsx)(u,{contacts:e,value:a,onChange:function(t){var e=t.target;return s(e.value)}}),Object(l.jsx)("input",{type:"submit"})]})},O=function(t){var e=t.tile;return Object(l.jsx)("div",{className:"tile-container",children:Object.values(e).map((function(t,e){return Object(l.jsx)("p",{className:"".concat(0===e?"tile-title":""," tile"),children:t},e)}))})},d=function(t){var e=t.tiles;return Object(l.jsx)("div",{children:e.map((function(t,e){return Object(l.jsx)(O,{tile:t},e)}))})},h=function(t){var e=t.appointments,n=t.addAppointment,a=t.contacts,s=Object(c.useState)(""),i=Object(j.a)(s,2),r=i[0],o=i[1],u=Object(c.useState)(a.length>0?a[0].name:""),O=Object(j.a)(u,2),h=O[0],p=O[1],m=Object(c.useState)(""),x=Object(j.a)(m,2),v=x[0],f=x[1],g=Object(c.useState)(""),S=Object(j.a)(g,2),C=S[0],y=S[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:"Add Appointment"}),Object(l.jsx)(b,{contacts:a,title:r,setTitle:o,contact:h,setContact:p,date:v,setDate:f,time:C,setTime:y,handleSubmit:function(t){t.preventDefault(),n(r,h,v,C),o(""),p(""),f(""),y("")}})]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:"Appointments"}),Object(l.jsx)(d,{tiles:e})]})]})},p=function(t){var e=t.name,n=t.setName,c=t.phone,a=t.setPhone,s=t.email,i=t.setEmail,j=t.handleSubmit;return Object(l.jsxs)("form",{onSubmit:j,children:[Object(l.jsx)("input",{type:"text",value:e,onChange:function(t){var e=t.target;n(e.value)},required:!0,placeholder:"Name"}),Object(l.jsx)("input",{type:"tel",value:c,onChange:function(t){var e=t.target;a(e.value)},pattern:"^(\\+\\d{1,2}\\s?)?1?\\-?\\.?\\s?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$",required:!0,placeholder:"Phone"}),Object(l.jsx)("input",{type:"email",value:s,onChange:function(t){var e=t.target;i(e.value)},required:!0,placeholder:"Email"}),Object(l.jsx)("input",{type:"submit"})]})},m=function(t){var e=t.contacts,n=t.addContact,a=Object(c.useState)(""),s=Object(j.a)(a,2),i=s[0],r=s[1],o=Object(c.useState)(""),u=Object(j.a)(o,2),b=u[0],O=u[1],h=Object(c.useState)(""),m=Object(j.a)(h,2),x=m[0],v=m[1],f=Object(c.useState)(!1),g=Object(j.a)(f,2),S=g[0],C=g[1];return Object(c.useEffect)((function(){void 0!==e.find((function(t){return t.name===i}))?C(!0):C(!1)}),[i,e,S]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("section",{children:[Object(l.jsxs)("h2",{children:["Add Contact",S?" - Name Already Exists":""]}),Object(l.jsx)(p,{name:i,setName:r,phone:b,setPhone:O,email:x,setEmail:v,handleSubmit:function(t){t.preventDefault(),S||(n(i,b,x),r(""),O(""),v(""))}})]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:"Contacts"}),Object(l.jsx)(d,{tiles:e})]})]})};var x=function(){var t=Object(c.useState)([]),e=Object(j.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)([]),u=Object(j.a)(s,2),b=u[0],O=u[1],d="/contacts",p="/appointments";return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("nav",{children:[Object(l.jsx)(r.b,{to:d,activeClassName:"active",children:"Contacts"}),Object(l.jsx)(r.b,{to:p,activeClassName:"active",children:"Appointments"})]}),Object(l.jsx)("main",{children:Object(l.jsxs)(o.d,{children:[Object(l.jsx)(o.b,{exact:!0,path:"/",children:Object(l.jsx)(o.a,{to:d})}),Object(l.jsx)(o.b,{path:d,children:Object(l.jsx)(m,{contacts:b,addContact:function(t,e,n){O([].concat(Object(i.a)(b),[{name:t,phone:e,email:n}]))}})}),Object(l.jsx)(o.b,{path:p,children:Object(l.jsx)(h,{appointments:n,addAppointment:function(t,e,c,s){a([].concat(Object(i.a)(n),[{title:t,contact:e,date:c,time:s}]))},contacts:b})})]})})]})};s.a.render(Object(l.jsx)(r.a,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.4fa0ab0c.chunk.js.map