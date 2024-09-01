
const API_BASE_URL = 'http://localhost:3001/instagram';

interface ProfileInformation {
  username: string;

}

interface CommentInformation {
  username: string;
  postLink: string;

}

interface PostInformation {
  username: string;

}

export async function getProfileInformation(username: string): Promise<ProfileInformation> {
  try {
    const response = await fetch(`${API_BASE_URL}/profile-information`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch profile information');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching profile information:', error);
    throw error;
  }
}

export async function getCommentInformation(username: string, postLink: string): Promise<CommentInformation> {
  try {
    const response = await fetch(`${API_BASE_URL}/comment-information`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, postLink }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch comment information');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching comment information:', error);
    throw error;
  }
}

export async function getPostInformation(username: string): Promise<PostInformation> {
  try {
    const response = await fetch(`${API_BASE_URL}/post-information`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch post information');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching post information:', error);
    throw error;
  }
}


