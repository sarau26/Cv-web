import { SideBar } from '@/components/SideBar';
import { SideBarDerecha } from '@/components/SideBarDerecha';
import { Main } from '@/components/Main';

const Home = ()=>{
  return(
    <div className="fondo h-full flex">
      <SideBar 
      imageUrl="/images/foto.jpg"
      altText="Foto de perfil"
      name='Sara Uribe'
      profession='Desarrolladora Backend'/>
      <Main />
      <SideBarDerecha />
    </div>
  )
}


export default Home;
