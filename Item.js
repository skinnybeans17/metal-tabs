import { View, Text, StyleSheet } from 'react-native';
const Item = ({ title, originCountry, fansNumber, formedYear, splitYear }) => {
    internationalNumberFormat = new Intl.NumberFormat('en-US')
    return (
        <View>
            <View style={styles.container}>
                <Text style={[(splitYear === '-') ? styles.titleNotSplit : styles.titleSplit]}>{title}</Text>
                <Text style={styles.origin}>{originCountry}</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.fans}>{internationalNumberFormat.format(fansNumber * 1000)}</Text>
                <Text style={styles.formed}>{formedYear}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginHorizontal: 16,
        marginVertical: 8,
        padding: 20,
    },
    titleSplit: {
        color: '#666',
        textDecorationLine: 'line-through',
        fontSize: 18,
    },
    titleNotSplit: {
        fontWeight: 'bold',
        fontSize: 18,
        color: "#fff"
    },
    origin: {
        fontSize: 18,
        color: '#777'
    },
    formed: {
        fontSize: 12,
        color: '#999'
    },
    fans: {
        fontSize: 12,
        color: '#999',
        marginBottom: "10%"
    },
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: "#111",
    }
})

export default Item;