webpackJsonp([16],{"195g":function(e,t){},"DS+/":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={data:function(){return{form:{nbr:"",name:"",delivery:!1}}},methods:{submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})}}},a={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",[r("el-form",{ref:"form",staticClass:"bound_fome",attrs:{model:e.form,"label-width":"auto","label-position":"left"}},[r("el-form-item",{attrs:{label:"住院号",prop:"nbr"}},[r("el-input",{attrs:{autocomplete:"off",placeholder:"请输入住院号"},model:{value:e.form.nbr,callback:function(t){e.$set(e.form,"nbr",t)},expression:"form.nbr"}})],1),e._v(" "),r("el-form-item",{staticClass:"bound_fome_name",attrs:{label:"姓名"}},[r("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("el-form-item",{staticClass:"bound_fome_forthwith",attrs:{label:"设为默认住院号","label-width":"110px",size:"medium "}},[r("el-switch",{model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}})],1),e._v(" "),r("el-form-item",{staticClass:"themake_bot",staticStyle:{"text-align":"center","padding-top":"17px"}},[r("router-link",{attrs:{tag:"span",to:"/shopcart/Prepay/myhospital"}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("确定绑定")])],1)],1)],1)],1)},staticRenderFns:[]};var l=r("VU/8")(o,a,!1,function(e){r("195g")},"data-v-494b06c4",null);t.default=l.exports}});
//# sourceMappingURL=16.62249bcf5cc53992dea3.js.map