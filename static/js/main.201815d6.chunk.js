(this["webpackJsonpbank-of-react"]=this["webpackJsonpbank-of-react"]||[]).push([[0],{22:function(t,e,n){},32:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n(1),c=n.n(s),i=n(23),r=n.n(i),o=(n(32),n(18)),l=n.n(o),d=n(24),u=n(14),b=n(4),j=n(5),h=n(7),m=n(6),p=n(8),O=n(2),x=(n(34),n(35),function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(b.a)(this,n),(a=e.call(this,t)).state={balance:a.props.accountBalance},a}return Object(j.a)(n,[{key:"render",value:function(){var t=parseFloat(this.state.balance);return Object(a.jsxs)("h3",{className:"balance",children:["Account Balance : $",t]})}}]),n}(s.Component)),f=function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(){return Object(b.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{id:"home",children:[Object(a.jsxs)("div",{id:"nav-bar",children:[Object(a.jsx)(p.b,{to:"/userProfile",style:{textDecoration:"none"},children:Object(a.jsx)("button",{children:"User Profile"})}),Object(a.jsx)(p.b,{to:"/login",style:{textDecoration:"none"},children:Object(a.jsx)("button",{children:"LogIn"})}),Object(a.jsx)(p.b,{to:"/debits",style:{textDecoration:"none"},children:Object(a.jsx)("button",{children:"Debits Page"})}),Object(a.jsx)(p.b,{to:"/Credits",style:{textDecoration:"none"},children:Object(a.jsx)("button",{children:"Credits Page"})})]}),Object(a.jsxs)("div",{id:"home-page",children:[Object(a.jsx)("img",{className:"bank-pic",src:"https://img.etimg.com/thumb/msid-71487585,width-300,imgsize-169788,,resizemode-4,quality-100/bank-getty.jpg",alt:"bank"}),Object(a.jsx)("h1",{children:"Welcome to Bank of React"}),Object(a.jsx)("br",{}),Object(a.jsxs)("h2",{className:"home-balance",children:["Account Balance: $",this.props.accountBalance.toFixed(2)]})]})]})}}]),n}(s.Component),v=(n(41),function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(){return Object(b.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{id:"user-profile",children:[Object(a.jsx)("button",{className:"back-home",children:Object(a.jsx)(p.b,{to:"/",style:{textDecoration:"none"},children:"Home Page"})}),Object(a.jsxs)("div",{id:"profile",children:[Object(a.jsx)("h1",{className:"user-profile",children:"User Profile"}),Object(a.jsx)("img",{className:"profile-pic",src:"https://www.pngfind.com/pngs/m/16-168465_aws-simple-icons-non-service-specific-user-default.png",alt:"user"}),Object(a.jsxs)("div",{className:"username",children:["Username: ",this.props.userName]}),Object(a.jsxs)("div",{className:"member",children:["Member Since: ",this.props.memberSince]})]})]})}}]),n}(s.Component)),A=(n(42),function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(){var t;return Object(b.a)(this,n),(t=e.call(this)).handleChange=function(e){var n=Object(u.a)({},t.state.user),a=e.target.name,s=e.target.value;n[a]=s,t.setState({user:n})},t.handleSubmit=function(e){e.preventDefault(),t.props.mockLogIn(t.state.user),t.setState({redirect:!0})},t.state={user:{userName:"",password:""},redirect:!1},t}return Object(j.a)(n,[{key:"render",value:function(){return this.state.redirect?Object(a.jsx)(O.a,{to:"/userProfile"}):Object(a.jsxs)("div",{id:"login-page",children:[Object(a.jsx)(p.b,{to:"/",style:{textDecoration:"none"},children:Object(a.jsx)("button",{className:"back-home",children:"Home Page"})}),Object(a.jsx)("div",{id:"form",children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"userName",children:"User Name : "}),Object(a.jsx)("input",{type:"text",name:"userName",onChange:this.handleChange,value:this.state.user.userName})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"password",children:"Password : "}),Object(a.jsx)("input",{type:"password",name:"password"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("center",{children:Object(a.jsx)("button",{children:"Log In"})})]})})]})}}]),n}(s.Component)),k=(n(43),function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(){return Object(b.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{id:"debit-card",children:[Object(a.jsxs)("h3",{children:["Description: ",this.props.description]}),Object(a.jsxs)("h3",{children:["Amount: $",this.props.amount]}),Object(a.jsxs)("h3",{children:["Date: ",this.props.date]})]})}}]),n}(s.Component)),C=function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(b.a)(this,n),(a=e.call(this,t)).setBalance=function(){var t=a.props.creditAmount;return a.setState({totalBalance:parseFloat(t-a.state.debitAmount)})},a.handleSubmit=function(){Number(a.formAmount.current.value);var t=parseFloat(a.formAmount.current.value),e={id:a.formDescription.current.value+a.formAmount.current.value+a.formDate.current.value+100*Math.random(),description:a.formDescription.current.value,amount:t,date:a.formDate.current.value},n=a.props.debits;n.push(e);var s=parseFloat(a.state.debitAmount+t);a.setState({debitAmount:s,debit:n}),console.log(a.state.debitAmount),console.log(t),a.props.debitCallBack(t)},a.viewBalance=function(){a.setState({display:!a.state.display,addDebit:!1})},a.handleCancel=function(){a.setState({addDebit:!1})},a.state={display:!1,displayDebit:!1,addDebit:!1,totalBalance:a.props.totalAmount,creditAmount:a.props.creditAmount,debitAmount:a.props.amount,debit:a.props.debits},a.formDescription=c.a.createRef(),a.formAmount=c.a.createRef(),a.formDate=c.a.createRef(),a}return Object(j.a)(n,[{key:"render",value:function(){var t=this,e=parseFloat(this.state.totalBalance),n=Object(a.jsx)("div",{id:"debit-cards",children:this.state.debit.map((function(t){return Object(a.jsx)(k,{description:t.description,amount:t.amount,date:t.date},t.id)}))});return Object(a.jsxs)("div",{id:"debits-page",children:[Object(a.jsxs)("div",{className:"btn",children:[Object(a.jsx)(p.b,{to:"/",style:{textDecoration:"none"},children:Object(a.jsx)("button",{className:"return-home",children:"Home Page"})}),Object(a.jsx)("button",{className:"return-home",style:{textDecoration:"none"},onClick:function(e){return t.setState({displayDebit:!t.state.displayDebit})},children:"Display Debit"}),Object(a.jsx)("button",{className:"balanceBtn",onClick:this.viewBalance,children:"View Balance"}),Object(a.jsx)("button",{className:"addBtn",onClick:function(e){return t.setState({addDebit:!t.state.addDebit,display:!1})},children:"Add Debit"}),this.state.display&&(this.state.totalBalance?Object(a.jsx)(x,{accountBalance:e.toFixed(2)}):Object(a.jsx)("h3",{children:"LOADING"})),this.state.addDebit&&Object(a.jsxs)("div",{id:"debit-form",children:[Object(a.jsxs)("form",{children:[Object(a.jsxs)("label",{id:"debit-desription",children:["Description:",Object(a.jsx)("input",{type:"text",name:"formDescription",placeholder:"Starbucks",ref:this.formDescription})]}),Object(a.jsxs)("label",{id:"debit-desription",children:["Amount:",Object(a.jsx)("input",{type:"number",name:"formAmount",placeholder:100.15,ref:this.formAmount})]}),Object(a.jsxs)("label",{id:"debit-desription",children:["Date:",Object(a.jsx)("input",{type:"text",name:"formDate",placeholder:"2021-01-12",ref:this.formDate})]})]}),Object(a.jsx)("button",{className:"submit-btn",onClick:this.handleSubmit,children:"Submit"}),Object(a.jsx)("button",{className:"cancel-btn",onClick:this.handleCancel,children:"Cancel"})]})]}),Object(a.jsx)("br",{}),Object(a.jsx)("h1",{children:this.props.message}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),this.state.displayDebit&&n]})}}]),n}(s.Component),D=(n(44),n(15)),y=n(26),g=(n(22),function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(){return Object(b.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{id:"display",children:["Description: ",this.props.description,Object(a.jsx)("br",{}),"Amount: $",this.props.amount," ",Object(a.jsx)("br",{}),"Date: ",this.props.date]})}}]),n}(s.Component)),S=function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(b.a)(this,n),(a=e.call(this,t)).handleSubmit=function(){Number(a.formAmount.current.value);var t=parseFloat(a.formAmount.current.value),e=new Date,n={id:a.formDescription.current.value+a.formAmount.current.value+100*Math.random(),description:a.formDescription.current.value,amount:t,date:e.toString()},s=a.props.credits;s=[].concat(Object(y.a)(s),[n]),a.setState({balance:a.state.balance+t,credits:s,isDisplay:!1,balanceisCheck:!1,isAdded:!1,showoption:!a.state.showoption}),a.props.creditCallBack(t)},a.changeHendler=function(t){a.setState(Object(D.a)({},t.target.name,t.target.value))},a.handleCancel=function(){a.setState({isDisplay:!1,balanceisCheck:!1,isAdded:!1,showoption:!a.state.showoption})},a.state={credits:t.credits,showoption:!1,balance:t.balance,totalBalance:t.totalAmount,isDisplay:!1,balanceisCheck:!1,isAdded:!1,description:"",amount:0},a.formDescription=c.a.createRef(),a.formAmount=c.a.createRef(),a.formDate=c.a.createRef(),a}return Object(j.a)(n,[{key:"handleDisplaye",value:function(){this.setState({isAdded:!1,balanceisCheck:!1,isDisplay:!this.state.isDisplay})}},{key:"handlebalanceCheck",value:function(){this.setState({isAdded:!1,balanceisCheck:!this.state.balanceisCheck,isDisplay:!1}),console.log(this.state.totalBalance)}},{key:"handleAddcredit",value:function(){this.setState({isDisplay:!1,balanceisCheck:!1,isAdded:!this.state.isAdded})}},{key:"render",value:function(){var t=this,e=Object(a.jsx)("div",{id:"balance",children:Object(a.jsxs)("h3",{className:"account-balance",children:["Account Balance: $ ",this.state.totalBalance.toFixed(2)]})}),n=Object(a.jsx)("div",{children:this.state.credits.map((function(t){return Object(a.jsx)(g,{description:t.description,amount:t.amount,date:t.date},t.id)}))});return this.state.isAdded?Object(a.jsx)("div",{className:"homepagecontener",children:Object(a.jsxs)("div",{className:"form",children:[Object(a.jsxs)("form",{children:[Object(a.jsxs)("label",{children:["Description:   ",Object(a.jsx)("input",{type:"text",name:"formDescription",placeholder:"student Loan",ref:this.formDescription,required:!0})]})," ",Object(a.jsx)("br",{}),Object(a.jsxs)("label",{id:"debit-desription",children:["Amount : ",Object(a.jsx)("input",{type:"number",name:"formAmount",placeholder:1e4,ref:this.formAmount,required:!0})]})]}),Object(a.jsx)("button",{type:"submit",onClick:this.handleSubmit,children:"Submit"}),Object(a.jsx)("button",{onClick:this.handleCancel,children:"Cancel"})]})}):Object(a.jsx)("div",{className:"homepagecontener",children:Object(a.jsxs)("div",{id:"creditpage",children:[Object(a.jsxs)("div",{id:"creditfirstdiv",children:[Object(a.jsxs)(p.b,{to:"/",children:[" ",Object(a.jsx)("br",{})," ",Object(a.jsx)("button",{className:"home-Btn",children:"Home Page"})]}),Object(a.jsx)("h1",{children:" This is the Credit Page"})]}),Object(a.jsxs)("div",{id:"creditsecanddiv",children:[Object(a.jsxs)("center",{children:[Object(a.jsx)("button",{onClick:function(){return t.handlebalanceCheck()},children:" Check Your Balance"}),Object(a.jsx)("button",{onClick:function(){return t.handleDisplaye()},children:" Display Credit"}),Object(a.jsx)("button",{onClick:function(){return t.handleAddcredit()},children:" AddCredit"})]}),this.state.balanceisCheck&&e,Object(a.jsx)("center",{children:this.state.isDisplay&&n})]})]})})}}]),n}(s.Component),B=function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(){var t;return Object(b.a)(this,n),(t=e.call(this)).debitCallBack=function(e){var n=parseFloat(t.state.totalAmount-e);t.setState({totalAmount:n},(function(){return console.log(t.state.totalAmount)})),t.setState({debitAmount:t.state.debitAmount+e}),console.log("it is working "+t.state.totalAmount)},t.creditCallBack=function(e){var n=parseFloat(t.state.totalAmount+e);t.setState({CreditAmount:t.state.CreditAmount+e.value}),t.setState({totalAmount:n},(function(){return console.log(t.state.totalAmount)}))},t.mockLogIn=function(e){var n=Object(u.a)({},t.state.currentUser);n.userName=e.userName,t.setState({currentUser:n})},t.state={currentUser:{userName:"John_Doe",memberSince:"08/23/99"},debit:[],debitAmount:0,credit:[],CreditAmount:0,totalAmount:0},t}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var t=Object(d.a)(l.a.mark((function t(){var e,n,a,s,c,i=this;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,"https://moj-api.herokuapp.com/debits",e="https://moj-api.herokuapp.com/credits",t.next=5,fetch("https://moj-api.herokuapp.com/debits");case 5:return n=t.sent,t.next=8,fetch(e);case 8:return a=t.sent,t.next=11,n.json();case 11:return s=t.sent,t.next=14,a.json();case 14:c=t.sent,this.setState({debit:s,credit:c}),this.state.debit.map((function(t){i.setState({debitAmount:i.state.debitAmount+t.amount,totalAmount:i.state.totalAmount-t.amount})})),this.state.credit.map((function(t){i.setState({CreditAmount:i.state.CreditAmount+t.amount,totalAmount:i.state.totalAmount+t.amount})})),parseFloat(this.state.CreditAmount),parseFloat(this.state.debitAmount),t.next=25;break;case 22:t.prev=22,t.t0=t.catch(0),console.error(t.t0);case 25:case"end":return t.stop()}}),t,this,[[0,22]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(a.jsx)(p.a,{basename:"/TTP-Bank-of-React-Assignment/",children:Object(a.jsxs)(O.d,{children:[Object(a.jsx)(O.b,{exact:!0,path:"/",children:Object(a.jsx)(f,{accountBalance:this.state.totalAmount})}),Object(a.jsx)(O.b,{exact:!0,path:"/userProfile",children:Object(a.jsx)(v,{userName:this.state.currentUser.userName,memberSince:this.state.currentUser.memberSince})}),Object(a.jsx)(O.b,{exact:!0,path:"/login",children:Object(a.jsx)(A,Object(u.a)({user:this.state.currentUser,mockLogIn:this.mockLogIn},this.props))}),Object(a.jsx)(O.b,{exact:!0,path:"/debits",children:Object(a.jsx)(C,{debits:this.state.debit,amount:this.state.debitAmount,debitCallBack:this.debitCallBack,totalAmount:this.state.totalAmount})}),Object(a.jsx)(O.b,{path:"/Credits",render:function(){return Object(a.jsx)(S,{credits:t.state.credit,creditAmount:t.state.CreditAmount,balance:t.state.accountBalance,creditCallBack:t.creditCallBack,totalAmount:t.state.totalAmount})}})]})})}}]),n}(s.Component),N=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),s(t),c(t),i(t)}))};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(B,{})}),document.getElementById("root")),N()}},[[45,1,2]]]);
//# sourceMappingURL=main.201815d6.chunk.js.map