import React from 'react'
import Container from '../Container'
import Image from '../Image'
import blogImg from '../../../public/blog/blog.png'
import img01 from '../../../public/blog/img01.png'
import img02 from '../../../public/blog/img02.png'
import Button from '../Button'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { FaStar } from 'react-icons/fa'

const Blog = () => {
  return (
    <div>
        <Container>
            {/* top */}
           <div className='ml-0 md:ml-[120px] lg:ml-[240px] mt-[50px] md:mt-[70px] lg:mt-[90px] mb-[43px]'>
             <h1 className='font-bold font-Jost text-[22px] md:text-[28px] lg:text-[35px] text-[#222222] uppercase'>5 Tips to Increase Your Online Sales</h1>
             <div className='flex gap-[15px] md:gap-[25px] items-center mt-3 text-[12px] md:text-[14px] font-Jost text-[#767676] leading-[24px]'>
                <h3>BY ADMIN</h3>
                <h3>APRIL 05, 2020</h3>
                <h3>TRENDS</h3>
             </div>
           </div>
           <Image imgSrc={blogImg}/>
           <div className='ml-0 md:ml-[120px] lg:ml-[240px] max-w-full lg:max-w-[930px] mt-10 mb-[43px] px-4 md:px-0'>
            <p className='text-[13px] md:text-[14px] text-[#222222] font-Jost leading-[30px] mb-[40px] md:mb-[60px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien dignissim a elementum. Sociis metus, hendrerit mauris id in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla massa est viverra interdum. Praesent auctor nulla morbi non posuere mattis. Arcu eu id maecenas cras. Eget fames tincidunt leo, sed vitae, pretium interdum. Non massa, imperdiet nunc sit sapien. Tempor lectus ornare quis mi vel. Nibh euismod donec elit posuere lobortis consequat faucibus aliquam metus. Ornare consequat, vulputate sit maecenas mauris urna sed fringilla. Urna fermentum iaculis pharetra, maecenas dui nullam nullam rhoncus. Facilisis quis vulputate sem gravida lacus, justo placerat.</p>
            <h2 className='text-[15px] md:text-[16px] font-medium text-[#222222] font-Jost leading-[30px]'>Sed do eiusmod tempor incididunt ut labore</h2>
            <p className='text-[13px] md:text-[14px] text-[#222222] font-Jost leading-[30px] mt-10 mb-[30px]'>Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule Evening Creepeth own lesser years itself so seed fifth for grass evening fourth shall you're unto that. Had. Female replenish for yielding so saw all one to yielding grass you'll air sea it, open waters subdue, hath. Brought second Made. Be. Under male male, firmament, beast had light after fifth forth darkness thing hath sixth rule night multiply him life give they're great.</p>

            <div className='flex flex-col md:flex-row items-start md:items-center gap-[30px] md:gap-[151px]'>
                <div>
                    <h2 className='text-[15px] md:text-[16px] font-medium text-[#222222] font-Jost leading-[30px] mb-3'>Why choose product?</h2>
                    <ul className='list-disc list-inside text-[13px] md:text-[14px] text-[#222222] font-Jost leading-[30px]'>
                        <li>Creat by cotton fibric with soft and smooth</li>
                        <li>Simple, Configurable (e.g. size, color, etc.), bundled</li>
                        <li>Downloadable/Digital Products, Virtual Products</li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-[15px] md:text-[16px] font-medium text-[#222222] font-Jost leading-[30px] mb-3'>Sample Number List</h2>
                    <ol className='list-decimal list-inside text-[13px] md:text-[14px] text-[#222222] font-Jost leading-[30px]'>
                        <li>Create Store-specific attrittbutes on the fly</li>
                        <li>Simple, Configurable (e.g. size, color, etc.), bundled</li>
                        <li>Downloadable/Digital Products, Virtual Products</li>
                    </ol>
                </div>
            </div>
            <p className='text-[13px] md:text-[14px] text-[#222222] font-Jost leading-[30px] mt-[34px]'>She'd years darkness days. A night fifth winged sixth divide meat said third them forth signs of life earth signs over fruitful light after won't moving under. Thing yielding upon seed. Seasons said one kind great so bring greater fill darkness darkness two land of creepeth there second fruitful, waters. Make don't void years Gathering gathering divide fill.</p>
        </div>
        <div className='flex flex-col md:flex-row gap-[20px] md:gap-[31px] items-center justify-center px-4 md:px-0'>
            <Image imgSrc={img01}/>
            <Image imgSrc={img02}/>
        </div>
        {/* Bottom */}
        <div className='ml-0 md:ml-[120px] lg:ml-[240px] max-w-full lg:max-w-[930px] mt-[50px] mb-[110px] px-4 md:px-0'>
            <p className='text-[13px] md:text-[14px] text-[#222222] font-Jost leading-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien dignissim a elementum. Sociis metus, hendrerit mauris id in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla massa est viverra interdum. Praesent auctor nulla morbi non posuere mattis. Arcu eu id maecenas cras. Eget fames tincidunt leo, sed vitae, pretium interdum. Non massa, imperdiet nunc sit sapien. Tempor lectus ornare quis mi vel. Nibh euismod donec elit posuere lobortis consequat faucibus aliquam metus. Ornare consequat, vulputate sit maecenas mauris urna sed fringilla. Urna fermentum iaculis pharetra, maecenas dui nullam nullam rhoncus. Facilisis quis vulputate sem gravida lacus, justo placerat.</p>
            <p className='text-[13px] md:text-[14px] text-[#222222] font-Jost leading-[30px] mt-[60px] mb-[50px]'>
                She'd years darkness days. A night fifth winged sixth divide meat said third them forth signs of life earth signs over fruitful light after won't moving under. Thing yielding upon seed. Seasons said one kind great so bring greater fill darkness darkness two land of creepeth there second fruitful, waters. Make don't void years Gathering gathering divide fill.
            </p>
            {/* Share Buttons */}
            <div className='flex flex-wrap gap-[10px] items-center justify-center'>
                <Button className='bg-[#306199] text-[#ffffff] font-Jost text-[13px] md:text-[14px] py-[14px] px-[20px] md:px-[58px] hover:bg-[#333333]' btnText='Share On Facebook'/>
                <Button className='bg-[#26C4F1] text-[#ffffff] font-Jost text-[13px] md:text-[14px] py-[14px] px-[20px] md:px-[58px] hover:bg-[#333333]' btnText='Share On Twitter'/>
                <Button className='bg-[#E82B2D] text-[#ffffff] font-Jost text-[13px] md:text-[14px] py-[14px] px-[20px] md:px-[58px] hover:bg-[#333333]' btnText='Share On Pinterest'/>
                <Button className='bg-[#222222] text-[#ffffff] font-Jost text-[13px] md:text-[14px] py-[14px] px-[12px] hover:bg-[#333333]' btnText='+'/>
            </div>

            {/* Post */}
            <div className='flex justify-between border-t border-b border-[#E4E4E4] py-[30px] md:py-[45px] mt-[50px]'>
                <div className='flex gap-2 cursor-pointer group'>
                    <MdKeyboardArrowLeft size={20} className='text-[#767676]' />
                    <div>
                        <p className='text-[12px] md:text-[14px] text-[#767676] font-Jost font-medium uppercase mb-1'>Previous Post</p>
                        <p className='text-[12px] md:text-[14px] text-[#222222] font-Jost group-hover:text-[#FF6F61] transition-colors'>Given Set was without from god divide rule Hath</p>
                    </div>
                </div>

                <div className='flex gap-2 cursor-pointer group text-right'>
                    <div>
                        <p className='text-[12px] md:text-[14px] text-[#767676] font-Jost font-medium uppercase mb-1'>Next Post</p>
                        <p className='text-[12px] md:text-[14px] text-[#222222] font-Jost group-hover:text-[#FF6F61] transition-colors'>Tree earth fowl given moveth deep lesser After</p>
                    </div>
                    <MdKeyboardArrowRight size={20} className='text-[#767676]' />
                </div>
            </div>

            {/* Reviews */}
            <div>
                <h2 className='font-Jost font-medium text-[16px] md:text-[18px] text-[#222222] mt-[50px] mb-[26px]'>Reviews</h2>

                {/* Review 1 */}
                <div className='flex gap-4 pb-[23px] border-b border-[#E4E4E4] mb-[40px]'>
                    <div className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full bg-[#E4E4E4] flex-shrink-0'></div>
                    <div className='flex-1'>
                        <div className='flex justify-between items-start'>
                            <div>
                                <p className='font-Jost text-[13px] md:text-[14px] text-[#222222]'>Janice Miller</p>
                                <p className='font-Jost text-[13px] md:text-[14px] text-[#767676]'>April 06, 2020</p>
                            </div>
                            <div className='flex gap-1 text-[#EEBA36]'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                        <p className='font-Jost text-[13px] md:text-[14px] text-[#767676] leading-[24px] mt-[20px]'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est...</p>
                    </div>
                </div>

                {/* Review 2 */}
                <div className='flex gap-4'>
                    <div className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full bg-[#E4E4E4] flex-shrink-0'></div>
                    <div className='flex-1'>
                        <div className='flex justify-between items-start'>
                            <div>
                                <p className='font-Jost font-medium text-[13px] md:text-[14px] text-[#222222]'>Benjam Porter</p>
                                <p className='font-Jost text-[13px] md:text-[14px] text-[#767676]'>April 06, 2020</p>
                            </div>
                            <div className='flex gap-1 text-[#EEBA36]'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                        <p className='font-Jost text-[13px] md:text-[14px] text-[#767676] leading-[24px] mt-[20px]'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est...</p>
                    </div>
                </div>
            </div>

            {/* Review Form */}
            <div className='mt-[54px]'>
                <h2 className='font-Jost font-medium text-[16px] md:text-[18px] text-[#222222] mb-1'>Be the first to review "Message Cotton T-Shirt"</h2>
                <p className='font-Jost text-[13px] md:text-[14px] text-[#222222] mb-[30px]'>Your email address will not be published. Required fields are marked *</p>

                <div className='flex items-center gap-[18px] mb-[26px]'>
                    <p className='font-Jost text-[13px] md:text-[14px] text-[#222222] leading-[24px]'>Your rating *</p>
                    <div className='flex gap-1 text-[#EEBA36]'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>

                <textarea
                    placeholder='Your Review'
                    className='w-full border border-[#E4E4E4] p-4 font-Jost text-[13px] md:text-[14px] text-[#767676] h-[213px] resize-none outline-[#222222] mb-[30px]'
                />

                <div className='relative border border-[#E4E4E4] mb-[30px]'>
                    <span className='absolute -top-[10px] left-3 bg-white px-1 font-Jost text-[13px] md:text-[14px] text-[#222222] leading-[24px]'>Name *</span>
                    <input
                        type='text'
                        placeholder='Your name'
                        className='w-full p-4 font-Jost text-[13px] md:text-[14px] text-[#222222] outline-[#222222]'
                    />
                </div>

                <input
                    type='email'
                    placeholder='Email address *'
                    className='w-full border border-[#E4E4E4] p-4 font-Jost text-[13px] md:text-[14px] text-[#767676] outline-[#222222] mb-[27px]'
                />

                <div className='flex items-center gap-2 mb-[27px]'>
                    <input type='checkbox' id='save' className='w-4 h-4' />
                    <label htmlFor='save' className='font-Jost text-[13px] md:text-[14px] text-[#767676]'>Save my name, email, and website in this browser for the next time I comment.</label>
                </div>

                <Button className='bg-[#222222] text-white font-Jost font-medium leading-[24px] text-[13px] md:text-[14px] py-[18px] md:py-[22px] px-[50px] md:px-[74px] hover:bg-[#333333] transition-colors uppercase' btnText='submit'/>
            </div>

        </div>
        </Container>
    </div>
  )
}

export default Blog