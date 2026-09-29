import { useEffect } from "react"

const DEFAULT_TITLE = "EcoNest | Sustainable Living"

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title

    return () => {
      document.title = DEFAULT_TITLE
    }
  }, [title])
}

export default useDocumentTitle