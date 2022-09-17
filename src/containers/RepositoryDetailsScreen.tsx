import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {MainStackParamList} from '@routes/MainStack';
import {ROUTE} from '@typings/routeNames';
import {
  RepositoryAboutSection,
  RepositoryDetailsHeader,
  RepositoryNumberedDetails,
} from '@components/common';
import FastImage from 'react-native-fast-image';
import {RepositoryApi} from '@typings/api/getGithubRepositoriesApi';
import {theme} from '@typings/theme';

type RepositoryDetailsScreenProps = NativeStackScreenProps<
  MainStackParamList,
  ROUTE.REPOSITORY_DETAILS_SCREEN
>;

const width = Dimensions.get('screen').width;

const RepositoryDetailsScreen: React.FC<RepositoryDetailsScreenProps> = ({
  route,
}) => {
  const {repository} = route.params;

  const [watchersCount, setWatchersCount] = useState(-1);

  useEffect(() => {
    // since watch count does not exist in repo object, have to fetch it separately
    getWatchCount(repository, setWatchersCount);
  }, [repository]);

  return (
    <SafeAreaView style={repositoryDetailsScreenStyles.wrapper}>
      <RepositoryDetailsHeader name={repository.full_name} />
      <ScrollView>
        <FastImage
          source={{uri: repository.owner.avatar_url}}
          style={{
            left: -18,
            height: width,
            width,
          }}
        />
        <RepositoryAboutSection description={repository.description} />
        <RepositoryNumberedDetails
          type={'FORKS'}
          count={repository.forks_count}
        />
        <RepositoryNumberedDetails
          type={'STARS'}
          count={repository.stargazers_count}
        />
        {watchersCount === -1 ? (
          <ActivityIndicator color={theme.colors.inputBorderFocused} />
        ) : (
          <RepositoryNumberedDetails type={'WATCHERS'} count={watchersCount} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
export default RepositoryDetailsScreen;

const repositoryDetailsScreenStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 20,
  },
});

const getWatchCount = (
  repository: RepositoryApi,
  setWatchersCount: (value: ((prevState: number) => number) | number) => void,
) => {
  fetch(`https://api.github.com/repos/${repository.full_name}`)
    .then(res => res.json())
    .then(repo => setWatchersCount(repo.subscribers_count));
};
