'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
 

export default function dmMessages() {
    const router = useRouter();
    router.push('/Chat');
    return (
        <div>
            <h1>dmMessages</h1>
        </div>
    )

}