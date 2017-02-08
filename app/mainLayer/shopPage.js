/**
 * 文件名称：模板商店
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
} from 'react-native';
import BaseComponent from '../base/baseComponent';
import duicss from '../css/Duicss';
import NineLattice from '../common/nineLattice';
import { getNavigator } from '../route/route';
var {height, width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Entypo';

const COLUMN = [
    ["language", '#1F1F1F', 40, '分类标题', 'ClassifiedTitle'],
    ["flag", '#1F1F1F', 40, '宫格排版', 'ProductList'],
    ["github", '#1F1F1F', 40, '欢迎页', 'GuidePage'],
    ["magnet", '#1F1F1F', 40, '滑块', 'Sliders'],
    ["globe", '#1F1F1F', 40, '滑块2', 'Sliders1'],
    ["graduation-cap", '#1F1F1F', 40, '评分弹窗', 'ScoreWindow'],
    ["thumbs-up", '#1F1F1F', 40, '图文列表', 'Developing'],
    ["twitter", '#1F1F1F', 40, '通讯录', 'Developing'],
    ["tripadvisor", '#1F1F1F', 40, '图片懒加载', 'Developing'],
];

class ShopPage extends BaseComponent {
    constructor(props) {
        super(props);
    }
    getNavigationBarProps() {
        return {
            title: '组件商店'
        };
    }
    _onPress(navname) {
        getNavigator().push({ name: navname });
    }

    renderGongge() {
        //此方法中的数组必须是3的倍数，否则会报错
        var allNav = [];
        for (var i = 0; i < Math.round(COLUMN.length / 3); i++) {
            let one = 3 * i;
            let two = 1 + (3 * i);
            let three = 2 + (3 * i);
            allNav.push(
                <NineLattice
                    key={i}
                    LFiconName={COLUMN[one][0]}
                    LFiconColor={COLUMN[one][1]}
                    LFiconSize={COLUMN[one][2]}
                    leftText={COLUMN[one][3]}
                    leftUrl={() => this._onPress(COLUMN[one][4])}

                    CTiconName={COLUMN[two][0]}
                    CTiconColor={COLUMN[two][1]}
                    CTiconSize={COLUMN[two][2]}
                    centerText={COLUMN[two][3]}
                    cenertUrl={() => this._onPress(COLUMN[two][4])}

                    RGiconName={COLUMN[three][0]}
                    RGiconColor={COLUMN[three][1]}
                    RGiconSize={COLUMN[three][2]}
                    rightText={COLUMN[three][3]}
                    rightUrl={() => this._onPress(COLUMN[three][4])}
                    />
            );
        }
        return allNav;
    }


    renderBody() {
        return (
            <View style={styles.container}>
                <View style={styles.tops}>
                    <Text style={styles.tops_text}>www.051z.cc</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ marginTop: 5 }}>
                        {this.renderGongge()}
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEFEF',
    },
    tops: {
        width: width, height: 100, alignItems: 'center', backgroundColor: 'white', justifyContent: 'center'
    },
    tops_text: {
        color: duicss.MAIN_COLOR, textAlign: 'center', fontSize: 20, fontWeight: '800',
    },

});

export default ShopPage;
