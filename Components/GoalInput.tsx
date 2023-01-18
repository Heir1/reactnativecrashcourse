import React, {useState} from 'react'
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native'

type Props = {
    addGoal : (enteredGoal: string) => void;
    cancelAddGoal : () => void;
    visible : boolean;
}

const GoalInput = ( {addGoal, cancelAddGoal, visible} : Props) => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText:string) => {
      setEnteredGoal(enteredText)
    }

    const addGoal1 = () => {
        addGoal(enteredGoal)
        setEnteredGoal("");
    }

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder='Course Goal' 
                    style={styles.input} 
                    onChangeText={goalInputHandler} 
                    value={enteredGoal} 
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='CANCEL' color="red" onPress={cancelAddGoal} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoal1}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer : {
        flex:1,
        justifyContent:'center', 
        alignItems:'center'
    },
    input : { 
        width:'80%', 
        borderBottomColor:'black', 
        borderBottomWidth:1, 
        marginBottom:20 
    },
    buttonContainer : {
        flexDirection:'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    button : {
        width: '40%'
    }
})
