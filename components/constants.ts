import { StyleSheet } from "react-native";

export const constantStyles = StyleSheet.create({
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
    feed: {
        paddingHorizontal: 16,
    },
    buttonLayout: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
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