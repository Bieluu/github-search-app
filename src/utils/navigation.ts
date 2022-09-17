import {createNavigationContainerRef} from '@react-navigation/native';
import {ROUTE} from '@typings/routeNames';

export type RootStackParamList = {
  [ROUTE.REPOSITORY_DETAILS_SCREEN]: undefined;
  [ROUTE.SEARCH_REPOSITORY_SCREEN]: undefined;
};

export const navigationRef = createNavigationContainerRef<RootStackParamList>();
