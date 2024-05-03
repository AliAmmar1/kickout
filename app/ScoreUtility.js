import AsyncStorage from '@react-native-async-storage/async-storage';

export const resetScores = async (names) => {
  const initialScores = Array(names.length).fill(0);
  try {
    await AsyncStorage.setItem('nameScores', JSON.stringify(initialScores));
  } catch (error) {
    console.error('Error resetting scores and AsyncStorage:', error);
  }
};