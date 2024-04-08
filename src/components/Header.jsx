import React from 'react';
const Header = () => {
    return (
        <>
            <div className="sticky top-0 z-10">
                <div
                    className='fixed top-0 w-[100vw] backdrop-blur-md bg-[rgba(0,0,0,0.8)] h-[75px] px-10 flex items-center justify-between z-10'>
                    <a href="/">
                        <div className='flex items-center'>
                            <p>Mental Health in Washington</p>
                        </div>
                    </a>
                    <div className='flex items-center gap-10'>
                        <a href="#stats" className='text-white'>The Stats</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;