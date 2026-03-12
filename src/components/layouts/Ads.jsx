import React from 'react'
import Container from '../Container'
import { adsApi } from '../../data/adsApi'
import Image from '../Image'

const Ads = () => {
    return (
        <section id='ads'>
            <div className="pt-[83px] pb-[102px]">
                <Container>
                    <div className="heading text-center">
                        <h3 className='md:text-[35px] text-[25px] font-Jost text-[#212529]'>@UOMO</h3>
                    </div>
                    <div className="mt-8.5">
                        <div className="grid md:grid-cols-6 grid-cols-3 gap-1.5">
                            {adsApi?.map((item)=>(
                                <div key={item?.id} className="">
                                    <Image imgSrc={item.adsImg}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Ads