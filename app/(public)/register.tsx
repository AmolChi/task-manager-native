import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const register = () => {

  const router = useRouter();

  const handle = () => {
    router.navigate('/login/')
  }

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', gap: 26, paddingHorizontal: 25, top: 97 }}>
        <Text style={{ color: '#1F41BB', fontSize: 30, fontWeight: 'bold',textAlign:'center'}} >Create Account</Text>
        <Text style={{ fontSize: 18, textAlign: 'center' }}>Create an account to use all features provided by the app</Text>
      </View>
      <View style={{ top: 170, gap: 29 }}>
        <TextInput placeholder='Email' inputMode='email' style={styles.input} />
        <TextInput placeholder='Password' secureTextEntry={true} style={styles.input} />
        <TextInput placeholder='Confirm Password' secureTextEntry={true} style = {styles.input} />
      </View>
      <View style={{ top: 250, gap:30 }}>
        <TouchableOpacity style={{ width: 357, height: 60, backgroundColor: '#1F41BB', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 357, height: 41, justifyContent: 'center', alignItems: 'center' }} onPress={handle}>
          <Text style={{ fontWeight: '300' }}>Already have an Account?</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default register

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 357,
    padding: 20,
    backgroundColor: '#F1F4FF',
    borderRadius: 10
  }
})