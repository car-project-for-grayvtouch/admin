(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{388:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"module-container"},[i("module-nav",{attrs:{topRoute:t.topRoute,pos:t.pos}}),t._v(" "),i("div",{staticClass:"module-content"},[i("div",{staticClass:"in"},[i("div",{staticClass:"top"},[i("form",{on:{submit:function(s){return s.preventDefault(),t.submit(s)},reset:t.reset}},[t._m(0),t._v(" "),i("div",{staticClass:"filter-options"},[i("div",{staticClass:"option"},[i("div",{staticClass:"field"},[t._v("ID：")]),t._v(" "),i("div",{staticClass:"value"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.id,expression:"form.id"}],staticClass:"form-text",attrs:{type:"text"},domProps:{value:t.form.id},on:{input:function(s){s.target.composing||t.$set(t.form,"id",s.target.value)}}})])]),t._v(" "),i("div",{staticClass:"option"},[i("div",{staticClass:"field"},[t._v("名称：")]),t._v(" "),i("div",{staticClass:"value"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.username,expression:"form.username"}],staticClass:"form-text",attrs:{type:"text"},domProps:{value:t.form.username},on:{input:function(s){s.target.composing||t.$set(t.form,"username",s.target.value)}}})])]),t._v(" "),t._m(1)])])]),t._v(" "),i("div",{staticClass:"btm list"},[i("div",{staticClass:"data"},[t._m(2),t._v(" "),i("table",{staticClass:"line-tb"},[i("thead",[i("tr",[i("th",{staticClass:"w-40"},[t._v("\n                                ID\n                                "),i("span",{staticClass:"arrow"},[i("i",{staticClass:"run-iconfont run-arrow top",attrs:{"data-order":"id|asc"},on:{click:t.order}}),t._v(" "),i("i",{staticClass:"run-iconfont run-arrow btm",attrs:{"data-order":"id|desc"},on:{click:t.order}})])]),t._v(" "),i("th",{staticClass:"w-130"},[t._v("用户")]),t._v(" "),i("th",{staticClass:"w-130"},[t._v("足迹")]),t._v(" "),i("th",{staticClass:"w-100"},[t._v("\n                                创建时间\n                                "),i("span",{staticClass:"arrow"},[i("i",{staticClass:"run-iconfont run-arrow top",attrs:{"data-order":"create_time|asc"},on:{click:t.order}}),t._v(" "),i("i",{staticClass:"run-iconfont run-arrow btm",attrs:{"data-order":"create_time|desc"},on:{click:t.order}})])])])]),t._v(" "),i("tbody",{ref:"tbody"},[t._l(t.data,function(s){return i("tr",{key:s.id,attrs:{"data-id":s.id},on:{click:t.selectEvent}},[i("td",{staticClass:"multiple-rows"},[i("div",{staticClass:"row"},[t._v("【ID】"),i("b",[t._v(t._s(s.id))])]),t._v(" "),i("div",{staticClass:"row"},[i("img",{staticClass:"image",attrs:{src:s.avatar_explain}})])]),t._v(" "),i("td",{staticClass:"multiple-rows"},[i("div",{staticClass:"row"},[t._v("【用户名】"),i("b",[t._v(t._s(s.username))])]),t._v(" "),i("div",{staticClass:"row"},[t._v("【手机号码】"),i("b",[t._v(t._s(s.phone))])])]),t._v(" "),i("td",{staticClass:"multiple-rows"},[i("div",{staticClass:"row"},[i("b",[t._v("【最近一次登录ip】")]),t._v(t._s(s.last_ip))]),t._v(" "),i("div",{staticClass:"row"},[i("b",[t._v("【最近一次登录时间】")]),t._v(t._s(s.last_time))])]),t._v(" "),i("td",[t._v(t._s(s.create_time))])])}),t._v(" "),0==t.data.length?i("tr",[i("td",{attrs:{colspan:"4"}},[t._v("没有相关数据")])]):t._e()],2)])]),t._v(" "),i("div",{staticClass:"page"},[i("Page",{attrs:{total:t.page.total,current:t.form.page,"page-size":t.page.per_page,size:"small","show-total":"","show-elevator":""},on:{"on-change":t.pageEvent}})],1)])])]),t._v(" "),i("v-loading",{ref:"loading"})],1)};a._withStripped=!0;var e={name:"v-list",data:function(){return{form:{id:"",username:"",order:""},ins:{loading:null},pending:{del:null},ajax:{list:null},dom:{},api:userApi,data:[],idList:[],page:{page:1,per_page:20}}},mixins:[mixins.loading,mixins.state,mixins.list.get.normal,mixins.list.filter,mixins.list.del,mixins.list.page],created:function(){},mounted:function(){this.initDom(),this.initInstance(),this.getData()},methods:{initDom:function(){this.dom.tbody=G(this.$refs.tbody)},initInstance:function(){}}},n=(i(393),i(662),i(663),i(664),i(14)),r=Object(n.a)(e,a,[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"run-title"},[s("div",{staticClass:"left"},[this._v("筛选")]),this._v(" "),s("div",{staticClass:"right"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"option"},[s("div",{staticClass:"field"}),this._v(" "),s("div",{staticClass:"value"},[s("button",{staticClass:"run-button run-button-blue",attrs:{type:"submit"}},[this._v("提交")]),this._v(" "),s("button",{staticClass:"run-button run-button-yellow",attrs:{type:"reset"}},[s("i",{staticClass:"run-iconfont run-reset"}),this._v("\n                                    重置\n                                ")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"run-title"},[s("div",{staticClass:"left"},[this._v("数据列表")]),this._v(" "),s("div",{staticClass:"right"})])}],!1,null,"59237377",null);r.options.__file="source/vue/view/user/list.vue";s.default=r.exports},392:function(t,s,i){},393:function(t,s,i){"use strict";var a=i(392);i.n(a).a},520:function(t,s,i){},521:function(t,s,i){},522:function(t,s,i){},662:function(t,s,i){"use strict";var a=i(520);i.n(a).a},663:function(t,s,i){"use strict";var a=i(521);i.n(a).a},664:function(t,s,i){"use strict";var a=i(522);i.n(a).a}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvdXNlci9saXN0LnZ1ZT84ZWZjIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy91c2VyL2pzL2xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3VzZXIvanMvbGlzdC5qcz8xZDZkIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy91c2VyL2xpc3QudnVlIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9wdWJsaWMvY3NzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9jc3MvcHVibGljLmNzcz84NTBlIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9wdWJsaWMvY3NzL2xpc3QuY3NzPzYwNTQiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3VzZXIvY3NzL2xpc3QuY3NzIl0sIm5hbWVzIjpbInJlbmRlciIsIl92bSIsInRoaXMiLCJfaCIsIiRjcmVhdGVFbGVtZW50IiwiX2MiLCJfc2VsZiIsInN0YXRpY0NsYXNzIiwiYXR0cnMiLCJ0b3BSb3V0ZSIsInBvcyIsIl92Iiwib24iLCJzdWJtaXQiLCIkZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc2V0IiwiX20iLCJkaXJlY3RpdmVzIiwibmFtZSIsInJhd05hbWUiLCJ2YWx1ZSIsImZvcm0iLCJpZCIsImV4cHJlc3Npb24iLCJ0eXBlIiwiZG9tUHJvcHMiLCJpbnB1dCIsInRhcmdldCIsImNvbXBvc2luZyIsIiRzZXQiLCJ1c2VybmFtZSIsImRhdGEtb3JkZXIiLCJjbGljayIsIm9yZGVyIiwicmVmIiwiX2wiLCJkYXRhIiwidiIsImtleSIsImRhdGEtaWQiLCJzZWxlY3RFdmVudCIsIl9zIiwic3JjIiwiYXZhdGFyX2V4cGxhaW4iLCJwaG9uZSIsImxhc3RfaXAiLCJsYXN0X3RpbWUiLCJjcmVhdGVfdGltZSIsImxlbmd0aCIsImNvbHNwYW4iLCJfZSIsInRvdGFsIiwicGFnZSIsImN1cnJlbnQiLCJwYWdlLXNpemUiLCJwZXJfcGFnZSIsInNpemUiLCJzaG93LXRvdGFsIiwic2hvdy1lbGV2YXRvciIsIm9uLWNoYW5nZSIsInBhZ2VFdmVudCIsIl93aXRoU3RyaXBwZWQiLCJqc19saXN0dnVlX3R5cGVfc2NyaXB0X2xhbmdfanNfIiwiaW5zIiwibG9hZGluZyIsInBlbmRpbmciLCJkZWwiLCJhamF4IiwibGlzdCIsImRvbSIsImFwaSIsInVzZXJBcGkiLCJpZExpc3QiLCJtaXhpbnMiLCJzdGF0ZSIsImdldCIsIm5vcm1hbCIsImZpbHRlciIsImNyZWF0ZWQiLCJtb3VudGVkIiwiaW5pdERvbSIsImluaXRJbnN0YW5jZSIsImdldERhdGEiLCJtZXRob2RzIiwidGJvZHkiLCJHIiwiJHJlZnMiLCJjb21wb25lbnQiLCJPYmplY3QiLCJjb21wb25lbnROb3JtYWxpemVyIiwib3B0aW9ucyIsIl9fZmlsZSIsIl9fd2VicGFja19leHBvcnRzX18iLCJfbm9kZV9tb2R1bGVzX21pbmlfY3NzX2V4dHJhY3RfcGx1Z2luX2Rpc3RfbG9hZGVyX2pzX25vZGVfbW9kdWxlc19jc3NfbG9hZGVyX2Rpc3RfY2pzX2pzX3JlZl8xXzFfbm9kZV9tb2R1bGVzX3Z1ZV9sb2FkZXJfbGliX2xvYWRlcnNfc3R5bGVQb3N0TG9hZGVyX2pzX2dsb2JhbF9jc3NfdnVlX3R5cGVfc3R5bGVfaW5kZXhfMF9sYW5nX2Nzc19fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJuIiwiX25vZGVfbW9kdWxlc19taW5pX2Nzc19leHRyYWN0X3BsdWdpbl9kaXN0X2xvYWRlcl9qc19ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9kaXN0X2Nqc19qc19yZWZfMV8xX25vZGVfbW9kdWxlc192dWVfbG9hZGVyX2xpYl9sb2FkZXJzX3N0eWxlUG9zdExvYWRlcl9qc19wdWJsaWNfY3NzX3Z1ZV90eXBlX3N0eWxlX2luZGV4XzFfaWRfNTkyMzczNzdfc2NvcGVkX3RydWVfbGFuZ19jc3NfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18iLCJfbm9kZV9tb2R1bGVzX21pbmlfY3NzX2V4dHJhY3RfcGx1Z2luX2Rpc3RfbG9hZGVyX2pzX25vZGVfbW9kdWxlc19jc3NfbG9hZGVyX2Rpc3RfY2pzX2pzX3JlZl8xXzFfbm9kZV9tb2R1bGVzX3Z1ZV9sb2FkZXJfbGliX2xvYWRlcnNfc3R5bGVQb3N0TG9hZGVyX2pzX2xpc3RfY3NzX3Z1ZV90eXBlX3N0eWxlX2luZGV4XzJfaWRfNTkyMzczNzdfc2NvcGVkX3RydWVfbGFuZ19jc3NfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18iLCJfbm9kZV9tb2R1bGVzX21pbmlfY3NzX2V4dHJhY3RfcGx1Z2luX2Rpc3RfbG9hZGVyX2pzX25vZGVfbW9kdWxlc19jc3NfbG9hZGVyX2Rpc3RfY2pzX2pzX3JlZl8xXzFfbm9kZV9tb2R1bGVzX3Z1ZV9sb2FkZXJfbGliX2xvYWRlcnNfc3R5bGVQb3N0TG9hZGVyX2pzX2xpc3RfY3NzX3Z1ZV90eXBlX3N0eWxlX2luZGV4XzNfaWRfNTkyMzczNzdfc2NvcGVkX3RydWVfbGFuZ19jc3NfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18iXSwibWFwcGluZ3MiOiJrR0FBQSxJQUFBQSxFQUFBLFdBQ0EsSUFBQUMsRUFBQUMsS0FDQUMsRUFBQUYsRUFBQUcsZUFDQUMsRUFBQUosRUFBQUssTUFBQUQsSUFBQUYsRUFDQSxPQUFBRSxFQUNBLE1BQ0EsQ0FBS0UsWUFBQSxvQkFDTCxDQUNBRixFQUFBLGNBQXdCRyxNQUFBLENBQVNDLFNBQUFSLEVBQUFRLFNBQUFDLElBQUFULEVBQUFTLE9BQ2pDVCxFQUFBVSxHQUFBLEtBQ0FOLEVBQUEsT0FBaUJFLFlBQUEsa0JBQWdDLENBQ2pERixFQUFBLE9BQW1CRSxZQUFBLE1BQW9CLENBQ3ZDRixFQUFBLE9BQXFCRSxZQUFBLE9BQXFCLENBQzFDRixFQUNBLE9BQ0EsQ0FDQU8sR0FBQSxDQUNBQyxPQUFBLFNBQUFDLEdBRUEsT0FEQUEsRUFBQUMsaUJBQ0FkLEVBQUFZLE9BQUFDLElBRUFFLE1BQUFmLEVBQUFlLFFBR0EsQ0FDQWYsRUFBQWdCLEdBQUEsR0FDQWhCLEVBQUFVLEdBQUEsS0FDQU4sRUFBQSxPQUEyQkUsWUFBQSxrQkFBZ0MsQ0FDM0RGLEVBQUEsT0FBNkJFLFlBQUEsVUFBd0IsQ0FDckRGLEVBQUEsT0FBK0JFLFlBQUEsU0FBdUIsQ0FBQU4sRUFBQVUsR0FBQSxTQUN0RFYsRUFBQVUsR0FBQSxLQUNBTixFQUFBLE9BQStCRSxZQUFBLFNBQXVCLENBQ3RERixFQUFBLFNBQ0FhLFdBQUEsQ0FDQSxDQUNBQyxLQUFBLFFBQ0FDLFFBQUEsVUFDQUMsTUFBQXBCLEVBQUFxQixLQUFBQyxHQUNBQyxXQUFBLFlBR0FqQixZQUFBLFlBQ0FDLE1BQUEsQ0FBZ0NpQixLQUFBLFFBQ2hDQyxTQUFBLENBQW1DTCxNQUFBcEIsRUFBQXFCLEtBQUFDLElBQ25DWCxHQUFBLENBQ0FlLE1BQUEsU0FBQWIsR0FDQUEsRUFBQWMsT0FBQUMsV0FHQTVCLEVBQUE2QixLQUFBN0IsRUFBQXFCLEtBQUEsS0FBQVIsRUFBQWMsT0FBQVAsZUFNQXBCLEVBQUFVLEdBQUEsS0FDQU4sRUFBQSxPQUE2QkUsWUFBQSxVQUF3QixDQUNyREYsRUFBQSxPQUErQkUsWUFBQSxTQUF1QixDQUFBTixFQUFBVSxHQUFBLFNBQ3REVixFQUFBVSxHQUFBLEtBQ0FOLEVBQUEsT0FBK0JFLFlBQUEsU0FBdUIsQ0FDdERGLEVBQUEsU0FDQWEsV0FBQSxDQUNBLENBQ0FDLEtBQUEsUUFDQUMsUUFBQSxVQUNBQyxNQUFBcEIsRUFBQXFCLEtBQUFTLFNBQ0FQLFdBQUEsa0JBR0FqQixZQUFBLFlBQ0FDLE1BQUEsQ0FBZ0NpQixLQUFBLFFBQ2hDQyxTQUFBLENBQW1DTCxNQUFBcEIsRUFBQXFCLEtBQUFTLFVBQ25DbkIsR0FBQSxDQUNBZSxNQUFBLFNBQUFiLEdBQ0FBLEVBQUFjLE9BQUFDLFdBR0E1QixFQUFBNkIsS0FBQTdCLEVBQUFxQixLQUFBLFdBQUFSLEVBQUFjLE9BQUFQLGVBTUFwQixFQUFBVSxHQUFBLEtBQ0FWLEVBQUFnQixHQUFBLFNBS0FoQixFQUFBVSxHQUFBLEtBQ0FOLEVBQUEsT0FBcUJFLFlBQUEsWUFBMEIsQ0FDL0NGLEVBQUEsT0FBdUJFLFlBQUEsUUFBc0IsQ0FDN0NOLEVBQUFnQixHQUFBLEdBQ0FoQixFQUFBVSxHQUFBLEtBQ0FOLEVBQUEsU0FBMkJFLFlBQUEsV0FBeUIsQ0FDcERGLEVBQUEsU0FDQUEsRUFBQSxNQUNBQSxFQUFBLE1BQThCRSxZQUFBLFFBQXNCLENBQ3BETixFQUFBVSxHQUNBLDBFQUVBTixFQUFBLFFBQWtDRSxZQUFBLFNBQXVCLENBQ3pERixFQUFBLEtBQ0FFLFlBQUEsNkJBQ0FDLE1BQUEsQ0FBa0N3QixhQUFBLFVBQ2xDcEIsR0FBQSxDQUErQnFCLE1BQUFoQyxFQUFBaUMsU0FFL0JqQyxFQUFBVSxHQUFBLEtBQ0FOLEVBQUEsS0FDQUUsWUFBQSw2QkFDQUMsTUFBQSxDQUFrQ3dCLGFBQUEsV0FDbENwQixHQUFBLENBQStCcUIsTUFBQWhDLEVBQUFpQyxhQUkvQmpDLEVBQUFVLEdBQUEsS0FDQU4sRUFBQSxNQUE4QkUsWUFBQSxTQUF1QixDQUFBTixFQUFBVSxHQUFBLFFBQ3JEVixFQUFBVSxHQUFBLEtBQ0FOLEVBQUEsTUFBOEJFLFlBQUEsU0FBdUIsQ0FBQU4sRUFBQVUsR0FBQSxRQUNyRFYsRUFBQVUsR0FBQSxLQUNBTixFQUFBLE1BQThCRSxZQUFBLFNBQXVCLENBQ3JETixFQUFBVSxHQUNBLDRFQUVBTixFQUFBLFFBQWtDRSxZQUFBLFNBQXVCLENBQ3pERixFQUFBLEtBQ0FFLFlBQUEsNkJBQ0FDLE1BQUEsQ0FBa0N3QixhQUFBLG1CQUNsQ3BCLEdBQUEsQ0FBK0JxQixNQUFBaEMsRUFBQWlDLFNBRS9CakMsRUFBQVUsR0FBQSxLQUNBTixFQUFBLEtBQ0FFLFlBQUEsNkJBQ0FDLE1BQUEsQ0FBa0N3QixhQUFBLG9CQUNsQ3BCLEdBQUEsQ0FBK0JxQixNQUFBaEMsRUFBQWlDLGlCQU0vQmpDLEVBQUFVLEdBQUEsS0FDQU4sRUFDQSxRQUNBLENBQW1COEIsSUFBQSxTQUNuQixDQUNBbEMsRUFBQW1DLEdBQUFuQyxFQUFBb0MsS0FBQSxTQUFBQyxHQUNBLE9BQUFqQyxFQUNBLEtBQ0EsQ0FDQWtDLElBQUFELEVBQUFmLEdBQ0FmLE1BQUEsQ0FBa0NnQyxVQUFBRixFQUFBZixJQUNsQ1gsR0FBQSxDQUErQnFCLE1BQUFoQyxFQUFBd0MsY0FFL0IsQ0FDQXBDLEVBQUEsTUFBb0NFLFlBQUEsaUJBQStCLENBQ25FRixFQUFBLE9BQXVDRSxZQUFBLE9BQXFCLENBQzVETixFQUFBVSxHQUFBLFFBQ0FOLEVBQUEsS0FBQUosRUFBQVUsR0FBQVYsRUFBQXlDLEdBQUFKLEVBQUFmLFNBRUF0QixFQUFBVSxHQUFBLEtBQ0FOLEVBQUEsT0FBdUNFLFlBQUEsT0FBcUIsQ0FDNURGLEVBQUEsT0FDQUUsWUFBQSxRQUNBQyxNQUFBLENBQXdDbUMsSUFBQUwsRUFBQU0sc0JBSXhDM0MsRUFBQVUsR0FBQSxLQUNBTixFQUFBLE1BQW9DRSxZQUFBLGlCQUErQixDQUNuRUYsRUFBQSxPQUF1Q0UsWUFBQSxPQUFxQixDQUM1RE4sRUFBQVUsR0FBQSxTQUNBTixFQUFBLEtBQUFKLEVBQUFVLEdBQUFWLEVBQUF5QyxHQUFBSixFQUFBUCxlQUVBOUIsRUFBQVUsR0FBQSxLQUNBTixFQUFBLE9BQXVDRSxZQUFBLE9BQXFCLENBQzVETixFQUFBVSxHQUFBLFVBQ0FOLEVBQUEsS0FBQUosRUFBQVUsR0FBQVYsRUFBQXlDLEdBQUFKLEVBQUFPLGNBR0E1QyxFQUFBVSxHQUFBLEtBQ0FOLEVBQUEsTUFBb0NFLFlBQUEsaUJBQStCLENBQ25FRixFQUFBLE9BQXVDRSxZQUFBLE9BQXFCLENBQzVERixFQUFBLEtBQUFKLEVBQUFVLEdBQUEsZ0JBQ0FWLEVBQUFVLEdBQUFWLEVBQUF5QyxHQUFBSixFQUFBUSxZQUVBN0MsRUFBQVUsR0FBQSxLQUNBTixFQUFBLE9BQXVDRSxZQUFBLE9BQXFCLENBQzVERixFQUFBLEtBQUFKLEVBQUFVLEdBQUEsZ0JBQ0FWLEVBQUFVLEdBQUFWLEVBQUF5QyxHQUFBSixFQUFBUyxnQkFHQTlDLEVBQUFVLEdBQUEsS0FDQU4sRUFBQSxNQUFBSixFQUFBVSxHQUFBVixFQUFBeUMsR0FBQUosRUFBQVUsb0JBSUEvQyxFQUFBVSxHQUFBLEtBQ0EsR0FBQVYsRUFBQW9DLEtBQUFZLE9BQ0E1QyxFQUFBLE1BQ0FBLEVBQUEsTUFBb0NHLE1BQUEsQ0FBUzBDLFFBQUEsTUFBaUIsQ0FDOURqRCxFQUFBVSxHQUFBLGNBR0FWLEVBQUFrRCxNQUVBLE9BSUFsRCxFQUFBVSxHQUFBLEtBQ0FOLEVBQ0EsTUFDQSxDQUFlRSxZQUFBLFFBQ2YsQ0FDQUYsRUFBQSxRQUNBRyxNQUFBLENBQ0E0QyxNQUFBbkQsRUFBQW9ELEtBQUFELE1BQ0FFLFFBQUFyRCxFQUFBcUIsS0FBQStCLEtBQ0FFLFlBQUF0RCxFQUFBb0QsS0FBQUcsU0FDQUMsS0FBQSxRQUNBQyxhQUFBLEdBQ0FDLGdCQUFBLElBRUEvQyxHQUFBLENBQXVCZ0QsWUFBQTNELEVBQUE0RCxjQUd2QixTQUtBNUQsRUFBQVUsR0FBQSxLQUNBTixFQUFBLGFBQXVCOEIsSUFBQSxhQUV2QixJQTBEQW5DLEVBQUE4RCxlQUFBLEVDcFNlLElDQXNIQyxFREF0SCxDQUNYNUMsS0FBTSxTQUNOa0IsS0FGVyxXQUdQLE1BQU8sQ0FDSGYsS0FBTSxDQUNGQyxHQUFJLEdBQ0pRLFNBQVUsR0FDVkcsTUFBTyxJQUVYOEIsSUFBSyxDQUNEQyxRQUFTLE1BRWJDLFFBQVMsQ0FDTEMsSUFBSyxNQUVUQyxLQUFNLENBQ0ZDLEtBQU0sTUFFVkMsSUFBSyxHQUNMQyxJQUFLQyxRQUNMbkMsS0FBTSxHQUVOb0MsT0FBUSxHQUNScEIsS0FBTSxDQUNGQSxLQUFNLEVBQ05HLFNBQVUsTUFRdEJrQixPQUFRLENBRUpBLE9BQU9ULFFBRVBTLE9BQU9DLE1BRVBELE9BQU9MLEtBQUtPLElBQUlDLE9BRWhCSCxPQUFPTCxLQUFLUyxPQUVaSixPQUFPTCxLQUFLRixJQUVaTyxPQUFPTCxLQUFLaEIsTUFHaEIwQixRQWhEVyxhQW9EWEMsUUFwRFcsV0FzRFA5RSxLQUFLK0UsVUFFTC9FLEtBQUtnRixlQUVMaEYsS0FBS2lGLFdBSVRDLFFBQVMsQ0FFTEgsUUFGSyxXQUdEL0UsS0FBS29FLElBQUllLE1BQVFDLEVBQUVwRixLQUFLcUYsTUFBTUYsUUFJbENILGFBUEsscURFbkRiTSxFQUFnQkMsT0FBQUMsRUFBQSxFQUFBRCxDQUNkMUIsRUFDQS9ELEVIZ09GLENBQ0EsV0FDQSxJQUNBRyxFQURBRCxLQUNBRSxlQUNBQyxFQUZBSCxLQUVBSSxNQUFBRCxJQUFBRixFQUNBLE9BQUFFLEVBQUEsT0FBc0JFLFlBQUEsYUFBMkIsQ0FDakRGLEVBQUEsT0FBaUJFLFlBQUEsUUFBc0IsQ0FKdkNMLEtBSXVDUyxHQUFBLFFBSnZDVCxLQUtBUyxHQUFBLEtBQ0FOLEVBQUEsT0FBaUJFLFlBQUEsYUFHakIsV0FDQSxJQUNBSixFQURBRCxLQUNBRSxlQUNBQyxFQUZBSCxLQUVBSSxNQUFBRCxJQUFBRixFQUNBLE9BQUFFLEVBQUEsT0FBc0JFLFlBQUEsVUFBd0IsQ0FDOUNGLEVBQUEsT0FBaUJFLFlBQUEsVUFKakJMLEtBS0FTLEdBQUEsS0FDQU4sRUFBQSxPQUFpQkUsWUFBQSxTQUF1QixDQUN4Q0YsRUFDQSxTQUNBLENBQ0FFLFlBQUEsNkJBQ0FDLE1BQUEsQ0FBb0JpQixLQUFBLFdBRXBCLENBYkF2QixLQWFBUyxHQUFBLFFBYkFULEtBZUFTLEdBQUEsS0FDQU4sRUFDQSxTQUNBLENBQ0FFLFlBQUEsK0JBQ0FDLE1BQUEsQ0FBb0JpQixLQUFBLFVBRXBCLENBQ0FwQixFQUFBLEtBQXFCRSxZQUFBLDJCQXZCckJMLEtBd0JBUyxHQUNBLHFGQU9BLFdBQ0EsSUFDQVIsRUFEQUQsS0FDQUUsZUFDQUMsRUFGQUgsS0FFQUksTUFBQUQsSUFBQUYsRUFDQSxPQUFBRSxFQUFBLE9BQXNCRSxZQUFBLGFBQTJCLENBQ2pERixFQUFBLE9BQWlCRSxZQUFBLFFBQXNCLENBSnZDTCxLQUl1Q1MsR0FBQSxVQUp2Q1QsS0FLQVMsR0FBQSxLQUNBTixFQUFBLE9BQWlCRSxZQUFBLGVHalJqQixFQUNBLEtBQ0EsV0FDQSxNQXVCQWlGLEVBQUFHLFFBQUFDLE9BQUEsZ0NBQ2VDLEVBQUEsUUFBQUwsa0VDMUNmLElBQUFNLEVBQUFDLEVBQUEsS0FBQUEsRUFBQUMsRUFBQUYsR0FBMlIsc0dDQTNSLElBQUFHLEVBQUFGLEVBQUEsS0FBQUEsRUFBQUMsRUFBQUMsR0FBbVQsb0NDQW5ULElBQUFDLEVBQUFILEVBQUEsS0FBQUEsRUFBQUMsRUFBQUUsR0FBaVQsb0NDQWpULElBQUFDLEVBQUFKLEVBQUEsS0FBQUEsRUFBQUMsRUFBQUcsR0FBaVQiLCJmaWxlIjoianMvMjQuanM/dmVyc2lvbj0xLjAuMiIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZHVsZS1jb250YWluZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwibW9kdWxlLW5hdlwiLCB7IGF0dHJzOiB7IHRvcFJvdXRlOiBfdm0udG9wUm91dGUsIHBvczogX3ZtLnBvcyB9IH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kdWxlLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5cIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3BcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHJlc2V0OiBfdm0ucmVzZXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbHRlci1vcHRpb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJvcHRpb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmllbGRcIiB9LCBbX3ZtLl92KFwiSUTvvJpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5pZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImlkXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJvcHRpb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmllbGRcIiB9LCBbX3ZtLl92KFwi5ZCN56ew77yaXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnVzZXJuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS51c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0udXNlcm5hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJ1c2VybmFtZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgxKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRtIGxpc3RcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGFcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcImxpbmUtdGJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0aGVhZFwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInctNDBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElEXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYXJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJydW4taWNvbmZvbnQgcnVuLWFycm93IHRvcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImRhdGEtb3JkZXJcIjogXCJpZHxhc2NcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9yZGVyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJ1bi1pY29uZm9udCBydW4tYXJyb3cgYnRtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS1vcmRlclwiOiBcImlkfGRlc2NcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9yZGVyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEzMFwiIH0sIFtfdm0uX3YoXCLnlKjmiLdcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInctMTMwXCIgfSwgW192bS5fdihcIui2s+i/uVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xMDBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWIm+W7uuaXtumXtFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImFycm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicnVuLWljb25mb250IHJ1bi1hcnJvdyB0b3BcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLW9yZGVyXCI6IFwiY3JlYXRlX3RpbWV8YXNjXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vcmRlciB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJydW4taWNvbmZvbnQgcnVuLWFycm93IGJ0bVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImRhdGEtb3JkZXJcIjogXCJjcmVhdGVfdGltZXxkZXNjXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vcmRlciB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgICAgICB7IHJlZjogXCJ0Ym9keVwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZGF0YSwgZnVuY3Rpb24odikge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiB2LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImRhdGEtaWRcIjogdi5pZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnNlbGVjdEV2ZW50IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJtdWx0aXBsZS1yb3dzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi44CQSUTjgJFcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3Modi5pZCkpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHYuYXZhdGFyX2V4cGxhaW4gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcIm11bHRpcGxlLXJvd3NcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLjgJDnlKjmiLflkI3jgJFcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3Modi51c2VybmFtZSkpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi44CQ5omL5py65Y+356CB44CRXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKHYucGhvbmUpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJtdWx0aXBsZS1yb3dzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoXCLjgJDmnIDov5HkuIDmrKHnmbvlvZVpcOOAkVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh2Lmxhc3RfaXApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihcIuOAkOacgOi/keS4gOasoeeZu+W9leaXtumXtOOAkVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh2Lmxhc3RfdGltZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3Modi5jcmVhdGVfdGltZSkpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uZGF0YS5sZW5ndGggPT0gMFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBjb2xzcGFuOiBcIjRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLmsqHmnInnm7jlhbPmlbDmja5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdlXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiUGFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICB0b3RhbDogX3ZtLnBhZ2UudG90YWwsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ6IF92bS5mb3JtLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIFwicGFnZS1zaXplXCI6IF92bS5wYWdlLnBlcl9wYWdlLFxuICAgICAgICAgICAgICAgICAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic2hvdy10b3RhbFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBcInNob3ctZWxldmF0b3JcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IFwib24tY2hhbmdlXCI6IF92bS5wYWdlRXZlbnQgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LWxvYWRpbmdcIiwgeyByZWY6IFwibG9hZGluZ1wiIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicnVuLXRpdGxlXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZWZ0XCIgfSwgW192bS5fdihcIuetm+mAiVwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmlnaHRcIiB9KVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwib3B0aW9uXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWVsZFwiIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicnVuLWJ1dHRvbiBydW4tYnV0dG9uLWJsdWVcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIuaPkOS6pFwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJydW4tYnV0dG9uIHJ1bi1idXR0b24teWVsbG93XCIsXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInJlc2V0XCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwicnVuLWljb25mb250IHJ1bi1yZXNldFwiIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOmHjee9rlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJydW4tdGl0bGVcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxlZnRcIiB9LCBbX3ZtLl92KFwi5pWw5o2u5YiX6KGoXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcInYtbGlzdFwiICxcclxuICAgIGRhdGEgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgICAgIGlkOiAnJyAsXHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogJycgLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6ICcnICxcclxuICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIGluczoge1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogbnVsbCAsXHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICBwZW5kaW5nOiB7XHJcbiAgICAgICAgICAgICAgICBkZWw6IG51bGwgLFxyXG4gICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgYWpheDoge1xyXG4gICAgICAgICAgICAgICAgbGlzdDogbnVsbCAsXHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICBkb206IHt9ICxcclxuICAgICAgICAgICAgYXBpOiB1c2VyQXBpICxcclxuICAgICAgICAgICAgZGF0YTogW10gLFxyXG4gICAgICAgICAgICAvLyDlvoXliKDpmaTnmoTorrDlvZUgaWQg5YiX6KGoXHJcbiAgICAgICAgICAgIGlkTGlzdDogW10gLFxyXG4gICAgICAgICAgICBwYWdlOiB7XHJcbiAgICAgICAgICAgICAgICBwYWdlOiAxICxcclxuICAgICAgICAgICAgICAgIHBlcl9wYWdlOiAyMFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH07XHJcbiAgICB9ICxcclxuXHJcbiAgICAvLyDms6jmhI8gbWl4aW5zIOaNouWFpeeahOmhuuW6j1xyXG4gICAgLy8g5aaC5p6c5re35YWl55qE6aG65bqP5LiN5a+577yM5bCG5Lya5oql6ZSZXHJcbiAgICBtaXhpbnM6IFtcclxuICAgICAgICAvLyDliqDovb1cclxuICAgICAgICBtaXhpbnMubG9hZGluZyAsXHJcbiAgICAgICAgLy8g54q25oCBXHJcbiAgICAgICAgbWl4aW5zLnN0YXRlICxcclxuICAgICAgICAvLyDojrflj5blsYLnuqfmlbDmja5cclxuICAgICAgICBtaXhpbnMubGlzdC5nZXQubm9ybWFsICxcclxuICAgICAgICAvLyDmlbDmja7ov4fmu6RcclxuICAgICAgICBtaXhpbnMubGlzdC5maWx0ZXIgLFxyXG4gICAgICAgIC8vIOWIoOmZpOaVsOaNrlxyXG4gICAgICAgIG1peGlucy5saXN0LmRlbCAsXHJcbiAgICAgICAgLy8g5YiG6aG15pWw5o2uXHJcbiAgICAgICAgbWl4aW5zLmxpc3QucGFnZSAsXHJcbiAgICBdICxcclxuXHJcbiAgICBjcmVhdGVkICgpIHtcclxuXHJcbiAgICB9ICxcclxuXHJcbiAgICBtb3VudGVkICgpIHtcclxuICAgICAgICAvLyDojrflj5bnm7jlhbPnmoQgZG9tXHJcbiAgICAgICAgdGhpcy5pbml0RG9tKCk7XHJcbiAgICAgICAgLy8g5Yid5aeL5YyW5b+F6aG755qE55u45YWz5a6e5L6LXHJcbiAgICAgICAgdGhpcy5pbml0SW5zdGFuY2UoKTtcclxuICAgICAgICAvLyDojrflj5blvZPliY3mlbDmja5cclxuICAgICAgICB0aGlzLmdldERhdGEoKTtcclxuICAgIH0gLFxyXG5cclxuXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgLy8g5Yid5aeL5YyWIGRvbVxyXG4gICAgICAgIGluaXREb20gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmRvbS50Ym9keSA9IEcodGhpcy4kcmVmcy50Ym9keSk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIC8vIOWIneWni+WMluW/hemhu+eahOWunuS+i1xyXG4gICAgICAgIGluaXRJbnN0YW5jZSAoKSB7XHJcblxyXG4gICAgICAgIH0gLFxyXG4gICAgfSAsXHJcblxyXG59XHJcblxyXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi9saXN0LmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi9saXN0LmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01OTIzNzM3NyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9qcy9saXN0LmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9qcy9saXN0LmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuLi9wdWJsaWMvY3NzL2dsb2JhbC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuaW1wb3J0IHN0eWxlMSBmcm9tIFwiLi4vcHVibGljL2Nzcy9wdWJsaWMuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9NTkyMzczNzcmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcbmltcG9ydCBzdHlsZTIgZnJvbSBcIi4uL3B1YmxpYy9jc3MvbGlzdC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MiZpZD01OTIzNzM3NyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuaW1wb3J0IHN0eWxlMyBmcm9tIFwiLi9jc3MvbGlzdC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MyZpZD01OTIzNzM3NyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNTkyMzczNzdcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFx3b3JrXFxcXGNvZGVcXFxcY2FyXFxcXHB1YmxpY1xcXFxtb2R1bGVcXFxcYWRtaW5cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzU5MjM3Mzc3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzU5MjM3Mzc3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01OTIzNzM3NyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1OTIzNzM3NycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic291cmNlL3Z1ZS92aWV3L3VzZXIvbGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vZ2xvYmFsLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vZ2xvYmFsLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3B1YmxpYy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD01OTIzNzM3NyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3B1YmxpYy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD01OTIzNzM3NyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9saXN0LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0yJmlkPTU5MjM3Mzc3JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vbGlzdC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MiZpZD01OTIzNzM3NyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9saXN0LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0zJmlkPTU5MjM3Mzc3JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vbGlzdC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MyZpZD01OTIzNzM3NyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=