/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict';

var React = require('react-native');
var Icon = require('react-native-vector-icons/Ionicons');
var AddCircle = require('./ios_view/addCircle');

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
    componentWillMount: function () {
        Icon.getImageSource('ios-camera-outline', 30).then((source) => this.setState({ plusIcon: source }));
    },
    render: function () {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
            
             <Icon.TabBarItemIOS
                    title="首页"
                    iconName="ios-home-outline"
                    selectedIconName="ios-home"
                    selected={this.state.selectedTab === 'home'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'home'
                        });
                    } }>
                    <NavigatorIOS style={Style.container}
                        tintColor={'#333344'}
                        initialRoute={{
                            title: '最贵铁皮',
                            component: require('./ios_view/home')
                        }}
                        itemWrapperStyle={Style.navigator}/>
                </Icon.TabBarItemIOS>

                <TabBarIOS.Item accessibilityLabel={"Circle"}
                    selected={this.state.selectedTab === 'circle'}
                    title="铁皮圈"
                    name="circle"
                    icon={{ uri: 'nodes.png' }}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'circle'
                        });
                    } }>

                    <NavigatorIOS style={Style.container}
                        ref="nav"
                        tintColor={'#333344'}
                        initialRoute={{
                            title: '铁皮圈',
                            component: require('./ios_view/circle'),
                            rightButtonIcon: this.state.plusIcon,
                            onRightButtonPress: () => {
                                this.refs.nav.navigator.push({
                                    title: "",
                                    component: AddCircle,
                                    rightButtonTitle: '发送',
                                    onRightButtonPress: () => { this.refs.nav.navigator.pop(); }
                                });
                            }
                        }}
                        itemWrapperStyle={Style.navigator}/>

                </TabBarIOS.Item>

                <TabBarIOS.Item accessibilityLabel={"Auction"}
                    selected={this.state.selectedTab === 'auction'}
                    title="代拍"
                    name="auction"
                    icon={{ uri: 'reactnative_logo.png' }}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'auction'
                        });
                    } }>

                    <NavigatorIOS style={Style.container}
                        tintColor={'#333344'}
                        initialRoute={{
                            title: '代拍',
                            component: require('./ios_view/auction')
                        }}
                        itemWrapperStyle={Style.navigator}/>

                </TabBarIOS.Item>

                <Icon.TabBarItemIOS
                    title="我的"
                    iconName="ios-person-outline"
                    selectedIconName="ios-person"
                    selected={this.state.selectedTab === 'me'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'me'
                        });
                    } }>

                    <NavigatorIOS style={Style.container}
                        tintColor={'#333344'}
                        initialRoute={{
                            title: '我',
                            component: require('./ios_view/me')
                        }}
                        itemWrapperStyle={Style.navigator}/>

                </Icon.TabBarItemIOS>
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
