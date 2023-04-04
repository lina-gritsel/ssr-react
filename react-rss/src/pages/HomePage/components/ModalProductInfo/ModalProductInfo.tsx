import { FC } from 'react'

import Close from '../../../../assets/images/close.png'
import { getInfoproduct } from '../../hooks'
import { Сharacter } from '../../../../api'

import styles from './ModalProductInfo.module.scss'

interface ModalProductInfoProps {
  modalIsOpen: boolean
  selectCharacter: Сharacter | null
  setModalIsOpen: (value: boolean) => void
}

const ModalProductInfo: FC<ModalProductInfoProps> = ({
  modalIsOpen,
  selectCharacter,
  setModalIsOpen
}) => {
  return (
    <div className={modalIsOpen ? styles.container : styles.hidden}>
      <img className={styles.image} src={selectCharacter?.image}></img>
      <div className={styles.info}>
        <div className={styles.name}>
          <span>name:</span> {selectCharacter?.name}
        </div>
        <div className={styles.species}>
          <span>species:</span> {selectCharacter?.species}
        </div>
        <div className={styles.gender}>
          <span>gender:</span> {selectCharacter?.gender}
        </div>
        <div className={styles.status}>
          <span>status:</span> {selectCharacter?.status}
        </div>
        <img
          onClick={() => setModalIsOpen(false)}
          src={Close}
          className={styles.close}
        />
      </div>
    </div>
  )
}

export default ModalProductInfo
