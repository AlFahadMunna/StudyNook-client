# 📚 StudyNook - Frontend

A modern, responsive Next.js application for booking library study rooms. Built with Next.js 16.2, Hero UI, and better-auth for a seamless user experience.

## 👨‍💻 Developer Information

**Name:** Md Al Fahad  
**GitHub:** [@AlFahadMunna](https://github.com/AlFahadMunna)  
**Batch:** Programming Hero - Batch 13  
**Assignment:** Assignment 09

---

## 🌐 Live Demo

**Live Site:** [https://study-nook-client-mdalfahad.vercel.app/](https://study-nook-client-mdalfahad.vercel.app/)  
**GitHub Repository:** [https://github.com/AlFahadMunna/StudyNook-client](https://github.com/AlFahadMunna/StudyNook-client)

### Home Page

_Hero section with call-to-action and featured rooms_

### All Rooms with Filters

_Search and filter functionality with beautiful card grid_

### Room Details & Booking

_Complete room information with booking modal_

### My Bookings Dashboard

_User's booking history with cancel option_

### My Listing Dashboard

_User's listed study rooms with update and delete management options_

### Dark Mode

_Beautiful dark theme for comfortable browsing_

---

## ✨ Key Features

### 🔐 Authentication & Authorization

- **Secure Authentication:** Integrated better-auth with email/password and Google OAuth
- **HTTP-only Cookies:** JWT tokens stored securely in cookies for maximum security
- **Protected Routes:** Automatic redirect for unauthorized access
- **Persistent Sessions:** Users remain logged in across page reloads

### 🏠 Room Management

- **Browse Rooms:** View all available study rooms with beautiful card layouts
- **Add Your Room:** List your own study rooms for others to book
- **Edit & Delete:** Full control over your room listings (owner-only)
- **My Listings:** Dedicated dashboard to manage all your rooms

### 📅 Smart Booking System

- **Real-time Conflict Detection:** Prevents double bookings automatically
- **Date & Time Selection:** Intuitive date picker with hourly time slots
- **Cost Calculator:** Automatic total cost calculation based on duration
- **My Bookings:** Track all your current and past bookings
- **Cancel Bookings:** Easy cancellation with confirmation modal

### 🔍 Advanced Search & Filter

- **Search by Name:** Find rooms quickly with instant search
- **Filter by Amenities:** Wi-Fi, Projector, Whiteboard, and more
- **Price Range Filter:** Set minimum and maximum hourly rates
- **Real-time Results:** Filters apply instantly without page reload

### 🎨 Modern UI/UX

- **Hero UI Components:** Beautiful, accessible components from Hero UI v3
- **Dark/Light Theme:** Toggle between themes with next-themes
- **Responsive Design:** Perfect experience on mobile, tablet, and desktop
- **Smooth Animations:** Powered by Framer Motion for delightful interactions
- **Toast Notifications:** Non-intrusive feedback with react-hot-toast

---

## 🛠️ Technology Stack

### Core Technologies

- **Framework:** Next.js 16.2 (App Router)
- **React:** React 19.2.4
- **Language:** JavaScript/JSX
- **Styling:** Tailwind CSS

### UI & Design

- **Component Library:** Hero UI v3.0.5
- **Icons:** React Icons v5.6.0
- **Theme Management:** next-themes v0.4.6
- **Animations:** Framer Motion v12.38.0

### Authentication & Database

- **Auth:** better-auth v1.6.11 with MongoDB adapter
- **Database Driver:** MongoDB v7.2.0
- **Session Management:** HTTP-only cookies with JWT

### User Experience

- **Notifications:** react-hot-toast v2.6.0
- **Form Handling:** Built-in validation
- **State Management:** React Context API
