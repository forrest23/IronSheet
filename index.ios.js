/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    NavigatorIOS,
    } = React;

var IronSheet = React.createClass({
    getInitialState: function () {
        return {
            selectedTab: 'home'
        };
    },
    render: function () {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item accessibilityLabel={"Home"}
                                selected={this.state.selectedTab === 'home'}
                                title="首页"
                                name="home"
                                icon={{uri: 'icon.png', isStatic: true}}
                                onPress={() => {
                    this.setState({
                      selectedTab: 'home'
                    });
                }}>
                    <NavigatorIOS style={Style.container}
                                  tintColor={'#333344'}
                                  initialRoute={{
                      title: '最贵铁皮',
                      component: require('./ios_view/home')
                    }}
                                  itemWrapperStyle={Style.navigator}/>
                </TabBarIOS.Item>

                <TabBarIOS.Item accessibilityLabel={"Circle"}
                                selected={this.state.selectedTab === 'circle'}
                                title="铁皮圈"
                                name="circle"
                                icon={{uri:'nodes.png'}}
                                onPress={() => {
                    this.setState({
                      selectedTab: 'circle'
                    });
                }}>

                    <NavigatorIOS style={Style.container}
                                  tintColor={'#333344'}
                                  initialRoute={{
                      title: '铁皮圈',
                      component: require('./ios_view/circle')
                    }}
                                  itemWrapperStyle={Style.navigator}/>

                </TabBarIOS.Item>

                <TabBarIOS.Item accessibilityLabel={"Auction"}
                                selected={this.state.selectedTab === 'auction'}
                                title="代拍"
                                name="auction"
                                icon={{uri: 'reactnative_logo.png'}}
                                onPress={() => {
                    this.setState({
                      selectedTab: 'auction'
                    });
                }}>

                    <NavigatorIOS style={Style.container}
                                  tintColor={'#333344'}
                                  initialRoute={{
                      title: '代拍',
                      component: require('./ios_view/auction')
                    }}
                                  itemWrapperStyle={Style.navigator}/>

                </TabBarIOS.Item>

                <TabBarIOS.Item accessibilityLabel={"Me"}
                                selected={this.state.selectedTab === 'me'}
                                title="我"
                                name="me"
                                icon={{uri: 'reactnative_logo.png'}}
                                onPress={() => {
                    this.setState({
                      selectedTab: 'me'
                    });
                }}>

                    <NavigatorIOS style={Style.container}
                                  tintColor={'#333344'}
                                  initialRoute={{
                      title: '我',
                      component: require('./ios_view/me')
                    }}
                                  itemWrapperStyle={Style.navigator}/>

                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
});

var Style = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#E7EAEC'
    },
    navigator: {
        //backgroundColor: '#E7EAEC'
    }
});


AppRegistry.registerComponent('IronSheet', () => IronSheet);
