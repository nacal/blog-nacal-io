import { Entry } from 'contentful'
import { FC } from 'react'
import CategoryTitle from './CategoryTitle'
import { ICategoryFields } from 'lib/contentful'

type Props = {
  category: Entry<ICategoryFields>
}

const CategoryTitleContainer: FC<Props> = ({ category }) => {
  return <CategoryTitle title={category.fields.title} />
}
export default CategoryTitleContainer
