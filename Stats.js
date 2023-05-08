import data from './metal.json';
import { View, Text, StyleSheet } from 'react-native';
internationalNumberFormat = new Intl.NumberFormat('en-US')

const getBandsTotal = (data) => {
    return data.length
}

const getFanTotal = (data) => {
    return data.reduce((acc, b) => acc + b.fans, 0)
}

const getCountryTotal = (data) => {
    const countries = data.map(b => b.origin)
    return new Set(countries).size
}

const getActiveBandsTotal = (data) => {
    const active = data.filter(b => b.split === '-')
    return active.length
}

const getSplitBandsTotal = (data) => {
    const split = data.filter(b => b.split === '-')
    return split.length
}

function StatsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Metal Stats</Text>
            <View style={styles.details}>
                <Text style={styles.label}>Count: </Text>
                <Text style={styles.number}>{getBandsTotal}</Text>
            </View>
            <View style={styles.details}>
                <Text style={styles.label}>Fans: </Text>
                <Text style={styles.number}>{internationalNumberFormat.format(getFanTotal(data) * 1000)}</Text>
            </View>
            <View style={styles.details}>
                <Text style={styles.label}>Countries: </Text>
                <Text style={styles.number}>{getCountryTotal(data)}</Text>
            </View>
            <View style={styles.details}>
                <Text style={styles.label}>Active: </Text>
                <Text style={styles.number}>{getActiveBandsTotal(data)}</Text>
            </View>
            <View style={styles.details}>
                <Text style={styles.label}>Split: </Text>
                <Text style={styles.number}>{getSplitBandsTotal(data)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: "100%",
        backgroundColor: "#111",
    },
    title: {
        marginBottom: 10,
        fontSize: 30,
        fontWeight: 'bold',
        color: "#fff",
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        color: "#fff",
    },
    number: {
        fontSize: 18,
        color: "#fff",
    },
    details: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: "#fff",
    }
});

export default StatsScreen;