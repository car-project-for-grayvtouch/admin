(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{348:function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"module-container"},[n("module-nav",{attrs:{topRoute:t.topRoute,pos:t.pos}}),t._v(" "),n("div",{staticClass:"module-content"},[n("div",{staticClass:"in"},[n("form",{on:{submit:function(i){return i.preventDefault(),t.submit(i)}}},[t._m(0),t._v(" "),n("div",{staticClass:"content"},[n("table",{staticClass:"input-tb"},[n("tbody",[n("tr",[n("td",[n("Tree",{ref:"tree",attrs:{data:t.routes,"show-checkbox":"",multiple:"","check-strictly":"","check-directly":""}})],1)]),t._v(" "),t._m(1)])])])])])]),t._v(" "),n("v-loading",{ref:"loading"})],1)};e._withStripped=!0;var s={name:"v-priv",data:function(){return{expand:!0,data:[],priv:[],routes:[],idList:[],ins:{tree:null},ajax:{getData:null,submit:null},pending:{submit:null},api:roleApi}},mixins:[mixins.loading],mounted:function(){this.initDom(),this.initInstance(),this.getData()},methods:{initDom:function(){},initInstance:function(){this.ins.tree=this.$refs.tree},getData:function(){var t=this;new Promise(function(i){t.ins.loading.show(),t.ajax.getData=t.api.info(t.param.id,function(n,e){i(),200==e?(t.priv=n.priv,t.handle(n.route),t.routes=n.route):t.$error(n)}),t.ins.loading.setArgs(t.ajax.getData)}).finally(function(){t.ins.loading.hide()})},handle:function(t){for(var i=0;i<t.length;++i){var n=t[i];n.title=n.name,n.checked=this.isSelected(n.id),n.expand=this.expand,n.children.length>0&&this.handle(n.children)}},isSelected:function(t){for(var i=0;i<this.priv.length;++i){if(t==this.priv[i].id)return!0}return!1},getSelected:function(){for(var t=this.ins.tree.getCheckedNodes(),i=[],n=0;n<t.length;++n){var e=t[n];i.push(e.id)}return i},submit:function(){var t=this;if(this.pending.submit)return this.$info("请求中...请耐心等待");var i=this;new Promise(function(i){t.pending.submit=!0,t.ins.loading.show(),t.ajax.submit=t.api.auth({id:t.param.id,route:G.jsonEncode(t.getSelected())},function(n,e){if(200!=e)return i(!1),void t.$error(n);i(!0)}),t.ins.loading.setArgs(t.ajax.submit,"submit")}).then(function(n){n&&t.$success("操作成功",{btn:["继续分配","角色列表"],btn1:function(t){layer.close(t)},btn2:function(){i.location("/role/list",null,"_self")}})}).finally(function(){t.pending.submit=!1,t.ins.loading.hide()})}}},a=(n(557),n(558),n(559),n(14)),r=Object(a.a)(s,e,[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"run-title"},[i("div",{staticClass:"left"},[this._v("权限列表")]),this._v(" "),i("div",{staticClass:"right"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("tr",[i("td",[i("button",{staticClass:"run-button run-button-submit"},[this._v("提交")])])])}],!1,null,"f7fb1e86",null);r.options.__file="source/vue/view/role/priv.vue";i.default=r.exports},411:function(t,i,n){},412:function(t,i,n){},413:function(t,i,n){},557:function(t,i,n){"use strict";var e=n(411);n.n(e).a},558:function(t,i,n){"use strict";var e=n(412);n.n(e).a},559:function(t,i,n){"use strict";var e=n(413);n.n(e).a}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvcm9sZS9wcml2LnZ1ZT9iYmY3Iiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9yb2xlL2pzL3ByaXYuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3JvbGUvanMvcHJpdi5qcz8xZjAwIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9yb2xlL3ByaXYudnVlIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9wdWJsaWMvY3NzL3B1YmxpYy5jc3M/YzY3NyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvcHVibGljL2Nzcy9saXN0LmNzcz80YzFiIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9yb2xlL2Nzcy9wcml2LmNzcyJdLCJuYW1lcyI6WyJyZW5kZXIiLCJfdm0iLCJ0aGlzIiwiX2giLCIkY3JlYXRlRWxlbWVudCIsIl9jIiwiX3NlbGYiLCJzdGF0aWNDbGFzcyIsImF0dHJzIiwidG9wUm91dGUiLCJwb3MiLCJfdiIsIm9uIiwic3VibWl0IiwiJGV2ZW50IiwicHJldmVudERlZmF1bHQiLCJfbSIsInJlZiIsImRhdGEiLCJyb3V0ZXMiLCJzaG93LWNoZWNrYm94IiwibXVsdGlwbGUiLCJjaGVjay1zdHJpY3RseSIsImNoZWNrLWRpcmVjdGx5IiwiX3dpdGhTdHJpcHBlZCIsImpzX3ByaXZ2dWVfdHlwZV9zY3JpcHRfbGFuZ19qc18iLCJuYW1lIiwiZXhwYW5kIiwicHJpdiIsImlkTGlzdCIsImlucyIsInRyZWUiLCJhamF4IiwiZ2V0RGF0YSIsInBlbmRpbmciLCJhcGkiLCJyb2xlQXBpIiwibWl4aW5zIiwibG9hZGluZyIsIm1vdW50ZWQiLCJpbml0RG9tIiwiaW5pdEluc3RhbmNlIiwibWV0aG9kcyIsIiRyZWZzIiwiX3RoaXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNob3ciLCJpbmZvIiwicGFyYW0iLCJpZCIsInJlcyIsImNvZGUiLCJoYW5kbGUiLCJyb3V0ZSIsIiRlcnJvciIsInNldEFyZ3MiLCJmaW5hbGx5IiwiaGlkZSIsImkiLCJsZW5ndGgiLCJjdXIiLCJ0aXRsZSIsImNoZWNrZWQiLCJpc1NlbGVjdGVkIiwiY2hpbGRyZW4iLCJnZXRTZWxlY3RlZCIsIm5vZGVzIiwiZ2V0Q2hlY2tlZE5vZGVzIiwicHVzaCIsIl90aGlzMiIsIiRpbmZvIiwic2VsZiIsImF1dGgiLCJHIiwianNvbkVuY29kZSIsInRoZW4iLCJuZXh0IiwiJHN1Y2Nlc3MiLCJidG4iLCJidG4xIiwiaW5kZXgiLCJsYXllciIsImNsb3NlIiwiYnRuMiIsImxvY2F0aW9uIiwiY29tcG9uZW50IiwiT2JqZWN0IiwiY29tcG9uZW50Tm9ybWFsaXplciIsIm9wdGlvbnMiLCJfX2ZpbGUiLCJfX3dlYnBhY2tfZXhwb3J0c19fIiwiX25vZGVfbW9kdWxlc19taW5pX2Nzc19leHRyYWN0X3BsdWdpbl9kaXN0X2xvYWRlcl9qc19ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9kaXN0X2Nqc19qc19yZWZfMV8xX25vZGVfbW9kdWxlc192dWVfbG9hZGVyX2xpYl9sb2FkZXJzX3N0eWxlUG9zdExvYWRlcl9qc19wdWJsaWNfY3NzX3Z1ZV90eXBlX3N0eWxlX2luZGV4XzBfaWRfZjdmYjFlODZfc2NvcGVkX3RydWVfbGFuZ19jc3NfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibiIsIl9ub2RlX21vZHVsZXNfbWluaV9jc3NfZXh0cmFjdF9wbHVnaW5fZGlzdF9sb2FkZXJfanNfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfZGlzdF9janNfanNfcmVmXzFfMV9ub2RlX21vZHVsZXNfdnVlX2xvYWRlcl9saWJfbG9hZGVyc19zdHlsZVBvc3RMb2FkZXJfanNfbGlzdF9jc3NfdnVlX3R5cGVfc3R5bGVfaW5kZXhfMV9pZF9mN2ZiMWU4Nl9zY29wZWRfdHJ1ZV9sYW5nX2Nzc19fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyIsIl9ub2RlX21vZHVsZXNfbWluaV9jc3NfZXh0cmFjdF9wbHVnaW5fZGlzdF9sb2FkZXJfanNfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfZGlzdF9janNfanNfcmVmXzFfMV9ub2RlX21vZHVsZXNfdnVlX2xvYWRlcl9saWJfbG9hZGVyc19zdHlsZVBvc3RMb2FkZXJfanNfcHJpdl9jc3NfdnVlX3R5cGVfc3R5bGVfaW5kZXhfMl9pZF9mN2ZiMWU4Nl9zY29wZWRfdHJ1ZV9sYW5nX2Nzc19fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyJdLCJtYXBwaW5ncyI6ImtHQUFBLElBQUFBLEVBQUEsV0FDQSxJQUFBQyxFQUFBQyxLQUNBQyxFQUFBRixFQUFBRyxlQUNBQyxFQUFBSixFQUFBSyxNQUFBRCxJQUFBRixFQUNBLE9BQUFFLEVBQ0EsTUFDQSxDQUFLRSxZQUFBLG9CQUNMLENBQ0FGLEVBQUEsY0FBd0JHLE1BQUEsQ0FBU0MsU0FBQVIsRUFBQVEsU0FBQUMsSUFBQVQsRUFBQVMsT0FDakNULEVBQUFVLEdBQUEsS0FDQU4sRUFBQSxPQUFpQkUsWUFBQSxrQkFBZ0MsQ0FDakRGLEVBQUEsT0FBbUJFLFlBQUEsTUFBb0IsQ0FDdkNGLEVBQ0EsT0FDQSxDQUNBTyxHQUFBLENBQ0FDLE9BQUEsU0FBQUMsR0FFQSxPQURBQSxFQUFBQyxpQkFDQWQsRUFBQVksT0FBQUMsTUFJQSxDQUNBYixFQUFBZSxHQUFBLEdBQ0FmLEVBQUFVLEdBQUEsS0FDQU4sRUFBQSxPQUF5QkUsWUFBQSxXQUF5QixDQUNsREYsRUFBQSxTQUE2QkUsWUFBQSxZQUEwQixDQUN2REYsRUFBQSxTQUNBQSxFQUFBLE1BQ0FBLEVBQ0EsS0FDQSxDQUNBQSxFQUFBLFFBQ0FZLElBQUEsT0FDQVQsTUFBQSxDQUNBVSxLQUFBakIsRUFBQWtCLE9BQ0FDLGdCQUFBLEdBQ0FDLFNBQUEsR0FDQUMsaUJBQUEsR0FDQUMsaUJBQUEsT0FJQSxLQUdBdEIsRUFBQVUsR0FBQSxLQUNBVixFQUFBZSxHQUFBLGVBUUFmLEVBQUFVLEdBQUEsS0FDQU4sRUFB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QUNGQyxNQUFNQyxNQUFNRixJQUVoQkcsS0FMbUIsV0FNZlosRUFBS2EsU0FBUyxhQUFlLEtBQU8sY0FHN0M1QixRQUFRLFdBQ1BhLEVBQUtwQyxRQUFRckIsUUFBUyxFQUN0QnlELEVBQUt4QyxJQUFJUSxRQUFRb0IsMkNFL0hqQzRCLEVBQWdCQyxPQUFBQyxFQUFBLEVBQUFELENBQ2Q5RCxFQUNBekIsRUhpREYsQ0FDQSxXQUNBLElBQ0FHLEVBREFELEtBQ0FFLGVBQ0FDLEVBRkFILEtBRUFJLE1BQUFELElBQUFGLEVBQ0EsT0FBQUUsRUFBQSxPQUFzQkUsWUFBQSxhQUEyQixDQUNqREYsRUFBQSxPQUFpQkUsWUFBQSxRQUFzQixDQUp2Q0wsS0FJdUNTLEdBQUEsVUFKdkNULEtBS0FTLEdBQUEsS0FDQU4sRUFBQSxPQUFpQkUsWUFBQSxhQUdqQixXQUNBLElBQ0FKLEVBREFELEtBQ0FFLGVBQ0FDLEVBRkFILEtBRUFJLE1BQUFELElBQUFGLEVBQ0EsT0FBQUUsRUFBQSxNQUNBQSxFQUFBLE1BQ0FBLEVBQUEsVUFBc0JFLFlBQUEsZ0NBQThDLENBTHBFTCxLQU1BUyxHQUFBLGVHakVBLEVBQ0EsS0FDQSxXQUNBLE1BdUJBMkUsRUFBQUcsUUFBQUMsT0FBQSxnQ0FDZUMsRUFBQSxRQUFBTCw4R0N6Q2YsSUFBQU0sRUFBQUMsRUFBQSxLQUFBQSxFQUFBQyxFQUFBRixHQUFtVCxvQ0NBblQsSUFBQUcsRUFBQUYsRUFBQSxLQUFBQSxFQUFBQyxFQUFBQyxHQUFpVCxvQ0NBalQsSUFBQUMsRUFBQUgsRUFBQSxLQUFBQSxFQUFBQyxFQUFBRSxHQUFpVCIsImZpbGUiOiJqcy80Ny5qcz92ZXJzaW9uPTEuMC4yIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kdWxlLWNvbnRhaW5lclwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJtb2R1bGUtbmF2XCIsIHsgYXR0cnM6IHsgdG9wUm91dGU6IF92bS50b3BSb3V0ZSwgcG9zOiBfdm0ucG9zIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2R1bGUtY29udGVudFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpblwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LXRiXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0Ym9keVwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlRyZWVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJ0cmVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5yb3V0ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3ctY2hlY2tib3hcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGVjay1zdHJpY3RseVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGVjay1kaXJlY3RseVwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX20oMSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtbG9hZGluZ1wiLCB7IHJlZjogXCJsb2FkaW5nXCIgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJydW4tdGl0bGVcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxlZnRcIiB9LCBbX3ZtLl92KFwi5p2D6ZmQ5YiX6KGoXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgX2MoXCJidXR0b25cIiwgeyBzdGF0aWNDbGFzczogXCJydW4tYnV0dG9uIHJ1bi1idXR0b24tc3VibWl0XCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIuaPkOS6pFwiKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwidi1wcml2XCIgLFxyXG4gICAgZGF0YSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLy8g5bGV5byAfOaUtue8qVxyXG4gICAgICAgICAgICBleHBhbmQ6IHRydWUgLFxyXG4gICAgICAgICAgICBkYXRhOiBbXSAsXHJcbiAgICAgICAgICAgIC8vIOW9k+WJjeinkuiJsuadg+mZkFxyXG4gICAgICAgICAgICBwcml2OiBbXSAsXHJcbiAgICAgICAgICAgIC8vIOi3r+eUseWIl+ihqFxyXG4gICAgICAgICAgICByb3V0ZXM6IFtdICxcclxuICAgICAgICAgICAgaWRMaXN0OiBbXSAsXHJcbiAgICAgICAgICAgIGluczoge1xyXG4gICAgICAgICAgICAgICAgdHJlZTogbnVsbCAsXHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICBhamF4OiB7XHJcbiAgICAgICAgICAgICAgICBnZXREYXRhOiBudWxsICxcclxuICAgICAgICAgICAgICAgIHN1Ym1pdDogbnVsbCAsXHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICBwZW5kaW5nOiB7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXQ6IG51bGwgLFxyXG4gICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgYXBpOiByb2xlQXBpICxcclxuICAgICAgICB9O1xyXG4gICAgfSAsXHJcblxyXG4gICAgbWl4aW5zOiBbXHJcbiAgICAgICAgbWl4aW5zLmxvYWRpbmcgLFxyXG4gICAgXSAsXHJcblxyXG4gICAgbW91bnRlZCAoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0RG9tKCk7XHJcbiAgICAgICAgdGhpcy5pbml0SW5zdGFuY2UoKTtcclxuICAgICAgICB0aGlzLmdldERhdGEoKTtcclxuICAgIH0gLFxyXG5cclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBpbml0RG9tICgpIHtcclxuXHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIGluaXRJbnN0YW5jZSAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zLnRyZWUgPSB0aGlzLiRyZWZzLnRyZWU7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIGdldERhdGEgKCkge1xyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFqYXguZ2V0RGF0YSA9IHRoaXMuYXBpLmluZm8odGhpcy5wYXJhbS5pZCAsIChyZXMgLCBjb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2RlICE9IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlcnJvcihyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaXYgPSByZXMucHJpdjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZShyZXMucm91dGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVzID0gcmVzLnJvdXRlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucy5sb2FkaW5nLnNldEFyZ3ModGhpcy5hamF4LmdldERhdGEpO1xyXG4gICAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgaGFuZGxlIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7ICsraSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1ciA9IGRhdGFbaV07XHJcbiAgICAgICAgICAgICAgICBjdXIudGl0bGUgPSBjdXIubmFtZTtcclxuICAgICAgICAgICAgICAgIGN1ci5jaGVja2VkID0gdGhpcy5pc1NlbGVjdGVkKGN1ci5pZCk7XHJcbiAgICAgICAgICAgICAgICBjdXIuZXhwYW5kID0gdGhpcy5leHBhbmQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VyLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZShjdXIuY2hpbGRyZW4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIC8vIOaYr+WQpumAieS4rVxyXG4gICAgICAgIGlzU2VsZWN0ZWQgKGlkKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcml2Lmxlbmd0aDsgKytpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VyID0gdGhpcy5wcml2W2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlkID09IGN1ci5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgLy8g6I635Y+W6YCJ5Lit6aG5XHJcbiAgICAgICAgZ2V0U2VsZWN0ZWQgKCkge1xyXG4gICAgICAgICAgICBsZXQgbm9kZXMgPSB0aGlzLmlucy50cmVlLmdldENoZWNrZWROb2RlcygpO1xyXG4gICAgICAgICAgICBsZXQgaWRMaXN0ID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyArK2kpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXIgPSBub2Rlc1tpXTtcclxuICAgICAgICAgICAgICAgIGlkTGlzdC5wdXNoKGN1ci5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGlkTGlzdDtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgc3VibWl0ICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGVuZGluZy5zdWJtaXQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRpbmZvKCfor7fmsYLkuK0uLi7or7fogJDlv4PnrYnlvoUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmcuc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hamF4LnN1Ym1pdCA9IHRoaXMuYXBpLmF1dGgoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnBhcmFtLmlkICxcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZTogRy5qc29uRW5jb2RlKHRoaXMuZ2V0U2VsZWN0ZWQoKSlcclxuICAgICAgICAgICAgICAgIH0gLCAocmVzICwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2RlICE9IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZXJyb3IocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5zZXRBcmdzKHRoaXMuYWpheC5zdWJtaXQgLCAnc3VibWl0Jyk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKG5leHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghbmV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyDmj5DnpLrmiJDlip9cclxuICAgICAgICAgICAgICAgIHRoaXMuJHN1Y2Nlc3MoJ+aTjeS9nOaIkOWKnycgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuOiBbJ+e7p+e7reWIhumFjScgLCAn6KeS6Imy5YiX6KGoJ10gLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ0bjEgKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyLmNsb3NlKGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgICAgICAgICBidG4yICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5sb2NhdGlvbignL3JvbGUvbGlzdCcgLCBudWxsICwgJ19zZWxmJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nLnN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gLFxyXG4gICAgfSAsXHJcbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi9wcml2LmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi9wcml2LmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9wcml2LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mN2ZiMWU4NiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9qcy9wcml2LmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9qcy9wcml2LmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuLi9wdWJsaWMvY3NzL3B1YmxpYy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mN2ZiMWU4NiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuaW1wb3J0IHN0eWxlMSBmcm9tIFwiLi4vcHVibGljL2Nzcy9saXN0LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPWY3ZmIxZTg2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5pbXBvcnQgc3R5bGUyIGZyb20gXCIuL2Nzcy9wcml2LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0yJmlkPWY3ZmIxZTg2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJmN2ZiMWU4NlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXHdvcmtcXFxcY29kZVxcXFxjYXJcXFxccHVibGljXFxcXG1vZHVsZVxcXFxhZG1pblxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZjdmYjFlODYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZjdmYjFlODYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3ByaXYudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY3ZmIxZTg2JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2Y3ZmIxZTg2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzb3VyY2UvdnVlL3ZpZXcvcm9sZS9wcml2LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9wdWJsaWMuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZjdmYjFlODYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9wdWJsaWMuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZjdmYjFlODYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vbGlzdC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD1mN2ZiMWU4NiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2xpc3QuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9ZjdmYjFlODYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vcHJpdi5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MiZpZD1mN2ZiMWU4NiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3ByaXYuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTImaWQ9ZjdmYjFlODYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiXSwic291cmNlUm9vdCI6IiJ9