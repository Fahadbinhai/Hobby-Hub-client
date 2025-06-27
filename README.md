# 🎨 HobbyHub - A Local Hobby Group Organizer

HobbyHub is a community-driven platform that helps individuals discover, join, and create local hobby-based groups. Whether you're into painting, gaming, reading, or hiking – HobbyHub connects people through shared passions, making it easier to form meaningful connections offline.

### 🔗 Live Website:
👉 [Visit HobbyHub Live](https://hobby-hub-ca344.web.app/)

---

## 🚀 Features

- 🔐 **User Authentication**: Secure login and registration with email-password and Google Sign-In. Includes real-time validation and toast notifications.
- 📌 **Create & Manage Groups**: Authenticated users can create, update, and delete hobby groups, including features like category selection, member limit, and meeting schedule.
- 📄 **Group Details & Conditional Join**: Users can view group info and join if the start date hasn't passed. Otherwise, a warning is shown.
- 🎯 **Private Routes with Role-Based Views**: Certain routes like "Create Group", "My Groups", and "Group Details" are protected and only accessible to logged-in users.
- ✨ **Modern UI & Animations**: Implemented Lottie React animations, React Tooltip, and React Awesome Reveal for an interactive and engaging user experience.

---

## 📁 Project Structure

- **Client Side**  
  - Built with React.js, Tailwind CSS, React Router.
  - Hosted on Netlify.
  - Firebase Authentication.
  - Environment variables used to protect sensitive credentials.
  
- **Server Side**  
  - Built with Node.js, Express.js, MongoDB.
  - Hosted on Vercel.
  - CRUD API for managing hobby groups and user-specific data.

---

## 🛠️ Technologies Used

- React.js
- Tailwind CSS
- Firebase Auth
- MongoDB & Express.js
- React Router
- Lottie React
- React Tooltip
- React Awesome Reveal
- React Toastify

