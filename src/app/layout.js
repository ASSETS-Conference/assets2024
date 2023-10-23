import './globals.css'
import Template from '@/app/lib/Template'

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'ASSETS \'24',
  description: 'The official website of The 26th International ACM SIGACCESS Conference on Computers and Accessibility (ASSETS \'24)',
  // icons: [{ rel: 'icon', sizes: "64x64", url: '/icons/icon@32x.png' }, {apple: }],
} 

export default function RootLayout({ children }) {
  return (
    <Template>
      {children}
    </Template>
  )
}
