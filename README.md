# 🧠 ADA — Algorithmic Design Assistant  
*A smart, shareable prompt-engineering partner inspired by Ada Lovelace*

---

## 🌟 What is ADA?

**ADA** (Algorithmic Design Assistant) is a personalized AI prompt engineer designed to help you:
- ✨ Turn vague ideas into structured, powerful prompts
- 💻 Design usable, safe, and expressive AI tools
- 📦 Share reusable prompt templates with others
- 🧰 Learn prompt engineering through structured thinking

This repo contains ADA’s core logic, schema, and interactive tools — designed to be easy to extend, remix, and teach from.

---

## 🔧 Key Features

- ✅ JSON-based input schema for structured prompt creation  
- ✍️ Output formats like JSON, Markdown, and plain text  
- 🧠 “Explain choices” mode for learning prompt design  
- 🪄 Template agents (e.g. WILL, FitCompass, PromptSmith)  
- 🧪 Gemini / ChatGPT–compatible  
- 🌐 React UI for filling out prompts and copying outputs (coming soon!)

---

## 👋 Who Is This For?

- New prompt engineers exploring AI more deeply  
- Pursuit fellows learning AI-native development  
- Creative technologists building ethical, useful tools  
- Educators teaching structured thinking through prompting

> Whether you're a beginner or a builder, ADA meets you where you are — and helps you grow.

---

## 🧱 How ADA Works

ADA takes in a structured JSON schema like this:

```json
{
  "idea": "A chatbot that gives daily writing inspiration",
  "tone": "uplifting and slightly poetic",
  "constraints": ["avoid cliches", "encourage emotional honesty"],
  "output_format": "Markdown",
  "explain_choices": true
}
