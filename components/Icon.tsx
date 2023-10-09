import { IconType } from 'react-icons';
import React from 'react';


interface IconProps {
    icon: IconType;
    link: string;
}

const Icon = ({ icon, link }: IconProps) =>{
    return(
        <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-white">
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-curri">
        <span className="text-g">{React.createElement(icon)}</span>
        </div>
        </a>
        
    )
}

export {Icon};