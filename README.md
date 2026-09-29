# Bake Studio By Nandi's — Official Website

> A modern, responsive website built for a local bakery to establish their online presence, showcase their products, and drive online orders.

---

## 📌 About the Project

**Bake Studio By Nandi's** is a well-established, highly-rated local bakery (4.3★ with 60+ Google reviews) located in Khatauli, Muzaffarnagar, Uttar Pradesh. Despite having a loyal customer base and a strong reputation for fresh cakes, pastries, and savory snacks, the bakery previously lacked an official digital presence.

This project was built to give the business a modern web platform to:
- Establish a professional online brand identity.
- Showcase their freshly baked product menu and studio gallery.
- Provide essential business information (location, operating hours, pricing).
- Route customers directly to online ordering platforms (**Zomato**, **Swiggy**, and **WhatsApp**).

---

## ✨ Features

- **Hero Section**: Premium visual presentation featuring business branding in English & Hindi (*बेक स्टूडियो बाय नंदी'स*), Google rating badge (4.3★), tagline, and quick call/order action buttons.
- **About Section**: Detailed story of the bakery, location highlights, opening hours (open until 10 PM), and pocket-friendly price range (₹200–₹400 per person).
- **Menu Highlights**: Filterable categories (*Cakes, Pastries, Snacks like Vada Pav & Dhokla Sandwich, Breads, Custom Cakes*) with pricing and descriptions.
- **Visual Studio Gallery**: Interactive photo grid showcasing interior display, custom cakes, and fresh pastries with a lightbox preview.
- **Why Choose Us**: Value proposition cards highlighting custom cake orders, pre-order options, event bulk delivery, and 100% hygienic preparation.
- **Customer Reviews**: Highlighted Google review snippets from verified local patrons and rating summary.
- **Order Online Section**: Dedicated branded cards for **Zomato**, **Swiggy**, and direct instant ordering via **WhatsApp** (`wa.me/916399303303`).
- **Location & Contact**: Embedded Google Map, clickable phone calling link (`063993 03303`), business hours, and Google Maps directions button.
- **Fully Responsive & Fast**: Optimized for all device sizes (mobile, tablet, desktop) with smooth scroll navigation and a glassmorphism sticky header.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts via `next/font` (*Playfair Display* for serif headings & *Plus Jakarta Sans* for body text)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.17.0` or higher
- **npm**: `v9.0.0` or higher

### Installation & Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/CodeCraftIqra/BakeStudioByNandi.git
   cd BakeStudioByNandi
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **View in Browser**  
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the live website.

---

## 📁 Project Structure

```text
BakeStudioByNandi's/
├── public/
│   └── images/               # Bakery images (hero, menu cards, gallery grid)
├── src/
│   ├── app/
│   │   ├── globals.css       # Tailwind configuration & theme styles
│   │   ├── layout.tsx        # Root layout & Google Fonts integration
│   │   └── page.tsx          # Main single-page application entry
│   └── components/
│       ├── Navbar.tsx        # Sticky header & mobile menu drawer
│       ├── Hero.tsx          # Hero section with rating badge & CTAs
│       ├── About.tsx         # Business overview & key highlights
│       ├── Menu.tsx          # Interactive menu grid & category filters
│       ├── Gallery.tsx       # Photo grid gallery with lightbox modal
│       ├── WhyUs.tsx         # Feature highlight cards
│       ├── Reviews.tsx       # Google customer review cards
│       ├── OrderOnline.tsx   # Zomato, Swiggy & WhatsApp order links
│       ├── LocationContact.tsx# Embedded map, address & contact info
│       └── Footer.tsx        # Footer links & copyright notice
├── package.json
├── tsconfig.json
└── README.md
```

---

## 📸 Screenshots

<img width="1896" height="897" alt="image" src="https://github.com/user-attachments/assets/a11946f7-a713-453b-80d6-c8e04c3adb4c" />


---

## 👩‍💻 Author

Built with ❤️ by **Iqra**  
- **GitHub**: [@CodeCraftIqra](https://github.com/CodeCraftIqra)
