import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, FlatList } from 'react-native';
import Button from './components/button'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {

  const [toDoList, setToDoList] = useState([]);
  const [allToDoList, setAllToDoList] = useState([]);
  const [activeToDoList, setActiveToDoList] = useState([]);
  const [doneToDoList, setDoneToDoList] = useState([]);

  const [taskName, setTaskName] = useState('');
  const [active, setActive] = useState(false)


  // useEffect(()=> {setToDoList([])} ,[])

  /*  ----------------------- add task to TODO List------------------- */
  const AddTask = () => {
    setAllToDoList(
      [...allToDoList, {
        id: allToDoList.length,
        name: taskName,
        active: active

      }])
    setToDoList([...allToDoList])

    setTaskName("")


  }

  /*  ----------------------- Get TODO List by 3 btn ------------------- */
  const allBtn = () => {
    setToDoList([...allToDoList])

  }
  const activeBtn = () => {

    setActiveToDoList([...allToDoList.filter((task) => task.active === false)])
    setToDoList([...activeToDoList])
  }
  const doneBtn = () => {

    setDoneToDoList([...allToDoList.filter((task) => task.active === true)])
    setToDoList([...doneToDoList])
  }
  /*  ----------------------- CheckBox action  ------------------- */

  const changeActive = (taskName, taskId) => {

    let task = allToDoList.find((task) => {
      return task.name == taskName
    })

    // active ? setActive(false) : setActive(true)

    task.active ?
      setAllToDoList(
        allToDoList.map((task) =>

          task.id === taskId
            ? { ...task, active: false }
            : task
        ))

      :
      setAllToDoList(
        allToDoList.map((task) =>

          task.id === taskId
            ? { ...task, active: true }
            : task
        ))

    task.active ?
      setToDoList(
        toDoList.map((task) =>

          task.id === taskId
            ? { ...task, active: false }
            : task
        ))

      :
      setToDoList(
        toDoList.map((task) =>

          task.id === taskId
            ? { ...task, active: true }
            : task
        ))




    console.log(task);

  }

  /*  ----------------------- RenderItem for Flatlist  ------------------- */


  const Item = ({ taskName, itemActive, taskId }) => (
    <View style={styles.item}>
      {itemActive && <MaterialCommunityIcons style={itemActive ? styles.itemChildDone :styles.itemChild } name="checkbox-marked-outline" onPress={() => changeActive(taskName, taskId)} />}
      {!itemActive && <MaterialCommunityIcons style={itemActive ? styles.itemChildDone :styles.itemChild} name="checkbox-blank-outline" onPress={() => changeActive(taskName, taskId)} />}
      <Text style={itemActive ? styles.itemChildDone :styles.itemChild }>{taskName}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item taskName={item.name} itemActive={item.active} taskId={item.id} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput style={styles.txtInput} placeholder='Add a To-Do' value={taskName} onChangeText={name => setTaskName(name)}></TextInput>
        <Button BtnBorderRadius={50} width={50} height={50} bgColor='#c55f59' txtColor='#fff' btnName='+' onPress={() => AddTask()} ></Button>
      </View>

      <View style={styles.row} >
        <Button BtnBorderRadius={20} width={100} height={50} bgColor='#fff' txtColor='#282133' btnName='All' onPress={() => allBtn()}></Button>
        <Button BtnBorderRadius={20} width={100} height={50} bgColor='#fff' txtColor='#282133' btnName='Active' onPress={() => activeBtn()}></Button>
        <Button BtnBorderRadius={20} width={100} height={50} bgColor='#fff' txtColor='#282133' btnName='Done' onPress={() => doneBtn()}></Button>
      </View>

      <View style={styles.row} >
        <FlatList
          data={toDoList}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />

      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#282133",
    paddingHorizontal: 20
  },
  txtInput: {
    borderRadius: 15,
    height: 40,
    width: '70%',
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',


  },
  itemChild: {
    fontSize: 25,
    marginHorizontal: 5,
    color: "#fff"
  },
  itemChildDone :{
    fontSize: 25,
    marginHorizontal: 5,
    color: "#c55f59"  ,
    textDecorationLine : 'line-through'

  } ,

  saveArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
