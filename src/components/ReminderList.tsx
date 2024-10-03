import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { theme, globalStyles } from '../theme';

interface Reminder {
  id: number;
  text: string;
  date: string;
}

const reminders: Reminder[] = [
  { id: 1, text: 'Relance pour TechCorp', date: '2023-06-20' },
  { id: 2, text: 'Préparer entretien DataSoft', date: '2023-06-22' },
  { id: 3, text: 'Mise à jour CV', date: '2023-06-25' },
];

const ReminderList: React.FC = () => {
  const renderItem = ({ item }: { item: Reminder }) => (
    <View style={styles.reminderItem}>
      <View style={styles.iconContainer}>
        <Feather name="bell" size={20} color={theme.colors.text} />
      </View>
      <View style={styles.reminderContent}>
        <Text style={styles.reminderText}>{item.text}</Text>
        <Text style={styles.reminderDate}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rappels</Text>
      <FlatList
        data={reminders}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
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
    marginBottom: theme.spacing.small,
  },
  listContent: {
    paddingBottom: theme.spacing.small,
  },
  reminderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.small,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.accent,
  },
  iconContainer: {
    ...globalStyles.iconContainer,
    width: 40,
    height: 40,
    marginRight: theme.spacing.small,
    marginBottom: 0,
  },
  reminderContent: {
    flex: 1,
  },
  reminderText: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.text,
  },
  reminderDate: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.textSecondary,
  },
});

export default ReminderList;