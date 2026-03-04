# miku-cursor-kit    <img width="50" height="50" alt="image" src="https://github.com/user-attachments/assets/ccce0109-ca2f-471c-a804-ec693c420303" />

![npm version](https://img.shields.io/npm/v/miku-cursor-kit?color=cb0000&label=npm)
![license](https://img.shields.io/npm/l/miku-cursor-kit)
![typescript](https://img.shields.io/badge/TypeScript-ready-3178C6?logo=typescript&logoColor=white)
![react](https://img.shields.io/badge/React-Component-61DAFB?logo=react&logoColor=black)
![nextjs](https://img.shields.io/badge/Next.js-compatible-black?logo=nextdotjs)
![Vite](https://img.shields.io/badge/Vite-%23646CFF.svg?logo=vite&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-supported-F69220?logo=pnpm&logoColor=orange)
![MIT License](https://img.shields.io/badge/license-MIT-green)
![Hatsune Miku](https://img.shields.io/badge/Hatsune-Miku-39C5BB)
![Vocaloid](https://img.shields.io/badge/Vocaloid-Miku-ff66cc)
![Miku Cursor](https://img.shields.io/badge/Miku-Cursor-00d1b2)
![Anime UI](https://img.shields.io/badge/Anime-UI-ff69b4)



Standalone React cursor package
=======


# Standalone React cursor package

### Samples pics

### Site 1

<img width="815" height="575" alt="image" src="https://github.com/user-attachments/assets/c478f4d0-67f5-4b39-9db5-cd4b3b3eaef0" />

### Site 2

<img width="1331" height="696" alt="image" src="https://github.com/user-attachments/assets/04bcae3f-92df-4953-897a-c59e85a6b72a" />

<img  width="50">


<img width="1249" height="547" alt="image" src="https://github.com/user-attachments/assets/df5c1139-8760-4f5a-9680-bb385c49b013" />

### Site 3

<img width="1196" height="809" alt="image" src="https://github.com/user-attachments/assets/a0088ce1-179f-4d85-98d3-f28e3900f037" />






## Install

# Local folder (assuming you cloned my repo)

```bash
pnpm add ./miku-cursor-kit
```

# From GitHub

```bash
pnpm add github:NubPlayz/miku-cursor-kit
```

# npm

```bash
pnpm add miku-cursor-kit
```

## Use

```jsx
import { MikuCursor } from 'miku-cursor-kit';

export default function App() {
  return (
    <>
      <MikuCursor />
      <main>Your app content</main>
    </>
  );
}
```

## use wrapper, for next js (server componenet)
Create a client wrapper (example app/MikuCursorClient.tsx):

```jsx
"use client";

import { MikuCursor } from "miku-cursor-kit";

export default function MikuCursorClient() {
  return <MikuCursor />;
}

```

In app/layout.tsx,  import the wrapper (not the package directly):
```jsx 
import MikuCursorClient from "./MikuCursorClient";
```

and render:

```jsx
<MikuCursorClient />
```

## Notes

- React 18+ required.


