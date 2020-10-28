import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

/**Screems */
import { Login } from "../screems/Login";
import { Home } from "../screems/Home";
import { Product } from "../screems/Product";
import { Cart } from "../screems/Cart";

/**Pending */
import { Home as Products } from "../screems/Home";
import { Home as Search } from "../screems/Home";
import { Home as Profile } from "../screems/Home";

import { Header } from "../components/Header";

const Stack = createStackNavigator();

export const Routing = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ headerShown: false, headerTintColor: "#FFF" }}
        />
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            header: (props) => <Header {...props} />,
          }}
        />
        <Stack.Screen
          name='Product'
          component={Product}
          options={{
            header: (props) => <Header {...props} showBackButton />,
          }}
        />
        <Stack.Screen
          name='Cart'
          component={Cart}
          options={{
            header: (props) => <Header {...props} showBackButton goHome />,
          }}
        />
        <Stack.Screen
          name='Search'
          component={Search}
          options={{
            header: (props) => <Header {...props} showBackButton />,
          }}
        />
        <Stack.Screen
          name='Products'
          component={Products}
          options={{
            header: (props) => <Header {...props} />,
          }}
        />
        <Stack.Screen
          name='Profile'
          component={Profile}
          options={{
            header: (props) => <Header {...props} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
