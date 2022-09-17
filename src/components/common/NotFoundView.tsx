import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NotFoundIcon from '@components/icons/NotFoundIcon';

interface NotFoundViewProps {
  query: string;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({query}) => {
  return (
    <View style={notFoundViewStyles.wrapper}>
      <Text style={notFoundViewStyles.text}>
        We couldn’t find anything for “{query}”
      </Text>
      <NotFoundIcon />
    </View>
  );
};

const notFoundViewStyles = StyleSheet.create({
  wrapper: {
    marginTop: 100,
    height: 260,
    width: '100%',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
    lineHeight: 28,
    marginBottom: 64,
    color: '#000',
  },
});
