/**
 * 文件名称：正在开发中
 * 文件作者：YoungSherlockHolmes
 * 编写日期：2017年01月12日
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
import duicss from '../css/Duicss';
var {height, width} = Dimensions.get('window');

class Developing extends BaseComponent {
    constructor(props) {
        super(props);
    }
    getNavigationBarProps() {
        return {
            hideRightButton: true,
            title: '正在开发中',
            leftButtonImage: require('../image/return.png')
        };
    }
    renderBody() {
        return (
            <View style={styles.container}>
               <View style={{justifyContent:'center',alignSelf:'center'}}>
                    <Text>正在开发中</Text>
               </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEFEF',
    },
   
});

export default Developing;