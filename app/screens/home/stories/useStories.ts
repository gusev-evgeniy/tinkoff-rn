import { useEffect, useState, useMemo } from 'react';
import { Alert } from 'react-native';

import { StoriesAPI } from '../../../api/stories';
import { StoryType } from '../../../types/story';

export const useStories = (count: number = 10) => {
  const [stories, setStories] = useState<StoryType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const { data } = await StoriesAPI.get(count);
        setStories(data);

        setIsLoading(false);
      } catch (error) {
        Alert.alert('Stories error:', error);
        setIsLoading(false);
      }
    };

    fetchStories();
  }, []);

  return useMemo(
    () => ({
      stories,
      isLoading,
    }),
    [isLoading, stories.length]
  );
};
