import { AboutWrapper, AboutDescription, AboutImage } from "./elements"
import girlProgrammer from '../images/202011_04.jpg'
import Button from "../Button/Button"

const About = () => {
    return(
        <AboutWrapper>
            <AboutImage>
                <img src={girlProgrammer} alt="Mujer usando computadora" className="imgAbout"/>
            </AboutImage>
            <AboutDescription>
            <h2>Sobre mí</h2>
            <h3>
                Soy Emily, redactora SEO y solucionadora de problemas. 
            </h3>
            <p>
            Mi curiosidad por saber cómo funcionan las cosas siempre me ha impulsado. A medida que profundizaba en las complejidades de la optimización de motores de búsqueda, creció mi entusiasmo por comprender la creación de sitios web y el funcionamiento interno de las aplicaciones que uso.</p>
            
            <p>En 2023, me embarqué en un viaje para fusionar mis habilidades de escritura con el diseño web, creando soluciones útiles para problemas del mundo real. </p>
            
            <p>Como desarrolladora y periodista, lo que más me emociona es aprovechar la investigación y el conocimiento del cliente para identificar las soluciones correctas.</p>
            
            <p>¿Listo para crear juntos soluciones impactantes? Conectémonos y marquemos la diferencia.</p>

            <a href="https://drive.google.com/file/d/17z-pvkeyiA6-xTdPsL4h3uYMy6DJ0wAR/view?usp=sharing" target="_blank"><Button title="Ver CV"/></a>
            </AboutDescription>
      </AboutWrapper>
    )
}
export default About;