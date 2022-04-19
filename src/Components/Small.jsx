import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const Small = ({toggle}) => {
        if(toggle){
            return(
                <div className='small'>
                    <div className='divlinks2'>
                        <ul className='links2'>
                        <li className='links'><a href="">Homepage</a></li>
                        <li className='links'><a href="https://github.com/lgrave264">MyHub</a></li>
                        <li className='links'><a href="https://github.com/lgrave264/portfolio"><AiFillGithub/></a></li>
                        </ul>
                    </div>
                </div>
            )
        }else{
            return(
                <div></div>
            )
        }
}

export default Small
