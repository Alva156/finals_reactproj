import React, { useState } from "react";
import "./manageprofile.css";

const ManageProfile = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div className="manage-profile-page">
      <h1 className="manage-profile-heading">Manage Profile</h1>
      <div className="profile-info-container">
        <h2 className="profile-info-title">Profile Information</h2>
        <div className="profile-info-field">
          <label htmlFor="full-name">Full Name</label>
          <input
            type="text"
            id="full-name"
            placeholder="Enter your full name"
            value={fullName}
            onChange={handleFullNameChange}
            className="profile-input"
          />
        </div>
        <div className="profile-info-field">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            className="profile-input"
          />
        </div>
      </div>
      <div className="update-password-container">
        <h2 className="update-password-title">Update Password</h2>
        <div className="update-password-field">
          <label htmlFor="current-password">Current Password</label>
          <input
            type="password"
            id="current-password"
            placeholder="Enter your current password"
            value={currentPassword}
            onChange={handleCurrentPasswordChange}
            className="password-input"
          />
        </div>
        <div className="update-password-field">
          <label htmlFor="new-password">New Password</label>
          <input
            type="password"
            id="new-password"
            placeholder="Enter your new password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            className="password-input"
          />
        </div>
        <div className="update-password-field">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm your new password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="password-input"
          />
        </div>
      </div>
    </div>
  );
};

export default ManageProfile;
