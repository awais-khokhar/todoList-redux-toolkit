import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {addTodo} from '../redux/todoSlice';
import {useDispatch} from 'react-redux';

const AddTodo = () => {
  const [todoValue, setTodoValue] = useState();
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    todoValue && dispatch(addTodo({newContent: todoValue}));
    setTodoValue('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder="type something ... "
        value={todoValue}
        onChangeText={setTodoValue}
        autoCapitalize={'none'}
        autoCorrect={false}
        enablesReturnKeyAutomatically={true}
      />
      <Button title="Add" onPress={handleAddTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fee',
    justifyContent: 'space-between',
  },
  inputStyle: {
    flex: 1,
    padding: 5,
  },
});

export default AddTodo;
