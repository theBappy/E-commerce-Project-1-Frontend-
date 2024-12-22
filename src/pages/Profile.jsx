import React, { useEffect, useState } from 'react';
import { getUserProfile, updateProfileImage } from '../services/AuthService';
import axios from 'axios'; // Import axios for HTTP requests
import '../assets/styles/Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token')); // Ensure you have the token

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile();
        console.log('📢 Fetched profile data:', data); // Log the full response
        if (data.data) {
          console.log('✅ Profile found:', data.data); // Log if profile is found in the data
          setProfile(data.data); // Set profile if it's inside `data.data`
        } else {
          console.log('⚠️ No "data" key found. Setting entire data as profile.');
          setProfile(data); // Fallback: Set entire data if no `data` key exists
        }
      } catch (error) {
        console.error('❌ Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set preview URL
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = async () => {
    if (!image) {
      console.error('No image selected!');
      return; // Ensure an image is selected before proceeding
    }

    const formData = new FormData();
    formData.append('image', image); // Use the image from state instead of the event
    
    try {
      const response = await axios.post('https://e-commerce-project1-backend.onrender.com/api/v1/auth/upload-profile-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}` // Ensure token is available
        }
      });
      console.log('Image uploaded successfully:', response.data);
      // Optionally update the profile state to reflect the new image URL
      setProfile((prevProfile) => ({
        ...prevProfile,
        profileImage: response.data.data.url, // Update with new image URL
      }));
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className="profile-container">
      <h2>Your Profile</h2>
      {profile ? (
        <>
          {/* Profile Image */}
          <img
            src={profile.profileImage || imagePreview || 'https://via.placeholder.com/120'}
            alt="Profile"
            className="profile-image"
          />
          
          {/* Upload Image */}
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="form-control mb-3"
            />
            <button
              className="upload-btn"
              onClick={handleImageUpload}
              disabled={!image} // Disable the button if no image is selected
            >
              Upload Image
            </button>
          </div>

          {/* Profile Information */}
          <div className="profile-info">
            <p>
              <span>Name:</span> {profile.name || 'Name not available'}
            </p>
            <p>
              <span>Email:</span> {profile.email || 'Email not available'}
            </p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;

