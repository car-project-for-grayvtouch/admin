(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{366:function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"module-container"},[s("module-nav",{attrs:{topRoute:t.topRoute,pos:t.pos}}),t._v(" "),s("div",{staticClass:"module-content"},[s("div",{staticClass:"in"},[s("form",{on:{submit:function(i){return i.preventDefault(),t.submit(i)}}},[s("table",{staticClass:"input-tb"},[s("tbody",[s("tr",{class:t.getClass(t.error.name),attrs:{id:"name"}},[s("td",[t._v("名称")]),t._v(" "),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-text",attrs:{type:"text"},domProps:{value:t.form.name},on:{input:function(i){i.target.composing||t.$set(t.form,"name",i.target.value)}}}),t._v(" "),s("span",{staticClass:"necessary"},[t._v("*")]),t._v(" "),s("span",{staticClass:"tip"}),t._v(" "),s("span",{staticClass:"msg"},[t._v(t._s(t.error.name))])])]),t._v(" "),s("tr",{class:t.getClass(t.error.image),attrs:{id:"image"}},[s("td",[t._v("检测项映射图片")]),t._v(" "),s("td",{ref:"image-container"},[s("div",{staticClass:"upload-image"},[t._m(0),t._v(" "),s("div",{staticClass:"init-show-image-list"},["edit"==t.param.mode&&t.form.image_explain?s("img",{staticClass:"init-show-image",attrs:{src:t.form.image_explain}}):t._e()]),t._v(" "),s("div",{staticClass:"preview-images hide"}),t._v(" "),t._m(1)]),t._v(" "),s("span",{staticClass:"tip"}),t._v(" "),s("span",{staticClass:"msg"},[t._v(t._s(t.error.image))])])]),t._v(" "),s("tr",{class:t.getClass(t.error.weight),attrs:{id:"weight"}},[s("td",[t._v("权重")]),t._v(" "),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.weight,expression:"form.weight"}],staticClass:"form-text",attrs:{type:"number",step:"0"},domProps:{value:t.form.weight},on:{input:function(i){i.target.composing||t.$set(t.form,"weight",i.target.value)}}}),t._v(" "),s("span",{staticClass:"necessary"}),t._v(" "),s("span",{staticClass:"tip"},[t._v("默认：0，仅允许输入整数")]),t._v(" "),s("span",{staticClass:"msg"},[t._v(t._s(t.error.weight))])])]),t._v(" "),t._m(2)])])])])]),t._v(" "),s("v-loading",{ref:"loading"})],1)};e._withStripped=!0;var a={name:"v-brand",data:function(){return{form:{name:"",letter:"",hot:"n",weight:0},error:{},ajax:{get:null,submit:null},dom:{},ins:{loading:null,image:null},pending:{submit:null},data:{},callback:{image:null},api:detectionModuleApi,image:{}}},created:function(){},mounted:function(){this.initDom(),this.initInstance(),this.getData()},mixins:[mixins.state,mixins.loading,mixins.form.image,mixins.form.get,mixins.form.confirm],methods:{initDom:function(){},initInstance:function(){},check:function(t){return{status:!0,field:"",msg:""}},submit:function(){var t=this;new Promise(function(i){if(t.pending.submit)t.$info("请求中...请耐心等待");else{var s=t.check();if(!s.status)return t.error[s.field]=s.msg,void vScroll(s.field);t.pending.submit=!0,t.ins.loading.show(),t.ajax.submit=t.api[t.param.mode](t.form,function(s,e){if(200!=e)return t.initialState("loading","submit","submit"),400==e?(t.error=s,void vScroll(G.firstKey(s))):void t.$error(s);t.form.id=s,i()}),t.ins.loading.setArgs(t.ajax.submit,"submit")}}).then(function(){return new Promise(function(i){t.ins.image.empty()?i(!1):(t.callback.image=function(s,e){if(200!=e)return t.eNotice(s),void i(!1);t.image=s,i(!0)},t.ins.image.upload())})}).then(function(i){return new Promise(function(s){i?t.api.image({id:t.form.id,image:t.image.url},function(i,e){s(),200==e||t.eNotice(i)}):s(!0)})}).then(function(){t.confirm("检测模块","/detectionModule/list")}).finally(function(){t.initialState("loading","submit","submit")})}}},n=(s(393),s(604),s(605),s(14)),r=Object(n.a)(a,e,[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"select-images"},[i("div",{staticClass:"upload-show"},[i("div",{staticClass:"image-line"},[i("img",{staticClass:"image upload-image-btn",attrs:{src:""}}),i("span",{staticClass:"selected-count hide"},[this._v("10")])]),this._v(" "),i("div",{staticClass:"text-line"},[this._v("请选择要上传的图片")]),this._v(" "),i("div",{staticClass:"clear-selected",attrs:{title:"清空已选择的图片"}},[i("img",{staticClass:"image",attrs:{src:""}})]),this._v(" "),i("input",{staticClass:"upload-images-input",attrs:{type:"file",name:"upload_images"}})]),this._v(" "),i("div",{staticClass:"tip"},[this._v("这边是提示内容")])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"upload-image-list hide"},[s("div",{staticClass:"upload-title"},[t._v("待上传列表")]),t._v(" "),s("div",{staticClass:"image-list"},[s("div",{staticClass:"list-content list-title"},[s("div",{staticClass:"item div-preview"},[t._v("图片预览")]),t._v(" "),s("div",{staticClass:"item div-type"},[t._v("类型")]),t._v(" "),s("div",{staticClass:"item div-size"},[t._v("大小")]),t._v(" "),s("div",{staticClass:"item div-speed"},[t._v("速度")]),t._v(" "),s("div",{staticClass:"item div-status"},[t._v("状态")]),t._v(" "),s("div",{staticClass:"item div-opr"},[t._v("操作")])]),t._v(" "),s("div",{staticClass:"list-content list-body"})])])},function(){var t=this.$createElement,i=this._self._c||t;return i("tr",[i("td",{attrs:{colspan:"2"}},[i("button",{staticClass:"run-button run-button-submit",attrs:{type:"submit"}},[this._v("提交")])])])}],!1,null,"995d0976",null);r.options.__file="source/vue/view/detectionModule/thing.vue";i.default=r.exports},392:function(t,i,s){},393:function(t,i,s){"use strict";var e=s(392);s.n(e).a},462:function(t,i,s){},463:function(t,i,s){},604:function(t,i,s){"use strict";var e=s(462);s.n(e).a},605:function(t,i,s){"use strict";var e=s(463);s.n(e).a}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvZGV0ZWN0aW9uTW9kdWxlL3RoaW5nLnZ1ZT80MTlhIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9kZXRlY3Rpb25Nb2R1bGUvanMvdGhpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L2RldGVjdGlvbk1vZHVsZS9qcy90aGluZy5qcz9mNTVlIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9kZXRlY3Rpb25Nb2R1bGUvdGhpbmcudnVlIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9wdWJsaWMvY3NzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9jc3MvcHVibGljLmNzcz9lNTVlIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9kZXRlY3Rpb25Nb2R1bGUvY3NzL3RoaW5nLmNzcyJdLCJuYW1lcyI6WyJyZW5kZXIiLCJfdm0iLCJ0aGlzIiwiX2giLCIkY3JlYXRlRWxlbWVudCIsIl9jIiwiX3NlbGYiLCJzdGF0aWNDbGFzcyIsImF0dHJzIiwidG9wUm91dGUiLCJwb3MiLCJfdiIsIm9uIiwic3VibWl0IiwiJGV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjbGFzcyIsImdldENsYXNzIiwiZXJyb3IiLCJuYW1lIiwiaWQiLCJkaXJlY3RpdmVzIiwicmF3TmFtZSIsInZhbHVlIiwiZm9ybSIsImV4cHJlc3Npb24iLCJ0eXBlIiwiZG9tUHJvcHMiLCJpbnB1dCIsInRhcmdldCIsImNvbXBvc2luZyIsIiRzZXQiLCJfcyIsImltYWdlIiwicmVmIiwiX20iLCJwYXJhbSIsIm1vZGUiLCJpbWFnZV9leHBsYWluIiwic3JjIiwiX2UiLCJ3ZWlnaHQiLCJzdGVwIiwiX3dpdGhTdHJpcHBlZCIsImpzX3RoaW5ndnVlX3R5cGVfc2NyaXB0X2xhbmdfanNfIiwiZGF0YSIsImxldHRlciIsImhvdCIsImFqYXgiLCJnZXQiLCJkb20iLCJpbnMiLCJsb2FkaW5nIiwicGVuZGluZyIsImNhbGxiYWNrIiwiYXBpIiwiZGV0ZWN0aW9uTW9kdWxlQXBpIiwiY3JlYXRlZCIsIm1vdW50ZWQiLCJpbml0RG9tIiwiaW5pdEluc3RhbmNlIiwiZ2V0RGF0YSIsIm1peGlucyIsInN0YXRlIiwiY29uZmlybSIsIm1ldGhvZHMiLCJjaGVjayIsInN0YXR1cyIsImZpZWxkIiwibXNnIiwiX3RoaXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsIiRpbmZvIiwiZmlsdGVyIiwidlNjcm9sbCIsInNob3ciLCJyZXMiLCJjb2RlIiwiaW5pdGlhbFN0YXRlIiwiRyIsImZpcnN0S2V5IiwiJGVycm9yIiwic2V0QXJncyIsInRoZW4iLCJlbXB0eSIsImVOb3RpY2UiLCJ1cGxvYWQiLCJuZXh0IiwidXJsIiwiZmluYWxseSIsImNvbXBvbmVudCIsIk9iamVjdCIsImNvbXBvbmVudE5vcm1hbGl6ZXIiLCJ0aXRsZSIsImNvbHNwYW4iLCJvcHRpb25zIiwiX19maWxlIiwiX193ZWJwYWNrX2V4cG9ydHNfXyIsIl9ub2RlX21vZHVsZXNfbWluaV9jc3NfZXh0cmFjdF9wbHVnaW5fZGlzdF9sb2FkZXJfanNfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfZGlzdF9janNfanNfcmVmXzFfMV9ub2RlX21vZHVsZXNfdnVlX2xvYWRlcl9saWJfbG9hZGVyc19zdHlsZVBvc3RMb2FkZXJfanNfZ2xvYmFsX2Nzc192dWVfdHlwZV9zdHlsZV9pbmRleF8wX2xhbmdfY3NzX19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm4iLCJfbm9kZV9tb2R1bGVzX21pbmlfY3NzX2V4dHJhY3RfcGx1Z2luX2Rpc3RfbG9hZGVyX2pzX25vZGVfbW9kdWxlc19jc3NfbG9hZGVyX2Rpc3RfY2pzX2pzX3JlZl8xXzFfbm9kZV9tb2R1bGVzX3Z1ZV9sb2FkZXJfbGliX2xvYWRlcnNfc3R5bGVQb3N0TG9hZGVyX2pzX3B1YmxpY19jc3NfdnVlX3R5cGVfc3R5bGVfaW5kZXhfMV9pZF85OTVkMDk3Nl9zY29wZWRfdHJ1ZV9sYW5nX2Nzc19fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyIsIl9ub2RlX21vZHVsZXNfbWluaV9jc3NfZXh0cmFjdF9wbHVnaW5fZGlzdF9sb2FkZXJfanNfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfZGlzdF9janNfanNfcmVmXzFfMV9ub2RlX21vZHVsZXNfdnVlX2xvYWRlcl9saWJfbG9hZGVyc19zdHlsZVBvc3RMb2FkZXJfanNfdGhpbmdfY3NzX3Z1ZV90eXBlX3N0eWxlX2luZGV4XzJfaWRfOTk1ZDA5NzZfc2NvcGVkX3RydWVfbGFuZ19jc3NfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18iXSwibWFwcGluZ3MiOiJrR0FBQSxJQUFBQSxFQUFBLFdBQ0EsSUFBQUMsRUFBQUMsS0FDQUMsRUFBQUYsRUFBQUcsZUFDQUMsRUFBQUosRUFBQUssTUFBQUQsSUFBQUYsRUFDQSxPQUFBRSxFQUNBLE1BQ0EsQ0FBS0UsWUFBQSxvQkFDTCxDQUNBRixFQUFBLGNBQXdCRyxNQUFBLENBQVNDLFNBQUFSLEVBQUFRLFNBQUFDLElBQUFULEVBQUFTLE9BQ2pDVCxFQUFBVSxHQUFBLEtBQ0FOLEVBQUEsT0FBaUJFLFlBQUEsa0JBQWdDLENBQ2pERixFQUFBLE9BQW1CRSxZQUFBLE1BQW9CLENBQ3ZDRixFQUNBLE9BQ0EsQ0FDQU8sR0FBQSxDQUNBQyxPQUFBLFNBQUFDLEdBRUEsT0FEQUEsRUFBQUMsaUJBQ0FkLEVBQUFZLE9BQUFDLE1BSUEsQ0FDQVQsRUFBQSxTQUEyQkUsWUFBQSxZQUEwQixDQUNyREYsRUFBQSxTQUNBQSxFQUNBLEtBQ0EsQ0FDQVcsTUFBQWYsRUFBQWdCLFNBQUFoQixFQUFBaUIsTUFBQUMsTUFDQVgsTUFBQSxDQUE4QlksR0FBQSxTQUU5QixDQUNBZixFQUFBLE1BQUFKLEVBQUFVLEdBQUEsUUFDQVYsRUFBQVUsR0FBQSxLQUNBTixFQUFBLE1BQ0FBLEVBQUEsU0FDQWdCLFdBQUEsQ0FDQSxDQUNB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VSxHQUFBLFFBQ3JEVixFQUFBVSxHQUFBLEtBQ0FOLEVBQUEsT0FBcUJFLFlBQUEsbUJBQWlDLENBQUFOLEVBQUFVLEdBQUEsUUFDdERWLEVBQUFVLEdBQUEsS0FDQU4sRUFBQSxPQUFxQkUsWUFBQSxnQkFBOEIsQ0FBQU4sRUFBQVUsR0FBQSxVQUVuRFYsRUFBQVUsR0FBQSxLQUNBTixFQUFBLE9BQW1CRSxZQUFBLGdDQUluQixXQUNBLElBQ0FKLEVBREFELEtBQ0FFLGVBQ0FDLEVBRkFILEtBRUFJLE1BQUFELElBQUFGLEVBQ0EsT0FBQUUsRUFBQSxNQUNBQSxFQUFBLE1BQWdCRyxNQUFBLENBQVN1RixRQUFBLE1BQWlCLENBQzFDMUYsRUFDQSxTQUNBLENBQ0FFLFlBQUEsK0JBQ0FDLE1BQUEsQ0FBb0JrQixLQUFBLFdBRXBCLENBWEF4QixLQVdBUyxHQUFBLGVHN05BLEVBQ0EsS0FDQSxXQUNBLE1BdUJBZ0YsRUFBQUssUUFBQUMsT0FBQSw0Q0FDZUMsRUFBQSxRQUFBUCxrRUN6Q2YsSUFBQVEsRUFBQUMsRUFBQSxLQUFBQSxFQUFBQyxFQUFBRixHQUEyUixnRkNBM1IsSUFBQUcsRUFBQUYsRUFBQSxLQUFBQSxFQUFBQyxFQUFBQyxHQUFtVCxvQ0NBblQsSUFBQUMsRUFBQUgsRUFBQSxLQUFBQSxFQUFBQyxFQUFBRSxHQUFrVCIsImZpbGUiOiJqcy80MS5qcz92ZXJzaW9uPTEuMC4wIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kdWxlLWNvbnRhaW5lclwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJtb2R1bGUtbmF2XCIsIHsgYXR0cnM6IHsgdG9wUm91dGU6IF92bS50b3BSb3V0ZSwgcG9zOiBfdm0ucG9zIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2R1bGUtY29udGVudFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpblwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LXRiXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwidGJvZHlcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0Q2xhc3MoX3ZtLmVycm9yLm5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIm5hbWVcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLlkI3np7BcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5uYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibmFtZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmVjZXNzYXJ5XCIgfSwgW192bS5fdihcIipcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0aXBcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9yLm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldENsYXNzKF92bS5lcnJvci5pbWFnZSksXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiaW1hZ2VcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLmo4DmtYvpobnmmKDlsITlm77niYdcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyByZWY6IFwiaW1hZ2UtY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ1cGxvYWQtaW1hZ2VcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbml0LXNob3ctaW1hZ2UtbGlzdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFyYW0ubW9kZSA9PSBcImVkaXRcIiAmJiBfdm0uZm9ybS5pbWFnZV9leHBsYWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbml0LXNob3ctaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5mb3JtLmltYWdlX2V4cGxhaW4gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcmV2aWV3LWltYWdlcyBoaWRlXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGlwXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvci5pbWFnZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0Q2xhc3MoX3ZtLmVycm9yLndlaWdodCksXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwid2VpZ2h0XCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi5p2D6YeNXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ud2VpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLndlaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJudW1iZXJcIiwgc3RlcDogXCIwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLndlaWdodCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcIndlaWdodFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmVjZXNzYXJ5XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGlwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLpu5jorqTvvJow77yM5LuF5YWB6K646L6T5YWl5pW05pWwXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9yLndlaWdodCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDIpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtbG9hZGluZ1wiLCB7IHJlZjogXCJsb2FkaW5nXCIgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZWxlY3QtaW1hZ2VzXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ1cGxvYWQtc2hvd1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbWFnZS1saW5lXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltYWdlIHVwbG9hZC1pbWFnZS1idG5cIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCJcIiB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwic2VsZWN0ZWQtY291bnQgaGlkZVwiIH0sIFtfdm0uX3YoXCIxMFwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtbGluZVwiIH0sIFtfdm0uX3YoXCLor7fpgInmi6nopoHkuIrkvKDnmoTlm77niYdcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbGVhci1zZWxlY3RlZFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwi5riF56m65bey6YCJ5oup55qE5Zu+54mHXCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW19jKFwiaW1nXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW1hZ2VcIiwgYXR0cnM6IHsgc3JjOiBcIlwiIH0gfSldXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInVwbG9hZC1pbWFnZXMtaW5wdXRcIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImZpbGVcIiwgbmFtZTogXCJ1cGxvYWRfaW1hZ2VzXCIgfVxuICAgICAgICB9KVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXBcIiB9LCBbX3ZtLl92KFwi6L+Z6L655piv5o+Q56S65YaF5a65XCIpXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInVwbG9hZC1pbWFnZS1saXN0IGhpZGVcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInVwbG9hZC10aXRsZVwiIH0sIFtfdm0uX3YoXCLlvoXkuIrkvKDliJfooahcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImltYWdlLWxpc3RcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGlzdC1jb250ZW50IGxpc3QtdGl0bGVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtIGRpdi1wcmV2aWV3XCIgfSwgW192bS5fdihcIuWbvueJh+mihOiniFwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtIGRpdi10eXBlXCIgfSwgW192bS5fdihcIuexu+Wei1wiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtIGRpdi1zaXplXCIgfSwgW192bS5fdihcIuWkp+Wwj1wiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtIGRpdi1zcGVlZFwiIH0sIFtfdm0uX3YoXCLpgJ/luqZcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbSBkaXYtc3RhdHVzXCIgfSwgW192bS5fdihcIueKtuaAgVwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtIGRpdi1vcHJcIiB9LCBbX3ZtLl92KFwi5pON5L2cXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGlzdC1jb250ZW50IGxpc3QtYm9keVwiIH0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGNvbHNwYW46IFwiMlwiIH0gfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJ1bi1idXR0b24gcnVuLWJ1dHRvbi1zdWJtaXRcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIuaPkOS6pFwiKV1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwidi1icmFuZFwiICxcclxuICAgIGRhdGEgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICcnICxcclxuICAgICAgICAgICAgICAgIGxldHRlcjogJycgLFxyXG4gICAgICAgICAgICAgICAgaG90OiAnbicgLFxyXG4gICAgICAgICAgICAgICAgd2VpZ2h0OiAwICxcclxuICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIGVycm9yOiB7fSAsXHJcbiAgICAgICAgICAgIGFqYXg6IHtcclxuICAgICAgICAgICAgICAgIGdldDogbnVsbCAsXHJcbiAgICAgICAgICAgICAgICBzdWJtaXQ6IG51bGwgLFxyXG4gICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgZG9tOiB7fSAsXHJcbiAgICAgICAgICAgIGluczoge1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogbnVsbCAsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogbnVsbCAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBlbmRpbmc6IHtcclxuICAgICAgICAgICAgICAgIHN1Ym1pdDogbnVsbCAsXHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICBkYXRhOiB7fSAsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZTogbnVsbFxyXG4gICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgYXBpOiBkZXRlY3Rpb25Nb2R1bGVBcGkgLFxyXG4gICAgICAgICAgICAvLyDlm77niYdcclxuICAgICAgICAgICAgaW1hZ2U6IHt9ICxcclxuICAgICAgICB9O1xyXG4gICAgfSAsXHJcbiAgICBjcmVhdGVkICgpIHtcclxuXHJcbiAgICB9ICxcclxuICAgIG1vdW50ZWQgKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdERvbSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdEluc3RhbmNlKCk7XHJcbiAgICAgICAgdGhpcy5nZXREYXRhKCk7XHJcbiAgICB9ICxcclxuICAgIG1peGluczogW1xyXG4gICAgICAgIG1peGlucy5zdGF0ZSAsXHJcbiAgICAgICAgbWl4aW5zLmxvYWRpbmcgLFxyXG4gICAgICAgIG1peGlucy5mb3JtLmltYWdlICxcclxuICAgICAgICBtaXhpbnMuZm9ybS5nZXQgLFxyXG4gICAgICAgIG1peGlucy5mb3JtLmNvbmZpcm0gLFxyXG4gICAgXSAsXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgaW5pdERvbSAoKSB7XHJcblxyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBpbml0SW5zdGFuY2UgKCkge1xyXG5cclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgLy8g6I635Y+W5pWw5o2uXHJcbiAgICAgICAgY2hlY2sgKGRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogdHJ1ZSAsXHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJycgLFxyXG4gICAgICAgICAgICAgICAgbXNnOiAnJyAsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIHN1Ym1pdCAoKSB7XHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyDkuIrkvKDln7rmnKzmlbDmja5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlbmRpbmcuc3VibWl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kaW5mbygn6K+35rGC5LitLi4u6K+36ICQ5b+D562J5b6FJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBmaWx0ZXIgPSB0aGlzLmNoZWNrKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWZpbHRlci5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yW2ZpbHRlci5maWVsZF0gPSBmaWx0ZXIubXNnO1xyXG4gICAgICAgICAgICAgICAgICAgIHZTY3JvbGwoZmlsdGVyLmZpZWxkKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nLnN1Ym1pdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucy5sb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWpheC5zdWJtaXQgPSB0aGlzLmFwaVt0aGlzLnBhcmFtLm1vZGVdKHRoaXMuZm9ybSAsIChyZXMgLCBjb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUgIT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbFN0YXRlKCdsb2FkaW5nJyAsICdzdWJtaXQnICwgJ3N1Ym1pdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSA9PSA0MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSByZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2U2Nyb2xsKEcuZmlyc3RLZXkocmVzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVycm9yKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5pZCA9IHJlcztcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcuc2V0QXJncyh0aGlzLmFqYXguc3VibWl0ICwgJ3N1Ym1pdCcpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIOS4iuS8oOWbvueJh1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5zLmltYWdlLmVtcHR5KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2suaW1hZ2UgPSAocmVzICwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZU5vdGljZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSByZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucy5pbWFnZS51cGxvYWQoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KS50aGVuKChuZXh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyDmm7TmlrDlm77niYdcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbmV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaS5pbWFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmZvcm0uaWQgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZS51cmwgLFxyXG4gICAgICAgICAgICAgICAgICAgIH0gLCAocmVzICwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlICE9IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lTm90aWNlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm0oJ+ajgOa1i+aooeWdlycgLCAnL2RldGVjdGlvbk1vZHVsZS9saXN0Jyk7XHJcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsU3RhdGUoJ2xvYWRpbmcnICwgJ3N1Ym1pdCcgLCAnc3VibWl0Jyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gLFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4vdGhpbmcuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuL3RoaW5nLmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi90aGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTk1ZDA5NzYmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vanMvdGhpbmcuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2pzL3RoaW5nLmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuLi9wdWJsaWMvY3NzL2dsb2JhbC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuaW1wb3J0IHN0eWxlMSBmcm9tIFwiLi4vcHVibGljL2Nzcy9wdWJsaWMuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9OTk1ZDA5NzYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcbmltcG9ydCBzdHlsZTIgZnJvbSBcIi4vY3NzL3RoaW5nLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0yJmlkPTk5NWQwOTc2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI5OTVkMDk3NlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXHdvcmtcXFxcY29kZVxcXFxjYXJcXFxccHVibGljXFxcXG1vZHVsZVxcXFxhZG1pblxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOTk1ZDA5NzYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOTk1ZDA5NzYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3RoaW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05OTVkMDk3NiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5OTVkMDk3NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic291cmNlL3Z1ZS92aWV3L2RldGVjdGlvbk1vZHVsZS90aGluZy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vZ2xvYmFsLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vZ2xvYmFsLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3B1YmxpYy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD05OTVkMDk3NiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3B1YmxpYy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD05OTVkMDk3NiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90aGluZy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MiZpZD05OTVkMDk3NiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RoaW5nLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0yJmlkPTk5NWQwOTc2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==