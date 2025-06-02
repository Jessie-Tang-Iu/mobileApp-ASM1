import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Navbar() {

    const router = useRouter();

    return (
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => router.push(`/`)}><Feather name="home" style={styles.tabButton}></Feather></TouchableOpacity>
            <TouchableOpacity><Feather name="search" style={styles.tabButton}></Feather></TouchableOpacity>
            <TouchableOpacity style={styles.plusBackgroundColor}><Feather name="plus" style={styles.tabButton}></Feather></TouchableOpacity>
            <TouchableOpacity><Feather name="heart" style={styles.tabButton}></Feather></TouchableOpacity>
            <TouchableOpacity onPress={() => router.push(`../profile`)}><Feather name="user" style={styles.tabButton}></Feather></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
  tabButton: {
    fontSize: 27,
    color: '#555',
    marginVertical: 10,
    marginHorizontal: 15,
  },
  plusBackgroundColor: {
    marginVertical: 5,
    marginHorizontal: 15,
    backgroundColor: '#222',
    borderRadius: 10,
  },
});
