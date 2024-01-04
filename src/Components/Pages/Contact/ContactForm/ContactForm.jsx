const ContacthtmlForm = () => {
    return (
        <div>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe
                            width="100%"
                            height="100%"
                            className="absolute inset-0"
                            frameBorder="0"
                            title="map"
                            marginHeight="0"
                            marginWidth="0"
                            scrolling="no"
                            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                            style={{
                                filter: 'grayscale(1) contrast(1.2) opacity(0.4)',
                            }}
                        />

                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-bold text-gray-900 tracking-widest text-xl">Worthing FX Office</h2>
                                <p className="mt-1">
                                    37 Burnt Oak Broadway,

                                    Edgware, Middlesex
                                    London
                                    HA8 5JZ</p>
                            </div>
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-bold text-gray-900 tracking-widest text-xl">BRIGHTON FX</h2>
                                <p className="mt-1">
                                    37 Burnt Oak Broadway,

                                    Edgware, Middlesex
                                    London
                                    HA8 5JZ</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-8 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-small">EMAIL</h2>
                                <a className="text-indigo-500 leading-relaxed">info@worthingfxexpress.co.uk</a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-small mt-4">PHONE</h2>
                                <p className="leading-relaxed">123-456-7890</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-gray-900 text-4xl mb-1 font-bold title-font">Contact Brighton Fx</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">We'd love to hear from you!
                            Please feel free to reach out to us</p>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="Phone" className="leading-7 text-sm text-gray-600">Phone</label>
                            <input
                                type="tel"
                                id="tel"
                                name="phone"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button className="text-white bg-[#8cd424] border-0 py-2 px-6 focus:outline-none hover:bg-[#4a54a4] rounded text-lg">Send</button>
                        <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContacthtmlForm;