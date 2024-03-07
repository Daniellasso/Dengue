import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./pages/Home/Home";
import Up from "./pages/Up/Up";
import Criandores from "./pages/Criadores/Criandores";
import Municipal from "./pages/Municipal/Municipal";
import Estadual from "./pages/Estadual/Estadual";
import Federal from "./pages/Federal/Federal";

import { Feather } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator screenOptions={{ title: " " }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: "Inicio",
          drawerIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          )
        }}
      />
      <Drawer.Screen
        name="Up"
        component={Up}
        options={{
          drawerLabel: "Dando Levantados",
          drawerIcon: ({ color, size }) => (
            <Feather name="database" size={size} color={color} />
          )
        }}
      />
      <Drawer.Screen
        name="Municipal"
        component={Municipal}
        options={{
          drawerLabel: "Municipal",
          drawerIcon: ({ color, size }) => (
            <Feather name="bookmark" size={size} color={color} />
          )
        }}
      />
      <Drawer.Screen
        name="Estadual"
        component={Estadual}
        options={{
          drawerLabel: "Estadual",
          drawerIcon: ({ color, size }) => (
            <Feather name="file-text" size={size} color={color} />
          )
        }}
      />
      <Drawer.Screen
        name="Federal"
        component={Federal}
        options={{
          drawerLabel: "Federal",
          drawerIcon: ({ color, size }) => (
            <Feather name="folder" size={size} color={color} />
          )
        }}
      />
      <Drawer.Screen
        name="Criandores"
        component={Criandores}
        options={{
          drawerLabel: "Criandores",
          drawerIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          )
        }}
      />
    </Drawer.Navigator>
  );
}
