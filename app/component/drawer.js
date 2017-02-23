/**
 * 文件名称：Drawer
 * 文件作者：YoungSherlockHolmes
 * 编写日期：2017年02月21日
 * 版权所有：湖南速微消费科技有限公司
 * 个人官网：http://www.051z.cc
 * 开源地址：https://github.com/YoungSherlockHolmes/Dui
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
} from 'react-native';
import BaseComponent from '../base/baseComponent';
import { getNavigator } from '../route/route';
var {height, width} = Dimensions.get('window');

class Drawer extends BaseComponent {
    constructor(props) {
        super(props);
    }
    getNavigationBarProps() {
        return {
            hideRightButton: true,
            title: 'Drawer',
            leftButtonImage: require('../image/return.png')
        };
    }
    renderBody() {
        return (
            <View style={styles.container}>
               
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
   
});

export default Drawer;