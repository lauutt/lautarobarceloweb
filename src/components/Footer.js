import React, { useContext } from 'react';
import { Text } from '../containers/Language';


export default function Footer() {
    return (
        <div>
            <div className='block' style={{marginTop:"5%"}}>
                <div className='subtitle'>
                <p style={{backgroundColor:'lightblue', color:'black'}}> <Text tid='design'/> lauutt </p>
                </div>
            </div>
        </div>
    )

}