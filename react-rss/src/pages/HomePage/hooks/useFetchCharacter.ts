import { useState } from 'react'

import { Сharacter, getCharacter } from '../../../api'
import { useModal } from '../../../components/Modal'

export const useFetchCharacter = () => {
  const {
    visible: modalVisible,
    open: openModal,
    close: closeModal,
  } = useModal()

  const [selectCharacter, setSelectCharacter] = useState<Сharacter | null>(null)

  const onCardClick = async (id: number) => {
    const characterInfo = await getCharacter(id)
    setSelectCharacter(characterInfo)

    openModal()
  }

  return {
    onCardClick,
    selectCharacter,
    modalVisible,
    closeModal,
  }
}
