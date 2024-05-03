import {  View,Modal, StyleSheet,Image, TextInput,Text, TouchableOpacity,SafeAreaView,StatusBar,FlatList,KeyboardAvoidingView } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native';
import React, { useState,Component,useEffect } from 'react';
import {MaterialIcons} from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { resetScores } from './ScoreUtility';
import GoBackButton from '../components/BackB'


const Players = () => {
    const route = useRoute();
    const { players } = route.params;
    const [modalOpen,setModalOpen] = useState(false);
    const navigation = useNavigation();
    const [names, setNames] = useState([]); 
    const [inputName, setInputName] = useState('');
    // const [timer,setTimer] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [error,setError] = useState('');
    resetScores(names);
    
    const saveNames = async (names) => {
      try {
        await AsyncStorage.setItem('names', JSON.stringify(names));
      } catch (error) {
        console.log('Error saving names: ', error);
      }
    };

    const loadNames = async () => {
      try {
        const storedNames = await AsyncStorage.getItem('names');
        if (storedNames) {
          setNames(JSON.parse(storedNames));
        }
      } catch (error) {
        console.log('Error loading names: ', error);
      }
    };
    
    useEffect(() => {
      loadNames();
    }, []);

   
    
      const ShowField = () => {
        setModalOpen(true);
      };
      const handleAddName = () => {
        if (inputName.trim() !== '') {
          if (names.includes(inputName)) {
            setErrorMessage('Name already exists.'); 
          } else {
            const updatedNames = [...names, inputName];
            setNames(updatedNames);
            setInputName('');
            setErrorMessage('');
            saveNames(updatedNames);
          }
        }
        else{
          setErrorMessage('Please enter a valid name.'); 
        }
      };

      const handleInputChange = (text) => {
        const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);
        setInputName(capitalizedText);
      };

      // const handleTimer = (text) => {
      //   setErrorMessage('');
      // }
      
      const renderItem = ({ item,index }) => {
        const handleDelete = () => {
            const updatedNames = [...names];
            updatedNames.splice(index, 1);
            setNames(updatedNames);
            saveNames(updatedNames);
            saveNames(updatedNames);
          };
        return(
        <View style={styles.item}>
          <Text style={styles.itemText}>{item}</Text>
          <View style={styles.delete}>
            <TouchableOpacity  style={styles.deletecontainer} onPress={handleDelete}>
                <Image
                style={styles.deleteImagecontainer}
                source={require('../assets/images/delete.jpg')}
                />
      </TouchableOpacity>
      </View>
        </View>
        
        );
        };

        const Next = () => {
           if (names.length < 3) {
            alert('You should have at least 3 players');
          } else {
            navigation.navigate('instructions', { names, players });
          }
        };

    return (
        <SafeAreaView style={styles.safeArea}>
           <KeyboardAvoidingView
        style={{ flex: 1 }} 
        behavior="padding" 
      >
            <StatusBar hidden={true} />
           
     
            <Modal visible={modalOpen} animationType='Slide' >
                <SafeAreaView >
                    <MaterialIcons
                    name='close'
                    size={30}
                    style={styles.ModalToggle}
                    onPress={() => setModalOpen(false)}
                    />
                    <TextInput
                    onChangeText={handleInputChange}
                    value={inputName}
                    style={styles.input}
                    autoCapitalize="words"
                    />
                    <TouchableOpacity style={styles.button} onPress={handleAddName}>
                    <Text style={styles.buttonText}>Add </Text>
                    </TouchableOpacity>
                    {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
                </SafeAreaView>
            </Modal>
            
            <GoBackButton/>
      <View  style={styles.container2}>
      <FlatList
       data={names}
       keyExtractor={(item, index) => index.toString()}
       renderItem={renderItem}
       contentContainerStyle={styles.flatListContent}
       
      />
      
      </View>
      {/* <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleTimer}
          placeholder="Time in minutes"
          placeholderTextColor='grey'
          value={timer}
          style={ styles.input1}
          keyboardType="numeric"
          returnKeyType="done"
        />
       {error ? <Text style={styles.error}>{error}</Text> : null}
      </View> */}
            <View  style={styles.Viewcontainer}>
                <TouchableOpacity style={styles.container} onPress={ShowField}>
                    <Image style={styles.Imagecontainer}
                    source={require('../assets/images/plus.png')}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity  style={styles.next} onPress={Next}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
           
            </KeyboardAvoidingView>
        </SafeAreaView>
    );

}


const styles = StyleSheet.create({
    safeArea: {
    flex: 1,
    },
    Viewcontainer:{
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight:10,
    padding: 20,
    },
    container:{
    position:'relative',
    backgroundColor: 'green',
    paddingLeft:3,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    },
    deletecontainer:{
      position:"relative",
      paddingLeft:3,
      width: 50,
      height: 50,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      },
  Imagecontainer: {
    width: 30,
    height: 30,
    marginRight:3
  },
  deleteImagecontainer: {
    width: 37,
    height: 37,
    marginRight:3
  },
  button: {
    top:340,
    position: 'absolute',
    alignSelf: 'center',
    paddingVertical: 10,
    backgroundColor: 'green',
    paddingHorizontal: 20,
    borderRadius: 10,
    width: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    fontFamily:"Raleway",
  },
  input: {
    fontSize:20,
    height: 50,
    width:240,
    borderWidth: 2,
    borderRadius: 25,
    paddingHorizontal: 10,
    marginTop: 150,
    alignSelf: 'center',
    textAlign:'center',
  },
  input1: {
    fontSize:14,
    height: 35,
    width:150,
    borderWidth: 2,
    borderRadius: 25,
    paddingHorizontal: 10,
    marginTop:130,
    alignSelf: 'center',
    textAlign:'center',
  },
  inputContainer: {
    bottom:70,
    alignSelf:'center',
  },
  ModalToggle:{
    borderWidth:1,
    borderColor:'#f2f2f2',
    padding:10,
    borderRadius:10,
    alignSelf:'center',
    top:30,
  },
  itemContainer: {
    color:'black',
    backgroundColor:"black",
    padding: 10,
  },
  error:{
    color:'red',
    alignSelf: 'center',
    marginTop:20,
  },
  flatListContent: {
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#1e90ff',
    borderRadius: 15,
    padding: 12,
    marginVertical: 5,
    width:140,
    height:47,
  },
  itemText: {
    color:'white',
    fontSize: 18,
    fontFamily:"RalewayMed",
    textAlign: 'center',
    alignSelf:'center'
  },
  container2: {
    flex:1,
    padding: 16,
    marginTop: 10,
  },
  next:{
    alignSelf:'center',
    alignItems:'center',
    bottom:120,
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: 100,
  },
  delete:{
    alignItems:'center',
    left:120,
    marginVertical:-36,
  },
});

export default Players;