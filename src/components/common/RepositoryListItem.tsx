import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ROUTE} from '@typings/routeNames';
import {RepositoryApi} from '@typings/api/getGithubRepositoriesApi';
import {theme} from '@typings/theme';
import FastImage from 'react-native-fast-image';

interface RepositoryListItemProps {
  repository: RepositoryApi;
}

export const RepositoryListItem: React.FC<RepositoryListItemProps> = ({
  repository,
}) => {
  const {
    full_name,
    owner: {avatar_url},
    description,
  } = repository;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={repositoryListItemStyles.wrapper}
      onPress={() =>
        navigation.navigate(ROUTE.REPOSITORY_DETAILS_SCREEN, {repository})
      }>
      <View style={repositoryListItemStyles.titleAndDescriptionWrapper}>
        <Text
          lineBreakMode={'tail'}
          numberOfLines={1}
          style={repositoryListItemStyles.fullNameText}>
          {full_name}
        </Text>
        <Text
          lineBreakMode={'tail'}
          numberOfLines={1}
          style={repositoryListItemStyles.descriptionText}>
          {description}
        </Text>
      </View>
      <FastImage
        source={{uri: avatar_url}}
        style={repositoryListItemStyles.image}
      />
    </TouchableOpacity>
  );
};

const repositoryListItemStyles = StyleSheet.create({
  wrapper: {
    height: 80,
    paddingVertical: 16,
    paddingLeft: 16,
    paddingRight: 120,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: theme.colors.repositoryBorder,
    borderRadius: 12,
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  titleAndDescriptionWrapper: {
    height: 48,
    justifyContent: 'space-around',
  },
  fullNameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  descriptionText: {
    fontSize: 14,
    color: '#000',
  },
  image: {
    position: 'absolute',
    top: -1,
    right: 0,
    width: 80,
    height: 80,
  },
});
