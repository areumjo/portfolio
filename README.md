# Areum Jo - Portfolio

Modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- ✨ Modern, clean design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Static site generation for fast loading
- 🎨 Tailwind CSS for styling
- 📊 5 featured projects with detailed case studies
- 🔍 SEO optimized
- 📄 GitHub Pages ready

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Deployment:** GitHub Pages (static export)

## 📁 Project Structure

```
portfolio-next/
├── src/
│   └── app/
│       ├── layout.tsx           # Root layout with metadata
│       ├── page.tsx              # Homepage
│       ├── globals.css           # Global styles
│       └── projects/             # Project detail pages
│           ├── stock-situation/
│           ├── covid-forecast/
│           ├── seattle-restaurants/
│           ├── empowered-conversation/
│           └── api-ipa/
├── public/
│   └── images/                   # Project images
├── next.config.ts                # Next.js config (static export)
├── tailwind.config.ts            # Tailwind configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ installed
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/areumjo/portfolio-next.git
cd portfolio-next
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build for Production

Build the static site for deployment:

```bash
npm run build
```

The static files will be generated in the `out/` directory.

## 🌐 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions to GitHub Pages.

### Quick Deploy

1. Build the site: `npm run build`
2. Deploy the `out/` folder to GitHub Pages
3. Your site will be live!

## 📝 Projects Featured

1. **Stock Situation** - Data-driven stock market analysis platform
2. **One Quiet Night** - COVID-19 forecast visualization
3. **Seattle Restaurants** - Personal restaurant tracking app
4. **Empowered Conversation** - Survivor-activated support tool
5. **API-IPA** - RESTful API with data visualization

## 🎨 Customization

### Update Bio

Edit `src/app/page.tsx` to update your bio, skills, and social links.

### Add/Remove Projects

1. Update the `projects` array in `src/app/page.tsx`
2. Create/remove project detail pages in `src/app/projects/[project-name]/page.tsx`
3. Add/remove images in `public/images/`

### Change Colors

Update Tailwind colors in the project cards or create custom color schemes in `tailwind.config.ts`.

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

Areum Jo - areumjo1@gmail.com

- GitHub: [@areumjo](https://github.com/areumjo)
- LinkedIn: [areum-jo](https://www.linkedin.com/in/areum-jo/)

---

Built with ❤️ using Next.js and Tailwind CSS
