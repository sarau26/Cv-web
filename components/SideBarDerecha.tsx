import { Icon } from '@/components/Icon';
import { GrFacebookOption, GrInstagram, GrLinkedinOption, GrGithub } from 'react-icons/gr';

const SideBarDerecha = () =>{
    return(
    <aside className="h-full w-1/12 flex flex-col items-center bg-white py-10 fixed top-0 right-0 z-50">
      <div className="flex flex-col gap-4 px-4">
        <span className='font-semibold'>Links</span>
        <span><Icon icon={GrFacebookOption} link='https://www.facebook.com/sarauribe25'/></span>
        <span><Icon icon={GrInstagram} link='https://www.instagram.com/sarauribe01/'/></span>
        <span><Icon icon={GrLinkedinOption} link='https://www.linkedin.com/in/sara-uribe-zapata-32b22b24a/'/></span> 
        <span><Icon icon={GrGithub} link='https://github.com/sarau26'/></span>
      </div>
    </aside>
    )
};

export {SideBarDerecha};