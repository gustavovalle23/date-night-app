### **Date Night Ideas App** ❤️

Welcome to the **Date Night Ideas App**—a fun and interactive way to discover creative date night ideas tailored to your preferences! This project was built with love as part of my journey to **build in public**. 🌟

---

## **Features**
- 🎭 **Personalized Date Ideas**: Suggestions based on your chosen mood, weather, and budget.
- 💡 **Randomized Inspiration**: Each suggestion is unique and creatively tailored to your input.
- 💻 **Server-Side Processing**: Dynamic idea generation powered by a decision tree, optimized for performance.
- 🌟 **Polished UI**: Styled with a romantic vibe, featuring smooth animations and a clean layout.
- 🫶 **Build in Public**: Open-source and built transparently for the world to see and learn from!

---

## **Technologies Used**
- **Next.js 15**: Leveraging the power of the `app` directory for server-side rendering and API routes.
- **TypeScript**: Ensuring type safety and scalability.
- **Tailwind CSS**: For responsive and polished styling.
- **Framer Motion**: Adding smooth animations for an engaging user experience.

---

## **Getting Started**

### **1. Clone the Repository**
```bash
git clone https://github.com/gustavovalle23/date-night-app.git
cd date-night-app
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Run the App Locally**
```bash
npm run dev
```
Visit `http://localhost:3000` in your browser.

---

## **Project Structure**
```bash
app/
├── api/
│   └── suggestion/
│       └── route.ts      # API route for suggestion generation
├── components/
│   ├── DateForm.tsx      # Form for user inputs (mood, weather, budget)
│   ├── DateSuggestion.tsx# Displays the generated suggestion
│   ├── FloatingHearts.tsx# Adds romantic animations
│   └── Layout.tsx        # App layout with social links
├── favicon.ico
├── globals.css           # Global styles
├── layout.tsx            # Root layout for Next.js
└── page.tsx              # Main page with client-server integration
```

---

## **API Endpoints**

### **GET /api/suggestion**
Generates a personalized date idea based on the provided query parameters.

**Query Parameters**:
- `mood` (required): e.g., `romantic`, `adventurous`, `cozy`
- `weather` (required): e.g., `sunny`, `rainy`, `snowy`
- `budget` (required): e.g., `low`, `medium`, `high`

**Example Request**:
```bash
GET /api/suggestion?mood=romantic&weather=sunny&budget=medium
```

**Example Response**:
```json
{
  "suggestion": "Picnic with wine and cheese in the countryside."
}
```

---

## **Social Media**
This project is part of my effort to **build in public**. Follow me to see my journey:

- 🐙 [GitHub](https://github.com/gustavovalle23)
- 💼 [LinkedIn](https://www.linkedin.com/in/gustavovalle-tech)
- 📸 [Instagram](https://www.instagram.com/gustavovalledev/)

---

## **Contributing**
Contributions are welcome! 🎉 If you have ideas to improve the app or want to add more features, feel free to fork the repo and open a pull request.

---

## **License**
This project is open-source and available under the [MIT License](LICENSE).

---

## **Acknowledgments**
- 💡 Inspired by the idea of making tech accessible and creative.
- 🚀 Built with the intention to share knowledge and grow with the developer community.

---

Thank you for checking out my project! ❤️ I hope it inspires you to create something amazing.
