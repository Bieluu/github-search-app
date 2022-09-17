import React, {useCallback, useEffect, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {CommonInput} from '@components/inputs';
import {useDebounce} from '@utils/hooks/useDebounce';
import {useGetGithubRepositories} from '@api/useGetGithubRepositories';
import {
  LoadingIndicator,
  NotFoundView,
  RepositoryListItem,
} from '@components/common';
import {FlashList} from '@shopify/flash-list';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  GetGithubRepositoriesApi,
  RepositoryApi,
} from '@typings/api/getGithubRepositoriesApi';
import {queryStates} from '@typings/api/queryStates';

const MINIMUM_CHARACTERS_TO_PERFORM_QUERY = 1;

const SearchRepositoryScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const flashListRef = useRef<FlashList<RepositoryApi>>(null);
  const {debouncedValue: debouncedSearchQuery, setDebouncedValue} = useDebounce(
    searchQuery,
    800,
  );
  const {
    results,
    getNextPage,
    performInitialQuery,
    queryState,
    clearQuery,
    isPending,
  } = useGetGithubRepositories();

  const performNewQuery = useCallback(async () => {
    await performInitialQuery(debouncedSearchQuery);
    flashListRef?.current?.scrollToIndex({index: 0});
  }, [debouncedSearchQuery, performInitialQuery]);

  const onEndReached = useCallback(() => {
    checkIfNextPageIsAvailable(results) &&
      searchQuery.length &&
      checkIfQueryConsistMinimumNumberOfCharacters(debouncedSearchQuery) &&
      !isPending &&
      getNextPage(debouncedSearchQuery);
  }, [
    debouncedSearchQuery,
    getNextPage,
    isPending,
    results,
    searchQuery.length,
  ]);

  const clearInputAndResetQuery = useCallback(() => {
    setSearchQuery('');
    setDebouncedValue('');
    clearQuery();
  }, [clearQuery, setDebouncedValue]);

  useEffect(() => {
    checkIfQueryConsistMinimumNumberOfCharacters(debouncedSearchQuery)
      ? performNewQuery()
      : clearQuery();
  }, [clearQuery, debouncedSearchQuery, performNewQuery]);

  return (
    <SafeAreaView style={searchRepositoryScreenStyles.wrapper}>
      {isPending && <LoadingIndicator />}
      <View style={searchRepositoryScreenStyles.inputWrapper}>
        <CommonInput
          setText={setSearchQuery}
          currentText={searchQuery}
          clearInput={clearInputAndResetQuery}
        />
      </View>
      {!isPending &&
      queryState !== queryStates.UNTOUCHED &&
      results.total_count === 0 ? (
        <NotFoundView query={debouncedSearchQuery} />
      ) : (
        <FlashList
          ref={flashListRef}
          data={results.items}
          renderItem={({item}) => <RepositoryListItem repository={item} />}
          onEndReached={onEndReached}
          onEndReachedThreshold={1}
          keyExtractor={item => item.id.toString()}
          estimatedItemSize={64}
        />
      )}
    </SafeAreaView>
  );
};

export default SearchRepositoryScreen;

const searchRepositoryScreenStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 20,
  },
  inputWrapper: {
    marginBottom: 37,
  },
});

const checkIfQueryConsistMinimumNumberOfCharacters = (
  debouncedSearchQuery: string,
) => debouncedSearchQuery?.length >= MINIMUM_CHARACTERS_TO_PERFORM_QUERY;

const checkIfNextPageIsAvailable = (results: GetGithubRepositoriesApi) => {
  return results.total_count > results.items.length;
};
