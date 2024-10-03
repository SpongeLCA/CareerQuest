import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Application } from '../context/ApplicationContext';
import { theme, globalStyles } from '../theme';

interface ApplicationListProps {
  applications: Application[];
  onPress: (id: number) => void;
}

const ApplicationList: React.FC<ApplicationListProps> = ({ applications, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Candidatures récentes</Text>
      <FlatList
        data={applications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => onPress(item.id)}>
            <View style={styles.itemContent}>
              <Text style={styles.position}>{item.position}</Text>
              <Text style={styles.company}>{item.company}</Text>
            </View>
            <View style={styles.statusContainer}>
              <Text style={styles.status}>{item.status}</Text>
              <Feather name="chevron-right" size={20} color={theme.colors.textSecondary} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    marginBottom: theme.spacing.medium,
  },
  title: {
    ...globalStyles.title,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.spacing.small,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.accent,
  },
  itemContent: {
    flex: 1,
  },
  position: {
    fontSize: theme.fontSizes.medium,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  company: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.textSecondary,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  status: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.textSecondary,
    marginRight: theme.spacing.small,
  },
});

export default ApplicationList;