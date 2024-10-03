import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { searchJobs, Job } from '../services/jobApi';
import { Feather } from '@expo/vector-icons';
import { theme, globalStyles } from '../theme';

const JobSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleSearch = async () => {
    setLoading(true);
    try {
      const results = await searchJobs(query);
      setJobs(results);
    } catch (error) {
      console.error('Error searching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderJobItem = ({ item }: { item: Job }) => (
    <TouchableOpacity
      style={styles.jobItem}
      onPress={() => navigation.navigate('JobDetail', { job: item })}
    >
      <View style={styles.jobHeader}>
        <Text style={styles.jobTitle}>{item.title}</Text>
        <Feather name="chevron-right" size={20} color={theme.colors.text} />
      </View>
      <Text style={styles.jobCompany}>{item.company}</Text>
      <Text style={styles.jobLocation}>{item.location}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          value={query}
          onChangeText={setQuery}
          placeholder="Rechercher des emplois..."
          placeholderTextColor={theme.colors.textSecondary}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Feather name="search" size={20} color={theme.colors.background} />
        </TouchableOpacity>
      </View>
      {loading ? (
        <ActivityIndicator size="large" color={theme.colors.text} />
      ) : (
        <FlatList
          data={jobs}
          renderItem={renderJobItem}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Aucun résultat trouvé</Text>
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.medium,
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: theme.spacing.medium,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: theme.colors.accent,
    borderRadius: theme.borderRadius.small,
    paddingHorizontal: theme.spacing.small,
    marginRight: theme.spacing.small,
    color: theme.colors.text,
  },
  searchButton: {
    backgroundColor: theme.colors.text,
    width: 40,
    height: 40,
    borderRadius: theme.borderRadius.small,
    justifyContent: 'center',
    alignItems: 'center',
  },
  jobItem: {
    ...globalStyles.container,
    marginBottom: theme.spacing.small,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  jobTitle: {
    fontSize: theme.fontSizes.medium,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  jobCompany: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.small,
  },
  jobLocation: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.textSecondary,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: theme.spacing.large,
    color: theme.colors.textSecondary,
  },
});

export default JobSearch;