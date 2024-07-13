import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { removeActiveUser } from '@/context/user/userSlice';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const activeUser = useAppSelector(state => state.reducer.activeUser);
  const logout = ()=>{
    dispatch(removeActiveUser())
  }
  return (
    <View>
      <Text>HomePage</Text>
      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({})