/**
 * 文件名称：精仿唯品会引导页
 * 文件作者：YoungSherlockHolmes
 * 编写日期：2017年01月12日
 * 版权所有：湖南速微消费科技有限公司
 * 个人官网：http://www.051z.cc
 * 开源地址：https://github.com/YoungSherlockHolmes/Dui
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    Image,
    StatusBar
} from 'react-native';
import Swiper from 'react-native-swiper';
import { getNavigator } from '../route/route';
var {height, width} = Dimensions.get('window');
//定义欢迎页图片高度
const Zheight = height - 50;
const BANNER_IMGS = [
    require('../image/guidePage01.jpg'),
    require('../image/guidePage02.jpg'),
];

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        height: Zheight,
    },
    slide: {
        width: width,
        height: Zheight,
    },
    img: {
        width: width,
        height: Zheight,
    },
    dots: {
        backgroundColor: '#CBCBCB', width: 8, height: 8, borderRadius: 4,
        marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3
    },
    activeDots: {
        backgroundColor: '#747474', width: 8, height: 8, borderRadius: 4,
        marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, borderColor: 'white', borderWidth: 0.5
    },
    buttom: {
        flex: 1, height: 50, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'
    },
    buttom_text: {
        color: '#F503A2', textAlign: 'center', fontSize: 18
    },
})
class GuidePage extends Component {
    constructor(props) {
        super(props);
    }
    //componentWillMount，组件即将被渲染到页面上，但是此时还没有被渲染，render之前最后一次修改状态的机会
    componentWillMount() {
        setTimeout(function () {
            getNavigator().replace({ name: 'MainPage' });
        }, 5000);
    }

    _onPress(navname) {
        getNavigator().replace({ name: navname });
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={true}
                    />
                <Swiper style={styles.wrapper}
                    showsButtons={false}
                    height={Zheight}
                    index={0}
                    autoplay={true}
                    autoplayTimeout={3}//切换时间
                    paginationStyle={{ position: 'absolute', bottom: 5, }}//小圆点
                    dot={<View style={styles.dots} />}
                    activeDot={<View style={styles.activeDots} />}
                    >
                    <View style={styles.slide}>
                        <Image source={BANNER_IMGS[0]} style={styles.img} />
                    </View>
                    <View style={styles.slide}>
                        <Image source={BANNER_IMGS[1]} style={styles.img} />
                    </View>
                </Swiper>
                <TouchableOpacity
                    onPress={() => this._onPress('MainPage')}
                    activeOpacity={0.8}
                    style={styles.buttom}>
                    <Text style={styles.buttom_text}>进入首页</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default GuidePage;