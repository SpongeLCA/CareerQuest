// src/services/jobApi.ts

export interface Job {
    id: string;
    title: string;
    company: string;
    location: string;
    description: string;
    url: string;
  }
  
  const mockJobs: Job[] = [
    {
      id: '1',
      title: 'Développeur Full Stack',
      company: 'TechCorp',
      location: 'Paris, France',
      description: 'Nous recherchons un développeur Full Stack expérimenté...',
      url: 'https://example.com/job1',
    },
    {
      id: '2',
      title: 'Data Scientist',
      company: 'DataSoft',
      location: 'Lyon, France',
      description: 'Rejoignez notre équipe de Data Science pour travailler sur des projets passionnants...',
      url: 'https://example.com/job2',
    },
    {
      id: '3',
      title: 'UX Designer',
      company: 'DesignPro',
      location: 'Marseille, France',
      description: 'Nous cherchons un UX Designer créatif pour améliorer l\'expérience utilisateur de nos produits...',
      url: 'https://example.com/job3',
    },
  ];
  
  export const searchJobs = async (query: string): Promise<Job[]> => {
    // Simuler un délai de réseau
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    // Filtrer les emplois en fonction de la requête
    return mockJobs.filter(job => 
      job.title.toLowerCase().includes(query.toLowerCase()) ||
      job.company.toLowerCase().includes(query.toLowerCase()) ||
      job.location.toLowerCase().includes(query.toLowerCase())
    );
  };