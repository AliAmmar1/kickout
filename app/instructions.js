import { View,Modal, StyleSheet,Image, Alert,Text, TouchableOpacity,SafeAreaView,StatusBar,FlatList } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native';
import React, { useState,Component,useEffect,useMemo } from 'react';
import GoBackButton from '../components/BackB'


const instructions= () => {
    
    const [index, setIndex] = useState(0);
    const [out,setOut] = useState(0);
    const [selectedPlayer,setSelectedPlayer] = useState('');
    const [showMessage1, setShowMessage1] = useState(true);
    const [showMessage3, setShowMessage3] = useState(false);
    const [showMessage4, setShowMessage4] = useState(false);
    const [showShowButton, setShowShowButton] = useState(true);
    const [showNextButton, setShowNextButton] = useState(false);

    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
      };
    const route = useRoute();
    const { names,players } = route.params;
    
    const navigation = useNavigation();
    
    const i = names.length;
    const j = players.length;
    // const [renderKey, setRenderKey] = useState(0);
    // useEffect(() => {
    //     setRenderKey(prevKey => prevKey + 1);
    // }, []);
    useEffect(()=>{
        setOut (Math.floor(Math.random() * (names.length)))
        setSelectedPlayer(players[Math.floor(Math.random()*(players.length))])
    },[])
    // const out = useMemo(() => getRandomNumber(0, i), []);
    // const selectedPlayer = useMemo(() => players[getRandomNumber(0, j)], []);
    // const name=names[index+1];
    const message1="Give the phone to "+names[index]+".\nPress Next to know if you're in or out.";
    const message3="You're in. The word is\n "+selectedPlayer+"\n Press Next.";
    const message4="You're out. Press Next.";
      
    
      const nextSentence = () => {
        setShowMessage1(false);
        setShowMessage3(false);
        setShowMessage4(false);
        setShowShowButton(false);
        setShowNextButton(true);
        if (index == out) {
            setShowMessage4(true);
          } else {
            setShowMessage3(true);
          }
          setIndex(index + 1);
         
      };
      const nextUser = () => {
        if(index<names.length){
        setShowMessage1(true);
        setShowMessage3(false);
        setShowMessage4(false);
        }
        else{
            navigation.navigate('questions',{names,out,selectedPlayer,players});
        }
        setShowShowButton(true); 
        setShowNextButton(false); 
      };
      
      const handleGoBack = () => {
        Alert.alert(
          'Confirm',
          'Are you sure you want to go back?\nScores will be reset.',
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'Yes',
              onPress: () => {
                navigation.goBack();
              },
            },
          ],
          { cancelable: false }
        );
      }
      

      return(
      <SafeAreaView style={styles.safeArea}>
        <StatusBar hidden={true} />
       <GoBackButton onPress={handleGoBack}/>
      <View style={styles.message}>
        {showMessage1 && <Text style={styles.question}>{message1}</Text>}

        {showMessage3 && <Text style={styles.question}>{message3}</Text>}

        {showMessage4 && <Text style={styles.question}>{message4}</Text>}
      </View>
            {showShowButton && (
                <TouchableOpacity style={styles.next} onPress={nextSentence}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            )}

            {showNextButton && (
                <TouchableOpacity style={styles.next} onPress={nextUser}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            )}
      </SafeAreaView >
      )
}
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        },
    Imagecontainer: {
        width: 40,
        height: 40,
        marginRight:3
      },
      
      buttonText: {
        color: 'white',
        fontSize: 20,
        fontFamily:'Raleway',
        alignSelf: 'center',
      },
      next:{
        alignSelf:'center',
        alignItems:'center',
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: 100,
        top:'30%',
      },
      message:{
        margin:5,
        alignItems:'center',
        alignItems:'center',
        justifyContent:'center',
        top:'10%',
      },
      text:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        color:'white'
      },
      show:{
        alignSelf:'center',
        alignItems:'center',
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: 100,
        top:200,
      },
      question:{
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'center',
        textAlign:'center',
        marginLeft:20,
        top:50,
        fontFamily:"Raleway",
        fontSize:26,
      },
      });

export default instructions;