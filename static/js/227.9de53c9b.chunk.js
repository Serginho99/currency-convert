"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[227],{7119:function(n,t,e){e.d(t,{Z:function(){return s}});var r,a=e(168),i=e(7691).ZP.section(r||(r=(0,a.Z)(["\n  width: 1200px;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin: 0 auto;\n"]))),o=e(184);function s(n){var t=n.children;return(0,o.jsx)(i,{children:t})}},6227:function(n,t,e){e.r(t),e.d(t,{default:function(){return bn}});var r,a,i,o,s=e(168),c=e(7691),l=(c.ZP.input(r||(r=(0,s.Z)(["\n  border-radius: 4px;\n  width: 200px;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  margin: 0 auto;\n  height: 30px;\n  padding-left: 10px;\n  outline: none;\n  cursor: pointer;\n"]))),c.ZP.ul(a||(a=(0,s.Z)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  /* width: 400px; */\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 25px;\n"])))),d=c.ZP.div(i||(i=(0,s.Z)(["\n  text-align: center;\n  margin-bottom: 40px;\n  margin-top: 40px;\n"]))),u=c.ZP.h2(o||(o=(0,s.Z)(["\n  text-align: center;\n"]))),p=e(5048),x=e(1634);function h(){var n=(0,p.v9)((function(n){return n.filter.value})),t=(0,p.I0)();return{filter:n,onSetFilter:function(n){t((0,x.T)(n))}}}var m=e(2791),g=e(5274);function f(){var n=(0,g.wY)();return{contacts:n.data,isLoading:n.isLoading,isFetching:n.isFetching}}var b,v,Z,j,y,w,k=e(5861),C=e(885),P=e(4687),S=e.n(P),L=e(7425),N=e(6355),F=c.ZP.li(b||(b=(0,s.Z)(["\n  display: flex;\n  text-align: center;\n  justify-content: space-between;\n  border-bottom: 1px solid rgba(33, 33, 33, 0.2);\n  & + & {\n    margin-top: 20px;\n  }\n"]))),O=c.ZP.p(v||(v=(0,s.Z)(["\n  margin: 0;\n  color: #757575;\n  font-size: 20px;\n"]))),T=c.ZP.button(Z||(Z=(0,s.Z)(["\n  background-color: transparent;\n  border: none;\n"]))),_=(0,c.ZP)(N.dfI)(j||(j=(0,s.Z)(["\n  background-color: transparent;\n  border: none;\n  height: 30px;\n  font-size: 20px;\n  cursor: pointer;\n  text-align: center;\n  color: #757575;\n  transition: transform 250ms;\n\n  :hover {\n    color: black;\n    transform: scale(1.3);\n  }\n"]))),z=(0,c.ZP)(L.qy0)(y||(y=(0,s.Z)(["\n  background-color: transparent;\n  border: none;\n  height: 30px;\n  font-size: 20px;\n  cursor: pointer;\n  text-align: center;\n  color: #757575;\n  transition: transform 250ms;\n\n  :hover {\n    color: black;\n    transform: scale(1.3);\n  }\n"]))),I=c.ZP.div(w||(w=(0,s.Z)(["\n  display: flex;\n  height: 40px;\n"]))),B=e(5562);function R(){var n=(0,m.useState)(!1),t=(0,C.Z)(n,2),e=t[0],r=t[1];return{isOpen:e,setIsOpen:r,toggle:function(){r((function(n){return!n}))}}}var V,A,D,G=e(5112),Y=e(6015),q=e(4015),M=e(7962),U=e(9862),W=e(7205),E=(c.ZP.div(V||(V=(0,s.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.2);\n  z-index: 1200;\n"]))),c.ZP.div(A||(A=(0,s.Z)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),c.ZP.form(D||(D=(0,s.Z)(["\n  font-family: inherit;\n  padding: 15px;\n  text-align: center;\n"])))),H=e(4360),J=e(7012),K=e(184),Q={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:500,height:350,bgcolor:"background.paper",border:"1px solid rgb(21,101,192)",borderRadius:4,boxShadow:24,p:4},X=(0,H.Z)({typography:{fontFamily:["Lucida Sans","Lucida Sans Regular","Lucida Grande","Lucida Sans Unicode","Geneva","Verdana","sans - serif"].join(","),fontSize:23,fontWeight:700}});function $(n){var t=n.nameContact,e=n.numberContact,r=n.id,a=n.isOpen,i=n.toggle,o=n.setIsOpen,s=(0,g.wv)(),c=(0,C.Z)(s,1)[0],l=(0,m.useState)(t),d=(0,C.Z)(l,2),u=d[0],p=d[1],x=(0,m.useState)(e),h=(0,C.Z)(x,2),f=h[0],b={name:p,number:h[1]};function v(n){var t=n.target,e=t.name,r=t.value;b[e](r)}function Z(){return(Z=(0,k.Z)(S().mark((function n(t){return S().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),""!==u){n.next=3;break}return n.abrupt("return");case 3:if(""!==f){n.next=5;break}return n.abrupt("return");case 5:return n.prev=5,n.next=8,c({id:r,data:{name:u,number:f}});case 8:B.Notify.success("Successfully"),o(!1),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(5),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[5,12]])})))).apply(this,arguments)}return(0,K.jsx)(K.Fragment,{children:(0,K.jsx)("div",{children:(0,K.jsx)(q.Z,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:a,onClose:i,closeAfterTransition:!0,BackdropComponent:G.Z,BackdropProps:{timeout:500},children:(0,K.jsx)(M.Z,{in:a,children:(0,K.jsx)(Y.Z,{sx:Q,children:(0,K.jsxs)(E,{onSubmit:function(n){return Z.apply(this,arguments)},children:[(0,K.jsxs)(J.Z,{theme:X,children:[(0,K.jsx)("div",{children:(0,K.jsx)(U.Z,{style:{width:"400px",marginBottom:"20px",padding:"10px 0px 20px 0px"},id:"standard-basic",label:"Name",variant:"standard",onChange:v,type:"text",name:"name",value:u})}),(0,K.jsx)("div",{children:(0,K.jsx)(U.Z,{style:{width:"400px",marginBottom:"30px",padding:"10px 0px 20px 0px"},id:"standard-basic",label:"Number",variant:"standard",onChange:v,type:"tel",name:"number",value:f})})]}),(0,K.jsx)(W.Z,{style:{marginRight:"10px",marginTop:"20px",width:"150px"},variant:"contained",type:"submit",children:"save"}),(0,K.jsx)(W.Z,{style:{marginTop:"20px",width:"150px"},variant:"outlined",type:"button",onClick:i,children:"cancel"})]})})})})})})}var nn=e(8402);function tn(n){var t=n.name,e=n.number,r=n.id,a=(0,g.Nt)(),i=(0,C.Z)(a,2),o=i[0],s=i[1].isLoading,c=R(),l=c.isOpen,d=c.setIsOpen,u=c.toggle;function p(){return(p=(0,k.Z)(S().mark((function n(){return S().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o(r);case 3:B.Notify.info("".concat(t," has been deleted")),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))).apply(this,arguments)}return(0,K.jsx)(K.Fragment,{children:(0,K.jsxs)(F,{children:[(0,K.jsxs)(O,{children:[t,": ",e]}),(0,K.jsx)("div",{children:l&&(0,K.jsx)($,{id:r,nameContact:t,numberContact:e,isOpen:l,toggle:u,setIsOpen:d})}),s?(0,K.jsx)(I,{children:(0,K.jsx)(nn.Nx,{width:"100",color:"black"})}):(0,K.jsxs)(I,{children:[(0,K.jsx)(T,{type:"button",onClick:function(){return u()},children:(0,K.jsx)(_,{})}),(0,K.jsx)(T,{type:"button",onClick:function(){return function(){return p.apply(this,arguments)}(r)},children:(0,K.jsx)(z,{})})]})]})})}var en=(0,m.memo)(tn);function rn(){var n,t=h(),e=t.filter,r=t.onSetFilter,a=function(){var n=f().contacts,t=h().filter;return{getVisibleContacts:(0,m.useMemo)((function(){var e=t.toLowerCase();return null===n||void 0===n?void 0:n.filter((function(n){return n.name.toLowerCase().includes(e)}))}),[n,t])}}(),i=a.getVisibleContacts;return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(d,{children:(0,K.jsx)(U.Z,{style:{width:"300px"},label:"Search contact",variant:"standard",value:e,onChange:function(n){var t=n.currentTarget.value;r(t)}})}),0===(null===i||void 0===i?void 0:i.length)?(0,K.jsx)(u,{children:"Your contact list is empty :("}):(0,K.jsx)(l,{children:null===i||void 0===i||null===(n=i.map((function(n){var t=n.name,e=n.id,r=n.number;return(0,K.jsx)(en,{name:t,number:r,id:e},e)})))||void 0===n?void 0:n.sort((function(n,t){return n.props.name.localeCompare(t.props.name)}))})]})}var an,on,sn,cn,ln,dn=e(4942),un=e(1413),pn=c.ZP.form(an||(an=(0,s.Z)(["\n  position: relative;\n  display: block;\n  text-align: center;\n  border: 2px solid rgb(21, 101, 192);\n  margin-left: auto;\n  margin-right: auto;\n  width: 400px;\n  border-radius: 7px;\n  padding: 20px;\n"]))),xn=(c.ZP.label(on||(on=(0,s.Z)(["\n  font-size: 20px;\n  line-height: 1.16;\n  letter-spacing: 0.01em;\n  color: #757575;\n  margin-bottom: 4px;\n  margin-right: 10px;\n"]))),c.ZP.input(sn||(sn=(0,s.Z)(["\n  border-radius: 4px;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  margin: 0 auto;\n  height: 30px;\n  padding-left: 10px;\n  outline: none;\n  cursor: pointer;\n"]))),c.ZP.div(cn||(cn=(0,s.Z)(["\n  padding-top: 40px;\n  text-align: center;\n"])))),hn=c.ZP.div(ln||(ln=(0,s.Z)(["\n  position: sticky;\n  top: 0;\n"]))),mn={name:"",number:""};function gn(){var n=R(),t=n.isOpen,e=n.toggle,r=(0,m.useState)(mn),a=(0,C.Z)(r,2),i=a[0],o=a[1],s=f().contacts,c=(0,g.Tn)(),l=(0,C.Z)(c,2),d=l[0],u=l[1].isLoading;function p(n){var t=n.currentTarget,e=t.name,r=t.value;o((function(n){return(0,un.Z)((0,un.Z)({},n),{},(0,dn.Z)({},e,r))}))}function x(){return(x=(0,k.Z)(S().mark((function n(t){var e,r;return S().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),e=i.name,r=i.number,""!==e&&""!==r){n.next=4;break}return n.abrupt("return");case 4:if(!h({name:e,number:r})){n.next=6;break}return n.abrupt("return",B.Notify.info("".concat(e,": ").concat(r," is already on your contact list")));case 6:return n.prev=6,n.next=9,d({name:e,number:r});case 9:B.Notify.success("".concat(e," added to your contact list")),b(),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(6),console.log(n.t0);case 16:case"end":return n.stop()}}),n,null,[[6,13]])})))).apply(this,arguments)}function h(n){var t=n.name,e=n.number;return s.find((function(n){return n.name===t&&n.number===e}))}function b(){o({name:"",number:""})}return(0,K.jsxs)(hn,{children:[(0,K.jsx)(xn,{children:!t&&(0,K.jsx)(W.Z,{style:{width:"300px",color:"#1565c0",background:"transparent",border:"2px solid #1565c0"},onClick:e,variant:"contained",children:t?"Cancel":"add contact"})}),t&&(0,K.jsxs)(pn,{onSubmit:function(n){return x.apply(this,arguments)},children:[(0,K.jsx)("div",{children:(0,K.jsx)(U.Z,{style:{width:"300px"},id:"standard-basic",label:"Name",variant:"standard",onChange:p,type:"text",name:"name",value:i.name})}),(0,K.jsx)("div",{children:(0,K.jsx)(U.Z,{style:{width:"300px"},id:"standard-basic",label:"Number",variant:"standard",onChange:p,type:"tel",name:"number",value:i.number})}),(0,K.jsx)(W.Z,{style:{marginRight:"10px",marginTop:"20px",width:"150px"},variant:"contained",type:"submit",children:u?"load":"Add contact"}),(0,K.jsx)(W.Z,{style:{marginTop:"20px",width:"150px"},variant:"outlined",type:"button",onClick:e,children:"cancel"})]})]})}var fn=e(7119);function bn(){return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(fn.Z,{children:(0,K.jsx)(gn,{})}),(0,K.jsx)(fn.Z,{children:(0,K.jsx)(rn,{})})]})}}}]);
//# sourceMappingURL=227.9de53c9b.chunk.js.map