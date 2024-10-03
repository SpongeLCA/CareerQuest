import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Application } from '../context/ApplicationContext';
import { Feather } from '@expo/vector-icons';

interface DashboardOverviewProps {
  applications: Application[];
}

const DashboardOverview: React.FC<DashboardOverviewProps> = ({ applications }) => {
  const upcomingInterviews = applications.filter(app => app.status === 'Entretien planifié').length;
  const totalApplications = applications.length;
  const responseRate = totalApplications > 0 ? (upcomingInterviews / totalApplications * 100).toFixed(0) : '0';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tableau de bord</Text>
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <View style={styles.iconContainer}>
            <Feather name="file-text" size={24} color="#000" />
          </View>
          <Text style={styles.statValue}>{totalApplications}</Text>
          <Text style={styles.statLabel}>Candidatures</Text>
        </View>
        <View style={styles.statItem}>
          <View style={styles.iconContainer}>
            <Feather name="calendar" size={24} color="#000" />
          </View>
          <Text style={styles.statValue}>{upcomingInterviews}</Text>
          <Text style={styles.statLabel}>Entretiens à venir</Text>
        </View>
        <View style={styles.statItem}>
          <View style={styles.iconContainer}>
            <Feather name="percent" size={24} color="#000" />
          </View>
          <Text style={styles.statValue}>{responseRate}%</Text>
          <Text style={styles.statLabel}>Taux de réponse</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#000',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});

export default DashboardOverview;