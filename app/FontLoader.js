import * as Font from 'expo-font';

export const loadFontsAsync = async () => {
  return Font.loadAsync({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    Barbie: require('../assets/fonts/Barbie.otf'),
    RobotoCondensed: require('../assets/fonts/Roboto-Condensed.ttf'),
    NunitoBold: require('../assets/fonts/Nunito-Bold.ttf'),
    LatoBold: require('../assets/fonts/Lato-Bold.ttf'),
    LatoHeavy: require('../assets/fonts/Lato-Heavy.ttf'),
    Raleway: require('../assets/fonts/Raleway-Bold.ttf'),
    RalewayThin: require('../assets/fonts/Raleway-Regular.ttf'),
    RalewayMed: require('../assets/fonts/Raleway-Medium.ttf'),
    Digital: require('../assets/fonts/digital.ttf'),
    DigitalB: require('../assets/fonts/digitalB.ttf'),
    dig: require('../assets/fonts/dig.ttf'),
  });
};