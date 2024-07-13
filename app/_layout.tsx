import { persister, store } from "@/context/store";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {Slot, Stack, useRouter, useSegments} from 'expo-router'
import { useAppSelector } from "@/hooks/reduxHooks";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";


const InitialLayout = ()=>{

  const router = useRouter();
  const segments = useSegments();
  const activeUser = useAppSelector(state => state.reducer.activeUser)

  useEffect(()=>{
    const inAuthGroup = segments[0] === "(auth)"
    if(!activeUser && inAuthGroup){
      router.replace("/")
    }else if(activeUser && !inAuthGroup){
      router.replace("/(auth)/")
    }
  },[segments,activeUser])
  return <Slot/>
}

export default function RootLayout() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
          <StatusBar style="dark"/>
          <InitialLayout/>
      </PersistGate>
    </Provider>
  );
}
