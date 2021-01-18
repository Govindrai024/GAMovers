import React from 'react';
import Screen from './screen'

export const ProfileScreen = ({navigation}) => <Screen navigation={navigation} name="Profile" />
export const MessegeScreen = ({navigation}) => <Screen navigation={navigation} name="Messege" />
export const ActivityScreen = ({navigation}) => <Screen navigation={navigation} name="Activity" />
export const ListScreen = ({navigation}) => <Screen navigation={navigation} name="List" />
export const ReportScreen = ({navigation}) => <Screen navigation={navigation} name="Report" />
export const StatusScreen = ({navigation}) => <Screen navigation={navigation} name="Status" />
export const SignOutScreen = ({navigation}) => <Screen navigation={navigation} name="SignOut" />