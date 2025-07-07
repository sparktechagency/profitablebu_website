import React from 'react'
import img1 from '../../assets/Home/mm.png'
import img2 from '../../assets/Home/nn.png'
import img3 from '../../assets/Home/oo.png'
import back from '../../assets/Home/back.png'
import { Navigate } from '../Navigate'
import { Link } from 'react-router-dom'
const MyBusinessDetails = () => {
  return (
    <div className='container m-auto pb-20 lg:mt-8 mt-11 lg:px-0 px-4'>
        <Navigate title={'Trendy Urban Café in Dhaka City'}></Navigate>
        <div className='lg:grid grid-cols-3 gap-9'>
            <div className='bg-white shadow  p-4 text-center rounded'>
                <div className='flex justify-center'>
                    <img src={img1} alt="" />
                </div>
                <h1 className='font-semibold text-3xl py-3'>Total Views</h1>
                <h2 className='text-[#22C55E] font-semibold text-xl'>1,205</h2>
            </div>
            <div className='bg-white shadow  p-4 text-center rounded'>
                <div className='flex justify-center'>
                    <img src={img2} alt="" />
                </div>
                <h1 className='font-semibold text-3xl py-3'>Total Interests</h1>
                <h2 className='text-[#22C55E] font-semibold text-xl'>1,205</h2>
            </div>
           <div className='bg-white shadow  p-4 text-center rounded'>
                <div className='flex justify-center'>
                    <img src={img3} alt="" />
                </div>
                <h1 className='font-semibold text-3xl py-3'>Inquiries Received</h1>
                <h2 className='text-[#22C55E] font-semibold text-xl'>1,205</h2>
            </div>
        </div>

        <div className='lg:grid grid-cols-2 pt-11'>
            <img src={back} alt="" />
            <div>
                <button className='bg-[#C1E1FF] border border-[#0091FF] px-2 py-2 rounded'>#Francise</button>
                <h1 className='text-2xl text-[#0091FF]'>Trendy Urban Café in Dhaka City</h1>
                <div className='space-y-2 my-3'>
                    <p><span className='font-semibold'>Business Type:</span> Franchise Resale</p>
                    <p><span className='font-semibold'>Price:</span> Franchise Resale</p>
                    <p><span className='font-semibold'>Location:</span> Franchise Resale</p>
                    <p><span className='font-semibold'>Industry:</span> Franchise Resale</p>
                    <p><span className='font-semibold'>Ownership Type:</span> Franchise Resale</p>
                    <p><span className='font-semibold'>Reason for Selling :</span> Franchise Resale</p>
                </div>
                <div className='flex gap-5'>
                    <Link to={'/EditNewBusiness'}><button className='bg-[#0091FF] px-4 py-1 rounded text-white'>Edit Franchise information</button></Link>
                    <Link to={'/interestBuyer'}><button className='bg-[#0091FF] px-4 py-1 rounded text-white'>interested buyers</button></Link>
                </div>
            </div>
        </div>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, libero voluptatibus? Earum eum quia iusto praesentium veniam iure similique. Sint cum inventore eum quam fugit recusandae, ea dolorum modi consequuntur harum autem quasi, possimus adipisci alias aspernatur iusto ratione eius amet ducimus unde? Minima nostrum quisquam qui voluptate provident, pariatur quis assumenda! Explicabo impedit suscipit maiores quo dicta neque, praesentium rerum excepturi porro? Natus porro consequatur vitae accusantium minima harum at amet culpa, quidem eaque odio nisi tenetur nesciunt veritatis commodi numquam unde optio, laudantium laborum. Neque qui repellat quos voluptas, explicabo voluptatum atque et ut deserunt quaerat similique officia cupiditate unde fuga aperiam necessitatibus reiciendis id assumenda ratione quibusdam enim soluta quam. Voluptate nobis tempora, officia ratione, possimus mollitia optio quasi ipsa quaerat repellat nulla nemo maxime rem facilis non explicabo vitae autem eos et quis nam in quo voluptatem. Aliquid, sequi id? At maiores reiciendis, voluptatum accusamus nisi autem fuga ratione adipisci? Consequatur rem vitae vero nesciunt aspernatur blanditiis cumque, ad vel cupiditate, ex beatae incidunt quo velit suscipit consequuntur officia ea consectetur! Vero voluptate autem, temporibus odio cupiditate asperiores facere ratione labore modi a sapiente, ipsum, illum et consequuntur illo magni at accusantium voluptatum veniam itaque debitis!
        </div>

        <h1 className='text-[#0091FF] font-bold text-3xl mt-9'>Location</h1>
        <p className='mb-4'>Conference Hall 3, TechSphere Tower, 789 Silicon Avenue, San Francisco</p>

        <iframe
        
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064807.547859669!2d-104.6866391552435!3d41.39632494210276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87938dc8b50cfced%3A0xa127900c0ff30ac4!2sNebraska%2C%20USA!5e0!3m2!1sen!2sbd!4v1748673124245!5m2!1sen!2sbd"
          className="w-full h-[300px]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="USA Map"
        ></iframe>
      

    </div>
  )
}

export default MyBusinessDetails