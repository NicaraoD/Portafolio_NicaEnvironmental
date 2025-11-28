import '../styles/hero.css'
import nicarao from '../../public/nicarao.jpg'

export default function Hero() {
  return (
    <div className="hero_container hero_wrapper " id='profile'>
      <div className="hero_text_block">

        <div className='p_1'>
          <img src={nicarao} alt="" />
          <div className='hero_text_p'>
            <h1>Professional Profile</h1>
            <p className="hero_paragraph hero_paragraph_1">
              Engineer specialized in designing sustainable socio-economic solutions that preserve natural resources,
              foster economic development, enhance public health, and improve the quality of life in diverse communities.
            </p>
            <p className="hero_paragraph hero_paragraph_1">
              Research experience in biotechnology, water and wastewater treatment, environmental remediation, and
              water resources management.
            </p>
          </div>
        </div>

        <div className='p_3'>
          <p className="hero_paragraph hero_paragraph_3">
            As a creative engineer, I aim to contribute innovative perspectives that support
            the development of cost-effective and scalable solutions to environmental challenges, particularly waterrelated
            issues affecting vulnerable communities and critical economic activities.
          </p>
        </div>
      </div>

    </div>
  )
}
