import React, { FC } from 'react';
import { StyledImageBackgroung, StyledView } from '../../../styledComponents';
import { StoryType } from '../../../types/story';

type Props = StoryType;

export const Story: FC<Props> = ({ download_url }) => {
  return (
    <StyledView className='h-24 w-24 rounded-2xl ml-4 border-solid border-blue-400 p-1 border-2 '>
      <StyledImageBackgroung
        source={{ uri: download_url }}
        resizeMode='cover'
        className='flex-1 '
        imageStyle={{ borderRadius: 10 }}
      />
    </StyledView>
  );
};
