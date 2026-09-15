# EagleEye Solution

An end-to-end modern physical security and AI surveillance platform architecture.

## Repository Structure

```
EAGLEEYE-SOLUTION/
│
├── frontend/
│   ├── public/
│   │   ├── favicon.ico
│   │   └── ...
│   │
│   ├── src/
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   │   ├── products/
│   │   │   │   ├── solutions/
│   │   │   │   ├── team/
│   │   │   │   └── common/
│   │   │   ├── icons/
│   │   │   ├── logos/
│   │   │   └── fonts/
│   │   │
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── layout/
│   │   │   ├── navigation/
│   │   │   ├── cards/
│   │   │   ├── forms/
│   │   │   └── ui/
│   │   │
│   │   ├── sections/
│   │   │   ├── home/
│   │   │   ├── products/
│   │   │   ├── solutions/
│   │   │   ├── about/
│   │   │   └── contact/
│   │   │
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   ├── Products/
│   │   │   ├── Solutions/
│   │   │   ├── About/
│   │   │   ├── Contact/
│   │   │   └── NotFound/
│   │   │
│   │   ├── data/
│   │   │   ├── products.ts
│   │   │   ├── solutions.ts
│   │   │   ├── navigation.ts
│   │   │   ├── statistics.ts
│   │   │   └── team.ts
│   │   │
│   │   ├── hooks/
│   │   │   ├── useScroll.ts
│   │   │   ├── useIntersection.ts
│   │   │   └── useApi.ts
│   │   │
│   │   ├── services/
│   │   │   ├── api.ts
│   │   │   ├── contact.service.ts
│   │   │   └── product.service.ts
│   │   │
│   │   ├── types/
│   │   │   ├── product.ts
│   │   │   ├── solution.ts
│   │   │   ├── contact.ts
│   │   │   └── common.ts
│   │   │
│   │   ├── utils/
│   │   │   ├── cn.ts
│   │   │   ├── format.ts
│   │   │   └── validation.ts
│   │   │
│   │   ├── config/
│   │   │   └── env.ts
│   │   │
│   │   ├── App.tsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.tsx
│   │
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
│
├── backend/
│   ├── src/
│   │   ├── api/
│   │   │   ├── controllers/
│   │   │   ├── middleware/
│   │   │   └── routes/
│   │   │
│   │   ├── config/
│   │   │   ├── env.ts
│   │   │   └── db.ts
│   │   │
│   │   ├── dtos/
│   │   ├── models/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── index.ts
│   │   └── lambda.ts
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── tsconfig.json
│
├── README.md
└── .gitignore
```

## Quick Start

### 1. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### 2. Backend Setup
```bash
cd backend
npm install
npm run dev
```
