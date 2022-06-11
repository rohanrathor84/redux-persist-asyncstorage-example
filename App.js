import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";

import RootNavigator from "./navigation/RootNavigator";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
      <StatusBar style="auto" />
    </Provider>
  );
}
