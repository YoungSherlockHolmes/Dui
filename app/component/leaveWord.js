/**
 * 文件名称：留言框
 * 文件作者：YoungSherlockHolmes
 * 编写日期：2017年02月23日
 * 版权所有：湖南速微消费科技有限公司
 * 个人官网：http://www.051z.cc
 * 开源地址：https://github.com/YoungSherlockHolmes/Dui
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableHighlight,
    TextInput
} from 'react-native';
import BaseComponent from '../base/baseComponent';
import { getNavigator } from '../route/route';
import duicss from '../css/Duicss';
import Button from '../common/Button';
var {height, width} = Dimensions.get('window');

class LeaveWord extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            ctent: 0,
        }
    }
    getNavigationBarProps() {
        return {
            hideRightButton: true,
            title: '留言框',
            leftButtonImage: require('../image/return.png')
        };
    }
    renderBody() {
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <View>
                        <TextInput style={styles.box_input}
                            multiline={true} //可以输入多行
                            placeholderTextColor="#aaaaaa"
                            autoCapitalize="none"
                            autoCorrect={true}
                            maxLength={150}//最大输入字数
                            underlineColorAndroid={'transparent'}//输入框的线框为透明
                            placeholder='😘写下购买体会和使用感受来帮助其他小伙伴~.~'
                            onChangeText={(text) => {
                                this.setState({
                                    ctent: text.length
                                });
                            } }
                            />
                        <View style={styles.number_box}>
                            <Text style={{ color: 'red' }}>{this.state.ctent}</Text>
                            <Text>/150</Text>
                        </View>
                    </View>
                    <Button
                        containerStyle={styles.style_button}
                        style={styles.style_text}
                        text='提交'
                        />
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
        margin: 10, width: width - 20
    },
    box_input: {
        height: 180, borderColor: '#D5D5D5', borderWidth: 1, borderRadius: 8, textAlignVertical: 'top', paddingLeft: 8
    },
    number_box: {
        position: 'absolute', right: 10, bottom: 10, flexDirection: 'row',
    },
    style_button: {
        marginTop: 50, marginLeft: 10,
        marginRight: 10, backgroundColor: duicss.MAIN_COLOR,
        borderColor: '#5bc0de', height: 45,
        borderRadius: 25, justifyContent: 'center',
        alignItems: 'center',
    },
    style_text: {
        fontSize: 16,
        color: '#fff'
    },
});

export default LeaveWord;