(this["webpackJsonptodos-list"]=this["webpackJsonptodos-list"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(17),o=n.n(s),l=(n(25),n(11)),r=n(20),i=(n(26),n(8)),b=n(0);function d(e){return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(i.b,{to:"/",className:"navbar-brand",children:e.title}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{class:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{class:"nav-link",to:"/about",children:"About"})})]}),e.searchBar?Object(b.jsxs)("form",{className:"d-flex",children:[Object(b.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(b.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}):""]})]})})}d.defaultProps={title:"Your Title Here",searchBar:!0};var j=function(e){var t=e.todo,n=e.onDelete;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:t.title}),Object(b.jsx)("p",{children:t.desc}),Object(b.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){n(t)},children:"Delete"})]})},h=function(e){return Object(b.jsxs)("div",{className:"container",style:{minHeight:"70vh",margin:"50px auto"},children:[Object(b.jsx)("h3",{className:"my-3",children:"Todos List"}),0===e.todos.length?"No todos to display":e.todos.map((function(t){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j,{todo:t,onDelete:e.onDelete},t.sno)," ",Object(b.jsx)("hr",{})]})}))]})},u=function(){return Object(b.jsx)("footer",{className:"bg-dark text-light py-3",children:Object(b.jsx)("p",{className:"text-center",children:"Copyright \xa9 MyTodosList.com"})})},m=function(e){var t=e.addTodo,n=Object(c.useState)(""),a=Object(l.a)(n,2),s=a[0],o=a[1],r=Object(c.useState)(""),i=Object(l.a)(r,2),d=i[0],j=i[1];return Object(b.jsxs)("div",{className:"container my-3",children:[Object(b.jsx)("h3",{children:"Add a todo"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s&&d?(t(s,d),o(""),j("")):alert("Title or Description cannot be blank")},children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"title",className:"form-label",children:"Todo Title"}),Object(b.jsx)("input",{type:"text",value:s,onChange:function(e){o(e.target.value)},class:"form-control",id:"title","aria-describedby":"emailHelp"})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"desc",className:"form-label",children:"Todo Description"}),Object(b.jsx)("input",{type:"text",value:d,onChange:function(e){j(e.target.value)},class:"form-control",id:"desc"})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-sm btn-success",children:"Add Todo"})]})]})},O=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h2",{children:"About Todo List "}),Object(b.jsx)("p",{children:"It is basically an which helps you to note down the list the things you have to do and the things which has been done by you."})]})})},x=n(2);var g=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){console.log("I am ondelete of todo",e),j(o.filter((function(t){return t!==e}))),localStorage.setItem("todos",JSON.stringify(o))},n=function(e,t){var n;if(console.log("Adding this todo",e,t),0===o.length)n=0;else o[o.length-1].sno;var c={sno:n,title:e,desc:t};j([].concat(Object(r.a)(o),[c])),console.log(c)},a=Object(c.useState)(e),s=Object(l.a)(a,2),o=s[0],j=s[1];return Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(o))}),[o]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(d,{title:"My Todos List",searchBar:!1}),Object(b.jsxs)(x.c,{children:[Object(b.jsx)(x.a,{exact:!0,path:"/",render:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{addTodo:n}),Object(b.jsx)(h,{todos:o,onDelete:t})]})}}),Object(b.jsx)(x.a,{exact:!0,path:"/about",children:Object(b.jsx)(O,{})})]}),Object(b.jsx)(u,{})]})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),p()}},[[33,1,2]]]);
//# sourceMappingURL=main.0c7335c7.chunk.js.map