import React, { createContext, useState, useContext, ReactNode } from 'react';

export interface Application {
  id: number;
  company: string;
  position: string;
  status: string;
  date: string;
  notes?: string;
}

interface ApplicationContextType {
  applications: Application[];
  addApplication: (application: Omit<Application, 'id'>) => void;
  updateApplication: (id: number, updatedApplication: Application) => void;
}

const ApplicationContext = createContext<ApplicationContextType | undefined>(undefined);

const initialApplications: Application[] = [
  { id: 1, company: 'TechCorp', position: 'Développeur Full Stack', status: 'En attente', date: '2023-06-15' },
  { id: 2, company: 'DataSoft', position: 'Data Analyst', status: 'Entretien planifié', date: '2023-06-20' },
  { id: 3, company: 'DesignPro', position: 'UI/UX Designer', status: 'CV envoyé', date: '2023-06-18' },
];

export const ApplicationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [applications, setApplications] = useState<Application[]>(initialApplications);

  const addApplication = (application: Omit<Application, 'id'>) => {
    const newApplication = {
      ...application,
      id: applications.length + 1,
    };
    setApplications([...applications, newApplication]);
  };

  const updateApplication = (id: number, updatedApplication: Application) => {
    setApplications(applications.map(app => app.id === id ? updatedApplication : app));
  };

  return (
    <ApplicationContext.Provider value={{ applications, addApplication, updateApplication }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplications = () => {
  const context = useContext(ApplicationContext);
  if (context === undefined) {
    throw new Error('useApplications must be used within an ApplicationProvider');
  }
  return context;
};