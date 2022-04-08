import VueRouter from "vue-router";
import workflow from "./components/workflow.vue";
import productMange from "./components/productMange.vue";
import edit from "./components/workflow/edit.vue";
import list from "./components/workflow/list.vue";
import serviceManage from "./components/serviceManage.vue";
import deploy from "./components/deploy.vue";
import traceSource from "./components/traceSource.vue";
import usersManage from "./components/usersManage.vue";

const router = new VueRouter({
    routes: [ // 路由规则
        { path: "/", redirect: "/productMange" },
        { path: "/productMange", component: productMange },
        {
            path: "/workflow",
            component: workflow,
            children: [{
                path: "/workflow/edit",
                component: edit
            }, {
                path: "/workflow/list",
                component: list
            }]
        },
        { path: "/serviceManage", component: serviceManage },
        { path: "/deploy", component: deploy },
        { path: "/traceSource", component: traceSource },
        { path: "/usersManage", component: usersManage }
    ]
});
export default router;