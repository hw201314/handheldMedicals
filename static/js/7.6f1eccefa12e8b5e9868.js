webpackJsonp([7],{Nu4x:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("mtWM"),i=s.n(e),l=(s("DSRn"),{data:function(){return{ChargeListsOne:[],ChargeListsTwo:[],id:this.$route.params.id,name:this.$route.params.name}},mounted:function(){var t=this;i.a.get("../../../static/json.json").then(function(a){var s=a.data.data;s.forEach(function(t){t.ChargeDate=new Date(t.ChargeDate).toJSON().replace(/T/g," ").replace(/\.[\d]{3}Z/,"")}),t.ChargeListsOne=s[t.id],t.ChargeListsTwo=s[t.id].ChargeLists,console.log(t.ChargeListsTwo)}).catch(function(t){console.log(t)})},methods:{}}),n={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("el-container",[s("el-main",[s("div",{staticClass:"title",staticStyle:{"margin-top":"10px"}},[s("div",{staticClass:"title-img"}),t._v(" "),s("div",{staticClass:"title-font"},[s("span",[t._v("基本信息")])])]),t._v(" "),s("el-card",{staticClass:"box-card"},[s("div",[s("el-row",[s("el-col",{staticClass:"fontr",attrs:{span:8}},[s("div",{staticClass:"grid-content bg-purple"},[t._v("就诊人")]),t._v(" "),s("div",{staticClass:"grid-content bg-purple"},[t._v("单据号")]),t._v(" "),s("div",{staticClass:"grid-content bg-purple"},[t._v("开单科室")]),t._v(" "),s("div",{staticClass:"grid-content bg-purple"},[t._v("开单人")]),t._v(" "),s("div",{staticClass:"grid-content bg-purple"},[t._v("开单日期")])]),t._v(" "),s("el-col",{staticClass:"fontc",attrs:{span:16}},[s("div",{staticClass:"grid-content bg-purple-light"},[s("span",[t._v(t._s(t.name))])]),t._v(" "),s("div",{staticClass:"grid-content bg-purple-light"},[s("span",[t._v(t._s(t.ChargeListsOne.SerialNumber))])]),t._v(" "),s("div",{staticClass:"grid-content bg-purple-light"},[s("span",[t._v(t._s(t.ChargeListsOne.Dept))])]),t._v(" "),s("div",{staticClass:"grid-content bg-purple-light"},[s("span",[t._v(t._s(t.ChargeListsOne.DocName))])]),t._v(" "),s("div",{staticClass:"grid-content bg-purple-light"},[s("span",[t._v(t._s(t.ChargeListsOne.ChargeDate))])])])],1)],1)]),t._v(" "),s("div",{staticClass:"title"},[s("div",{staticClass:"title-img"}),t._v(" "),s("div",{staticClass:"title-font"},[s("span",[t._v("费用明细")])])]),t._v(" "),s("el-card",{staticClass:"box-card payz"},[s("el-table",{staticStyle:{"font-size":"13px",color:"#333"},attrs:{data:t.ChargeListsTwo}},[s("el-table-column",{attrs:{prop:"ChargeName",label:"项目名称",width:"111px"}}),t._v(" "),s("el-table-column",{attrs:{prop:"Amount",label:"单价(元)"}}),t._v(" "),s("el-table-column",{attrs:{prop:"PrescriptionNo",label:"数量.单位"}}),t._v(" "),s("el-table-column",{attrs:{prop:"Amount",label:"金额(元)"}})],1)],1)],1),t._v(" "),s("el-footer",{staticClass:"outfooter"},[s("div",[s("el-row",[s("el-col",{attrs:{span:8}},[s("div",{staticClass:"grid-content bg-purple",staticStyle:{color:"#666","font-size":"17px"}},[t._v("总缴费金额:")])]),t._v(" "),s("el-col",{attrs:{span:8}},[s("div",{staticClass:"grid-content bg-purple-light"},[s("span",{staticStyle:{color:"#FF7800","font-size":"17px"}},[t._v("￥186.00")])])]),t._v(" "),s("el-col",{attrs:{span:8}},[s("div",{staticClass:"grid-content bg-purple"},[s("router-link",{attrs:{tag:"a",to:"/shopcart/Outpatient/outpatientRecord"}},[s("el-button",{attrs:{type:"primary"}},[t._v("确定支付")])],1)],1)])],1)],1)])],1)},staticRenderFns:[]};var r=s("VU/8")(l,n,!1,function(t){s("esrR"),s("ZBWi")},"data-v-ba56149a",null);a.default=r.exports},ZBWi:function(t,a){},esrR:function(t,a){}});