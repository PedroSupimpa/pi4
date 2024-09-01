
export interface ProfileData {
    newDate: string;
    data: ProfileInformation[];
  }
  
  export interface ProfileInformation {
    inputUrl: string;
    id: string;
    username: string;
    url: string;
    fullName: string;
    biography: string;
    followersCount: number;
    followsCount: number;
    hasChannel: boolean;
    highlightReelCount: number;
    isBusinessAccount: boolean;
    joinedRecently: boolean;
    businessCategoryName: string | null;
    private: boolean;
    verified: boolean;
    profilePicUrl: string;
    profilePicUrlHD: string;
    igtvVideoCount: number;
    relatedProfiles: RelatedProfile[];
    latestIgtvVideos: IgtvVideo[];
    postsCount: number;
    latestPosts: Post[];
  }
  
  export interface RelatedProfile {
    id: string;
    username: string;
    fullName: string;
    profilePicUrl: string;
    isVerified: boolean;
  }
  
  export interface IgtvVideo {
    id: string;
    title: string;
    videoUrl: string;
    thumbnailUrl: string;
    viewsCount: number;
  }
  
  export interface Post {
    id: string;
    imageUrl: string;
    caption: string;
    likesCount: number;
    commentsCount: number;
    timestamp: string;
  }
  
  export interface ProfileAnalytics {
    profile: ProfileData[];
  }
  