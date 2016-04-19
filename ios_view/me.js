/**
 * Created by fgmh on 16/3/31.
 */
/**
 * Created by fgmh on 16/3/31.
 */
'use strict';
var React = require('react-native');
var about = require('./about.js');
var Modal = require('react-native-modal');


var {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    NavigatorIOS
} = React;

var me = React.createClass({
    getInitialState: function () {
        return { isModalOpen: false };
    },

    openModal() {
        this.setState({ isModalOpen: true });
    },

    closeModal() {
        this.setState({ isModalOpen: false });
    },

    _addNavigator: function (component, title) {
        this.props.navigator.push({
            component: component,
            title: title
        });
    },

    render: function () {
        return (
            <ScrollView style={[styles.container]}>
                <View style={[styles.row, styles.height100]}>
                    <TouchableOpacity style={[styles.part_left, styles.height100]} onPress={() => this.openModal() }>
                        <Image style={styles.logo} source={{ uri: 'avatar.png' }}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.part_right, styles.height100]}>
                        <Text style={[styles.name_text]}>forrest23</Text>
                        <Text style={[styles.wxh_text]}>微信号：forrest23</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.marTop10]}>
                    <TouchableOpacity style={[styles.row, styles.height50]}>
                        <View style={{ flex: 1 }}>
                            <Image style={[styles.logo2]} source={{ uri: 'icon.png' }}></Image>
                        </View>
                        <View style={{ flex: 6 }}>
                            <Text style={[styles.rowText]}>我的代拍</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Image style={[styles.logo3]} source={{ uri: 'left_liebiao.png' }}></Image>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.row, styles.height50]}>
                        <View style={{ flex: 1 }}>
                            <Image style={[styles.logo2]} source={{ uri: 'icon.png' }}></Image>
                        </View>
                        <View style={{ flex: 6 }}>
                            <Text style={[styles.rowText]}>我的消息</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Image style={[styles.logo3]} source={{ uri: 'left_liebiao.png' }}></Image>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.row, styles.height50]}>
                        <View style={{ flex: 1 }}>
                            <Image style={[styles.logo2]} source={{ uri: 'icon.png' }}></Image>
                        </View>
                        <View style={{ flex: 6 }}>
                            <Text style={[styles.rowText]}>设置</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Image style={[styles.logo3]} source={{ uri: 'left_liebiao.png' }}></Image>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.row, styles.height50]}>
                        <View style={{ flex: 1 }}>
                            <Image style={[styles.logo2]} source={{ uri: 'icon.png' }}></Image>
                        </View>
                        <View style={{ flex: 6 }}>
                            <Text style={[styles.rowText]}>检查更新</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Image style={[styles.logo3]} source={{ uri: 'left_liebiao.png' }}></Image>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.row, styles.height50]}
                        onPress={() => this._addNavigator(about, "关于") }>
                        <View style={{ flex: 1 }}>
                            <Image style={[styles.logo2]} source={{ uri: 'icon.png' }}></Image>
                        </View>
                        <View style={{ flex: 6 }}>
                            <Text style={[styles.rowText]}>关于</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Image style={[styles.logo3]} source={{ uri: 'left_liebiao.png' }}></Image>
                        </View>
                    </TouchableOpacity>
                </View>

                <Modal backdropType="blur"  backdropBlur="dark" hideCloseButton={true}  isVisible={this.state.isModalOpen} onClose={() => this.closeModal() }>
                    <Text>Hello world!</Text>
                    <Text>Hello world!</Text>
                    <Text>Hello world!</Text>
                    <Text>Hello world!</Text>
                    <Text>Hello world!</Text>
                    <Text>Hello world!</Text>
                    <Text>Hello world!</Text>
                    <Text>Hello world!</Text>
                    <Text>Hello world!</Text>
                    <View style={[styles.marTop10, { alignItems: 'center' }]}>
                        <View style={styles.btn}>
                            <Text onPress={() => this.closeModal() } style={styles.btn_text}>关闭</Text>
                        </View>
                    </View>
                </Modal>

            </ScrollView>
        );
    },
});


var styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F0F0',
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
    },
    part_left: {
        flex: 1,
    },
    part_right: {
        flex: 2,
    },
    height50: {
        height: 40,
        borderColor: '#ccc',
        borderBottomWidth: 1,
        flex: 1,
    },
    height100: {
        height: 100,
    },
    height500: {
        height: 500,
    },
    logo: {
        width: 80,
        height: 80,
        resizeMode: Image.resizeMode.contain,
        marginLeft: 15,
        marginTop: 10,
    },
    logo2: {
        width: 20,
        height: 20,
        marginLeft: 15,
        marginTop: 10,
    },
    logo3: {
        width: 9,
        height: 17,
        marginLeft: 25,
        marginTop: 10,
    },
    name_text: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: '600',
    },
    wxh_text: {
        marginTop: 6,
        fontSize: 14,
    },
    marTop: {
        marginTop: 6,
    },
    padTop: {
        paddingTop: 10,
    },
    marTop10: {
        marginTop: 10,
    },
    rowText: {
        fontSize: 16,
        paddingTop: 12,
    }
});


module.exports = me;