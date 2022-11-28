import { Navigation } from './app/components/navigations';
import { AuthProvider } from './app/providers/AuthProvider';

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}
