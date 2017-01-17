/**
 * 文件名称：抽象基类
 * 文件作者：YoungSherlockHolmes
 * 编写日期：2017年01月12日
 * 版权所有：湖南速微消费科技有限公司
 * 个人官网：http://www.051z.cc
 * 开源地址：https://github.com/YoungSherlockHolmes/Dui
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import NavigationBar from './navigationBar';
import { getNavigator } from '../route/route';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});

class BaseComponent extends Component {

  constructor(props) {
    super(props);
    /* 
     *  Zero: 通过bind(this)实现各组件自定义的执行效果 
     *    getNavigationBarProps: 定义导航栏属性;
     *    renderBody: 定义body渲染;
     *    onLeftPressed: 定义顶部导航左侧点击事件;
     *    onRightPressed: 定义顶部导航右侧点击事件;
     */
    this.getNavigationBarProps = this.getNavigationBarProps.bind(this);
    this.renderNavigationBar = this.renderNavigationBar.bind(this);
    this.renderBody = this.renderBody.bind(this);
    this.onLeftPressed = this.onLeftPressed.bind(this);
    this.onRightPressed = this.onRightPressed.bind(this);
  }

  /**
   * 子类可重写
   * @returns {null}
   */
  getNavigationBarProps() {
    return null;
  }

  /**
   * renderNavigationBar: 将当前组件定义的属性和事件绑定到对应组件
   */
  renderNavigationBar() {
    let navigationBarProps = this.getNavigationBarProps();
    Object.assign(navigationBarProps, this.props);
    return (
      <NavigationBar
        navigationBarProps={navigationBarProps}
        onLeftPressed={this.onLeftPressed}
        onRightPressed={this.onRightPressed}
      />
    );
  }

  /**
   * renderBody: 由所继承组件实现的渲染基类
   */
  renderBody() {

  }
  
  /**
   * render: 实现导航栏的渲染和body的渲染
   */
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        {this.renderNavigationBar()}
        {this.renderBody()}
      </View>
    );
  }

  componentWillUnmount() {

  }

  onLeftPressed() {
    getNavigator().pop();
  }

  onRightPressed() {
    console.log('onRightPressed');
  }
}

export default BaseComponent;
