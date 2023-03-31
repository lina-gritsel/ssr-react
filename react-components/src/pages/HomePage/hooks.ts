import { useState } from 'react'
import { useDebounce } from '../../hooks'

export const useHomePage = () => {
  const [searchString, setSearchString] = useState<string>('')

  const searchDebounced = useDebounce(searchString, 300)

  return { searchString: searchDebounced, setSearchString }
}

// const setSearchValue = (value: string) => {
//   onChange(value)
//   localStorage.setItem('searchValue', value)
// }
