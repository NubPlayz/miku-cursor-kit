# miku-cursor-kit    <img width="50" height="50" alt="image" src="https://github.com/user-attachments/assets/ccce0109-ca2f-471c-a804-ec693c420303" />


Standalone React cursor package

## Samples pics

### Site 1

<img width="815" height="575" alt="image" src="https://github.com/user-attachments/assets/c478f4d0-67f5-4b39-9db5-cd4b3b3eaef0" />

### Site 2

<img width="1331" height="696" alt="image" src="https://github.com/user-attachments/assets/04bcae3f-92df-4953-897a-c59e85a6b72a" />

<img  width="50">


<img width="1249" height="547" alt="image" src="https://github.com/user-attachments/assets/df5c1139-8760-4f5a-9680-bb385c49b013" />





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


