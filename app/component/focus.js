/**
 * 文件名称：轮播图
 * 文件作者：YoungSherlockHolmes
 * 编写日期：2017年01月11日
 * 版权所有：湖南速微消费科技有限公司
 * 个人官网：http://www.051z.cc
 * 开源地址：https://github.com/YoungSherlockHolmes/Dui
 * npm i react-native-swiper --save
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image
} from 'react-native';
import Swiper from 'react-native-swiper';
var {height, width} = Dimensions.get('window');

const BANNER_IMGS = [
    require('../image/focus/051z_cc_1.jpg'),
    require('../image/focus/051z_cc_2.jpg'),
    require('../image/focus/051z_cc_3.jpg'),
    require('../image/focus/051z_cc_4.jpg'),
    require('../image/focus/051z_cc_5.jpg')
];

var styles = StyleSheet.create({
    wrapper: {
        height: 180,
    },
    slide: {
        width: width,
        height: 180,
    },
    img: {
        width: width,
        height: 180,
    },
    dots: {
        backgroundColor: '#CBCBCB', width: 8, height: 8, borderRadius: 4,
        marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3
    },
    activeDots: {
        backgroundColor: '#747474', width: 8, height: 8, borderRadius: 4,
        marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, borderColor: 'white', borderWidth: 0.5
    },
})
class Focus extends Component {
    render() {
        return (
            <Swiper style={styles.wrapper}
                showsButtons={false}
                height={180}
                autoplay={true}
                index={0}
                autoplayTimeout={5}//切换时间
                paginationStyle={{ position: 'absolute',bottom: 5,}}//小圆点盒子定位
                dot={<View style={styles.dots} />}  //未选中状态
                activeDot={<View style={styles.activeDots} />}  //选中状态
                >
                <View style={styles.slide}>
                    <Image source={BANNER_IMGS[0]} style={styles.img} />
                </View>
                <View style={styles.slide}>
                    <Image source={BANNER_IMGS[1]} style={styles.img} />
                </View>
                <View style={styles.slide}>
                    <Image source={BANNER_IMGS[2]} style={styles.img} />
                </View>
                <View style={styles.slide}>
                    <Image source={BANNER_IMGS[3]} style={styles.img} />
                </View>
                <View style={styles.slide}>
                    <Image source={BANNER_IMGS[4]} style={styles.img} />
                </View>
            </Swiper>
        )
    }
}
export default Focus;