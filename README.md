# 💝 Valentine's Day Website 2026 💝

[![Stars](https://img.shields.io/github/stars/End2EndAI/valentine-website-2025?style=social)](https://github.com/End2EndAI/valentine-website-2025/stargazers)
[![Fork](https://img.shields.io/github/forks/End2EndAI/valentine-website-2025?style=social)](https://github.com/End2EndAI/valentine-website-2025/fork)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Tweet](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2FEnd2EndAI%2Fvalentine-website-2025)](https://twitter.com/intent/tweet?text=%F0%9F%92%9D%20Create%20your%20own%20Valentine%27s%20website%20for%20free%21%20No%20coding%20required%21%0A%F0%9F%8E%81%20Fully%20customizable%2C%20easy%20to%20deploy%20with%20your%20own%20website%20name%0A%E2%9C%A8%20Try%20it%20now%3A%20https%3A%2F%2Fgithub.com%2FEnd2EndAI%2Fvalentine-website-2026%0A%23ValentinesDay2025%20%23WebDev%20%23GitHub%20%23Love)

A beautiful, interactive Valentine's Day website generator to ask your special someone to be your Valentine! Create your own personalized version in minutes. Perfect for Valentine's Day 2026! 💝

🌟 **[Live Demo](https://end2endai.github.io/valentine-website-2026)** | 🚀 **[Quick Start](#-quick-start-guide)** | 🌐 **[Deploy Your Website](#4-make-it-live-get-your-online-website-url)**

## 🌟 Share The Love

Help others find this project:
- 🔥 Follow on instagram for more websites or share other ideas : [Instagram](https://www.instagram.com/ai_cute_apps/)
- ⭐ Star this repository if you like it
- 🔄 Fork it to create your own version
- 📢 Share on your social media
- 📱 Show your creation to friends

### 📣 Share on Social Media

Ready-to-use messages for sharing:

**Twitter/X**
```
💝 Create your own Valentine's website for free! No coding required!
🎁 Fully customizable, easy to deploy with your own website name
✨ Try it now: https://github.com/End2EndAI/valentine-website-2026
#ValentinesDay2026 #WebDev #GitHub #Love
```

**Instagram/Facebook**
```
💝 Make Valentine's Day 2026 unforgettable!
Create your own interactive Valentine's website in minutes - completely FREE!
✨ No coding required
🎨 Fully customizable
🌐 Get your own website link

Try it now: https://github.com/End2EndAI/valentine-website-2025
#ValentinesDay2026 #Love #WebDev #CodingWithLove
```

**Reddit (r/webdev, r/coding)**
```
[Project] 💝 Valentine's Website Generator - Free & Open Source

I created a free, open-source Valentine's website generator that lets anyone create their own interactive Valentine's proposal website. No coding required!

- 🎨 Fully customizable
- 💝 Interactive elements
- 🚀 Easy deployment
- 📱 Mobile-friendly
- 💯 Free forever

Demo: https://end2endai.github.io/valentine-website-2025
GitHub: https://github.com/End2EndAI/valentine-website-2025
```

## ✨ Features
- 💖 Floating hearts and bears
- 🎯 Interactive questions
- 📏 Love meter that goes beyond 100%
- 🏃‍♂️ Playful buttons that run away
- 🎁 Hidden answer for the first question, "Do you like me?"
- 🎉 Grand celebration when they say yes!

## 🚀 Quick Start Guide

### 1. Get Your Own Copy
1. Click the "Fork" button at the top right of this page
2. Wait a few seconds while GitHub creates your copy
3. You now have your own version of the code!

Note: Make sure you're logged into your GitHub account. If you don't have one, you can [create a free account here](https://github.com/signup).

### 2. Customize for Your Valentine

#### Easy Way (Recommended)
1. In your new repository, click on `config.js`
2. Click the pencil icon (✏️) to edit
3. Change the values to personalize your website
4. Click "Commit changes" at the bottom

Here's what you can customize in `config.js`:
```javascript
// Basic Information
valentineName: "NEHA"                    // Your Valentine's name
pageTitle: "Will You Be My Valentine? 💝" // Browser tab title

// Floating Background Elements
floatingEmojis: {
    hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis in background
    bears: ['🧸', '🐻']                       // Bear emojis in background
}

// Questions and Buttons
questions: {
    first: {
        text: "Do you like me?",                   // First question
        yesBtn: "Yes",                             // Yes button text
        noBtn: "No",                               // No button text
        secretAnswer: "I don't like you, I love you! ❤️"  // Hidden message
    },
    second: {
        text: "How much do you love me?",          // Second question
        startText: "This much!",                   // Text before percentage
        nextBtn: "Next ❤️"                         // Next button text
    },
    third: {
        text: "Will you be my Valentine...?",      // Final question
        yesBtn: "Yes!",                            // Yes button text
        noBtn: "No"                                // No button text
    }
}

// Love Meter Messages
loveMessages: {
    extreme: "WOOOOW You love me that much?? 🥰🚀💝",  // Shows above 5000%
    high: "To infinity and beyond! 🚀💝",              // Shows above 1000%
    normal: "And beyond! 🥰"                           // Shows above 100%
}

// Final Celebration
celebration: {
    title: "Yay! I'm the luckiest person...",     // Celebration title
    message: "Now come get your gift...",          // Celebration message
    emojis: "🎁💖🤗💝💋❤️💕"                        // Celebration emojis
}

// Website Colors
colors: {
    backgroundStart: "#ffafbd",      // Background gradient start
    backgroundEnd: "#ffc3a0",        // Background gradient end
    buttonBackground: "#ff6b6b",     // Button color
    buttonHover: "#ff8787",          // Button hover color
    textColor: "#ff4757"            // Text color
}

// Animation Settings
animations: {
    floatDuration: "15s",           // How long hearts float (10-20s)
    floatDistance: "50px",          // Sideways movement (30-70px)
    bounceSpeed: "0.5s",            // Bounce animation speed (0.3-0.7s)
    heartExplosionSize: 1.5         // Final heart explosion size (1.2-2.0)
}

// Music Settings
music: {
    enabled: true, // Music feature is enabled
    autoplay: true, // Try to autoplay (note: some browsers may block this)
    musicUrl: "YOUR_CLOUDINARY_URL_HERE", // Paste your music URL here
    startText: "🎵 Play Music", // Button text to start music
    stopText: "🔇 Stop Music", // Button text to stop music
    volume: 0.5 // Volume level (0.0 to 1.0)
}
```

### 3. Adding Your Own Background Music 🎵

Want to make it extra special with your own romantic song? Follow these steps to add background music:

1. **Get a Cloudinary Account (Free):**
   - Go to [Cloudinary.com](https://cloudinary.com) and sign up for a free account

2. **Upload Your Music:**
   - Log in to your Cloudinary dashboard
   - Click on the "Upload" button in the top right
   - Select "Upload" from the dropdown menu
   - Choose your MP3 file (keep it under 10MB for better loading)
   - Wait for the upload to complete

3. **Get Your Music URL:**
   - After upload, find your music file in the Media Library
   - Click the "..." (more options) button on your music file
   - Click "Copy URL"
   - Select "Copy Original URL with options"
   - The URL should look like: `https://res.cloudinary.com/your-cloud-name/video/upload/v1234567890/your-file-name.mp3`

4. **Add to Your Website:**
   - Open `config.js`
   - Find the `music` section
   - Replace the `musicUrl` value with your Cloudinary URL

```javascript
music: {
    enabled: true,
    autoplay: true,
    musicUrl: "YOUR_CLOUDINARY_URL_HERE", // Paste your URL here
    startText: "🎵 Play Music",
    stopText: "🔇 Stop Music",
    volume: 0.5
}
```

### 4. Make It Live! (Get your online website URL)

#### Using GitHub Pages (Free)
1. Go to your repository's "Settings"
2. Click "Pages" in the left sidebar
3. Under "Source", select "main" branch
4. Click "Save"
5. Wait a few minutes
6. Your site will be live at: `https://your-username.github.io/repository-name`

#### Using Netlify (Free, Recommended, Custom URL)
1. Go to [Netlify](https://www.netlify.com/)
2. Sign up for a free account
3. Click "Add new site" → "Import an existing project"
4. Choose your GitHub repository
5. Click "Deploy site"
6. Once deployed, click "Domain settings"
7. Choose a custom domain (e.g., `my-valentine-2025.netlify.app`)

## 💡 Tips
- Test the website before sending it to your Valentine
- Try all the buttons and interactions
- Check how it looks on mobile phones
- Keep the secret message subtle (bottom-right corner)

## 🎨 Want Different Colors?
Use these tools to find beautiful colors:
- [Coolors](https://coolors.co/) - Color palette generator
- [ColorHunt](https://colorhunt.co/) - Color palettes

## 🔍 Need More Emojis?
Find more emojis at:
- [EmojiKeyboard](https://emojikeyboard.top/fr/)
- [Emojipedia](https://emojipedia.org/)

## 🤝 Need Help?
- Create an issue in this repository
- Check existing issues for solutions
- Contact me through GitHub

## 💖 Credits
Created with love for Valentine's Day 2025.
Feel free to use and modify for your special someone!

\- Louis Fontaine -

## 📜 License
MIT License - Feel free to use this for your Valentine! 
