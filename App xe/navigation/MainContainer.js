import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import TaiKhoanScreen from './screens/TaiKhoanScreen';
import GiohangScreen from './screens/GioHangScreen';
import DangtinScreen from './screens/DangtinScreen';
import GioiThieuScreen from './screens/GioiThieuScreen';


//Screen names
const homeName = "Trang chủ";
const gioithieuName = "Giới thiệu";
const dangtinName = "Đăng tin";
const taikhoanName = "Tài khoản";
const giohangName = "Giỏ hàng";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === gioithieuName) {
              iconName = focused ? 'alert-circle' : 'alert-circle-outline';

            } else if (rn === dangtinName) {
              iconName = focused ? 'add' : 'add-outline';

            } else if (rn === giohangName) {
              iconName = focused ? 'cart' : 'cart-outline';
              
            }else if (rn === taikhoanName) {
              iconName = focused ? 'people' : 'people-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: '#00CCFF',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { backgroundColor:'white',padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={gioithieuName} component={GioiThieuScreen} />
        <Tab.Screen name={dangtinName} component={DangtinScreen}/>
        <Tab.Screen name={giohangName} component={GiohangScreen}/>
        <Tab.Screen name={taikhoanName} component={TaiKhoanScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;