# ScholarSpark - AI Research Intelligence Platform

A modern, interactive investor landing page for ScholarSpark, an AI-native platform that unifies the entire research workflow.

## 🚀 Features

- **Interactive SVG Background**: Dynamic geometric patterns that respond to cursor movement
- **Glassmorphism Design**: Modern UI with subtle transparency and blur effects
- **Responsive Layout**: Optimized for all device sizes
- **Smooth Animations**: Powered by Framer Motion
- **Modern Tech Stack**: React, TypeScript, Tailwind CSS, Vite

## 🎨 Design Highlights

- **Primary Color**: `#8F8EDF` (Custom purple)
- **Background**: `#25252D` (Dark theme)
- **Interactive Elements**: Cursor-following spotlight effects
- **Typography**: Clean, modern font hierarchy
- **Components**: Modular, reusable React components

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Package Manager**: Yarn/NPM
- **Icons**: Lucide React

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/scholar-spark.git
cd scholar-spark
```

2. Install dependencies:

```bash
yarn install
# or
npm install
```

3. Start the development server:

```bash
yarn dev
# or
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🏗️ Project Structure

```
scholar-spark/
├── src/
│   ├── components/
│   │   ├── generated/          # Main landing page components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── SolutionSection.tsx
│   │   │   └── ScholarSparkInvestorLandingPage.tsx
│   │   ├── AnimatedGeometricBackground.tsx
│   │   ├── GeometricBackground.tsx
│   │   └── BackgroundDemo.tsx
│   ├── hooks/
│   ├── lib/
│   ├── settings/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── package.json
└── README.md
```

## 🎯 Key Components

### HeroSection.tsx

- Interactive SVG background with cursor tracking
- Metatron's Cube geometric pattern
- Spotlight effect that follows mouse movement
- Responsive hero content

### Header.tsx

- Glassmorphism navigation bar
- Smooth animations and transitions
- Mobile-responsive menu

### SolutionSection.tsx

- Feature showcase with animated cards
- Interactive hover effects
- Gradient backgrounds and modern styling

## 🎨 Customization

### Colors

The primary color scheme can be customized by updating the `#8F8EDF` color throughout the codebase:

- Primary: `#8F8EDF`
- Hover: `#7A79C9`
- Background: `#25252D`

### SVG Patterns

The interactive background uses a custom SVG pattern that can be modified in `HeroSection.tsx`.

## 📱 Responsive Design

The landing page is fully responsive and optimized for:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch

### Netlify

1. Build the project: `yarn build`
2. Deploy the `dist` folder

### GitHub Pages

1. Add GitHub Pages workflow
2. Deploy from the `dist` folder

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is proprietary software for ScholarSpark.

## 👨‍💻 Author

**Pouya Ataei** - Founder & CEO of ScholarSpark

- PhD in AI Research
- 10+ years in machine learning and NLP
- Former AI Research Scientist

## 📞 Contact

- **Email**: pouya.ataei@scholarspark.ai
- **Website**: [ScholarSpark](https://scholarspark.ai)

---

Built with ❤️ for the future of AI-powered research.
