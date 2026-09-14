
import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner'
import Nav from './components/Nav'
import Cards from './components/cards/Cards'
import type { card } from './types/cardType'
import Footer from './components/Footer'
import 'react-toastify/dist/ReactToastify.css'

const cardsFetch = async():Promise<card[]> => {
  const res =await fetch('/data.json');
  const data = await res.json();
  return data;
}

function App() {
const cardsPromise= cardsFetch();
  return (
    <>
<Nav></Nav>
<Banner></Banner>
<Suspense fallback={<h2>Loading...</h2>}>
<Cards cardsPromise ={cardsPromise}/>

</Suspense>
<Footer></Footer>

    </>
  )
}

export default App
