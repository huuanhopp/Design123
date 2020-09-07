import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import FontAweSome from 'react-native-vector-icons/FontAwesome';


export default class Home4 extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>
              Dating
            </Text>
            <TouchableOpacity>
              <FontAweSome name="gear" size={30} />
            </TouchableOpacity>
          </View>
          <View style={styles.bellowheader}>
            <View
              style={{
                backgroundColor: 'rgba(192,192,192,0.6)',
                borderRadius: 20,
                marginRight: 10,
              }}>
              <TouchableOpacity style={styles.toucherBTN}>
                <FontAweSome name="gear" size={22} />
                <Text style={styles.txtsize}>Profile</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                backgroundColor: 'rgba(192,192,192,0.6)',
                borderRadius: 20,
                marginRight: 10,
              }}>
              <TouchableOpacity style={styles.toucherBTN}>
                <FontAweSome name="gear" size={22} />
                <Text style={styles.txtsize}>Liked You</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                backgroundColor: 'rgba(192,192,192,0.6)',
                borderRadius: 20,
              }}>
              <TouchableOpacity style={styles.toucherBTN}>
                <FontAweSome name="gear" size={22} />
                <Text style={styles.txtsize}>Matches</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{
                  uri:
                    'https://vanhienblog.info/wp-content/uploads/2019/02/anh-gai-xinh-dep-hot-girl-1-00-600x445.jpg',
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: 20,
                }}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 24, color: 'black'}}>
                  Vân, 24
                </Text>
                <Text>Trường Cao đẳng Sư Phạm Hà Nội</Text>
                <View style={styles.btnImage}>
                  <TouchableOpacity>
                    <FontAweSome
                      name="window-close"
                      size={55}
                      style={[{marginRight: 10}, styles.shadow]}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <FontAweSome
                      name="heart"
                      size={55}
                      style={{marginRight: 20}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.lineStyle} />
          <View style={styles.sugges}>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>
              Suggested Stories
            </Text>
            <View style={styles.history}>
              <View style={styles.item}>
                <Image
                  source={{
                    uri:
                      'https://vanhienblog.info/wp-content/uploads/2019/02/anh-gai-xinh-dep-hot-girl-1-00-600x445.jpg',
                  }}
                  style={{
                    borderRadius: 40,
                    height: 70,
                    width: 70,
                    borderColor: '#CC0099',
                    borderWidth: 2,
                  }}
                />
                <Text>Mai Anh</Text>
              </View>
              <View style={styles.item}>
                <Image
                  source={{
                    uri:
                      'https://vanhienblog.info/wp-content/uploads/2019/02/anh-gai-xinh-dep-hot-girl-1-00-600x445.jpg',
                  }}
                  style={{
                    borderRadius: 40,
                    height: 70,
                    width: 70,
                    borderColor: '#CC0099',
                    borderWidth: 2,
                  }}
                />
                <Text>Mai Anh</Text>
              </View>
              <View style={styles.item}>
                <Image
                  source={{
                    uri:
                      'https://vanhienblog.info/wp-content/uploads/2019/02/anh-gai-xinh-dep-hot-girl-1-00-600x445.jpg',
                  }}
                  style={{
                    borderRadius: 40,
                    height: 70,
                    width: 70,
                    borderColor: '#CC0099',
                    borderWidth: 2,
                  }}
                />
                <Text>Mai Anh</Text>
              </View>
              <View style={styles.item}>
                <Image
                  source={{
                    uri:
                      'https://vanhienblog.info/wp-content/uploads/2019/02/anh-gai-xinh-dep-hot-girl-1-00-600x445.jpg',
                  }}
                  style={{
                    borderRadius: 40,
                    height: 70,
                    width: 70,
                    borderColor: '#CC0099',
                    borderWidth: 2,
                  }}
                />
                <Text>Mai Anh</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    backgroundColor: 'white',
  },
  bellowheader: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  toucherBTN: {
    marginHorizontal: 10,
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtsize: {
    marginLeft: 7,
    fontSize: 18,
  },
  imageContainer: {
    height: 360,
    width: 360,
    display: 'flex',
    height: 440,
    marginTop: 30,
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 15,
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 8,
    // background color must be set
    backgroundColor: 'white', // invisible color
  },
  shadow: {
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
    // background color must be set
  },

  image: {
    height: 360,
    width: 360,
  },
  btnImage: {
    flexDirection: 'row',
    position: 'absolute',
    // left: 0,
    right: 0,
    bottom: 0,
    height: 130,
    padding: 20,
  },
  lineStyle: {
    borderWidth: 0.2,
    borderColor: 'black',
    margin: 10,
  },
  sugges: {
    display: 'flex',
    flexDirection: 'column',
  },
  history: {
    display: 'flex',
    flexDirection: 'row',
  },
  item: {
    marginTop: 15,
    display: 'flex',
    marginRight: 15,
    flexDirection: 'column',
    alignItems: 'center',
  },
});
