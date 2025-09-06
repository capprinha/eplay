import { useState } from "react"
import Section from "../Section"
import { Item, Items, Action, Modal, ModalContent } from './styles'

import zelda from '../../assets/images/zelda.png'
import hogwarts from '../../assets/images/fundo_hogwarts.png'

import maiszoom from '../../assets/images/mais-zoom.png'
import play from '../../assets/images/botao-play.png'
import fechar from '../../assets/images/close.png'

import { GalleryItem } from "../../pages/Home"

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: zelda
  },
  {
    type:'image',
    url: hogwarts
  },
  {
    type:'video',
    url: 'https://www.youtube.com/embed/zw47_q9wbBE?si=I6vY81GvO15wvjza'
  }
]

type Props = {
  defaultCover: string;
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem{
  isVisible: boolean
}

const Gallery = ({defaultCover, name, items}: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url:''
  })


  const getMediaCover = (item: GalleryItem) => {
    if(item.type === 'image') return item.url
    return defaultCover
  }
  const getMediaItem = (item: GalleryItem) => {
    if(item.type === 'image') return maiszoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }
  return (
    <>
      <Section title="Galeria" background="black">
          <Items>
            {items.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => setModal({
                isVisible: true,
                type:media.type,
                url: media.url
            })}
            >
              <img src={getMediaCover(media)} alt={`media ${index} de Nome do Jogo`} />
              <Action>
                <img src={getMediaItem(media)} alt="Clique aqui para maxinar a mídia" />
              </Action>
            </Item>
            ))}
          </Items>
      </Section>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={fechar} alt="Ícone de fechar" onClick={() => {closeModal()}}/>
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="" />
          ) : (
            <iframe frameBorder={0} src={modal.url}/>
          )}
        </ModalContent>
        <div className="overlay" onClick={() => {closeModal()}}></div>
      </Modal>


    </>
  )
}

export default Gallery
