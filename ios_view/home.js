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
    getInitialState: function () {
        return {
            rows: ['row1', 'row2', 'row3', 'row4', 'row5', 'row6']
        };
    },

    render: function () {
        var rowViews = this.state.rows.map(function (r, j) {
            return (
                <View style={styles.row}>
                    <Text>{r}</Text>
                </View>
            );
        });

        return (
            <View style={styles.container}>
                <Swiper></Swiper>
                <View style={styles.list}>
                    {rowViews}
                </View>
            </View>

        );
    },
});


var styles = StyleSheet.create({
    container: {
        flex: 1,
        left:0,
        marginTop: 50,
    },
    list: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    row: {
        backgroundColor: 'red',
        margin: 3,
        flex: 1,
        height: 100,
    }
});


module.exports = home;