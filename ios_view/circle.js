/**
 * Created by fgmh on 16/4/1.
 * 铁皮圈
 */
'use strict';
var React = require('react-native');
var webView = require('./common/webView.js');
var ScrollableTabView = require('react-native-scrollable-tab-view');
var Moments =require('./common/moments.js');


var {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    ScrollView
    } = React;

var circle = React.createClass({
    render: function () {
        return (
            <ScrollableTabView style={{marginTop: 70}}>
                <View tabLabel="最热" style={styles.tabView}>
                    <Moments>
                    </Moments>
                </View>
                <View tabLabel="最新" style={styles.tabView}>
                    <Moments>
                    </Moments>
                </View>
                <View tabLabel="推荐" style={styles.tabView}>
                    <Moments>
                    </Moments>
                </View>
            </ScrollableTabView>
        );
    },

    _onPress: function(title, url){
        this.props.navigator.push({
            title: title,
            component: webView,
            passProps: {url: url},
        });

    }

});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
    },
    tabView: {
        flex: 1,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.01)',
    },
    card: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
        margin: 5,
        height: 150,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: { width: 2, height: 2, },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    icon: {
        width: 300,
        height: 300,
        alignSelf: 'center',
    },
});


module.exports = circle;