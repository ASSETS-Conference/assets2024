import '@/app/globals.css'
import Template from '@/app/lib/components/Template'
 

export default function RootLayout({ children }) {
  return (
    <Template noFooter noStickyMenu>
      {children}
    </Template>
  )
}
