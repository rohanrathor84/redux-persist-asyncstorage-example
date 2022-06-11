import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Import mock screens
import BooksList from "../screens/BooksList";
import BookmarksList from "../screens/BookmarksList";

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  const tabScreenOptions = {
    headerShown: false,
    tabBarActiveTintColor: "#FFFFFF",
    tabBarInactiveTintColor: "#2D3038",
    tabBarStyle: styles.barStyle,
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="BooksList"
        screenOptions={tabScreenOptions}
      >
        <Tab.Screen
          name="BooksList"
          component={BooksList}
          options={{
            tabBarLabel: "BooksList",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name={"view-dashboard"}
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="BookmarksList"
          component={BookmarksList}
          options={{
            tabBarLabel: "BookmarksList",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name={"bookmark-multiple-outline"}
                size={24}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: "#1E1B26",
    borderTopColor: "#bdbdbd",
    borderTopWidth: 1,
  },
});
