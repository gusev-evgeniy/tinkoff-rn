import { Pressable, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { StyledLayout } from '../../components/layout/styles';
import { Stories } from './stories';
import { Header } from './header';
import { useStories } from './stories/useStories';
import {
  StyledImageBackgroung,
  StyledPressable,
  StyledView,
} from '../../styledComponents';
import { useSlider } from './stories/useSlider';
import { Pagination } from './stories/pagination';

const STORIES_COUNT = 5;

const Home = () => {
  const { isLoading, stories } = useStories(STORIES_COUNT);

  const {
    setSelectedIndex,
    selectedIndex,
    changeSlideHandler,
    refPageIndication,
  } = useSlider(STORIES_COUNT);

  const selected = selectedIndex !== null ? stories[selectedIndex] : null;
  
  if (selected) {
    return (
      <Pressable onPress={changeSlideHandler}>
        <>
          <StyledView className='w-full h-full'>
            <Pagination
              count={STORIES_COUNT}
              ref={refPageIndication}
              selected={selectedIndex}
            />

            <StyledPressable
              onPress={() => setSelectedIndex(null)}
              className='absolute z-10 right-4 top-20 bg-white w-fit h-fit rounded-full p-1 opacity-60'>
              <AntDesign name='close' size={24} color='black' />
            </StyledPressable>

            <StyledImageBackgroung
              source={{ uri: selected.download_url }}
              resizeMode='cover'
              className='flex-1 '
            />
          </StyledView>
        </>
      </Pressable>
    );
  }

  return (
    <StyledLayout>
      <Header />

      {!isLoading && <Stories stories={stories} select={setSelectedIndex} />}
      <Text>Home</Text>
    </StyledLayout>
  );
};

export default Home;
