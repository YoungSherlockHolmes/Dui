/**
 * 文件名称：首页搜索栏
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
    TextInput,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
var {height, width} = Dimensions.get('window');
import { getNavigator } from '../../route/route';

class HomeSearch extends Component {
    constructor(props) {
        super(props);
    }

    _onPress(navname) {
        getNavigator().push({ name: navname });
    }

    render() {
        return (
            <View style={styles.Search_bar}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.Search_bar_lf}>
                    <Icon name="ios-qr-scanner" size={26} color="white" />
                    <Text style={styles.Search_bar_lf_tx}>扫啊扫</Text>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => this._onPress('SearchList')}
                        style={styles.style_sousuo_input}>
                        <Text>搜索京东商品/店铺</Text>
                    </TouchableOpacity>
                    {/**<TextInput
                            style={styles.style_sousuo_input}
                            placeholder='搜索京东商品/店铺'
                            numberOfLines={1}
                            autoFocus={false}//为true则自动选中搜索栏
                            underlineColorAndroid={'transparent'}
                            textAlign='left'
                            // editable={false}//设置不能编辑
                            onFocus={() => this._onPress('SearchList')}
                            />
                            */}
                    <View style={styles.Search_bar_ce}>
                        <Icon name="ios-search-outline" size={22} color="#484B40" />
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.Search_bar_ce_rg}>
                        <Icon name="ios-mic-outline" size={22} color="#484B40" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.Search_bar_rg}>
                    <Icon name="ios-text-outline" size={26} color="white" />
                    <Text style={styles.Search_bar_lf_tx}>消息</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    style_sousuo_input: {
        backgroundColor: '#f6f6f6',
        height: 40,
        marginTop: 10,
        paddingLeft: 30,
        borderColor: '#f6f6f6',
        borderWidth: 1, width: width - 100,
        borderRadius: 20,
        justifyContent: 'center',
    },
    Search_bar: {
        height: 60, flexDirection: 'row', 
        // backgroundColor: '#5CB85C',
    },
    Search_bar_lf: {
        width: 50, justifyContent: 'center', alignItems: 'center',
    },
    Search_bar_lf_tx: {
        color: 'white', fontSize: 10
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

export default HomeSearch;