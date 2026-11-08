// Importing an image gives you its URL. Vite copies and optimizes it at build time.
import beansImg from '../assets/images/feature-beans.jpg'
import bakeryImg from '../assets/images/feature-bakery.jpg'
import spaceImg from '../assets/images/feature-space.jpg'

export const FEATURES = [
  {
    image: beansImg,
    title: 'Fresh roasted',
    text: 'Beans roasted in small batches every week for a rich, smooth cup.',
  },
  {
    image: bakeryImg,
    title: 'Baked daily',
    text: 'Croissants, muffins and breads made in our kitchen each morning.',
  },
  {
    image: spaceImg,
    title: 'Cozy space',
    text: 'Plants, soft light and fast Wi-Fi. Stay for a sip or the whole day.',
  },
]
