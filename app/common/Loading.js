/**
 * 文件名称：加载
 * 文件作者：YoungSherlockHolmes
 * 编写日期：2017年02月15日
 * 版权所有：湖南速微消费科技有限公司
 * 个人官网：http://www.051z.cc
 * 开源地址：https://github.com/YoungSherlockHolmes/Dui
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
    Dimensions
} from 'react-native';

var {height, width} = Dimensions.get('window');

export default class Loading extends Component {
    render() {
        return (
            <View style={styles.loading}>
                <ActivityIndicator
                    size="large"
                    color="white"
                    />
                <Text style={styles.loadingTitle}>加载中…</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loading: {
        backgroundColor: 'gray',
        height: 100,
        width: 120,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: height / 2 - 50 - 20,
        left: width / 2 - 60,
    },

    loadingTitle: {
        marginTop: 10,
        fontSize: 16,
        color: 'white'
    }
})