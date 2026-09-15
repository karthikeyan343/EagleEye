# Eagle Eye Solution — Frontend Application

Modern responsive web application for **Eagle Eye Solution** built with React, TypeScript, Material UI (MUI), and Vite.

## Architecture & Structure

```
src/
├── assets/                   # High-resolution imagery & SVG logos
├── Components/
│   ├── Pages/                # Full page layouts (Home.tsx)
│   ├── SpecifiedComponents/  # Figma sections (Header, Hero, ProductsSection, ServicesCarousel, FeaturedWorks, WhoWeAre, ContactSection, GoogleMap, Footer)
│   └── WrapperComponents/    # Sidebar & layout wrappers
├── Pages/
│   ├── Config/               # Theme & route configuration
│   ├── Data/                 # 6 Products, 6 Services, Founders & Stats datasets
│   ├── Logins/               # Client security portal modal
│   ├── Popups/               # Enterprise quote & product modals
│   └── Usermanagement/       # User context state
```

## Running the Frontend

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```
