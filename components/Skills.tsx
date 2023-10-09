import { IconType } from 'react-icons';
import React from 'react';

interface SkillProps {
    icon: IconType;
    texto: string;
}


const Skills = ({ icon, texto }: SkillProps) => {
    return (
        <div className="flex items-center">
            <div className="mr-2">{React.createElement(icon, { className: 'text-curri' })}</div>
            <div className='text-sm'>{texto}</div>
        </div>
    );
};

export {Skills};