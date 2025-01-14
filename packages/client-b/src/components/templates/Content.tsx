import { ReactNode, useContext, useLayoutEffect } from "react"
import clsx from "clsx"
import { BaseLayout } from "../../contexts/Layout"

const ContentComponent = ({
  className = "",
  children
}: {
  className?: string
  children: ReactNode
}) => {
  return <main className={clsx(["w-full", className])}>{children}</main>
}

export default function Content({
  className,
  children
}: {
  className?: string
  children: ReactNode
}) {
  const { setBaseContent } = useContext(BaseLayout)

  useLayoutEffect(() => {
    if (setBaseContent) {
      setBaseContent(
        <ContentComponent className={className}>{children}</ContentComponent>
      )
    }
    return () => {
      if (setBaseContent) {
        setBaseContent(null)
      }
    }
  }, [className, children, setBaseContent])

  if (setBaseContent) {
    return null
  } else {
    return <ContentComponent className={className}>{children}</ContentComponent>
  }
}
