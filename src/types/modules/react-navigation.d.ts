import {MainStackParamList} from '@routes/MainStack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainStackParamList {}
  }
}
