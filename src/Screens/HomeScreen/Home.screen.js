import React, { useState } from "react"; 
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {COLORS} from "../../Utils/Colors"
const Home = (props) => {
    const navigation=useNavigation();
    const [text, setText] = useState(''); 

    const onChangeText = (newText) => {
        setText(newText);
    };

    const handleCheckMood=()=>{
        props.navigation.navigate('MoodDetail', { text: text });

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello!</Text>
           
            <Text style={styles.title}>I will find your mood 😉</Text>

            <View style={{width: '90%', height: 200, backgroundColor: COLORS.secondary}}>
        <TextInput
          multiline={true}
          numberOfLines={10}
          placeholder="Write How You Feel Here "
          placeholderTextColor={COLORS.primary}
          textAlignVertical="top"
        />
      </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={handleCheckMood}>
                    <Text style={styles.buttonText}>Check Your Mood</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    title: {
        color: COLORS.secondary,
        fontSize: 20, 
        alignSelf: 'center',
        justifyContent: 'center'
    },
    input: {
        borderColor: 'white',
        borderWidth: 1,
        height: 200, 
        width: '80%', 
        marginTop: 20, 
        marginBottom:20,
        color:COLORS.secondary,
        borderRadius:5,
        paddingHorizontal:10
    },
    button: {
        backgroundColor: COLORS.secondary,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 20,
        borderRadius: 5
    },
    buttonText: {
        color: COLORS.primary,
        fontWeight: 'bold'
    }
});

export default Home;

