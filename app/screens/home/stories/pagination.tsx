import { forwardRef } from 'react';
import { Dimensions } from 'react-native';
import { StyledView } from '../../../styledComponents';

const SCREEN_WIDTH = Dimensions.get('screen').width;

type Props = {
  selected: number;
  count: number;
};

export const Pagination = forwardRef((props: Props, ref) => {
  const { count, selected } = props;

  return (
    <StyledView className='w-full flex justify-around flex-row absolute z-10 top-16'>
      {Array.from(Array(count)).map((_, i) => (
        <StyledView
          key={i}
          style={{ width: SCREEN_WIDTH / count - 5 }}
          className={
            'h-1 bg-white opacity-60 rounded-3xl relative overflow-hidden'
          }>
          {i === selected && (
            <StyledView
              style={{ width: 0 }}
              ref={ref}
              className={'h-full bg-red-400 rounded-3xl'}
            />
          )}
        </StyledView>
      ))}
    </StyledView>
  );
});
