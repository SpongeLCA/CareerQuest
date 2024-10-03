export type RootStackParamList = {
    Home: undefined;
    JobSearch: undefined;
    JobDetail: { jobId: string };
    NewApplication: undefined;
    ApplicationDetail: { id: number };
    Profile: undefined;
    // Ajoutez ici d'autres routes si nécessaire
  };