/**
 * 文件名称：主页
 * 文件作者：YoungSherlockHolmes
 * 编写日期：2017年01月11日
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
import Focus from '../component/focus';
import PalaceNavigation from '../common/palaceNavigation';
import Icon from 'react-native-vector-icons/Ionicons';

var {height, width} = Dimensions.get('window');
import ProductList from '../component/productList';
import { getNavigator } from '../route/route';

const COLUMN = [
    [require('../image/tutu.jpg'), '京东超市'],
    [require('../image/tutu.jpg'), '全球购'],
    [require('../image/tutu.jpg'), '服装城'],
    [require('../image/tutu.jpg'), '生鲜'],
    [require('../image/tutu.jpg'), '出行'],
    [require('../image/tutu.jpg'), '充值中心'],
    [require('../image/tutu.jpg'), '领京豆'],
    [require('../image/tutu.jpg'), '领券'],
    [require('../image/tutu.jpg'), '惠赚钱'],
    [require('../image/tutu.jpg'), '全部'],
];

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    _onPress(navname) {
        getNavigator().push({ name: navname });
    }

    render() {
        return (
            <View style={styles.container}>
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
                        {/** <TextInput
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
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Focus />
                    <View style={{ backgroundColor: 'white' }}>
                        <PalaceNavigation
                            oneImg={COLUMN[0][0]}
                            oneText={COLUMN[0][1]}
                            twoImg={COLUMN[1][0]}
                            twoText={COLUMN[1][1]}
                            threeImg={COLUMN[2][0]}
                            threeText={COLUMN[2][1]}
                            fourImg={COLUMN[3][0]}
                            fourText={COLUMN[3][1]}
                            fiveImg={COLUMN[4][0]}
                            fiveText={COLUMN[4][1]}
                            />
                        <PalaceNavigation
                            oneImg={COLUMN[5][0]}
                            oneText={COLUMN[5][1]}
                            twoImg={COLUMN[6][0]}
                            twoText={COLUMN[6][1]}
                            threeImg={COLUMN[7][0]}
                            threeText={COLUMN[7][1]}
                            fourImg={COLUMN[8][0]}
                            fourText={COLUMN[8][1]}
                            fiveImg={COLUMN[9][0]}
                            fiveText={COLUMN[9][1]}
                            />
                    </View>
                    <ProductList />
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
        paddingLeft: 30,
        borderColor: '#f6f6f6',
        borderWidth: 1, width: width - 100,
        borderRadius: 20,
        justifyContent: 'center',
    },
    Search_bar: {
        height: 60, flexDirection: 'row', backgroundColor: '#5CB85C',
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

export default HomePage;
