import ProductList from '../../components/ProductList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import star_wars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4 é um jogo de terror de sobrevivência desenvolvido e publicado pela Capcom.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4 é um jogo de terror de sobrevivência desenvolvido e publicado pela Capcom.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['5%', 'R$ 290,00'],
    image: resident
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil 4 é um jogo de terror de sobrevivência desenvolvido e publicado pela Capcom.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Resident Evil 4 é um jogo de terror de sobrevivência desenvolvido e publicado pela Capcom.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo 4 é um jogo de RPG de ação desenvolvido pela Blizzard Entertainment.',
    title: 'zelda',
    system: 'Windows',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Diablo 4 é um jogo de RPG de ação desenvolvido pela Blizzard Entertainment.',
    title: 'diablo',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Diablo 4 é um jogo de RPG de ação desenvolvido pela Blizzard Entertainment.',
    title: 'zelda',
    system: 'Windows',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Diablo 4 é um jogo de RPG de ação desenvolvido pela Blizzard Entertainment.',
    title: 'Star Wars',
    system: 'Nintendo Switch',
    infos: ['17/05'],
    image: star_wars
  }
]

const Categories = () => (
  <>
    <ProductList games={promocoes} title="RPG" background="black" />
    <ProductList games={emBreve} title="Ação" background="gray" />
    <ProductList games={promocoes} title="Aventura" background="black" />
    <ProductList games={emBreve} title="FPS" background="gray" />
  </>
)

export default Categories
