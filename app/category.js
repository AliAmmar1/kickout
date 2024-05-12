import React,{useState,useEffect} from 'react';
import { View, StyleSheet,Image, Text, TouchableOpacity,SafeAreaView,ImageBackground,StatusBar,FlatList  } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native';
import GoBackButton from '../components/BackB';
import { ScrollView } from 'react-native-gesture-handler';

const Category = () => {

  const ActivePlayers = ["Lionel Messi","Jamie Vardy","Kepa","Marco Asensio","Declan Rice","Lukaku","Sterling","Busquets","Werner","Nunez","Eden Hazard","Casemiro","Ben White","Richarlison","Ali Hsn","Jorginho","Kim Min-jae","Ter Stegen","Garnacho","Lucas Paquetá","Federico Valverde","Vitor Roque","عمر السومة","Paulo Dybala","Lo Celso","Rodrygo","Erling Haaland","Ibrahima Konate","Rashford","Rüdiger","Araujo","Kante","Memphis Depay","Matthijs de Ligt","Joshua Kimmich","Yann Sommer","Lamine Yamal","Hakim Ziyech","Raphinha","Bruno Fernandes","Dembele","Mohammed Salah","Kounde","James Maddison","Carvajal","Donnarumma","Harry Kane","Ivan Rakitić","Hassan Chaito","Bellingham","Ansu Fati","Jeremy Doku","Cristian Romero","عبد الرزاق حمد الله","Dominik Szoboszlai","Alisson Becker","Jadon Sancho","Morata","Édouard Mendy","Upamecano","Thibaut Courtois","Kvaratskhelia","Jordan Henderson","Wataru Endo","Thiago Silva","Frenkie De Jong","Marcelo Brozović","Ramsdale","João Cancelo","Joe Gomez","Pepe","Rafael Leão","Camavinga","Neymar","Vinicius","Bernardo Silva","Leandro Trossard","Alphonso Davies","Kieran Trippier","Thiago Alcântara","Mbappe","Kevin Debruyne","Antony","Sergio Ramos", "Bukayo Saka","Robert Lewandowski","Pau Cubarsi","Gabriel Jesus","Kyle Walker","Ferran Torres","Luke Shaw","Riyad Mahrez","Lindelof","Marco Reus","Keylor Navas","Antoine Griezmann","Luis Suarez","Son Heung-min","Sadio Mané","Hugo LLoris",
  "Christensen","Toni Kroos","Firmino","Nicolás Otamendi","Wan-Bissaka","Lautaro Martínez","Chalobah","Fikayo Tomori","Kai Havertz","Ali Ammar","Reece James","David Alaba","Diogo Jota","David Raya","Marco Verratti","Marcos Alonso","Franck Kessié","Mahmud Lubene","Mason Mount","Abbes Sufan","Osimhen","Buffon","Gvardiol","Achraf Hakimi","Alexander Isak","Mateo Kovačić","Pedro","Ivan Perišić","Ángel Di María","Emerson Royal","Anthony Martial","Diogo Dalot","Alexander-Arnold","Gavi","Hassan Maatouk","Chilwell","Saliba","Van Dijk","Pedro Porro","Paul Pogba","De Gea","Phil Foden","James Rodríguez","Lisandro Martínez","Cristiano Ronaldo","Martin Ødegaard","Szczęsny","John Stones","Cuadrado","Fadel Hasan","Origi","Pulisic","Theo Hernández","Giroud","Tomiyasu","Éder Militão","Ferland Mendy","Zlatan Ibrahimović","Gündoğan","Ollie Watkins","Ederson","Jack Grealish","Cucurella","Karim Benzema","Raphaël Varane","Luka Modric","Marcelo","Pedri","Bonucci","Chiesa","Chiellini","Marquinhos","Emiliano Martínez","De Paul","Tchouaméni","Kingsley Coman","Thomas Müller","Cody Gakpo","Serge Gnabry","Leroy Sané","Mario Götze","Neuer","João Félix","Diego Costa","Rodri","Rúben Dias","André Onana","Enzo Fernández","Mike Maignan","Christopher Nkunku","Zinchenko","Mudryk","Rasmus Hojlund","Martinelli","Jordi Alba","Kulusevski","Nathan Ake","Julián Álvarez"];
  const retiredPlayers = [
    "Mesut Özil",
    "Diego Maradona",
    "Johan Cruyff",
    "Zinedine Zidane",
    "Ronaldinho",
    "Gerard Piqué",
    "Ronaldo (Brazilian)",
    "Cesc Fàbregas",
    "Gareth Bale",
    "Garrincha",
    "Gerd Muller",
    "Sergio Agüero",
    "Marco van Basten",
    "Pavel Nedved",
    "Paolo Maldini",
    "Raul",
    "Lev Yashin",
    "Alessandro Del Piero",
    "Xavi Hernandez",
    "Andres Iniesta",
    "Cafu",
    "Thierry Henry",
    "Rivaldo",
    "David Beckham",
    "Peter Schmeichel",
    "Didier Drogba",
    "Fernando Torres",
    "Gary Lineker",
    "Alessandro Nesta",
    "Paul Scholes",
    "Steven Gerrard",
    "Frank Lampard",
    "Ruud Gullit",
    "Luis Figo",
    "Carles Puyol",
    "Andrea Pirlo",
    "Kaká",
    "Clarence Seedorf",
    "Deco",
    "Iker Casillas",
    "Xabi Alonso",
    "Gonzalo Higuain",
    "Van Persie",
    "Petr Čech",
    "Samuel Eto'o",
    "David Villa",
    "Ronald Koeman",
    "Franck Ribery",
    "Wayne Rooney",
    "Philipp Lahm",
    "Francesco Totti",
    "Pep Guardiola",
    "Arjen Robben",
    "Javier Mascherano",
    "Fabio Cannavaro",
    "Bastian Schweinsteiger",
    "Yaya Touré",
  ];
  const Animals = ["Cat","Dog","Elephant","Donkey","Lion","Bear","Turtle","Rabbit","Polar bear","Horse","Crocodile","Fish","Fox","Goat","Monkey","Hamster","Koala","Zebra","Owl","Duck","Snake","Rat","Whale","Lizard","Deer","Giraffe","Bat","Wolf","Hen","Frog","Dolphin","Gorilla","Shark","Kangaroo","Mouse","Sloth","Sheep","Hedgehog","Camel","Penguin","Dinosaur","Jellyfish","Crab","Seal","Parrot","Squirrel","Eagle","Hawk","Ant","Cockroach","Fly","Butterfly","Racoon","Bee","Crab","Bull","Snail","Tiger","Bird","Pig"];
  const Spacetoon = ['¡Mucha Lucha!','Strawberry Shortcake','الدب المحبوب','ماوكلي','Doreamon','Hamtaro','Detective Conan','Pinky and the Brain','Dragon Ball','One Piece','القط الأسود','أبطال الديجيتال','موكا موكا','عهد الأصدقاء','روبوكون','القناص','سالي','ايميلي','Zoro','Naruto','أبطال الكرة','بابار فيل','النمر المقنع','القناع','بي بلايد','Offside','Shoot','الشبح','تاما والأصدقاء','Sandybell','المقاتل النبيل','هزيم الرعد','الحديقة السرية','Pokémon','Blazing Teens','Idaten Jump','ريمي','غيمة','أنا وأختي','أنا وأخواتي','أنا وأخي','Slam Dunk','ايروكا','أمل البطل','القط الأسود','ينبوع الأحلام','لخبوط','Garfield','يوغي يو','باباي','باتمان','سندباد','Power Rangers','Ben 10','Teletubbies','Tom and Jerry','سلاحف النينجا','Simba','محققو الحيوانات'];
  const AnimeCharacters = ['Midoriya','Bakugo','Uraraka','Todoroki','All Might','Toga','Dabi','Tomura Shigaraki','Kirishima','Itadori','Gojo','Nobara','Megumi','Sukuna','Shigeo Kageyama(Mob)','Arataka Reigen','Eren','Mikasa','Erwin','Levi','Hange','Jean','Armin','Reiner','Joseph Joestar','Jonathan Joestar','Josuke','Giorno Giovanna','Kujo Jotaro','Kujo Jolyne','Johnny Joestar','DIO','Bucciarati','Polnareff','Kakyoin','Iggy','Koichi','Okuyasu','Kishibe Rohan','Yoshikage Kira','Kaneki Ken','Yagami Light','L','Gintoki','Kagura','Shinpachi','Hijikata','Violet Evergarden','Killua','Gon','Kurapika','Hisoka','Leorio','Luffy','Zoro','Sanji','Nami','Usopp','Chopper','Robin','Franky','Brook','Blackbeard','WhiteBeard','Shanks','Big Mom','Doflamingo','Buggy the Clown','Kaido','Naruto','Sasuke','Sakura','Itachi','Rock Lee','Kakashi','Gaara','Goku','Vegeta','Gohan','Piccolo','Majin Buu','Frieza','Cell','Android 17','Android 18','Krillin','Broly','Trunks','Beerus','Denji','Ash','Lelouch','Shoyo Hinata','Tobio Kageyama','Kei Tsukishima','Daichi Sawamura','Yu Nishinoya','Kenma Kozume','Tōru Oikawa','Saitama','Genos','Tatsumaki','Saiki','Nendou','Kaidou Shun','Anya','Okabe Rintarou','Makise Kurisu','Shiina Mayuri','Totoro','Thorffin','Askeladd','Thorkell','Canute','Emma','Norman','Ray','Hikigaya, Hachiman','Guts','Griffith','Casca','Elric Edward','Rem','Ram','Megumin','Ichigo','Aizen','Urahara Kisuke','Zaraki Kenpachi','Makima']
  const AnimeShows = ['Attack on Titan','Death Note','Dragon Ball','One Piece','Bleach','Hunter x Hunter','Violet Evergarden','Vinland Saga','One Punch Man','Jujutsu Kaisen','Mob Psycho 100','Jojo\'s Bizzare Adventure','Gintama','Fire Force','The Seven Deadly Sins','Naruto','Chainsaw Man','Code Geass','Re:Zero','Steins;Gate','Fullmetal Alchemist','Kaguya-sama','Monster','Haikyuu!!','Cowboy Bebop','GTO','Made in Abyss','Your Lie in April','Gurren Lagann','Spy x Family','Berserk','Slam Dunk','The Promised Neverland','Demon Slayer','Nichijou','Saiki Kusuo','Running with the Wind','3-gatsu no Lion','Baccano!','Boku no Hero Academia','Evangelion','Parasite','Blue Lock','Ano Hana','Erased','Detective Conan','Dr. Stone','Hajime no Ippo','Bakuman','Barakamon','Golden Kamuy','Bungou Stray Dogs','InuYasha','Fate/stay night','Lycoris Recoil','No Game No Life','Doraemon','Digimon Adventure','Pokémon','K-On!!','Black Clover','Durarara!!','Kuroko no Basket','Overlord','Assasination Classroom','Classroom of the Elites','Clannad','Toradora!','Black Butler','Azumanga Daiou','Tokyo Revengers','Noragami','Beastars','Tokyo Ghoul','Sword Art Online','Angel Beats!','Fairy Tail','Gurren Lagann','KonoSuba','Oregairu','Food Wars!','Hellsing'];
  
  const navigation = useNavigation();

  const handleRetiredPlayersPress = () => {
    const players=retiredPlayers.slice();
    navigation.navigate('players',{players});
  };
  const handleActivePlayersPress = () => {
    const players=ActivePlayers.slice();
    navigation.navigate('players',{players});
  };
  const handleAnimalsPress = () => {
    const players=Animals.slice();
    navigation.navigate('players',{players});
  };
  const handleSpacetoonPress = () => {
    const players=Spacetoon.slice();
    navigation.navigate('players',{players});
  };
  const handleAnCharactersPress = () => {
    const players=AnimeCharacters.slice();
    navigation.navigate('players',{players});
  };
  const handleAnShowsPress = () => {
    const players=AnimeShows.slice();
    navigation.navigate('players',{players});
  };
  
  const data = [
    {
      key: 'goBackButton',
      component: <GoBackButton/>,
    },
    {
      key: 'active',
      imageSource: require('../assets/images/mahmud.png'),
      buttonText: 'Active Players',
      onPress: handleActivePlayersPress,
      style:styles.buttonImageIconStyle,
      button:'Add Items',
    },
    {
      key: 'retired',
      imageSource: require('../assets/images/mahmud2.png'),
      buttonText: 'Retired Players',
      onPress: handleRetiredPlayersPress,
      style:styles.buttonImageIconStyle2,
    },
    {
      key: 'animals',
      imageSource: require('../assets/images/abes.png'),
      buttonText: 'Animals',
      onPress: handleAnimalsPress,
      style:styles.buttonImageIconStyle3,
    },
    {
      key: 'spacetoon',
      imageSource: require('../assets/images/spacetoon.png'),
      buttonText: 'Spacetoon',
      onPress: handleSpacetoonPress,
      style:styles.buttonImageIconStyle4,
    },
    {
      key: 'animecharacters',
      imageSource: require('../assets/images/luffy.png'),
      buttonText: 'Anime Characters',
      onPress: handleAnCharactersPress,
      style:styles.buttonImageIconStyle5,
    },
    {
      key: 'animeshows',
      imageSource: require('../assets/images/onepiece.png'),
      buttonText: 'Anime Shows',
      onPress: handleAnShowsPress,
      style:styles.buttonImageIconStyle6,
    },
  ];

  const renderItem = ({ item }) => {
    if (item.key === 'goBackButton') {
      return item.component; 
    }

    return (
      <View>
      <TouchableOpacity style={styles.Centerbutton} onPress={item.onPress}>
        <Image source={item.imageSource} style={item.style} />
        <Text style={styles.buttonText} >{item.buttonText}</Text>
      </TouchableOpacity>
      {item.button && <TouchableOpacity style={styles.container}><Text style={styles.addbuttonText}>{item.button}</Text></TouchableOpacity> }
  </View>
    );
  };

  return (
    
    <SafeAreaView style={styles.safecontainer}>
      
      <StatusBar hidden={true} />
      <ImageBackground
        source={require('../assets/images/demo2.png')}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
       <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      data={data}
      renderItem={renderItem} 
      keyExtractor={(item) => item.key}
    />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    safecontainer:{
        flex: 1,
        backgroundColor:'black',
    },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Viewcontainer:{
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    },
  Centerbutton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 10,
  },
  buttonText: {
    top:10,
    color: 'black',
    fontSize: 20,
    fontFamily:"Raleway",
    alignSelf: 'center',
  },
  addbuttonText: {
    top:5,
    color: 'black',
    fontSize: 10,
    fontFamily:"Raleway",
    alignSelf: 'center',
  },
  Imagecontainer: {
    width: 40,
    height: 40,
    marginRight:3
  },
  buttonImageIconStyle: {
    padding: 10,
    alignSelf:'center',
    width:150,
    height:150,
  },
  buttonImageIconStyle2: {
    padding: 10,
    alignSelf:'center',
    width:150,
    height:150,
  },
  buttonImageIconStyle3: {
    padding: 10,
    alignSelf:'center',
    marginLeft:65,
    width:150,
    height:150,
  },
  buttonImageIconStyle4: {
    padding: 10,
    alignSelf:'center',
    width:150,
    height:95,
  },
  buttonImageIconStyle5: {
    padding: 10,
    alignSelf:'center',
    width:120,
    height:200,
  },
  buttonImageIconStyle6: {
    padding: 10,
    alignSelf:'center',
    width:250,
    height:90,
  }
});

export default Category;