import {
  cloneElement,
  ReactElement,
  ReactNode,
  useCallback,
  useState
} from "react"
import { BaseLayout } from "../../contexts/Layout"

export default function Template({ children }: { children: ReactNode }) {
  const [header, setHeader] = useState<ReactNode | null>(null)
  const [sidebar, setSidebar] = useState<ReactNode | null>(null)
  const [content, setContent] = useState<ReactNode | null>(null)
  const [footer, setFooter] = useState<ReactNode | null>(null)

  const setBaseHeader = useCallback((comp: ReactNode) => {
    setHeader(comp)
  }, [])

  const setBaseSidebar = useCallback((comp: ReactNode) => {
    setSidebar(comp)
  }, [])

  const setBaseContent = useCallback((comp: ReactNode) => {
    setContent(comp)
  }, [])

  const setBaseFooter = useCallback((comp: ReactNode) => {
    setFooter(comp)
  }, [])

  return (
    <BaseLayout
      value={{ setBaseHeader, setBaseSidebar, setBaseContent, setBaseFooter }}
    >
      <div className="flex flex-col h-screen">
        {header && cloneElement(header as ReactElement, {})}
        <div className="flex flex-1">
          {sidebar && cloneElement(sidebar as ReactElement, {})}
          <div className="w-full">
            {content && cloneElement(content as ReactElement, {})}
            {footer && cloneElement(footer as ReactElement, {})}
          </div>
        </div>
      </div>
      {children}
    </BaseLayout>
  )
}
