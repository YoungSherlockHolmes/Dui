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
    { img: "http://m.360buyimg.com//mobilecms/s276x276_jfs/t2068/293/2905774348/120925/a404aaa0/56f20bdcN742173e1.jpg!q70.jpg", title: '华为荣耀V8，4G+32G' },
    { img: "http://m.360buyimg.com//mobilecms/s276x276_jfs/t2479/195/1984094107/120025/3bee3ed4/56e671cdN41da831c.jpg!q70.jpg", title: '小米' },
    { img: "http://m.360buyimg.com//mobilecms/s276x276_jfs/t3307/192/4441509455/114084/5b0c9ddc/5847e790Nd7041422.jpg!q70.jpg", title: '努比亚' },
    { img: "http://m.360buyimg.com//mobilecms/s276x276_jfs/t3139/220/5797499316/102957/5136a9b7/58833084N07661304.jpg!q70.jpg", title: 'oppo' },
    { img: "http://m.360buyimg.com//mobilecms/s276x276_jfs/t2344/288/413741291/135184/c502311f/5608b901N7f95121d.jpg!q70.jpg", title: 'vivo' },
    { img: "http://m.360buyimg.com//mobilecms/s276x276_jfs/t277/5/1706398271/379789/7db04c0e/544082d2Ne9f409bd.jpg!q70.jpg", title: '苹果' },
    { img: "http://m.360buyimg.com//mobilecms/s276x276_jfs/t2014/303/2946951503/175724/d2afee7f/572030d3N33e06ebf.jpg!q70.jpg", title: '酷派' },
    { img: "http://m.360buyimg.com//mobilecms/s276x276_jfs/t2530/13/24505508/122350/f219c475/563308aaN6198f580.jpg!q70.jpg", title: '乐视' },
    { img: "http://m.360buyimg.com//mobilecms/s276x276_jfs/t3340/97/750550458/196437/cf3b0073/58131e99N08c6009c.jpg!q70.jpg", title: '魅族' },
    { img: "http://m.360buyimg.com//mobilecms/s276x276_jfs/t3817/262/2889540652/127681/a59634bb/586b93c7Ne9e0f647.jpg!q70.jpg", title: '中兴' },
    { img: "http://m.360buyimg.com//mobilecms/s276x276_jfs/t3556/7/1393064963/446298/e7ae6652/58286b74N0f3d8efe.jpg!q70.jpg", title: '联想' },
    { img: "http://m.360buyimg.com//mobilecms/s276x276_jfs/t2107/126/2665768091/55478/25d477ef/5710f5fcN1f71cef0.jpg!q70.jpg", title: '360' },
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
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.gongge_li}>
                <Image style={styles.gongge_li_img} source={{ uri: rowData.img }} />
                <View style={styles.gongge_li_txbox}>
                    <Text> {rowData.title}</Text>
                </View>
            </TouchableOpacity>
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
        width: width / 2, height: (width / 2) - 20,
        alignItems: 'center', justifyContent: 'center',
        borderBottomColor: '#f4f4f4', borderBottomWidth: 1,
        borderRightColor: '#f4f4f4', borderRightWidth: 1,
        backgroundColor: 'white',
    },
    gongge_li_img: {
        width: (width / 2) - 40, height: (width / 3) - 20, paddingTop: 10
    },
    gongge_li_txbox: {
        padding: 10
    },
});

export default ReactNativeProject;
