(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{212:function(e,t,n){e.exports=n(398)},394:function(e,t,n){},397:function(e,t,n){},398:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(31),s=n.n(o),i=n(25),c=n(26),l=n(28),u=n(27),h=n(29),m=n(404),d=n(409),p=n(52),f=n(405),g=n(399),v=function(e){return a.a.createElement("header",{className:"App-header"},e.title)},b=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onSubmit=function(e){""===n.state.username?n.setState({errorMessage:"Enter a correct username"}):(e.preventDefault(),n.props.onSubmit(n.state.username))},n.onChange=function(e){n.setState({username:e.target.value})},n.state={username:"",errorMessage:""},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(v,{title:"React-Test-1"}),a.a.createElement(m.a,{style:{width:"40%",padding:"20px"}},a.a.createElement("form",{onSubmit:this.onSubmit},a.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},a.a.createElement(d.a,{as:"h2",icon:!0,textAlign:"center"},a.a.createElement(p.a,{name:"users",circular:!0}),a.a.createElement(d.a.Content,null,"Chose a NickName")),a.a.createElement(f.a,{type:"text",onChange:this.onChange,placeholder:"Enter a nick name"}),a.a.createElement(g.a,{type:"submit",style:{marginTop:"20px"}},"Continue"),a.a.createElement("span",null,this.state.errorMessage)))))}}]),t}(r.Component),y=n(142),E=n(141),w=n.n(E),j=n(407),O=n(411),S=n(406),k=n(198),C=n.n(k),x=n(60),T=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).renderRow=function(e){var t=e.index;return a.a.createElement(j.a,{style:{width:"80%"},link:!0,header:n.props.messages[t].senderId,meta:C()(n.props.messages[t].createdAt).fromNow(),description:n.props.messages[t].text})},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return 0===this.props.messages.length?a.a.createElement(O.a,{style:{height:"100%",display:"flex",width:"100%"}},a.a.createElement(S.a,null)):a.a.createElement("div",{style:{display:"flex",height:"100%",width:"100%"}},a.a.createElement("div",{style:{flex:1}},a.a.createElement(x.a,null,function(t){var n=t.height,r=t.width;return a.a.createElement(x.b,{scrollToIndex:e.props.messages.length-2,width:r,height:n,rowHeight:40,rowRenderer:e.renderRow,rowCount:e.props.messages.length})})))}}]),t}(r.Component),U=n(51),A=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={text:""},n.onSubmit=n.onSubmit.bind(Object(U.a)(Object(U.a)(n))),n.onChange=n.onChange.bind(Object(U.a)(Object(U.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"onSubmit",value:function(e){e.preventDefault(),this.props.onSubmit(this.state.text),this.setState({text:""})}},{key:"onChange",value:function(e){this.setState({text:e.target.value}),this.props.onChange&&this.props.onChange()}},{key:"render",value:function(){var e={container:{padding:20,marginBottom:20},form:{display:"flex"},input:{flex:1,fontSize:16}};return a.a.createElement("div",{style:e.container},a.a.createElement("div",null,a.a.createElement("form",{onSubmit:this.onSubmit,style:e.form},a.a.createElement(f.a,{type:"text",placeholder:"Type a message ...",onChange:this.onChange,value:this.state.text,style:e.input}),a.a.createElement(g.a,{type:"submit"},"Send"))))}}]),t}(r.Component),W=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.usersWhoAreTyping.length>0?a.a.createElement("div",null,"".concat(this.props.usersWhoAreTyping.slice(0,2).join(" and ")," is typing")):a.a.createElement("div",null)}}]),t}(r.Component),R=n(408),L=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).renderRow=function(e){var t=e.index,r=e.key,o=e.style;return a.a.createElement("div",{key:r,style:o},a.a.createElement("div",null,n.props.users[t].id===n.props.currentUser.id?a.a.createElement(p.a,{color:"green",name:"checkmark",circular:!0}):"online"===n.props.users[t].presence.state?a.a.createElement(p.a,{color:"blue",name:"checkmark",circular:!0}):a.a.createElement(p.a,{color:"grey",name:"checkmark",circular:!0}),a.a.createElement("span",null,n.props.users[t].name)))},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"renderUsers",value:function(){var e=this;return a.a.createElement("div",{style:{display:"flex",height:"100%",width:"100%"}},a.a.createElement("div",{style:{flex:1}},a.a.createElement(x.a,null,function(t){var n=t.height,r=t.width;return a.a.createElement(x.b,{width:r,height:n,rowHeight:50,rowRenderer:e.renderRow,rowCount:e.props.users.length})})))}},{key:"render",value:function(){return this.props.users?this.renderUsers():a.a.createElement(R.a,null,a.a.createElement(R.a.Line,null),a.a.createElement(R.a.Line,null),a.a.createElement(R.a.Line,null),a.a.createElement(R.a.Line,null),a.a.createElement(R.a.Line,null),a.a.createElement(R.a.Line,null))}}]),t}(r.Component),N="http://localhost:3001",M=n(412),I=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).sendTypingEvent=function(){n.state.currentUser.isTypingIn({roomId:n.state.currentRoom.id}).catch(function(e){return console.error("error",e)})},n.sendMessage=function(e){n.state.currentUser.sendMessage({text:e,roomId:n.state.currentRoom.id})},n.state={currentUser:{},currentRoom:{},messages:[],usersWhoAreTyping:[]},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;new w.a.ChatManager({instanceLocator:"v1:us1:e4044788-6361-43c9-ba0a-6b00c0045020",userId:this.props.currentUsername,tokenProvider:new w.a.TokenProvider({url:"".concat(N,"/authenticate")})}).connect().then(function(t){return e.setState({currentUser:t}),t.subscribeToRoom({roomId:"31207023",messageLimit:100,hooks:{onMessage:function(t){e.setState({messages:[].concat(Object(y.a)(e.state.messages),[t])})},onUserStartedTyping:function(t){e.setState({usersWhoAreTyping:[].concat(Object(y.a)(e.state.usersWhoAreTyping),[t.name])})},onUserStoppedTyping:function(t){e.setState({usersWhoAreTyping:e.state.usersWhoAreTyping.filter(function(e){return e!==t.name})})},onPresenceChange:function(){return e.forceUpdate()},onUserJoined:function(){return e.forceUpdate()}}})}).then(function(t){e.setState({currentRoom:t})}).catch(function(e){return console.error("error",e)})}},{key:"render",value:function(){return a.a.createElement(j.a,{style:{overflow:"hidden",height:"100vh",width:"100vw",paddingBottom:100,borderRadius:2,backgroundColor:"#eee"}},a.a.createElement(j.a.Content,null,a.a.createElement(M.a,{style:{height:"80%"}},a.a.createElement(M.a.Column,{width:"13"},a.a.createElement(O.a,{tertiary:!0},"Messages"),a.a.createElement(T,{messages:this.state.messages,style:{chatContainer:{height:"100vh",width:"100vw"}}.chatList}),a.a.createElement(W,{usersWhoAreTyping:this.state.usersWhoAreTyping}),a.a.createElement(A,{onSubmit:this.sendMessage,onChange:this.sendTypingEvent})),a.a.createElement(M.a.Column,{width:"3"},a.a.createElement(O.a,{tertiary:!0},"users"),a.a.createElement(L,{currentUser:this.state.currentUser,users:this.state.currentRoom.users})))))}}]),t}(r.Component),D=(n(394),n(395),n(396),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).onNickNameSubmit=function(t){fetch("".concat(N,"/users"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t})}).then(function(n){e.setState({currentUsername:t,currentScreen:"ChatScreen"})}).catch(function(e){return console.error("error",e)})},e.state={currentUsername:"",currentScreen:"WhatIsYourUsernameScreen",error:"",offline:!1},e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("online",function(){e.setState({offline:!1})}),window.addEventListener("offline",function(){e.setState({offline:!0})})}},{key:"componentDidCatch",value:function(e){this.setState({error:e,currentScreen:"error"})}},{key:"render",value:function(){switch(this.state.offline&&alert("You are offline, please connect to internet to continue"),this.state.currentScreen){case"WhatIsYourUsernameScreen":return a.a.createElement(b,{onSubmit:this.onNickNameSubmit});case"ChatScreen":return a.a.createElement(I,{currentUsername:this.state.currentUsername});default:return a.a.createElement("div",null,this.state.error)}}}]),t}(r.Component)),P=(n(397),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function B(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(a.a.createElement(D,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");P?(function(e,t){fetch(e).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):B(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):B(t,e)})}}()}},[[212,1,2]]]);
//# sourceMappingURL=main.9120954a.chunk.js.map