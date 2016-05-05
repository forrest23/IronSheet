'use strict';
var React = require('react-native');
var Icon = require('react-native-vector-icons/Ionicons')
var ImagePickerManager = require('NativeModules').ImagePickerManager;


var {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    ScrollView
} = React;

let index = 0
var addCircle = React.createClass({
    getInitialState: function () {
        return {
            rows: [{ uri: 'http://pic.yupoo.com/forrest071/FvLKGK4y/thumb.jpg', isStatic: true }]
        };
    },

    _addImage(source) {
        this.state.rows.push(source)
        this.setState({ rows: this.state.rows })
    },

    openModal() {
        var options = {
            title: '图片', // specify null or empty string to remove the title
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '拍摄照片', // specify null or empty string to remove this button
            chooseFromLibraryButtonTitle: '选择照片', // specify null or empty string to remove this button
            cameraType: 'back', // 'front' or 'back'
            mediaType: 'photo', // 'photo' or 'video'
            videoQuality: 'high', // 'low', 'medium', or 'high'
            durationLimit: 10, // video recording max time in seconds
            maxWidth: 100, // photos only
            maxHeight: 100, // photos only
            aspectX: 2, // android only - aspectX:aspectY, the cropping image's ratio of width to height
            aspectY: 1, // android only - aspectX:aspectY, the cropping image's ratio of width to height
            quality: 0.2, // 0 to 1, photos only
            angle: 0, // android only, photos only
            allowsEditing: false, // Built in functionality to resize/reposition the image after selection
            noData: false, // photos only - disables the base64 `data` field from being generated (greatly improves performance on large photos)
            storageOptions: { // if this key is provided, the image will get saved in the documents directory on ios, and the pictures directory on android (rather than a temporary directory)
                skipBackup: true, // ios only - image will NOT be backed up to icloud
                path: 'images' // ios only - will save image at /Documents/images rather than the root
            }
        };

        /**
        * The first arg will be the options object for customization, the second is
        * your callback which sends object: response.
        *
        * See the README for info about the response
        */

        ImagePickerManager.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePickerManager Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                // You can display the image using either data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data, isStatic: true };

                // uri (on iOS)
                const source = { uri: response.uri.replace('file://', ''), isStatic: true };
                // uri (on android)
                // const source = { uri: response.uri, isStatic: true };

                // this.setState({
                //     avatarSource: source
                // });
                this._addImage(source);
            }
        });
    },

    render: function () {
        let rows = this.state.rows.map((r, i) => {
            return <TouchableOpacity onPress={() => this.openModal() }>
                <Image style={styles.circleImage}
                    source={r} >
                </Image>
            </TouchableOpacity>
        })

        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <TextInput style={styles.textInput}  placeholder="今天又没拍中？"
                        autoFocus={true} multiline={true} returnKeyType='done'/>
                    <View style={styles.imageContainer}>
                        { rows }
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <View>
                        <Icon.Button name="ios-location" backgroundColor="#ffffff" color="#808080"  size={26}
                            style={{ marginLeft: 10 }}>
                            <Text style={{ fontFamily: 'Arial', fontSize: 18, marginLeft: 10 }}>所在位置</Text>
                        </Icon.Button>
                    </View>
                    <View style={styles.row}>
                        <Icon.Button name="ios-eye" backgroundColor="#ffffff" color="#808080"  size={26}
                            style={{ marginLeft: 10 }}>
                            <Text style={{ fontFamily: 'Arial', fontSize: 18, marginLeft: 10 }}>谁可以看</Text>
                        </Icon.Button>
                    </View>
                </View>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60,
        backgroundColor: '#F0F0F0'
    },
    topContainer:
    {
        backgroundColor: '#ffffff',
        // height: 290,
    },
    bottomContainer:
    {
        marginTop: 20,
        backgroundColor: '#ffffff',
        height: 90,
    },
    textInput:
    {
        height: 100,
        paddingLeft: 10,
        paddingRight: 10, 
        fontSize: 18,
    },
    imageContainer:
    {
       flex :1,
       flexDirection:'row',
       flexWrap:'wrap',
       marginTop: 20,
       paddingLeft: 10,
       paddingRight: 10,
    },
    circleImage:
    {
        marginLeft: 10,
        marginTop:10,
        marginBottom:10,
        width: 70,
        height: 70,
    },
    row:
    {
        borderColor: '#ccc',
        borderTopWidth: 1,
        flex: 1,
        height: 45,
    },
});


module.exports = addCircle;