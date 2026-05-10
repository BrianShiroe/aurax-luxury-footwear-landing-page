# Content to be written into the .txt file based on the repository documentation
setup_content = """AURAX | Architectural Footwear & Kinetic Engineering
--------------------------------------------------
LIVE LINK: https://aurax-luxury-footwear-landing-page.vercel.app/

LOCAL SETUP INSTRUCTIONS

Prerequisites:
- Node.js (LTS version recommended)

Installation:
1. Clone the repository and enter the directory.
2. Install dependencies:
   npm install

Environment Configuration:
1. Create a .env.local file in the root directory.
2. Add your Gemini API key:
   GEMINI_API_KEY="YOUR_GEMINI_API_KEY_HERE"

Execution:
1. Launch the development server:
   npm run dev
2. The application will be available at:
   http://localhost:3000

Technical Stack:
- Frontend: React 19 (TypeScript)
- Styling: Tailwind CSS 4.0
- Animations: Framer Motion
- Build Tool: Vite
--------------------------------------------------
© 2026 AURAX DESIGN LABS"""

with open('aurax-setup-details.txt', 'w') as f:
    f.write(setup_content)