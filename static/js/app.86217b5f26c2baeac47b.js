webpackJsonp([28],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),o=n("mtWM"),r=n.n(o),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var p=n("VU/8")({name:"App"},i,!1,function(t){n("qVtl")},null,null).exports,u=n("/ocq");a.default.use(u.a);var l=[{path:"",redirect:"/shopcart",meta:{title:"鹰潭市中医院"}},{path:"/home",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"zKIK"))},meta:{title:"鹰潭市中医院"}},{path:"/category",component:function(){return n.e(25).then(n.bind(null,"LpXm"))},meta:{title:"鹰潭市中医院"}},{path:"/shopcart",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"vtQw"))}},{path:"/profile",component:function(){return Promise.all([n.e(0),n.e(18)]).then(n.bind(null,"iu1Q"))}},{name:"department",path:"/shopcart/department",component:function(){return Promise.all([n.e(0),n.e(26)]).then(n.bind(null,"yIh8"))}},{name:"departlist",path:"/shopcart/department/departlist",component:function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,"lQgF"))}},{name:"comfirereservsion",path:"/shopcart/department/comfirereservsion",component:function(){return n.e(5).then(n.bind(null,"8aE+"))}},{name:"orderpay",path:"/shopcart/department/orderpay",component:function(){return n.e(3).then(n.bind(null,"cdli"))}},{name:"nopatientinfo",path:"/shopcart/department/nopatientinfo",component:function(){return n.e(9).then(n.bind(null,"cW/j"))}},{name:"addpatientinfo",path:"/shopcart/department/addinfopatient",component:function(){return n.e(24).then(n.bind(null,"99Uz"))}},{name:"OutpatientPayment",path:"/shopcart/Outpatient/outpatientPayment",component:function(){return n.e(23).then(n.bind(null,"3B3j"))}},{name:"OutpatientPayment1",path:"/shopcart/Outpatient/outpatientPayment1",component:function(){return n.e(19).then(n.bind(null,"H86U"))}},{name:"OutpatientTopay1",path:"/shopcart/Outpatient/outpatientTopay1/:id",component:function(){return n.e(11).then(n.bind(null,"dB5r"))}},{name:"OutpatientTopay",path:"/shopcart/Outpatient/outpatientTopay/:id",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"Nu4x"))}},{name:"OutpatientRecord",path:"/shopcart/Outpatient/outpatientRecord",component:function(){return n.e(17).then(n.bind(null,"Rpd0"))},meta:{title:"11111"}},{name:"OutpatientAlreadypay",path:"/shopcart/Outpatient/outpatientAlreadypay",component:function(){return n.e(20).then(n.bind(null,"Cm5u"))},meta:{title:"已缴费详情"}},{name:"themakenone",path:"/shopcart/Prepay/themakenone",component:function(){return n.e(12).then(n.bind(null,"WSxu"))},meta:{title:"住院号未绑定"}},{name:"themakenbound",path:"/shopcart/Prepay/themakenbound",component:function(){return n.e(14).then(n.bind(null,"DS+/"))},meta:{title:"绑定住院号"}},{name:"myhospital",path:"/shopcart/Prepay/myhospital",component:function(){return n.e(21).then(n.bind(null,"GGe1"))},meta:{title:"我的住院号"}},{name:"prepayment",path:"/shopcart/Prepay/prepayment",component:function(){return n.e(13).then(n.bind(null,"E2y9"))},meta:{title:"预约金充值"}},{name:"perpayrecord",path:"/shopcart/Prepay/perpayrecord",component:function(){return n.e(4).then(n.bind(null,"5ijk"))},meta:{title:"预约金充值记录"}},{name:"prepaybill",path:"/shopcart/Prepay/prepaybill",component:function(){return n.e(8).then(n.bind(null,"nLyb"))},meta:{title:"账单详情"}},{name:"dailylistingIn",path:"/shopcart/Prepay/dailylistingIn",component:function(){return n.e(16).then(n.bind(null,"jJvI"))},meta:{title:""}},{name:"inhospitalList",path:"/shopcart/detailedList/inhospitalList",component:function(){return n.e(22).then(n.bind(null,"Lx7k"))},meta:{title:""}},{name:"departments",path:"/shopcart/outpatientsCs/departments",component:function(){return n.e(10).then(n.bind(null,"bHDc"))}},{name:"bookingRegister",path:"/shopcart/outpatientsCs/bookingRegister/:userId",component:function(){return n.e(6).then(n.bind(null,"SxPf"))},meta:{title:""}}],c=new u.a({routes:l,mode:"history"}),s=n("zL8q"),m=n.n(s);var h=n("NYxO"),d=n("9p5V");a.default.use(h.a);var f=new h.a.Store({state:{from:[],dataOne:[],departmentsList:[]},getters:{uesr:function(t){return t.from}},mutations:{getdata:function(t,e){t.dataOne=e,console.log(t.dataOne)},uesr:function(t,e){t.from=e,console.log(t.from)}},actions:{getdata:function(t){r.a.get("../../../static/json.json").then(function(e){var n=e.data.data;n.forEach(function(t){t.ChargeDate=new Date(t.ChargeDate).toJSON().replace(/T/g," ").replace(/\.[\d]{3}Z/,"")}),t.commit("getdata",n)}).catch(function(t){console.log("失败信息")})}},plugins:[Object(d.a)({name:"login",local:{list:["store"],isFilter:!0},session:{list:["store.from"]}})]});n("tvR6");a.default.prototype.$axios=r.a,a.default.config.productionTip=!1,a.default.use(m.a),a.default.use(u.a),a.default.prototype.common=class{static padLeftZero(t){return("00"+t).substr(t.length)}static formatDate(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));let n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(let t in n)if(new RegExp(`(${t})`).test(e)){let a=n[t]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?a:this.padLeftZero(a))}return e}static jsonStringTransformJson(t){let{data:e}=t;return JSON.parse(e)}static getPositiveInteger(t){return(t=t.replace(/[^\d]/g,"")).indexOf(".")<0&&""!=t&&(t=parseInt(t)),""==t?0:t}static getDay(t){var e=new Date,n=e.getTime()+864e5*t;e.setTime(n);var a=e.getMonth(),o=e.getDate();return(a=this.doHandleMonth(a+1))+"-"+(o=this.doHandleMonth(o))}static doHandleMonth(t){var e=t;return 1==t.toString().length&&(e="0"+t),e}static getDay2(t){var e=new Date,n=e.getTime()+864e5*t;e.setTime(n);var a=e.getFullYear(),o=e.getMonth(),r=e.getDate();return a+"-"+(o=this.doHandleMonth(o+1))+"-"+(r=this.doHandleMonth(r))}static getweek(t){return["周日","周一","周二","周三","周四","周五","周六"][new Date(Date.parse(t)).getDay()]}},new a.default({router:c,store:f,render:function(t){return t(p)}}).$mount("#app"),c.beforeEach(function(t,e,n){t.meta.title&&(document.title=t.meta.title),n()})},qVtl:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.86217b5f26c2baeac47b.js.map