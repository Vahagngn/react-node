(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{110:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){},144:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(69),r=n.n(a),i=n(7),l=n(5);function o(){}var j=Object(c.createContext)({token:null,userId:null,name:null,last_name:null,login:o,logout:o,info:o,isAuthenticated:!1}),u=n(2),d="userData",b=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(!1),r=Object(u.a)(a,2),i=r[0],l=r[1],o=Object(c.useState)(null),j=Object(u.a)(o,2),b=j[0],p=j[1],O=Object(c.useState)(""),h=Object(u.a)(O,2),m=h[0],x=h[1],f=Object(c.useState)(""),v=Object(u.a)(f,2),g=v[0],N=v[1],y=Object(c.useCallback)((function(e,t,n,c){s(e),p(t),x(n),N(c),localStorage.setItem(d,JSON.stringify({userId:t,token:e,name:n,last_name:c}))}),[]),k=Object(c.useCallback)((function(){s(null),p(null),localStorage.removeItem(d)}),[]);return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem(d));e&&e.token&&y(e.token,e.userId,e.name,e.last_name),l(!0)}),[y]),{login:y,logout:k,token:n,userId:b,name:m,last_name:g,ready:i}},p=(n(30),n(82),n(0));var O=function(){var e=Object(c.useContext)(j),t=(Object(i.g)(),b()),n=t.token,s=t.name,a=t.last_name;return n?Object(p.jsx)("nav",{className:"blue darken-4 navbar",children:Object(p.jsx)("div",{className:"nav-wrapper",children:Object(p.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(p.jsx)("li",{children:Object(p.jsx)(l.c,{to:"/allmeetups",activeClassName:"active",exact:!0,children:"All Meetups"})}),Object(p.jsx)("li",{children:Object(p.jsx)(l.c,{to:"/newMeetup",activeClassName:"active",children:"Create Meetup"})}),Object(p.jsx)("li",{children:Object(p.jsx)(l.c,{to:"/favorites",activeClassName:"active",children:"Favorite Meetups "})}),Object(p.jsx)("li",{children:Object(p.jsx)(l.c,{to:"/",activeClassName:"active",exact:!0,children:"Todos"})}),Object(p.jsx)("li",{children:Object(p.jsx)(l.c,{to:"/create",activeClassName:"active",children:"Create Todos"})}),Object(p.jsx)("li",{children:Object(p.jsx)(l.c,{to:"/createpage",activeClassName:"active",exact:!0,children:"Create Link"})}),Object(p.jsx)("li",{children:Object(p.jsx)(l.c,{to:"/links",activeClassName:"active",exact:!0,children:"Links"})}),Object(p.jsx)("li",{children:Object(p.jsx)(l.c,{to:"/users/list",activeClassName:"active",children:"Users List"})}),Object(p.jsx)("li",{style:{marginRight:"15rem"},children:Object(p.jsx)(l.c,{to:"/messages",activeClassName:"active",children:"Messages"})}),Object(p.jsxs)("li",{className:"userName",children:[Object(p.jsxs)("span",{className:"icon",children:[Object(p.jsx)("i",{className:"small material-icons",children:"account_circle "})," "]}),Object(p.jsxs)("span",{className:"name",children:[s," ",a," "]})]}),Object(p.jsx)("li",{className:"logout",style:{marginRight:"0"},children:Object(p.jsx)("a",{href:"/routespage",onClick:function(){e.logout()},children:"Logout"})})]})})}):Object(p.jsx)("nav",{className:"blue darken-4 navbar",children:Object(p.jsx)("div",{className:"nav-wrapper",children:Object(p.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(p.jsx)("li",{children:Object(p.jsx)(l.c,{to:"/routespage",activeClassName:"active",children:"Login"})}),Object(p.jsx)("li",{children:Object(p.jsx)(l.c,{to:"/registration",activeClassName:"active",children:"Registration"})})]})})})},h=n(4),m=n.n(h),x=n(6),f=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(null),r=Object(u.a)(a,2),i=r[0],l=r[1],o=Object(c.useCallback)(function(){var e=Object(x.a)(m.a.mark((function e(t){var n,c,a,r,i,o=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:"GET",c=o.length>2&&void 0!==o[2]?o[2]:null,a=o.length>3&&void 0!==o[3]?o[3]:{},s(!0),e.prev=4,c&&(c=JSON.stringify(c),a["Content-Type"]="application/json"),e.next=8,fetch(t,{method:n,body:c,headers:a});case 8:return r=e.sent,e.next=11,r.json();case 11:if(i=e.sent,r.ok){e.next=14;break}throw new Error(i.message||"Data error");case 14:return s(!1),e.abrupt("return",i);case 18:throw e.prev=18,e.t0=e.catch(4),s(!1),l(e.t0.message),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{loading:n,request:o,error:i,clearError:Object(c.useCallback)((function(){return l(null)}),[])}},v=function(){var e=Object(i.g)(),t=Object(c.useContext)(j),n=f().request,s=Object(c.useState)(""),a=Object(u.a)(s,2),r=a[0],l=a[1],o=function(){var c=Object(x.a)(m.a.mark((function c(s){var a;return m.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if("Enter"!==s.key){c.next=10;break}return c.prev=1,c.next=4,n("/api/link/generate","POST",{from:r},{Authorization:"Bearer ".concat(t.token)});case 4:a=c.sent,e.push("/detail/".concat(a.link._id)),c.next=10;break;case 8:c.prev=8,c.t0=c.catch(1);case 10:case"end":return c.stop()}}),c,null,[[1,8]])})));return function(e){return c.apply(this,arguments)}}(),d=function(){var c=Object(x.a)(m.a.mark((function c(){var s;return m.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,n("/api/link/generate","POST",{from:r},{Authorization:"Bearer ".concat(t.token)});case 3:s=c.sent,e.push("/detail/".concat(s.link._id)),c.next=9;break;case 7:c.prev=7,c.t0=c.catch(0);case 9:case"end":return c.stop()}}),c,null,[[0,7]])})));return function(){return c.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col s8 offset-s2",style:{paddingTop:"2rem"},children:Object(p.jsxs)("div",{className:"input-field",children:[Object(p.jsx)("input",{placeholder:"Add Link",id:"link",type:"text",value:r,onChange:function(e){return l(e.target.value)},onKeyPress:o}),Object(p.jsx)("p",{className:"inputText",children:"Press Enter or click on the button"}),Object(p.jsx)("button",{onClick:d,className:"btn btn",type:"submit",children:"Add Link"}),Object(p.jsx)("label",{htmlFor:"link"})]})})})},g=function(){return Object(p.jsx)("div",{style:{display:"flex",justifyContent:"center",paddingTop:"2rem"},children:Object(p.jsx)("div",{className:"preloader-wrapper big active",children:Object(p.jsxs)("div",{className:"spinner-layer spinner-blue-only",children:[Object(p.jsx)("div",{className:"circle-clipper left",children:Object(p.jsx)("div",{className:"circle"})}),Object(p.jsx)("div",{className:"gap-patch",children:Object(p.jsx)("div",{className:"circle"})}),Object(p.jsx)("div",{className:"circle-clipper right",children:Object(p.jsx)("div",{className:"circle"})})]})})})},N=function(e){var t=e.link;return Object(p.jsxs)("div",{className:"container",style:{position:"relative",margin:"auto"},children:[Object(p.jsx)("h2",{children:"Link"}),Object(p.jsxs)("p",{children:["Your link: ",Object(p.jsx)("a",{href:t.to,target:"_blank",rel:"noopener noreferrer",children:"Click to follow the link"})]}),Object(p.jsxs)("p",{children:["From: ",Object(p.jsx)("a",{href:t.from,target:"_blank",rel:"noopener noreferrer",children:t.from})]}),Object(p.jsxs)("p",{children:["Number of clicks: ",Object(p.jsx)("strong",{children:t.clicks})]}),Object(p.jsxs)("p",{children:["Date of creation: ",Object(p.jsx)("strong",{children:new Date(t.date).toLocaleDateString()})]})]})},y=function(){var e=Object(c.useContext)(j).token,t=f(),n=t.request,s=t.loading,a=Object(c.useState)(),r=Object(u.a)(a,2),l=r[0],o=r[1],d=Object(i.i)().id,b=Object(c.useCallback)(Object(x.a)(m.a.mark((function t(){var c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n("/api/link/".concat(d),"GET",null,{Authorization:"Bearer ".concat(e)});case 3:c=t.sent,o(c),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])}))),[e,d,n]);return Object(c.useEffect)((function(){b()}),[b]),s?Object(p.jsx)(g,{}):Object(p.jsx)(p.Fragment,{children:!s&&l&&Object(p.jsx)(N,{link:l})})},k=n(22),w=n(18),C=function(){var e=Object(c.useContext)(j),t=Object(c.useCallback)((function(e){window.M&&e&&window.M.toast({html:e})}),[]),n=f(),s=n.loading,a=n.request,r=n.error,i=n.clearError,o=Object(c.useState)({email:"",password:""}),d=Object(u.a)(o,2),b=d[0],O=d[1],h=Object(c.useState)(""),v=Object(u.a)(h,2),g=v[0],N=v[1],y=Object(c.useState)(""),C=Object(u.a)(y,2),_=C[0];C[1];Object(c.useEffect)((function(){t(r),i()}),[r,t,i]);var S=function(e){O(Object(w.a)(Object(w.a)({},b),{},Object(k.a)({},e.target.name,e.target.value)))},F=function(){var t=Object(x.a)(m.a.mark((function t(){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a("/api/auth/login","POST",Object(w.a)({},b));case 3:n=t.sent,e.login(n.token,n.userId,n.name,n.last_name),window.location.reload(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),N(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col s6 offset-s3",children:[Object(p.jsx)("h1",{style:{color:"white"},children:"Links"}),Object(p.jsxs)("div",{className:"card blue darken-1",style:{padding:10},children:[Object(p.jsx)("div",{className:"card-content white-text",children:Object(p.jsx)("span",{className:"card-title",children:"Authorization"})}),Object(p.jsxs)("div",{className:"input-field",children:[Object(p.jsx)("input",{placeholder:"Email",id:"email",type:"text",name:"email",className:"yellow-input",value:b.email,onChange:S,style:{textAlign:"center"}}),Object(p.jsx)("label",{htmlFor:"email"})]}),Object(p.jsxs)("div",{className:"input-field",children:[Object(p.jsx)("input",{placeholder:"Password",id:"password",type:"password",name:"password",className:"yellow-input",value:b.password,onChange:S,style:{textAlign:"center"}}),Object(p.jsx)("label",{htmlFor:"password"})]}),Object(p.jsxs)("div",{className:"card-action",children:[Object(p.jsx)("button",{onClick:F,disabled:s,className:"btn yellow darken-4",style:{marginRight:10},children:"Login"}),Object(p.jsx)(l.c,{to:"/registration",children:Object(p.jsx)("button",{className:"btn grey lighten-1 black-text",children:"Registration"})}),g?Object(p.jsx)("span",{style:{color:"red",fontWeight:"bold"},children:g}):Object(p.jsx)("span",{style:{color:"yellow",fontWeight:"bold"},children:_})]})]})]})})},_=n(72),S={mode:"cors",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},crossdomain:!0,baseURL:"http://localhost:5000/"},F=n.n(_).a.create(S);F.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e)}));var E=F,I=function(e){var t=e.todo,n=e.deleteUser;return Object(p.jsx)("li",{className:"todo",children:Object(p.jsx)("form",{children:Object(p.jsxs)("label",{className:"userInfo",children:[Object(p.jsx)("input",{type:"checkbox",name:"completed"}),Object(p.jsxs)("span",{id:"userInfo",children:["Program Name: ",Object(p.jsx)("span",{children:t.title}),Object(p.jsx)("br",{}),"User Name: ",Object(p.jsx)("span",{children:t.user_name}),Object(p.jsx)("br",{}),"Age: ",Object(p.jsx)("span",{children:t.user_age}),Object(p.jsx)("br",{}),"Speciality: ",Object(p.jsx)("span",{children:t.speciality}),Object(p.jsx)("br",{})]}),Object(p.jsx)("input",{type:"hidden",name:"id"}),Object(p.jsx)("div",{className:"flex buttons",children:Object(p.jsx)("button",{onClick:function(){return n(t._id)},className:"btn btn-small",type:"button",children:"Delete"})})]})})},t._id)};var M=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=t[0],s=t[1];function a(e){return r.apply(this,arguments)}function r(){return(r=Object(x.a)(m.a.mark((function e(t){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.filter((function(e){return e._id!==t})),s(c),e.next=4,fetch("/delete/".concat(t),{method:"DELETE"});case 4:e.sent;case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){E.get("/data").then((function(e){s(e)}))}),[]),null!==n?Object(p.jsxs)("div",{className:"contentContainer",children:[Object(p.jsx)("h2",{className:"todosPage",children:"Todos page"}),Object(p.jsx)("ul",{children:n.length?n.map((function(e,t){return Object(p.jsx)(I,{todo:e,deleteUser:a},t)})):Object(p.jsx)("p",{children:"List is empty"})})]}):null};var A=function(){return Object(p.jsxs)("form",{className:"createForm",action:"/data",method:"POST",children:[Object(p.jsx)("h2",{className:"createTodo",children:"Create todo"}),Object(p.jsxs)("div",{className:"input-field",children:[Object(p.jsx)("input",{type:"text",name:"title",placeholder:"Program Name"}),Object(p.jsx)("label",{})]}),Object(p.jsxs)("div",{className:"input-field",children:[Object(p.jsx)("input",{type:"text",name:"user_name",placeholder:"User Name"}),Object(p.jsx)("label",{})]}),Object(p.jsxs)("div",{className:"input-field",children:[Object(p.jsx)("input",{type:"text",name:"user_age",placeholder:"Age"}),Object(p.jsx)("label",{})]}),Object(p.jsxs)("div",{className:"input-field",children:[Object(p.jsx)("input",{type:"text",name:"speciality",placeholder:"Speciality"}),Object(p.jsx)("label",{})]}),Object(p.jsx)(l.c,{to:"/",children:Object(p.jsx)("button",{type:"submit",className:"btn",children:"Create"})})]})},T=(n(110),function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),r=Object(u.a)(a,2),i=r[0],l=r[1],o=Object(c.useState)({email:null,name:null,last_name:null,password:null}),j=Object(u.a)(o,2),d=j[0],b=j[1],O=f(),h=O.loading,v=O.request,g=(O.error,O.clearError,function(){var e=Object(x.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v("/api/auth/register","POST",Object(w.a)({},d)).then((function(e){l(e.message)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),s(e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}());Object(c.useEffect)((function(){b({email:"",password:""})}),[]);var N=function(e){b(Object(w.a)(Object(w.a)({},d),{},Object(k.a)({},e.target.name,e.target.value)))};return Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col s6 offset-s3",children:[Object(p.jsx)("h1",{style:{color:"white"},children:"Links"}),Object(p.jsxs)("div",{className:"card green darken-1",id:"register-form",style:{padding:10},children:[Object(p.jsx)("div",{className:"card-content white-text",children:Object(p.jsx)("span",{className:"card-title",id:"card-title",children:"Registration"})}),Object(p.jsxs)("div",{className:"input-register",children:[Object(p.jsx)("input",{placeholder:"Email",id:"email",type:"text",name:"email",className:"yellow-input",onChange:N,autoComplete:"off",readOnly:!0,onFocus:function(e){e.target.removeAttribute("readonly")},style:{textAlign:"center"}}),Object(p.jsx)("label",{htmlFor:"email"})]}),Object(p.jsxs)("div",{className:"input-register",children:[Object(p.jsx)("input",{placeholder:"Password",id:"password",type:"password",name:"password",className:"yellow-input",autoComplete:"off",onChange:N,style:{textAlign:"center"}}),Object(p.jsx)("label",{htmlFor:"password"})]}),Object(p.jsxs)("div",{className:"input-register",children:[Object(p.jsx)("input",{placeholder:"Name",id:"name",type:"text",name:"name",className:"yellow-input",autoComplete:"off",onChange:N,style:{textAlign:"center"}}),Object(p.jsx)("label",{htmlFor:"text"})]}),Object(p.jsxs)("div",{className:"input-register",children:[Object(p.jsx)("input",{placeholder:"Last name",id:"last_name",type:"text",name:"last_name",className:"yellow-input",autoComplete:"off",onChange:N,style:{textAlign:"center"}}),Object(p.jsx)("label",{htmlFor:"text"})]}),Object(p.jsxs)("div",{className:"card-action",children:[Object(p.jsx)("button",{onClick:g,disabled:h,className:"btn grey lighten-1 black-text",children:"Registration"}),n?Object(p.jsx)("span",{style:{color:"red",fontWeight:"bold"},children:n}):Object(p.jsx)("span",{style:{color:"yellow",fontWeight:"bold"},children:i})]})]})]})})}),L=function(e){var t=e.user;e.deleteUser;return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:t.name}),Object(p.jsx)("td",{children:t.last_name}),Object(p.jsx)("td",{children:t.email}),Object(p.jsx)("td",{})]},t._id)},P=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useContext)(j);return Object(c.useEffect)((function(){E.get("/api/auth/users/list").then((function(e){var t=e.filter((function(e){return e._id!==a.userId}));s(t)}))}),[]),null!==n?Object(p.jsxs)("table",{style:{position:"relative",margin:"auto",width:"70%"},children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Name"}),Object(p.jsx)("th",{children:"Last Name"}),Object(p.jsx)("th",{children:"Email"})]})}),Object(p.jsx)("tbody",{children:n.length?n.map((function(e,t){return Object(p.jsx)(L,{user:e},t)})):Object(p.jsx)("p",{children:"List is empty"})})]}):null},D=n(35),B=n(146),R=n(76),U=(n(111),n(112),n(73)),q=n.n(U);function z(e){if(z.exists)return z.instance;var t=q.a.connect("http://localhost:5000?userId=".concat(e),{transports:["websocket"]});return z.exists=!0,z.instance=t,t}var J=function(e){var t=e.user,n=e.onCancel,s=e.chatActive,a=Object(c.useState)([]),r=Object(u.a)(a,2),i=(r[0],r[1]),l=b(),o=l.name,d=l.last_name,O=Object(c.useContext)(j),h=z();return Object(c.useEffect)((function(){return h.on("get-private",(function(e){var t=e.privateMsg,n=s.messages;n.unshift(t),i(Object(D.a)(n))})),function(){h.off("get-private")}}),[s.messages]),Object(c.useEffect)((function(){var e=function(){var e=Object(x.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.get("/private-message");case 3:t=e.sent,i(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),t?Object(p.jsxs)("div",{className:"privateMessageContainer",children:[Object(p.jsxs)("div",{className:"sendTextContainer",children:[Object(p.jsxs)("div",{className:"headerContainer",children:[Object(p.jsxs)("h5",{children:[t.name.charAt(0)+"."+t.last_name," "]}),Object(p.jsx)("button",{className:"btn onCancel",onClick:n,children:"\u21a9"})]}),Object(p.jsx)("input",{style:{border:"1px solid #26a69a",marginTop:"10px"},className:"sendText",type:"text",id:"privateMessage"})]}),Object(p.jsx)("div",{className:"sendBtn",children:Object(p.jsxs)("button",{type:"button",className:"btn btn-default btn-sm",onClick:function(){var e=document.getElementById("privateMessage");e&&h.emit("private-message",{message:e.value,privateName:o,privateLast:d,firstUserId:O.userId,secondUserId:t._id}),e.value=""},children:[Object(p.jsx)("span",{className:"glyphicon glyphicon-envelope"})," Send"]})}),s.user?Object(p.jsx)("div",{className:"messageContainer",children:s.messages.length?s.messages.map((function(e,t){return Object(p.jsxs)("div",{style:{display:"flex"},children:[Object(p.jsxs)("p",{className:"userName",children:[e.privateName+" "+e.privateLast," : \xa0 "]}),Object(p.jsx)("p",{className:"userText",children:e.message})]},t)})):null}):""]}):null},W=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)([]),r=Object(u.a)(a,2),i=r[0],l=r[1],o=Object(c.useState)({user:null,messages:null}),d=Object(u.a)(o,2),O=d[0],h=d[1],f=Object(c.useContext)(j),v=z(f.userId),g=b(),N=g.name,y=g.last_name;var k=function(){var e=Object(x.a)(m.a.mark((function e(t){var c,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h({user:null,messages:null}),c=t.target.querySelector("p").innerHTML,e.next=4,E.get("/get-or-create-chat?firstUserId=".concat(f.userId,"&secondUserId=").concat(n.filter((function(e){return e._id==c}))[0]._id));case 4:s=e.sent,h({user:n.filter((function(e){return e._id==c}))[0],messages:s.messages});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(x.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"Enter"===t.key&&(n=document.getElementById("message"),v.emit("message",{message:n.value,name:N,last_name:y}),n.value="");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return v.on("get-message",(function(e){var t=e.msg,n=i;n.unshift(t),l(Object(D.a)(n))})),function(){v.off("get-message")}}),[i]),Object(c.useEffect)((function(){E.get("/api/auth/users/list").then((function(e){var t=e.filter((function(e){return e._id!==f.userId}));s(t)})),E.get("/messages").then((function(e){l(e)}))}),[i]),window.socket=v,Object(p.jsx)("div",{style:{display:"flex"},children:n.length?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(B.a,{className:"list-users",children:Object(p.jsx)("div",{children:n.map((function(e,t){return Object(p.jsx)("div",{children:Object(p.jsxs)(R.a,{className:"btn btn-users",tag:"button",action:!0,onClick:function(e){return k(e)},children:[Object(p.jsx)("p",{style:{display:"none"},children:e._id}),e.name+" "+e.last_name]})},t)}))})}),Object(p.jsxs)("div",{className:"InputContainer",children:[Object(p.jsx)("div",{className:"textMessage",children:Object(p.jsx)("input",{id:"message",type:"text",onKeyPress:w,style:{border:"1px solid #26a69a",margin:0}})}),Object(p.jsx)("div",{className:"sendButtonContainer",children:Object(p.jsxs)("button",{onClick:function(){var e=document.getElementById("message");v.emit("message",{message:e.value,name:N,last_name:y}),e.value=""},type:"button",id:"sendButton",className:"btn btn-default btn-sm",children:[Object(p.jsx)("span",{className:"glyphicon glyphicon-envelope"})," Send Message"]})}),Object(p.jsx)("div",{className:"messagesContainer",children:i.length?i.map((function(e,t){return Object(p.jsxs)("div",{className:"nameMessage",children:[Object(p.jsxs)("p",{className:"userName",children:[e.name," ",e.last_name," : \xa0"]}),Object(p.jsx)("p",{style:{color:"gray"},children:e.message})]},t)})):""})]}),O?Object(p.jsx)(J,{chatActive:O,user:O.user,onCancel:function(){h(null)}}):null]}):null})},G=function(e){var t=e.links,n=e.deleteLink;return t.length?Object(p.jsxs)("table",{style:{position:"relative",margin:"auto",width:"70%"},children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Number"}),Object(p.jsx)("th",{children:"Original"}),Object(p.jsx)("th",{children:"Abbreviated"}),Object(p.jsx)("th",{children:"Open"}),Object(p.jsx)("th",{children:"Delete"})]})}),Object(p.jsx)("tbody",{children:t.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:t+1}),Object(p.jsx)("td",{children:e.from}),Object(p.jsx)("td",{children:e.to}),Object(p.jsx)("td",{children:Object(p.jsx)(l.b,{to:"/detail/".concat(e._id),children:" Open "})}),Object(p.jsx)("td",{children:Object(p.jsx)(l.b,{to:"/links",onClick:function(){return n(e._id)},children:" Delete "})})]},e._id)}))})]}):Object(p.jsx)("p",{className:"center",children:"No links"})},H=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1],a=f(),r=a.loading,i=a.request,l=Object(c.useContext)(j).token,o=Object(c.useCallback)(Object(x.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i("/api/link","GET",null,{Authorization:"Bearer ".concat(l)});case 3:t=e.sent,s(t),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),[l,i]);if(Object(c.useEffect)((function(){o()}),[o]),r)return Object(p.jsx)(g,{});function d(){return(d=Object(x.a)(m.a.mark((function e(t){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.filter((function(e){return e._id!==t})),s(c),e.next=4,fetch("/api/link/delete/link/".concat(t),{method:"DELETE"});case 4:e.sent;case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsx)(p.Fragment,{children:!r&&Object(p.jsx)(G,{deleteLink:function(e){return d.apply(this,arguments)},links:n})})},K=n(74),Y=n.n(K);var Z=function(e){return Object(p.jsx)("div",{className:Y.a.Card,children:e.children})},Q=n(75),V=n.n(Q),X=Object(c.createContext)({favorites:[],totalFavorites:0,addFavorite:function(e){},removeFavorite:function(e){},itemIsFavorite:function(e){}});function $(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),s=n[0],a=n[1];var r={favorites:s,totalFavorites:s.length,addFavorite:function(e){console.log(e,"favorite context"),a((function(t){return t.concat(e)}))},removeFavorite:function(e){a((function(t){return t.filter((function(t){return t._id!==e}))})),E.delete("/api/page/meetup/delete/".concat(e)),console.log("deleted from favorites")},itemIsFavorite:function(e){return s.some((function(t){return t._id===e}))}};return Object(p.jsx)(X.Provider,{value:r,children:e.children})}var ee=X;var te=Object(i.j)((function(e){var t=Object(c.useContext)(ee),n=t.itemIsFavorite(e.meetup._id),s=Object(i.h)();return Object(p.jsx)("li",{children:Object(p.jsxs)(Z,{children:[Object(p.jsxs)("div",{children:[Object(p.jsxs)("p",{children:["Meetup Title:",e.meetup.title]}),Object(p.jsxs)("p",{children:["Meetup Address:",e.meetup.address]}),Object(p.jsxs)("p",{children:["Description:",e.meetup.description]})]}),Object(p.jsxs)("div",{className:V.a.buttons,children:["/favorites"!==s.pathname&&Object(p.jsxs)("div",{children:["  ",Object(p.jsxs)("button",{className:"btn",onClick:function(){!function(c){if(n)e.deleteFavMeetup(c),console.log("removed from favorites");else{console.log("added to favorites");var s={title:e.meetup.title,address:e.meetup.address,description:e.meetup.description,meetupsId:c,isFavorite:!0};t.addFavorite(s)}}(e.meetup.meetupsId)},children:[" ",n?"Remove from favorites":"To Favorite"]})]}),Object(p.jsxs)("div",{children:["  ",Object(p.jsx)("button",{className:"btn",onClick:function(){var t;"/favorites"===s.pathname?(t=e.meetup._id,e.deleteFavMeetup(t)):function(t){e.deleteMeetup(t)}(e.meetup._id)},children:"Delete"})]})]})]})},e.meetup._id)}));var ne=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)([]),r=Object(u.a)(a,2),i=(r[0],r[1]),l=Object(c.useState)(!0),o=Object(u.a)(l,2),j=o[0],d=o[1],b=Object(c.useContext)(ee);function O(e){return h.apply(this,arguments)}function h(){return(h=Object(x.a)(m.a.mark((function e(t){var c,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.filter((function(e){return e._id!==t})),s(c),e.next=4,fetch("/api/page/meetup/delete/".concat(t),{method:"DELETE"});case 4:e.sent,b.removeFavorite(t),a=b.favorites.filter((function(e){return e._id!==t})),console.log(a),i(a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){b.removeFavorite(e);var t=b.favorites.filter((function(t){return t._id!==e}));i(t)}return Object(c.useEffect)((function(){d(!0),E.get("/api/page/meetups").then((function(e){s(e),console.log(e)})),d(!1)}),[]),j?Object(p.jsx)("section",{children:Object(p.jsx)("p",{children:"Loading..."})}):Object(p.jsxs)("section",{children:[Object(p.jsx)("h2",{style:{margin:"10px 0 0 50px"},children:"All Meetups"}),Object(p.jsx)("ul",{children:n.map((function(e,t){return Object(p.jsx)(te,{meetup:e,deleteMeetup:O,deleteFavMeetup:f},t)}))})]})},ce=n(44),se=n.n(ce);var ae=function(e){var t=Object(c.useRef)(),n=Object(c.useRef)(),s=Object(c.useRef)();return Object(p.jsx)(Z,{children:Object(p.jsxs)("form",{className:se.a.form,onSubmit:function(c){c.preventDefault();var a={title:t.current.value,address:n.current.value,description:s.current.value};e.onAddMeetup(a)},children:[Object(p.jsxs)("div",{className:"input-field",children:[Object(p.jsx)("label",{htmlFor:"title"}),Object(p.jsx)("input",{type:"text",id:"Title",required:!0,ref:t,placeholder:"Meetup Title"})]}),Object(p.jsxs)("div",{className:"input-field",children:[Object(p.jsx)("label",{htmlFor:"address"}),Object(p.jsx)("input",{type:"text",id:"address",required:!0,ref:n,placeholder:"Address"})]}),Object(p.jsxs)("div",{className:"input-field",children:[Object(p.jsx)("label",{htmlFor:"description"}),Object(p.jsx)("input",{type:"text",id:"description",required:!0,ref:s,placeholder:"Description"})]}),Object(p.jsx)("div",{className:se.a.buttons,children:Object(p.jsx)("button",{className:"btn",children:"Add New Meetup"})})]})})};var re=function(){var e=Object(i.g)();return Object(p.jsxs)("section",{children:[Object(p.jsx)("h2",{style:{margin:"10px 0 0 50px"},children:"Create New Meetup"}),Object(p.jsx)(ae,{onAddMeetup:function(t){var n={title:t.title,address:t.address,description:t.description,meetupsId:t.meetupsId,isFavorite:!1};console.log(n,"MEETUP"),E.post("/api/page/meetup/create",n),e.replace("/allmeetups")}})]})};var ie=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(!0),r=Object(u.a)(a,2),i=r[0],l=r[1],o=Object(c.useContext)(ee),j=[];function d(e){o.removeFavorite(e);var t=n.filter((function(t){return t._id!==e}));s(t)}return Object(c.useEffect)((function(){l(!0),E.get("/api/page/meetups").then((function(e){e.map((function(e){!0===e.isFavorite&&(j.push(e),s(j),l(!1))}))}))}),[]),i?Object(p.jsx)("section",{children:Object(p.jsx)("p",{children:"Loading..."})}):Object(p.jsxs)("section",{children:[Object(p.jsx)("h2",{style:{margin:"10px 0 0 50px"},children:"Favorite Meetups"}),Object(p.jsxs)("h5",{style:{margin:"10px 0 0 50px"},children:["Total: ",Object(p.jsx)("span",{children:o.totalFavorites})]}),Object(p.jsx)("ul",{children:n.map((function(e,t){return Object(p.jsx)(te,{meetup:e,deleteFavMeetup:d},t)}))})]})};n(142);var le=function(){var e=b(),t=e.token,n=e.login,c=e.logout,s=e.userId,a=e.ready,r=!!t,o=function(e){return e?Object(p.jsx)("div",{children:Object(p.jsxs)(i.d,{children:[Object(p.jsx)(i.b,{path:"/users/list",component:P,exact:!0}),Object(p.jsx)(i.b,{path:"/",component:M,exact:!0}),Object(p.jsx)(i.b,{path:"/create",component:A}),Object(p.jsx)(i.b,{path:"/links",component:H,exact:!0}),Object(p.jsx)(i.b,{path:"/createpage",component:v,exact:!0}),Object(p.jsx)(i.b,{path:"/detail/:id",component:y}),Object(p.jsx)(i.b,{path:"/messages",component:W}),Object(p.jsx)(i.b,{path:"/allmeetups",component:ne}),Object(p.jsx)(i.b,{path:"/newMeetup",component:re}),Object(p.jsx)(i.b,{path:"/favorites",component:ie}),Object(p.jsx)(i.a,{to:"/"})]})}):Object(p.jsx)("div",{children:Object(p.jsxs)(i.d,{children:[Object(p.jsx)(i.b,{path:"/routespage",component:C,exact:!0}),Object(p.jsx)(i.b,{path:"/registration",component:T}),Object(p.jsx)(i.a,{to:"/routespage"})]})})}(r);return a?Object(p.jsx)(j.Provider,{value:{token:t,login:n,logout:c,userId:s,isAuthenticated:r},children:Object(p.jsx)(l.a,{children:Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("header",{className:"App-header",children:[Object(p.jsx)(O,{}),Object(p.jsx)(i.b,{children:o})]})})})}):Object(p.jsx)(g,{})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,147)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};n(143);r.a.render(Object(p.jsx)($,{children:Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(le,{})})}),document.getElementById("root")),oe()},30:function(e,t,n){},44:function(e,t,n){e.exports={description:"NewMeetupForm_description__3Pa-Z"}},74:function(e,t,n){e.exports={Card:"Card_Card__ezYHn"}},75:function(e,t,n){e.exports={buttons:"meetupItem_buttons__1NWh3"}},82:function(e,t,n){}},[[144,1,2]]]);
//# sourceMappingURL=main.9957c8e7.chunk.js.map