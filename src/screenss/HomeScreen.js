import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import AddTodo from '../components/AddTodo';
import TodoContainer from '../components/todoContainer';

const HomeScreen = () => {
  const {todoList} = useSelector(state => state.todo);

  return (
    <SafeAreaView>
      <AddTodo />
      <FlatList
        style={{
          marginTop: 10,
        }}
        data={todoList}
        renderItem={({item}) => {
          return <TodoContainer item={item} />;
        }}
        ListEmptyComponent={() => {
          return (
            <View
              style={{
                alignItems: 'center',
              }}>
              <Text>No todo yet!</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
