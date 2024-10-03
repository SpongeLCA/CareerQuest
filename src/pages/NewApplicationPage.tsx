import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

const NewApplicationPage = () => {
  const navigation = useNavigation();
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [status, setStatus] = useState('');
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSubmit = () => {
    // Ici, vous implémenteriez la logique pour sauvegarder la nouvelle candidature
    console.log({ company, position, status, date, notes });
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nouvelle Candidature</Text>
      </View>

      <View style={styles.form}>
        <InputField
          label="Entreprise"
          value={company}
          onChangeText={setCompany}
          placeholder="Nom de l'entreprise"
          icon="briefcase"
        />
        <InputField
          label="Poste"
          value={position}
          onChangeText={setPosition}
          placeholder="Intitulé du poste"
          icon="file-text"
        />
        <InputField
          label="Statut"
          value={status}
          onChangeText={setStatus}
          placeholder="Ex: En attente, Entretien planifié"
          icon="activity"
        />
        <TouchableOpacity style={styles.dateField} onPress={() => setShowDatePicker(true)}>
          <Feather name="calendar" size={24} color="#4c669f" style={styles.icon} />
          <View>
            <Text style={styles.label}>Date de candidature</Text>
            <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
          </View>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) {
                setDate(selectedDate);
              }
            }}
          />
        )}
        <View style={styles.notesField}>
          <Text style={styles.label}>Notes</Text>
          <TextInput
            style={styles.notesInput}
            multiline
            numberOfLines={4}
            value={notes}
            onChangeText={setNotes}
            placeholder="Ajoutez des notes sur votre candidature"
          />
        </View>
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Enregistrer</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const InputField = ({ label, value, onChangeText, placeholder, icon }) => (
  <View style={styles.inputField}>
    <Feather name={icon} size={24} color="#4c669f" style={styles.icon} />
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
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
  form: {
    backgroundColor: 'white',
    margin: 10,
    padding: 15,
    borderRadius: 10,
  },
  inputField: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  inputContainer: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#4c669f',
    fontSize: 16,
    paddingVertical: 5,
  },
  dateField: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  dateText: {
    fontSize: 16,
    color: '#333',
  },
  notesField: {
    marginBottom: 15,
  },
  notesInput: {
    borderWidth: 1,
    borderColor: '#4c669f',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#4c669f',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NewApplicationPage;