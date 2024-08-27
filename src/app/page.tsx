"use client";

import CommentForm from '@/components/CommentForm';
import PostForm from '@/components/PostForm';
import ProfileForm from '@/components/ProfileForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useState } from 'react';


const ScrapePage: React.FC = () => {
  const [scrapeType, setScrapeType] = useState<'profile' | 'comments' | 'posts' | null>(null);

  return (
    <div className="container mx-auto p-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>
          Instagram Scraper
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex justify-around">
            <Button onClick={() => setScrapeType('profile')} variant={scrapeType === 'profile' ? 'default' : 'outline'}>
              Profile
            </Button>
            <Button onClick={() => setScrapeType('comments')} variant={scrapeType === 'comments' ? 'default' : 'outline'}>
              Comments
            </Button>
            <Button onClick={() => setScrapeType('posts')} variant={scrapeType === 'posts' ? 'default' : 'outline'}>
              Posts
            </Button>
          </div>
          {scrapeType === 'profile' && <ProfileForm />}
          {scrapeType === 'comments' && <CommentForm />}
          {scrapeType === 'posts' && <PostForm />}
        </CardContent>
      </Card>
    </div>
  );
};

export default ScrapePage;
