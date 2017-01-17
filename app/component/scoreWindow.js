/**
 * npm install react-native-vector-icons --save 图标组件
 * react-native link 自动引用
 * npm install react-native-star-rating --save  星级评分
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    Modal,
    StyleSheet,
    Dimensions,
    TouchableHighlight,
} from 'react-native';
import BaseComponent from '../base/baseComponent';
import { getNavigator } from '../route/route';
import duicss from '../css/Duicss';
var {height, width} = Dimensions.get('window');
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ScoreWindow extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            starCount: 3.5
        };
    }
    // 显示/隐藏 modal  
    _setModalVisible() {
        let isShow = this.state.show;
        this.setState({
            show: !isShow,
        });
    }
    getNavigationBarProps() {
        return {
            title: '评分弹窗',
            rightTitle: '打开',
            rightButtonTextStyle: { color: 'white' },
            leftButtonImage: require('../image/return.png')
        };
    }
    //导航栏右边关闭按钮事件
    onRightPressed() {
        this._setModalVisible();
    }
    //跳转方法
    _onPress(navname) {
        getNavigator().push({ name: navname });
    }
    //星星
    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }
    renderBody() {
        return (
            <View style={styles.container}>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={this.state.show}
                    onShow={() => { } }
                    onRequestClose={() => { } } >
                   <View style={styles.modalStyle}>
                        <View style={styles.subView}>
                            <Text style={styles.titleText}>评分</Text>
                            <View style={styles.stars}>
                                <View  style={styles.stars_box}>
                                <StarRating
                                    disabled={false}
                                    maxStars={5}
                                    rating={this.state.starCount}
                                    starColor={'#FF7000'}
                                    starSize={40}
                                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                                    />
                                    </View>
                            </View>
                            <View style={styles.horizontalLine} />
                            <TouchableHighlight
                                underlayColor='transparent'
                                onPress={() => { this._setModalVisible() } }
                                style={styles.buttom}>
                                <Text style={styles.buttom_text}>确定</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#EFEFEF',
    },
    modalStyle: {
        backgroundColor: '#2C2C2C', alignItems: 'center',
        justifyContent: 'center', flex: 1, opacity: 0.8
    },
    subView: {
        marginLeft: 40, marginRight: 40,
        backgroundColor: '#fff', alignSelf: 'stretch',
        borderRadius: 10, 
    },
    titleText: {
        marginTop: 10, marginBottom: 5,
        fontSize: 16, fontWeight: 'bold',
        textAlign: 'left', marginLeft: 10, color: '#000'
    },
    stars: {
        height: 100, borderTopColor: '#9D9D9D', borderTopWidth: 0.5, borderBottomColor: '#9D9D9D', borderBottomWidth: 0.5
    },
    stars_box:{
        marginLeft:((width-81-200)/2)*(width/320),marginRight:((width-81-200)/2)*(width/320),marginTop:25,height:50,
    },
    buttom: {
        height: 50, backgroundColor: duicss.ORANGE_COLOR, justifyContent: 'center',
        borderBottomLeftRadius: 10, borderBottomRightRadius: 10
    },
    buttom_text: { color: '#fff', textAlign: 'center', fontSize: 16, fontWeight: 'bold', },
});
