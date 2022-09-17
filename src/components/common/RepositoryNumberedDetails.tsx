import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '@typings/theme';
import ForksIcon from '@components/icons/ForksIcon';
import StarsIcon from '@components/icons/StarsIcon';
import WatchersIcon from '@components/icons/WatchersIcon';

type NumberedDetailType = 'FORKS' | 'STARS' | 'WATCHERS';

interface RepositoryNumberedDetailsProps {
  type: NumberedDetailType;
  count: number;
}

export const RepositoryNumberedDetails: React.FC<
  RepositoryNumberedDetailsProps
> = ({count, type}) => {
  const title = useMemo(() => {
    switch (type) {
      case 'FORKS':
        return 'Forks';
      case 'STARS':
        return 'Stars';
      case 'WATCHERS':
        return 'Watchers';
    }
  }, [type]);

  const icon = useMemo(() => {
    switch (type) {
      case 'FORKS':
        return <ForksIcon />;
      case 'STARS':
        return <StarsIcon fill={theme.colors.inputBorderUnfocused} />;
      case 'WATCHERS':
        return <WatchersIcon fill={theme.colors.inputBorderUnfocused} />;
    }
  }, [type]);

  return (
    <View style={repositoryNumberedDetailsStyles.wrapper}>
      <Text style={repositoryNumberedDetailsStyles.titleText}>{title}</Text>
      <View style={repositoryNumberedDetailsStyles.detailsWrapper}>
        <Text style={repositoryNumberedDetailsStyles.countText}>{count}</Text>
        {icon}
      </View>
    </View>
  );
};

const repositoryNumberedDetailsStyles = StyleSheet.create({
  wrapper: {
    height: 32,
    marginBottom: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.repositoryDetailsBottomBorder,
  },
  titleText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
  },
  detailsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 20,
  },
  countText: {
    fontSize: 14,
    marginRight: 12,
    color: theme.colors.inputBorderUnfocused,
  },
});
