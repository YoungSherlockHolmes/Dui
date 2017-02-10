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
import HomeSearch from '../component/homeSearch';
import ProductList from '../component/productList';
import { getNavigator } from '../route/route';
var {height, width} = Dimensions.get('window');

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

    render() {
        return (
            <View style={styles.container}>
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
                <View style={styles.search_box}>
                     <HomeSearch />
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
    search_box:{
        position: 'absolute', top: 0
    }
});

export default HomePage;
