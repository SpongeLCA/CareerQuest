import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types'; // Ceci devrait maintenant fonctionner

type JobSearchScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'JobSearch'>;

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
}

const JobSearchPage = () => {
  const navigation = useNavigation<JobSearchScreenNavigationProp>();
  const [searchQuery, setSearchQuery] = useState('');
  const [jobs, setJobs] = useState<Job[]>([]);

  const handleSearch = () => {
    // Simuler une recherche d'emploi
    // Dans une vraie application, cela ferait un appel API
    const mockJobs: Job[] = [
      { id: '1', title: 'Développeur Full Stack', company: 'TechCorp', location: 'Paris', salary: '45k - 60k €' },
      { id: '2', title: 'Data Analyst', company: 'DataSoft', location: 'Lyon', salary: '40k - 55k €' },
      { id: '3', title: 'UI/UX Designer', company: 'DesignPro', location: 'Marseille', salary: '35k - 50k €' },
      { id: '4', title: 'DevOps Engineer', company: 'CloudSystems', location: 'Toulouse', salary: '50k - 70k €' },
      { id: '5', title: 'Product Manager', company: 'InnovateTech', location: 'Bordeaux', salary: '55k - 75k €' },
    ];
    setJobs(mockJobs.filter(job => 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
    ));
  };

  const renderJobItem = ({ item }: { item: Job }) => (
    <TouchableOpacity 
      style={styles.jobItem}
      onPress={() => navigation.navigate('JobDetail', { jobId: item.id })}
    >
      <View style={styles.jobIcon}>
        <Feather name="briefcase" size={24} color="#4c669f" />
      </View>
      <View style={styles.jobInfo}>
        <Text style={styles.jobTitle}>{item.title}</Text>
        <Text style={styles.jobCompany}>{item.company}</Text>
        <Text style={styles.jobLocation}>{item.location}</Text>
        <Text style={styles.jobSalary}>{item.salary}</Text>
      </View>
      <Feather name="chevron-right" size={24} color="#4c669f" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Recherche d'emploi</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher un emploi..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Feather name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={jobs}
        renderItem={renderJobItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.jobList}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            {jobs.length === 0 && searchQuery
              ? "Aucun résultat. Essayez une nouvelle recherche !"
              : "Commencez votre recherche d'emploi !"}
          </Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4c669f',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: '#4c669f',
    borderRadius: 25,
    padding: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  jobList: {
    padding: 10,
  },
  jobItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  jobIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e6e6e6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  jobInfo: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  jobCompany: {
    fontSize: 16,
    color: '#666',
  },
  jobLocation: {
    fontSize: 14,
    color: '#999',
  },
  jobSalary: {
    fontSize: 14,
    color: '#4c669f',
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: '#666',
  },
});

export default JobSearchPage;