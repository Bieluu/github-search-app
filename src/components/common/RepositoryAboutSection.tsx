import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface RepositoryAboutSectionProps {
  description: string;
}

export const RepositoryAboutSection: React.FC<RepositoryAboutSectionProps> = ({
  description,
}) => {
  return (
    <View style={repositoryAboutSectionStyles.wrapper}>
      <Text style={repositoryAboutSectionStyles.titleText}>About</Text>
      <Text style={repositoryAboutSectionStyles.descriptionText}>
        {description}
      </Text>
    </View>
  );
};

const repositoryAboutSectionStyles = StyleSheet.create({
  wrapper: {
    paddingVertical: 18,
    marginBottom: 6,
  },
  titleText: {
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
  },
  descriptionText: {
    color: '#000',
  },
});
