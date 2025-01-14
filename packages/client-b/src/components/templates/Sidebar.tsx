"use client"

import { ReactNode, useContext, useLayoutEffect } from "react"
import clsx from "clsx"
import { BaseLayout } from "../../contexts/Layout"

const SidebarComponent = ({
  className = "",
  children
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <aside className={clsx(`bg-gray-100 w-80 border-r border-gray`, className)}>
      {children}
    </aside>
  )
}

export default function Sidebar({
  className,
  children
}: {
  className?: string
  children: ReactNode
}) {
  const { setBaseSidebar } = useContext(BaseLayout)

  useLayoutEffect(() => {
    if (setBaseSidebar) {
      setBaseSidebar(
        <SidebarComponent className={className}>{children}</SidebarComponent>
      )
    }
    return () => {
      if (setBaseSidebar) {
        setBaseSidebar(null)
      }
    }
  }, [className, children, setBaseSidebar])

  if (setBaseSidebar) {
    return null
  } else {
    return <SidebarComponent className={className}>{children}</SidebarComponent>
  }
}
