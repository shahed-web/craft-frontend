import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <form>
        <div className='w-full flex flex-col gap-2'>
            <div className="flex gap-2">
                <input type="text" placeholder="First Name" className="w-full p-2 bg-[#FFF7EF] rounded-md" />
                <input type="text" placeholder="Last Name" className="w-full p-2 bg-[#FFF7EF] rounded-md" />
            </div>
            <div>
                <input type="text" placeholder="Email" className="w-full p-2 bg-[#FFF7EF] rounded-md" />
            </div>
            <div>
                <textarea placeholder="Message" className='w-full h-44 p-2 bg-[#FFF7EF] rounded-md'></textarea>
            </div>
            <div>
                <button className="font-amatic bg-green-800 text-white py-2 px-4 rounded-xl">Send message</button>
            </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
