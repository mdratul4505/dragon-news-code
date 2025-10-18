import React from 'react';
import swimming from '../../assets/swimming.png'
import playground from '../../assets/playground.png'
import classImg from '../../assets/class.png'

const QZone = () => {
    return (
        <div className='bg-base-200 p-4 mt-5'>
            <h2 className='font-bold my-5'>Q-Zone</h2>
            <div className='space-y-5'>
                <img className='w-full' src={swimming} alt="" />
                <img className='w-full' src={classImg} alt="" />
                <img className='w-full' src={playground} alt="" />
            </div>
        </div>
    );
};

export default QZone;