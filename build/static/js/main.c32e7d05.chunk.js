(this["webpackJsonpblanja-frontend"]=this["webpackJsonpblanja-frontend"]||[]).push([[0],{35:function(e,t,s){},44:function(e,t,s){},47:function(e,t,s){},65:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(1),n=s.n(a),i=s(36),r=s.n(i),l=(s(44),s(16)),o=s(4),d=s(11),j=s.n(d),h=s(17),b=s(5),m=s(6),u=s(8),p=s(7),x=function(e){Object(u.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(b.a)(this,s);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={background:[{backgroundColor:"#CC0B04"},{backgroundColor:"#1C3391"},{backgroundColor:"#F67B02"},{backgroundColor:"#E31F51"},{backgroundColor:"#57CD9E"}]},e}return Object(m.a)(s,[{key:"render",value:function(){var e=this.props,t=e.title,s=e.categoryImg,a=e.backgroundIndex;return Object(c.jsx)("div",{className:"item",children:Object(c.jsxs)("div",{className:"item-category",style:this.state.background[a],children:[Object(c.jsx)("img",{src:s,alt:"category"}),Object(c.jsx)("p",{className:"item-text",children:t})]})})}}]),s}(a.Component),O=function(e){Object(u.a)(s,e);var t=Object(p.a)(s);function s(){return Object(b.a)(this,s),t.apply(this,arguments)}return Object(m.a)(s,[{key:"render",value:function(){var e=this.props,t=e.title,s=e.price,a=e.ownerShop,n=e.sold;return Object(c.jsxs)("div",{className:"item-card",children:[Object(c.jsx)("img",{className:"imgItem",src:"/assets/img/gez-xavier-mansfield-b34E1vh1tYU-unsplash 1.png",alt:"Men formal suit"}),Object(c.jsxs)("div",{className:"item-desc",children:[Object(c.jsx)("p",{className:"item-title",children:t}),Object(c.jsxs)("p",{className:"item-price",children:["IDR ",s]}),Object(c.jsx)("p",{className:"item-shop",children:a}),Object(c.jsxs)("div",{className:"item-rate",children:[Object(c.jsx)("img",{src:"/assets/icons/Rating 5 stars.svg",alt:"rating"}),Object(c.jsxs)("span",{children:["(",n,")"]})]})]})]})}}]),s}(a.Component),g=function(e){Object(u.a)(s,e);var t=Object(p.a)(s);function s(){return Object(b.a)(this,s),t.apply(this,arguments)}return Object(m.a)(s,[{key:"render",value:function(){var e=this.props,t=e.title,s=e.price,a=e.ownerShop,n=e.sold;return Object(c.jsxs)("div",{className:"item-card",children:[Object(c.jsx)("img",{className:"imgItem",src:"/assets/img/gez-xavier-mansfield-b34E1vh1tYU-unsplash 1.png",alt:"Men formal suit"}),Object(c.jsxs)("div",{className:"item-desc",children:[Object(c.jsx)("p",{className:"item-title",children:t}),Object(c.jsxs)("p",{className:"item-price",children:["IDR ",s]}),Object(c.jsx)("p",{className:"item-shop",children:a}),Object(c.jsxs)("div",{className:"item-rate",children:[Object(c.jsx)("img",{src:"/assets/icons/Rating 5 stars.svg",alt:"rating"}),Object(c.jsxs)("span",{children:["(",n,")"]})]})]})]})}}]),s}(a.Component),v=s(75),N=s(74),f=(s(46),s(47),s(18)),y=s.n(f),k=y.a.create({baseURL:"http://localhost:1010/api/v1/"}),w=function(e){Object(u.a)(s,e);var t=Object(p.a)(s);function s(e){var c;return Object(b.a)(this,s),(c=t.call(this,e)).getAllCategory=Object(h.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get("category").then((function(e){var t=e.data;c.setState({getCategory:t.data})})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)}))),c.state={getCategory:[]},c}return Object(m.a)(s,[{key:"componentDidMount",value:function(){this.getAllCategory()}},{key:"render",value:function(){var e=this.state.getCategory,t=this.props,s=t.hidden,a=t.urlCategory;return Object(c.jsxs)("div",{className:"wrap",children:[Object(c.jsx)("div",{className:"outer",onClick:s}),Object(c.jsx)("div",{className:"filterMenu",children:Object(c.jsxs)(v.a,{style:{maxWidth:"450px"},children:[Object(c.jsxs)(v.a.Header,{className:"d-flex flex-row align-items-center",children:[Object(c.jsx)("button",{type:"button",className:"close pb-1","aria-label":"Close",onClick:s,children:Object(c.jsx)("h1",{children:"\xd7"})}),Object(c.jsx)("h2",{className:"pl-3",children:"Filter"})]}),Object(c.jsx)(v.a.Body,{children:Object(c.jsx)(N.a,{variant:"flush",children:Object(c.jsxs)(N.a.Item,{children:[Object(c.jsx)("h3",{children:"Category"}),Object(c.jsx)("div",{className:"d-flex flex-wrap",children:e&&e.map((function(e){var t=e.id_category,s=e.category_name;return Object(c.jsx)("div",{className:"col-sm-4 col-6 pr-2 pl-2",children:Object(c.jsx)("div",{className:"btn-group mr-2",role:"group",children:Object(c.jsx)("button",{type:"button",className:"btnn btn-outline-danger mt-4",style:{border:"2px solid #DB3022"},onClick:function(e){a(s)},children:s})})},t)}))})]})})})]})})]})}}]),s}(a.Component),C=(s(65),function(e){Object(u.a)(s,e);var t=Object(p.a)(s);function s(){var e;return Object(b.a)(this,s),(e=t.call(this)).toggleLogin=function(){e.setState({navMenu:function(){return Object(c.jsx)("div",{className:"btn-wrap",style:{width:"auto"},children:Object(c.jsx)("img",{src:"/assets/img/christian-buehner-DItYlc26zVI-unsplash 1.png",alt:"profile"})})}})},e.toggleHidden=function(){e.setState({isHidden:!e.state.isHidden})},e.toggleCategory=function(t){var s=e.props.prophistory.location.search,c=new URLSearchParams(s).get("name");null===c?(e.props.prophistory.history.push({pathname:"/search",search:"?category=".concat(t)}),window.location.href="/search?category=".concat(t)):(e.props.prophistory.history.push({pathname:"/search",search:"?name=".concat(c,"&category=").concat(t)}),window.location.href="/search?name=".concat(c,"&category=").concat(t))},e.state={isHidden:!0,navMenu:function(){return Object(c.jsxs)("div",{className:"btn-wrap",children:[Object(c.jsx)("input",{type:"button",value:"Login",className:"btnn primary",onClick:e.toggleLogin}),Object(c.jsx)("input",{type:"button",value:"Signup",className:"btnn secondary"})]})},handleSearch:""},e}return Object(m.a)(s,[{key:"render",value:function(){var e=this;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("nav",{children:Object(c.jsxs)("div",{className:"nav-container",children:[Object(c.jsx)("div",{className:"logo",children:Object(c.jsx)(l.b,{to:{pathname:"/"},children:Object(c.jsx)("img",{src:"/assets/icons/small logo.svg",alt:"iconBelanja"})})}),Object(c.jsxs)("div",{className:"search-area",children:[Object(c.jsxs)("div",{className:"search-bar",children:[Object(c.jsx)("img",{src:"/assets/icons/Search.svg",alt:"searchIcon",className:"search-icon"}),Object(c.jsx)("input",{type:"text",name:"search",className:"search",placeholder:"Search",onKeyPress:function(t){"Enter"===t.key&&(e.props.prophistory.history.push({pathname:"/search",search:"?name=".concat(e.state.handleSearch)}),window.location.href="/search?name=".concat(e.state.handleSearch))},onChange:function(t){""!==t.target.falue&&e.setState({handleSearch:t.target.value})}})]}),Object(c.jsx)("button",{className:"filter",onClick:this.toggleHidden,children:Object(c.jsx)("img",{src:"/assets/icons/filter.svg",alt:"filterIcon",className:"filter-icon"})})]}),Object(c.jsxs)("div",{className:"nav-btn",children:[Object(c.jsx)("img",{src:"/assets/icons/shopping-cart.svg",alt:"cartIcon",className:"cart-icon"}),Object(c.jsx)(this.state.navMenu,{})]}),Object(c.jsxs)("div",{className:"nav-menu",children:[Object(c.jsx)("button",{className:"btnn primary",children:"Menu"}),Object(c.jsxs)("div",{className:"menu-list",children:[Object(c.jsxs)("div",{className:"menu",children:[Object(c.jsx)("img",{src:"/assets/icons/shopping-cart.svg",alt:"cartIcon",className:"cart-icon"}),Object(c.jsx)("p",{children:"My Cart"})]}),Object(c.jsxs)("div",{className:"menu",children:[Object(c.jsx)("input",{type:"button",value:"Login",className:"btnn primary"}),Object(c.jsx)("input",{type:"button",value:"Signup",className:"btnn secondary"})]})]})]})]})}),!this.state.isHidden&&Object(c.jsx)(w,{hidden:this.toggleHidden,urlCategory:this.toggleCategory})]})}}]),s}(a.Component)),_=(s(35),y.a.create({baseURL:"http://localhost:1010/api/v1/"})),D=function(e){Object(u.a)(s,e);var t=Object(p.a)(s);function s(){var e;return Object(b.a)(this,s),(e=t.call(this)).getAllPopular=Object(h.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.get("products?sortby=popular&sort=DESC").then((function(t){var s=t.data;e.setState({getDataPopular:s.data})})).catch((function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)}))),e.getAllLatest=Object(h.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.get("products?sortby=latest&sort=DESC").then((function(t){var s=t.data;e.setState({getDataNew:s.data})})).catch((function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)}))),e.getAllCategory=Object(h.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.get("category").then((function(t){var s=t.data;e.setState({getCategory:s.data})})).catch((function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)}))),e.state={getDataPopular:[],getDataNew:[],getCategory:[]},e}return Object(m.a)(s,[{key:"componentDidMount",value:function(){this.getAllPopular(),this.getAllLatest(),this.getAllCategory()}},{key:"render",value:function(){console.log("test duplicate");var e,t,s,a=this.state,n=a.getDataNew,i=a.getCategory,r=a.getDataPopular;return s=function(){return[0,1,2,3,4].map((function(e){return Object(c.jsx)("div",{className:"items",children:Object(c.jsx)("div",{className:"item-card",style:{height:"250px"},children:Object(c.jsx)("img",{src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2F3aaadc45f4da67e52850a02aedf68040%2Ftenor.gif%3Fitemid%3D13427670&f=1&nofb=1",alt:"loading",className:"imgItem"})})},e)}))},t=n.length?function(){return n&&n.map((function(e){var t=e.id_product,s=e.product_name,a=e.product_price,n=e.product_by,i=e.product_sold;return Object(c.jsx)(l.b,{className:"items",to:{pathname:"/product/".concat(t),state:{id_product:t}},children:Object(c.jsx)(O,{title:s,price:a,ownerShop:n,sold:i})},t)}))}:s,e=r.length?function(){return r&&r.map((function(e){var t=e.id_product,s=e.product_name,a=e.product_price,n=e.product_by,i=e.product_sold;return Object(c.jsx)(l.b,{className:"items",to:{pathname:"/product/".concat(t),state:{id_product:t}},children:Object(c.jsx)(g,{title:s,price:a,ownerShop:n,sold:i})},t)}))}:s,Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(C,{prophistory:this.props}),Object(c.jsx)("main",{children:Object(c.jsxs)("div",{className:"main-container",children:[Object(c.jsx)("div",{className:"tags",children:Object(c.jsxs)("div",{className:"list",children:[Object(c.jsxs)("div",{className:"item-tags",children:[Object(c.jsx)("img",{src:"/assets/img/ian-dooley-10ca-K3e6Ko-unsplash 1.png",alt:"tags"}),Object(c.jsx)("p",{className:"item-text",children:"Black edition"})]}),Object(c.jsxs)("div",{className:"item-tags",children:[Object(c.jsx)("img",{src:"/assets/img/benjamin-voros-TnNo84AJJ5A-unsplash 1.png",alt:"tags"}),Object(c.jsx)("p",{className:"item-text",children:"Trends in 2020"})]}),Object(c.jsxs)("div",{className:"item-tags",children:[Object(c.jsx)("img",{src:"/assets/img/ian-dooley-10ca-K3e6Ko-unsplash 1.png",alt:"tags"}),Object(c.jsx)("p",{className:"item-text",children:"Black edition"})]}),Object(c.jsxs)("div",{className:"item-tags",children:[Object(c.jsx)("img",{src:"/assets/img/benjamin-voros-TnNo84AJJ5A-unsplash 1.png",alt:"tags"}),Object(c.jsx)("p",{className:"item-text",children:"Trends in 2020"})]})]})}),Object(c.jsxs)("div",{className:"category",children:[Object(c.jsxs)("div",{className:"head",children:[Object(c.jsx)("p",{children:"Category"}),Object(c.jsx)("span",{children:"What are you currently looking for"})]}),Object(c.jsx)("div",{className:"list",children:i&&i.map((function(e,t){var s=e.id_category,a=e.category_name,n=e.category_img;return Object(c.jsx)(x,{title:a,categoryImg:n,backgroundIndex:t},s)}))})]}),Object(c.jsxs)("div",{className:"new",children:[Object(c.jsxs)("div",{className:"head",children:[Object(c.jsx)("p",{children:"New"}),Object(c.jsx)("span",{children:"You've never seen it before!"})]}),Object(c.jsx)("div",{className:"flex-list",children:t()})]}),Object(c.jsxs)("div",{className:"popular",children:[Object(c.jsxs)("div",{className:"head",children:[Object(c.jsx)("p",{children:"Popular"}),Object(c.jsx)("span",{children:"Find clothes that are trending recently"})]}),Object(c.jsx)("div",{className:"flex-list",children:e()})]})]})})]})}}]),s}(a.Component),S=s(73),P=(s(71),y.a.create({baseURL:"http://localhost:1010/api/v1/"})),B=function(e){Object(u.a)(s,e);var t=Object(p.a)(s);function s(){var e;return Object(b.a)(this,s),(e=t.call(this)).getProduct=Object(h.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.get(e.props.location.pathname).then((function(t){var s=t.data;e.setState({getData:s})})).catch((function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)}))),e.deleteProduct=Object(h.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.delete("product/delete/".concat(e.state.getData.id_product));case 2:case"end":return t.stop()}}),t)}))),e.componentDidMount=function(){e.getProduct()},e.state={getData:{}},e}return Object(m.a)(s,[{key:"refreshPage",value:function(){window.location.href="http://192.168.1.6:3000/"}},{key:"render",value:function(){var e=this,t=this.state.getData;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(C,{prophistory:this.props}),Object(c.jsx)("main",{children:Object(c.jsxs)(S.a,{className:"main",children:[Object(c.jsxs)("p",{className:"font-p-title",children:["Home ",">"," category ",">"," ",Object(c.jsx)("b",{children:t.category_name})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-sm-4",children:[Object(c.jsx)("img",{src:"https://res.cloudinary.com/devloops7/image/upload/v1606663570/newBlanja/T-shirt_ikcavv.png",alt:"img",className:"rounded img-fluid"}),Object(c.jsx)("div",{className:"mt-3 more-images",children:Object(c.jsxs)("ul",{className:"horizontal-list",children:[Object(c.jsx)("li",{children:Object(c.jsx)("img",{src:"https://res.cloudinary.com/devloops7/image/upload/v1606663570/newBlanja/T-shirt_ikcavv.png",alt:"img",className:"rounded small-images"})}),Object(c.jsx)("li",{children:Object(c.jsx)("img",{src:"https://res.cloudinary.com/devloops7/image/upload/v1606663570/newBlanja/T-shirt_ikcavv.png",alt:"img",className:"rounded small-images"})}),Object(c.jsx)("li",{children:Object(c.jsx)("img",{src:"https://res.cloudinary.com/devloops7/image/upload/v1606663570/newBlanja/T-shirt_ikcavv.png",alt:"img",className:"rounded small-images"})}),Object(c.jsx)("li",{children:Object(c.jsx)("img",{src:"https://res.cloudinary.com/devloops7/image/upload/v1606663570/newBlanja/T-shirt_ikcavv.png",alt:"img",className:"rounded small-images"})}),Object(c.jsx)("li",{children:Object(c.jsx)("img",{src:"https://res.cloudinary.com/devloops7/image/upload/v1606663570/newBlanja/T-shirt_ikcavv.png",alt:"img",className:"rounded small-images"})})]})})]}),Object(c.jsxs)("div",{className:"col-sm-8",children:[Object(c.jsx)("h3",{children:t.product_name}),Object(c.jsx)("p",{className:"font-p-title",children:Object(c.jsx)("b",{children:t.product_by})}),Object(c.jsxs)("div",{className:"rating mt-n2",children:[Object(c.jsx)("img",{src:"/assets/icons/Rating 5 stars.svg",alt:"rating"}),Object(c.jsxs)("span",{style:{marginLeft:"-15px"},children:["(",t.product_sold,")"]})]}),Object(c.jsx)("p",{className:"font-p-title mt-3",children:Object(c.jsx)("b",{children:"Price"})}),Object(c.jsx)("h2",{className:"mt-n3",children:Object(c.jsxs)("b",{children:["IDR ",t.product_price]})}),Object(c.jsx)("p",{className:"font-p-title ml-1 mt-3 text-dark",children:Object(c.jsx)("b",{children:" Color "})}),Object(c.jsx)("ul",{className:"horizontal-list",children:Object(c.jsx)("li",{children:"comingsoon"})}),Object(c.jsxs)("div",{className:"row justify-content-start",children:[Object(c.jsxs)("div",{className:"col-sm-4",children:[Object(c.jsx)("p",{className:"font-p-title ml-1 mt-3 text-dark",children:Object(c.jsx)("b",{children:"Size"})}),Object(c.jsx)("ul",{className:"horizontal-list d-flex justify-center",children:Object(c.jsx)("li",{children:"comingsoon"})})]}),Object(c.jsxs)("div",{className:"col-sm-4",children:[Object(c.jsx)("p",{className:"font-p-title ml-1 mt-3 text-dark",children:Object(c.jsx)("b",{children:"Jumlah"})}),Object(c.jsx)("ul",{className:"horizontal-list d-flex justify-center",children:Object(c.jsx)("li",{children:t.product_qty})})]})]}),Object(c.jsxs)("div",{className:" d-flex justify-content-between",children:[Object(c.jsx)(l.b,{to:{pathname:"/"},children:Object(c.jsx)("button",{className:"btnGrup btn-chart mt-2",onClick:function(t){e.deleteProduct(),t&&e.refreshPage()},children:"Delete This Product"})}),Object(c.jsx)("button",{className:"btnGrup btn-add-bag mt-2",children:"Add bag"}),Object(c.jsx)("button",{className:"btnGrup btn-buy mt-2",children:"Buy Now"})]})]})]}),Object(c.jsx)("h3",{className:"mt-3",children:"Informasi Produk"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{className:"mt-3 text-dark",children:Object(c.jsx)("b",{children:"Condition"})}),Object(c.jsx)("p",{className:"mt-n3 text-danger",children:Object(c.jsx)("b",{children:"New"})}),Object(c.jsx)("p",{className:"mt-4 text-dark",children:Object(c.jsx)("b",{children:"Description"})}),Object(c.jsxs)("p",{children:[" ",t.product_desc," "]})]}),Object(c.jsx)("h2",{children:"Product Review"}),Object(c.jsx)(S.a,{style:{marginBottom:"70px"},children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-md-3 align-item-center justify-content-center",children:[Object(c.jsx)("h1",{className:"display-1 d-inline",children:Object(c.jsx)("b",{children:"5.0"})}),Object(c.jsx)("p",{className:"d-inline-block ml-1 mt-3 text-dark",children:Object(c.jsxs)("b",{children:["/ ",t.product_sold," "]})}),Object(c.jsx)("div",{className:"rating mt-n2 ml-1 d-flex"})]}),Object(c.jsx)("div",{className:"col-md-3",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"side"}),Object(c.jsx)("div",{className:"middle",children:Object(c.jsx)("div",{className:"bar-container",children:Object(c.jsx)("div",{className:"bar-5"})})}),Object(c.jsx)("div",{className:"side right",children:Object(c.jsxs)("div",{children:[" ",t.product_sold," "]})}),Object(c.jsx)("div",{className:"side",children:Object(c.jsx)("div",{})}),Object(c.jsx)("div",{className:"middle",children:Object(c.jsx)("div",{className:"bar-container",children:Object(c.jsx)("div",{className:"bar-4"})})}),Object(c.jsx)("div",{className:"side right",children:Object(c.jsx)("div",{children:"0"})}),Object(c.jsx)("div",{className:"side",children:Object(c.jsx)("div",{})}),Object(c.jsx)("div",{className:"middle",children:Object(c.jsx)("div",{className:"bar-container",children:Object(c.jsx)("div",{className:"bar-3"})})}),Object(c.jsx)("div",{className:"side right",children:Object(c.jsx)("div",{children:"0"})}),Object(c.jsx)("div",{className:"side",children:Object(c.jsx)("div",{})}),Object(c.jsx)("div",{className:"middle",children:Object(c.jsx)("div",{className:"bar-container",children:Object(c.jsx)("div",{className:"bar-2"})})}),Object(c.jsx)("div",{className:"side right",children:Object(c.jsx)("div",{children:"0"})}),Object(c.jsx)("div",{className:"side",children:Object(c.jsx)("div",{})}),Object(c.jsx)("div",{className:"middle",children:Object(c.jsx)("div",{className:"bar-container",children:Object(c.jsx)("div",{className:"bar-1"})})}),Object(c.jsx)("div",{className:"side right",children:Object(c.jsx)("div",{children:"0"})})]})})]})}),Object(c.jsxs)("div",{className:"btn d-flex d-lg-none",children:[Object(c.jsx)(l.b,{to:{pathname:"/"},children:Object(c.jsx)("button",{className:"btnGrup btn-chart mt-2",onClick:function(t){e.deleteProduct(),t&&e.refreshPage()},children:"Delete This Product"})}),Object(c.jsx)("button",{className:"btnBtm btn-add-bag mt-2",children:"Add bag"}),Object(c.jsx)("button",{className:"btnBtm btn-buy mt-2",children:"Buy Now"})]})]})})]})}}]),s}(a.Component),I=(a.Component,y.a.create({baseURL:"http://localhost:1010/api/v1/"}),function(e){Object(u.a)(s,e);var t=Object(p.a)(s);function s(){return Object(b.a)(this,s),t.apply(this,arguments)}return Object(m.a)(s,[{key:"render",value:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(C,{prophistory:this.props}),Object(c.jsx)("main",{children:Object(c.jsx)("div",{className:"main-container",children:Object(c.jsxs)("div",{className:"search",children:[Object(c.jsx)("div",{className:"head"}),Object(c.jsx)("div",{className:"flex-list"})]})})})]})}}]),s}(a.Component));var F=function(){return Object(c.jsxs)(l.a,{children:[Object(c.jsx)(o.a,{path:"/",exact:!0,component:D}),Object(c.jsx)(o.a,{path:"/product/:id",component:B}),Object(c.jsx)(o.a,{path:"/search",component:I})]})},A=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,76)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(F,{})}),document.getElementById("root")),A()}},[[72,1,2]]]);
//# sourceMappingURL=main.c32e7d05.chunk.js.map