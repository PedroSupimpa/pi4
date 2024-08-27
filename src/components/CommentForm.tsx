import { getCommentInformation } from '@/service/instagramService';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const CommentForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [postLink, setPostLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('Estamos buscando os dados...');
    try {
      await getCommentInformation(username, postLink);
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
      <div>
        <label htmlFor="postLink" className="block text-sm font-medium text-gray-700">
          Post Link
        </label>
        <Input
          id="postLink"
          placeholder="Enter Instagram Post Link"
          value={postLink}
          onChange={(e) => setPostLink(e.target.value)}
          required
          className="w-full mt-1"
        />
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Comment Information'}
      </Button>
      {message && <p className="text-center mt-4">{message}</p>}
    </form>
  );
};

export default CommentForm;
