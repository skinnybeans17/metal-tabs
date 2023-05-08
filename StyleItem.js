import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
const StyleItem = ({ style }) => {
    internationalNumberFormat = new Intl.NumberFormat('en-US')

    return (
        <View>
            <SafeAreaView style={styles.container}>
                <Text style={styles.text}>{style}</Text>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginHorizontal: 16,
        marginVertical: 8,
        padding: 20
    },
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: "#111",
    },
    text: {
        color: "#fff",
        marginBottom: "5%",
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default StyleItem;