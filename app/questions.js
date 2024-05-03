import { View,Modal, StyleSheet,Image, TextInput,Text, TouchableOpacity,SafeAreaView,AppState ,StatusBar } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native';
import React, { useState,Component,useEffect,useMemo } from 'react';

const question = () => {
  const navigation = useNavigation();
    const route = useRoute();
    const { names, out,selectedPlayer,players,timer } = route.params;
    const [number1, setNumber1] = useState(null);
    const [number2, setNumber2] = useState(null);
    const [timers, setTimer] = useState(timer*60); 
    const [timerEnded, setTimerEnded] = useState(false);
    
    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     setTimer((prevTimer) => {
    //       if (prevTimer <= 0) {
    //         clearInterval(interval);
    //         setTimerEnded(true);
    //         return 0;
    //       } else {
    //         return prevTimer - 1;
    //       }
    //     });
    //   }, 1000);
  
    //   return () => clearInterval(interval);
    // }, []);

    // useEffect(() => {
    //   if (timerEnded) {
    //     ToVote();
    //   }
    // }, [timerEnded]);

    const generateRandomNumbers = () => {
      let num1 = Math.floor(Math.random() * names.length); 
      let num2 = Math.floor(Math.random() * names.length);

    while (num2 === num1) {
      num2 = Math.floor(Math.random() * names.length);
    }

    setNumber1(num1);
    setNumber2(num2);
  };
    

      const ToVote = () => {
        navigation.navigate('vote',{names,out,selectedPlayer,players});
      };
      const message1=names[number1]+" it's your turn.\nAsk "+names[number2]+" about the player.";
      const message2="Ask each other questions \nand press the Vote Button when you are ready to vote."

      
      return(
        
          <SafeAreaView style={styles.safeArea}>
            <StatusBar hidden={true} />
            
        <View>
        {/* <View style={styles.rectangle}>
          <View style={styles.clockContainer}>
        <Text style={{ ...styles.clockText, color: timers <= 30 ? 'red' : 'black' }}>{Math.floor(timers / 60).toString().padStart(2, '0')}:{(timers % 60).toString().padStart(2, '0')}</Text>
        </View>
        </View> */}
        {number1 !== null && number2 !== null ?(
        <Text style={styles.question}>{message1}</Text>
        ) : (
          <Text style={styles.question}>{message2}</Text>
        )}
        </View>
        <View style={styles.Viewcontainer}>
        {/* <View style={styles.timerContainer}>
          <Text style={styles.timerText}>
            {Math.floor(timers / 60).toString().padStart(2, '0')}:{(timers % 60).toString().padStart(2, '0')}
          </Text>
        </View> */}
      <TouchableOpacity onPress={generateRandomNumbers} style={styles.next}><Text style={styles.buttonText}>Next Question</Text></TouchableOpacity>
      <TouchableOpacity onPress={ToVote} style={styles.vote}><Text style={{ ...styles.buttonText, color:'black' }}>Vote</Text></TouchableOpacity>
    </View>
        
        </SafeAreaView>
      )
}

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
        },
    question:{
      textAlign: 'center',
      alignItems:'center',
      alignSelf:'center',
      justifyContent:'center',
      margin:20,
      top:100,
      fontSize:25,
      fontFamily:"Raleway",
        },
    Imagecontainer: {
        width: 40,
        height: 40,
        marginRight:3
      },
      Viewcontainer:{
        alignItems:'center',
        margin:5,
        },
      goBackButton: {
        alignItems:"center",
        justifyContent:"center",
        height:50,
        width:50,
        marginTop:30,
        marginLeft:10,
        backgroundColor: 'lightgreen',
        borderRadius: 30,
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        alignSelf: 'center',
        fontFamily:"Raleway",
      },
      next:{
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: 200,
        height:65,
        top:170,
      },
      vote:{
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'yellow',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        width: 100,
        height:60,
        top:240,
      },
      timerContainer: {
        backgroundColor: 'green',
        borderRadius: 100, 
        padding: 20,
        position: 'absolute',
        bottom: -340,
      },
    
      timerText: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Raleway',
      },
      clockContainer: {
        borderColor: 'black', 
        borderWidth: 1, 
        backgroundColor: '#f2f2f2',
        borderRadius:30,
        width:130,
        height:50,
        padding: 10,
        alignItems: 'center',
        alignSelf:'center',
        justifyContent: 'center',
      },
      clockText: {
        fontSize: 30,
        fontFamily:'DigitalB',
        color: 'black',
      },
      rectangle: {
        top:70,
        padding:2,
        borderColor: 'black', 
        borderWidth: 2, 
        borderRadius: 30, 
        width: 140, 
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });

export default question;