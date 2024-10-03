import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { theme, globalStyles } from '../theme';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Feather name="briefcase" size={24} color={theme.colors.text} />
        <Text style={styles.title}>CareerQuest</Text>
      </View>
      <Feather name="user" size={24} color={theme.colors.text} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.accent,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    ...globalStyles.title,
    marginBottom: 0,
    marginLeft: theme.spacing.small,
  },
});

export default Header;