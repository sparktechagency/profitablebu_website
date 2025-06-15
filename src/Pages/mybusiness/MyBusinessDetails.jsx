import React from 'react'
import img1 from '../../assets/Home/mm.png'
import img2 from '../../assets/Home/nn.png'
import img3 from '../../assets/Home/oo.png'
import back from '../../assets/Home/back.png'
import { Navigate } from '../Navigate'
const MyBusinessDetails = () => {
  return (
    <div className='container m-auto pb-20'>
        <Navigate title={'Trendy Urban Café in Dhaka City'}></Navigate>
        <div className='grid grid-cols-3 gap-9'>
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

        <div className='grid grid-cols-2 pt-11'>
            <img src={back} alt="" />
            <div>
                <button className='bg-[#C1E1FF] border border-[#0091FF] px-2 py-2 rounded'>#Francise</button>
                <h1 className='text-2xl text-[#0091FF]'>Trendy Urban Café in Dhaka City</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, sapiente eos. Ut, et. Provident sapiente numquam iure quae. Quae fuga ad tempore maxime aliquam, tempora eos harum sapiente aliquid molestiae dolorum. Magnam ut culpa ducimus vel ab accusantium quae maiores unde neque, sit cumque hic aspernatur veritatis illum sint eum.</p>
                <div className='flex gap-5'>
                    <button className='bg-[#0091FF] px-4 py-1 rounded text-white'>Edit Franchise information</button>
                    <button className='bg-[#0091FF] px-4 py-1 rounded text-white'>interested buyers</button>
                </div>
            </div>
        </div>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, libero voluptatibus? Earum eum quia iusto praesentium veniam iure similique. Sint cum inventore eum quam fugit recusandae, ea dolorum modi consequuntur harum autem quasi, possimus adipisci alias aspernatur iusto ratione eius amet ducimus unde? Minima nostrum quisquam qui voluptate provident, pariatur quis assumenda! Explicabo impedit suscipit maiores quo dicta neque, praesentium rerum excepturi porro? Natus porro consequatur vitae accusantium minima harum at amet culpa, quidem eaque odio nisi tenetur nesciunt veritatis commodi numquam unde optio, laudantium laborum. Neque qui repellat quos voluptas, explicabo voluptatum atque et ut deserunt quaerat similique officia cupiditate unde fuga aperiam necessitatibus reiciendis id assumenda ratione quibusdam enim soluta quam. Voluptate nobis tempora, officia ratione, possimus mollitia optio quasi ipsa quaerat repellat nulla nemo maxime rem facilis non explicabo vitae autem eos et quis nam in quo voluptatem. Aliquid, sequi id? At maiores reiciendis, voluptatum accusamus nisi autem fuga ratione adipisci? Consequatur rem vitae vero nesciunt aspernatur blanditiis cumque, ad vel cupiditate, ex beatae incidunt quo velit suscipit consequuntur officia ea consectetur! Vero voluptate autem, temporibus odio cupiditate asperiores facere ratione labore modi a sapiente, ipsum, illum et consequuntur illo magni at accusantium voluptatum veniam itaque debitis!
        </div>
    </div>
  )
}

export default MyBusinessDetails