'use strict';
var React = require('react-native');
var Util = require('./common/util.js');
var Api = require('./common/api.js');
var AuctionSellersDetail = require('./auctionSellersDetail.js');

var {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    NavigatorIOS,
    ListView,
    ActivityIndicatorIOS
} = React

var CACHE = [];

var productList = React.createClass({
    getInitialState: function () {
        return {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
            loaded: false,
            loadingPage: 0,
            currentPage: 0,
            end: false,
        };
    },
    componentDidMount: function () {
        this.fetchData(1);
    },
    cache: function (items) {
        for (var i in items) {
            CACHE.push(items[i]);
        }
    },

    fetchData: function (page) {
        console.log('loading page ' + page + '...');
        if (this.state.loadingPage == page)
            return;

        this.setState({
            loaded: false,
            loadingPage: page,
        });

        var limit = 6;
        var offset = page;

        console.log(Api.getMovieTop250(offset, limit));
        fetch(Api.getMovieTop250(offset, limit))
            .then((response) => {
                return response.json();
            })
            .catch((error) => {
                React.AlertIOS.alert(
                    'error',
                    '请求失败:' + error.message
                );
            })
            .then((responseData) => {
                if (!responseData.showapi_res_body) {
                    this.setState({ end: true });
                    return;
                }

                this.cache(responseData.showapi_res_body.newslist);


                console.log('loaded data, page' + page);

                if (responseData.error) {
                    React.AlertIOS.alert(
                        'error',
                        '请求错误'
                    );
                } else {
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(CACHE),
                        loaded: true,
                        loading: false,
                        end: false,
                        currentPage: this.state.currentPage + 1,
                    });
                }
            })
            .done();
    },



    render: function () {
        if (this.state.loadingPage == 1 && !this.state.loaded) {
            return (
                <View style={styles.container}>
                    <ActivityIndicatorIOS color="#356DD0" style={{ marginVertical: 30, marginBottom: 30 }} />
                </View>
            );
        }
        return this.renderTopicList();
    },

    renderFooter: function () {
        if (this.state.loaded) {
            return <View style={{ marginVertical: 30 }} ><Text></Text></View>;
        }
        return <ActivityIndicatorIOS color="#356DD0"  style={{ marginVertical: 30, marginBottom: 30 }} />;
    },

    _renderRow: function (row) {
        return (
            <View>
                <View style={[styles.row]}>
                    <TouchableOpacity style={[styles.part_left]} onPress={() => this.showDetail(row) }>
                        <Image style={styles.messageImage} source={{ uri: row.picUrl }}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.part_right]} onPress={() => this.showDetail(row) }>
                        <Text style={[styles.name_text]}>小牛电动M1智能锂电踏板车青春版120公里续航白色</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.info_price]}>89元包邮</Text>
                            <Text style={[styles.info_oldPrice]}>120</Text>
                        </View>
                        <View style={{ flexDirection: 'row' ,justifyContent: 'space-between',marginTop:8}}>
                            <Text style={[styles.info_text]} >可货到付款</Text>
                            <Text style={[styles.info_text]} >214个评价</Text>
                            <Text style={[styles.info_text]} >京东></Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    },

    showDetail(row) {
        this.props.navigator.push({
            title: '商家明细',
            component: AuctionSellersDetail,
            passProps: {
                data: row
            }
        });
    },

    onEndReached: function () {

    },

    renderTopicList: function () {
        return (
            <ListView
                style={styles.listView}
                ref="listview"
                dataSource={this.state.dataSource}
                renderFooter={this.renderFooter}
                renderRow={this._renderRow}
                onEndReached={this.onEndReached}
                automaticallyAdjustContentInsets={false}
                showsVerticalScrollIndicator={false} />
        );
    },

    renderTopicListCell: function (data) {
        return (
            <TopicListCell
                onSelect={
                    () => this.selectTopic(data)
                }
                data={data} />
        );
    },
    selectTopic: function (data) {
        this.props.navigator.push({
            title: '详细' + (data.replies_count ? '（' + data.replies_count.toString() + '条回复）' : ''),
            component: TopicView,
            passProps: {
                data: data
            }
        });
    },
})


var styles = StyleSheet.create({
    listView: {
        marginBottom: 0
    },
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        borderColor: '#ccc',
        borderBottomWidth: 1,
        marginTop: 10,
        height: 110,
    },
    rowMessage: {
        flexDirection: 'row',
        marginTop: 5,
    },
    part_left: {
        flex: 3,
        marginLeft: 8,
    },
    part_right: {
        flex: 5,
        marginLeft: 0,
        marginRight: 5,
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
    info_text:
    {
        fontSize: 12,
        color: '#000000',
        marginTop: 5,
    },
    info_price:
    {
        fontSize: 16,
        color: '#FF2D2D',
        marginTop: 8,
    },
    info_oldPrice:
    {
        fontSize: 14,
        color: '#C0C0C0',
        marginTop: 8,
        marginLeft: 15,
        textDecorationLine: 'line-through',
    },
    moments_text:
    {
        fontSize: 15,
        marginTop: 5,
    },
    moments_date:
    {
        fontSize: 12,
        marginTop: 8,
        marginBottom: 10,
        color: '#657383',
    },
    message:
    {
        width: 24,
        height: 24,
    },
    messageImage:
    {
        width: 110,
        height: 100,
    },
    marBottom:
    {
        marginBottom: 0,
    }
})

module.exports = productList;