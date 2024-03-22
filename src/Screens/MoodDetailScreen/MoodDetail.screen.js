import React, { useEffect, useState} from "react";
import {View, Text, TextInput, StyleSheet,ActivityIndicator} from "react-native";
import {COLORS} from "../../Utils/Colors";
import { analyzeTextEmotion } from "../../Utils/Api";
import axios  from "axios";
import { useIsFocused } from "@react-navigation/native";
const MoodDetail=({route})=>{
    const {text}=route.params;
    const [emotionResult,setEmotionResult]=useState({});
    const [loading,setLoading]=useState(true);
    const isFocused = useIsFocused();

    useEffect(()=>{
        const fetchEmotionAnalysis=async ()=>{
            try {
                setLoading(true)
                const result=await analyzeTextEmotion(text);
// use console.log here
setEmotionResult(result);
            } catch (error) {
                console.error('Error analyzing text emotion:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchEmotionAnalysis();
    }, [text, isFocused])
  
    return (
        
        
        <View style={styles.container}>
        <Text style={styles.title}>YOUR MOOD TODAY</Text>
        {loading ? (
            <ActivityIndicator size="large" color={COLORS.primary} /> // Display loader when loading is true
        ) : (
            <View>
                <Text style={styles.title}>Happy {emotionResult.Happy * 100}%</Text>
                <Text style={styles.title}>Angry {emotionResult.Angry * 100}%</Text>
                <Text style={styles.title}>Fear {emotionResult.Fear * 100}%</Text>
                <Text style={styles.title}>Sad {emotionResult.Sad * 100}%</Text>
            </View>
        )}
    </View>
    )
 
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.secondary
    },
    title: {
        fontSize: 20,
        // size: 60, // Remove this line as 'size' is not a valid style property
        alignSelf: 'center',
        color: COLORS.primary
    }
});


export default MoodDetail;