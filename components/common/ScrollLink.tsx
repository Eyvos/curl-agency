'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React, { ReactNode } from 'react'

interface Props {
    targetId: string
    onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
    className?: string
    children: ReactNode[] | ReactNode
}

const ScrollLink = ({ targetId, onClick, className, children }: Props) => {
    const pathname = usePathname()

    const handleScroll = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) => {
        e.preventDefault()

        // Si on n'est pas sur la page d'accueil, on redirige vers la home avec l'ancre
        if (pathname !== '/') {
            window.location.href = `/#${targetId}`
            return
        }

        const targetElement = document.getElementById(targetId)

        if (targetElement) {
            const offset = 80 // remplace par la hauteur de ta navbar en pixels

            const elementPosition = targetElement.getBoundingClientRect().top
            const offsetPosition = window.scrollY + elementPosition - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            })
        }
        if (onClick) {
            onClick(e);
        }
    }

    return (
        <Link
            href={`/#${targetId}`}
            onClick={handleScroll}
            className={className}
        >
            {children}
        </Link>
    )
}

export default ScrollLink
