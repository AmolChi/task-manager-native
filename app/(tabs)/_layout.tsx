import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen 
        name='index'
        options={{
            title:'',
            headerShown:false,
            tabBarIcon:({color,focused})=>(
                <TabBarIcon name={focused?'home':'home-outline'} color={color}/>
            )
        }}
        
        />
    </Tabs>
  )
}

export default _layout