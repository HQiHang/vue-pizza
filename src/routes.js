// 一级路由
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'
// 二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

export const routes = [
  { path: "/",
    components: {
      // 展示指定路由页面
      default: Home,
      "contact": Contact,
      "delivery": Delivery,
      "history": History,
      "ordering": OrderingGuide
    }
  },
  { path: "/menu", component: Menu },
  { path: "/admin", component: Admin },
  { path: "/about", redirect: "/contact", component: About,
    children: [
      { path: "/contact", component: Contact },
      { path: "/delivery", component: Delivery },
      { path: "/history", component: History },
      { path: "/guide", component: OrderingGuide }
    ]
  },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "*", redirect: "/" }
];
