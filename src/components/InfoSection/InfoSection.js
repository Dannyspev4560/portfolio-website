import React from 'react'
import {Link} from 'react-router-dom'
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img,
    FileToDownload
} from './InfoSection.elements'
import {Container,Button} from '../..//globalStyles'


const InfoSection = ({primary,
    lightBg,
    imgStart,
    lightTopLine,
    lightText,
    lightTextDesc,
    buttonLabel,
    description,
    headline,
    topLine,
    img,
    alt,
    round,
    start,
    file
    }) => {
    return (
        <div>
            <InfoSec lightBg={lightBg}>
               <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
    <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
    <Heading lightText={lightText}>{headline}</Heading>
    <Subtitle lightTextDesc={lightTextDesc}>{description}
    </Subtitle>
        <FileToDownload file={file} target="_blank" href="https://drive.google.com/file/d/1WnMfNR4G2a6naLB94Kc_VKxuKorNM4Rx/view?usp=sharing">
            <Button  big primary={primary} >
                {buttonLabel}
            </Button>
        </FileToDownload>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start ={start}>
                                <Img src={img} alt={alt} round={round}/>
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container> 
            </InfoSec>
        </div>
    )
}

export default InfoSection
