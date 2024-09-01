import { ProfileData } from '@/types/instagramAnalytics-types';
import axios from 'axios';


const API_BASE_URL = 'http://localhost:3001/analytics';

export async function getInstagramProfile(username: string): Promise<ProfileData[]> {
  try {
    const response = await axios.get<ProfileData[]>(`${API_BASE_URL}/instagram-profile`, {
      params: { username }, 
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);
    
    return response.data;
  } catch (error) {
    console.error('Error fetching profile information:', error);
    throw new Error('Failed to fetch profile information');
  }
}
