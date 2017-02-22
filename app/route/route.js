/**
 * 文件名称：导航链接
 * 文件作者：YoungSherlockHolmes
 * 编写日期：2017年01月11日
 * 版权所有：湖南速微消费科技有限公司
 * 个人官网：http://www.051z.cc
 * 开源地址：https://github.com/YoungSherlockHolmes/Dui
 */
import MainPage from '../mainLayer/mainPage';//主页
import GuidePage from '../component/guidePage';//引导页
import ClassifiedTitle from '../component/classifiedTitle';//分类标题
import ScoreWindow from '../component/scoreWindow';//星级评分窗口
import Developing from '../component/developing';//正在开发中提示
import Sliders from '../component/sliders';//滑块1
import Sliders1 from '../component/sliders1';//滑块2
import ProductList from '../component/homeDiscreteness/productList';//商品列表
import SearchList from '../component/homeDiscreteness/searchList';//搜索列表
import Loading from '../common/Loading';//加载
import TabView from '../component/tabView';//选项卡
import Toasts from '../component/Toasts';//Toast
import CommoncButton from '../component/commoncButton';//常见按钮

import {
  Navigator,
} from 'react-native';

let _navigator;

const routeMap = new Map();

routeMap.set('MainPage', {
  component: MainPage,
  sceneAnimation: Navigator.SceneConfigs.FloatFromRight
});
routeMap.set('GuidePage', {
  component: GuidePage,
  sceneAnimation: Navigator.SceneConfigs.FloatFromRight
});
routeMap.set('ClassifiedTitle', {
  component: ClassifiedTitle,
  sceneAnimation: Navigator.SceneConfigs.FloatFromRight
});
routeMap.set('ScoreWindow', {
  component: ScoreWindow,
  sceneAnimation: Navigator.SceneConfigs.FloatFromRight
});
routeMap.set('Developing', {
  component: Developing,
  sceneAnimation: Navigator.SceneConfigs.FloatFromRight
});
routeMap.set('Sliders', {
  component: Sliders,
  sceneAnimation: Navigator.SceneConfigs.FloatFromRight
});
routeMap.set('Sliders1', {
  component: Sliders1,
  sceneAnimation: Navigator.SceneConfigs.FloatFromRight
});
routeMap.set('ProductList', {
  component: ProductList,
  sceneAnimation: Navigator.SceneConfigs.FloatFromRight
});
routeMap.set('SearchList', {
  component: SearchList,
  sceneAnimation: Navigator.SceneConfigs.FloatFromBottom
});
routeMap.set('Loading', {
  component: Loading,
  sceneAnimation: Navigator.SceneConfigs.FloatFromBottom
});
routeMap.set('TabView', {
  component: TabView,
  sceneAnimation: Navigator.SceneConfigs.FloatFromRight
});
routeMap.set('Toasts', {
  component: Toasts,
  sceneAnimation: Navigator.SceneConfigs.FloatFromRight
});
routeMap.set('CommoncButton', {
  component: CommoncButton,
  sceneAnimation: Navigator.SceneConfigs.FloatFromRight
});

export function registerNavigator(tempNavigator) {
  if (_navigator) {
    return;
  }
  _navigator = tempNavigator;
}

export function getNavigator() {
  return _navigator;
}

export function getRouteMap() {
  return routeMap;
}
