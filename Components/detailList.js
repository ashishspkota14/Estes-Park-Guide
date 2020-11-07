import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
const DetailList = props  => {
    <View style = {styles.detailList}>
<Text style={styles.textstyle}> {props.children}</Text>
    </View>
};
const styles = StyleSheet.create({
detailList:{
    marginVertical:10,
    marginHorizontal: 20,
    borderColor: Colors.darkGreen,
    borderWidth: 3,
    padding: 12
},
textstyle:{
    fontSize:14,
    fontFamily: 'raleway-blackItalic',
    color: Colors.violet,
    textAlign:'left'
}
});
export default DetailList;



//needs to be fixed