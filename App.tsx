import { Navigation } from './app/screens/navigation';
import { AuthProvider } from './app/providers/AuthProvider';
import { AccountProvider } from './app/providers/AccountProvider';

export default function App() {
  return (
    <AuthProvider>
      <AccountProvider>
        <Navigation />
      </AccountProvider>
    </AuthProvider>
  );
}
