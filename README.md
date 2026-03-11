# ✍️ Post Generator

> An AI-powered social media post generator that instantly crafts platform-optimized content for LinkedIn, Facebook, and Twitter — from a single prompt.

**🌐 Live Demo:** [post-generator-xi.vercel.app](https://post-generator-xi.vercel.app)

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Deployment](#deployment)
- [License](#license)

---

## About

**Post Generator** eliminates the time and effort spent crafting social media content. Enter a topic or idea, select your target platforms, and receive tailored, ready-to-publish posts in seconds. Each post is automatically adapted to suit the tone, format, and character expectations of its platform.

---

## ✨ Features

- 🤖 **AI-powered generation** — produces engaging, platform-aware posts from a simple text prompt
- 🎯 **Multi-platform support** — generate posts for LinkedIn, Facebook, and Twitter simultaneously
- ⚡ **Instant results** — no sign-up or configuration required; works right in the browser
- 📋 **Copy-ready output** — generated posts are formatted and ready to paste directly into any platform
- 🎨 **Clean, minimal UI** — distraction-free interface focused on speed and usability
- 📱 **Responsive design** — works seamlessly on desktop and mobile

---

## 🖥 Demo

| Step | Action |
|---|---|
| 1 | Enter your topic or idea in the prompt field |
| 2 | Select one or more target platforms (LinkedIn, Facebook, Twitter) |
| 3 | Click **Generate** |
| 4 | Copy your ready-made post and publish! |

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure & markup |
| CSS3 | Styling & responsive layout |
| JavaScript (ES6+) | Application logic & API integration |
| AI / LLM API | Post content generation |
| [Vercel](https://vercel.com/) | Hosting & deployment |

> No frameworks, no build tools — pure vanilla web stack for maximum simplicity and performance.

---

## 🚀 Getting Started

Since this project uses only vanilla HTML, CSS, and JavaScript, there is no build step required.

### Prerequisites

- A modern web browser
- A code editor (e.g., [VS Code](https://code.visualstudio.com/))
- An API key for the AI service used (if running locally)

### Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/Adityaram544/post-generator.git
   cd post-generator
   ```

2. **Configure your API key**

   Open `script.js` and replace the placeholder with your actual API key:
   ```js
   const API_KEY = "your_api_key_here";
   ```

3. **Open in browser**

   Simply open `index.html` in your browser:
   ```bash
   # macOS
   open index.html

   # Windows
   start index.html

   # Or drag-and-drop into any browser
   ```

   No server or `npm install` needed.

---

## 📁 Project Structure

```
post-generator/
├── index.html      # App layout and UI structure
├── style.css       # Styling and responsive design
├── script.js       # AI API calls and post generation logic
└── README.md       # Project documentation
```

---

## ⚙️ How It Works

1. The user enters a prompt (topic, idea, or keyword) into the input field
2. One or more social platforms are selected as targets
3. On clicking **Generate**, `script.js` sends the prompt — along with platform-specific instructions — to an AI API
4. The API responds with platform-optimized posts, which are rendered in the UI
5. The user can copy each post and publish it directly

Each platform has its own generation context:
- **LinkedIn** — professional tone, longer form, may include hashtags
- **Facebook** — conversational tone, engaging and shareable
- **Twitter** — concise, punchy, within character limits

---

## 🌍 Deployment

This project is deployed on **Vercel** with zero configuration.

To deploy your own fork:

1. Push the project to your GitHub account
2. Visit [vercel.com](https://vercel.com) and import your repository
3. Vercel detects it as a static site automatically — no settings needed
4. Your app goes live instantly at a `.vercel.app` URL

> ⚠️ **Security Note:** Never commit API keys to a public repository. For production, store keys in environment variables or proxy requests through a backend server.

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/Adityaram544">Aditya Ram</a></p>
  <p>
    <a href="https://post-generator-xi.vercel.app">🌐 Live Site</a> •
    <a href="https://github.com/Adityaram544/post-generator/issues">🐛 Report Bug</a> •
    <a href="https://github.com/Adityaram544/post-generator/issues">💡 Request Feature</a>
  </p>
</div>
