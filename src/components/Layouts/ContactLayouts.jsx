const ContactLayouts = () => {
    return (
        <div className="bottom-0 left-0 right-0 py-20 text-center bg-custom-yellow" id="contact">
        <span className="mt-12 text-5xl font-bold">Drop us a line</span>
        <form className="w-1/2 mx-auto mt-10">
            <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
                <input type="text" className="p-2 bg-gray-200 rounded-lg" placeholder="name" />
                <input type="text" className="p-2 bg-gray-200 rounded-lg" placeholder="email" />
            </div>
            <div className="mt-10">
                <textarea className="w-full p-2 bg-gray-200 rounded-lg h-screen-25" placeholder="message"></textarea>
            </div>
            <div className="mt-6">
                <button type="submit"
                    className="w-full px-5 py-2 text-xl text-white bg-red-700 rounded-lg hover:shadow-lg">Send</button>
            </div>
        </form>
        </div>
 
   
    )
}

export default ContactLayouts;