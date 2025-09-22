"use client"

import { useState, useEffect } from 'react'

export function LoadingOverlay() {
    const [isVisible, setIsVisible] = useState(true)
    const [opacity, setOpacity] = useState(1)

    useEffect(() => {
        const fadeTimer = setTimeout(() => {
            setOpacity(0);
        }, 1500)

        const hideTimer = setTimeout(() => {
            setIsVisible(false)
        }, 1600) // Hide after fade completes

        return () => {
            clearTimeout(fadeTimer)
            clearTimeout(hideTimer)
        }
    }, [])

    if (!isVisible) return null

    return (
        <div
            className="fixed inset-0 top-0 left-0 right-0 bottom-0 w-screen h-screen z-500 flex items-center justify-center bg-space transition-opacity duration-400 ease-out pointer-events-none"
            style={{ opacity }}
        >
            <img
                src="/animated_logo.gif"
                alt="Loading..."
                className="w-full md:max-w-md lg:max-w-lg"
            />
        </div>
    )
}