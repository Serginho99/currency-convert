"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[961],{2961:function(n,e,t){t.r(e),t.d(e,{default:function(){return _n}});var r,a,i,o,s=t(168),c=t(7691),d=(c.ZP.input(r||(r=(0,s.Z)(["\n  /* border-radius: 4px;\n  width: 200px;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  margin: 0 auto;\n  height: 30px;\n  padding-left: 10px;\n  outline: none;\n  cursor: pointer; */\n"]))),c.ZP.ul(a||(a=(0,s.Z)(["\n  /* list-style: none;\n  margin: 0;\n  padding: 0;\n  margin-left: auto;\n  margin-right: auto;\n  padding-bottom: 20px; */\n"])))),l=c.ZP.div(i||(i=(0,s.Z)(["\n  text-align: center;\n  margin-bottom: 40px;\n  margin-top: 24px;\n"]))),p=c.ZP.h2(o||(o=(0,s.Z)(["\n  /* text-align: center; */\n"]))),u=t(5048),x=t(1634);function m(){var n=(0,u.v9)((function(n){return n.filter.value})),e=(0,u.I0)();return{filter:n,onSetFilter:function(n){e((0,x.T)(n))}}}var h=t(2791),g=t(5274);function b(){var n=(0,g.wY)();return{contacts:n.data,isLoading:n.isLoading,isFetching:n.isFetching}}var f,v,Z,j,y,w,C=t(5861),k=t(885),S=t(4687),P=t.n(S),N=t(7425),T=t(6355),L=c.ZP.li(f||(f=(0,s.Z)(["\n  display: flex;\n  text-align: center;\n  align-items: center;\n  padding-bottom: 5px;\n  border-bottom: 1px solid rgba(33, 33, 33, 0.2);\n  & + & {\n    margin-top: 20px;\n  }\n  @media screen and (min-width: 1200px) {\n    padding-bottom: 10px;\n  }\n"]))),O=c.ZP.p(v||(v=(0,s.Z)(["\n  margin-left: 10px;\n  color: black;\n  @media screen and (min-width: 1200px) {\n    font-size: 22px;\n  }\n"]))),z=c.ZP.button(Z||(Z=(0,s.Z)(["\n  background-color: transparent;\n  border: none;\n"]))),F=(0,c.ZP)(T.dfI)(j||(j=(0,s.Z)(["\n  background-color: transparent;\n  border: none;\n  height: 30px;\n  width: 20px;\n  cursor: pointer;\n  text-align: center;\n  color: #757575;\n  transition: transform 250ms;\n\n  :hover {\n    color: black;\n    transform: scale(1.3);\n  }\n  @media screen and (min-width: 1200px) {\n    font-size: 25px;\n  }\n"]))),I=(0,c.ZP)(N.qy0)(y||(y=(0,s.Z)(["\n  background-color: transparent;\n  border: none;\n  height: 30px;\n  width: 20px;\n  cursor: pointer;\n  text-align: center;\n  color: #757575;\n  transition: transform 250ms;\n\n  :hover {\n    color: black;\n    transform: scale(1.3);\n  }\n  @media screen and (min-width: 1200px) {\n    font-size: 25px;\n  }\n"]))),_=c.ZP.div(w||(w=(0,s.Z)(["\n  display: flex;\n  height: 40px;\n  margin-left: auto;\n"]))),A=t(5562);function R(){var n=(0,h.useState)(!1),e=(0,k.Z)(n,2),t=e[0],r=e[1],a=(0,h.useState)(!1),i=(0,k.Z)(a,2),o=i[0],s=i[1];return{isOpen:t,setIsOpen:r,toggle:function(){r((function(n){return!n}))},isConfirm:o,setIsConfirm:s,toggleConfirm:function(){s((function(n){return!n}))}}}var B,W=t(5112),G=t(6015),V=t(4015),Y=t(7962),q=t(9862),D=t(7205),M=c.ZP.form(B||(B=(0,s.Z)(["\n  font-family: inherit;\n  /* padding: 40px; */\n  text-align: center;\n"]))),U=t(4360),E=t(7012),H=t(184),J={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",border:"1px solid rgb(21,101,192)",borderRadius:4,boxShadow:24,p:4},K=(0,U.Z)({typography:{fontFamily:["Lucida Sans","Lucida Sans Regular","Lucida Grande","Lucida Sans Unicode","Geneva","Verdana","sans - serif"].join(","),fontSize:16}});function Q(n){var e=n.nameContact,t=n.numberContact,r=n.id,a=n.open,i=n.toggle,o=n.setIsOpen,s=b().contacts,c=(0,g.wv)(),d=(0,k.Z)(c,1)[0],l=(0,h.useState)(e),p=(0,k.Z)(l,2),u=p[0],x=p[1],m=(0,h.useState)(!1),f=(0,k.Z)(m,2),v=f[0],Z=f[1],j=(0,h.useState)(t),y=(0,k.Z)(j,2),w=y[0],S=y[1],N=(0,h.useState)(!1),T=(0,k.Z)(N,2),L=T[0],O=T[1],z=Number(w),F={name:x,number:S};function I(n){var e=n.target,t=e.name,r=e.value;F[t](r),O(!1),Z(!1)}function _(){return(_=(0,C.Z)(P().mark((function n(e){return P().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),!R({name:u})){n.next=4;break}return Z(!0),n.abrupt("return",A.Notify.info("".concat(u," is already on your contact list")));case 4:if(""!==u&&""!==w){n.next=6;break}return n.abrupt("return");case 6:if(z){n.next=9;break}return O(!0),n.abrupt("return");case 9:return n.prev=9,n.next=12,d({id:r,data:{name:u,number:w}});case 12:A.Notify.success("Successfully"),o(!1),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(9),console.log(n.t0);case 19:case"end":return n.stop()}}),n,null,[[9,16]])})))).apply(this,arguments)}function R(n){var e=n.name;return s.find((function(n){return n.name===e}))}return(0,H.jsx)(V.Z,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:a,closeAfterTransition:!0,BackdropComponent:W.Z,BackdropProps:{timeout:500},children:(0,H.jsx)(Y.Z,{in:a,children:(0,H.jsx)(G.Z,{sx:J,children:(0,H.jsxs)(M,{onSubmit:function(n){return _.apply(this,arguments)},children:[(0,H.jsxs)(E.Z,{theme:K,children:[v?(0,H.jsx)("div",{children:(0,H.jsx)(q.Z,{style:{width:"300px",marginBottom:"20px",padding:"10px 0px 20px 0px"},error:!0,id:"standard-basic",label:"Name",variant:"standard",onChange:I,type:"text",name:"name",value:u,helperText:"".concat(u," is already on your contact list")})}):(0,H.jsx)("div",{children:(0,H.jsx)(q.Z,{style:{width:"300px",marginBottom:"20px",padding:"10px 0px 20px 0px"},id:"standard-basic",label:"Name",variant:"standard",onChange:I,type:"text",name:"name",value:u})}),L?(0,H.jsx)("div",{children:(0,H.jsx)(q.Z,{style:{width:"300px",padding:"10px 0px 20px 0px"},id:"standard-basic",error:!0,label:"Number",variant:"standard",onChange:I,type:"tel",name:"number",value:w,helperText:"Should be a number."})}):(0,H.jsx)("div",{children:(0,H.jsx)(q.Z,{style:{width:"300px",padding:"10px 0px 20px 0px"},id:"standard-basic",label:"Number",variant:"standard",onChange:I,type:"tel",name:"number",value:w})})]}),(0,H.jsx)(D.Z,{style:{marginRight:"10px",marginTop:"20px",width:"100px"},variant:"contained",type:"submit",children:"save"}),(0,H.jsx)(D.Z,{style:{marginTop:"20px",width:"100px"},variant:"outlined",type:"button",onClick:i,children:"cancel"})]})})})})}var X=t(8402),$=t(1413),nn=t(5987),en=t(3978),tn=["name","sx"];function rn(n){var e,t=0;for(e=0;e<n.length;e+=1)t=n.charCodeAt(e)+((t<<5)-t);var r="#";for(e=0;e<3;e+=1){r+="00".concat((t>>8*e&255).toString(16)).slice(-2)}return r}function an(n){var e=n.name,t=n.sx,r=void 0===t?{}:t,a=(0,nn.Z)(n,tn);return(0,H.jsx)(en.Z,(0,$.Z)((0,$.Z)({sx:(0,$.Z)((0,$.Z)({},r),{},{bgcolor:rn(e)})},function(n){var e=n.split(" ");return{children:n.length<1?"".concat(e[0][0]).concat(e[1][0]):"".concat(e[0][0])}}(e)),a))}var on=t(788),sn=t(7323),cn=t(8440),dn=t(9571),ln=t(464),pn=t(2232),un=h.forwardRef((function(n,e){return(0,H.jsx)(pn.Z,(0,$.Z)({direction:"up",ref:e},n))}));function xn(n){var e=n.open,t=n.setOpen,r=n.title,a=n.removeContact,i=n.nameContact,o=function(){t(!1)};return(0,H.jsxs)(on.Z,{open:e,TransitionComponent:un,keepMounted:!0,onClose:o,"aria-describedby":"alert-dialog-slide-description",children:[(0,H.jsx)(ln.Z,{children:r}),(0,H.jsx)(cn.Z,{children:(0,H.jsxs)(dn.Z,{id:"alert-dialog-slide-description",children:["Are you sure you want to delete ",(0,H.jsx)("b",{children:i})," from your contact list?"]})}),(0,H.jsxs)(sn.Z,{children:[(0,H.jsx)(D.Z,{variant:"contained",onClick:function(){return a()},children:"Yes"}),(0,H.jsx)(D.Z,{variant:"outlined",onClick:o,children:"No"})]})]})}function mn(n){var e=n.name,t=n.number,r=n.id,a=(0,g.Nt)(),i=(0,k.Z)(a,2),o=i[0],s=i[1].isLoading,c=R(),d=c.isOpen,l=c.setIsOpen,p=c.toggle,u=c.isConfirm,x=c.setIsConfirm,m=c.toggleConfirm;function h(){return(h=(0,C.Z)(P().mark((function n(){return P().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return x(!1),n.prev=1,n.next=4,o(r);case 4:A.Notify.info("".concat(e," has been deleted")),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[1,7]])})))).apply(this,arguments)}return(0,H.jsx)(H.Fragment,{children:(0,H.jsxs)(L,{children:[(0,H.jsx)(an,{name:e,alt:e,src:"/static/images/avatar/2.jpg",sx:{width:50,height:50}}),(0,H.jsxs)(O,{children:[e,": ",(0,H.jsx)("a",{href:"tel:".concat(t),children:t})]}),(0,H.jsx)(Q,{id:r,nameContact:e,numberContact:t,open:d,toggle:p,setIsOpen:l}),s?(0,H.jsx)(_,{children:(0,H.jsx)(X.Nx,{width:"100",color:"black"})}):(0,H.jsxs)(_,{children:[(0,H.jsx)(z,{type:"button",onClick:function(){return p()},children:(0,H.jsx)(F,{})}),(0,H.jsx)(z,{type:"button",onClick:function(){return m()},children:(0,H.jsx)(I,{})})]}),(0,H.jsx)(xn,{open:u,removeContact:function(){return function(){return h.apply(this,arguments)}(r)},setOpen:x,id:r,nameContact:e,title:"Are you sure?"})]})})}var hn=(0,h.memo)(mn);function gn(){var n,e=m(),t=e.filter,r=e.onSetFilter,a=function(){var n=b().contacts,e=m().filter;return{getVisibleContacts:(0,h.useMemo)((function(){var t=e.toLowerCase();return null===n||void 0===n?void 0:n.filter((function(n){return n.name.toLowerCase().includes(t)}))}),[n,e])}}(),i=a.getVisibleContacts;return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(l,{children:(0,H.jsx)(q.Z,{style:{width:"300px"},label:"Search contact",variant:"standard",value:t,onChange:function(n){var e=n.currentTarget.value;r(e)}})}),0===(null===i||void 0===i?void 0:i.length)?(0,H.jsx)(p,{children:"Your contact list is empty :("}):(0,H.jsx)(d,{children:null===i||void 0===i||null===(n=i.map((function(n){var e=n.name,t=n.id,r=n.number;return(0,H.jsx)(hn,{name:e,number:r,id:t},t)})))||void 0===n?void 0:n.sort((function(n,e){return n.props.name.localeCompare(e.props.name)}))})]})}var bn,fn,vn,Zn,jn,yn,wn=t(4942),Cn=c.ZP.form(bn||(bn=(0,s.Z)(["\n  @media screen and (min-width: 1200px) {\n    position: relative;\n    display: block;\n    text-align: center;\n    border: 1px solid rgb(21, 101, 192);\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 7px;\n    padding: 20px;\n  }\n"]))),kn=(c.ZP.label(fn||(fn=(0,s.Z)(["\n  @media screen and (min-width: 1200px) {\n    font-size: 20px;\n    line-height: 1.16;\n    letter-spacing: 0.01em;\n    color: #757575;\n    margin-bottom: 4px;\n    margin-right: 10px;\n  }\n"]))),c.ZP.input(vn||(vn=(0,s.Z)(["\n  @media screen and (min-width: 1200px) {\n    border-radius: 4px;\n    border: 1px solid rgba(33, 33, 33, 0.2);\n    margin: 0 auto;\n    height: 30px;\n    padding-left: 10px;\n    outline: none;\n    cursor: pointer;\n  }\n"]))),c.ZP.div(Zn||(Zn=(0,s.Z)(["\n  @media screen and (min-width: 1200px) {\n    padding: 24px;\n    text-align: center;\n    width: 450px;\n    position: sticky;\n    top: 0;\n  }\n"])))),Sn=c.ZP.div(jn||(jn=(0,s.Z)(["\n  @media screen and (min-width: 1200px) {\n    width: 450px;\n  }\n"]))),Pn=c.ZP.button(yn||(yn=(0,s.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  box-sizing: border-box;\n  background-color: transparent;\n  outline: 0;\n  border: 0;\n  margin: 0;\n  border-radius: 0;\n  padding: 0;\n  cursor: pointer;\n  user-select: none;\n  vertical-align: middle;\n  text-decoration: none;\n  color: inherit;\n  font-weight: 500;\n  font-size: 1.125rem;\n  line-height: 1.75;\n  text-transform: uppercase;\n  width: 200px;\n  padding: 6px 16px;\n  border-radius: 4px;\n  color: #fff;\n  background-color: #1976d2;\n  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),\n    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);\n  margin-top: 10px;\n  color: #1565c0;\n  background: transparent;\n  border: 2px solid #1565c0;\n  &:hover {\n    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  }\n  @media screen and (min-width: 1200px) {\n    width: 300px;\n  }\n"]))),Nn={name:"",number:""};function Tn(){var n=R(),e=n.isOpen,t=n.toggle,r=(0,h.useState)(Nn),a=(0,k.Z)(r,2),i=a[0],o=a[1],s=Number(i.number),c=(0,h.useState)(!1),d=(0,k.Z)(c,2),l=d[0],p=d[1],u=(0,h.useState)(!1),x=(0,k.Z)(u,2),m=x[0],f=x[1],v=b().contacts,Z=(0,g.Tn)(),j=(0,k.Z)(Z,2),y=j[0],w=j[1].isLoading;function S(n){var e=n.currentTarget,t=e.name,r=e.value;o((function(n){return(0,$.Z)((0,$.Z)({},n),{},(0,wn.Z)({},t,r))})),p(!1),f(!1)}function N(){return(N=(0,C.Z)(P().mark((function n(e){var t,r;return P().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),t=i.name,r=i.number,!T({name:t})){n.next=4;break}return n.abrupt("return",A.Notify.info("".concat(t," is already on your contact list")));case 4:if(""!==t.trim()){n.next=7;break}return p(!0),n.abrupt("return");case 7:if(s){n.next=10;break}return f(!0),n.abrupt("return");case 10:return n.prev=10,n.next=13,y({name:t,number:r});case 13:A.Notify.success("".concat(t," added to your contact list")),L(),n.next=20;break;case 17:n.prev=17,n.t0=n.catch(10),console.log(n.t0);case 20:case"end":return n.stop()}}),n,null,[[10,17]])})))).apply(this,arguments)}function T(n){var e=n.name;return v.find((function(n){return n.name===e}))}function L(){o({name:"",number:""})}return(0,H.jsx)(Sn,{children:(0,H.jsx)(kn,{children:e?(0,H.jsxs)(Cn,{onSubmit:function(n){return N.apply(this,arguments)},children:[l?(0,H.jsx)("div",{children:(0,H.jsx)(q.Z,{style:{minWidth:"300px"},error:!0,label:"Name",variant:"standard",onChange:S,type:"text",name:"name",value:i.name,helperText:"Name is required."})}):(0,H.jsx)("div",{children:(0,H.jsx)(q.Z,{style:{minWidth:"300px"},label:"Name",variant:"standard",onChange:S,type:"text",name:"name",value:i.name})}),m?(0,H.jsx)("div",{children:(0,H.jsx)(q.Z,{style:{minWidth:"300px"},error:!0,label:"Number",variant:"standard",onChange:S,type:"tel",name:"number",value:i.number,helperText:"Should be a number."})}):(0,H.jsx)("div",{children:(0,H.jsx)(q.Z,{style:{minWidth:"300px"},label:"Number",variant:"standard",onChange:S,type:"tel",name:"number",value:i.number})}),(0,H.jsx)(D.Z,{style:{marginRight:"10px",marginTop:"20px",width:"150px"},variant:"contained",type:"submit",children:w?"load":"Add "}),(0,H.jsx)(D.Z,{style:{marginTop:"20px",width:"150px"},variant:"outlined",type:"button",onClick:t,children:"cancel"})]}):(0,H.jsx)(Pn,{onClick:t,variant:"contained",children:e?"Cancel":"add contact"})})})}var Ln,On,zn=t(7119),Fn=c.ZP.div(Ln||(Ln=(0,s.Z)(["\n  gap: 24px;\n  height: 100%;\n  @media screen and (min-width: 1200px) {\n    display: flex;\n  }\n"]))),In=c.ZP.div(On||(On=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n  @media screen and (min-width: 1200px) {\n    border-right: 2px solid #757575;\n  }\n"])));function _n(){return(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(zn.Z,{children:(0,H.jsxs)(Fn,{children:[(0,H.jsx)(In,{children:(0,H.jsx)(Tn,{})}),(0,H.jsx)("div",{style:{flexGrow:"1"},children:(0,H.jsx)(gn,{})})]})})})}}}]);
//# sourceMappingURL=961.a2fb3e31.chunk.js.map