import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Navbar from '../components/navbar';
import Post from '../components/post';
import Tab from '../components/tab';
import { constantStyles } from '../components/constants';


export default function Profile() {

    const userName = 'mainUser';
    const profilePic = require('../assets/icon.png');

    const userPosts = [
        {
        id: '0',
        time: null,
        content: "What's new?",
        picture: null,
        heart: null,
        comment: null,
        repost: null,
        send: null,
        },
        {
        id: '1',
        time: '1m',
        content: 'It seems to have a sunny day in Calgary! Love it',
        picture: null,
        heart: 16,
        comment: 2,
        repost: 3,
        send: 20,
        },
        {
        id: '2',
        time: '2h',
        content: 'What a lovely day in SAIT?!',
        picture: 'https://www.sait.ca/assets/image/cards/cards-600x400/cd-aldred-street-twilight-lights-600x400.jpg',
        heart: 6,
        comment: 0,
        repost: 0,
        send: 2,
        },
        {
        id: '3',
        time: '2h',
        content: 'That is why we call it Raincouver!',
        picture: null,
        heart: 9,
        comment: 4,
        repost: 15,
        send: 0,
        },
        {
        id: '4',
        time: '3h',
        content: 'Is there any photographers want to connect in Toronto? Meet up and build the community!!!',
        picture: null,
        heart: 44,
        comment: 6,
        repost: 5,
        send: 8,
        }]


    return (
    <View style={constantStyles.container}>
        
        // Status Bar
        <View style={constantStyles.header}>
            <View style={constantStyles.profileHeaderIcon}>
                <TouchableOpacity><Feather name="lock" style={constantStyles.headerIcon} /></TouchableOpacity>
                <View style={constantStyles.lastThree}>
                    <TouchableOpacity><Feather name="search" style={constantStyles.headerIcon} /></TouchableOpacity>
                    <TouchableOpacity><Feather name="bar-chart-2" style={constantStyles.headerIcon} /></TouchableOpacity>
                    <TouchableOpacity><Feather name="menu" style={constantStyles.headerIcon} /></TouchableOpacity>
                </View>
            </View>
        </View>

        // Profile Header
        <View style={{padding: 10}}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text style={styles.profileName}>Profile Name</Text>
              <Text style={styles.username}>@{userName}</Text>
            </View>
            <Image 
              source={profilePic} 
              style={styles.avatarTopRight} 
            />
          </View>

          {/* Bio */}
            <Text style={styles.bio}>Passionate photographer based in Calgary</Text>

          {/* Followers */}
          <View style={styles.followersRow}>
            <Image 
              source={profilePic} 
              style={styles.followerAvatar} 
            />
            <Image 
              source={profilePic} 
              style={styles.followerAvatar} 
            />
            <Text style={styles.followerText}>8 followers</Text>
          </View>

          {/* Buttons */}
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Edit profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Share profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Profile tabs */}
        <View style={constantStyles.buttonLayout}>
          <Tab label={'Threads'} isFocused={true} />
          <Tab label={'Replies'} isFocused={false} />
          <Tab label={'Media'} isFocused={false} />
          <Tab label={'Reposts'} isFocused={false} />
        </View>

        // User Posts Section
        <View style={{flex: 1}}>
          <FlatList
            data={userPosts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => 
              <Post
                userName={userName}
                profilePic={profilePic}
                time={item.time}
                content={item.content}
                picture={item.picture}
                heart={item.heart}
                comment={item.comment}
                repost={item.repost}
                send={item.send}
              />}
            contentContainerStyle={constantStyles.feed}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={constantStyles.hr} />}
          />
        </View>        

        <Navbar />

    </View>
    );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  username: {
    fontSize: 16,
    color: '#ccc',
    marginTop: 2,
  },
  avatarTopRight: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  bio: {
    color: '#ccc',
    marginTop: 12,
    marginBottom: 12,
  },
  followersRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  followerAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
  },
  followerText: {
    color: '#ccc',
    fontSize: 14,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    borderWidth: 1,
    borderColor: '#444',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
  },
});