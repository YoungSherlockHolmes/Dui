/**
 * 安装： npm i react-native-easy-toast --save
 * 
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import BaseComponent from '../base/baseComponent';
import Toast, { DURATION } from 'react-native-easy-toast';


class Toasts extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            position: 'bottom',
            style: {},
        }
    }

    getNavigationBarProps() {
        return {
            hideRightButton: true,
            title: 'Toast',
            leftButtonImage: require('../image/return.png')
        };
    }

    onClick(text, position, duration, withStyle) {
        this.setState({
            position: position,
        })
        if (withStyle) {
            this.refs.toastWithStyle.show(text, duration);
        } else {
            this.refs.toast.show(text, duration);
        }
    }

    getButton(text, position, duration, withStyle) {
        return (
            <TouchableOpacity
                style={{ padding: 10 }}
                activeOpacity={0.8}
                onPress={() => this.onClick(text, position, duration, withStyle)}>
                <Text style={{ fontSize: 20, fontWeight: '900' }}>{text}</Text>
            </TouchableOpacity>
        )
    }
    renderBody() {
        return (
            <View style={styles.container}>
                {this.getButton('www.051z.cc官网头部', 'top', DURATION.LENGTH_SHORT)}
                {this.getButton('www.051z.cc官网底部', 'bottom', DURATION.LENGTH_SHORT)}
                {this.getButton('www.051z.cc官网头部', 'top', DURATION.LENGTH_LONG)}
                {this.getButton('www.051z.cc官网底部', 'bottom', DURATION.LENGTH_LONG)}
                {this.getButton('www.051z.cc官网自定义样式', 'top', DURATION.LENGTH_LONG, true)}
                <Toast ref="toast" position={this.state.position} />
                <Toast ref="toastWithStyle"
                    style={{ backgroundColor: '#5CB85C' }}
                    position={this.state.position}
                    positionValue={250}  //位置值
                    fadeInDuration={500}  //显示持续时间
                    fadeOutDuration={500} //持续时间
                    opacity={0.8}   //透明度
                    />
                <Toast ref="toast" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

export default Toasts;