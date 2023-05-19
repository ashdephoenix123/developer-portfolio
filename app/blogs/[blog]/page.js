import imageonblog from '@/public/4.jpg'
import Image from 'next/image';

const page = async () => {

    return (
        <>
            <div className='text-gray-800 bg-gray-100 rounded-lg overflow-hidden dark:bg-gray-600  dark:text-zinc-300'>
                <Image src={imageonblog} className='w-full h-full' alt='mainImage' placeholder='blur'></Image>
                <div className='px-12 py-16 max-[1200px]:px-4 max-[1200px]:py-12'>
                    <h2 className='font-bold text-5xl text-black mb-2 max-[980px]:text-4xl dark:text-neutral-300'>Python, The tool to master AI and Machine Learning</h2>
                    <div className='fontxs flex items-center'>
                        <Image src='/me.jpg' className=' object-cover rounded-full overflow-hidden w-[30px] h-[30px]' width={100} height={100} alt='developerimage' />
                        <span className='ml-2 fontsm'><span className='font-bold'>Akash Sarki</span> posted on 18 May 2023</span>
                    </div>

                    <div className='mt-8 min-[981px]:text-lg max-[980px]:fonttest'>
                        <p>Python is a popular high-level programming language known for its simplicity and readability. Created by Guido van Rossum and first released in 1991, Python has since become one of the most widely used programming languages worldwide. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et suscipit expedita, dolores facilis nihil libero necessitatibus aspernatur nostrum repellendus quibusdam tenetur. Molestias mollitia, aliquid laboriosam quam ipsa sint velit et quas atque reiciendis doloribus quis iste placeat hic cumque sapiente iure eligendi quibusdam? Hic distinctio suscipit neque voluptatem nemo, officiis perspiciatis sapiente sed iusto labore fuga velit cupiditate impedit doloribus a sequi iure. Ipsam perferendis libero expedita aperiam ratione ea excepturi neque vitae, exercitationem recusandae explicabo animi commodi doloribus omnis aspernatur id! Rem atque autem quisquam aspernatur recusandae saepe possimus laudantium maiores, accusamus magni, maxime quae culpa hic exercitationem!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
