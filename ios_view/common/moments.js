/**
 * Created by fgmh on 16/4/5.
 * 铁皮圈动态模板
 */
'use strict';
var React = require('react-native');

var {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    NavigatorIOS
    } = React


var moments = React.createClass({
    render: function() {
        return (

            <View>
                <View style={[styles.row]}>
                    <TouchableOpacity style={[styles.part_left]}>
                        <Image style={styles.logo} source={{uri: 'avatar.png'}}></Image>
                    </TouchableOpacity>
                    <View style={[styles.part_right]}>
                        <TouchableOpacity>
                            <Text style={[styles.name_text]}>大西瓜</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={[styles.moments_text]}>就是这么任性!就是这么任性!就是这么任性!就是这么任性!</Text>
                        </TouchableOpacity>
                        <Text style={styles.moments_date}>昨天</Text>
                    </View>
                </View>

                <View style={[styles.row]}>
                    <TouchableOpacity style={[styles.part_left]}>
                        <Image style={styles.logo} source={{uri: 'avatar.png'}}></Image>
                    </TouchableOpacity>
                    <View style={[styles.part_right]}>
                        <TouchableOpacity>
                            <Text style={[styles.name_text]}>大西瓜</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={[styles.moments_text]}>就是这么任性!就是这么任性!就是这么任性!就是这么任性!</Text>
                        </TouchableOpacity>
                        <Text style={styles.moments_date}>昨天</Text>
                    </View>
                </View>
            </View>



        )
    }
})


var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        borderColor: '#ccc',
        borderBottomWidth: 1,
        marginTop:5,
    },
    part_left: {
        flex: 1,
    },
    part_right: {
        flex: 6,
        marginLeft:3,
    },
    logo: {
        width: 40,
        height: 40,
        marginLeft: 5,
    },
    name_text:
    {
        fontSize: 16,
        color: '#82CAFF',
    },
    moments_text:
    {
        fontSize: 15,
        marginTop:5,
    },
    moments_date:
    {
        fontSize: 12,
        marginTop:8,
        marginBottom:10,
        color: '#657383',
    }
})

module.exports = moments;