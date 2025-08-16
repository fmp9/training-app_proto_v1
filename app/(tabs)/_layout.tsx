import { Tabs } from "expo-router";
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabsLayout() {
    return <Tabs screenOptions={{tabBarActiveTintColor: "green"}}>
        <Tabs.Screen name="index" options={{
            title: "Home",
            tabBarIcon: ({color}) => ( <MaterialCommunityIcons name="home-variant-outline" size={24} color={color} />),}}/>
        <Tabs.Screen name="calendar" options={{
            title: "Kalender",
            tabBarIcon: ({color}) => ( <MaterialCommunityIcons name="calendar-month" size={24} color={color} />),}}/>

        <Tabs.Screen name="training" options={{
            title: "Training",
            tabBarIcon: ({color}) => ( <MaterialCommunityIcons name="arm-flex-outline" size={24} color={color} />),}}/>

        <Tabs.Screen name="profile" options={{
            title: "Profil",
            tabBarIcon: ({color}) => ( <MaterialCommunityIcons name="face-man" size={24} color={color} />),}}/>
    </Tabs>
}