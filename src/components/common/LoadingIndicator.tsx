import React from 'react';
import {ActivityIndicator, Dimensions, StyleSheet, View} from 'react-native';
import {theme} from '@typings/theme';

const {height, width} = Dimensions.get('screen');

export const LoadingIndicator: React.FC = () => {
  return (
    <View style={loadingIndicatorStyles.wrapper}>
      <ActivityIndicator
        size={'large'}
        color={theme.colors.inputBorderFocused}
      />
    </View>
  );
};

const loadingIndicatorStyles = StyleSheet.create({
  wrapper: {
    height,
    width,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 9999,
  },
});
