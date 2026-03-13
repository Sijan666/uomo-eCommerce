import React from 'react'
import Container from '../Container'
import Button from '../Button'
import { Link } from 'react-router-dom'

const Login = () => {
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
                                        <label className="label">Username or email address *</label>
                                    </div>
                                    {/* pass */}
                                    <div className="input-container w-full md:w-[500px]">
                                        <input type="password" id="" placeholder=" " className="input"/>
                                        <label className="label">Password *</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="mt-5">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-x-2.5 items-center">
                                    <input type="checkbox" name="" id="" />
                                    <Button btnText={"Remember me"} className={'text-sm font-Jost text-[#767676]'}/>
                                </div>
                                <Button btnText={"Lost password?"} className={'text-sm font-Jost text-[#222222] hover:underline'}/>
                            </div>
                        </div>
                        <div className="mt-6.5">
                            <Button btnText={'LOG IN'} className={'pt-[22px] pb-3.5 bg-[#222222] text-white font-medium text-sm font-Jost w-full'}/>
                        </div>
                        <div className="mt-6 text-center">
                            <button className=' text-[#767676] font-medium text-sm font-Jost text-center '>No account yet? 
                                <Link to={'/register'}>
                                    <span className='text-[#222222] hover:underline cursor-pointer'> Create Account</span>
                                </Link>
                            </button>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Login