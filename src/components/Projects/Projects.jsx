import { projectsItems } from "../../data";
import { CardWrapper, PortafolioSection } from "./elements";
import ProjectItems from "./ProjectItems";


const Projects = ({title}) => {
    return(
        <PortafolioSection>
            <h2 className="title">{title}</h2>
            <CardWrapper>
            {projectsItems.map(item => (<ProjectItems  item={item} key={item.id}/>))}
            </CardWrapper>
        </PortafolioSection>
    ) 
}


export default Projects