import { Route, Routes } from 'react-router-dom';
import { Customers } from '../pages/Customers';
import { Erro } from '../pages/Erro';
import { Maintenance } from '../pages/Maintenance';
import { New } from '../pages/New';
import { Profile } from '../pages/Profile';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

export default function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="*" element={<Erro />} />

        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />

      <Route path="/maintenance" element={<Maintenance />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/new" element={<New />} />
      <Route path="/new/:id" element={<New />} />
    </Routes>
  );
}