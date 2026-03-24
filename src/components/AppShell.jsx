import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function AppShell({ children }) {
  return (
    <div className="page-shell">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
