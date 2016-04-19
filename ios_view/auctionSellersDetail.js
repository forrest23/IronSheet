/**
 * Created by fgmh on 16/4/1.
 * 代拍商家明细页面
 */
'use strict';
var React = require('react-native');
var Icon = require('react-native-vector-icons/FontAwesome')

var {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    ScrollView
} = React;

var auctionSellersDetail = React.createClass({
    render: function () {
        return (
            <ScrollView style={styles.container}>
                <Image style={styles.logo} source={{ uri: 'http://pic.yupoo.com/forrest071/FiyTsMB8/medium.jpg' }} />
                <View style={styles.height100} >
                    <Text style={[styles.name_text]}>上海代拍旗舰店</Text>
                    <View style={styles.button} >
                        <Icon.Button name="star" backgroundColor="#006030" size={12} >
                            <Text style={styles.badge}>金代拍</Text>
                        </Icon.Button>
                        <Text style={styles.info}>代拍 86次，成功率 80%，
                            <Text style={styles.red}>评价 4.82</Text>
                        </Text>
                    </View>
                    <Text style={[styles.info, styles.gray]}>三次代拍，必中！不成功不收费！专业值得信奈！</Text>
                </View>
                <View>
                    <View style={[styles.height50, styles.row, styles.part_left]}>
                        <View style={[styles.part_left]} >
                            <Text style={styles.judge}>客户评价<Text style={styles.judges}> 484评论</Text></Text>
                        </View>
                        <View style={[styles.part_right]}>
                            <Text style={[styles.red, styles.score]}>4.82</Text>
                            <View style={styles.star}>
                                <Icon name="star" size={15} color="#FF0000" />
                                <Icon name="star" size={15} color="#FF0000" />
                                <Icon name="star" size={15} color="#FF0000" />
                                <Icon name="star" size={15} color="#FF0000" />
                                <Icon name="star-half-empty" size={15} color="#FF0000" />
                            </View>
                        </View>
                    </View>
                    <View style={[styles.height50, styles.rowBorder]}>
                        <Text style={[styles.score, {marginLeft:5}]}>服务态度：4.88</Text>
                        <Text style={[styles.score, {marginLeft:5}]}>技术能力：4.85</Text>
                        <Text style={[styles.score, {marginLeft:5}]}>资金安全：4.82</Text>
                    </View>
                </View>
                <View style={{marginTop: 6, backgroundColor: '#ffffff'}}>
                    <View style={[styles.height50]}>
                        <Text style={[styles.judge]}>代拍规则</Text>
                    </View>
                    <View style={[styles.border,{marginBottom: 10}]}>
                        <Text style={[styles.score, styles.marLeft, styles.marRight]}>1、1212预交定金，马上就拍，拍中再付全款，平台保管，资金安全放心</Text>
                        <Text style={[styles.score, styles.marLeft, styles.marRight]}>2、预交定金，马上就拍，拍中再付全款，平台保管，资金安全放心</Text>
                        <Text style={[styles.score, styles.marLeft, styles.marRight]}>3、预交定金，马上就拍，拍中再付全款，平台保管，资金安全放心</Text>
                        <Text style={[styles.score, styles.marLeft, styles.marRight]}>4、预交定金，马上就拍，拍中再付全款，平台保管，资金安全放心</Text>
                        <Text style={[styles.score, styles.marLeft, styles.marRight]}>5、预交定金，马上就拍，拍中再付全款，平台保管，资金安全放心</Text>
                    </View>
                </View>

                <View style={[styles.row, { marginBottom: 15, justifyContent:'center',height:70}]}>
                   <View style={{marginTop:15}}>
                        <Icon.Button name="phone" backgroundColor="#53FF53">
                            立即咨询
                        </Icon.Button>
                    </View>
                    <View style={{marginLeft:15,marginTop:15}}>
                        <Icon.Button name="credit-card" backgroundColor="#FF2D2D">
                            立即购买
                        </Icon.Button>
                    </View>
                </View>
            </ScrollView>
        );
    },

    _onPress: function (title, url) {
        this.props.navigator.push({
            title: title,
            component: webView,
            passProps: { url: url },
        });
    }
});

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F0F0',
        flex: 1,
    },
    row: {
        marginTop: 6,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
    },
    border: {
        borderTopWidth: 1,
        borderColor: '#E0E0E0',
    },
    rowBorder: {
        borderTopWidth: 1,
        borderColor: '#E0E0E0',
        flexDirection: 'row',
    },
    part_left: {
        flex: 5,
    },
    part_right: {
        flex: 3,
        flexDirection: 'row'
    },
    height100: {
        height: 100,
        backgroundColor: '#ffffff',
    },
    height50: {
        height: 50,
        backgroundColor: '#ffffff',
    },
    marLeft: {
        marginLeft: 15,
    },
    marRight: {
        marginRight: 10,
    },
    logo: {
        height: 200,
    },
    badge: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    star: {
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 12
    },
    judge: {
        fontSize: 18,
        marginLeft: 10,
        marginTop: 15,
    },
    judges: {
        fontSize: 12,
        marginTop: 10,
    },
    score: {
        fontSize: 14,
        marginTop: 15,
    },
    red: {
        color: '#FF0000'
    },
    gray: {
        color: '#9D9D9D'
    },
    info: {
        marginTop: 8,
        marginLeft: 8,
    },
    button: {
        marginTop: 5,
        width: 72,
        height: 28,
        marginLeft: 10,
        flexDirection: 'row',
    },
    name_text: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 20,
        fontWeight: '600',
    },
});


module.exports = auctionSellersDetail;