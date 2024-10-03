import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BarChart, PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get("window").width;

const StatsPage = () => {
  // Ces données devraient être calculées à partir de vos vraies données d'application
  const applicationData = {
    totalApplications: 50,
    interviewsScheduled: 10,
    offers: 3,
    rejections: 20,
    pending: 17,
  };

  const statusData = [
    { name: 'En attente', population: applicationData.pending, color: '#4c669f', legendFontColor: '#7F7F7F', legendFontSize: 12 },
    { name: 'Entretiens', population: applicationData.interviewsScheduled, color: '#ff9800', legendFontColor: '#7F7F7F', legendFontSize: 12 },
    { name: 'Offres', population: applicationData.offers, color: '#4caf50', legendFontColor: '#7F7F7F', legendFontSize: 12 },
    { name: 'Rejets', population: applicationData.rejections, color: '#f44336', legendFontColor: '#7F7F7F', legendFontSize: 12 },
  ];

  const monthlyData = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    color: (opacity = 1) => `rgba(76, 102, 159, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Statistiques</Text>
      </View>

      <View style={styles.overviewContainer}>
        <StatCard title="Total Candidatures" value={applicationData.totalApplications} icon="file-text" />
        <StatCard title="Entretiens planifiés" value={applicationData.interviewsScheduled} icon="calendar" />
        <StatCard title="Offres reçues" value={applicationData.offers} icon="check-circle" />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Statut des candidatures</Text>
        <PieChart
          data={statusData}
          width={screenWidth - 40}
          height={220}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Candidatures par mois</Text>
        <BarChart
          data={monthlyData}
          width={screenWidth - 40}
          height={220}
          yAxisLabel=""
          chartConfig={chartConfig}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </ScrollView>
  );
};

const StatCard = ({ title, value, icon }) => (
  <View style={styles.statCard}>
    <Feather name={icon} size={24} color="#4c669f" />
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statTitle}>{title}</Text>
  </View>
);

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
  overviewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  statCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    width: '30%',
    marginBottom: 10,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4c669f',
    marginVertical: 5,
  },
  statTitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  chartContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
});

export default StatsPage;