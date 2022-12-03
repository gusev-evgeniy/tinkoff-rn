import { Text, View } from 'react-native';
import { StyledLayout } from '../../components/layout/styles';
import { Header } from './header';

const Home = () => {
  return (
    <StyledLayout>
      <Header />
      <Text>Home</Text>
    </StyledLayout>
  );
};

export default Home;
