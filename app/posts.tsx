import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';


export default function Posts() {

    const posts = [
        {
        id: '1',
        userName: 'user1',
        profilePic: require('../assets/icon.png'),
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
        userName: 'user2',
        profilePic: require('../assets/icon.png'),
        time: '1h',
        content: 'What a lovely day in Edmonton?!',
        picture: 'https://cityuniversity.ca/wp-content/uploads/2021/01/iStock-1136615456-1024x681.jpg',
        heart: 6,
        comment: 0,
        repost: 0,
        send: 2,
        },
        {
        id: '3',
        userName: 'user3',
        profilePic: require('../assets/icon.png'),
        time: '2h',
        content: 'That is why we call it Raincouver. Fuck the rain!!',
        picture: null,
        heart: 9,
        comment: 4,
        repost: 15,
        send: 0,
        },
        {
        id: '4',
        userName: 'user4',
        profilePic: require('../assets/icon.png'),
        time: '2h',
        content: 'Is there any photographers want to connect in Toronto? Meet up and build the community!!!',
        picture: null,
        heart: 44,
        comment: 6,
        repost: 5,
        send: 8,
        },
        {
        id: '5',
        userName: 'user2',
        profilePic: require('../assets/icon.png'),
        time: '1d',
        content: 'Yeah yeah',
        picture: null,
        heart: 0,
        comment: 0,
        repost: 0,
        send: 0,
        },
        {
        id: '6',
        userName: 'user3',
        profilePic: require('../assets/icon.png'),
        time: '3d',
        content: 'New to threads. Show me something interesting!!',
        picture: null,
        heart: 2,
        comment: 0,
        repost: 1,
        send: 0,
        },
        {
        id: '7',
        userName: 'user1',
        profilePic: require('../assets/icon.png'),
        time: '5d',
        content: 'hahahahahahahaha',
        picture: null,
        heart: 0,
        comment: 6,
        repost: 0,
        send: 0,
        },
    ];

    const Post = ({ post }: {post: any}) => {

        const user = posts.find(u => u.userName === post.userName);

        return (
            <View style={styles.postContainer}>
            
            <Image source={user?.profilePic} style={styles.profilePic} />
                
            <View style={{ flex: 1 }}>
                
                <View style={styles.postHeader}>
                <TouchableOpacity><Text style={styles.username}>{post.userName} </Text></TouchableOpacity>
                <Text style={styles.time}>{post.time}</Text>
                </View>
                
                <Text style={styles.content}>{post.content}</Text>

                {
                post.picture !== null && (
                    <Image source={{ uri: post.picture}} 
                    style={{ width: '100%', height: 200, marginTop: 10, borderRadius: 8,}} />
                )
                }
                
                <View style={styles.postActions}>
                <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
                    <Feather name="heart" size={18} color="#fff" />
                    {
                    post.heart !== 0 && (
                        <Text style={{ color: '#fff'}}> {post.heart}</Text>
                    )
                    }
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
                    <Feather name="message-circle" style={styles.iconMargin} />
                    {
                    post.comment !== 0 && (
                        <Text style={{ color: '#fff'}}> {post.comment}</Text>
                    )
                    }
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
                    <Feather name="repeat" style={styles.iconMargin} />
                    {
                    post.repost !== 0 && (
                        <Text style={{ color: '#fff'}}> {post.repost}</Text>
                    )
                    }
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
                    <Feather name="send" style={styles.iconMargin} />
                    {
                    post.send !== 0 && (
                        <Text style={{ color: '#fff'}}> {post.send}</Text>
                    )
                    }
                </TouchableOpacity>
                </View>
                
            </View>

            <TouchableOpacity><Feather name="more-horizontal" style={styles.iconMargin}></Feather></TouchableOpacity>
            
            </View>
        );
    };

    return (
        <View style={{ flex: 1}}>
        <FlatList
            data={posts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Post post={item} />}
            contentContainerStyle={styles.feed}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.hr} />}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    feed: {
        paddingHorizontal: 16,
    },
    postContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        gap: 10,
    },
    postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    postActions: {
        marginTop: 10,
        flexDirection: 'row',
        width: '65%',
    },
    profilePic: {
        width: 42,
        height: 42,
        borderRadius: 21,
    },
    username: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    },
    time: {
        color: '#444',
        fontSize: 12,
    },
    content: {
        color: '#fff',
        marginTop: 4,
        fontSize: 15,
        lineHeight: 20,
    },
    iconMargin: {
        fontSize: 18,
        color: '#fff',
    },
    hr: {
        height: 1,
        width: '100%',
        backgroundColor: '#444',
    },
});