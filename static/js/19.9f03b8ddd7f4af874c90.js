webpackJsonp([19],{H86U:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("mtWM"),i=s.n(e),n={name:"Ment",data:function(){return{oname:"黄伟",Charge:[]}},computed:{},mounted:function(){this.http()},methods:{http:function(){var t=this;i.a.get("../../static/data.json").then(function(a){t.Charge=a.data,console.log(t.Charge)}).catch(function(t){console.log(t)})}}},l={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("el-container",[s("el-header",{staticStyle:{height:"42px"}},[s("div",{staticClass:"grid-content fonttop"},[s("span",[t._v("就诊人：")]),t._v(" "),s("span",[t._v(t._s(t.oname))]),t._v(" "),s("span",{staticStyle:{margin:"10px"}},[t._v("0005674")]),t._v(" "),s("span",{staticStyle:{float:"right","line-height":"15px"}},[s("el-button",{staticClass:"cut"},[t._v("切换")])],1)])]),t._v(" "),s("el-main",[s("div",{staticClass:"title"},[s("div",{staticClass:"title-img"}),t._v(" "),s("div",{staticClass:"title-font"},[s("span",[t._v("待缴费单cs")])])]),t._v(" "),t._l(t.Charge,function(a,e){return s("el-card",{key:a.id,staticClass:"box-card"},[s("div",[s("el-row",[s("el-col",{staticClass:"fontr",attrs:{span:8}},[s("div",{staticClass:"grid-content bg-purple"},[t._v("单据号")]),t._v(" "),s("div",{staticClass:"grid-content bg-purple"},[t._v("开单科室")]),t._v(" "),s("div",{staticClass:"grid-content bg-purple"},[t._v("开单人")]),t._v(" "),s("div",{staticClass:"grid-content bg-purple"},[t._v("开单日期")])]),t._v(" "),s("el-col",{staticClass:"fontc",attrs:{span:16}},[s("div",[s("div",{staticClass:"grid-content bg-purple-light"},[s("span",[t._v(t._s(a.id))])]),t._v(" "),s("div",{staticClass:"grid-content bg-purple-light"},[s("span",[t._v(t._s(a.name))])]),t._v(" "),s("div",{staticClass:"grid-content bg-purple-light"},[s("span",[t._v(t._s(a.username))])]),t._v(" "),s("div",{staticClass:"grid-content bg-purple-light"},[s("span",[t._v(t._s(a.email))])])])])],1),t._v(" "),s("el-divider",{staticStyle:{height:".5px"}}),t._v(" "),s("el-row",[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple"},[t._v("总金额:")])]),t._v(" "),s("el-col",{attrs:{span:12}},[s("div",{staticClass:"grid-content bg-purple-light"},[s("span",{staticStyle:{color:"#FF7800","font-size":"17px"}},[t._v("￥186.00")])])]),t._v(" "),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple-light"},[s("router-link",{attrs:{tag:"a",to:{name:"OutpatientTopay1",params:{id:e,name:t.oname}}}},[s("el-button",{staticClass:"pay",attrs:{type:"primary"}},[t._v("去缴费")])],1)],1)])],1)],1)])})],2)],1)},staticRenderFns:[]};var c=s("VU/8")(n,l,!1,function(t){s("PCkS")},"data-v-6a2ec87b",null);a.default=c.exports},PCkS:function(t,a){}});
//# sourceMappingURL=19.9f03b8ddd7f4af874c90.js.map