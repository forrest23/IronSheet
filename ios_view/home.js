/**
 * Created by fgmh on 16/3/31.
 */
'use strict';
var React = require('react-native');
var Swiper = require('./common/swiper.js');

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
    ActionSheetIos
    } = React;

var home = React.createClass({

    render: function () {
        return (
            <View style={styles.container}>
                <Swiper></Swiper>

            </View>

        );
    },

    _login: function () {
        console.log('');
    }

});


var styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: Image.resizeMode.contain
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    input: {
        marginLeft: 10,
        width: 220,
        height: 35,
        paddingLeft: 8,
        borderRadius: 5,
        borderColor: '#ccc'
    },
    btn: {
        marginTop: 10,
        width: 80,
        height: 35,
        backgroundColor: '#3BC1FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    }
});


module.exports = home;