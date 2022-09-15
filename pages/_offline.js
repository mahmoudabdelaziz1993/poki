
import Image from 'next/image'

const offline = () => {
  return (
    <div className="container flex flex-col gap-4 items-center justify-center h-screen w-100">
      {/* <Image src={"/images/Going offline-bro.svg"} width={300} height={300}/> */}
      <h3 className='text-red-300'>Sorry  you are offline !!</h3>  </div>
  )
}

export default offline