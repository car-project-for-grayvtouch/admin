import menu from '../../public/menu.vue';
import moduleNav from '../../public/moduleNav.vue';
import communication from '../../public/communication.vue';
import routeForVue from '../../../router/routes.js';

let once = null;

export default {
    name: "v-index" ,
    data () {
        return {
            dom: {} ,
            ins: {
                loading: null ,
            } ,
            field: {
                id: 'id' ,
                p_id: 'p_id'
            } ,
            ajax: {
                logout: null ,
                push: null ,
            } ,
            pending: {
                logout: false ,
                push: false ,
            } ,
            render: '' ,
            value: {
                leftMinW: 50 ,
                loadedPush: false ,
            } ,
            push: [] ,
            socket: null ,
            unread: 0 ,
            isLogged: false ,
        };
    } ,
    mixins: [
        mixins.loading ,
        mixins.state ,
    ] ,
    mounted () {
        this.initDom();
        this.initValue();
        this.initInstance();
        this.getData();
    } ,
    components: {
        'v-menu': menu ,
        'v-communication': communication ,
    } ,
    methods: {
        initDom () {
            this.dom.container = G(this.$el);
            this.dom.functions = G(this.$refs['functions-for-user']);
            this.dom.con = G(this.$refs.con);
            this.dom.left = G(this.$refs.left);
            this.dom.right = G(this.$refs.right);
            this.dom.leftTop = G(this.$refs['left-top']);
            this.dom.leftMid = G(this.$refs['infinite-classification']);
            this.dom.leftBtm = G(this.$refs['left-btm']);
            this.dom.multipleTab = G(this.$refs['multiple-tab']);
            this.dom.win = G(window);
            this.dom.horizontal = G(this.$refs.horizontal);
            this.dom.vertical = G(this.$refs.vertical);
            this.dom.user = G(this.$refs.user);
            this.dom.block = G(this.$refs.block);
            this.dom.rightTop = G(this.$refs['right-top']);
            this.dom.slidebar = G(this.$refs.slidebar);
            this.dom.push = G(this.$refs.push);
        } ,

        initInstance () {
            this.ins.communication = this.$refs.communication;
        } ,

        // 初始化
        getData () {
            new Promise((resolve , reject) => {
                this.info(resolve , reject);
            }).then(() => {
                this.$nextTick(() => {
                    this.initialize();
                });
            });
        } ,

        initialize () {
            this.initValue();
            this.initSlidebar();
            // DOM 渲染完成
            this.initTab();
            this.initMenu();
            this.initStyle();
            this.initLeftSlidebar();
            this.defineEvent();
            // 子组件开始运行
            this.ins.communication.run();
            this.initSocket();
        } ,

        initSocket () {
            var self = this;
            this.socket = new Socket({
                // 基本数据
                identifier: topContext.websocketIdentifier ,
                unique_code: this.$store.state.user.unique_code ,
                platform: 'pc' ,
                websocket: topContext.websocket ,
                login () {
                    self.isLogged = true;
                    self.getUnreadCount();
                } ,
            });

            this.socket.on('system' , function(res){
                self.getUnreadCount();
            });
        } ,

        // 获取未读消息数量
        getUnreadCount () {
            if (!this.isLogged) {
                return ;
            }
            this.socket.unreadCountForPush((res) => {
                if (res.code != 200) {
                    this.$error(res.data);
                    return ;
                }
                res = res.data;
                this.unread = res;
                if (res > 0) {
                    // todo 存在未读消息数量
                    // todo 拉取最小消息进行弹窗提示
                    this.socket.unreadForPush((res) => {
                        if (res.code != 200) {
                            this.$error(res.data);
                            return ;
                        }
                        res = res.data;
                        // 递归消费数据
                        let tip = () => {
                            if (res.length == 0) {
                                // 消费完成，刷新
                                this.getUnreadCount();
                                return ;
                            }
                            let push = res.pop();
                            this.iNotice('系统通知' , push.data ? push.data : '');
                            pushApi.add({
                                type: push.type ,
                                data: push.data
                            } , (res , code) => {
                                if (code != 200) {
                                    this.eNotice(res);
                                }
                                // 成功的话继续消费
                                // 更改远程接口的消息读取状态
                                this.socket.readStatusForPush(push.id , 'y' , (res) => {
                                    if (res.code != 200) {
                                        this.eNotice(res.data);
                                    }
                                    tip();
                                });
                            });
                        };
                        tip();
                    });
                }
            });
        } ,

        initValue () {
            this.value.leftW = this.dom.left.width('border-box');
            this.value.userW = this.dom.user.width('border-box');
            this.value.userH = this.dom.user.height('border-box');
        } ,

        // 初始化
        initStyle () {
            /**
             * ********************
             * 左边：菜单
             * ********************
             */
            this.initLeftMidH();
            this.dom.win.on('resize' , this.initLeftMidH.bind(this) , true , false);
        } ,

        initLeftSlidebar () {
            let slidebar = G.s.get('slidebar');
            if (G.isNull(slidebar)) {
                return ;
            }
            if (slidebar == 'horizontal') {
                return ;
            }
            this.vertical();
        } ,

        defineEvent () {
            // 滚动事件
            this.dom.push.on('scroll' , (e) => {
                var clientH = this.dom.push.clientHeight();
                var scrollH = this.dom.push.scrollHeight();
                var maxScrollTop = scrollH - clientH;
                var curScrollTop = this.dom.push.scrollTop();
                if (curScrollTop != maxScrollTop) {
                    return ;
                }
                this.loadPush();
            });
        } ,

        loadPush (reload) {
            if (!reload) {
                if (this.value.loadedPush) {
                    // 已经到底了
                    return ;
                }
                if (this.pending.push) {
                    this.$msg('加载中...请耐心等待');
                    return ;
                }
            } else {
                if (this.ajax.push instanceof G.ajax) {
                    this.ajax.push.native('abort');
                }
                this.value.loadedPush = false;
                this.push = [];
            }
            // 侧边栏打开时
            let adminPushId = 0;
            if (this.push.length > 0) {
                adminPushId = this.push[this.push.length - 1].id;
            }
            this.pending.push = true;
            this.ajax.push = pushApi.list({
                admin_push_id: adminPushId
            } , (res , code) => {
                this.pending.push = false;
                if (code != 200) {
                    this.error(res);
                    return ;
                }
                if (res.length == 0) {
                    this.value.loadedPush = true;
                }
                this.push = this.push.concat(res);
            });
        } ,

        // 初始化侧边栏
        initSlidebar () {
            var self = this;
            this.ins.slidebar = new Slidebar(this.dom.slidebar.get(0) , {
                // 动画时间
                time: 300 ,
                // 滑块宽度
                width: '450px' ,
                // 滑块遮罩层透明度
                opacity: 0.3 ,
                // 背景颜色
                backgroundColor: '' ,
                // 状态：show | hide
                status: 'hide' ,
                // 侧边栏方向: left , right
                dir: 'right' ,
                // 是否开启拖拽功能
                enableDrag: false ,
                open () {
                    self.loadPush(true);
                } ,
            });
        } ,

        showSlidebar () {
            this.ins.slidebar.show();
        } ,

        initLeftMidH () {
            let leftH = this.dom.left.height('content-box');
            let leftTopH = this.dom.leftTop.height('border-box');
            let leftBtmH = this.dom.leftBtm.height('border-box');
            let leftMidMinH = parseInt(this.dom.leftMid.css('minHeight'));
            let leftMidH = leftH -leftTopH - leftBtmH;
            leftMidH = Math.max(leftMidMinH , leftMidH);
            this.dom.leftMid.css({
                height: leftMidH + 'px'
            });
        } ,

        initTab () {
            let self = this;
            this.ins.tab = new MultipleTab(this.dom.multipleTab.get(0) , {
                time: 200 ,
                ico: '/plugin/MultipleTab/image/icon.ico' ,
                created (id) {
                    // 路由参数
                    let param = this.attr(id , 'param');
                    param = G.isValid(param) ? G.jsonDecode(param) : {};
                    self.create(this , id , param);
                } ,
                deleted (id) {
                    self.delete(id);
                } ,
                click (id) {
                    self.switch(id);
                }
            });
        } ,
        initMenu () {
            const self = this;
            this.ins.ic = new InfiniteClassification(this.dom.leftMid.get(0) , {
                // 菜单展开动画过渡时间
                time: 200 ,
                // 次要的图标类型，new || number || switch
                icon: 'switch' ,
                // 标识符，展开的项；1. 在元素里面设置 data-focus='y' +
                id: [1] ,
                // 初始状态，spread || shrink
                status: 'shrink' ,
                // 层级视觉显示效果
                amount: 12 ,
                // 同层级是否互斥
                exclution: false ,
                // 是否菜单也可被选中
                menuFocus: true ,
                // 点击项后是否选中
                focus: false ,
                // 是否选中顶级菜单
                topFocus: false ,
                // 子级项点击后回调
                child (id) {
                    let topRoute = self.topRoute(id);
                    let route = self.findRouteById(id);
                    let text = self.genTabName(topRoute , route);
                    self.open(text , {
                        route: route.route
                    });
                }
            });
        } ,

        horizontal () {
            this.dom.user.removeClass('hide');
            // 滑块切换
            this.dom.horizontal.highlight('hide' , this.dom.block.children().get() , true);
            // 菜单展开
            this.dom.left.animate({
                width: this.value.leftW + 'px' ,
            } , () => {
                this.ins.ic.icon('none');
            });
            // 用户展开
            this.dom.user.animate({
                width: this.value.userW + 'px' ,
                height: this.value.userH + 'px'
            } , () => {
                this.initLeftMidH();
            });
            // 内容收缩
            this.dom.right.animate({
                paddingLeft: this.value.leftW + 'px' ,
            });
            // 右侧顶部导航栏收缩
            this.dom.rightTop.animate({
                paddingLeft: this.value.leftW + 'px' ,
            });
            G.s.set('slidebar' , 'horizontal');
        } ,

        vertical () {
            // 滑块切换
            this.dom.vertical.highlight('hide' , this.dom.block.children().get() , true);
            // 菜单展开
            this.dom.left.animate({
                width: this.value.leftMinW + 'px' ,
            } , () => {
                this.ins.ic.icon('text');
            });
            // 用户收缩
            this.dom.user.animate({
                width: '0px' ,
                height: '0px'
            } , () => {
                this.dom.user.addClass('hide');
                this.initLeftMidH();
            });
            // 内容收缩
            this.dom.right.animate({
                paddingLeft: this.value.leftMinW + 'px' ,
            });
            // 右侧顶部导航栏收缩
            this.dom.rightTop.animate({
                paddingLeft: this.value.leftMinW + 'px' ,
            });
            G.s.set('slidebar' , 'vertical');
        } ,
        // 显示
        showUserCtrl () {
            this.dom.functions.removeClass('hide');
            this.dom.functions.animate({
                opacity: 1 ,
                bottom: '0px'
            });
        } ,
        // 隐藏
        hideUserCtrl () {
            this.dom.functions.animate({
                opacity: 0 ,
                bottom: '-10px'
            } , () => {
                this.dom.functions.addClass('hide');
            });
        } ,

        // 新开标签页
        open (text , attr , ico = null) {
            this.ins.tab.create({
                ico ,
                text ,
                attr
            });
        } ,

        // 创建内容
        create (tab , id , param) {
            var route = tab.attr(id , 'route');
            var div = document.createElement('div');
                div = G(div);
                div.data('id' , id);
            var render = document.createElement('div');
                div.append(render);
            this.dom.con.append(div.get(0));
            this.mount(render , id , route , param);
            div.highlight('hide' , div.parent().children().get() , true);
        } ,

        // 删除内容
        delete (id) {
            this.dom.con.remove(this.item(id));
        } ,

        // 查找给定的项
        item (id) {
            let items = this.dom.con.children();
            for (let i = 0; i < items.length; ++i)
            {
                let cur = items.jump(i , true);
                if (cur.data('id') == id) {
                    // 删除节点
                    return cur.get(0);
                }
            }
            throw new Error('未找到给定节点');
        },

        // 标签切换
        switch (id) {
            G(this.item(id)).highlight('hide' , this.dom.con.children().get() , true);
        } ,

        // 组件
        component (route) {
            for (let i = 0; i < routeForVue.length; ++i)
            {
                let v = routeForVue[i];
                if (v.path == route) {
                    return v.component;
                }
            }
            throw new Error('未找到 route：' + route + '对应的路由');
        } ,

        // 挂载组建
        mount (container , id , route , param) {
            let component = this.component(route);
            component().then((module) => {
                // 注意 module.default ！
                // 具体原因请查看 import 语法解释
                let component = this.newComponent(module.default , route , param , id);

                new component().$mount(container);
            });
        } ,

        // 生成标签名称
        genTabName (topRoute , curRoute) {
            return `${topRoute.name}-${curRoute.name}`;
        } ,

        // 重新渲染
        reRender (id , route , param) {
            let curRoute = this.findRouteByRoute(route);
            let topRoute = this.topRoute(curRoute.id);
            let title = this.genTabName(topRoute , curRoute);
            this.ins.tab.title(id , title);
            // 更新标签内容
            // 重新渲染元素内容
            let container = this.item(id);
                container = G(container);
            let div = document.createElement('div');
            this.mount(div , id , route , param);
            // 清空内容
            container.html('');
            container.append(div);
        } ,

        // 新开一个标签页
        createTab (route , param = {}) {
            let curRoute = this.findRouteByRoute(route);
            let topRoute = this.topRoute(curRoute.id);
            let title = this.genTabName(topRoute , curRoute);
            this.open(title , {
                route: curRoute.route ,
                param: G.jsonEncode(param)
            });
        } ,

        // 实例化 vue 组件
        newComponent (component , route , param , id) {
            let self = this;
            route = this.findRouteByRoute(route);
            let topRoute = this.topRoute(route.id);
            component.mixins = component.mixins ? component.mixins : [];
            let mixins = {
                data () {
                    return {
                        // 当前组件的标识符
                        // 子组件不允许设置这些值！
                        id ,
                        param ,
                        route ,
                        topRoute ,
                        pos: []
                    };
                } ,
                created () {
                    this.pos = self.curPos(route.id);
                } ,
                methods: {
                    // 也跳跳转方法
                    location (route , param , type = '_self') {
                        // 目前仅有两种类型
                        // _self 页面内重载
                        // _blank 打开新的标签页
                        let typeRange = ['_self' , '_blank'];
                        if (type == '_self') {
                            return self.reRender(id , route , param);
                        }
                        if (type == '_blank') {
                            // 新开一个标签页
                            return self.createTab(route , param);
                        }
                        // ...预留的内容
                    } ,
                    // 刷新操作
                    reload () {
                        this.location(this.route.route , this.param);
                    } ,
                    // todo 后退
                    prev () {} ,
                    // todo 前进
                    next () {} ,
                } ,
                components: {
                    'module-nav': moduleNav
                }
            };
            component.mixins.push(mixins);
            return Vue.extend({
                // 这个地方必须要使用此种方式！！
                // 重新拷一份该组件
                // 否则，按照官网的描述
                // 异步组件结果会被缓存
                // 也就是该组件仅会实例化一次！
                // 之后便不再重复实例化
                // 复用之前的实例
                ...component
            });
        } ,

        // 获取菜单数据
        getMenuData (priv) {
            let menu = [];
            let count = 0;
            let filter = (data , res) => {
                if (count > 1000) {
                    console.log('死循环');
                    return ;
                }
                count++;
                for (let i = 0; i < data.length; ++i)
                {
                    let v = data[i];
                    if (v.menu != 'y') {
                        continue ;
                    }
                    let _v = {...v};
                    res.push(_v);
                    if (v.children.length > 0) {
                        _v.children = [];
                        filter(v.children , _v.children);
                    }
                }
            };
            filter(priv , menu);
            return menu;
        } ,

        // 获取用户相关数据
        info (resolve , reject) {
            adminApi.info((res , code) => {
                if (code != 200) {
                    this.$error(res);
                    reject();
                    return ;
                }
                // 针对 data 做一些数据过滤
                const menu = this.getMenuData(res.user.role.priv);
                this.$store.commit('menu' , menu);
                this.$store.commit('user' , res.user);
                this.$store.commit('priv' , res.user.role.priv);
                this.$store.commit('route' , res.route);
                this.$store.commit('os' , res.os);
                resolve();
            });
        } ,

        // 获取当前路由 by id
        findRouteById (id) {
            let routes = this.$store.state.route;
            let route = G.t.current(id , routes , this.field);
            if (G.isNull(route)) {
                throw new Error('未找到当前 id：' + id + ' 对应路由！');
            }
            return route;
        } ,

        // 获取当前路由，by route
        findRouteByRoute (route) {
            let routes = this.$store.state.route;
            for (let i = 0; i < routes.length; ++i)
            {
                let cur = routes[i];
                if (cur.route == route) {
                    return cur;
                }
            }
            throw new Error('未找到给定路由：' + route + '！');
        } ,

        // 获取顶级路由
        topRoute (id) {
            let route = this.$store.state.route;
            let parents = G.t.parents(id , route , this.field , true , true);
            return parents;
        } ,

        // 获取当前位置
        curPos (id) {
            let route = this.$store.state.route;
            return G.t.parents(id , route , this.field , true , false);
        } ,

        // 注销
        logout () {
            if (this.pending.logout) {
                $info('请求中...请耐心等待');
                return ;
            }
            this.pending.logout = true;
            this.ins.loading.show();
            this.ajax.logout = adminApi.logout((res , code) => {
                this.pending.logout = false;
                this.ins.loading.hide();
                if (code != 200) {
                    this.$error(res);
                    return ;
                }
                // 退出登录
                this.forceLogout();
            });
            this.ins.loading.setArgs(this.ins.loading , 'logout');
        } ,

        // 翻译
        translate () {
            new Promise((resolve) => {
                if (this.pending.translate) {
                    this.$info('正在生成生成字典...请耐心等待');
                    return ;
                }
                this.pendingState('loading' , 'translate');
                this.ajax.translate = miscApi.translate((res , code) => {
                    if (code != 200) {
                        this.eNotice(res);
                        resolve(false);
                    }
                    resolve(true);
                });
                this.ins.loading.setArgs('translate' , 'translate');
            }).then((next) => {
                if (!next) {
                    return ;
                }
                this.$success('成功生成常用中英文对照翻译字典' , {
                    btn: ['确定'] ,
                    closeBtn: false ,
                });
            }).finally(() => {
                this.initialState('loading' , 'translate' , 'translate');
            });
        } ,
    } ,
}