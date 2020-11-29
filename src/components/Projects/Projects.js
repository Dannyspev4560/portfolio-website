import React,{useEffect,useState,useReducer} from 'react'
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


const initialState = {  
            user: {},  
            loading: true,  
            error: ''  
        }  

const reduce = (state, action) => {  
            switch (action.type) {  
                case 'OnSuccess':  
                    return {  
                        loading: false,  
                        user: action.payload,  
                        error: ''  
                    }  
                case 'OnFailure':  
                    return {  
                        loading: false,  
                        user: {},  
                        error: 'Something went wrong'  
                    }  
          
                default:  
                    return state  
            }  
        }  

const Projects = () => {

    const [state,setState]=useReducer(reduce, initialState) 
  

    function projects(data){
        if(!state.error){
            
            return(
                <div>{state.loading ? 
                    (<ProjectItems white big>Loading....</ProjectItems>):
                (<ProjectItems> 
                    {  data.map(proj =>(
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
                </ProjectItems>)}
                </div>
        )}
        else{
            
            return <ProjectItems white big>Error...Try Refresh</ProjectItems>
        }
    }
    

    useEffect(()=>{
        axios.get(`https://api.github.com/users/Dannyspev4560/repos`)
      .then(res => {
          setState({type:'OnSuccess', payload:res.data})
        console.log(res.data)
        
      }).catch(err=>{
          setState({type:'OnFailure'})
          console.log(err)})
    },[initialState.error]);//when initialState.error updates the useEffect will fire




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
                    {projects(state.user)}    
                </ProjectsWrapper>
            </Container>
        </ProjectsContainer>
    )
}

export default Projects
