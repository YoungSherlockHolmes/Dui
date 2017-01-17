/**
 * 文件名称：京东宫格导航
 * 文件作者：YoungSherlockHolmes
 * 编写日期：2017年01月11日
 * 版权所有：湖南速微消费科技有限公司
 * 个人官网：http://www.051z.cc
 * 开源地址：https://github.com/YoungSherlockHolmes/Dui
 */
import React, { PropTypes } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';
var {height, width} = Dimensions.get('window');

const PalaceNavigation =
    ({oneImg,oneText,twoImg,twoText,threeImg,threeText,fourImg,fourText,fiveImg,fiveText}) => (
        <View style={styles.gongge}>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.gongge_li}>
                <Image style={styles.gongge_li_img} source={oneImg} />
                <View style={styles.gongge_li_txbox}>
                    <Text>{oneText}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.gongge_li}>
                <Image style={styles.gongge_li_img} source={twoImg} />
                <View style={styles.gongge_li_txbox}>
                    <Text>{twoText}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.gongge_li}>
                <Image style={styles.gongge_li_img} source={threeImg} />
                <View style={styles.gongge_li_txbox}>
                    <Text>{threeText}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.gongge_li}>
                <Image style={styles.gongge_li_img} source={fourImg} />
                <View style={styles.gongge_li_txbox}>
                    <Text>{fourText}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.gongge_li}>
                <Image style={styles.gongge_li_img} source={fiveImg} />
                <View style={styles.gongge_li_txbox}>
                    <Text>{fiveText}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
const styles = StyleSheet.create({
    gongge: {
        flexDirection: 'row', width: width, paddingTop: 10
    },
    gongge_li: {
        width: width / 5, alignItems: 'center',
    },
    gongge_li_img: {
        width: 40, height: 40, borderRadius: 50
    },
    gongge_li_txbox:{
        paddingTop: 3
    },
});
export default PalaceNavigation;