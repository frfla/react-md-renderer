import { useCallback, useState } from 'react'

export function useForceRender(): () => void {
  const [_, setNumber] = useState<number>(0)
  const forceRender = useCallback(() => setNumber(prev => prev + 1), [_])

  return forceRender
}
