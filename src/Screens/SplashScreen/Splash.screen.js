import React, { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { COLORS } from "../../Utils/Colors";
import { useNavigation } from "@react-navigation/native";

const Splash = (props) => {
    
    useEffect(() => {
        const timer = setTimeout(() => {
          props.navigation.navigate("Home");
        }, 3000);
         return () => clearTimeout(timer);
      }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mood</Text>
      <ActivityIndicator
        color={COLORS.secondary}
        size="large" 
        style={{ marginVertical: 34 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    alignSelf: "center",
    color: COLORS.secondary,
  },
});

export default Splash;
