(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{368:function(t,i,n){"use strict";n.r(i);var s=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"module-container"},[n("module-nav",{attrs:{topRoute:t.topRoute,pos:t.pos}}),t._v(" "),n("div",{staticClass:"module-content"},[n("div",{staticClass:"in"},[n("form",{on:{submit:function(i){return i.preventDefault(),t.submit(i)}}},[n("table",{staticClass:"input-tb"},[n("tbody",[n("tr",{class:t.getClass(t.error.name),attrs:{id:"name"}},[n("td",[t._v("名称")]),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-text",attrs:{type:"text"},domProps:{value:t.form.name},on:{input:function(i){i.target.composing||t.$set(t.form,"name",i.target.value)}}}),t._v(" "),n("span",{staticClass:"necessary"},[t._v("*")]),t._v(" "),n("span",{staticClass:"tip"}),t._v(" "),n("span",{staticClass:"msg"},[t._v(t._s(t.error.name))])])]),t._v(" "),n("tr",{class:t.getClass(t.error.weight),attrs:{id:"weight"}},[n("td",[t._v("权重")]),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.weight,expression:"form.weight"}],staticClass:"form-text",attrs:{type:"number",step:"0"},domProps:{value:t.form.weight},on:{input:function(i){i.target.composing||t.$set(t.form,"weight",i.target.value)}}}),t._v(" "),n("span",{staticClass:"necessary"}),t._v(" "),n("span",{staticClass:"tip"},[t._v("默认：0，仅允许输入整数")]),t._v(" "),n("span",{staticClass:"msg"},[t._v(t._s(t.error.weight))])])]),t._v(" "),t._m(0)])])])])]),t._v(" "),n("v-loading",{ref:"loading"})],1)};s._withStripped=!0;var e={name:"v-brand",data:function(){return{form:{name:"",letter:"",hot:"n",weight:0},error:{},ajax:{get:null,submit:null},dom:{},ins:{loading:null},pending:{submit:null},data:{},callback:{},api:detectionGroupApi}},created:function(){},mounted:function(){this.initDom(),this.initInstance(),this.getData()},mixins:[mixins.state,mixins.loading,mixins.form.get,mixins.form.confirm],methods:{initDom:function(){},initInstance:function(){},check:function(t){return{status:!0,field:"",msg:""}},submit:function(){var t=this;new Promise(function(i){if(t.pending.submit)t.$info("请求中...请耐心等待");else{var n=t.check();if(!n.status)return t.error[n.field]=n.msg,void vScroll(n.field);t.pending.submit=!0,t.ins.loading.show(),t.ajax.submit=t.api[t.param.mode](t.form,function(n,s){if(t.error={},200!=s)return t.initialState("loading","submit","submit"),400==s?(t.error=n,void vScroll(G.firstKey(n))):void t.$error(n);t.form.id=n,i()}),t.ins.loading.setArgs(t.ajax.submit,"submit")}}).then(function(){t.confirm("位置分组","/detectionGroup/list")}).finally(function(){t.initialState("loading","submit","submit")})}}},a=(n(393),n(609),n(610),n(14)),o=Object(a.a)(e,s,[function(){var t=this.$createElement,i=this._self._c||t;return i("tr",[i("td",{attrs:{colspan:"2"}},[i("button",{staticClass:"run-button run-button-submit",attrs:{type:"submit"}},[this._v("提交")])])])}],!1,null,"4818ab98",null);o.options.__file="source/vue/view/DetectionGroup/thing.vue";i.default=o.exports},392:function(t,i,n){},393:function(t,i,n){"use strict";var s=n(392);n.n(s).a},467:function(t,i,n){},468:function(t,i,n){},609:function(t,i,n){"use strict";var s=n(467);n.n(s).a},610:function(t,i,n){"use strict";var s=n(468);n.n(s).a}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvRGV0ZWN0aW9uR3JvdXAvdGhpbmcudnVlPzZhNGIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L0RldGVjdGlvbkdyb3VwL2pzL3RoaW5nLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9EZXRlY3Rpb25Hcm91cC9qcy90aGluZy5qcz8yYjdiIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9EZXRlY3Rpb25Hcm91cC90aGluZy52dWUiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9jc3MvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvcHVibGljL2Nzcy9wdWJsaWMuY3NzP2M3OTEiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L0RldGVjdGlvbkdyb3VwL2Nzcy90aGluZy5jc3MiXSwibmFtZXMiOlsicmVuZGVyIiwiX3ZtIiwidGhpcyIsIl9oIiwiJGNyZWF0ZUVsZW1lbnQiLCJfYyIsIl9zZWxmIiwic3RhdGljQ2xhc3MiLCJhdHRycyIsInRvcFJvdXRlIiwicG9zIiwiX3YiLCJvbiIsInN1Ym1pdCIsIiRldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2xhc3MiLCJnZXRDbGFzcyIsImVycm9yIiwibmFtZSIsImlkIiwiZGlyZWN0aXZlcyIsInJhd05hbWUiLCJ2YWx1ZSIsImZvcm0iLCJleHByZXNzaW9uIiwidHlwZSIsImRvbVByb3BzIiwiaW5wdXQiLCJ0YXJnZXQiLCJjb21wb3NpbmciLCIkc2V0IiwiX3MiLCJ3ZWlnaHQiLCJzdGVwIiwiX20iLCJyZWYiLCJfd2l0aFN0cmlwcGVkIiwianNfdGhpbmd2dWVfdHlwZV9zY3JpcHRfbGFuZ19qc18iLCJkYXRhIiwibGV0dGVyIiwiaG90IiwiYWpheCIsImdldCIsImRvbSIsImlucyIsImxvYWRpbmciLCJwZW5kaW5nIiwiY2FsbGJhY2siLCJhcGkiLCJkZXRlY3Rpb25Hcm91cEFwaSIsImNyZWF0ZWQiLCJtb3VudGVkIiwiaW5pdERvbSIsImluaXRJbnN0YW5jZSIsImdldERhdGEiLCJtaXhpbnMiLCJzdGF0ZSIsImNvbmZpcm0iLCJtZXRob2RzIiwiY2hlY2siLCJzdGF0dXMiLCJmaWVsZCIsIm1zZyIsIl90aGlzIiwiUHJvbWlzZSIsInJlc29sdmUiLCIkaW5mbyIsImZpbHRlciIsInZTY3JvbGwiLCJzaG93IiwicGFyYW0iLCJtb2RlIiwicmVzIiwiY29kZSIsImluaXRpYWxTdGF0ZSIsIkciLCJmaXJzdEtleSIsIiRlcnJvciIsInNldEFyZ3MiLCJ0aGVuIiwiZmluYWxseSIsImNvbXBvbmVudCIsIk9iamVjdCIsImNvbXBvbmVudE5vcm1hbGl6ZXIiLCJjb2xzcGFuIiwib3B0aW9ucyIsIl9fZmlsZSIsIl9fd2VicGFja19leHBvcnRzX18iLCJfbm9kZV9tb2R1bGVzX21pbmlfY3NzX2V4dHJhY3RfcGx1Z2luX2Rpc3RfbG9hZGVyX2pzX25vZGVfbW9kdWxlc19jc3NfbG9hZGVyX2Rpc3RfY2pzX2pzX3JlZl8xXzFfbm9kZV9tb2R1bGVzX3Z1ZV9sb2FkZXJfbGliX2xvYWRlcnNfc3R5bGVQb3N0TG9hZGVyX2pzX2dsb2JhbF9jc3NfdnVlX3R5cGVfc3R5bGVfaW5kZXhfMF9sYW5nX2Nzc19fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJuIiwiX25vZGVfbW9kdWxlc19taW5pX2Nzc19leHRyYWN0X3BsdWdpbl9kaXN0X2xvYWRlcl9qc19ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9kaXN0X2Nqc19qc19yZWZfMV8xX25vZGVfbW9kdWxlc192dWVfbG9hZGVyX2xpYl9sb2FkZXJzX3N0eWxlUG9zdExvYWRlcl9qc19wdWJsaWNfY3NzX3Z1ZV90eXBlX3N0eWxlX2luZGV4XzFfaWRfNDgxOGFiOThfc2NvcGVkX3RydWVfbGFuZ19jc3NfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18iLCJfbm9kZV9tb2R1bGVzX21pbmlfY3NzX2V4dHJhY3RfcGx1Z2luX2Rpc3RfbG9hZGVyX2pzX25vZGVfbW9kdWxlc19jc3NfbG9hZGVyX2Rpc3RfY2pzX2pzX3JlZl8xXzFfbm9kZV9tb2R1bGVzX3Z1ZV9sb2FkZXJfbGliX2xvYWRlcnNfc3R5bGVQb3N0TG9hZGVyX2pzX3RoaW5nX2Nzc192dWVfdHlwZV9zdHlsZV9pbmRleF8yX2lkXzQ4MThhYjk4X3Njb3BlZF90cnVlX2xhbmdfY3NzX19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fIl0sIm1hcHBpbmdzIjoia0dBQUEsSUFBQUEsRUFBQSxXQUNBLElBQUFDLEVBQUFDLEtBQ0FDLEVBQUFGLEVBQUFHLGVBQ0FDLEVBQUFKLEVBQUFLLE1BQUFELElBQUFGLEVBQ0EsT0FBQUUsRUFDQSxNQUNBLENBQUtFLFlBQUEsb0JBQ0wsQ0FDQUYsRUFBQSxjQUF3QkcsTUFBQSxDQUFTQyxTQUFBUixFQUFBUSxTQUFBQyxJQUFBVCxFQUFBUyxPQUNqQ1QsRUFBQVUsR0FBQSxLQUNBTixFQUFBLE9BQWlCRSxZQUFBLGtCQUFnQyxDQUNqREYsRUFBQSxPQUFtQkUsWUFBQSxNQUFvQixDQUN2Q0YsRUFDQSxPQUNBLENBQ0FPLEdBQUEsQ0FDQUMsT0FBQSxTQUFBQyxHQUVBLE9BREFBLEVBQUFDLGlCQUNBZCxFQUFBWSxPQUFBQyxNQUlBLENBQ0FULEVBQUEsU0FBMkJFLFlBQUEsWUFBMEIsQ0FDckRGLEVBQUEsU0FDQUEsRUFDQSxLQUNBLENBQ0FXLE1BQUFmLEVBQUFnQixTQUFBaEIsRUFBQWlCLE1BQUFDLE1BQ0FYLE1BQUEsQ0FBOEJZLEdBQUEsU0FFOUIsQ0FDQWYsRUFBQSxNQUFBSixFQUFBVSxHQUFBLFFBQ0FWLEVBQUFVLEdBQUEsS0FDQU4sRUFBQSxNQUNBQSxFQUFBLFNBQ0FnQixXQUFBLENBQ0EsQ0FDQUYsS0FBQSxRQUNBRyxRQUFBLFVBQ0FDLE1BQUF0QixFQUFBdUIsS0FBQUwsS0FDQU0sV0FBQSxjQUdBbEIsWUFBQSxZQUNBQyxNQUFBLENBQWtDa0IsS0FB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b3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJtb2R1bGUtY29udGFpbmVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcIm1vZHVsZS1uYXZcIiwgeyBhdHRyczogeyB0b3BSb3V0ZTogX3ZtLnRvcFJvdXRlLCBwb3M6IF92bS5wb3MgfSB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZHVsZS1jb250ZW50XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtdGJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0Ym9keVwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5nZXRDbGFzcyhfdm0uZXJyb3IubmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwibmFtZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuWQjeensFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLm5hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJuYW1lXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJuZWNlc3NhcnlcIiB9LCBbX3ZtLl92KFwiKlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpcFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3IubmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0Q2xhc3MoX3ZtLmVycm9yLndlaWdodCksXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwid2VpZ2h0XCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi5p2D6YeNXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ud2VpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLndlaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJudW1iZXJcIiwgc3RlcDogXCIwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLndlaWdodCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcIndlaWdodFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmVjZXNzYXJ5XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGlwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLpu5jorqTvvJow77yM5LuF5YWB6K646L6T5YWl5pW05pWwXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9yLndlaWdodCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtbG9hZGluZ1wiLCB7IHJlZjogXCJsb2FkaW5nXCIgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgY29sc3BhbjogXCIyXCIgfSB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicnVuLWJ1dHRvbiBydW4tYnV0dG9uLXN1Ym1pdFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwi5o+Q5LqkXCIpXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJ2LWJyYW5kXCIgLFxyXG4gICAgZGF0YSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZm9ybToge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJycgLFxyXG4gICAgICAgICAgICAgICAgbGV0dGVyOiAnJyAsXHJcbiAgICAgICAgICAgICAgICBob3Q6ICduJyAsXHJcbiAgICAgICAgICAgICAgICB3ZWlnaHQ6IDAgLFxyXG4gICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgZXJyb3I6IHt9ICxcclxuICAgICAgICAgICAgYWpheDoge1xyXG4gICAgICAgICAgICAgICAgZ2V0OiBudWxsICxcclxuICAgICAgICAgICAgICAgIHN1Ym1pdDogbnVsbCAsXHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICBkb206IHt9ICxcclxuICAgICAgICAgICAgaW5zOiB7XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBudWxsICxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGVuZGluZzoge1xyXG4gICAgICAgICAgICAgICAgc3VibWl0OiBudWxsICxcclxuICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIGRhdGE6IHt9ICxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IHtcclxuICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIGFwaTogZGV0ZWN0aW9uR3JvdXBBcGkgLFxyXG4gICAgICAgIH07XHJcbiAgICB9ICxcclxuICAgIGNyZWF0ZWQgKCkge1xyXG5cclxuICAgIH0gLFxyXG4gICAgbW91bnRlZCAoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0RG9tKCk7XHJcbiAgICAgICAgdGhpcy5pbml0SW5zdGFuY2UoKTtcclxuICAgICAgICB0aGlzLmdldERhdGEoKTtcclxuICAgIH0gLFxyXG4gICAgbWl4aW5zOiBbXHJcbiAgICAgICAgbWl4aW5zLnN0YXRlICxcclxuICAgICAgICBtaXhpbnMubG9hZGluZyAsXHJcbiAgICAgICAgbWl4aW5zLmZvcm0uZ2V0ICxcclxuICAgICAgICBtaXhpbnMuZm9ybS5jb25maXJtICxcclxuICAgIF0gLFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGluaXREb20gKCkge1xyXG5cclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgaW5pdEluc3RhbmNlICgpIHtcclxuXHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIC8vIOiOt+WPluaVsOaNrlxyXG4gICAgICAgIGNoZWNrIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHRydWUgLFxyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICcnICxcclxuICAgICAgICAgICAgICAgIG1zZzogJycgLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBzdWJtaXQgKCkge1xyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g5LiK5Lyg5Z+65pys5pWw5o2uXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZW5kaW5nLnN1Ym1pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGluZm8oJ+ivt+axguS4rS4uLuivt+iAkOW/g+etieW+hScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgZmlsdGVyID0gdGhpcy5jaGVjaygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFmaWx0ZXIuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcltmaWx0ZXIuZmllbGRdID0gZmlsdGVyLm1zZztcclxuICAgICAgICAgICAgICAgICAgICB2U2Nyb2xsKGZpbHRlci5maWVsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZy5zdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFqYXguc3VibWl0ID0gdGhpcy5hcGlbdGhpcy5wYXJhbS5tb2RlXSh0aGlzLmZvcm0gLCAocmVzICwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsU3RhdGUoJ2xvYWRpbmcnICwgJ3N1Ym1pdCcgLCAnc3VibWl0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlID09IDQwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHJlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZTY3JvbGwoRy5maXJzdEtleShyZXMpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZXJyb3IocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmlkID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5zZXRBcmdzKHRoaXMuYWpheC5zdWJtaXQgLCAnc3VibWl0Jyk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maXJtKCfkvY3nva7liIbnu4QnICwgJy9kZXRlY3Rpb25Hcm91cC9saXN0Jyk7XHJcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsU3RhdGUoJ2xvYWRpbmcnICwgJ3N1Ym1pdCcgLCAnc3VibWl0Jyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gLFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4vdGhpbmcuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuL3RoaW5nLmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi90aGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDgxOGFiOTgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vanMvdGhpbmcuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2pzL3RoaW5nLmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuLi9wdWJsaWMvY3NzL2dsb2JhbC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuaW1wb3J0IHN0eWxlMSBmcm9tIFwiLi4vcHVibGljL2Nzcy9wdWJsaWMuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9NDgxOGFiOTgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcbmltcG9ydCBzdHlsZTIgZnJvbSBcIi4vY3NzL3RoaW5nLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0yJmlkPTQ4MThhYjk4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI0ODE4YWI5OFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXHdvcmtcXFxcY29kZVxcXFxjYXJcXFxccHVibGljXFxcXG1vZHVsZVxcXFxhZG1pblxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDgxOGFiOTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDgxOGFiOTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3RoaW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ODE4YWI5OCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0ODE4YWI5OCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic291cmNlL3Z1ZS92aWV3L0RldGVjdGlvbkdyb3VwL3RoaW5nLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9nbG9iYWwuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9nbG9iYWwuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vcHVibGljLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTQ4MThhYjk4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vcHVibGljLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTQ4MThhYjk4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RoaW5nLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0yJmlkPTQ4MThhYjk4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGhpbmcuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTImaWQ9NDgxOGFiOTgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiXSwic291cmNlUm9vdCI6IiJ9