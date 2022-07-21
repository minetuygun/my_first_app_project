import React from 'react';
import {View,Text, SafeAreaView,TouchableOpacity,StyleSheet} from 'react-native';
import Card from './components/Card';
function App() {
  
  return(
    <SafeAreaView style={styles.container}>
    
     
    

   <Card title="M. Voltaire" text="“Pek az insan başkalarının deneyimlerinden yararlanmayı bilecek kadar akıllıdır.”"/>
   <Card title="Johann Wolfgang von Goethe" text="“Siz kendinize inanın, başkaları da size inanacaktır.”"/>
   <Card title="Henry Ford" text="“Hayatta hiç hata yapmamış birisi zaten hiçbir işe başlamamış demektir.”"/>
   <Card title="Edwin Land" text="“Yaratıcılığın önemli bir unsuru, başarısız olmaktan korkmamaktır.” "/>
    </SafeAreaView>
  );
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#e0e0e0',
   
  },
 

});
export default App;