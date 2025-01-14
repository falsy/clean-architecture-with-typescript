import { ReactNode, useContext, useLayoutEffect } from "react"
import { BaseLayout } from "../../contexts/Layout"

const FooterComponent = ({
  className,
  children
}: {
  className?: string
  children: ReactNode
}) => {
  return <footer {...(className && { className })}>{children}</footer>
}

export default function Footer({
  className,
  children
}: {
  className?: string
  children: ReactNode
}) {
  const { setBaseFooter } = useContext(BaseLayout)

  useLayoutEffect(() => {
    if (setBaseFooter) {
      setBaseFooter(
        <FooterComponent className={className}>{children}</FooterComponent>
      )
    }
    return () => {
      if (setBaseFooter) {
        setBaseFooter(null)
      }
    }
  }, [className, children, setBaseFooter])

  if (setBaseFooter) {
    return null
  } else {
    return <FooterComponent className={className}>{children}</FooterComponent>
  }
}
