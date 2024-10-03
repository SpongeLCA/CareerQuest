import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';

type ApplicationDetailScreenRouteProp = RouteProp<RootStackParamList, 'ApplicationDetail'>;

const ApplicationDetailPage = () => {
  const route = useRoute<ApplicationDetailScreenRouteProp>();
  const { id } = route.params;

  // Ici, vous devriez récupérer les détails de la candidature à partir de l'ID
  // Pour cet exemple, nous utiliserons des données factices
  const application = {
    company: 'TechCorp',
    position: 'Développeur Full Stack',
    status: 'En attente',
    date: '2023-06-15',
    notes: 'Entretien prévu pour la semaine prochaine. Revoir les principes SOLID et les design patterns.',
    contacts: [
      { name: 'Alice Smith', role: 'Recruteur', email: 'alice@techcorp.com' },
      { name: 'Bob Johnson', role: 'Responsable technique', email: 'bob@techcorp.com' },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.company}>{application.company}</Text>
        <Text style={styles.position}>{application.position}</Text>
        <View style={styles.statusContainer}>
          <Text style={styles.status}>{application.status}</Text>
          <Text style={styles.date}>{application.date}</Text>
        </View>
      </View>

      <Section title="Notes">
        <Text style={styles.notes}>{application.notes}</Text>
      </Section>

      <Section title="Contacts">
        {application.contacts.map((contact, index) => (
          <ContactItem key={index} contact={contact} />
        ))}
      </Section>

      <TouchableOpacity style={styles.editButton}>
        <Feather name="edit" size={24} color="white" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const ContactItem = ({ contact }) => (
  <View style={styles.contactItem}>
    <View style={styles.contactIcon}>
      <Feather name="user" size={20} color="#4c669f" />
    </View>
    <View style={styles.contactInfo}>
      <Text style={styles.contactName}>{contact.name}</Text>
      <Text style={styles.contactRole}>{contact.role}</Text>
      <Text style={styles.contactEmail}>{contact.email}</Text>
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
  company: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  position: {
    fontSize: 18,
    color: 'white',
    marginTop: 5,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  status: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  date: {
    fontSize: 16,
    color: 'white',
  },
  section: {
    backgroundColor: 'white',
    margin: 10,
    padding: 15,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  notes: {
    fontSize: 16,
    color: '#666',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e6e6e6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  contactRole: {
    fontSize: 14,
    color: '#666',
  },
  contactEmail: {
    fontSize: 14,
    color: '#4c669f',
  },
  editButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4c669f',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

export default ApplicationDetailPage;