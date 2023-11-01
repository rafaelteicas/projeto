import React from 'react';

import {
  MaterialTopTabBarProps,
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';

import {AgentsScreen, MapsScreen, WeaponsScreen} from '@screens';

import {AppTopNavigatorComponent} from './components/AppTopNavigatorComponent';

const Tab = createMaterialTopTabNavigator();

export function AppTopNavigator() {
  function renderTabBar(props: MaterialTopTabBarProps) {
    return <AppTopNavigatorComponent {...props} />;
  }

  return (
    <Tab.Navigator tabBar={renderTabBar}>
      <Tab.Screen name="AGENTES" component={AgentsScreen} />
      <Tab.Screen name="MAPAS" component={MapsScreen} />
      <Tab.Screen name="ARMAS" component={WeaponsScreen} />
    </Tab.Navigator>
  );
}
