import { View,Modal, StyleSheet,Image, Alert ,Text, TouchableOpacity,SafeAreaView,ImageBackground,StatusBar } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native';
import React, { useState,Component,useEffect,useMemo } from 'react';
import { useFonts } from 'expo-font';
import { resetScores } from './ScoreUtility';


const Scores = () => {
  
  const [loaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    Barbie: require('../assets/fonts/Barbie.otf'),
  });
    const navigation = useNavigation();
    const route = useRoute();
    const { names,nameScores,out,selectedPlayer,players,timer} = route.params; 
    const [showContent, setShowContent] = useState(false);

    const handleButtonPress = (player) => {
      if(player===selectedPlayer){
      }
      setShowContent(true);
    };
    const GoHome = () => {
      Alert.alert(
        'Confirm',
        'Are you sure you want to go home?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Yes',
            onPress: () => {
              resetScores(names);
              navigation.navigate('category');
            },
          },
        ],
        { cancelable: false }
      );
    }
    const GoInstructions = () => {
      navigation.navigate('instructions',{names,players,timer});
    };


   
      if (!loaded) {
        return null;
      }

      let shouldShowAlert = true;

    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar hidden={true} />
          <View style={styles.HomeButton}>
            <TouchableOpacity onPress={GoHome}>
              <Image
                style={styles.Imagecontainer}
                source={require('../assets/icons/home.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.left}>
            <Text style={styles.title}>Players:</Text>
            {names.map((name, index) => (
              <Text key={index} style={styles.text}>
                {name}
                {name ==='Saja' && '  🐶'}
                {name === 'Abu sje2' && '  👑'}
                {name === 'Souad' && '  🦚'}
                {name === 'Alaa' && '  💩'}
              </Text>
            ))}
          </View>
          
          <View style={styles.right}>
            <Text style={styles.title}>Scores:</Text>
            {Object.entries(nameScores).map(([name, score]) => {
    // if (shouldShowAlert && !alertShown && score === 100) {
    //   setAlertShown(true);
    //   Alert.alert(
    //     'The winner is ',
    //     `${names[name]}`,
    //     [
    //       {
    //         text: 'Restart',
    //         onPress: () => {
    //           resetScores(names);
    //           navigation.navigate('category');
    //         },
    //         style: 'cancel',
    //       },
    //       {
    //         text: 'Continue',
            
    //       },
    //     ],
    //     { cancelable: false }
    //   );
      shouldShowAlert = false; 
    


    return (
      <Text key={name} style={styles.ScoreText}>
        {score >= 1000 ? ` ${score}  👑` : score >= 500 ? ` ${score}  ⭐` : ` ${score}`}
      </Text>
    );
  })}
      </View>
          <View style={styles.centeredContainer}>
            <TouchableOpacity style={styles.Continue} onPress={GoInstructions}>
              <Text style={styles.text}>Continue</Text>
            </TouchableOpacity>
            
          </View>
         
        
      
    </SafeAreaView>
    );
  };

  const styles =StyleSheet.create({
    safeArea: {
      flex: 1,
      },
      HomeButton:{
        alignItems:"center",
        justifyContent:"center",
        height:50,
        width:50,
        left:312,
        top:40,
        backgroundColor: 'lightgreen',
        borderRadius: 30,
      },
      Imagecontainer: {
        width: 40,
        height: 40,
      },
      left:{
        position: 'absolute',
        top: 150,
        left: 50,
      },
      right:{
        position: 'absolute',
        top: 150,
        right: 50,
      },
      ScoreText:{
        margin:10,
        marginLeft:35,
        fontSize:21,
        fontFamily:'RalewayThin',
      },
      text: {
        margin:10,
        fontSize:21,
        fontFamily:'RalewayThin',
      },
      centeredContainer: {
        top:370,
        position:'relative',
        justifyContent: 'center',
        alignItems: 'center',
      },
      Continue:{
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 15,
        marginTop:10,
      },
      
      title:{
        margin:10,
        fontSize:22,
        fontFamily:'Raleway',
      },
})

  
  export default Scores;