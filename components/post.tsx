import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { constantStyles } from './constants';



type PostProps = {
    userName: string;
    profilePic: any;
    time: string;
    content: string;
    picture?: any;
    heart: number;
    comment: number;
    repost: number;
    send: number;
};

export default function Post({userName, profilePic, time, content, picture, heart, comment, repost , send}: PostProps) {

    return (
        <View style={constantStyles.postContainer}>
        <Image source={profilePic} style={constantStyles.profilePic} />

        <View style={{flex: 1}}>

                <View style={constantStyles.postHeader}>
                    <TouchableOpacity>
                        <Text style={constantStyles.username}>{userName} </Text>
                    </TouchableOpacity>
                    <Text style={constantStyles.time}>{time}</Text>
                </View>

                <Text style={constantStyles.content}>{content}</Text>

                {picture != null && (
                    <Image source={{ uri: picture }}
                        style={{ width: '100%', height: 200, marginTop: 10, borderRadius: 8 }} />
                )}

                <View style={constantStyles.postActions}>

                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
                        <Feather name="heart" size={18} color="#fff" />
                        {heart !== 0 && (
                            <Text style={{ color: '#fff' }}> {heart}</Text>
                        )}
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
                        <Feather name="message-circle" style={constantStyles.iconMargin} />
                        {comment !== 0 && (
                            <Text style={{ color: '#fff' }}> {comment}</Text>
                        )}
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
                        <Feather name="repeat" style={constantStyles.iconMargin} />
                        {repost !== 0 && (
                            <Text style={{ color: '#fff' }}> {repost}</Text>
                        )}
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
                        <Feather name="send" style={constantStyles.iconMargin} />
                        {send !== 0 && (
                            <Text style={{ color: '#fff' }}> {send}</Text>
                        )}
                    </TouchableOpacity>

                </View>

            </View>

            <TouchableOpacity>
                <Feather name="more-horizontal" style={constantStyles.iconMargin} />
            </TouchableOpacity>

        </View>
    );

}