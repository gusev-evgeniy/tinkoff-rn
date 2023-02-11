import { useEffect, useState, useMemo, useRef } from 'react';
import { Dimensions, GestureResponderEvent } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SPEED = 75;

export const useSlider = (sliderLength: number) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const refInterval = useRef<NodeJS.Timer>();
  const refPageIndication = useRef<any>();
  const refWidth = useRef(0);

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    refInterval.current = setInterval(() => {
      if (refWidth.current === 100) {
        return nextSlide(1);
      }

      if (refPageIndication.current) {
        refWidth.current++;
        refPageIndication.current.setNativeProps({
          width: `${refWidth.current}%`,
        });
      }
    }, SPEED);

    return () => {
      clearInterval(refInterval.current);
      refWidth.current = 0;
    };
  }, [selectedIndex]);

  const nextSlide = (index: 1 | -1) => {
    const isSliderEnd =
      selectedIndex + index < 0 || selectedIndex + index > sliderLength - 1;

    if (isSliderEnd) {
      return setSelectedIndex(null);
    }

    setSelectedIndex(prev => prev + index);
  };

  const changeSlideHandler = async (event: GestureResponderEvent) => {
    const showNextSlide =
      SCREEN_WIDTH / 2 <= event.nativeEvent.locationX ? 1 : -1;
    nextSlide(showNextSlide);
  };

  return useMemo(
    () => ({
      setSelectedIndex,
      selectedIndex,
      changeSlideHandler,
      refPageIndication,
    }),
    [selectedIndex]
  );
};
