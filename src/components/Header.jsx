import React from 'react';
const Header = () => {
    return (
        <>
            <div className="sticky top-0 z-10">
                <div
                    className='fixed top-0 w-[100vw] backdrop-blur-md bg-[rgba(0,0,0,0.8)] h-[75px] px-10 py-5 flex items-center justify-between z-10'>
                    <a href="/">
                        <div className='w-max flex flex-row items-center'>
                            <img src="/washingtonlogo.svg" alt="logo" className='w-10 h-10 pr-2'/>
                            <p className={"text-white"}>Teen Mental Health in WA</p>
                        </div>
                    </a>
                    <div className='flex items-center gap-10 invisible sm:visible'>
                        <a href="#problem" className='text-white'>The Problem</a>
                        <a href="#stats" className='text-white'>Stats</a>
                        <a href="#wsdh" className='text-white'>WSDH</a>
                        <a href="#support" className='text-white'>Support</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;