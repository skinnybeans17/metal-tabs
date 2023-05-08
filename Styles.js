import data from './metal.json';
import { FlatList } from 'react-native'
import StyleItem from './StyleItem'

function StylesScreen() {
    let styles = []
    for (let i = 0; i < data.length; i += 1) {
        const band_styles = data[i].style.split(',')
        band_styles.forEach(style => {
            if (!styles.includes(style)) styles.push(style)
        })
    }

return (
    <FlatList
    data={styles}
    renderItem={({ item }) => {
        return <StyleItem style={item}/>
    }}
    keyExtractor={item => {
        return item.id
    }}
    />
    )
}

export default StylesScreen