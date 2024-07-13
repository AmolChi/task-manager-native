import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const index = () => {

  const router = useRouter();

  const handleLoginClick = ()=>{
    router.replace("/login/")
  }

  const handleRegisterClick = ()=>{
    router.replace("/register/")
  }

  return (
    <View style={styles.container}>
      <View style={{height:'50%'}}>
        <Image source={require('../assets/images/portrait.png')} style={styles.image} />
      </View>
      <View style={{height:'30%', justifyContent:'center',alignItems:'center',gap:25}}>
        <Text style={styles.heading}>
          Manage Your Tasks Here
        </Text>
        <Text>
          Manage your daily tasks with a click
        </Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'center',gap:30}}>
        <TouchableOpacity 
        style={{ width: 160, height: 60, backgroundColor:'#1F41BB',borderRadius:10,justifyContent:'center',alignItems:'center'}}
        onPress={handleLoginClick}
        >
          <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 160, height: 60, justifyContent:'center', alignItems:'center'}}
          onPress={handleRegisterClick}
        >
          <Text style={{ fontSize: 20 ,fontWeight:'bold'}}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({

  container: {
    padding: 10,
    flex: 1
  },
  image: {
    width: 385,
    height: 368,
    margin: 'auto',
    top: 50,
  },
  heading: {
    color: '#1F41BB',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign:'center'
  }

})