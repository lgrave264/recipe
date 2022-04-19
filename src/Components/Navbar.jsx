import React, {useEffect, useState} from 'react'
import Small from './Small'
import { AiOutlineMenu } from 'react-icons/ai';
import { FiMoreVertical } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import { SiNetlify } from 'react-icons/si';

const Navbar = () => {
    const [size, setSize] = useState(window.innerWidth);

const checkSize = () => {
    setSize(window.innerWidth);
};

useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', checkSize);
}, []);

const [toggle, setToggle] = useState(false);

    if(size < 558.40){
        return(
            <header>
                <ul className='navbar'>
                    <li id='title2'>CODING</li>
                    <li><button onClick={() => setToggle(!toggle)}id='menu'><AiOutlineMenu size={20} color={'lightblue'}/></button></li>
                </ul>
                <Small toggle={toggle}/>
            </header>
        )
    }else{
        return (
            <header>
                <ul  className='navbar'>
                    <li id='title'>Luca Graves</li>
                    <li className='links'><a href="">Homepage</a></li>
                    <li className='links'><a href="https://github.com/lgrave264">MyHub</a></li>
                    <li className='links'><a href="https://github.com/lgrave264/portfolio"><AiFillGithub size={25} color={'white'}/></a></li>
                    <li className='links'><a href="https://app.netlify.com/teams/lpgra256/overview"><SiNetlify size={25} color={'white'}/></a></li>
                </ul>
            </header>
        )
    }
}

export default Navbar
