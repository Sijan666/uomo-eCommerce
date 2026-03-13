import React from 'react'
import Container from '../Container'
import Button from '../Button'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <section id='login'>
            <div className="pt-[97px] pb-[202px] ">
                <Container>
                    <div className="w-full md:w-[500px] mx-auto">
                        <div className="heading text-center">
                            <div className="flex gap-x-15 justify-center">
                                <Link to={'/login'}>
                                    <Button btnText={"LOGIN"} className={'text-base font-medium text-[#222222] beforeAfterBlack'}/>
                                </Link>
                                <Link to={'/register'}>
                                    <Button btnText={"REGISTER"} className={'text-base font-medium text-[#222222] beforeAfterBlack'}/>
                                </Link>
                            </div>
                        </div>
                        <div className="inputForm mt-12.5">
                            <form>
                                <div className="flex flex-col items-center gap-7.5">
                                    {/* name */}
                                    <div className="input-container w-full md:w-[500px]">
                                        <input type="text" id="" placeholder=" " className="input"/>
                                        <label  className="label">Username</label>
                                    </div>
                                    {/* email */}
                                    <div className="input-container w-full md:w-[500px]">
                                        <input type="email" id="" placeholder=" " className="input"/>
                                        <label  className="label">Email address  * </label>
                                    </div>
                                    {/* pass */}
                                    <div className="input-container w-full md:w-[500px]">
                                        <input type="password" id="" placeholder=" " className="input"/>
                                        <label  className="label">Password *</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="mt-5">
                            <p className='text-sm text-[#767676] leading-6 font-Jost'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                        </div>
                        <div className="mt-6.5">
                            <Button btnText={'REGISTER'} className={'pt-[22px] pb-3.5 bg-[#222222] text-white font-medium text-sm font-Jost w-full'}/>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Register