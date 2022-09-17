import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import GoBackIcon from '@components/icons/GoBackIcon';
import {StackActions, useNavigation} from '@react-navigation/native';

interface RepositoryDetailsHeaderProps {
  name: string;
}

export const RepositoryDetailsHeader: React.FC<
  RepositoryDetailsHeaderProps
> = ({name}) => {
  const navigation = useNavigation();

  return (
    <View style={repositoryDetailsHeaderStyles.wrapper}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(StackActions.popToTop())}>
        <GoBackIcon />
      </TouchableOpacity>
      <Text
        style={repositoryDetailsHeaderStyles.nameText}
        numberOfLines={1}
        lineBreakMode={'tail'}>
        {name}
      </Text>
      <GoBackIcon opacity={0} />
    </View>
  );
};

const repositoryDetailsHeaderStyles = StyleSheet.create({
  wrapper: {
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameText: {
    flex: 1,
    fontSize: 22,
    textAlign: 'center',
    paddingHorizontal: 18,
    color: '#000',
  },
});
