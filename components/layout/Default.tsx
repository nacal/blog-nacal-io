import { memo, ReactNode, FC } from 'react'
import Heading from 'components/atoms/Heading'

type Props = {
  children: ReactNode
}

const DefaultLayout: FC<Props> = memo(({ children }) => {
  return (
    <main>
      <Heading />
      {children}
    </main>
  )
})

export default DefaultLayout
