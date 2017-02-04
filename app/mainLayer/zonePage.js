/**
 * 文件名称：个人中心
 * 文件作者：YoungSherlockHolmes
 * 编写日期：2017年01月11日
 * 版权所有：湖南速微消费科技有限公司
 * 个人官网：http://www.051z.cc
 * 开源地址：https://github.com/YoungSherlockHolmes/Dui
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import BaseComponent from '../base/baseComponent';
var {height, width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Entypo';

class ZonePage extends BaseComponent {
  constructor(props) {
    super(props);
  }

  getNavigationBarProps() {
    return {
      title: '个人中心'
    };
  }

  renderBody() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {/**头像账号 */}
          <View style={styles.individual_account}>
            <TouchableOpacity
              activeOpacity={1}
              style={{ marginTop: 20 }}
              >
              <Image style={styles.individual_account_img} source={require('../image/tutu.jpg')} />
              <View style={styles.Photograph}>
                <Icon name="camera" size={16} color="#272822" />
              </View>
            </TouchableOpacity>
            <View style={styles.Account_name}>
              <View style={styles.Membership_level}>
                <Icon name="vimeo" size={18} color="#F7C603" />
              </View>
              <Text style={styles.Account_name_tx}>Dui会员</Text>
            </View>
          </View>
          {/***列表 */}
          <View style={styles.list_core}>
            <View style={styles.list_core_abroad}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.list_core_within}>
                <View style={styles.list_core_lf}>
                  <Icon name="v-card" size={25} color="#49A3F8" />
                  <Text style={styles.list_core_lf_tx}>个人资料</Text>
                </View>
                <Icon name="chevron-thin-right" size={22} color="#BFBFBC" />
              </TouchableOpacity>
              <View style={styles.list_core_border}></View>
            </View>
          </View>
          <View style={styles.list_core}>
            <View style={styles.list_core_abroad}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.list_core_within}>
                <View style={styles.list_core_lf}>
                  <Icon name="typing" size={25} color="#EAA497" />
                  <Text style={styles.list_core_lf_tx}>消息中心</Text>
                </View>
                <Icon name="chevron-thin-right" size={22} color="#BFBFBC" />
              </TouchableOpacity>
              <View style={styles.list_core_border}></View>
            </View>
          </View>
          <View style={styles.list_core}>
            <View style={styles.list_core_abroad}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.list_core_within}>
                <View style={styles.list_core_lf}>
                  <Icon name="sina-weibo" size={25} color="#FC786F" />
                  <Text style={styles.list_core_lf_tx}>绑定微博</Text>
                </View>
                <Icon name="chevron-thin-right" size={22} color="#BFBFBC" />
              </TouchableOpacity>
              <View style={styles.list_core_border}></View>
            </View>
          </View>
          <View style={styles.list_core}>
            <View style={styles.list_core_abroad}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.list_core_within}>
                <View style={styles.list_core_lf}>
                  <Icon name="image-inverted" size={25} color="#0C8244" />
                  <Text style={styles.list_core_lf_tx}>我的相册</Text>
                </View>
                <Icon name="chevron-thin-right" size={22} color="#BFBFBC" />
              </TouchableOpacity>
              <View style={styles.list_core_border}></View>
            </View>
          </View>
          <View style={styles.list_core}>
            <View style={styles.list_core_abroad}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.list_core_within}>
                <View style={styles.list_core_lf}>
                  <Icon name="star-outlined" size={25} color="red" />
                  <Text style={styles.list_core_lf_tx}>我的收藏</Text>
                </View>
                <Icon name="chevron-thin-right" size={22} color="#BFBFBC" />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  onLeftPressed() {

  }

  onRightPressed() {

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },
  individual_account: {
    backgroundColor: '#5CB85C', height: 180, alignItems: 'center',
  },
  individual_account_img: {
    width: 90, height: 90, borderRadius: 90, borderColor: 'white', borderWidth: 3
  },
  Account_name: {
    marginTop: 10, alignItems: 'center', flexDirection: 'row'
  },
  Account_name_tx: {
    fontSize: 16, color: 'white'
  },
  Photograph: {
    position: 'absolute', right: 0, bottom: 5, backgroundColor: 'white',
    width: 24, height: 24, borderRadius: 24, alignItems: 'center',
    justifyContent: 'center',
  },
  list_core: {
    backgroundColor: 'white', width: width
  },
  list_core_abroad: {
    marginLeft: 15, marginRight: 15
  },
  list_core_within: {
    paddingTop: 12, paddingBottom: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
  },
  list_core_lf: {
    flexDirection: 'row'
  },
  list_core_lf_tx: {
    fontSize: 16, color: '#272822', paddingLeft: 8
  },
  list_core_border: {
    borderBottomColor: '#BFBFBC', borderBottomWidth: 1
  },
  Membership_level: {
    backgroundColor: 'yellow', width: 20, height: 20,
    justifyContent: 'center', alignSelf: 'center', borderRadius: 20, marginRight: 5
  },


});

export default ZonePage;
