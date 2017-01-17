/**
 * 文件名称：主页
 * 文件作者：YoungSherlockHolmes
 * 编写日期：2017年01月11日
 * 版权所有：湖南速微消费科技有限公司
 * 个人官网：http://www.051z.cc
 * 开源地址：https://github.com/YoungSherlockHolmes/Duidemo.git
 */
'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import duicss from '../css/Duicss';
import TabNavigator from 'react-native-tab-navigator';  //底部导航组件
import HomePage from './homePage';
import ShopPage from './shopPage';
import ZonePage from './zonePage';
import Icon from 'react-native-vector-icons/Entypo';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'homePage'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TabNavigator tabBarStyle={styles.tab} >
          <TabNavigator.Item
            selected={this.state.selectedTab === 'homePage'}
            title="主页"
            selectedTitleStyle={styles.selectedTextStyle}
            titleStyle={styles.titles}
            renderIcon={() => <Icon name="home" color="#4B4D43" size={24}/>}
            renderSelectedIcon={() => <Icon name="home" color="#5CB85C" size={24}/>}
            onPress={() => this.setState({ selectedTab: 'homePage' })}>
            <HomePage />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'shopPage'}
            title="模板商店"
            selectedTitleStyle={styles.selectedTextStyle}
            titleStyle={styles.titles}
            renderIcon={() => <Icon name="shopping-cart" color="#4B4D43" size={24}/>}
            renderSelectedIcon={() => <Icon name="shopping-cart" color="#5CB85C" size={24}/>}
            onPress={() => this.setState({ selectedTab: 'shopPage' })}>
            <ShopPage />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'zonePage'}
            title="个人中心"
            selectedTitleStyle={styles.selectedTextStyle}
            titleStyle={styles.titles}
            renderIcon={() => <Icon name="user" color="#4B4D43" size={24}/>}
            renderSelectedIcon={() => <Icon name="user" color="#5CB85C" size={24}/>}
            onPress={() => this.setState({ selectedTab: 'zonePage' })}>
            <ZonePage />
          </TabNavigator.Item>

        </TabNavigator>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },
  tab: {
    height: 50,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  selectedTextStyle: {
    color: duicss.MAIN_COLOR,
    fontSize: 12,
  },
  titles: {
    fontSize: 12
  },
});
export default MainPage;
