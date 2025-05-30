import { View, FlatList } from 'react-native';
import Post from '../components/post';
import { constantStyles } from '../components/constants';

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

    return (
        <View style={{ flex: 1}}>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => 
                    <Post
                        userName={item.userName}
                        profilePic={item.profilePic}
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
    );
}