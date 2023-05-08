import data from './metal.json';
import Item from './Item';
import { FlatList } from 'react-native'

function BandsScreen() {
    return (
        <FlatList data={data}
        renderItem={({ item }) => {
            return <Item title={`${item.band_name}`} originCountry={item.origin} fansNumber={item.fans} formedYear={item.formed} splitYear={item.split} />
        }}
        keyExtractor={item => {
            return item.id
        }}
        />
    )
}

export default BandsScreen;