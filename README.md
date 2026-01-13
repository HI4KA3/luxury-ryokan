# Luxury Ryokan Website - "KUU NO NIWA"

This is a premium, "Wa-Modern" (Japanese Modern) styled Ryokan website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later

### Installation

1.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

3.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

- `src/app`: Page routes (App Router)
- `src/components`: React components
    - `ui`: Reusable atomic components (Button, Typography, etc.)
    - `layout`: Global layout components (Header, Footer)
    - `home`, `booking`, etc.: Feature-specific components
- `src/content`: **Content Data** (Edit these files to change site content)
- `src/lib`: Utilities
- `public/images`: Image assets

## 📝 Content Editing Guide

This website is designed to be easily editable without touching complex code. All content is stored in the `src/content` directory.

### How to change text:
Open the relevant file in `src/content/`:
- **General Info**: `site.ts` (Name, Address, Social Links, Policies)
- **Rooms**: `rooms.ts` (Prices, Descriptions, Features)
- **Menu/Dining**: `dining.ts`
- **FAQ**: `faq.ts`
- **Offers**: `offers.ts`

**Example: Changing a Room Price**
1. Open `src/content/rooms.ts`
2. Find the room you want to edit.
3. Change the `price` number.
4. Save the file. The site updates automatically.

### How to change images:
1. Place your new image in `public/images/`.
2. Update the filename reference in the corresponding `src/content/*.ts` file.

## 🎨 Customization

- **Colors & Fonts**: Defined in `tailwind.config.ts`.
- **Global Styles**: Defined in `src/app/globals.css`.

## 🌐 Deployment

This project is optimized for deployment on Vercel or Netlify.

- **Vercel**: Simply import your Git repository and deploy.
- **Static Export**: If needed, add `output: 'export'` to `next.config.js`.

---
*Created for Luxury Ryokan Project*
