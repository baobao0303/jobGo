# JobGo

## Introduction

JobGo is a Node.js application built with TypeScript and Express. The project uses Prisma and Mongoose for database management, along with tools like ESLint and Prettier to ensure code quality.

## Installation

Follow these steps to set up the project:

### 1. Clone the repository

```sh
git clone <repo-url>
cd jobgo
```

### 2. Install dependencies

```sh
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory and add the necessary environment variables, for example:

```env
DATABASE_URL=mongodb://localhost:27017/jobgo
JWT_SECRET=your_secret_key
PORT=3000
```

## Running the Application

### Development mode

```sh
npm run dev
```

### Build the project

```sh
npm run build
```

### Run the production build

```sh
npm start
```

## Code Quality Checks

### ESLint Check

```sh
npm run lint
```

Auto-fix lint issues:

```sh
npm run lint:fix
```

### Prettier Check

```sh
npm run prettier
```

Auto-format code:

```sh
npm run prettier:fix
```

## Technologies Used

- **Node.js**: JavaScript runtime
- **Express**: Web framework for API development
- **TypeScript**: Enhances maintainability and reduces errors
- **Prisma**: ORM for PostgreSQL, MySQL, SQLite, and MongoDB
- **Mongoose**: ODM for MongoDB
- **JWT**: Authentication and security
- **Joi**: Input validation
- **ESLint & Prettier**: Code quality and formatting tools

## Contact Information

Author: Le Tan Bao Bao
Email: baobao22.work@gmail.com

---

_© 2025 JobGo. All rights reserved._
