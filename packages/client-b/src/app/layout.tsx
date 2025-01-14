import { ReactNode } from "react"
import Template from "../components/templates/Template"
import BaseHeader from "../components/organisms/layouts/BaseHeader"
import BaseSidebar from "../components/organisms/layouts/BaseSidebar"
import "./global.css"

export const metadata = {
  title: "Client B"
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <body>
        <Template>
          <BaseHeader />
          <BaseSidebar />
          {children}
        </Template>
      </body>
    </html>
  )
}
