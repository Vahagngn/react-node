(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{100:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(56),r=n.n(a),i=n(5),l=n(6);function o(){}var j=Object(c.createContext)({token:null,userId:null,name:null,last_name:null,login:o,logout:o,info:o,isAuthenticated:!1}),u=n(3),d="userData",b=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(!1),r=Object(u.a)(a,2),i=r[0],l=r[1],o=Object(c.useState)(null),j=Object(u.a)(o,2),b=j[0],h=j[1],O=Object(c.useState)(""),m=Object(u.a)(O,2),x=m[0],p=m[1],f=Object(c.useState)(""),v=Object(u.a)(f,2),g=v[0],N=v[1],y=Object(c.useCallback)((function(e,t,n,c){s(e),h(t),p(n),N(c),localStorage.setItem(d,JSON.stringify({userId:t,token:e,name:n,last_name:c}))}),[]),k=Object(c.useCallback)((function(){s(null),h(null),localStorage.removeItem(d)}),[]);return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem(d));e&&e.token&&y(e.token,e.userId,e.name,e.last_name),l(!0)}),[y]),{login:y,logout:k,token:n,userId:b,name:x,last_name:g,ready:i}},h=(n(35),n(69),n(0));var O=function(){var e=Object(c.useContext)(j),t=(Object(i.g)(),document.querySelectorAll(".navLinks li"),b()),n=t.token,s=t.name,a=t.last_name;return n?Object(h.jsx)("nav",{className:"navbar",children:Object(h.jsx)("div",{className:"navbar-wrapper",children:Object(h.jsxs)("div",{className:"navbar ",id:"navbar",children:[Object(h.jsx)("div",{className:"menu",id:"menu",children:Object(h.jsxs)("ul",{className:"navLinks",children:[Object(h.jsx)("li",{children:Object(h.jsx)(l.c,{to:"/",activeclassname:"active",exact:!0,children:"Todos"})}),Object(h.jsx)("li",{children:Object(h.jsx)(l.c,{to:"/create",activeclassname:"active",children:"Create Todos"})}),Object(h.jsx)("li",{children:Object(h.jsx)(l.c,{to:"/createpage",activeclassname:"active",children:"Create Link"})}),Object(h.jsx)("li",{children:Object(h.jsx)(l.c,{to:"/links",activeclassname:"active",children:"Links"})}),Object(h.jsx)("li",{children:Object(h.jsx)(l.c,{to:"/users/list",activeclassname:"active",children:"Users List"})}),Object(h.jsx)("li",{children:Object(h.jsx)(l.c,{to:"/messages",activeclassname:"active",children:"Messages"})})]})}),Object(h.jsx)("div",{className:"username-menu",children:Object(h.jsxs)("ul",{className:"navLinks",children:[Object(h.jsxs)("li",{className:"userName",children:[Object(h.jsxs)("span",{className:"icon",children:[Object(h.jsx)("i",{className:"small material-icons",children:"account_circle "})," "]}),Object(h.jsxs)("p",{className:"name",children:[s," ",a]})]}),Object(h.jsx)("li",{className:"logout",style:{marginRight:"0"},children:Object(h.jsx)("a",{href:"/routespage",onClick:function(){e.logout()},children:"Logout"})})]})}),Object(h.jsx)("div",{className:"toggle",id:"toggle",children:Object(h.jsx)("span",{onClick:function(){var e=document.getElementById("menu"),t=document.querySelectorAll(".navLinks li");e.classList.toggle("active"),t.forEach((function(t,n){t.addEventListener("click",(function(){e.classList.remove("active")}))}))},children:Object(h.jsx)("i",{className:"small material-icons",children:"dehaze"})})})]})})}):Object(h.jsx)("nav",{className:"navbar",children:Object(h.jsx)("div",{className:"navbar-wrapper",children:Object(h.jsxs)("ul",{className:"items",children:[Object(h.jsx)("li",{children:Object(h.jsx)(l.c,{to:"/routespage",activeClassName:"active",exact:!0,children:"Login"})}),Object(h.jsx)("li",{children:Object(h.jsx)(l.c,{to:"/registration",activeClassName:"active",exact:!0,children:"Registration"})})]})})})},m=n(4),x=n.n(m),p=n(8),f=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(null),r=Object(u.a)(a,2),i=r[0],l=r[1],o=Object(c.useCallback)(function(){var e=Object(p.a)(x.a.mark((function e(t){var n,c,a,r,i,o=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:"GET",c=o.length>2&&void 0!==o[2]?o[2]:null,a=o.length>3&&void 0!==o[3]?o[3]:{},s(!0),e.prev=4,c&&(c=JSON.stringify(c),a["Content-Type"]="application/json"),e.next=8,fetch(t,{method:n,body:c,headers:a});case 8:return r=e.sent,e.next=11,r.json();case 11:if(i=e.sent,r.ok){e.next=14;break}throw new Error(i.message||"Data error");case 14:return s(!1),e.abrupt("return",i);case 18:throw e.prev=18,e.t0=e.catch(4),s(!1),l(e.t0.message),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{loading:n,request:o,error:i,clearError:Object(c.useCallback)((function(){return l(null)}),[])}},v=function(){var e=Object(i.g)(),t=Object(c.useContext)(j),n=f().request,s=Object(c.useState)(""),a=Object(u.a)(s,2),r=a[0],l=a[1],o=function(){var c=Object(p.a)(x.a.mark((function c(s){var a;return x.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if("Enter"!==s.key){c.next=10;break}return c.prev=1,c.next=4,n("/api/link/generate","POST",{from:r},{Authorization:"Bearer ".concat(t.token)});case 4:a=c.sent,e.push("/detail/".concat(a.link._id)),c.next=10;break;case 8:c.prev=8,c.t0=c.catch(1);case 10:case"end":return c.stop()}}),c,null,[[1,8]])})));return function(e){return c.apply(this,arguments)}}(),d=function(){var c=Object(p.a)(x.a.mark((function c(){var s;return x.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,n("/api/link/generate","POST",{from:r},{Authorization:"Bearer ".concat(t.token)});case 3:s=c.sent,e.push("/detail/".concat(s.link._id)),c.next=9;break;case 7:c.prev=7,c.t0=c.catch(0);case 9:case"end":return c.stop()}}),c,null,[[0,7]])})));return function(){return c.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col s8 offset-s2",style:{paddingTop:"2rem"},children:Object(h.jsxs)("div",{className:"input-field",children:[Object(h.jsx)("input",{placeholder:"Add Link",id:"link",type:"text",value:r,onChange:function(e){return l(e.target.value)},onKeyPress:o}),Object(h.jsx)("p",{className:"inputText",children:"Press Enter or click on the button"}),Object(h.jsx)("button",{onClick:d,className:"btn btn",type:"submit",children:"Add Link"}),Object(h.jsx)("label",{htmlFor:"link"})]})})})},g=function(){return Object(h.jsx)("div",{style:{display:"flex",justifyContent:"center",paddingTop:"2rem"},children:Object(h.jsx)("div",{className:"preloader-wrapper big active",children:Object(h.jsxs)("div",{className:"spinner-layer spinner-blue-only",children:[Object(h.jsx)("div",{className:"circle-clipper left",children:Object(h.jsx)("div",{className:"circle"})}),Object(h.jsx)("div",{className:"gap-patch",children:Object(h.jsx)("div",{className:"circle"})}),Object(h.jsx)("div",{className:"circle-clipper right",children:Object(h.jsx)("div",{className:"circle"})})]})})})},N=function(e){var t=e.link;return Object(h.jsxs)("div",{className:"container",style:{position:"relative",margin:"auto"},children:[Object(h.jsx)("h2",{children:"Link"}),Object(h.jsxs)("p",{children:["Your link: ",Object(h.jsx)("a",{href:t.to,target:"_blank",rel:"noopener noreferrer",children:"Click to follow the link"})]}),Object(h.jsxs)("p",{children:["From: ",Object(h.jsx)("a",{href:t.from,target:"_blank",rel:"noopener noreferrer",children:t.from})]}),Object(h.jsxs)("p",{children:["Number of clicks: ",Object(h.jsx)("strong",{children:t.clicks})]}),Object(h.jsxs)("p",{children:["Date of creation: ",Object(h.jsx)("strong",{children:new Date(t.date).toLocaleDateString()})]})]})},y=function(){var e=Object(c.useContext)(j).token,t=f(),n=t.request,s=t.loading,a=Object(c.useState)(),r=Object(u.a)(a,2),l=r[0],o=r[1],d=Object(i.h)().id,b=Object(c.useCallback)(Object(p.a)(x.a.mark((function t(){var c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n("/api/link/".concat(d),"GET",null,{Authorization:"Bearer ".concat(e)});case 3:c=t.sent,o(c),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])}))),[e,d,n]);return Object(c.useEffect)((function(){b()}),[b]),s?Object(h.jsx)(g,{}):Object(h.jsx)(h.Fragment,{children:!s&&l&&Object(h.jsx)(N,{link:l})})},k=n(29),w=n(25),C=function(){var e=Object(c.useContext)(j),t=Object(c.useCallback)((function(e){window.M&&e&&window.M.toast({html:e})}),[]),n=f(),s=n.loading,a=n.request,r=n.error,i=n.clearError,o=Object(c.useState)({email:"",password:""}),d=Object(u.a)(o,2),b=d[0],O=d[1],m=Object(c.useState)(""),v=Object(u.a)(m,2),g=v[0],N=v[1],y=Object(c.useState)(""),C=Object(u.a)(y,2),S=C[0];C[1];Object(c.useEffect)((function(){t(r),i()}),[r,t,i]);var _=function(e){O(Object(w.a)(Object(w.a)({},b),{},Object(k.a)({},e.target.name,e.target.value)))},E=function(){var t=Object(p.a)(x.a.mark((function t(){var n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a("/api/auth/login","POST",Object(w.a)({},b));case 3:n=t.sent,e.login(n.token,n.userId,n.name,n.last_name),window.location.reload(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),N(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col s6 offset-s3",children:[Object(h.jsx)("h1",{style:{color:"white"},children:"Links"}),Object(h.jsxs)("div",{className:"card blue darken-1",style:{padding:10},children:[Object(h.jsx)("div",{className:"card-content white-text",children:Object(h.jsx)("span",{className:"card-title",children:"Authorization"})}),Object(h.jsxs)("div",{className:"input-field",children:[Object(h.jsx)("input",{placeholder:"Email",id:"email",type:"text",name:"email",className:"yellow-input",value:b.email,onChange:_,style:{textAlign:"center"}}),Object(h.jsx)("label",{htmlFor:"email"})]}),Object(h.jsxs)("div",{className:"input-field",children:[Object(h.jsx)("input",{placeholder:"Password",id:"password",type:"password",name:"password",className:"yellow-input",value:b.password,onChange:_,style:{textAlign:"center"}}),Object(h.jsx)("label",{htmlFor:"password"})]}),Object(h.jsxs)("div",{className:"card-action",children:[Object(h.jsx)("button",{onClick:E,disabled:s,className:"btn yellow darken-4",style:{marginRight:10},children:"Login"}),Object(h.jsx)(l.c,{to:"/registration",children:Object(h.jsx)("button",{className:"btn grey lighten-1 black-text",children:"Registration"})}),g?Object(h.jsx)("span",{style:{color:"red",fontWeight:"bold"},children:g}):Object(h.jsx)("span",{style:{color:"yellow",fontWeight:"bold"},children:S})]})]})]})})},S=n(43),_={mode:"cors",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},crossdomain:!0,baseURL:"https://testvh94.herokuapp.com/"},E=n.n(S).a.create(_);E.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e)}));var L=E;var I=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=(t[0],t[1]);return Object(c.useEffect)((function(){L.get("/data").then((function(e){n(e)}))}),[]),Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"The page will be ready soon"})})};var A=function(){return Object(h.jsxs)("form",{className:"createForm",action:"/data",method:"POST",children:[Object(h.jsx)("h2",{className:"createTodo",children:"Create todo"}),Object(h.jsxs)("div",{className:"input-field",children:[Object(h.jsx)("input",{type:"text",name:"title",placeholder:"Program Name"}),Object(h.jsx)("label",{})]}),Object(h.jsxs)("div",{className:"input-field",children:[Object(h.jsx)("input",{type:"text",name:"user_name",placeholder:"User Name"}),Object(h.jsx)("label",{})]}),Object(h.jsxs)("div",{className:"input-field",children:[Object(h.jsx)("input",{type:"text",name:"user_age",placeholder:"Age"}),Object(h.jsx)("label",{})]}),Object(h.jsxs)("div",{className:"input-field",children:[Object(h.jsx)("input",{type:"text",name:"speciality",placeholder:"Speciality"}),Object(h.jsx)("label",{})]}),Object(h.jsx)(l.c,{to:"/",children:Object(h.jsx)("button",{type:"submit",className:"btn",children:"Create"})})]})},T=(n(98),function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),r=Object(u.a)(a,2),i=r[0],l=r[1],o=Object(c.useState)({email:null,name:null,last_name:null,password:null}),j=Object(u.a)(o,2),d=j[0],b=j[1],O=f(),m=O.loading,v=O.request,g=(O.error,O.clearError,function(){var e=Object(p.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v("/api/auth/register","POST",Object(w.a)({},d)).then((function(e){l(e.message)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),s(e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}());Object(c.useEffect)((function(){b({email:"",password:""})}),[]);var N=function(e){b(Object(w.a)(Object(w.a)({},d),{},Object(k.a)({},e.target.name,e.target.value)))};return Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col s6 offset-s3",children:[Object(h.jsx)("h1",{style:{color:"white"},children:"Links"}),Object(h.jsxs)("div",{className:"card green darken-1",id:"register-form",style:{padding:10},children:[Object(h.jsx)("div",{className:"card-content white-text",children:Object(h.jsx)("span",{className:"card-title",id:"card-title",children:"Registration"})}),Object(h.jsxs)("div",{className:"input-register",children:[Object(h.jsx)("input",{placeholder:"Email",id:"email",type:"text",name:"email",className:"yellow-input",onChange:N,autoComplete:"off",readOnly:!0,onFocus:function(e){e.target.removeAttribute("readonly")},style:{textAlign:"center"}}),Object(h.jsx)("label",{htmlFor:"email"})]}),Object(h.jsxs)("div",{className:"input-register",children:[Object(h.jsx)("input",{placeholder:"Password",id:"password",type:"password",name:"password",className:"yellow-input",autoComplete:"off",onChange:N,style:{textAlign:"center"}}),Object(h.jsx)("label",{htmlFor:"password"})]}),Object(h.jsxs)("div",{className:"input-register",children:[Object(h.jsx)("input",{placeholder:"Name",id:"name",type:"text",name:"name",className:"yellow-input",autoComplete:"off",onChange:N,style:{textAlign:"center"}}),Object(h.jsx)("label",{htmlFor:"text"})]}),Object(h.jsxs)("div",{className:"input-register",children:[Object(h.jsx)("input",{placeholder:"Last name",id:"last_name",type:"text",name:"last_name",className:"yellow-input",autoComplete:"off",onChange:N,style:{textAlign:"center"}}),Object(h.jsx)("label",{htmlFor:"text"})]}),Object(h.jsxs)("div",{className:"card-action",children:[Object(h.jsx)("button",{onClick:g,disabled:m,className:"btn grey lighten-1 black-text",children:"Registration"}),n?Object(h.jsx)("span",{style:{color:"red",fontWeight:"bold"},children:n}):Object(h.jsx)("span",{style:{color:"yellow",fontWeight:"bold"},children:i})]})]})]})})}),F=function(e){var t=e.user;e.deleteUser;return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:t.name}),Object(h.jsx)("td",{children:t.last_name}),Object(h.jsx)("td",{children:t.email}),Object(h.jsx)("td",{})]},t._id)},P=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useContext)(j);return Object(c.useEffect)((function(){L.get("/api/auth/users/list").then((function(e){var t=e.filter((function(e){return e._id!==a.userId}));s(t)}))}),[]),null!==n?Object(h.jsxs)("table",{style:{position:"relative",margin:"auto",width:"70%"},children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"Last Name"}),Object(h.jsx)("th",{children:"Email"})]})}),Object(h.jsx)("tbody",{children:n.length?n.map((function(e,t){return Object(h.jsx)(F,{user:e},t)})):Object(h.jsx)("p",{children:"List is empty"})})]}):null},B=n(39),M=n(109),U=n(63),q=(n(99),n(100),n(62));function D(e){if(D.exists)return D.instance;var t=Object(q.a)("http://testvh94.herokuapp.com/?userId=".concat(e),{transports:["websocket"]});return D.exists=!0,D.instance=t,t}var R=function(e){var t=e.user,n=e.onCancel,s=e.chatActive,a=Object(c.useState)([]),r=Object(u.a)(a,2),i=(r[0],r[1]),l=b(),o=l.name,d=l.last_name,O=Object(c.useContext)(j),m=D();return Object(c.useEffect)((function(){return m.on("get-private",(function(e){var t=e.privateMsg,n=(e.secondUserId,e.firstUserId,s.messages);n.unshift(t),i(Object(B.a)(n))})),function(){m.off("get-private")}}),[s.messages,m]),Object(c.useEffect)((function(){L.get("/messages/private-message").then((function(e){i(e)}))}),[]),t?Object(h.jsxs)("div",{className:"privateMessageContainer",children:[Object(h.jsxs)("div",{className:"sendTextContainer",children:[Object(h.jsxs)("div",{className:"headerContainer",children:[Object(h.jsxs)("h5",{children:[t.name.charAt(0)+"."+t.last_name," "]}),Object(h.jsx)("button",{className:"btn onCancel",onClick:n,children:"\u21a9"})]}),Object(h.jsx)("input",{style:{border:"1px solid #26a69a",marginTop:"10px"},className:"sendText",type:"text",id:"privateMessage"})]}),Object(h.jsx)("div",{className:"sendBtn",children:Object(h.jsxs)("button",{type:"button",className:"btn btn-default btn-sm",onClick:function(){var e=document.getElementById("privateMessage");e&&m.emit("private-message",{message:e.value,privateName:o,privateLast:d,firstUserId:O.userId,secondUserId:t._id}),e.value=""},children:[Object(h.jsx)("span",{className:"glyphicon glyphicon-envelope"})," Send"]})}),s.user?Object(h.jsx)("div",{className:"messageContainer",children:s.messages.length?s.messages.map((function(e,t){return Object(h.jsxs)("div",{style:{display:"flex"},children:[Object(h.jsxs)("p",{className:"userName",children:[e.privateName+" "+e.privateLast," : \xa0 "]}),Object(h.jsx)("p",{className:"userText",children:e.message})]},t)})):null}):""]}):null},z=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)([]),r=Object(u.a)(a,2),i=r[0],l=r[1],o=Object(c.useState)({user:null,messages:null}),d=Object(u.a)(o,2),O=d[0],m=d[1],f=Object(c.useContext)(j),v=D(f.userId),g=b(),N=g.name,y=g.last_name;var k=function(){var e=Object(p.a)(x.a.mark((function e(t){var c,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m({user:null,messages:null}),c=t.target.querySelector("p").innerHTML,e.next=4,L.get("/messages/get-or-create-chat?firstUserId=".concat(f.userId,"&secondUserId=").concat(n.filter((function(e){return e._id==c}))[0]._id));case 4:s=e.sent,m({user:n.filter((function(e){return e._id==c}))[0],messages:s.messages});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(p.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"Enter"===t.key&&(n=document.getElementById("message"),v.emit("message",{message:n.value,name:N,last_name:y}),n.value="");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return v.on("get-message",(function(e){var t=e.msg,n=i;n.unshift(t),l(Object(B.a)(n))})),function(){v.off("get-message")}}),[v,i]),Object(c.useEffect)((function(){L.get("/api/auth/users/list").then((function(e){var t=e.filter((function(e){return e._id!==f.userId}));s(t)})),L.get("/messages/messages").then((function(e){l(e)}))}),[]),window.socket=v,Object(h.jsx)("div",{style:{display:"flex"},children:n.length?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(M.a,{className:"list-users",children:Object(h.jsx)("div",{children:n.map((function(e,t){return Object(h.jsx)("div",{children:Object(h.jsxs)(U.a,{className:"btn btn-users",tag:"button",action:!0,onClick:function(e){return k(e)},children:[Object(h.jsx)("p",{style:{display:"none"},children:e._id}),e.name+" "+e.last_name]})},t)}))})}),Object(h.jsxs)("div",{className:"InputContainer",children:[Object(h.jsx)("div",{className:"textMessage",children:Object(h.jsx)("input",{id:"message",type:"text",onKeyPress:w,style:{border:"1px solid #26a69a",margin:0}})}),Object(h.jsx)("div",{className:"sendButtonContainer",children:Object(h.jsxs)("button",{onClick:function(){var e=document.getElementById("message");v.emit("message",{message:e.value,name:N,last_name:y}),e.value=""},type:"button",id:"sendButton",className:"btn btn-default btn-sm",children:[Object(h.jsx)("span",{className:"glyphicon glyphicon-envelope"})," Send Message"]})}),Object(h.jsx)("div",{className:"messagesContainer",children:i.length?i.map((function(e,t){return Object(h.jsxs)("div",{className:"nameMessage",children:[Object(h.jsxs)("p",{className:"userName",children:[e.name," ",e.last_name," : \xa0"]}),Object(h.jsx)("p",{style:{color:"gray"},children:e.message})]},t)})):""})]}),O?Object(h.jsx)(R,{chatActive:O,user:O.user,onCancel:function(){m(null)}}):null]}):null})},J=function(e){var t=e.links,n=e.deleteLink;return t.length?Object(h.jsxs)("table",{style:{position:"relative",margin:"auto",width:"70%"},children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Number"}),Object(h.jsx)("th",{children:"Original"}),Object(h.jsx)("th",{children:"Abbreviated"}),Object(h.jsx)("th",{children:"Open"}),Object(h.jsx)("th",{children:"Delete"})]})}),Object(h.jsx)("tbody",{children:t.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:t+1}),Object(h.jsx)("td",{children:e.from}),Object(h.jsx)("td",{children:e.to}),Object(h.jsx)("td",{children:Object(h.jsx)(l.b,{to:"/detail/".concat(e._id),children:" Open "})}),Object(h.jsx)("td",{children:Object(h.jsx)(l.b,{to:"/links",onClick:function(){return n(e._id)},children:" Delete "})})]},e._id)}))})]}):Object(h.jsx)("p",{className:"center",children:"No links"})},W=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1],a=f(),r=a.loading,i=a.request,l=Object(c.useContext)(j).token,o=Object(c.useCallback)(Object(p.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i("/api/link","GET",null,{Authorization:"Bearer ".concat(l)});case 3:t=e.sent,s(t),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),[l,i]);if(Object(c.useEffect)((function(){o()}),[o]),r)return Object(h.jsx)(g,{});function d(){return(d=Object(p.a)(x.a.mark((function e(t){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.filter((function(e){return e._id!==t})),s(c),e.next=4,fetch("/api/link/delete/link/".concat(t),{method:"DELETE"});case 4:e.sent;case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(h.jsx)(h.Fragment,{children:!r&&Object(h.jsx)(J,{deleteLink:function(e){return d.apply(this,arguments)},links:n})})};n(105);var G=function(){var e=b(),t=e.token,n=e.login,c=e.logout,s=e.userId,a=e.ready,r=!!t,o=function(e){return e?Object(h.jsx)("div",{children:Object(h.jsxs)(i.d,{children:[Object(h.jsx)(i.b,{path:"/users/list",component:P,exact:!0}),Object(h.jsx)(i.b,{path:"/",component:I,exact:!0}),Object(h.jsx)(i.b,{path:"/create",component:A}),Object(h.jsx)(i.b,{path:"/links",component:W,exact:!0}),Object(h.jsx)(i.b,{path:"/createpage",component:v,exact:!0}),Object(h.jsx)(i.b,{path:"/detail/:id",component:y}),Object(h.jsx)(i.b,{path:"/messages",component:z}),Object(h.jsx)(i.a,{to:"/"})]})}):Object(h.jsx)("div",{children:Object(h.jsxs)(i.d,{children:[Object(h.jsx)(i.b,{path:"/routespage",component:C,exact:!0}),Object(h.jsx)(i.b,{path:"/registration",component:T}),Object(h.jsx)(i.a,{to:"/routespage"})]})})}(r);return a?Object(h.jsx)(j.Provider,{value:{token:t,login:n,logout:c,userId:s,isAuthenticated:r},children:Object(h.jsx)(l.a,{children:Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)(O,{}),Object(h.jsx)(i.b,{children:o})]})})})}):Object(h.jsx)(g,{})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,110)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};n(106);r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(G,{})}),document.getElementById("root")),K()},35:function(e,t,n){},69:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.8bbb3420.chunk.js.map