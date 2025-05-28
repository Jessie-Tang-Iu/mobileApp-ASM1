import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Navbar from '../components/navbar';
import Posts from './posts';

export default function App() {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/icon.png')} style={styles.logo} />

                <View style={styles.buttonLayout}>
                <TouchableOpacity style={styles.homeFeaturesFocus}><Text style={styles.featuresTextFocus}>For you</Text></TouchableOpacity>
                <TouchableOpacity style={styles.homeFeatures}><Text style={styles.featuresText}>Following</Text></TouchableOpacity>
                <TouchableOpacity style={styles.homeFeatures}><Text style={styles.featuresText}>Hashtag</Text></TouchableOpacity>
                </View>
            </View>

            <Posts />

            <Navbar />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'flex-start',
    paddingTop: 65,
  },
  header: {
    alignItems: 'center',
  },
  logo: {
    width: 55,
    height: 55,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  buttonLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  featuresTextFocus: {
    alignContent: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  featuresText: {
    alignContent: 'center',
    color: '#444',
    fontWeight: 'bold',
  },
  homeFeaturesFocus: {
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderBottomWidth: 0.5,
    borderBottomColor: '#fff',
  },
  homeFeatures: {
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderBottomWidth: 0.5,
    borderBottomColor: '#444',
  },
});
