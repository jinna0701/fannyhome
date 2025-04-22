import React from 'react'
import Image from 'next/image'
import Offer from './Component/Offer'
function About() {

 




        return (
                <div>
                <div className="flex items-center mt-10 mb-10">
                        <div className="flex-1 text-center text-black">
                                <h2 className="text-3xl font-semibold mb-4">Connect with your community!</h2>
                                <p className="text-lg">
                                        We actively connect with local organizations, events, and resources to build strong relationships and foster a sense of belonging. By working together, we create a network of support that benefits everyone. 
                                </p>
                        </div>
                        <div className="flex-1">
                                <Image src="/ABOUT.png" alt="Children playing" width={500} height={300} />
                        </div>

                       

                






                </div>
                <Offer/>


                </div>
                
        )
}

export default About;
