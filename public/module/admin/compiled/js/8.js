(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{359:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"module-container"},[i("module-nav",{attrs:{topRoute:t.topRoute,pos:t.pos}}),t._v(" "),i("div",{staticClass:"module-content"},[i("div",{staticClass:"in"},[i("div",{staticClass:"top"},[i("form",{on:{submit:function(s){return s.preventDefault(),t.submit(s)},reset:t.reset}},[t._m(0),t._v(" "),i("div",{staticClass:"filter-options"},[i("div",{staticClass:"option"},[i("div",{staticClass:"field"},[t._v("ID：")]),t._v(" "),i("div",{staticClass:"value"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.id,expression:"form.id"}],staticClass:"form-text",attrs:{type:"text"},domProps:{value:t.form.id},on:{input:function(s){s.target.composing||t.$set(t.form,"id",s.target.value)}}})])]),t._v(" "),i("div",{staticClass:"option"},[i("div",{staticClass:"field"},[t._v("名称：")]),t._v(" "),i("div",{staticClass:"value"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-text",attrs:{type:"text"},domProps:{value:t.form.name},on:{input:function(s){s.target.composing||t.$set(t.form,"name",s.target.value)}}})])]),t._v(" "),t._m(1)])])]),t._v(" "),i("div",{staticClass:"btm list"},[i("div",{staticClass:"data"},[i("div",{staticClass:"run-title"},[i("div",{staticClass:"left"},[t._v("数据列表")]),t._v(" "),i("div",{staticClass:"right"},[i("button",{staticClass:"run-button run-button-orange",attrs:{type:"button"},on:{click:t.delSelected}},[i("i",{staticClass:"run-iconfont run-delete"}),t._v("\n                                删除选中项\n                            ")]),t._v(" "),i("button",{staticClass:"run-button run-button-blue",attrs:{type:"button"},on:{click:function(s){return t.location("/carConfiguration/add",{mode:"add"})}}},[i("i",{staticClass:"run-iconfont run-add"}),t._v("\n                                添加\n                            ")])])]),t._v(" "),i("table",{staticClass:"line-tb"},[i("thead",[i("tr",[i("th",{staticClass:"w-20"},[i("input",{attrs:{type:"checkbox"},on:{click:t.selectAllEvent}})]),t._v(" "),i("th",{staticClass:"w-40"},[t._v("ID")]),t._v(" "),i("th",{staticClass:"w-130"},[t._v("名称")]),t._v(" "),i("th",{staticClass:"w-100"},[t._v("分组")]),t._v(" "),i("th",{staticClass:"w-120"},[t._v("图片")]),t._v(" "),i("th",{staticClass:"w-130"},[t._v("描述")]),t._v(" "),i("th",{staticClass:"w-30"},[t._v("\n                                权重\n                                "),i("span",{staticClass:"arrow"},[i("i",{staticClass:"run-iconfont run-arrow top",attrs:{"data-order":"weight|asc"},on:{click:t.order}}),t._v(" "),i("i",{staticClass:"run-iconfont run-arrow btm",attrs:{"data-order":"weight|desc"},on:{click:t.order}})])]),t._v(" "),i("th",{staticClass:"w-100"},[t._v("创建时间")]),t._v(" "),i("th",{staticClass:"w-100"},[t._v("操作")])])]),t._v(" "),i("tbody",{ref:"tbody"},[t._l(t.data,function(s){return i("tr",{key:s.id,attrs:{"data-id":s.id},on:{click:t.selectEvent}},[t._m(2,!0),t._v(" "),i("td",[t._v(t._s(s.id))]),t._v(" "),i("td",[t._v(t._s(s.name))]),t._v(" "),i("td",[t._v(t._s(s.group?s.group.name:""))]),t._v(" "),i("td",[i("img",{staticClass:"image",attrs:{src:s.image_explain}})]),t._v(" "),i("td",[t._v(t._s(s.desc))]),t._v(" "),i("td",[t._v(t._s(s.weight))]),t._v(" "),i("td",[t._v(t._s(s.create_time))]),t._v(" "),i("td",[i("button",{staticClass:"run-button run-button-blue",attrs:{type:"button"},on:{click:function(i){return i.stopPropagation(),t.location("/carConfiguration/edit",{id:s.id,mode:"edit"})}}},[i("i",{staticClass:"run-iconfont run-edit"}),t._v("编辑\n                                ")]),t._v(" "),i("button",{staticClass:"run-button run-button-orange",attrs:{type:"button"},on:{click:function(i){return t.delTarget(s.id)}}},[i("i",{staticClass:"run-iconfont run-delete"}),t._v("删除\n                                ")])])])}),t._v(" "),0==t.data.length?i("tr",[i("td",{attrs:{colspan:"9"}},[t._v("没有相关数据")])]):t._e()],2)])]),t._v(" "),i("div",{staticClass:"page"},[i("Page",{attrs:{total:t.page.total,"page-size":t.page.per_page,size:"small","show-total":"","show-elevator":""},on:{"on-change":t.pageEvent}})],1)])])]),t._v(" "),i("v-loading",{ref:"loading"})],1)};a._withStripped=!0;var n={name:"v-list",data:function(){return{form:{id:"",name:"",order:""},ins:{loading:null},pending:{del:null},ajax:{list:null},dom:{},api:carConfigurationApi,data:[],idList:[],page:{page:1,per_page:20}}},mixins:[mixins.loading,mixins.list.get.normal,mixins.list.filter,mixins.list.del,mixins.list.page],created:function(){},mounted:function(){this.initDom(),this.initInstance(),this.getData()},methods:{initDom:function(){this.dom.tbody=G(this.$refs.tbody)},initInstance:function(){}}},e=(i(376),i(505),i(506),i(507),i(23)),o=Object(e.a)(n,a,[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"run-title"},[s("div",{staticClass:"left"},[this._v("筛选")]),this._v(" "),s("div",{staticClass:"right"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"option"},[s("div",{staticClass:"field"}),this._v(" "),s("div",{staticClass:"value"},[s("button",{staticClass:"run-button run-button-blue",attrs:{type:"submit"}},[this._v("提交")]),this._v(" "),s("button",{staticClass:"run-button run-button-yellow",attrs:{type:"reset"}},[s("i",{staticClass:"run-iconfont run-reset"}),this._v("\n                                    重置\n                                ")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("td",[s("input",{staticClass:"c-box",attrs:{type:"checkbox"}})])}],!1,null,"0074e7c0",null);o.options.__file="source/vue/view/carConfiguration/list.vue";s.default=o.exports},375:function(t,s,i){},376:function(t,s,i){"use strict";var a=i(375);i.n(a).a},418:function(t,s,i){},419:function(t,s,i){},420:function(t,s,i){},505:function(t,s,i){"use strict";var a=i(418);i.n(a).a},506:function(t,s,i){"use strict";var a=i(419);i.n(a).a},507:function(t,s,i){"use strict";var a=i(420);i.n(a).a}}]);