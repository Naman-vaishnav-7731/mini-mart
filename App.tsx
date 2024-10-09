import { FC } from "react";
import NavigationStack from "./src/navigations/NavigationStack";
import { StatusBar } from "react-native";
import React from "react";
import { PaperProvider } from 'react-native-paper';
import HomeBottomBar from "./src/components/HomeBottomBar";

const App: FC = () => {
  return (
    <PaperProvider>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <NavigationStack />
    </PaperProvider>

  )
}

export default App;
