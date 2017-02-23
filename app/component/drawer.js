/**
 * 文件名称：Drawer
 * 文件作者：YoungSherlockHolmes
 * 编写日期：2017年02月21日
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
    ScrollView
} from 'react-native';
import BaseComponent from '../base/baseComponent';
import { getNavigator } from '../route/route';
import Drawer from 'react-native-drawer'
var {height, width} = Dimensions.get('window');

class Sideslip extends Component {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, backgroundColor: '#272822', height: height }}>
                    <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center', borderBottomColor: 'white', borderBottomWidth: 1 }}>
                        <Text style={{ color: 'white', fontSize: 16, paddingBottom: 20 }}>首页</Text>
                    </View>
                    <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center', borderBottomColor: 'white', borderBottomWidth: 1 }}>
                        <Text style={{ color: 'white', fontSize: 16, paddingBottom: 20 }}>男装</Text>
                    </View>
                    <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center', borderBottomColor: 'white', borderBottomWidth: 1 }}>
                        <Text style={{ color: 'white', fontSize: 16, paddingBottom: 20 }}>女装</Text>
                    </View>
                    <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center', borderBottomColor: 'white', borderBottomWidth: 1 }}>
                        <Text style={{ color: 'white', fontSize: 16, paddingBottom: 20 }}>运动户外</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

class Drawers extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false,
        }
    }
    getNavigationBarProps() {
        return {
            title: 'Drawer',
            leftButtonImage: require('../image/return.png'),
            rightButtonImage: require('../image/myCenter_08.png'),
        };
    }
    //title右侧按钮点击事件
    onRightPressed() {
        if (!this.state.drawerOpen) {
            this.openDrawer();
        } else {
            this.closeDrawer();
        }
    }
    /**
     *  事件：关闭侧滑栏
     */
    closeDrawer = () => {
        if (this._drawer) {
            this._drawer.close();
        }
    };

    /**
     *  事件：打开侧滑栏
     */
    openDrawer = () => {
        if (this._drawer) {
            this._drawer.open();
        }
    };

    renderBody() {
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                type="overlay"
                content={<Sideslip />}
                tapToClose={true}
                acceptDoubleTap
                onOpen={() => {
                    this.setState({ drawerOpen: true })
                } }
                onClose={() => {
                    this.setState({ drawerOpen: false })
                } }
                side="right"
                captureGestures={false}
                openDrawerOffset={0.5}
                closedDrawerOffset={-3}
                panOpenMask={0.9}
                tweenHandler={(ratio) => ({
                    main: { opacity: (2 - ratio) / 2 }
                })}
                styles={drawerStyles.main}
                negotiatePan
                >
                <View style={styles.container}>
                    <Text>Main</Text>
                </View>
            </Drawer>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

});

const drawerStyles = {
    main: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
}

export default Drawers;