import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Cato, La Trung Hieu</Name>
        <Function>Full Sờ nách Developer</Function>
        <Intro>
          phát triển Web React, JS và những thứ khác
        </Intro>
        <Link href="projects">
          <LinkProjects>PROJECTS <FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src="/images/logo.png" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}
