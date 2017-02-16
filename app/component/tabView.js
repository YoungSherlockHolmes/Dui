/**
 * 文件名称：选项卡
 * 文件作者：YoungSherlockHolmes
 * 编写日期：2017年02月15日
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
    WebView,
    Dimensions
} from 'react-native';
import BaseComponent from '../base/baseComponent';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';

class TabView extends BaseComponent {
    constructor(props) {
        super(props);
    }

    getNavigationBarProps() {
        return {
            hideRightButton: true,
            title: '选项卡',
            leftButtonImage: require('../image/return.png')
        };
    }

    renderBody() {
        return (
            <View style={styles.container}>
                <ScrollableTabView
                    renderTabBar={
                        () => <DefaultTabBar
                            underlineHeight={2}
                            textStyle={{ fontSize: 20, }}
                            style={{ height: 50, backgroundColor: 'white' }}
                            />
                    }
                    tabBarUnderlineColor='#FF0000'
                    tabBarBackgroundColor='#EFEFEF'
                    tabBarActiveTextColor='#0294f7'
                    tabBarInactiveTextColor='#A0A0A0'
                    tabBarUnderlineStyle={{ backgroundColor: '#0294f7' }}
                    tabBarPosition='top'
                    contentProps={{ bounces: false }}    //两个属性组合使用可使选项卡不能左右滑动
                    locked={true}            //缺一不可
                    >
                    <View tabLabel="首页" style={styles.center}>
                        <WebView style={styles.webview_style}
                            ref={(ref) => { this.webview = ref; } }
                            source={{ uri: 'http://051z.cc/view/' }}
                            automaticallyAdjustContentInsets={false}
                            javaScriptEnabled  //仅限Android平台。iOS平台JavaScript是默认开启的。
                            domStorageEnabled  //仅限Android平台。指定是否开启DOM本地存储
                            //startInLoadingState    //默认添加一个菊花加载
                            scalesPageToFit    //设置是否要把网页缩放到适应视图的大小，以及是否允许用户改变缩放比例
                            decelerationRate="normal"  //指定一个浮点数，用于设置在用户停止触摸之后，此视图应以多快的速度停止滚动
                            >
                        </WebView>
                    </View>
                    <View tabLabel="海外购" style={styles.center}>
                        <WebView style={styles.webview_style}
                            source={{ uri: 'http://051z.cc/food/' }}
                            >
                        </WebView>
                    </View>
                    <View tabLabel="分享购" style={styles.center}>
                        <WebView style={styles.webview_style}
                            source={{ uri: 'http://051z.cc/life/' }}
                            >
                        </WebView>
                    </View>
                </ScrollableTabView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 20,
        backgroundColor: 'rgb(240, 240, 240)'
    },
    center: {
        flex: 1, backgroundColor: 'white',
    },
    webview_style: {
        flex: 1,
    }
})

export default TabView;