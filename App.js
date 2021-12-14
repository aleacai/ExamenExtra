import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import QuotesProvider from './Context/Context';
import TopNavigator from './Navigations/TopNavigation';

export default function App() {
  return (
    <QuotesProvider>
      <NavigationContainer>
        <TopNavigator/>
      </NavigationContainer>
    </QuotesProvider>
  );
}