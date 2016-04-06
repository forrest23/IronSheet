/**
 * Created by fgmh on 16/4/5.
 * 铁皮圈动态模板
 */
'use strict';
var React = require('react-native');
var Util =require('./util.js');
var Api =require('./api.js');

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

var moments = React.createClass({
    getInitialState: function(){
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
    componentDidMount: function(){
        this.fetchData(1);
    },
    cache: function(items){
        for (var i in items) {
            CACHE.push(items[i]);
        }
    },

    fetchData: function(page){
        console.log('loading page '+page+'...');
        if(this.state.loadingPage == page)
            return;

        this.setState({
            loaded: false,
            loadingPage: page,
        });

        //var node_id = this.props.data.id;
        var limit = 5;
        var offset = page;
        //if(node_id != NODE_ID){
        //    CACHE = [];
        //}

        console.log(Api.getMovieTop250(offset, limit));
        fetch(Api.getMovieTop250(offset, limit))
            .then((response) => {
                return response.json();
            })
            .catch((error) => {
                React.AlertIOS.alert(
                    'error',
                    '请求失败:'+error.message
                );
            })
            .then((responseData) => {
                if(!responseData.showapi_res_body){
                    this.setState({end: true});
                    return;
                }

                this.cache(responseData.showapi_res_body.newslist);


                console.log('loaded data, page'+page);

                if(responseData.error){
                    React.AlertIOS.alert(
                        'error',
                       '请求错误'
                    );
                }else{
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(CACHE),
                        loaded: true,
                        loading: false,
                        end: false,
                        currentPage: this.state.currentPage+1,
                    });
                }
            })
            .done();
    },



    render: function(){
        if(this.state.loadingPage == 1 && !this.state.loaded){
            return (
                <View style={styles.container}>
                    <ActivityIndicatorIOS color="#356DD0" style={{marginVertical: 30,marginBottom: 30}} />
                </View>
            );
        }
        return this.renderTopicList();
    },

    renderFooter: function() {
        if(this.state.loaded){
            return <View style={{marginVertical: 30}} ><Text></Text></View>;
        }
        return <ActivityIndicatorIOS color="#356DD0"  style={{marginVertical: 30,marginBottom: 30}} />;
    },

    _renderRow: function(row){
        return (
        <View>
            <View style={[styles.row]}>
                <TouchableOpacity style={[styles.part_left]}>
                    <Image style={styles.logo} source={{uri: 'avatar.png'}}></Image>
                </TouchableOpacity>
                <View style={[styles.part_right]}>
                    <TouchableOpacity>
                        <Text style={[styles.name_text]}>体育新闻</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={[styles.moments_text]}>{row.title}</Text>
                    </TouchableOpacity>

                    <View style={[styles.rowMessage]}>
                        <TouchableOpacity >
                            <Image style={[styles.messageImage]} source={{uri: row.picUrl}}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.rowMessage]}>
                        <Text style={[styles.moments_date,styles.part_left]}>{row.ctime}</Text>
                        <TouchableOpacity >
                            <Image style={[styles.message,styles.part_right]} source={{uri: 'message.png'}}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>

        );
    },

    onEndReached: function() {
        if(this.state.end || !this.state.loaded) {
            return;
        }
        else{
             this.fetchData(this.state.currentPage + 1);
        }
    },

    renderTopicList: function(){
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

    renderTopicListCell: function(data){
        return (
            <TopicListCell
                onSelect={
					() => this.selectTopic(data)
				}
                data={data} />
        );
    },
    selectTopic: function(data){
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
        //marginTop: 65,
        marginBottom: 0
    },
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        borderColor: '#ccc',
        borderBottomWidth: 1,
        marginTop:5,
    },
    rowMessage: {
        flexDirection: 'row',
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
    },
    message:
    {
        width: 24,
        height: 24,
    },
    messageImage:
    {
        width: 100,
        height: 139,
    },
    marBottom:
    {
        marginBottom:0,
    }
})

module.exports = moments;