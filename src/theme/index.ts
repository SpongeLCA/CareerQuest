// src/theme/index.ts

import { StyleSheet } from 'react-native';

export const theme = {
  colors: {
    background: '#fff',
    text: '#000',
    textSecondary: '#666',
    accent: '#f0f0f0',
  },
  fontSizes: {
    small: 12,
    medium: 16,
    large: 20,
    extraLarge: 24,
  },
  spacing: {
    small: 10,
    medium: 15,
    large: 20,
  },
  borderRadius: {
    small: 5,
    medium: 10,
    large: 25,
  },
};

export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadius.medium,
    padding: theme.spacing.medium,
  },
  title: {
    fontSize: theme.fontSizes.large,
    fontWeight: 'bold',
    marginBottom: theme.spacing.medium,
    color: theme.colors.text,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: theme.borderRadius.large,
    backgroundColor: theme.colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.small,
  },
});