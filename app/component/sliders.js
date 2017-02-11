/**
 * 文件名称：滑块
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


const now = new Date();
const number = (now.getSeconds()) * 4; //这将产生一个基于目前时间的0到59的整数,不能超过屏幕宽度260
const minNumber = number - 4;
const maxNumber = number + 10;
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
            title: '滑块',
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
                <View style={{ backgroundColor: 'white', padding: 10 }}>
                    <Image
                        source={require('../image/focus/051z_cc_2.jpg')}
                        style={styles.image}>
                        <View style={[styles.box_z, {
                            "left": number
                        }]}></View>
                        <View style={[styles.box_k, {
                            "left": this.state.left
                        }]}></View>
                    </Image>
                    <TouchableHighlight
                        onPress={this._resetState.bind(this)}
                        underlayColor='white'
                        style={{ width: 280, height: 20,marginTop:10 }}>
                        <Text>刷新</Text>
                    </TouchableHighlight>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
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
                        {/** <Text>
                            Value: {(this.state.slideCompletionValue) * TotalLayer}
                        </Text>
                        <Text>区域:{number}</Text> */}
                        <View style={{ width: 40, height: 50, justifyContent: 'center', alignItems: 'center', }}>
                            {this.renderImgstate()}
                        </View>
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
        backgroundColor: 'yellow', height: 40, width: 40, position: 'absolute', top: 30, left: 0
    },
    box_k: {
        backgroundColor: '#1EA108', height: 40, width: 40, position: 'absolute', top: 30, left: 0
    },
});

