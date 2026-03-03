# miku-cursor-kit

Standalone React cursor package

## Install

# Local folder (assuming you cloned my repo)

```bash
pnpm add ./miku-cursor-kit
```

# From GitHub

```bash

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

In app/layout.tsx, import the wrapper (not the package directly):
import MikuCursorClient from "./MikuCursorClient";
and render:

```jsx
<MikuCursorClient />
```

## Notes

- React 18+ required.
- Designed for pointer devices; it is hidden on coarse pointers.
- Native form controls keep native cursor behavior.
