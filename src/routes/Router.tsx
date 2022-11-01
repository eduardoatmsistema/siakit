import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import { Erro } from '../pages/Erro';
import { Maintenance } from '../pages/Maintenance';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

export default function Router(): JSX.Element {
  return (
    <AuthProvider>

    <Routes>
      <Route path="*" element={<Erro />} />

        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />

      <Route path="/maintenance" element={<Maintenance />} />
    </Routes>
    </AuthProvider>
  );
}