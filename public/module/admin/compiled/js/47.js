(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{348:function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"module-container"},[n("module-nav",{attrs:{topRoute:t.topRoute,pos:t.pos}}),t._v(" "),n("div",{staticClass:"module-content"},[n("div",{staticClass:"in"},[n("form",{on:{submit:function(i){return i.preventDefault(),t.submit(i)}}},[t._m(0),t._v(" "),n("div",{staticClass:"content"},[n("table",{staticClass:"input-tb"},[n("tbody",[n("tr",[n("td",[n("Tree",{ref:"tree",attrs:{data:t.routes,"show-checkbox":"",multiple:"","check-strictly":"","check-directly":""}})],1)]),t._v(" "),t._m(1)])])])])])]),t._v(" "),n("v-loading",{ref:"loading"})],1)};e._withStripped=!0;var s={name:"v-priv",data:function(){return{expand:!0,data:[],priv:[],routes:[],idList:[],ins:{tree:null},ajax:{getData:null,submit:null},pending:{submit:null},api:roleApi}},mixins:[mixins.loading],mounted:function(){this.initDom(),this.initInstance(),this.getData()},methods:{initDom:function(){},initInstance:function(){this.ins.tree=this.$refs.tree},getData:function(){var t=this;new Promise(function(i){t.ins.loading.show(),t.ajax.getData=t.api.info(t.param.id,function(n,e){i(),200==e?(t.priv=n.priv,t.handle(n.route),t.routes=n.route):t.$error(n)}),t.ins.loading.setArgs(t.ajax.getData)}).finally(function(){t.ins.loading.hide()})},handle:function(t){for(var i=0;i<t.length;++i){var n=t[i];n.title=n.name,n.checked=this.isSelected(n.id),n.expand=this.expand,n.children.length>0&&this.handle(n.children)}},isSelected:function(t){for(var i=0;i<this.priv.length;++i){if(t==this.priv[i].id)return!0}return!1},getSelected:function(){for(var t=this.ins.tree.getCheckedNodes(),i=[],n=0;n<t.length;++n){var e=t[n];i.push(e.id)}return i},submit:function(){var t=this;if(this.pending.submit)return this.$info("请求中...请耐心等待");var i=this;new Promise(function(i){t.pending.submit=!0,t.ins.loading.show(),t.ajax.submit=t.api.auth({id:t.param.id,route:G.jsonEncode(t.getSelected())},function(n,e){if(200!=e)return i(!1),void t.$error(n);i(!0)}),t.ins.loading.setArgs(t.ajax.submit,"submit")}).then(function(n){n&&t.$success("操作成功",{btn:["继续分配","角色列表"],btn1:function(t){layer.close(t)},btn2:function(){i.location("/role/list",null,"_self")}})}).finally(function(){t.pending.submit=!1,t.ins.loading.hide()})}}},a=(n(550),n(551),n(552),n(14)),r=Object(a.a)(s,e,[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"run-title"},[i("div",{staticClass:"left"},[this._v("权限列表")]),this._v(" "),i("div",{staticClass:"right"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("tr",[i("td",[i("button",{staticClass:"run-button run-button-submit"},[this._v("提交")])])])}],!1,null,"f7fb1e86",null);r.options.__file="source/vue/view/role/priv.vue";i.default=r.exports},411:function(t,i,n){},412:function(t,i,n){},413:function(t,i,n){},550:function(t,i,n){"use strict";var e=n(411);n.n(e).a},551:function(t,i,n){"use strict";var e=n(412);n.n(e).a},552:function(t,i,n){"use strict";var e=n(413);n.n(e).a}}]);