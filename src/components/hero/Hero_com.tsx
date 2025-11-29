import { useState } from 'react'
import '../../styles/hero/hero_com.css'

export default function Hero_com({
    title,
    p1,
    p2,
    p3,
    isTrue,
    isImage

}: any) {

    return (
        <div className={isTrue ? 'p_1' : 'p_1_com'}>
            <div 
            className={isTrue ? "image_container_p1"  : 'image_container_p2'}
            >
            </div>
            <div className='hero_text_p'>
                <h1>{title}</h1>
                <p className="hero_paragraph hero_paragraph_1">
                    {p1}
                </p>
                <p className="hero_paragraph hero_paragraph_1">
                    {p2}
                </p>
                <p className="hero_paragraph hero_paragraph_1">
                    {p3}
                </p>
            </div>
        </div>

    )
}
