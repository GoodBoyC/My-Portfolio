# 🚀 Quick Start: Add a New Project in 5 Minutes

## 📁 Step 1: Save Your Image (1 min)

**Location:** `public/images/`

**Name it:** `client-name.jpg`

Example: `de-tasty.jpg`

---

## ✏️ Step 2: Open the Code (30 sec)

**File:** `src/data.ts`

**Find:** Line 79 (search for `export const projects = [`)

---

## 📋 Step 3: Copy This Template (30 sec)

```javascript
{
  title: "Project Name — What It Is",
  client: "Client Name",
  category: "Print Design",
  year: "2025",
  description:
    "Describe what you created in 1-2 sentences.",
  image: "/images/your-image.jpg",
  accent: "from-gray-600 to-gray-800",
  story: {
    problem:
      "What problem did the client have?",
    solution:
      "What did you create to solve it?",
    designThinking:
      "Why these colors, layout, typography?",
    clientNote:
      "This design was exactly what [Client] needed.",
  },
},
```

---

## ✍️ Step 4: Fill It In (2 min)

Paste the template **right after line 79** and fill in your details.

**Color Options:**
- Red designs: `from-red-600 to-red-800`
- Green designs: `from-green-600 to-emerald-700`
- Orange designs: `from-amber-600 to-orange-700`
- Pink designs: `from-pink-600 to-pink-800`
- Blue designs: `from-blue-600 to-blue-800`
- Purple designs: `from-purple-600 to-purple-800`
- Grey designs: `from-gray-600 to-gray-800`

---

## 💾 Step 5: Save & Build (1 min)

```bash
npm run build
```

Or push to GitHub and it deploys automatically!

---

## ✅ Done!

Your new project is live! 🎉

---

## 📖 Need More Help?

See `HOW_TO_UPDATE_PORTFOLIO.md` for detailed examples and tips.
