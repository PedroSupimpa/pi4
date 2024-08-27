import React from 'react';

interface ScrapeTypeSelectorProps {
  onSelect: (scrapeType: 'profile' | 'comments' | 'posts') => void;
}

const ScrapeTypeSelector: React.FC<ScrapeTypeSelectorProps> = ({ onSelect }) => {
  return (
    <div>
      <h2>Select Scrape Type</h2>
      <button onClick={() => onSelect('profile')}>Profile</button>
      <button onClick={() => onSelect('comments')}>Comments</button>
      <button onClick={() => onSelect('posts')}>Posts</button>
    </div>
  );
};

export default ScrapeTypeSelector;
