/**
 * 文件名称：个人中心
 * 文件作者：YoungSherlockHolmes
 * 编写日期：2017年01月11日
 * 版权所有：湖南速微消费科技有限公司
 * 个人官网：http://www.051z.cc
 * 开源地址：https://github.com/YoungSherlockHolmes/Duidemo.git
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import BaseComponent from '../base/baseComponent';
var {height, width} = Dimensions.get('window');

class ZonePage extends BaseComponent {
  constructor(props) {
    super(props);
  }

  getNavigationBarProps() {
    return {
      title: '个人中心'
    };
  }

  renderBody() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor:'yellow',height:300}}></View>

        </ScrollView>
      </View>
    );
  }

  onLeftPressed() {

  }

  onRightPressed() {

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },
});

export default ZonePage;
