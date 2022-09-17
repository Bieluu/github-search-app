import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTE} from '@typings/routeNames';
import SearchRepositoryScreen from '@containers/SearchRepositoryScreen';
import RepositoryDetailsScreen from '@containers/RepositoryDetailsScreen';
import {RepositoryApi} from '@typings/api/getGithubRepositoriesApi';

export type MainStackParamList = {
  [ROUTE.SEARCH_REPOSITORY_SCREEN]: undefined;
  [ROUTE.REPOSITORY_DETAILS_SCREEN]: {repository: RepositoryApi};
};

const Stack = createStackNavigator<MainStackParamList>();

const MainStack: React.FC = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false, gestureEnabled: false}}
    initialRouteName={ROUTE.SEARCH_REPOSITORY_SCREEN}>
    <Stack.Screen
      name={ROUTE.SEARCH_REPOSITORY_SCREEN}
      component={SearchRepositoryScreen}
    />
    <Stack.Screen
      name={ROUTE.REPOSITORY_DETAILS_SCREEN}
      component={RepositoryDetailsScreen}
    />
  </Stack.Navigator>
);

export default MainStack;
