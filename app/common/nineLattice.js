/**
 * 文件名称：九宫格Item
 * 文件作者：YoungSherlockHolmes
 * 编写日期：2017年01月11日
 * 版权所有：湖南速微消费科技有限公司
 * 个人官网：http://www.051z.cc
 * 开源地址：https://github.com/YoungSherlockHolmes/Duidemo.git
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
import duicss from '../css/Duicss';
var {height, width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';

const NineLattice =({LFiconName, LFiconColor, LFiconSize, leftText, leftUrl,
        CTiconName, CTiconColor, CTiconSize, centerText, cenertUrl,
        RGiconName, RGiconColor, RGiconSize, rightText, rightUrl}) => (
            <View style={styles.centers}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={leftUrl}
                    style={styles.centers_box}>
                    <Icon name={LFiconName} color={LFiconColor} size={LFiconSize} />
                    <View style={styles.centers_text}>
                        <Text style={styles.centers_tx}>{leftText}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={cenertUrl}
                    style={[styles.centers_box, styles.centers_border]}>
                    <Icon name={CTiconName} color={CTiconColor} size={CTiconSize} />
                    <View style={styles.centers_text}>
                        <Text style={styles.centers_tx}>{centerText}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={rightUrl}
                    style={styles.centers_box}>
                    <Icon name={RGiconName} color={RGiconColor} size={RGiconSize} />
                    <View style={styles.centers_text}>
                        <Text style={styles.centers_tx}>{rightText}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
const styles = StyleSheet.create({
    centers: {
        borderTopColor: '#ccc', borderTopWidth: 0.5,
        flexDirection: 'row', backgroundColor: 'white',
    },
    centers_box: {
        width: (width - 1) / 3, alignItems: 'center', paddingTop: 15, paddingBottom: 15,
    },
    centers_border: {
        borderRightColor: '#ccc', borderRightWidth: 0.5, borderLeftColor: '#ccc', borderLeftWidth: 0.5,
    },
    centers_text: {
        paddingTop: 10
    },
    centers_tx: {
        color: '#777777', fontSize: 14
    }
});
export default NineLattice;