/**
 * Created by fgmh on 16/4/1.
 */
'use strict';
var React = require('react-native');
var webView = require('./common/webView.js');

var {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    ScrollView
    } = React;

var about = React.createClass({
    render: function () {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={{uri: 'https://ruby-china-files.b0.upaiyun.com/assets/big_logo-5cdc3135cbb21938b8cd789bb9ffaa13.png'}} />
                <Text style={styles.ad}>
                    铁皮APP
                </Text>
                <Text style={styles.ad}>
                    全中国最贵的铁皮！没错，就是上海车牌！
                </Text>

                <TouchableHighlight underlayColor='#FFA62F' onPress={() => this._onPress('铁皮拍卖网', 'http://www.alltobid.com')}>
                    <Text style={styles.link}>
                        http://www.alltobid.com/
                    </Text>
                </TouchableHighlight>
            </View>
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
        backgroundColor: '#ffffff',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    ad: {
        fontSize: 18,
        fontWeight: 'bold',
        //textAlign: 'left',
        paddingTop:10,
    },
    link: {
        marginTop: 20,
        color: '#356DD0',
    },
    logo: {
        height: 150,
        width: 150,
    }
});


module.exports = about;