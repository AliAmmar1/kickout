import { View,Image, TouchableOpacity,StyleSheet} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const GoBackButton = ({ onPress }) => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack(); 
      };

    const handler = onPress ? onPress : handleGoBack;
    return (
    
    <TouchableOpacity style={styles.goBackButton} onPress={handler}>
        <Image
        style={styles.Imagecontainer}
        source={require('../assets/icons/chevron-left.png')}
        />
      </TouchableOpacity>
      
      );
};

const styles = StyleSheet.create({
    goBackButton: {
        alignItems:"center",
        justifyContent:"center",
        height:50,
        width:50,
        marginTop:50,
        marginLeft:15,
        backgroundColor: 'lightgreen',
        borderRadius: 30,
      },
      Imagecontainer: {
        width: 40,
        height: 40,
        marginRight:3
      },
});

export default GoBackButton;
