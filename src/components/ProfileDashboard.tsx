import { getInstagramProfile } from "@/service/instagramAnalytics";
import { ProfileData, ProfileInformation } from "@/types/instagramAnalytics-types";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";

export default function ProfileDashboard() {
    const [username, setUsername] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [profileData, setProfileData] = useState<ProfileData[] | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [message, setMessage] = useState<string>('');

    const fetchProfileData = async () => {
        setLoading(true);
        setMessage('');
        try {
            const data = await getInstagramProfile(username); 
            setProfileData(data);
            setCurrentIndex(0);
        } catch (error) {
            setMessage('An error occurred while fetching the data.');
            setProfileData(null);
        } finally {
            setLoading(false);
        }
    };

    const showNext = () => {
        if (profileData && currentIndex < profileData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const showPrevious = () => {
        if (profileData && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    
    const renderProfileInfo = (data: ProfileInformation) => {
        return (
            <div>
                <h3>Name: {data.fullName} User:(@{data.username})</h3>
                <p>Bio: {data.biography}</p>
                <ul>
                    <li>Followers: {data.followersCount}</li>
                    <li>Following: {data.followsCount}</li>
                    <li>Posts: {data.postsCount}</li>
                    <li>Business Account: {data.isBusinessAccount ? 'Yes' : 'No'}</li>
                    <li>Verified: {data.verified ? 'Yes' : 'No'}</li>
                </ul>
            </div>
        );
    };

    return (
        <Card className="shadow-lg">
            <CardHeader className="flex-row items-center justify-between">
                <CardTitle className="">
                    Profile Dashboard
                </CardTitle>
                <div className="flex w-1/3 items-center justify-evenly">
                    <Input
                        id="username"
                        placeholder="Enter Instagram Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className=" w-1/2 mt-1"
                    />
                    <Button onClick={fetchProfileData} disabled={loading}>
                        {loading ? 'Loading...' : 'Search'}
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                {message && <p>{message}</p>}
                {profileData && profileData.length > 0 && (
                    <div>
                        <div>
                            <h2>Data from: {new Date(profileData[currentIndex].newDate).toLocaleString()}</h2>
                            {renderProfileInfo(profileData[currentIndex].data[0])}
                        </div>
                        <div className="flex justify-between mt-4">
                            <Button onClick={showPrevious} disabled={currentIndex === 0}>
                                Previous
                            </Button>
                            <Button onClick={showNext} disabled={currentIndex === profileData.length - 1}>
                                Next
                            </Button>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
