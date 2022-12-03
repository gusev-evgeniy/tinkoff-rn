import { useState } from 'react';

export const useProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [profile, setProfile] = useState({});
};
