import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title:{
        default: "Alex Decodes",
        template: "%s | Mohit Decodes"
    },
    description: "Learn Web Development and Programming",
    openGraph:{
       siteName: "Alex Decodes",
    }
}

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return(
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}