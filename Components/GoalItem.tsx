import React from 'react'
import { View , Text, StyleSheet, TouchableOpacity} from 'react-native'

type Props = {
    title:string;
    id:string;
    deleteGoal : (id:string) => void;
}

const GoalItem = ({title, id, deleteGoal}:Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={deleteGoal.bind(this, id)}>
        <View style={styles.listItem} >
            {/* <Text key={itemData.item.key}> {itemData.item.value} </Text> */}
            <Text>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default GoalItem

const styles = StyleSheet.create({
    listItem : {
        padding: 10,
        borderColor: 'black',
        backgroundColor:'#ccc',
        borderWidth:1,
        marginVertical:10
    }
})
