import React, { FC, memo } from 'react';
import { Pressable, ScrollView } from 'react-native';
import { StyledView } from '../../../styledComponents';
import { StoryType } from '../../../types/story';
import { Story } from './item';

type Props = {
  stories: StoryType[];
  select: (index: number) => void;
};

export const Stories: FC<Props> = memo(({ select, stories }) => {

  return (
    <StyledView className='mt-4 mb-4'>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {stories.map((story, index) => (
          <Pressable key={story.id} onPress={() => select(index)}>
            <Story {...story} />
          </Pressable>
        ))}
      </ScrollView>
    </StyledView>
  );
});
