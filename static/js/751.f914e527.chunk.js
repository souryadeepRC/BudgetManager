"use strict";(self.webpackChunkmanage_budget=self.webpackChunkmanage_budget||[]).push([[751],{7751:function(e,r,t){t.r(r);var n=t(8214),a=t(5861),u=t(885),c=t(2791),s=t(4434),o=t(4349),i=t(1224),l=t(3559),p=t(8502),f=t(6926),d=t(184),h=function(e){return""!==e},m=function(e){return""!==e&&!/\s/.test(e)},b=function(e){return/^[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,}$/.test(e)},v=function(e){return/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(e)},_="https://managebudget-12b75-default-rtdb.firebaseio.com/users.json",x={label:"Full Name",input:{type:"text",placeholder:"Full Name"},ErrorMsg:"Enter full name"},Z={label:"Username",labelInfo:"No White Space Required",input:{type:"text",placeholder:"Username"},ErrorMsg:"Enter username without any space"},g={label:"Email",input:{type:"email",placeholder:"Email Address"},ErrorMsg:"Enter an email"},y={label:"Password",labelInfo:"At least a number, a special character, length between 6 to 16",input:{type:"password",placeholder:"Password"},ErrorMsg:"Must contain 8-15 characters"};r.default=function(e){document.title="Budget Manager | Register";var r=(0,c.useContext)(i.Z),t=(0,s.Z)(),w=t.isLoading,j=t.fetchUserData,k=t.addUser,O=(0,c.useState)(""),E=(0,u.Z)(O,2),P=E[0],N=E[1],S=(0,o.Z)(h),D=(0,o.Z)(m),T=(0,o.Z)(b),U=(0,o.Z)(v),I=[{id:1,static:x,action:S},{id:2,static:Z,action:D},{id:3,static:g,action:T},{id:4,static:y,action:U}],R=I.reduce((function(e,r){return e&&r.action.isValidData}),!0),C=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var a,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,j(_,{});case 3:if(null!==(a=e.sent)){e.next=8;break}N("Please Try after some time. Some Problem Occured !"),e.next=18;break;case 8:if(!a.find((function(e){return e.email===T.value}))){e.next=13;break}N("Already Exists! Please choose different Email Address"),e.next=18;break;case 13:return u={id:a.length+1,username:D.value,fullName:S.value,email:T.value,password:U.value},e.next=16,k(_,{method:"POST",body:u});case 16:e.sent?r.onLogin(u):N("Please Try after some time. Some Problem Occured !");case 18:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,d.jsxs)("form",{onSubmit:C,children:[w&&(0,d.jsx)(l.Z,{}),(0,d.jsx)("h1",{className:p.Z.form__header,children:"Register"}),""!==P&&(0,d.jsx)("h6",{className:p.Z.form__wrong_credential,children:P}),(0,d.jsx)(f.Z,{className:p.Z.form__content,fieldList:I}),(0,d.jsxs)("div",{className:p.Z.form__btn_container,children:[(0,d.jsx)("button",{type:"submit",disabled:!R,children:"Register"}),(0,d.jsx)("button",{onClick:e.onHide,children:"Cancel"})]})]})}},6926:function(e,r,t){function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}t.d(r,{Z:function(){return l}});var c="Input_input__box__wgLG9",s="Input_input__error_message__GrIFm",o=t(184),i=function(e){return(0,o.jsxs)("div",{className:c,children:[(0,o.jsxs)("label",{children:[e.label," ",e.labelInfo?(0,o.jsx)("span",{children:e.labelInfo}):""]}),(0,o.jsx)("input",u({},e.input)),e.isValidInput&&(0,o.jsx)("p",{className:s,children:e.errorMessage})]})},l=function(e){return(0,o.jsx)("div",{className:e.className,children:e.fieldList.map((function(e){return(0,o.jsx)(i,{label:e.static.label,labelInfo:e.static.labelInfo,input:u(u({},e.static.input),{},{value:e.action.value,onChange:e.action.onChangeHandler,onBlur:e.action.onBlurHandler}),errorMessage:e.static.ErrorMsg,isValidInput:e.action.hasError},e.id)}))})}},4434:function(e,r,t){var n=t(8214),a=t(5861),u=t(885),c=t(2791);r.Z=function(){var e=(0,c.useState)(!1),r=(0,u.Z)(e,2),t=r[0],s=r[1],o=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=[],null!=r)for(a in r)t.push({id:r[a].id,email:r[a].email,password:r[a].password,username:r[a].username,fullName:r[a].fullName});return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=[],null!=r)for(a in r)t.push({description:r[a].description,category:r[a].category,amount:r[a].amount,date:new Date(r[a].date),month:new Date(r[a].date).toLocaleDateString("en-US",{month:"long"}),year:new Date(r[a].date).toLocaleDateString("en-US",{year:"numeric"})});return e.abrupt("return",t.sort((function(e,r){return e.date-r.date})));case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,e.next=4,fetch(r,{method:t?t.method:"GET",body:t?JSON.stringify(t.body):null,headers:{"Content-Type":"application/json"}});case 4:return a=e.sent,e.next=7,a.json();case 7:return u=e.sent,s(!1),e.abrupt("return",u);case 12:throw e.prev=12,e.t0=e.catch(1),new Error("Some Problem Occured!");case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(r,t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l(r,{});case 3:return t=e.sent,e.next=6,o(t);case 6:return a=e.sent,s(!1),e.abrupt("return",a);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:return s(!1),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l(r,{});case 3:return a=e.sent,e.next=6,o(a);case 6:return u=e.sent,s(!1),e.abrupt("return",u.find((function(e){return e.email===t})));case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:return s(!1),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(r,t){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r,t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l(r,t);case 3:if(!e.sent){e.next=7;break}return s(!1),e.abrupt("return",!0);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:return s(!1),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r,t){return e.apply(this,arguments)}}(),h=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l(r,{});case 3:return a=e.sent,e.next=6,o(a);case 6:return u=e.sent,s(!1),e.abrupt("return",u.find((function(e){return e.id===t})));case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:return s(!1),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(r,t){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r,t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l(r,t);case 3:if(!e.sent){e.next=7;break}return s(!1),e.abrupt("return",!0);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:return s(!1),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r,t){return e.apply(this,arguments)}}(),b=(0,c.useCallback)(function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,e.next=4,l(r,{});case 4:return t=e.sent,e.next=7,i(t);case 7:return a=e.sent,s(!1),e.abrupt("return",a);case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:return s(!1),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(r){return e.apply(this,arguments)}}(),[]);return{isLoading:t,fetchUserData:p,checkUserExistance:f,addUser:d,fetchUser:h,addExpense:m,fetchExpense:b}}},4349:function(e,r,t){var n=t(885),a=t(2791),u={value:"",isTouched:!1},c=function(e,r){return"INPUT"===r.type?{value:r.value,isTouched:e.isTouched}:"BLUR"===r.type?{value:e.value,isTouched:!0}:(r.type,u)};r.Z=function(e){var r=(0,a.useReducer)(c,u),t=(0,n.Z)(r,2),s=t[0],o=t[1],i=e(s.value),l=!i&&s.isTouched;return{value:s.value,isValidData:i,hasError:l,isTouched:s.isTouched,onChangeHandler:function(e){o({type:"INPUT",value:e.target.value})},onBlurHandler:function(){o({type:"BLUR"})},onResetHandler:function(){o({type:"RESET"})}}}},8502:function(e,r){r.Z={form__header:"Form_form__header__7JRkl",form__wrong_credential:"Form_form__wrong_credential__Dyhqe",form__content:"Form_form__content__+OQfR",form__btn_container:"Form_form__btn_container__296R0"}}}]);
//# sourceMappingURL=751.f914e527.chunk.js.map