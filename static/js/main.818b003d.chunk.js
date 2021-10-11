(this.webpackJsonpcode=this.webpackJsonpcode||[]).push([[0],{34:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var i=a(1),s=a.n(i),r=a(15),n=a.n(r),c=(a(46),a(47),a(34),a(39)),l=a(4),o=a(17),d=a(24),j=a(19),b=a(18),h=[{title:"Solver",url:"/ReactBinary/",cName:"nav-links"},{title:"About",url:"/ReactBinary/about",cName:"nav-links"}],u=(a(48),a(0)),x=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={clicked:!1},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("nav",{className:"navbar navbar-expand-sm justify-content-center",children:[Object(u.jsx)("h1",{id:"logo",className:"navbar-brand d-flex w-50 mr-auto",children:"Binary Distillation Solver"}),Object(u.jsxs)("div",{className:"navbar-collapse collapse w-100",id:"collapsingNavbar3",children:[Object(u.jsx)("ul",{className:"navbar-nav w-100 justify-content-center",children:h.map((function(e,t){return Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:e.cName,href:e.url,children:e.title})},t)}))}),Object(u.jsx)("ul",{className:"nav navbar-nav ml-auto w-100 justify-content-end"})]})]})}}]),a}(i.Component),p=x,v=a(33),m=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{children:Object(u.jsx)("h1",{className:"background",children:"Background"})}),Object(u.jsxs)("div",{className:"row no-gutters",children:[Object(u.jsx)("div",{className:"col-sm-3",children:Object(u.jsx)(v.a,{children:Object(u.jsx)(v.a.Image,{src:"https://prod-qna-question-images.s3.amazonaws.com/qna-images/question/2b910e09-d07b-48b1-888a-1cfc810938be/958e02a9-0bab-4c36-8aac-b82225a046a2/yqv58gl_processed.png"})})}),Object(u.jsx)("div",{className:"col",children:Object(u.jsx)("p",{id:"descript",children:"This solver uses the McCabe-Thiele graphical method to determine the number of stages a binary distillation needs in order to achieve the desired distillate composition. The solver also determines the optimal feed stage and minimum reflux ratio. This solver assumes constant molal in order to simplify the problem. Feel free to use this solver to save yourself time on homework problems in which it requires this graphically iterative process."})})]})]})},O=a(16),f=a(2),y=a(21),g=a(7),N=a(23),E=a(22);function w(e,t){return t/(e*(1-t)+t)}var q=[];function k(e,t,a,i){return[[e,t],[a,i]]}function D(e,t,a,i){if(""===a)var s={x:e,y:t,mode:"lines",type:"scatter",line:{color:i},showlegend:!1};else s="staircase"===a?{x:e,y:t,mode:"lines",type:"scatter",line:{color:i},name:a,legendgroup:"staircase"}:"staircasehide"===a?{x:e,y:t,mode:"lines",type:"scatter",line:{color:i},legendgroup:"staircase",showlegend:!1}:{x:e,y:t,mode:"lines",type:"scatter",line:{color:i},name:a};return s}function T(e){return q.push(e),q}var C=0,V=0,I=0;function R(e,t,a,i,s,r){if(C=0,V=0,q=[],!function(e,t,a,i,s,r){return!(isNaN(e)||isNaN(t)||isNaN(a)||isNaN(i)||isNaN(s)||isNaN(r))}(e,t,a,i,s,r))return["Input Error","Input Error","Input Error"];var n=function(e,t,a){var i,s,r,n=e*(t-1),c=e-a*(t-1)-t*(e-1),l=c*c-4*n*-a;if(0===n)return"Error";if(l<0)return"Error";if(l>0){if(i=(-c+Math.sqrt(l))/(2*n),s=(-c-Math.sqrt(l))/(2*n),i>1&&s>1)return"Error";r=i>0||i<1?i:s}else r=i=s=-c/(2*n);return[r,t*r/(1+r*(t-1))]}(i,r,e);if("Error"===n)return["Input Error","Input Error","Input Error"];var c=B(0,t,n[0],n[1]);if(s<(I=t/c-1))return["N/A","N/A","Check Input!!! Given reflux < Minimum reflux!!!"];var l=function(e,t,a,i){return[(-(a-1)*(1-i/(i+1))*t-e)/((a-1)*i/(i+1)-a),(e+t*a/i)/(1+a/i)]}(e,t,i,s),o=k(e,l[0],e,l[1]),d=k(t,l[0],t,l[1]),j=k(a,l[0],a,l[1]),b=k(a,a,0,a),h=k(e,e,0,e),u=k(t,t,0,t),x=k(0,t,c,t),p=function(e){for(var t=[0],a=[0],i=0,s=0;s<100;s++){var r=1+(e-1)*(i+=.01);if(r<=0)return"Error";t.push(i),a.push(e*i/r)}return[t,a]}(r);if("Error"===p)return["Input Error","Input Error","Input Error"];var v=function(){for(var e=[0],t=.1,a=0,i=0;i<10;i++)a+=t,e.push(a);return[e,e]}(),m=D(o[0],o[1],"Feed Line","rgb(10,97,247)"),O=D(d[0],d[1],"Stripping Line","rgb(211,69,233)"),f=D(j[0],j[1],"Rectifying Line","rgb(55,220,72)"),y=D(p[0],p[1],"Equilibrium Curve","rgb(200,0,0)"),g=D(v[0],v[1],"","rgb(0,0,0)"),N=D(b[0],b[1],"","rgb(240,136,44)"),E=D(h[0],h[1],"","rgb(240,136,44)"),R=D(u[0],u[1],"","rgb(240,136,44)"),z=D(x[0],x[1],"Minimum Reflux","grey");return function(e,t,a,i,s,r){var n,c=t,l=t;for(;c>a&&!(C>100);){var o=w(r,l),d=k(c,o,l,l);if(T(D(d[0],d[1],"staircasehide","rgb(0,0,0")),o<a){n=o;break}var j=S(o,t,s),b=k(o,o,l,j);T(D(b[0],b[1],"staircasehide","rgb(0,0,0")),c=o,l=j,C++}V=C+1;for(;n>e&&!(C>100);){var h=B(n,e,a,i),u=k(n,n,l,h),x=D(u[0],u[1],"staircasehide","rgb(0,0,0");T(x);var p=w(r,h),v=k(n,p,h,h),m=D(v[0],v[1],"staircasehide","rgb(0,0,0)");if(T(m),l=h,C++,(n=p)<e){T(x=D((u=k(n,n,l,h=n))[0],u[1],"staircase","rgb(0,0,0"));break}}if("undefined"!=typeof m&&"undefined"!=typeof x){var O=(m.x[0]-e)/(m.x[0]-x.x[1]);C+=O}}(a,t,l[0],l[1],s,r),C>=100?[" Check Input!!! Number of Stages > 100!!!","N/A","N/A"]:(T(m),T(O),T(f),T(y),T(g),T(N),T(E),T(R),T(z),[C.toFixed(2),V.toFixed(0),I.toFixed(2)])}function S(e,t,a){return a/(a+1)*e+t/(a+1)}function B(e,t,a,i){var s=(t-i)/(t-a);return s*e+(i-s*a)}var z=a(37),F=a.n(z),M=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).zToolTip=function(e){return Object(u.jsx)(E.a,Object(f.a)(Object(f.a)({},e),{},{children:"Enter the composition of the more volatile component in the binary composition. Enter a value from 0-1 (e.g. 0.525)"}))},i.yDToolTip=function(e){return Object(u.jsx)(E.a,Object(f.a)(Object(f.a)({},e),{},{children:"Enter the distillate composition of the more volatile component that leaves the top of the column. Enter a value from 0-1 (e.g. 0.925)"}))},i.xBToolTip=function(e){return Object(u.jsx)(E.a,Object(f.a)(Object(f.a)({},e),{},{children:"Enter the bottoms composition of the more volatile component that leaves the bottom of the column. Enter a value from 0-1 (e.g. 0.05)"}))},i.qToolTip=function(e){return Object(u.jsxs)(E.a,Object(f.a)(Object(f.a)({},e),{},{children:["Enter the feed quality.",Object(u.jsx)("br",{}),"q","<","0 for superheated vapor,",Object(u.jsx)("br",{})," q=0 for saturated vapor,",Object(u.jsx)("br",{})," 0","<","q","<","1 for a mixture of liquid and vapor, ",Object(u.jsx)("br",{})," q=1 for saturated liquid,",Object(u.jsx)("br",{}),"q",">","1 for subcooled liquid"]}))},i.refluxToolTip=function(e){return Object(u.jsx)(E.a,Object(f.a)(Object(f.a)({},e),{},{children:"Enter the reflux ratio, the ratio of liquid that re-enters the column divided by the liquid removed as a distilled product. Enter a value greater than 0 (e.g. 1.5)"}))},i.alphaToolTip=function(e){return Object(u.jsx)(E.a,Object(f.a)(Object(f.a)({},e),{},{children:"Enter the relative volatility between the two components which compares vapor pressure of the components. Enter a value greater than 0 (e.g. 2.5)"}))},i.state={z:"0.5",yD:"0.9",xB:"0.1",q:"1.1",reflux:"1.5",alpha:"2.45",data:[],layout:{},stages:0,feedStage:0,minReflux:0,zValidity:!1,yDValidity:!1,xBValidityL:!1,qValidity:!1,refluxValidity:!1,alphaValidity:!1},i.validateNumber=i.validateNumber.bind(Object(y.a)(i)),i.validateDecimal=i.validateDecimal.bind(Object(y.a)(i)),i.validateRatio=i.validateRatio.bind(Object(y.a)(i)),i}return Object(d.a)(a,[{key:"setEmptyInput",value:function(e,t){console.log(e,t),"z"===e?this.setState({zValidity:t}):"yD"===e?this.setState({yDValidity:t}):"xB"===e?this.setState({xBValidity:t}):"q"===e?this.setState({qValidity:t}):"reflux"===e?this.setState({refluxValidity:t}):"alpha"===e&&this.setState({alphaValidity:t})}},{key:"validateNumber",value:function(e){var t=this,a=e.target,i=a.value,s=a.name;/^-?\d*\.?\d*$/.test(i)&&(""===i?this.setEmptyInput(s,!0):""!==i&&this.setEmptyInput(s,!1),this.setState(Object(O.a)({},s,i),(function(){t.getData()})))}},{key:"validateDecimal",value:function(e){var t=this,a=e.target,i=a.value,s=a.name;/^(?:0*(?:\.\d*)?|1(\.0*)?)$/.test(i)&&(""===i?this.setEmptyInput(s,!0):""!==i&&this.setEmptyInput(s,!1),this.setState(Object(O.a)({},s,i),(function(){t.getData()})))}},{key:"validateRatio",value:function(e){var t=this,a=e.target,i=a.value,s=a.name;/^\d*\.?\d*$/.test(i)&&(""===i?this.setEmptyInput(s,!0):""!==i&&this.setEmptyInput(s,!1),this.setState(Object(O.a)({},s,i),(function(){t.getData()})))}},{key:"getData",value:function(){var e=R(parseFloat(this.state.z),parseFloat(this.state.yD),parseFloat(this.state.xB),parseFloat(this.state.q),parseFloat(this.state.reflux),parseFloat(this.state.alpha)),t=function(e){return[e,{title:"<b>McCabe-Thiele Y-X Diagram </b>",autosize:!0,xaxis:{range:[0,1],title:{text:"x",font:{family:"Helvetica,Arial,sans-serif",size:18,color:"#030303"}},linecolor:"black",linewidth:1,mirror:!0},yaxis:{range:[0,1],title:{text:"y",font:{family:"Helvetica,Arial,sans-serif",size:18,color:"#030303"}},linecolor:"black",linewidth:1,mirror:!0},paper_bgcolor:"#fff",borderwidth:"1px",bordercolor:"rgb(0,0,0)",width:800,height:500}]}(q);this.setState({data:t[0],layout:t[1],stages:e[0],feedStage:e[1],minReflux:e[2]})}},{key:"render",value:function(){var e=this;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("h1",{children:"McCabe-Thiele Diagram"}),Object(u.jsx)("p",{className:"description",children:"Calculates total number of stages, feed stage, and minimum reflux for a distillation column to separate a binary mixture with a given Relative Volatility."})]}),Object(u.jsxs)("div",{className:"row",id:"content-container",children:[Object(u.jsx)("div",{className:"col-sm-2"}),Object(u.jsxs)("div",{className:"col-md-4",id:"input-container",children:[Object(u.jsx)("h2",{children:" Input "}),Object(u.jsxs)("div",{className:"form-container",children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("div",{children:Object(u.jsxs)("label",{children:[Object(u.jsx)(N.a,{placement:"top",overlay:this.zToolTip,children:Object(u.jsx)("div",{className:"icon-div",children:Object(u.jsx)(g.d,{})})}),"\xa0 Feed Composition (z)"]})}),Object(u.jsxs)("div",{className:"input-container",children:[Object(u.jsx)("input",{type:"text",name:"z",value:this.state.z,onChange:this.validateDecimal,style:this.state.zValidity?{border:"solid red",borderWidth:"1px",outline:"none"}:{border:""}}),Object(u.jsx)("div",{className:"validity-container",children:Object(u.jsx)("span",{className:"validity",style:{visibility:this.state.zValidity?"visible":"hidden"},children:"\xa0 Enter a value for z between 0-1 (e.g. 0.45)"})})]})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("div",{children:Object(u.jsxs)("label",{children:[Object(u.jsx)(N.a,{placement:"top",overlay:this.yDToolTip,children:Object(u.jsx)("div",{className:"icon-div",children:Object(u.jsx)(g.d,{})})}),"\xa0Distillate Composition (yD)"]})}),Object(u.jsxs)("div",{className:"input-container",children:[Object(u.jsx)("input",{type:"text",name:"yD",value:this.state.yD,onChange:this.validateDecimal,style:this.state.yDValidity?{border:"solid red",borderWidth:"1px",outline:"none"}:{border:""}}),Object(u.jsx)("div",{className:"validity-container",children:Object(u.jsx)("span",{className:"validity",style:{visibility:this.state.yDValidity?"visible":"hidden"},children:"\xa0 Enter a value for yD between 0-1 (e.g. 0.95)"})})]})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("div",{children:Object(u.jsxs)("label",{children:[Object(u.jsx)(N.a,{placement:"top",overlay:this.xBToolTip,children:Object(u.jsx)("div",{className:"icon-div",children:Object(u.jsx)(g.d,{})})}),"\xa0Bottoms Composition (xB)"]})}),Object(u.jsxs)("div",{className:"input-container",children:[Object(u.jsx)("input",{type:"text",name:"xB",value:this.state.xB,onChange:this.validateDecimal,style:this.state.xBValidity?{border:"solid red",borderWidth:"1px",outline:"none"}:{border:""}}),Object(u.jsx)("div",{className:"validity-container",children:Object(u.jsx)("span",{className:"validity",style:{visibility:this.state.xBValidity?"visible":"hidden"},children:"\xa0 Enter a value for xB between 0-1 (e.g. 0.05)"})})]})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("div",{children:Object(u.jsxs)("label",{children:[Object(u.jsx)(N.a,{placement:"top",overlay:this.qToolTip,children:Object(u.jsx)("div",{className:"icon-div",children:Object(u.jsx)(g.d,{})})}),"\xa0 Feed quality (q)"]})}),Object(u.jsxs)("div",{className:"input-container",children:[Object(u.jsx)("input",{type:"text",name:"q",value:this.state.q,onChange:this.validateNumber,style:this.state.qValidity?{border:"solid red",borderWidth:"1px",outline:"none"}:{border:""}}),Object(u.jsx)("div",{className:"validity-container",children:Object(u.jsx)("span",{className:"validity",style:{visibility:this.state.qValidity?"visible":"hidden"},children:"\xa0 Enter a value for q (e.g. -1.2)"})})]})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("div",{children:Object(u.jsxs)("label",{children:[Object(u.jsx)(N.a,{placement:"top",overlay:this.refluxToolTip,children:Object(u.jsx)("div",{className:"icon-div",children:Object(u.jsx)(g.d,{})})}),"\xa0 Reflux Ratio (L/D)"]})}),Object(u.jsxs)("div",{className:"input-container",children:[Object(u.jsx)("input",{type:"text",name:"reflux",value:this.state.reflux,onChange:this.validateRatio,style:this.state.refluxValidity?{border:"solid red",borderWidth:"1px",outline:"none"}:{border:""}}),Object(u.jsx)("div",{className:"validity-container",children:Object(u.jsx)("span",{className:"validity",style:{visibility:this.state.refluxValidity?"visible":"hidden"},children:"\xa0 Enter a value for L/D greater than 0 (e.g. 2.5) "})})]})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("div",{children:Object(u.jsxs)("label",{children:[Object(u.jsx)(N.a,{placement:"top",overlay:this.alphaToolTip,children:Object(u.jsx)("div",{className:"icon-div",children:Object(u.jsx)(g.d,{})})}),"\xa0 Relative volatility (\u03b1)"]})}),Object(u.jsxs)("div",{className:"input-container",children:[Object(u.jsx)("input",{type:"text",name:"alpha",value:this.state.alpha,onChange:this.validateRatio,style:this.state.alphaValidity?{border:"solid red",borderWidth:"1px",outline:"none"}:{border:""}}),Object(u.jsx)("div",{className:"validity-container",children:Object(u.jsx)("span",{className:"validity",style:{visibility:this.state.alphaValidity?"visible":"hidden"},children:"\xa0 Enter a value for relative volality greater than 0 (e.g. 1.45)"})})]})]})]})]}),Object(u.jsxs)("div",{className:"col",children:[Object(u.jsx)("br",{}),Object(u.jsxs)("label",{className:"answerLabel",children:[" Number of Stages: ",this.state.stages," "]}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{className:"answerLabel",children:[" Optimal Feed Stage: ",this.state.feedStage," "]}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{className:"answerLabel",children:[" Minimum Reflux Ratio: ",this.state.minReflux," "]}),Object(u.jsx)("br",{}),Object(u.jsx)(F.a,{data:this.state.data,layout:this.state.layout,onInitialized:function(){e.getData()}})]})]})]})}}]),a}(i.Component),L=M,A=a(5),W=a(38),_=function(e){Object(W.a)(e);var t=Object(i.useRef)(null),a=Object(i.useRef)(null),s=Object(i.useState)(!1),r=Object(A.a)(s,2),n=r[0],c=r[1],l=Object(i.useState)(""),o=Object(A.a)(l,2),d=o[0],j=o[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("a",{id:"contact-button",href:"#/",onClick:function(){return c(!0)},children:"Contact Me"}),Object(u.jsx)("textarea",{ref:a,style:{opacity:0,position:"absolute",top:"-200px"}}),Object(u.jsx)("div",{className:"popup-container",style:{display:n?"block":"none"},children:Object(u.jsxs)("div",{className:"popup-content",children:[Object(u.jsx)("div",{className:"top-window",children:Object(u.jsx)("button",{className:"close-button",onClick:function(){return c(!1),void j("")},children:Object(u.jsx)(g.b,{})})}),Object(u.jsxs)("div",{className:"popup-header",children:[Object(u.jsx)("p",{children:"Contacts"}),Object(u.jsxs)("p",{className:"popup-header-content",children:[" ",Object(u.jsx)("br",{}),"questions? Need Help? Let me know!"]})]}),Object(u.jsx)("div",{className:"popup-links",children:Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{ref:t,children:[Object(u.jsx)(g.a,{}),"\xa0dylanau99@gmail.com",Object(u.jsx)("button",{id:"copy-email",className:"copy-button",onClick:function(e){a.current.value="dylanau99@gmail.com",a.current.select(),document.execCommand("copy"),e.target.focus(),j("Copied!")},children:Object(u.jsx)(g.e,{})}),d]}),Object(u.jsxs)("li",{children:[Object(u.jsx)(g.c,{}),Object(u.jsx)("a",{href:"https://github.com/da593",target:"_blank",rel:"noopener noreferrer",children:"\xa0My Github"})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)(g.f,{}),Object(u.jsx)("a",{href:"https://www.linkedin.com/in/dylan-au/",target:"_blank",rel:"noopener noreferrer",children:"\xa0My LinkedIn"})]})]})})]})})]})},H=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).showContacts=i.showContacts.bind(Object(y.a)(i)),i}return Object(d.a)(a,[{key:"showContacts",value:function(e){}},{key:"render",value:function(){return Object(u.jsx)("div",{className:"footer-container",children:Object(u.jsx)("ul",{children:Object(u.jsx)("li",{children:Object(u.jsx)(_,{})})})})}}]),a}(i.Component);var $=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)(c.a,{children:[Object(u.jsx)(p,{}),Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{exact:!0,path:"/ReactBinary/",component:L}),Object(u.jsx)(l.a,{exact:!0,path:"/ReactBinary/about",component:m})]})]}),Object(u.jsx)(H,{})]})};a(56);n.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)($,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.818b003d.chunk.js.map