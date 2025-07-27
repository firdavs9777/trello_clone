# Trello Clone 📋

A modern, responsive Trello-inspired task management application built with React and TypeScript. Organize your projects with drag-and-drop boards, lists, and cards.

![Trello Clone Demo](https://via.placeholder.com/800x400/3179ba/ffffff?text=Trello+Clone+Demo)

## ✨ Features

### Core Functionality

- 📋 **Board Management**: Create, edit, and delete boards
- 📝 **List Operations**: Add, rename, and remove lists within boards
- 🎯 **Card Management**: Create, edit, move, and delete cards
- 🖱️ **Drag & Drop**: Intuitive drag-and-drop interface for cards and lists
- 💾 **Local Storage**: Persistent data storage in browser
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile

### Advanced Features

- 🔍 **Search**: Find cards and boards quickly
- 🏷️ **Labels**: Categorize cards with color-coded labels
- 📅 **Due Dates**: Set and track card deadlines
- 👥 **Member Assignment**: Assign team members to cards
- 📎 **Attachments**: Add files and links to cards
- 💬 **Comments**: Collaborate with team comments
- 🗃️ **Archive**: Archive completed cards and lists

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- Modern web browser

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/trello-clone.git

# Navigate to project directory
cd trello-clone

# Install dependencies
npm install

# Start development server
npm start
```

The application will open at `http://localhost:3000`

## 🛠️ Tech Stack

### Frontend

- **React** (v18+) - UI library
- **TypeScript** - Type safety and better development experience
- **Styled-Components** - CSS-in-JS styling solution
- **React Beautiful DnD** - Drag and drop functionality
- **React Router** - Client-side routing
- **Context API** - State management

### Development Tools

- **Create React App** - Project setup and build tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Jest** - Testing framework
- **React Testing Library** - Component testing

### Additional Libraries

- **UUID** - Unique ID generation
- **Date-fns** - Date manipulation
- **React Icons** - Icon components
- **React Modal** - Modal dialogs

## 📁 Project Structure

```
trello-clone/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Board/
│   │   │   ├── Board.tsx
│   │   │   ├── Board.styles.ts
│   │   │   └── index.ts
│   │   ├── Card/
│   │   │   ├── Card.tsx
│   │   │   ├── Card.styles.ts
│   │   │   └── index.ts
│   │   ├── List/
│   │   │   ├── List.tsx
│   │   │   ├── List.styles.ts
│   │   │   └── index.ts
│   │   ├── Header/
│   │   ├── Modal/
│   │   └── Common/
│   ├── contexts/
│   │   ├── BoardContext.tsx
│   │   └── AppContext.tsx
│   ├── hooks/
│   │   ├── useLocalStorage.ts
│   │   ├── useDragAndDrop.ts
│   │   └── useModal.ts
│   ├── types/
│   │   ├── board.types.ts
│   │   ├── card.types.ts
│   │   └── common.types.ts
│   ├── utils/
│   │   ├── dragAndDrop.ts
│   │   ├── localStorage.ts
│   │   └── dateUtils.ts
│   ├── styles/
│   │   ├── GlobalStyles.ts
│   │   ├── theme.ts
│   │   └── variables.ts
│   ├── App.tsx
│   ├── App.test.tsx
│   ├── index.tsx
│   └── style.ts
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore
```

## 🎯 Component Architecture

### Core Components

#### Board Component

```typescript
interface Board {
  id: string;
  title: string;
  lists: List[];
  background?: string;
  starred?: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

#### List Component

```typescript
interface List {
  id: string;
  title: string;
  cards: Card[];
  boardId: string;
  position: number;
}
```

#### Card Component

```typescript
interface Card {
  id: string;
  title: string;
  description?: string;
  listId: string;
  position: number;
  labels?: Label[];
  dueDate?: Date;
  members?: Member[];
  attachments?: Attachment[];
  comments?: Comment[];
  createdAt: Date;
  updatedAt: Date;
}
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=http://localhost:3001
REACT_APP_VERSION=1.0.0
REACT_APP_ENVIRONMENT=development
```

### Styled Components Theme

```typescript
// src/styles/theme.ts
export const theme = {
  colors: {
    primary: "#3179ba",
    secondary: "#ffffff",
    success: "#61bd4f",
    warning: "#f2d600",
    danger: "#eb5a46",
    dark: "#172b4d",
    light: "#f4f5f7",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  borderRadius: {
    sm: "3px",
    md: "5px",
    lg: "8px",
  },
  shadows: {
    sm: "0 1px 3px rgba(0,0,0,0.12)",
    md: "0 4px 6px rgba(0,0,0,0.1)",
    lg: "0 10px 25px rgba(0,0,0,0.15)",
  },
};
```

## 📊 State Management

### Context Structure

```typescript
// Board Context
interface BoardContextType {
  boards: Board[];
  currentBoard: Board | null;
  createBoard: (title: string) => void;
  updateBoard: (id: string, updates: Partial<Board>) => void;
  deleteBoard: (id: string) => void;
  setCurrentBoard: (board: Board) => void;
}

// App Context
interface AppContextType {
  user: User | null;
  theme: "light" | "dark";
  isLoading: boolean;
  error: string | null;
  setTheme: (theme: "light" | "dark") => void;
  setError: (error: string | null) => void;
}
```

## 🎨 Styling Guide

### Styled Components Example

```typescript
// Card.styles.ts
import styled from "styled-components";

export const CardContainer = styled.div<{ isDragging?: boolean }>`
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme, isDragging }) =>
    isDragging ? theme.shadows.lg : theme.shadows.sm};
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 ${({ theme }) => theme.spacing.xs} 0;
  color: ${({ theme }) => theme.colors.dark};
`;
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test Card.test.tsx
```

### Test Examples

```typescript
// Card.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Card from "./Card";
import { theme } from "../../styles/theme";

const mockCard = {
  id: "1",
  title: "Test Card",
  description: "Test Description",
  listId: "list-1",
  position: 0,
  createdAt: new Date(),
  updatedAt: new Date(),
};

const renderCard = (props = {}) => {
  return render(
    <ThemeProvider theme={theme}>
      <Card card={mockCard} {...props} />
    </ThemeProvider>
  );
};

describe("Card Component", () => {
  it("renders card title correctly", () => {
    renderCard();
    expect(screen.getByText("Test Card")).toBeInTheDocument();
  });

  it("calls onClick when card is clicked", () => {
    const handleClick = jest.fn();
    renderCard({ onClick: handleClick });

    fireEvent.click(screen.getByText("Test Card"));
    expect(handleClick).toHaveBeenCalledWith(mockCard);
  });
});
```

## 🚢 Deployment

### Build for Production

```bash
# Create optimized production build
npm run build

# Serve build locally for testing
npx serve -s build
```

### Deployment Options

#### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy to Netlify
netlify deploy --prod --dir=build
```

#### Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to Vercel
vercel --prod
```

#### GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts
"deploy": "gh-pages -d build"

# Deploy
npm run deploy
```

## 🔧 Development

### Available Scripts

```bash
npm start          # Start development server
npm test           # Run tests
npm run build      # Build for production
npm run eject      # Eject from Create React App
npm run lint       # Run ESLint
npm run format     # Format code with Prettier
npm run type-check # Run TypeScript type checking
```

### Code Quality

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint -- --fix

# Format code
npm run format

# Pre-commit hooks (with Husky)
npm install --save-dev husky lint-staged
```

## 🐛 Troubleshooting

### Common Issues

#### Styled-Components Not Found

```bash
npm install styled-components
npm install --save-dev @types/styled-components
```

#### Drag and Drop Not Working

```bash
npm install react-beautiful-dnd
npm install --save-dev @types/react-beautiful-dnd
```

#### Build Errors

```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Create React App cache
npm start -- --reset-cache
```

### Performance Optimization

- Use `React.memo` for expensive components
- Implement virtualization for large lists
- Optimize re-renders with `useCallback` and `useMemo`
- Lazy load components with `React.lazy`

## 🤝 Contributing

### Getting Started

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

### Pull Request Process

1. Ensure all tests pass
2. Update README if needed
3. Add screenshots for UI changes
4. Request review from maintainers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Trello** - Original inspiration and design reference
- **React Beautiful DnD** - Excellent drag and drop library
- **Styled Components** - Powerful CSS-in-JS solution
- **Create React App** - Amazing development setup

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/trello-clone/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/trello-clone/discussions)
- **Email**: your.email@example.com

## 🗺️ Roadmap

### Version 2.0

- [ ] Real-time collaboration with WebSockets
- [ ] User authentication and authorization
- [ ] Team workspaces
- [ ] Advanced search and filtering
- [ ] Mobile app (React Native)

### Version 2.1

- [ ] Integrations (Slack, GitHub, etc.)
- [ ] Advanced reporting and analytics
- [ ] Custom fields for cards
- [ ] Automation rules (Butler-like)
- [ ] API for third-party integrations

---
