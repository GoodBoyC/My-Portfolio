# 📝 How to Update Your Portfolio

This guide shows you exactly where to add new designs, images, and project stories.

---

## 🖼️ STEP 1: Add Your Image Files

### Location:
```
public/images/
```

### How to Name Your Images:
Use this format: **`client-name.jpg`** or **`client-name.png`**

**Rules:**
- ✅ All **lowercase** letters
- ✅ Use **hyphens** between words (no spaces)
- ✅ Keep it **short and clear**

**Examples:**
| Client Name | File Name |
|-------------|-----------|
| De Tasty Fastfood | `de-tasty.jpg` |
| Favy's Zobo Drink | `favys-zobo.jpg` |
| Rachikelly Perfumes | `rachikelly.jpg` |
| Harry Dynasty Logistics | `harry-dynasty.jpg` |

### Image Requirements:
- **Format:** JPG or PNG
- **Size:** At least 800px wide (bigger is better)
- **Quality:** Clear, not blurry

---

## ✍️ STEP 2: Add Your Project Details

### Location:
```
src/data.ts
```

### Find This Section:
Look for the line that says:
```javascript
export const projects = [
```

### Add Your New Project Here:

Copy this template and paste it **at the top** of the projects list (after the `[`):

```javascript
{
  title: "Your Project Name — What It Is",
  client: "Client Name",
  category: "Logo Design", // or: Print Design, Social Media, Packaging, etc.
  year: "2025",
  description:
    "Write 1-2 sentences describing what this project is. What did you create? What does it show?",
  image: "/images/your-image-filename.jpg",
  accent: "from-gray-600 to-gray-800", // Color options below
  story: {
    problem:
      "What problem did the client have? What did they need you to solve?",
    solution:
      "What did you create to solve their problem? Describe your design.",
    designThinking:
      "Why did you make these design choices? Explain your color, layout, typography decisions.",
    clientNote:
      "This design was exactly what [Client Name] needed — describe the result or benefit they got.",
  },
},
```

### Color Options for `accent`:
Choose one of these based on your design's main color:

```javascript
// Red designs (food, drinks, bold brands)
accent: "from-red-600 to-red-800"

// Green designs (health, wellness, natural products)
accent: "from-green-600 to-emerald-700"

// Orange/Amber designs (energy, warmth, creativity)
accent: "from-amber-600 to-orange-700"

// Pink designs (beauty, cosmetics, feminine brands)
accent: "from-pink-600 to-pink-800"

// Blue designs (corporate, tech, professional)
accent: "from-blue-600 to-blue-800"

// Purple designs (luxury, creativity, premium)
accent: "from-purple-600 to-purple-800"

// Neutral/Grey designs (minimal, corporate, clean)
accent: "from-gray-600 to-gray-800"
```

---

## 📋 STEP 3: Complete Example

Here's a real example you can follow:

```javascript
{
  title: "De Tasty Fastfood & Bar — Menu Flyer",
  client: "De Tasty Fastfood & Bar",
  category: "Print Design",
  year: "2025",
  description:
    "A vibrant restaurant menu flyer showcasing Nigerian fast food and bar offerings. Bold red background creates appetite appeal, circular food photos highlight key dishes, and a clear drink lineup shows beverage options.",
  image: "/images/de-tasty.jpg",
  accent: "from-red-600 to-red-800",
  story: {
    problem:
      "The restaurant needed a menu flyer that could work both as a printed handout and social media post — something that would make people hungry and drive immediate orders.",
    solution:
      "I used a bold red color scheme (known to stimulate appetite), arranged food photos in overlapping circles for visual interest, and organized the menu into scannable columns.",
    designThinking:
      "Red is the #1 color for food brands — it creates urgency and appetite. The circular photo frames feel friendly and approachable. Showing both food AND drinks communicates they're a full restaurant + bar.",
    clientNote:
      "This flyer was exactly what De Tasty needed — an eye-catching menu that makes people want to order immediately.",
  },
},
```

---

## 🚀 STEP 4: Save and Rebuild

### If Working Locally:
1. Save the `src/data.ts` file
2. Run: `npm run build`
3. Your portfolio updates automatically!

### If Deployed (Vercel, Netlify, etc.):
1. Save the `src/data.ts` file
2. Commit and push to GitHub:
   ```
   git add .
   git commit -m "Added new project: [Project Name]"
   git push
   ```
3. Your site will auto-redeploy with the new project!

---

## ✅ Quick Checklist for Each New Project

| Step | Task | Done? |
|------|------|-------|
| 1 | Save image as `client-name.jpg` | ☐ |
| 2 | Put image in `public/images/` folder | ☐ |
| 3 | Copy project template | ☐ |
| 4 | Fill in all details | ☐ |
| 5 | Choose accent color | ☐ |
| 6 | Paste at top of projects list | ☐ |
| 7 | Save `src/data.ts` | ☐ |
| 8 | Rebuild/push to GitHub | ☐ |

---

## 📁 File Structure Overview

```
your-portfolio/
│
├── public/
│   └── images/              ← 📍 ADD IMAGES HERE
│       ├── de-tasty.jpg
│       ├── favys-zobo.jpg
│       └── ...
│
├── src/
│   ├── data.ts              ← 📍 ADD PROJECT DETAILS HERE
│   ├── components/
│   └── ...
│
├── HOW_TO_UPDATE_PORTFOLIO.md  ← 📖 This guide!
└── ...
```

---

## 💡 Tips for Great Project Descriptions

### Description (1-2 sentences):
- What did you create?
- What does it show?
- What's the main visual element?

**Example:**
> "A vibrant restaurant menu flyer showcasing Nigerian fast food and bar offerings. Bold red background creates appetite appeal, circular food photos highlight key dishes."

### Problem:
- What did the client need?
- What challenge were they facing?

**Example:**
> "The restaurant needed a menu flyer that could work both as a printed handout and social media post."

### Solution:
- What did you create?
- How did you solve their problem?

**Example:**
> "I used a bold red color scheme, arranged food photos in overlapping circles, and organized the menu into scannable columns."

### Design Thinking:
- Why these colors?
- Why this layout?
- What psychology or strategy behind it?

**Example:**
> "Red is the #1 color for food brands — it creates urgency and appetite. The circular photo frames feel friendly and approachable."

### Client Note:
- What was the result?
- How did it help them?

**Example:**
> "This flyer was exactly what De Tasty needed — an eye-catching menu that makes people want to order immediately."

---

## ❓ Need Help?

If you get stuck:
1. Check this guide first
2. Look at existing projects in `src/data.ts` for examples
3. Make sure image filenames match exactly (case-sensitive!)

---

**Good luck!** Your portfolio grows with every project you add. 🚀
