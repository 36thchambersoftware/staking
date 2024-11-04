'use client';

import '@meshsdk/react/styles.css';
import { MeshProvider } from '@meshsdk/react';

export function Providers({ children }) {
    return <MeshProvider>{children}</MeshProvider>;
}
