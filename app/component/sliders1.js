/**
 * 文件名称：滑块2
 * 
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PanResponder,
    Dimensions,
    Slider,
    Platform,
    Image,
    TouchableHighlight
} from 'react-native';
import BaseComponent from '../base/baseComponent';
const {height, width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Entypo';


const imgGroup = [
    [require('../image/slide/imgGroup_1.png'), require('../image/slide/imgGroup_01.png'), '200'],
    [require('../image/slide/imgGroup_2.png'), require('../image/slide/imgGroup_02.png'), '220'],
    [require('../image/slide/imgGroup_3.png'), require('../image/slide/imgGroup_03.png'), '104'],
    [require('../image/slide/imgGroup_4.png'), require('../image/slide/imgGroup_04.png'), '91'],
    [require('../image/slide/imgGroup_5.png'), require('../image/slide/imgGroup_05.png'), '220'],
    [require('../image/slide/imgGroup_3.png'), require('../image/slide/imgGroup_03.png'), '104'],
    [require('../image/slide/imgGroup_2.png'), require('../image/slide/imgGroup_02.png'), '220'],
];


const number = new Date().getSeconds();
const now = Math.round(number / 10);
const TotalLayer = 220;
export default class Sliders extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            left: 0,
            slideCompletionValue: 0,
            static: false,//如果为true，用户就不能移动滑块。默认为false
        }
    }

    getNavigationBarProps() {
        return {
            hideRightButton: true,
            title: '拼图验证2',
            leftButtonImage: require('../image/return.png')
        };
    }

    //结束滑动的时候
    _SliderValueChanged(value) {
        this.setState({
            slideCompletionValue: value,
            static: true,
        });
    }

    //重置所有状态
    _resetState() {
        this.setState({
            static: false,
            slideCompletionValue: 0,
            left: 0,
        });
    }

    renderImgstate() {
        let stateReplace = this.state.slideCompletionValue;
        let range = imgGroup[now][2];
        let minNumber = parseInt(range) - 3;
        let maxNumber = parseInt(range) + 3;
        //  alert(range+"----"+minNumber+"------"+maxNumber);
        if (stateReplace === 0) {
            return (
                <Image style={{ width: 30, height: 30 }} source={require('../image/slide/slide_1.png')} />
            );
        }
        if ((stateReplace * TotalLayer) >= minNumber && (stateReplace * TotalLayer) <= maxNumber) {
            return (
                <Image style={{ width: 30, height: 30 }} source={require('../image/slide/slide_3.png')} />
            );
        } else {
            return (
                <Image style={{ width: 30, height: 30 }} source={require('../image/slide/slide_2.png')} />
            );
        }
    }
    renderBody() {
        return (
            <View style={styles.container}>
                <View style={styles.box_z}>
                    <Image
                        source={imgGroup[now][0]}
                        style={styles.image}>
                        <Image style={[styles.box_k, {
                            "left": this.state.left
                        }]}
                            source={imgGroup[now][1]}
                            ></Image>
                    </Image>
                    <TouchableHighlight
                        onPress={this._resetState.bind(this)}
                        underlayColor='white'
                        style={{ width: 260, height: 20, marginTop: 10, }}>
                        <Icon name="cycle" size={18} color="#484B40" />
                    </TouchableHighlight>
                    <View style={styles.box_c}>
                        <Slider
                            {...this.pops}
                            disabled={this.state.static ? true : false}
                            style={{ width: TotalLayer, height: 50 }}
                            trackImage={require('../image/slide/slide_4.png')}
                            thumbImage={require('../image/slide/slide_5.png')}
                            value={this.state.slideCompletionValue}
                            // step={0.05}
                            //用户结束滑动的时候调用此回调
                            onSlidingComplete={(value) => this._SliderValueChanged(value)}
                            //在用户拖动滑块的过程中不断调用此回调,减掉小图片的宽度
                            onValueChange={(values) => this.setState({ left: (values * 220) })}
                            />
                        <View style={styles.determine}>
                            {this.renderImgstate()}
                        </View>
                    </View>
                    <View style={{ width: 260, height: 20, marginTop: 10 }}>
                        <Text>
                            Value: {(this.state.slideCompletionValue) * TotalLayer}----键值对:{now}-----{imgGroup[now][2]}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
    },
    image: {
        width: 260, height: 100,
    },
    box_z: {
        backgroundColor: 'white', padding: 10
    },
    box_k: {
        height: 39.5, width: 36, position: 'absolute', top: 32, left: 0
    },
    box_c: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    },
    determine: {
        width: 40, height: 50, justifyContent: 'center', alignItems: 'center',
    },
});

