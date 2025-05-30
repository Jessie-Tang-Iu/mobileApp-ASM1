import { StyleSheet, Text, View, Image } from 'react-native';
import Navbar from '../components/navbar';
import Posts from './posts';
import Tab from '../components/tab';
import { constantStyles } from '../components/constants';

export default function App() {

    return (
        <View style={constantStyles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/icon.png')} style={styles.logo} />

                <View style={constantStyles.buttonLayout}>
                  <Tab label={"For you"} isFocused={true} />
                  <Tab label={"Following"} isFocused={false} />
                  <Tab label={"Hashtag"} isFocused={false} />
                </View>
            </View>

            <Posts />

            <Navbar />
        </View>
    );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
  },
  logo: {
    width: 55,
    height: 55,
    marginBottom: 20,
    resizeMode: 'contain',
  },
});
