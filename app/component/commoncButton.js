/**
 * 文件名称：常见按钮
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
import Button from '../common/Button';

class CommoncButton extends BaseComponent {
    constructor(props) {
        super(props);
    }
    getNavigationBarProps() {
        return {
            hideRightButton: true,
            title: '常见按钮',
            leftButtonImage: require('../image/return.png')
        };
    }
    renderBody() {
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <Button
                        containerStyle={[styles.centers, styles.round, { backgroundColor: '#5CB85C', width: 200, height: 50, }]}
                        style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}
                        text='按钮名称'
                        />
                    <View style={styles.box_top}>
                        <Button
                            containerStyle={[styles.centers, styles.round, { borderColor: '#5CB85C',borderWidth:1, width: 250, height: 50, }]}
                            style={{ color: '#5CB85C', fontSize: 16, fontWeight: 'bold' }}
                            text='按钮名称'
                            />
                    </View>
                     <View style={styles.box_top}>
                        <Button
                            containerStyle={[styles.centers, { borderColor: '#5CB85C',borderWidth:1, width: 280, height: 50, }]}
                            style={{ color: '#5CB85C', fontSize: 16, fontWeight: 'bold' }}
                            text='按钮名称'
                            />
                    </View>
                    <View style={styles.box_top}>
                        <Button
                            containerStyle={[styles.centers, { borderColor: '#5CB85C',borderWidth:1, width: 50, height: 50,borderRadius:25 }]}
                            style={{ color: '#5CB85C', fontSize: 14, fontWeight: 'bold' }}
                            text='按钮'
                            />
                    </View>
                    <View style={styles.box_top}>
                        <Button
                            containerStyle={[styles.centers, { borderColor: '#5CB85C',borderWidth:1, width: width-20, height: 50,borderRadius:25 }]}
                            style={{ color: '#5CB85C', fontSize: 14, fontWeight: 'bold' }}
                            text='按钮'
                            />
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    box: {
       margin:10,marginBottom:0
    },
    centers: {
        justifyContent: 'center', alignItems: 'center'
    },
    round: {
        borderRadius: 8
    },
    box_top: {
        marginTop: 10
    }
});

export default CommoncButton;