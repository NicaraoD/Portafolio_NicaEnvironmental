
import Header from './components/Header'
import HeaderCom from './components/HeaderCom'
import Hero from './components/Hero'
import NavComponent from './components/Nav'
export default function MainContext() {
  return (
        <>
    <HeaderCom/>
     <main className='main_page_container'>
        <Hero/>
     </main>
    </>
  )
}
