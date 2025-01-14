import { ReactNode, useContext, useLayoutEffect } from "react"
import clsx from "clsx"
import { BaseLayout } from "../../contexts/Layout"

const HeaderComponent = ({
  logo,
  className = "",
  children
}: {
  logo: ReactNode
  className?: string
  children: ReactNode
}) => {
  return (
    <header
      className={clsx(
        `flex justify-between items-center py-3 px-4 bg-black text-white`,
        className
      )}
    >
      <div className={`flex align-middle items-center gap-5`}>{logo}</div>
      <div>{children}</div>
    </header>
  )
}

export default function Header({
  logo,
  className,
  children
}: {
  logo: ReactNode
  className?: string
  children: ReactNode
}) {
  const { setBaseHeader } = useContext(BaseLayout)

  useLayoutEffect(() => {
    if (setBaseHeader) {
      setBaseHeader(
        <HeaderComponent logo={logo} className={className}>
          {children}
        </HeaderComponent>
      )
    }
    return () => {
      if (setBaseHeader) {
        setBaseHeader(null)
      }
    }
  }, [logo, className, children, setBaseHeader])

  if (setBaseHeader) {
    return null
  } else {
    return (
      <HeaderComponent logo={logo} className={className}>
        {children}
      </HeaderComponent>
    )
  }
}
