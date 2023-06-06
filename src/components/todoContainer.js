import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {deleteTodo} from '../redux/todoSlice';

const TodoContainer = ({item}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textStyle}>{item?.id}</Text>
        <Text style={{...styles.textStyle, fontSize: 18}}>{item?.content}</Text>
      </View>
      <View style={styles.actionContainer}>
        <Button title="Edit" onPress={() => {}} />
        <Button
          title="Delete"
          onPress={() => {
            dispatch(
              deleteTodo({
                id: item?.id,
              }),
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 5,
    backgroundColor: '#D8D8D8',
    marginHorizontal: 10,
    marginVertical: 3,
    borderRadius: 13,
    paddingHorizontal: 10,
  },
  textStyle: {
    color: '#2F4F4F',
  },
  actionContainer: {
    flexDirection: 'row',
  },
});
export default TodoContainer;
