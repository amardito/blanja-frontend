(this["webpackJsonpblanja-frontend"]=this["webpackJsonpblanja-frontend"]||[]).push([[0],{25:function(e,t,s){},27:function(e,t,s){},28:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(1),n=s.n(c),r=s(18),i=s.n(r),l=(s(25),s(3)),o=s(4),j=s(6),d=s(5),m=s(7),b=s.n(m),u=s(8),h=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={background:[{backgroundColor:"#CC0B04"},{backgroundColor:"#1C3391"},{backgroundColor:"#F67B02"},{backgroundColor:"#E31F51"},{backgroundColor:"#57CD9E"}]},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this.props,t=e.title,s=e.categoryImg,c=e.backgroundIndex;return Object(a.jsx)("div",{className:"item",children:Object(a.jsxs)("div",{className:"item-category",style:this.state.background[c],children:[Object(a.jsx)("img",{src:s,alt:"category"}),Object(a.jsx)("p",{className:"item-text",children:t})]})})}}]),s}(c.Component),p=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this.props,t=e.title,s=e.price,c=e.ownerShop;return Object(a.jsx)("div",{className:"items",children:Object(a.jsxs)("div",{className:"item-card",children:[Object(a.jsx)("img",{className:"imgItem",src:"/assets/img/gez-xavier-mansfield-b34E1vh1tYU-unsplash 1.png",alt:"Men formal suit"}),Object(a.jsxs)("div",{className:"item-desc",children:[Object(a.jsx)("p",{className:"item-title",children:t}),Object(a.jsxs)("p",{className:"item-price",children:["IDR ",s]}),Object(a.jsx)("span",{children:c}),Object(a.jsx)("div",{className:"item-rate",children:Object(a.jsx)("img",{src:"/assets/icons/Rating 5 stars.svg",alt:"rating"})})]})]})})}}]),s}(c.Component),g=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this.props,t=e.title,s=e.price,c=e.ownerShop;return Object(a.jsx)("div",{className:"items",children:Object(a.jsxs)("div",{className:"item-card",children:[Object(a.jsx)("img",{className:"imgItem",src:"/assets/img/gez-xavier-mansfield-b34E1vh1tYU-unsplash 1.png",alt:"Men formal suit"}),Object(a.jsxs)("div",{className:"item-desc",children:[Object(a.jsx)("p",{className:"item-title",children:t}),Object(a.jsxs)("p",{className:"item-price",children:["IDR ",s]}),Object(a.jsx)("span",{children:c}),Object(a.jsx)("div",{className:"item-rate",children:Object(a.jsx)("img",{src:"/assets/icons/Rating 5 stars.svg",alt:"rating"})})]})]})})}}]),s}(c.Component),O=(s(27),function(){return Object(a.jsx)("nav",{children:Object(a.jsxs)("div",{className:"nav-container",children:[Object(a.jsx)("div",{className:"logo",children:Object(a.jsx)("img",{src:"/assets/icons/small logo.svg",alt:"iconBelanja"})}),Object(a.jsxs)("div",{className:"search-area",children:[Object(a.jsxs)("div",{className:"search-bar",children:[Object(a.jsx)("img",{src:"/assets/icons/Search.svg",alt:"searchIcon",className:"search-icon"}),Object(a.jsx)("input",{type:"text",name:"search",className:"search",placeholder:"Search"})]}),Object(a.jsx)("div",{className:"filter",children:Object(a.jsx)("img",{src:"/assets/icons/filter.svg",alt:"filterIcon",className:"filter-icon"})})]}),Object(a.jsxs)("div",{className:"nav-btn",children:[Object(a.jsx)("img",{src:"/assets/icons/shopping-cart.svg",alt:"cartIcon",className:"cart-icon"}),Object(a.jsxs)("div",{className:"btn-wrap",children:[Object(a.jsx)("input",{type:"button",value:"Login",className:"btn primary"}),Object(a.jsx)("input",{type:"button",value:"Signup",className:"btn secondary"})]})]}),Object(a.jsxs)("div",{className:"nav-menu",children:[Object(a.jsx)("button",{className:"btn primary",children:"Menu"}),Object(a.jsxs)("div",{className:"menu-list",children:[Object(a.jsxs)("div",{className:"menu",children:[Object(a.jsx)("img",{src:"/assets/icons/shopping-cart.svg",alt:"cartIcon",className:"cart-icon"}),Object(a.jsx)("p",{children:"My Cart"})]}),Object(a.jsxs)("div",{className:"menu",children:[Object(a.jsx)("input",{type:"button",value:"Login",className:"btn primary"}),Object(a.jsx)("input",{type:"button",value:"Signup",className:"btn secondary"})]})]})]})]})})}),x=(s(28),s(19)),v=s.n(x).a.create({baseURL:"http://localhost:1010/api/v1/"}),f=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={getDataPopular:[],getDataNew:[],getCategory:[]},e.getAllPopular=Object(u.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.get("products?sortby=popular&sort=DESC").then((function(t){var s=t.data;e.setState({getDataPopular:s.data})})).catch((function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)}))),e.getAllLatest=Object(u.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.get("products?sortby=latest&sort=DESC").then((function(t){var s=t.data;e.setState({getDataNew:s.data})})).catch((function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)}))),e.getAllCategory=Object(u.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.get("category").then((function(t){var s=t.data;e.setState({getCategory:s.data})})).catch((function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)}))),e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.getAllPopular(),this.getAllLatest(),this.getAllCategory()}},{key:"render",value:function(){var e,t,s,c=this.state,n=c.getDataNew,r=c.getCategory,i=c.getDataPopular;return s=function(){return[0,1,2,3,4].map((function(e){return Object(a.jsx)("div",{className:"items",children:Object(a.jsx)("div",{className:"item-card",style:{height:"250px"},children:Object(a.jsx)("img",{src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2F3aaadc45f4da67e52850a02aedf68040%2Ftenor.gif%3Fitemid%3D13427670&f=1&nofb=1",alt:"loading",className:"imgItem"})})})}))},t=n.length?function(){return n&&n.map((function(e){var t=e.id_product,s=e.product_name,c=e.product_price,n=e.product_by;return Object(a.jsx)(p,{title:s,price:c,ownerShop:n},t)}))}:s,e=i.length?function(){return i&&i.map((function(e){var t=e.id_product,s=e.product_name,c=e.product_price,n=e.product_by;return Object(a.jsx)(g,{title:s,price:c,ownerShop:n},t)}))}:s,Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(O,{}),Object(a.jsx)("main",{children:Object(a.jsxs)("div",{className:"main-container",children:[Object(a.jsx)("div",{className:"tags",children:Object(a.jsxs)("div",{className:"list",children:[Object(a.jsxs)("div",{className:"item-tags",children:[Object(a.jsx)("img",{src:"/assets/img/ian-dooley-10ca-K3e6Ko-unsplash 1.png",alt:"tags"}),Object(a.jsx)("p",{className:"item-text",children:"Black edition"})]}),Object(a.jsxs)("div",{className:"item-tags",children:[Object(a.jsx)("img",{src:"/assets/img/benjamin-voros-TnNo84AJJ5A-unsplash 1.png",alt:"tags"}),Object(a.jsx)("p",{className:"item-text",children:"Trends in 2020"})]}),Object(a.jsxs)("div",{className:"item-tags",children:[Object(a.jsx)("img",{src:"/assets/img/ian-dooley-10ca-K3e6Ko-unsplash 1.png",alt:"tags"}),Object(a.jsx)("p",{className:"item-text",children:"Black edition"})]}),Object(a.jsxs)("div",{className:"item-tags",children:[Object(a.jsx)("img",{src:"/assets/img/benjamin-voros-TnNo84AJJ5A-unsplash 1.png",alt:"tags"}),Object(a.jsx)("p",{className:"item-text",children:"Trends in 2020"})]})]})}),Object(a.jsxs)("div",{className:"category",children:[Object(a.jsxs)("div",{className:"head",children:[Object(a.jsx)("p",{children:"Category"}),Object(a.jsx)("span",{children:"What are you currently looking for"})]}),Object(a.jsx)("div",{className:"list",children:r&&r.map((function(e,t){var s=e.id_category,c=e.category_name,n=e.category_img;return Object(a.jsx)(h,{title:c,categoryImg:n,backgroundIndex:t},s)}))})]}),Object(a.jsxs)("div",{className:"new",children:[Object(a.jsxs)("div",{className:"head",children:[Object(a.jsx)("p",{children:"New"}),Object(a.jsx)("span",{children:"You've never seen it before!"})]}),Object(a.jsx)("div",{className:"flex-list",children:t()})]}),Object(a.jsxs)("div",{className:"popular",children:[Object(a.jsxs)("div",{className:"head",children:[Object(a.jsx)("p",{children:"Popular"}),Object(a.jsx)("span",{children:"Find clothes that are trending recently"})]}),Object(a.jsx)("div",{className:"flex-list",children:e()})]})]})})]})}}]),s}(c.Component),N=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(f,{})})}}]),s}(c.Component),y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,47)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),a(e),c(e),n(e),r(e)}))};i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),y()}},[[46,1,2]]]);
//# sourceMappingURL=main.abf5a5fa.chunk.js.map