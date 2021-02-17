(this["webpackJsonpunit-test-react"]=this["webpackJsonpunit-test-react"]||[]).push([[0],{142:function(e,t,n){e.exports=n(330)},147:function(e,t,n){},311:function(e,t,n){},330:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(39),o=n.n(c),i=(n(147),n(14)),s=n(44),l=n(132),u=n.n(l),p=n(133),h=n.n(p),m=Object(i.createMuiTheme)({palette:{primary:h.a},typography:{h1:{fontSize:28,fontWeight:300}}}),f=n(11),E=n(62),b=Object(i.createGenerateClassName)(),O=Object(E.create)(Object(f.a)({},Object(i.jssPreset)(),{insertionPoint:"jss-insertion-point"})),T=n(63),d=n(32),_=n(9),g=n.n(_),v=n(134),j=n(28),R=n(29),S=n(31),G=n(30),y=n(68),I=n.n(y),k=n(20),U=n(25),x=n.n(U),w=n(135),C=n.n(w),A=n(23),D=n.n(A),H=n(65),N=n.n(H),P=n(67),B=n.n(P),F=n(66),L=n.n(F),K=n(16),M=n.n(K),z=n(136),W=n.n(z),J=Object(i.withStyles)({cardContainer:{padding:14,margin:14,maxWidth:900},repoFont:{fontFamily:"Montserrat, sans-serif"},repoLink:{textDecoration:"none"},repoTitle:{fontSize:18,fontWeight:500},repoDescription:{fontSize:16},repoCreatedDate:{fontSize:12,marginBottom:4}})((function(e){var t=e.classes,n=e.description,a=e.name,c=e.html_url,o=(e.license,e.language,e.created_at),i=e.onLogout;return r.a.createElement(N.a,{key:a,className:t.cardContainer},r.a.createElement(D.a,{className:M()(t.repoFont,t.repoTitle)},a),r.a.createElement(D.a,{className:M()(t.repoDescription,t.repoFont)},n),r.a.createElement(D.a,{className:M()(t.repoFont,t.repoCreatedDate)},W()(o).format("LL")),r.a.createElement("a",{href:c,target:"_blank",className:t.repoLink,rel:"noopener noreferrer"},r.a.createElement(L.a,{onClick:i},r.a.createElement(B.a,null,"link"))))})),Q=function(e){Object(S.a)(n,e);var t=Object(G.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(R.a)(n,[{key:"renderRepos",value:function(){var e=this.props.repos;if(!C()(e))return e.map((function(e){return r.a.createElement(J,Object.assign({key:e.name},e))}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderRepos())}}]),n}(a.Component),Y=n(137),$=n.n(Y),q=Object(i.withStyles)({avatar:{width:80,height:"auto"},textFont:{fontSize:16,color:"#fff"}})((function(e){var t=e.classes,n=e.avatar_url,a=e.bio,c=e.blog,o=e.email,i=e.name,s=e.onLogout;return r.a.createElement("div",null,r.a.createElement($.a,{alt:o,src:n,className:t.avatar}),r.a.createElement(D.a,{className:t.textFont},i),r.a.createElement(D.a,{className:t.textFont},o),r.a.createElement(D.a,{className:t.textFont},c),r.a.createElement(D.a,{className:t.textFont},a),r.a.createElement(L.a,{onClick:s},r.a.createElement(B.a,null,"logout")))})),V=function(e,t){localStorage.setItem(e,t)},X=function(e){return localStorage.getItem(e)},Z=function(e){Object(S.a)(n,e);var t=Object(G.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).handleLogoutClick=function(){localStorage.clear(),window.location.reload()},e.state={githubToken:null},e}return Object(R.a)(n,[{key:"componentDidMount",value:function(){var e=Object(v.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=X("GITHUB_TOKEN"),e.next=3,this.setState({githubToken:t});case 3:this.props.getProfileData({githubToken:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e,t){var n=this.props,a=n.githubData,r=n.getProfileRepos,c=x()(a,"repos_url",null),o=x()(e,"githubData.repos_url",null);c&&o!==c&&r({reposUrl:c})}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.githubData,a=e.githubUserRepos;return r.a.createElement(I.a,{container:!0,className:t.homeContainer},r.a.createElement(I.a,{item:!0,xs:3,className:t.leftContainer},r.a.createElement(q,Object.assign({},n,{onLogout:this.handleLogoutClick}))),r.a.createElement(I.a,{item:!0,xs:9,className:t.rightContainer},r.a.createElement(Q,{repos:a})))}}]),n}(a.Component),ee={getProfileData:function(e){return{type:"GET_PROFILE_GITHUB_DATA_START",payload:e}},getProfileRepos:function(e){return{type:"GET_PROFILE_GITHUB_REPOS_START",payload:e}}},te=Object(k.d)(Object(s.b)((function(e){return console.log(e),{githubData:x()(e,"profile.githubData",null),githubUserRepos:x()(e,"profile.userRepos",null)}}),ee),Object(i.withStyles)({homeContainer:{height:"100vh",overflow:"hidden"},leftContainer:{backgroundColor:"#546e7a",color:"#fff",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},rightContainer:{height:"100%",overflowY:"auto"}}))(Z),ne=n(138),ae=n.n(ne),re=function(e){Object(S.a)(n,e);var t=Object(G.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onSuccess=function(t){t&&t.code&&e.props.getGithubToken({code:t.code})},e.onFailure=function(e){alert("No ha sido exitoso, intenta m\xe1s tarde.")},e}return Object(R.a)(n,[{key:"render",value:function(){var e=this.props,t=e.classes;return e.githubToken?r.a.createElement(d.a,{to:"/home"}):r.a.createElement("div",{className:t.container},r.a.createElement(N.a,{className:t.card},r.a.createElement(D.a,{variant:"h1",className:t.title},"Iniciar Sesion"),r.a.createElement(ae.a,{className:t.button,clientId:"44f4d71f5cb1912a69fd",redirectUri:"http://localhost:3000",onSuccess:this.onSuccess,onFailure:this.onFailure,buttonText:"Github Account"})))}}]),n}(a.Component),ce={getGithubToken:function(e){return{type:"GET_OAUTH_GITHUB_TOKEN_START",payload:e}}},oe=Object(k.d)(Object(i.withStyles)({container:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",overflow:"hidden",width:"100%"},card:{width:"400px",minWidth:"300px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},title:{marginTop:12,fontSize:18,marginBottom:4}}),Object(s.b)((function(e){return console.log(e),{githubToken:e.login.githubToken}}),ce))(re),ie=function(e){Object(S.a)(n,e);var t=Object(G.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(R.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,"404")}}]),n}(a.Component),se=n(140),le=function(e){var t=e.component,n=Object(se.a)(e,["component"]),a=X("GITHUB_TOKEN");return r.a.createElement(d.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(d.a,{to:{pathname:"/"}})}}))},ue=r.a.createElement(T.a,null,r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",component:oe}),r.a.createElement(le,{path:"/home",component:te}),r.a.createElement(d.b,{component:ie}))),pe=(n(311),function(e){var t=e.store;return r.a.createElement(s.a,{store:t},r.a.createElement(u.a,{jss:O,generateClassName:b},r.a.createElement(i.MuiThemeProvider,{theme:m},ue)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var he=n(141),me=n(69),fe={},Ee={},be=Object(k.c)({demoReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DEMO_REQUEST":return Object(me.a)(e);case"GET_DEMO_SUCCESS":return t.demoData?[].concat(Object(me.a)(t),[t.demoData]):[].concat(Object(me.a)(e),[t]);default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_OAUTH_GITHUB_TOKEN_START":return Object(f.a)({},e);case"GET_OAUTH_GITHUB_TOKEN_SUCCESS":var n=x()(t,"loginResponse.data.githubToken");return V("GITHUB_TOKEN",n),Object(f.a)({},e,{githubToken:n});case"GET_OAUTH_GITHUB_TOKEN_ERROR":return Object(f.a)({},e,{error:!0});default:return Object(f.a)({},e)}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PROFILE_GITHUB_DATA_START":return Object(f.a)({},e,{error:null,githubData:null});case"GET_PROFILE_GITHUB_DATA_SUCCESS":return Object(f.a)({},e,{githubData:x()(t,"githubData.data")});case"GET_PROFILE_GITHUB_DATA_ERROR":return Object(f.a)({},e,{error:!0});case"GET_PROFILE_GITHUB_REPOS_START":return Object(f.a)({},e,{error:null});case"GET_PROFILE_GITHUB_REPOS_SUCCESS":return Object(f.a)({},e,{userRepos:x()(t,"userRepos.data",[])});case"GET_PROFILE_GITHUB_REPOS_ERROR":return Object(f.a)({},e,{error:!0});default:return Object(f.a)({},e)}}}),Oe=n(13),Te=n(312),de=function(e,t,n,a){return Te({method:a,url:e,data:t,headers:n})},_e=g.a.mark(ve),ge=g.a.mark(je);function ve(e){var t,n,a;return g.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,n={client_id:"44f4d71f5cb1912a69fd",client_secret:"171d8579e8f1a142d13919f623a4fc2ba76d07a6",code:t.code},r.next=5,Object(Oe.b)(de,"".concat("https://reactjsteachingproj.herokuapp.com/users/github"),n,null,"POST");case 5:return a=r.sent,r.next=8,Object(Oe.c)({type:"GET_OAUTH_GITHUB_TOKEN_SUCCESS",loginResponse:a});case 8:r.next=14;break;case 10:return r.prev=10,r.t0=r.catch(1),r.next=14,Object(Oe.c)({type:"GET_OAUTH_GITHUB_TOKEN_ERROR",error:r.t0});case 14:case"end":return r.stop()}}),_e,null,[[1,10]])}function je(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Oe.d)("GET_OAUTH_GITHUB_TOKEN_START",ve);case 2:case"end":return e.stop()}}),ge)}var Re=g.a.mark(ye),Se=g.a.mark(Ie),Ge=g.a.mark(ke);function ye(e){var t,n;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload.githubToken,a.prev=1,a.next=4,Object(Oe.b)(de,"".concat("https://api.github.com/user?access_token=").concat(t),null,null,"GET");case 4:return n=a.sent,a.next=7,Object(Oe.c)({type:"GET_PROFILE_GITHUB_DATA_SUCCESS",githubData:n});case 7:a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(1),a.next=13,Object(Oe.c)({type:"GET_PROFILE_GITHUB_DATA_ERROR",error:a.t0});case 13:case"end":return a.stop()}}),Re,null,[[1,9]])}function Ie(e){var t,n;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload.reposUrl,a.prev=1,a.next=4,Object(Oe.b)(de,t,null,null,"GET");case 4:return n=a.sent,a.next=7,Object(Oe.c)({type:"GET_PROFILE_GITHUB_REPOS_SUCCESS",userRepos:n});case 7:a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(1),a.next=13,Object(Oe.c)({type:"GET_PROFILE_GITHUB_REPOS_ERROR",error:a.t0});case 13:case"end":return a.stop()}}),Se,null,[[1,9]])}function ke(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Oe.d)("GET_PROFILE_GITHUB_DATA_START",ye);case 2:return e.next=4,Object(Oe.d)("GET_PROFILE_GITHUB_REPOS_START",Ie);case 4:case"end":return e.stop()}}),Ge)}var Ue=g.a.mark(xe);function xe(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Oe.a)([je(),ke()]);case 2:case"end":return e.stop()}}),Ue)}var we=function(){var e=Object(he.a)();return Object(f.a)({},Object(k.e)(be,Object(k.a)(e)),{runSaga:e.run(xe)})}();o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(pe,{store:we})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[142,1,2]]]);
//# sourceMappingURL=main.23919056.chunk.js.map