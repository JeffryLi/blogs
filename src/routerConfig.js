// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import BlankLayout from './layouts/BlankLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Article from './pages/Article';
import Register from './pages/Register';
import Video from './pages/Video';
import NotFound from './pages/NotFound';

const routerConfig = [
  {
    path: '/',
    layout: BlankLayout,
    component: Home,
  },
  {
    path: '/login',
    layout: BlankLayout,
    component: Login,
  },
  {
    path: '/article',
    layout: BlankLayout,
    component: Article,
  },
  {
    path: '/register',
    layout: BlankLayout,
    component: Register,
  },
  {
    path: '/video',
    layout: BlankLayout,
    component: Video,
  },
  /* {
    path: '/game',
    layout: BlankLayout,
    children : [{
      path: '/tocTacToe',
      layout: BlankLayout,
      component: TicTacToe,
    }]
  }, */
  {
    path: '*',
    layout: BlankLayout,
    component: NotFound,
  },
];

export default routerConfig;
