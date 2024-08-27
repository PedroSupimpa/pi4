import { getProfileInformation } from '@/service/instagramService';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const ProfileForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('Estamos buscando os dados...');
    try {
      await getProfileInformation(username);
      setMessage('Dados obtidos com sucesso!');
    } catch (error) {
      setMessage('Falha ao obter os dados.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
          Username
        </label>
        <Input
          id="username"
          placeholder="Enter Instagram Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full mt-1"
        />
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Profile Information'}
      </Button>
      {message && <p className="text-center mt-4">{message}</p>}
    </form>
  );
};

export default ProfileForm;
