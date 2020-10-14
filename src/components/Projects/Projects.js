import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {FaGithub} from 'react-icons/fa'
import {Container} from '../../globalStyles'
import img from '../../images/50050581.png'
import {ProjectsContainer,
        ProjectsHeader,
        ProjectsWrapper,
        ProjectItems,
        ProjectItem,
        Title,
        Date,
        Description,
        SubTitle,
        Image,
        Button,
        ButtonsWrapper,
        GitLink
        }from './Projects.elements'




const Projects = () => {

    const [data,setData]=useState([])
  

    function projects(data){
        if(data){
            
            return(
                <ProjectItems> 
                    { data.map(proj =>(
                      <ProjectItem key={proj.id}>
                          <Title>{proj.name}</Title>
                          <Image src={proj.owner.avatar_url} alt="avatar"></Image>
                        <Date>{ proj.pushed_at.toString().substring(0,10)}</Date>
                        <Description>{proj.description}</Description>
                        <ButtonsWrapper>
                            <GitLink target="_blank" href={proj.html_url}>
                                <Button>View in  <FaGithub/></Button>
                            </GitLink>
                        </ButtonsWrapper>
                      </ProjectItem>  
                    ))}
                </ProjectItems>
        )}
        else{
            axios.get(`https://api.github.com/users/Dannyspev4560/repos`)//one more attempt 
            .then(res => {
                console.log(res.data)
                setData(res.data)})
            return <ProjectItems white big>Loading....</ProjectItems>
        }
    }
    

    useEffect(()=>{
        axios.get(`https://api.github.com/users/Dannyspev4560/repos`)
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
    },[]);




    return (

        <ProjectsContainer>
            <Container>
                <ProjectsHeader>
                    Projects
                </ProjectsHeader>
                <SubTitle>
                    My Repositories 
                </SubTitle>
                <ProjectsWrapper>
                    {projects(data)}    
                </ProjectsWrapper>
            </Container>
        </ProjectsContainer>
    )
}

export default Projects
