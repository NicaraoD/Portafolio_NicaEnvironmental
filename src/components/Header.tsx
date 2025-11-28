
import riceImage from '../assets/rice.png'
import '../styles/header.css'
import foto1 from '../../public/foto1.png'
import foto2 from '../../public/images.png'
export default function Header() {
  return (
    <div className='container'>
      <div className=''>
        <div className='logo_container'>
          <div>
            <img className='rice_logo' src={riceImage} alt="" />
          </div>
          <div className='logo_text_container'>
            <h4 className='text'>
              Master of Science of Environmental Engineering
            </h4>
          </div>
        </div>
        <div className='logo_container2'>
          <img className='foto3' src={foto2} alt="" />
          <h4 className='text3'>
              Bachelor of Environmental Engineering
          </h4>
        </div>
      </div>
      <div className='container2'>
        <p className='text2'>The solution for your environmental problems</p>
      </div>
      <div className='nic_com'>

        <img className='foto1' src={foto1} alt="" />
      </div>
    </div>
  )
}
