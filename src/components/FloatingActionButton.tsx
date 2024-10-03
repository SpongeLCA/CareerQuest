import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { theme } from '../theme';

interface FloatingActionButtonProps {
  icon: string;
  onPress: () => void;
  style?: ViewStyle;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ icon, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Feather name={icon} size={24} color={theme.colors.background} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: theme.spacing.large,
    bottom: theme.spacing.large,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: theme.colors.text,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: theme.colors.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});

export default FloatingActionButton;