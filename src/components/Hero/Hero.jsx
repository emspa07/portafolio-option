import { HeroWrapper, HeroDescription, HeroText, HeroInfo} from "./elements"

const Hero = () =>{
    return(
        <HeroWrapper>
        <HeroDescription>
            <HeroText>
                <p>Estoy constantemente explorando nuevas expresiones a través del diseño y la creación de contenido para optimizar las páginas web.</p>
            </HeroText>
            <HeroInfo>
                <h2>SOBRE MÍ</h2>
                <h2>PORTAFOLIO</h2>
                <h2>CONTACTO</h2>
            </HeroInfo>
        </HeroDescription>
    </HeroWrapper>
    )
}

export default Hero