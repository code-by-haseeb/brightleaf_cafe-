import espressoImg from '../assets/images/menu-espresso.jpg'
import cappuccinoImg from '../assets/images/menu-cappuccino.jpg'
import icedLatteImg from '../assets/images/menu-iced-latte.jpg'
import matchaImg from '../assets/images/menu-matcha.jpg'
import chaiImg from '../assets/images/menu-chai.jpg'
import croissantImg from '../assets/images/menu-croissant.jpg'
import muffinImg from '../assets/images/menu-muffin.jpg'
import bananaBreadImg from '../assets/images/menu-banana-bread.jpg'

export const MENU_CATEGORIES = ['All', 'Coffee', 'Tea', 'Bakery']

// Each item needs a unique `id` so React can track it in lists.
export const MENU_ITEMS = [
  { id: 1, name: 'Espresso', price: 3.0, category: 'Coffee', image: espressoImg, text: 'A bold, concentrated shot.' },
  { id: 2, name: 'Cappuccino', price: 4.25, category: 'Coffee', image: cappuccinoImg, text: 'Espresso with silky foamed milk.' },
  { id: 3, name: 'Iced Latte', price: 4.75, category: 'Coffee', image: icedLatteImg, text: 'Chilled espresso over milk and ice.' },
  { id: 4, name: 'Matcha Latte', price: 5.0, category: 'Tea', image: matchaImg, text: 'Stone-ground green tea with milk.' },
  { id: 5, name: 'Chai', price: 4.5, category: 'Tea', image: chaiImg, text: 'Black tea brewed with warm spices.' },
  { id: 6, name: 'Butter Croissant', price: 3.5, category: 'Bakery', image: croissantImg, text: 'Flaky, golden and buttery.' },
  { id: 7, name: 'Blueberry Muffin', price: 3.25, category: 'Bakery', image: muffinImg, text: 'Packed with fresh berries.' },
  { id: 8, name: 'Banana Bread', price: 3.75, category: 'Bakery', image: bananaBreadImg, text: 'Moist, with a hint of cinnamon.' },
]
