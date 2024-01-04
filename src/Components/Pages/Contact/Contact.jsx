import ContactForm from "./ContactForm/ContactForm";
import ContactHero from "./ContactHero/ContactHero";


const Contact = () => {
    return (
        <div className="md:flex-row flex-col">
           <ContactHero></ContactHero>
           <ContactForm></ContactForm>
        </div>
    );
};

export default Contact;