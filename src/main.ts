import 'vue/jsx'

// 引入windi css
import '@/plugins/unocss'

// 导入全局的svg图标
import '@/plugins/svgIcon'

// 初始化多语言
import { setupI18n } from '@/plugins/vueI18n'

// 引入状态管理
import { setupStore } from '@/store'

// 全局组件
import { setupGlobCom } from '@/components'

// 引入element-plus
import { setupElementPlus } from '@/plugins/elementPlus'

// 引入全局样式
import '@/styles/index.less'

// 引入动画
import '@/plugins/animate.css'

// 路由
import { setupRouter } from './router'

// 权限
import { setupPermission } from './directives'

import { createApp } from 'vue'

import App from './App.vue'

import './permission'
// 微前端micro
import microApp from '@micro-zoe/micro-app'
// import { registerMicroApps, start } from "micro-app";

// registerMicroApps([
//   // 添加一个主应用地址，使子应用可以选择返回到主应用
//   {
//     name: "main-app",
//     entry: "//localhost:3000",
//     container: "#subapp-container",
//     activePath: "/",
//   },
// ]);

// start();

microApp.start({
  lifeCycles: {
    created(e) {
      console.log(e, 'created')
    },
    beforemount(e) {
      console.log(e, 'beforemount')
    },
    mounted(e) {
      console.log(e, 'mounted')
    },
    unmount(e) {
      console.log(e, 'unmount')
    },
    error(e) {
      console.log(e, 'error')
    }
  }
})

// 创建实例
const setupAll = async () => {
  const app = createApp(App)

  await setupI18n(app)

  setupStore(app)

  setupGlobCom(app)

  setupElementPlus(app)

  setupRouter(app)

  setupPermission(app)

  app.mount('#app')
}

setupAll()
