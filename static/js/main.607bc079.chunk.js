(this.webpackJsonpatm=this.webpackJsonpatm||[]).push([[0],{18:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(11),r=n.n(a),s=(n(18),n(7)),o=n(0),j=function(e){var t=e.onChange,n=e.isDeposit,c=e.validTransaction;return console.log("ATM isDeposit: ".concat(n)),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("label",{children:[["Deposit","Withdraw"][Number(!n)],":",Object(o.jsx)("input",{id:"number-input",type:"number",onChange:t,style:{width:"5rem"},min:"0"})]}),Object(o.jsx)("hr",{}),Object(o.jsx)("input",{type:"submit",value:"Submit",id:"submit-input",disabled:!c})]})},l=n(8),u=function(e){var t=e.currentType,n=i.a.useState(0),c=Object(s.a)(n,2),a=c[0],r=c[1],u=i.a.useState(0),d=Object(s.a)(u,2),b=d[0],h=d[1],O=i.a.useState(!0),p=Object(s.a)(O,2),x=p[0],m=p[1],f=i.a.useState(""),g=Object(s.a)(f,2),v=g[0],T=g[1],y=i.a.useState(!1),w=Object(s.a)(y,2),C=w[0],D=w[1],S="".concat(t," Balance: ").concat(b," ");return Object(o.jsx)(l.a,{children:Object(o.jsx)(l.a.Body,{children:Object(o.jsxs)("form",{onSubmit:function(e){h(x?b+a:b-a),D(!1),e.preventDefault()},children:[Object(o.jsx)(l.a.Title,{id:"total",children:S}),Object(o.jsxs)(l.a.Text,{children:[Object(o.jsx)("label",{children:"Action:"}),Object(o.jsxs)("select",{onChange:function(e){return function(e){var t=e.target.value;T(t),"Deposit"===t?m(!0):"Withdraw"===t&&m(!1)}(e)},name:"mode",id:"mode-select",children:[Object(o.jsx)("option",{id:"no-selection",value:""}),Object(o.jsx)("option",{id:"deposit-selection",value:"Deposit",children:"Deposit"}),Object(o.jsx)("option",{id:"withdraw-selection",value:"Withdraw",children:"Withdraw"})]}),v&&Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(j,{onChange:function(e){var t=e.target.value;return console.log("handleChange ".concat(t)),r(Number(t)),t<=0||"Withdraw"===v&&t>b?void D(!1):void D(!0)},isDeposit:x,validTransaction:C})})]})]})})})},d=(n(20),n(12)),b=n(10),h=n(13),O=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(d.a,{fluid:!0,children:Object(o.jsxs)(b.a,{children:[Object(o.jsx)("h1",{children:"Crypto Bank"}),Object(o.jsx)("p",{children:"Welcome back, please enjoy that the features we have to offer to managing your profolio!"})]})}),Object(o.jsx)(b.a,{children:Object(o.jsxs)(h.a,{children:[Object(o.jsx)(u,{currentType:"US Dollar"}),Object(o.jsx)(u,{currentType:"BTC"}),Object(o.jsx)(u,{currentType:"ETH"}),Object(o.jsx)(u,{currentType:"XRP"})]})})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),p()}},[[21,1,2]]]);
//# sourceMappingURL=main.607bc079.chunk.js.map