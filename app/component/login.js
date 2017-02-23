/**
 * 文件名称：注册
 * 文件作者：YoungSherlockHolmes
 * 编写日期：2017年02月22日
 * 版权所有：湖南速微消费科技有限公司
 * 个人官网：http://www.051z.cc
 * 开源地址：https://github.com/YoungSherlockHolmes/Dui
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TextInput,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';
import { getNavigator } from '../route/route';
var {height, width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';
const BOX_INPUT = (Platform.OS === 'ios' ? 9 : 2);

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
            password: ''
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.view_img} source={require('../image/login01.jpg')}>
                    <View style={styles.box}>
                        <View style={styles.box_logo}>
                            <Image style={styles.box_logo_img} source={require('../image/login02.jpg')} />
                        </View>
                        <View style={styles.box_ul}>
                            <View style={styles.box_li}>
                                <Icon name="ios-person-outline" size={24} color="#969494" style={{ paddingLeft: 18 }} />
                                <TextInput
                                    style={styles.box_input}
                                    placeholder="手机号/用户名"
                                    placeholderTextColor="#969494"
                                    underlineColorAndroid="transparent"  //文本框的下划线颜色，透明为transparent
                                    numberOfLines={1}   //设置输入框的行数
                                    multiline={false}
                                    autoFocus={true} //自动获取input框焦点
                                    onChangeText={(text) => {
                                        this.setState({
                                            mobile: text
                                        });
                                    } }
                                    />
                            </View>
                            <View style={styles.box_li}>
                                <Icon name="ios-unlock-outline" size={24} color="#969494" style={{ paddingLeft: 18 }} />
                                <TextInput
                                    style={styles.box_input}
                                    placeholder="密码"
                                    placeholderTextColor="#969494"
                                    underlineColorAndroid="transparent"
                                    numberOfLines={1}
                                    multiline={false} //设置输入框的行数。当multiline设置为true时使用它，可以占据对应的行数
                                    secureTextEntry={true} //为true，文本框会遮住之前输入的文字，这样类似密码之类的敏感文字可以更加安全
                                    onChangeText={(text) => {
                                        this.setState({ password: text })
                                    } }
                                    />
                            </View>
                            <View style={styles.fast_registration}>
                                <TouchableOpacity
                                    activeOpacity={0.6}
                                    >
                                    <Text style={styles.fast_registration_tx}>快速注册</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.6}
                                    style={styles.forget}
                                    >
                                    <Text style={styles.forget_tx}>忘记密码?</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            style={styles.box_dengl}>
                            <View style={styles.box_dengl_bt}>
                                <Text style={styles.tx_color}>登录</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Image>
            </View>
        );
    }
}
let MiddleWidth = width - 60;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view_img: {
        flex: 1, width: width, height: height,
    },
    box: {
        marginLeft: 30, width: MiddleWidth
    },
    box_logo: { width: MiddleWidth, alignItems: 'center', justifyContent: 'center', marginTop: 80 },
    box_logo_img: { width: 100, height: 100, borderRadius: 30 },
    box_ul: {
        marginTop: 50
    },
    box_li: {
        flexDirection: 'row', height: 45, alignItems: 'center', marginBottom: 15,
        backgroundColor: 'white', borderRadius: 25, opacity: 0.88
    },
    box_input: {
        marginLeft: 8, height: 40, fontSize: 16, textAlign: 'left',
        textAlignVertical: 'center', flex: 1, marginTop: BOX_INPUT
    },
    box_dengl: { justifyContent: 'center', marginTop: 15, alignItems: 'center' },
    box_dengl_bt: {
        width: MiddleWidth, height: 45, justifyContent: 'center',
        alignItems: 'center', backgroundColor: 'white', borderRadius: 25, opacity: 0.88
    },
    tx_color: { color: '#959595', fontSize: 16, },
    fast_registration: {
        marginTop: 5, marginBottom: 10,
        width: MiddleWidth, position: 'relative',
    },
    fast_registration_tx: {
        fontSize: 14, color: 'white',
        textAlign: 'left', paddingLeft: 10
    },
    forget: { position: 'absolute', right: 0 },
    forget_tx: { fontSize: 14, color: 'white', paddingRight: 10 },
});

export default Login;