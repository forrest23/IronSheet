/**
 * Created by fgmh on 16/3/31.
 */
'use strict';
var React = require('react-native');
var Swiper = require('./common/swiper.js');
var ProductList =require('./productList.js');

var {
    StyleSheet,
    View,
    TabBarIOS,
    Text,
    NavigatorIOS,
    StatusBarIOS,
    TouchableHighlight,
    TextInput,
    Image,
    ActionSheetIos,
    Dimensions,
    ScrollView,
} = React;

var home = React.createClass({
    getInitialState: function () {
        return {
            rows: [
                { image: require('../Resources/icons/calendar_64px.png'), text: '拍牌日历' },
                { image: require('../Resources/icons/winamp_64px.png'), text: '拍牌流程' },
                { image: require('../Resources/icons/book_64px.png'), text: '拍牌攻略' },
                { image: require('../Resources/icons/Panel_64px.png'), text: '价格趋势' },
                { image: require('../Resources/icons/tasks_64px.png'), text: '政策资讯' },
                { image: require('../Resources/icons/walkman_64px.png'), text: '车品商城' },
            ]
        };
    },

    render: function () {
        var size = Dimensions.get('window').width / 3;
        var rowViews = this.state.rows.map(function (r, j) {
            return (
                <View style={[styles.row, { width: size }]}>
                    <Image style={styles.image} source={r.image}></Image>
                    <Text style={styles.text}>{r.text}</Text>
                </View>
            );
        });

        return (
            <ScrollView style={styles.container}>
                <Swiper></Swiper>
                <View style={styles.list}>
                    {rowViews}
                </View>
                <View style={styles.productList}>
                    <View style={styles.titleView}>
                        <Text style={styles.title}>值得买</Text>
                        <Text style={styles.titleDesc}>每天10点上新</Text>
                    </View>
                    <ProductList></ProductList>
                </View>
            </ScrollView>
        );
    },
});


var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderBottomWidth: 1,
        borderColor: '#E0E0E0',
    },
    row: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        // borderBottomWidth: 1,
        // borderLeftWidth: 1,
        // borderColor: '#E0E0E0',
    },
    image: {
        width: 64,
        height: 64,
        resizeMode: Image.resizeMode.contain
    },
    text: {
        marginTop: 5,
    },
    productList:
    {
        marginTop: 5,
    },
    titleView: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#E0E0E0',
        height:40,
        alignItems: 'center',
    },
    title:
    {
        marginLeft: 10,
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold',
    },
    titleDesc:
    {
        marginLeft: 20,
        fontSize: 14,
        color: '#C0C0C0',
    }
});


module.exports = home;