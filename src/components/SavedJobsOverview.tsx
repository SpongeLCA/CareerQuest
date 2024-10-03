import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { theme, globalStyles } from '../theme';

const SavedJobsOverview: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Offres sauvegardées</Text>
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <View style={styles.iconContainer}>
            <Feather name="bookmark" size={24} color={theme.colors.text} />
          </View>
          <Text style={styles.statValue}>15</Text>
          <Text style={styles.statLabel}>Offres</Text>
        </View>
        <View style={styles.statItem}>
          <View style={styles.iconContainer}>
            <Feather name="layers" size={24} color={theme.colors.text} />
          </View>
          <Text style={styles.statValue}>5</Text>
          <Text style={styles.statLabel}>Secteurs</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    marginBottom: theme.spacing.medium,
  },
  title: {
    ...globalStyles.title,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  iconContainer: {
    ...globalStyles.iconContainer,
  },
  statValue: {
    fontSize: theme.fontSizes.extraLarge,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  statLabel: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.textSecondary,
  },
});

export default SavedJobsOverview;