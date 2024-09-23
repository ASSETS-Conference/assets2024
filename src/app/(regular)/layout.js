import '@/app/globals.css'
import Template from '@/app/lib/components/Template'
 

export default function RootLayout({ children }) {
  return (
    <Template>
      {children}
    </Template>
  )
}
