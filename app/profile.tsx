import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Navbar from '../components/navbar';

export default function Profile() {
    return (
    <View style={styles.container}>
        
        <View style={styles.header}>
            <View style={styles.profileHeaderIcon}>
            <TouchableOpacity><Feather name="lock" style={styles.headerIcon} /></TouchableOpacity>
            <View style={styles.lastThree}>
                <TouchableOpacity><Feather name="search" style={styles.headerIcon} /></TouchableOpacity>
                <TouchableOpacity><Feather name="bar-chart-2" style={styles.headerIcon} /></TouchableOpacity>
                <TouchableOpacity><Feather name="menu" style={styles.headerIcon} /></TouchableOpacity>
            </View>
            </View>
        </View>

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
    padding: 10,
  },
  profileHeaderIcon: {
    flexDirection: 'row',
  },
  headerIcon: {
    fontSize: 25,
    color: '#fff',
    marginVertical: 10,
    marginHorizontal: 5,
  },
  lastThree: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
});
