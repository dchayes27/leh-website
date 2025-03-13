import ContactForm from '../../components/ContactForm';
import SpacedTitle from '../../components/SpacedTitle';
import styles from './contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <SpacedTitle title="Contact" />
      
      <div className={styles.contactInfo}>
        <p className={styles.intro}>
          Thank you for your interest in my work. 
          Feel free to reach out using the form below for inquiries about readings, workshops, or other opportunities.
        </p>
        
        <ContactForm />
      </div>
    </div>
  );
}