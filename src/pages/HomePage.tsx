import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomePage = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const navigateToJobSearch = () => {
    navigation.navigate('JobSearch');
  };

  const navigateToNewApplication = () => {
    navigation.navigate('NewApplication');
  };

  const navigateToProfile = () => {
    navigation.navigate('Profile');
  };

  const navigateToApplicationDetail = (id: number) => {
    navigation.navigate('ApplicationDetail', { id });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ImageBackground
          source={{ uri: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80' }}
          style={styles.header}
        >
          <View style={styles.headerOverlay}>
            <View style={styles.headerContent}>
              <Feather name="briefcase" size={24} color="white" />
              <Text style={styles.headerTitle}>CareerQuest</Text>
              <TouchableOpacity onPress={navigateToProfile}>
                <Feather name="user" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.statsContainer}>
          <StatCard title="Total Candidatures" value="10" icon="file-text" />
          <StatCard title="Entretiens à venir" value="3" icon="calendar" />
          <StatCard title="Taux de réponse" value="30%" icon="percent" />
        </View>

        <Section title="Candidatures récentes">
          <TouchableOpacity onPress={() => navigateToApplicationDetail(1)}>
            <ApplicationItem
              company="TechCorp"
              position="Développeur Full Stack"
              status="En attente"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToApplicationDetail(2)}>
            <ApplicationItem
              company="DataSoft"
              position="Data Analyst"
              status="Entretien planifié"
            />
          </TouchableOpacity>
        </Section>

        <Section title="Rappels">
          <ReminderItem
            title="Relance pour TechCorp"
            date="2023-06-20"
          />
          <ReminderItem
            title="Préparer entretien DataSoft"
            date="2023-06-22"
          />
          <ReminderItem
            title="Mise à jour CV"
            date="2023-06-25"
          />
        </Section>

        <Section title="Offres sauvegardées">
          <View style={styles.savedJobsContainer}>
            <SavedJobCard icon="bookmark" title="Offres" value="15" />
            <SavedJobCard icon="layers" title="Secteurs" value="5" />
          </View>
        </Section>

        <TouchableOpacity style={styles.jobSearchButton} onPress={navigateToJobSearch}>
          <Text style={styles.jobSearchButtonText}>Rechercher des emplois</Text>
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity style={styles.fab} onPress={navigateToNewApplication}>
        <View style={styles.fabBackground}>
          <Feather name="plus" size={24} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const StatCard = ({ title, value, icon }) => (
  <View style={styles.statCard}>
    <View style={styles.statCardBackground}>
      <Feather name={icon} size={24} color="white" />
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statTitle}>{title}</Text>
    </View>
  </View>
);

const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const ApplicationItem = ({ company, position, status }) => (
  <View style={styles.applicationItem}>
    <View style={styles.applicationIcon}>
      <Feather name="briefcase" size={20} color="#4c669f" />
    </View>
    <View style={styles.applicationContent}>
      <Text style={styles.applicationCompany}>{company}</Text>
      <Text style={styles.applicationPosition}>{position}</Text>
      <Text style={styles.applicationStatus}>{status}</Text>
    </View>
  </View>
);

const ReminderItem = ({ title, date }) => (
  <View style={styles.reminderItem}>
    <View style={styles.reminderIcon}>
      <Feather name="bell" size={20} color="#4c669f" />
    </View>
    <View>
      <Text style={styles.reminderTitle}>{title}</Text>
      <Text style={styles.reminderDate}>{date}</Text>
    </View>
  </View>
);

const SavedJobCard = ({ icon, title, value }) => (
  <View style={styles.savedJobCard}>
    <View style={styles.savedJobCardBackground}>
      <Feather name={icon} size={24} color="white" />
      <Text style={styles.savedJobValue}>{value}</Text>
      <Text style={styles.savedJobTitle}>{title}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    paddingBottom: 80,
  },
  header: {
    height: 200,
  },
  headerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: -40,
    marginHorizontal: 16,
  },
  statCard: {
    width: '30%',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
  },
  statCardBackground: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#4c669f',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 8,
  },
  statTitle: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    marginTop: 4,
  },
  section: {
    padding: 16,
    backgroundColor: 'white',
    marginTop: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  applicationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
  },
  applicationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e6e6e6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  applicationContent: {
    flex: 1,
  },
  applicationCompany: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  applicationPosition: {
    fontSize: 14,
    color: '#666',
  },
  applicationStatus: {
    fontSize: 12,
    color: '#4c669f',
    marginTop: 4,
  },
  reminderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
  },
  reminderIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e6e6e6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  reminderTitle: {
    fontSize: 16,
    color: '#333',
  },
  reminderDate: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  savedJobsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  savedJobCard: {
    width: '45%',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
  },
  savedJobCardBackground: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#4c669f',
  },
  savedJobValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 8,
  },
  savedJobTitle: {
    fontSize: 14,
    color: 'white',
    marginTop: 4,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    elevation: 4,
    overflow: 'hidden',
  },
  fabBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4c669f',
  },
  jobSearchButton: {
    backgroundColor: '#4c669f',
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 16,
    marginTop: 16,
    alignItems: 'center',
  },
  jobSearchButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomePage;