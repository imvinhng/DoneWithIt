import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import colors from '../../config/colors';

function ItemPage(props) {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <View style={styles.closeIcon} />
                <View style={styles.deleteIcon} />
            </View>
            
            <Image 
                style={styles.image}
                source={require('../assets/chair.jpg')}></Image>
        </View>
    
    );
}


const styles = StyleSheet.create ({
    closeIcon: {
      backgroundColor: colors.primary,
      height: 50,
      width: 50,
    },
    deleteIcon: {
      backgroundColor: colors.secondary,
      height: 50,
      width: 50,
    },
    image: {
      height: "60%",
      width: "100%", 
      marginTop: "20%",
    },
    container: {
      flex: 1,
      backgroundColor: colors.black,
    },
    iconContainer: {
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "space-between",
      padding: 30,
      marginTop: 20, 
    }
})

export default ItemPage;