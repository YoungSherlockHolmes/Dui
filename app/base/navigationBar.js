/**
 * 文件名称：顶部导航组件
 * 文件作者：YoungSherlockHolmes
 * 编写日期：2017年01月11日
 * 版权所有：湖南速微消费科技有限公司
 * 个人官网：http://www.051z.cc
 * 开源地址：https://github.com/YoungSherlockHolmes/Duidemo.git
 */

import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import duicss from '../css/Duicss';

const windowWidth = Dimensions.get('window').width;

const defaultNavigationHeight = 50;
const defaultButtonHeight = defaultNavigationHeight - 25;//左侧图片的高度


const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: duicss.MAIN_COLOR,
    height: defaultNavigationHeight,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: duicss.GRAY_COLOR,
    flexDirection: 'row'
  },
  navigationBarTitleContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 80,
    right: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationBarTitle: {
    color: duicss.TEXT_Head_COLOR,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  leftButton: {
    paddingHorizontal: 8,
    height: defaultNavigationHeight,
    justifyContent: 'center',//主轴
    alignItems: 'flex-end'
  },
  rightButton: {
    paddingHorizontal: 8,
    height: defaultNavigationHeight,
    justifyContent: 'center',//主轴
    alignItems: 'flex-start'//

  },
  rightButtonTextStyle: {
    color: duicss.TEXT_GRAY_COLOR,
    textAlign: 'right',
    fontSize: 16,
    marginRight: 10
  },
  image: {
    height: defaultButtonHeight,
    width: defaultButtonHeight,
    position: 'relative',
  },
  head_box_red: { width: 5, height: 5, borderRadius: 5, backgroundColor: 'red', position: 'absolute', right: 0 },
});

const defaultNavigationBarProps = {
  hideNav: false,
  hideLeftButton: false,
  hideRightButton: false,
  hideLeftRed: false,
};

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.navigationBarProps = Object.assign({}, defaultNavigationBarProps, props.navigationBarProps);
    this.renderRight = this.renderRight.bind(this);
    this.renderLeftButton = this.renderLeftButton.bind(this);
    this.renderRightButton = this.renderRightButton.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.navigationBarProps = Object.assign({}, defaultNavigationBarProps, nextProps.navigationBarProps);
  }

  renderLeftButton() {
    if (this.navigationBarProps.hideLeftButton) {
      return null;
    }
      //消息按钮的小红点
    if (this.navigationBarProps.hideLeftRed) {
      return null;
    }
    var reddot;
    if (this.navigationBarProps.LeftRed === 1) {
      reddot = (
       <View style={styles.head_box_red} ></View>
      );
    }
    //------------
    var {onLeftPressed} = this.props;
    return (
      <TouchableOpacity onPress={onLeftPressed} style={[styles.leftButton, this.navigationBarProps.leftButton]}>
        <Image style={styles.image} resizeMode="contain" source={this.navigationBarProps.leftButtonImage}>
        {reddot}
        </Image>
      </TouchableOpacity>
    );
  }

  renderRightButton() {
    if (this.navigationBarProps.hideRightButton) {
      return null;
    }
    //优先image, text次之
    var {onRightPressed} = this.props;
    var component;
    if (this.navigationBarProps.rightButtonImage) {
      component = (
        <Image style={styles.image} resizeMode="contain" source={this.navigationBarProps.rightButtonImage}/>
      );
    }
    else if (this.navigationBarProps.rightTitle && this.navigationBarProps.rightTitle !== '') {
      component = (
        <Text style={[styles.rightButtonTextStyle, this.navigationBarProps.rightButtonTextStyle]}>{this.navigationBarProps.rightTitle}</Text>
      );
    } else {
      return null;
    }

    return (
      <TouchableOpacity onPress={onRightPressed} style={[styles.rightButton, this.navigationBarProps.rightButton]}>
        {component}
      </TouchableOpacity>
    );
  }

  //右侧
  renderRight() {
    return (
      <View style={{flexDirection: 'row'}}>
        {this.renderRightButton()}
      </View>
    );
  }

  render() {
    var {hideNav, title} = this.navigationBarProps;
    if (hideNav) {
      return null;
    }
    return (
      <View style={[styles.navigationBar, this.navigationBarProps.navigationBar]}>
        {this.renderLeftButton()}
        {this.renderRight()}
        <View style={styles.navigationBarTitleContainer}>
          <Text numberOfLines={1} style={[styles.navigationBarTitle, this.navigationBarProps.navigationBarTitle]}>{title}</Text>
        </View>
      </View>
    );
  }
}

export default NavigationBar;
