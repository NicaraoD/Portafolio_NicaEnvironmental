import '../styles/hero.css'
import Hero_com from './hero/Hero_com'
import Nicarao from '../../public/nicarao.jpg'
import NicaraoDos from '../../public/Nicaraodos.jpg'
import Rice from '../../public/rice_news.jpg'

export default function Hero() {
  return (
    <div className="hero_container hero_wrapper " id='profile'>
      <div className="hero_text_block">
        <Hero_com
          title='Professional Profile'
          p1="Engineer specialized in designing sustainable socio-economic solutions that preserve natural resources, foster economic development, enhance public health, and improve the quality of life in diverse communities."
          isTrue={true}
          img={Nicarao}
        />
         <Hero_com
          title='Research Experience'
          p1="Research experience in biotechnology, water and wastewater treatment, environmental remediation, and
                    water resources management."
         img={NicaraoDos}
        />
         <Hero_com
          title='Creative Engineering'
          p1="As a creative engineer, I aim to contribute innovative perspectives that support
the development of cost-effective and scalable solutions to environmental challenges, particularly waterrelated
issues affecting vulnerable communities and critical economic activities."
          isTrue={true}
          img={Rice}
        />
        
      </div>

    </div>
  )
}
