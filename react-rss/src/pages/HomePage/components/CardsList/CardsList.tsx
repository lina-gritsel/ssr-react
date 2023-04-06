import { FC } from 'react'

import { Сharacter } from '../../../../api'
import Card from '../Card'

import styles from './CardsList.module.scss'

export interface CardsListProps {
  characters: Сharacter[]
  showInfoProduct: (value: number) => void
}

const CardsList: FC<CardsListProps> = ({ characters, showInfoProduct }) => {
  return (
    <>
      {characters ? (
        <div className={styles.cards}>
          {characters.map(({ id, name, species, image, status }, index) => (
            <div key={index}>
              <Card
                id={id}
                name={name}
                species={species}
                image={image}
                status={status}
                onClick={showInfoProduct}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.notFound}>Nothing was found for your query</div>
      )}
    </>
  )
}

export default CardsList
