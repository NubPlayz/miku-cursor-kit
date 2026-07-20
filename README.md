# miku-cursor-kit    <img width="50" height="50" alt="image" src="https://github.com/user-attachments/assets/ccce0109-ca2f-471c-a804-ec693c420303" />

![npm version](https://img.shields.io/npm/v/miku-cursor-kit?color=cb0000&label=npm)
![license](https://img.shields.io/npm/l/miku-cursor-kit)
![Stars](https://img.shields.io/github/stars/NubPlayz/miku-cursor-kit?style=social)


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


## Live demo

 To check the custom cursor live,  i have added a link to one of my site that i have added this cursor .
 

 

 https://goodlib.vercel.app


```like what you saw ? you can have it too! read the full docs to know how . ```

# Standalone React cursor package OR .Cur files (Itch.io link below)

### Samples pics

### Site 1

<img width="815" height="575" alt="image" src="https://github.com/user-attachments/assets/c478f4d0-67f5-4b39-9db5-cd4b3b3eaef0" />

### Site 2

<img width="1331" height="696" alt="image" src="https://github.com/user-attachments/assets/04bcae3f-92df-4953-897a-c59e85a6b72a" />

<img  width="50">


<img width="1249" height="547" alt="image" src="https://github.com/user-attachments/assets/df5c1139-8760-4f5a-9680-bb385c49b013" />

### Site 3

<img width="1196" height="809" alt="image" src="https://github.com/user-attachments/assets/a0088ce1-179f-4d85-98d3-f28e3900f037" />






# Install

## For users (itch.io link)

itch.io link -  https://nubplayz.itch.io/miku-mouse-cursor

Instructions on how to install .Cur files on Win:

```
1. download the zip and extract it

2. go to accessibility in settings 

3. in accessibility , go to  mouse and pointer touch

4. click customize pointer image 

5. there change the normal select and link select to the files provided

```
<img width="900" height="520" alt="HoloTile (15)" src="https://github.com/user-attachments/assets/0ed7db7d-9175-4082-9377-1f5898173d0d" />



# For Devs ( 3 diff installions ways , to get the same cursor but animated on their site only  )


## Local folder (assuming you cloned my repo)

```bash
pnpm add ./miku-cursor-kit
```

## From GitHub

```bash
pnpm add github:NubPlayz/miku-cursor-kit
```

## npm

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


## npm link

https://www.npmjs.com/package/miku-cursor-kit

<img width="1118" height="824" alt="image" src="https://github.com/user-attachments/assets/09cc46db-bd26-40ad-92f5-c104781e95c9" />



## Notes

- React 18+ required.


