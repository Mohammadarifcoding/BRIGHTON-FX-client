const ContactHero = () => {
    return (
        <div>
            <div className="hero min-h-[350px]" style={{ backgroundImage: 'url(/Images/banner.jpg)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Contact Us</h1>
                        <p className="mb-5"> your trusted partner in currency exchange. We're here to assist you with all your currency buying and selling needs. If you have any questions, concerns, or if you're ready to make a transaction, feel free to reach out to us.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactHero;