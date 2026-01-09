import './globals.css'
import { Manrope, Poppins } from 'next/font/google';
import Cursor from "@/components/ui/Cursor"

// Body font
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

// Display / Headings font
const headingFont = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})


export const metadata = {
  title: 'Portfolio',
  description: 'Navya Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${headingFont.variable}`}>
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  )
}
