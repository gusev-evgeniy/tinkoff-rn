import React, { FC } from 'react';
import { ScrollView, View } from 'react-native';

type Props = {
  children: React.ReactElement;
  isScrollable?: boolean;
};

export const Layout: FC<Props> = ({ children, isScrollable = true }) => {
  return (
    <View>{isScrollable ? <ScrollView>{children}</ScrollView> : children}</View>
  );
};
