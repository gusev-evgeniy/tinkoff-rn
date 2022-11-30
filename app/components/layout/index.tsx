import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { StyledLayout } from './styles';

type Props = {
  children: React.ReactElement;
  isScrollable?: boolean;
};

export const Layout: FC<Props> = ({ children, isScrollable = true }) => {
  return (
    <StyledLayout>
      {isScrollable ? <ScrollView>{children}</ScrollView> : children}
    </StyledLayout>
  );
};
