import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { Feather } from '@expo/vector-icons';
import { theme, globalStyles } from '../theme';

type JobDetailRouteProp = RouteProp<RootStackParamList, 'JobDetail'>;

const JobDetailPage: React.FC = () => {
  const route = useRoute<JobDetailRouteProp>();
  const { job } = route.params;

  const handleApply = () => {
    Linking.openURL(job.url);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{job.title}</Text>
        <Text style={styles.company}>{job.company}</Text>
        <Text style={styles.location}>{job.location}</Text>
        <View style={styles.separator} />
        <Text style={styles.descriptionTitle}>Description du poste</Text>
        <Text style={styles.description}>{job.description}</Text>
      </View>
      <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
        <Text style={styles.applyButtonText}>Postuler</Text>
        <Feather name="external-link" size={20} color={theme.colors.background} />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.medium,
  },
  card: {
    ...globalStyles.container,
    marginBottom: theme.spacing.medium,
  },
  title: {
    fontSize: theme.fontSizes.large,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.small,
  },
  company: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.text,
    marginBottom: theme.spacing.small,
  },
  location: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.medium,
  },
  separator: {
    height: 1,
    backgroundColor: theme.colors.accent,
    marginVertical: theme.spacing.medium,
  },
  descriptionTitle: {
    fontSize: theme.fontSizes.medium,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.small,
  },
  description: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.text,
    lineHeight: 20,
  },
  applyButton: {
    backgroundColor: theme.colors.text,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.medium,
    borderRadius: theme.borderRadius.small,
  },
  applyButtonText: {
    color: theme.colors.background,
    fontSize: theme.fontSizes.medium,
    fontWeight: 'bold',
    marginRight: theme.spacing.small,
  },
});

export default JobDetailPage;