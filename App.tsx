import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/pages/HomePage';
import ApplicationDetailPage from './src/pages/ApplicationDetailPage';
import NewApplicationPage from './src/pages/NewApplicationPage';
import StatsPage from './src/pages/StatsPage';
import JobSearch from './src/components/JobSearch';
import JobDetailPage from './src/pages/JobDetailPage';
import { ApplicationProvider } from './src/context/ApplicationContext';
import { Job } from './src/services/jobApi';

export type RootStackParamList = {
  Home: undefined;
  ApplicationDetail: { id: number };
  NewApplication: undefined;
  Stats: undefined;
  JobSearch: undefined;
  JobDetail: { job: Job };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <ApplicationProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomePage} options={{ title: 'CareerQuest' }} />
          <Stack.Screen name="ApplicationDetail" component={ApplicationDetailPage} options={{ title: 'Détails de la candidature' }} />
          <Stack.Screen name="NewApplication" component={NewApplicationPage} options={{ title: 'Nouvelle candidature' }} />
          <Stack.Screen name="Stats" component={StatsPage} options={{ title: 'Statistiques' }} />
          <Stack.Screen name="JobSearch" component={JobSearch} options={{ title: 'Recherche d\'emploi' }} />
          <Stack.Screen name="JobDetail" component={JobDetailPage} options={{ title: 'Détails de l\'offre' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}