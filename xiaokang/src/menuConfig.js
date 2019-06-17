// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const asideMenuConfig = [
  {
    name: '首页',
    path: '/index',
    icon: 'home2',
  },
  {
    name: '发现',
    path: '/management',
    icon: 'repair',
  },
  {
    name: '问答',
    path: '/market',
    icon: 'cascades',
  },
  {
    name: '关于我们',
    path: 'https://github.com/alibaba/ice/issues/new',
    icon: 'question2',
    external: true,
    newWindow: true,
  },
];

const headerMenuConfig = asideMenuConfig;

export default headerMenuConfig;
