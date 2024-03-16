import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity,TouchableWithoutFeedback,Keyboard,Alert } from 'react-native';
import { useState } from 'react';
import Header from './components/header';
import Form from './components/form';
import TodoItem from './components/todoitem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Mohammad', key: '1' },
    { text: 'rami', key: '2' },
    { text: 'sami', key: '3' },
    { text: 'yaser', key: '4' },
    { text: 'rrr', key: '5' },
    { text: 'Mohammad', key: '6' },
    { text: 'Mohammad', key: '7' },
    { text: 'Mohammad', key: '8' },
    { text: 'Mohammad', key: '9' },


  ]);
  const pressHandler = (key) => {
    setTodos((prevProple) => {
      return prevProple.filter(person => person.key != key);
    });
  }
  const addValue = (text) => {
    if(text.length > 3){
      setTodos((prevProple) => {
        return [
          {text:text,key:Math.random().toString()},
          ...prevProple
        ]
      });
    }else{
      Alert.alert('OOPS','Toddos must be more 3 char',[
        {text:'Understood',onPress:()=>console.log('Alert closed')}
      ])
    }
    
  }
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <Form addValue={addValue}/>
        <View style={styles.list}>
        <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}/>
        </View>
      </View>
      {/* <ScrollView>
    {
      people.map((item)=>{
        return (
          <View key={item.key}>
            <Text style={styles.item}> {item.name}</Text>
          </View>
        )
      })
    }
    </ScrollView> */}
    </View>
    </TouchableWithoutFeedback>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

});
