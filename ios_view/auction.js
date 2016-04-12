/**
 * Created by fgmh on 16/4/12.
 * 代拍
 */
'use strict';
var React = require('react-native');
var Swiper = require('./common/swiper.js');
var AuctionSellers=require('./auctionSellers.js');

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
    ScrollView,
    } = React;

var auction = React.createClass({

    render: function () {
        return (
            <ScrollView style={styles.container}>
                <Swiper></Swiper>
                <AuctionSellers></AuctionSellers>
            </ScrollView>
        );
    },


});


var styles = StyleSheet.create({
    container: {

    },

});


module.exports = auction;