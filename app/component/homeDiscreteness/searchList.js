/**
 * 文件名称：搜索列表
 * 文件作者：YoungSherlockHolmes
 * 编写日期：2017年02月8日
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
    ScrollView,
    TextInput,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Entypo';
var {height, width} = Dimensions.get('window');
import { getNavigator } from '../../route/route';

var dismissKeyboard = require('dismissKeyboard');//解决软键盘在失去焦点之后不关闭的问题

class SearchList extends Component {
    constructor(props) {
        super(props);
    }
    _onLeftPressed() {
        dismissKeyboard();//关闭键盘
        getNavigator().pop();
        
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.Search_bar}>
                    <TouchableOpacity
                        onPress={() => this._onLeftPressed()}
                        activeOpacity={0.8}
                        style={styles.Search_bar_lf}>
                        <Icons name="chevron-thin-left" size={26} color="white" />
                    </TouchableOpacity>
                    <View>
                        <TextInput
                            style={styles.style_sousuo_input}
                            placeholder='搜索京东商品/店铺'
                            numberOfLines={1}
                            autoFocus={true}//为true则自动选中搜索栏
                            underlineColorAndroid={'transparent'}
                            textAlign='left'
                            />
                        <View style={styles.Search_bar_ce}>
                            <Icon name="ios-search-outline" size={22} color="#484B40" />
                        </View>
                        <View style={styles.Search_bar_ce_rg}>
                            <Icon name="ios-mic-outline" size={22} color="#484B40" />
                        </View>
                    </View>
                    <View style={styles.Search_bar_rg}>
                        <Text style={styles.Search_bar_lf_tx}>搜索</Text>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>

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
    style_sousuo_input: {
        backgroundColor: '#fff',
        height: 40,
        marginTop: 10,
        paddingLeft: 30, paddingRight: 23,
        borderColor: '#f6f6f6',
        borderWidth: 1, width: width - 100,
        borderRadius: 20
    },
    Search_bar: {
        height: 60, flexDirection: 'row', backgroundColor: '#5CB85C',
    },
    Search_bar_lf: {
        width: 50, justifyContent: 'center', alignItems: 'center',
    },
    Search_bar_lf_tx: {
        color: 'white', fontSize: 16
    },
    Search_bar_ce: {
        position: 'absolute', left: 10, top: 20
    },
    Search_bar_ce_rg: {
        position: 'absolute', right: 10, top: 20
    },
    Search_bar_rg: {
        width: 50, justifyContent: 'center', alignItems: 'center',
    },
});

export default SearchList;