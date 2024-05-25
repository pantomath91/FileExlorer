# File Explorer Component

This project is a simple file explorer component built using React, TypeScript, and CSS. It mimics the functionality of a file explorer, allowing users to expand folders, select files, and perform context menu actions such as copying, deleting, and renaming files. No external libraries were used.

## Table of Contents

- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Component Details](#component-details)
- [Learn More](#learn-more)

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/file-explorer-component.git
   cd file-explorer-component
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

Open [http://localhost:3000](http://localhost:3000) to view the app in the browser. The page will reload if you make edits, and you will see any lint errors in the console.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits, and you will see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project. Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Project Structure

```bash
src/
│
├── components/
│   ├── FileExplorer.tsx      # Main file explorer component
│   ├── FileExplorer.css      # Styles for the file explorer component
│
├── types/
│   └── index.ts              # Type definitions for the file structure
│
├── App.tsx                   # Main App component
├── App.css                   # Styles for the App component
├── index.tsx                 # Entry point of the application
├── index.css                 # Global styles
│
└── ...                       # Other Create React App default files
```

## Component Details

### `FileExplorer`

The `FileExplorer` component recursively renders folders and files based on a nested data structure. It supports the following features:

- **Folder Expansion**: Clicking on a folder toggles its expanded state, showing or hiding its contents.
- **File Selection**: Clicking on a file highlights it, indicating it is selected.
- **Context Menu**: Right-clicking on a file opens a context menu with options to copy, delete, and rename the file. For now, these actions are logged to the console.

#### Props

- `node: FileNode`: The file or folder node to render.
- `selectedFile: string | null`: The currently selected file.
- `onSelectFile: (fileName: string) => void`: Callback to set the selected file.
- `onRightClickFile: (event: React.MouseEvent, fileName: string) => void`: Callback to handle right-click events on files.

### Type Definitions

The `FileNode` type represents a file or folder in the file explorer:

```typescript
export interface FileNode {
  type: "file" | "folder";
  name: string;
  data?: FileNode[];
  meta?: string;
}
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
