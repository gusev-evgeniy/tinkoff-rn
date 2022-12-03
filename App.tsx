import { Navigation } from './app/screens/navigation';
import { AuthProvider } from './app/providers/AuthProvider';

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}
