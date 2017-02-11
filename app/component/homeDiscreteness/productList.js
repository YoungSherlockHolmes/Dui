/**
 * 文件名称：商品列表
 * 文件作者：YoungSherlockHolmes
 * 编写日期：2017年02月7日
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
    ListView,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
var {height, width} = Dimensions.get('window');
var THUMB_URLS = [
    {
        img: "http://m.360buyimg.com//mobilecms/s276x276_jfs/t3241/272/2948528313/102120/652c6645/57e92bffN4afeae3b.jpg!q70.jpg",
        title: '璐婷半身裙秋冬季新款毛呢包臀裙一步裙长裙K6DJ0108 黑色 L',
        price: 25.09,
        Related: "http://www.051z.cc"
    },
    {
        img: "http://m.360buyimg.com//mobilecms/s276x276_jfs/t3178/307/18025558/213064/5ae954fd/57a03c08N7df24417.jpg!q70.jpg",
        title: '【狗东超市】富居(FOOJO)珊瑚绒地垫厨卫入门垫40*60cm七彩羽叶',
        price: 58.80,
        Related: "http://www.051z.cc"
    },
    {
        img: "http:////m.360buyimg.com//mobilecms/s276x276_jfs/t3292/220/2494524297/361913/2d850b03/57e24f61N983d9c72.jpg!q70.jpg",
        title: 'PansPLOR 2016韩版毛线针织半身裙包臀长裙裙侧开叉半身裙 秋冬款 酒红色 均码',
        price: 63.00,
        Related: "http://www.051z.cc"
    },
    {
        img: "http://m.360buyimg.com//mobilecms/s276x276_jfs/t3910/360/532801863/101656/ddaf7e28/5853bda8N7b77dcb5.jpg!q70.jpg",
        title: '罗技（Logitech）M275 无线鼠标 黑色',
        price: 18.00,
        Related: "http://www.051z.cc"
    },
    {
        img: "http://m.360buyimg.com//mobilecms/s276x276_g15/M07/19/09/rBEhWVNaTuwIAAAAAAJfv-LzBKIAAMZRANSj3sAAl_X235.jpg!q70.jpg",
        title: '【京东超市】老白汾酒十年陈酿53度 475ml（新老包装 随机发货）',
        price: 18.00,
        Related: "http://www.051z.cc"
    },
    {
        img: "http://m.360buyimg.com//mobilecms/s276x276_jfs/t3985/168/877664665/495577/c7375d11/58612077Nc6cbae26.jpg!q70.jpg",
        title: '莱卡金顿圆头深口低帮鞋2017年春季新款坡跟系带女鞋防水台厚底松糕鞋女鞋子 6198 白色 39',
        price: 18.00,
        Related: "http://www.051z.cc"
    },
    {
        img: "http://m.360buyimg.com//mobilecms/s276x276_jfs/t2824/248/3251026075/153240/9027a328/578450d5N33aee523.jpg!q70.jpg",
        title: '【京东超市】锐澳（RIO）洋酒 鸡尾酒 预调酒 电商罐全家福 355ml*8罐',
        price: 18.00,
        Related: "http://www.051z.cc"
    },
    {
        img: "http://m.360buyimg.com//mobilecms/s276x276_jfs/t2188/338/1467078173/345804/d111f4ef/565d4cdaN6ea115eb.jpg!q70.jpg",
        title: '【京东超市】百草味 蜜饯果干 芒果干100g/袋',
        price: 18.00,
        Related: "http://www.051z.cc"
    },
    {
        img: "http://m.360buyimg.com//mobilecms/s276x276_jfs/t2749/312/1338597980/18864/dd59dea7/573ab168N7e05c4ee.jpg!q70.jpg",
        title: '美的(Midea) BCD-206TM(E) 206升 三门冰箱 节能保鲜 闪白银',
        price: 18.00,
        Related: "http://www.051z.cc"
    },
    {
        img: "http://m.360buyimg.com//mobilecms/s276x276_jfs/t3136/268/5771335296/199123/16148720/588183b8Nfd8399a5.jpg!q70.jpg",
        title: '韩束 红石榴鲜活水盈七件套 洗面奶爽肤水乳液眼霜面霜 (补水保湿鲜活水嫩 护肤化妆品女护肤套装）',
        price: 18.00,
        Related: "http://www.051z.cc"
    },
    {
        img: "http://m.360buyimg.com//mobilecms/s276x276_jfs/t3556/7/1393064963/446298/e7ae6652/58286b74N0f3d8efe.jpg!q70.jpg",
        title: '联想',
        price: 18.00,
        Related: "http://www.051z.cc"
    },
    {
        img: "http://m.360buyimg.com//mobilecms/s276x276_jfs/t2107/126/2665768091/55478/25d477ef/5710f5fcN1f71cef0.jpg!q70.jpg",
        title: '360',
        price: 18.00,
        Related: "http://www.051z.cc"
    },
];

class ReactNativeProject extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(THUMB_URLS),
        };
    }

    _renderRow(rowData) {
        return (
            <View
                style={styles.gongge_li}>
                <TouchableOpacity
                    activeOpacity={0.8}>
                    <Image style={styles.gongge_li_img}
                        source={{ uri: rowData.img }}
                        />
                    <View style={styles.gongge_li_txbox}>
                        <Text numberOfLines={2}> {rowData.title}</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.price_column}>
                    <View style={styles.price_column_lf}>
                        <Text style={styles.price_column_lf_txl}>￥</Text>
                        <Text style={styles.price_column_lf_txr}>
                            {rowData.price}
                        </Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.price_column_rg}>
                        <Text>看相似</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                contentContainerStyle={styles.gongge}
                />
        );
    }
}

const styles = StyleSheet.create({
    gongge: {
        // 主轴方向
        flexDirection: 'row',
        // 换行
        flexWrap: 'wrap',
        marginTop: 1
    },
    gongge_li: {
        width: width / 2, height: 230,
        alignItems: 'center',
        borderBottomColor: '#f4f4f4', borderBottomWidth: 5,
        borderRightColor: '#f4f4f4', borderRightWidth: 1,
        backgroundColor: 'white',
    },
    gongge_li_img: {
        width: (width / 2) - 2, height: 150,
    },
    gongge_li_txbox: {
        paddingTop: 5,
    },
    price_column: {
        flexDirection: 'row', paddingTop: 5, alignItems: 'center', justifyContent: 'space-between', width: width / 2
    },
    price_column_lf: {
        flexDirection: 'row',marginLeft:5
    },
    price_column_rg: {
        borderWidth: 1,
        borderColor: '#999', borderRadius: 5, width: 60, alignItems: 'center', marginRight: 5
    },
    price_column_lf_txl:{
        fontSize: 14, color: 'red', position: 'absolute', bottom: 1
    },
    price_column_lf_txr:{
        fontSize: 18, color: 'red', paddingLeft: 12
    },
});

export default ReactNativeProject;
