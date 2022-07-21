import React from 'react';
import { View,Text,TouchableOpacity,Alert } from 'react-native';
import styles from './Card.style';

const Card = (props)=>{
return(
    <View style={styles.container}>
        <View style={styles.body}>
            <Text style={styles.title}>{props.title}</Text>
            <Text stles={styles.text}>{props.text}</Text>
        </View>
        <TouchableOpacity style={styles.button_container} onPress={()=>Alert.alert("Beğendiğiniz için teşekkürler")}>
            <Text style={styles.button_title}> I LIKED</Text>
        </TouchableOpacity>
    </View>
);
};
export default Card;