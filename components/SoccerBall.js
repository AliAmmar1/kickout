import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const SoccerBall = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
          <View style={styles.container}>
            <View style={styles.circle} />
            <View style={[styles.hexagon, styles.hexagon1]} />
            <View style={[styles.hexagon, styles.hexagon2]} />
            <View style={[styles.hexagon, styles.hexagon3]} />
            <View style={[styles.hexagon, styles.hexagon4]} />
            <View style={[styles.hexagon, styles.hexagon5]} />
            <View style={[styles.hexagon, styles.hexagon6]} />
          </View>
        </TouchableOpacity>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      },
      circle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 5,
        borderColor: 'black',
      },
      hexagon: {
        position: 'absolute',
        width: 40,
        height: 40,
        backgroundColor: 'white',
      },
      hexagon1: {
        top: -20,
        left: 20,
        transform: [{ rotate: '30deg' }],
      },
      hexagon2: {
        top: -20,
        right: 20,
        transform: [{ rotate: '330deg' }],
      },
      hexagon3: {
        top: 0,
        left: 0,
        transform: [{ rotate: '90deg' }],
      },
      hexagon4: {
        bottom: -20,
        left: 20,
        transform: [{ rotate: '150deg' }],
      },
      hexagon5: {
        bottom: -20,
        right: 20,
        transform: [{ rotate: '210deg' }],
      },
      hexagon6: {
        bottom: 0,
        left: 0,
        transform: [{ rotate: '270deg' }],
      },
    });

export default SoccerBall;