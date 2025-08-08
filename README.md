# Roamio 🌍✈️

**Roamio** is a static travel destination website designed to inspire and guide travelers to explore the most stunning destinations around the world.  
It functions as both a **travel blog** and a **resource hub**, featuring:
- Detailed destination guides
- Practical travel tips
- Stunning image galleries
- Contact and about information  

Built with **HTML, CSS (Bootstrap)**, and **Vanilla JavaScript**, Roamio offers a **mobile-first, responsive design** for an intuitive and visually appealing user experience.

---

## 📸 Live Demo
[**View Website**](#https://sid16p.github.io/Roamio/)

---

## 📑 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Pages & Content](#pages--content)
- [System Architecture](#system-architecture)
- [Tech Stack](#tech-stack)
- [Performance Optimizations](#performance-optimizations)
- [Installation & Setup](#installation--setup)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## 📜 Overview
Roamio aims to be a **travel companion** for wanderlust enthusiasts, delivering a mix of **destination inspiration** and **practical travel advice**.  

The website is:
- **Static** for speed and simplicity
- **Responsive** for desktop and mobile devices
- **Easy to maintain** thanks to static data stored in JavaScript

---

## ✨ Features
- **Fully Responsive Design** (Mobile-first using Bootstrap 5)
- **Destination Search & Filtering**
- **Travel Tips Library**
- **Beautiful Image Gallery**
- **Lazy Loading Images** for better performance
- **Interactive Navigation Menu** (Collapsible on mobile)
- **Contact Form with Validation**
- **Optimized for Fast Loading** with CDN & Image Optimization

---

## 🗺 Pages & Content

### 1. **Home Page**
- Hero banner with an inviting travel tagline
- Featured destinations carousel
- Quick links to popular pages (Destinations, Tips, Gallery)
- Inspirational travel quotes
- Call-to-action buttons (“Explore Now”)

---

### 2. **Destinations Page**
- Grid/list of travel destinations with images, short descriptions, and location info
- Search bar and category filters (Beach, City, Mountain, etc.)
- “Read More” button linking to **Destination Details**
- Responsive layout for desktop/mobile

---

### 3. **Destination Details Page**
- Full description of a chosen destination
- Image gallery specific to the location
- Travel highlights (Best Time to Visit, Must-See Spots, Local Food)
- Embedded map for location reference

---

### 4. **Tips Page**
- Travel tips organized into categories:
  - Packing Tips
  - Budget Travel
  - Safety Advice
  - Destination-Specific Guidance
- Each tip displayed as a card with a title, short description, and “Read More”
- Featured tips highlighted at the top

---

### 5. **Gallery Page**
- Masonry/grid photo layout
- Lightbox view for fullscreen image browsing
- Category filters (Nature, Cities, Culture, Food)
- Lazy loading for faster browsing

---

### 6. **About Page**
- Story behind Roamio
- Mission & vision
- Why we love travel
- Meet the team section

---

### 7. **Contact Page**
- Contact form (Name, Email, Message) with form validation
- Social media links
- Business email address

---

## 🏗 System Architecture

**Frontend Architecture**
- Static HTML files: `index.html`, `destinations.html`, `tips.html`, `about.html`, `contact.html`, `gallery.html`, `destination-details.html`
- **Bootstrap 5.3.0** for responsive grid and components
- **Font Awesome 6.4.0** for icons
- Modular JavaScript:
  - `main.js` → Navigation, animations, form handling
  - `destinations.js` → Destination data & filtering
  - `tips.js` → Travel tips content management

**Content Management**
- All content stored in structured JS objects
- Template literals + DOM manipulation for rendering

**Responsive Design**
- Mobile-first approach with Bootstrap grid
- Additional custom media queries for fine-tuning

---

## 🛠 Tech Stack
- **HTML5**
- **CSS3** (Bootstrap 5 + custom CSS variables)
- **JavaScript (ES6+)**
- **Font Awesome** for icons
- **Pixabay API** for free, high-quality images

---

## ⚡ Performance Optimizations
- Bootstrap & Font Awesome loaded via **CDN**
- Images optimized and loaded lazily
- Static site for fast load times
- No server-side rendering needed

---

## 🚀 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Sid16p/Roamio.git   

# Navigate into project folder
cd Roamio

# Start local server (using live-server or http-server)
npx live-server

 Future Enhancements
- Dark mode toggle
- Multi-language support
- User accounts for saving favorite destinations
- Integration with Google Maps API for advanced location info
- Backend with headless CMS for easier content updates

📄 License
This project is licensed under the MIT License. You’re free to use and modify it.
