'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [formData, setFormData] = useState({ username: '', phone: '' });
  const [activeSection, setActiveSection] = useState('description');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.username}! We will contact you at ${formData.phone}`);
    setFormData({ username: '', phone: '' });
  };

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const offsetPosition = element.offsetTop - navbarHeight - 20;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const styles = {
    container: {
      fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
      backgroundColor: 'black',
      padding: '0',
      margin: '0',
      minHeight: '100vh',
      backgroundImage: 'linear-gradient(135deg, rgb(5, 5, 5) 0%, rgb(10, 10, 10) 100%)',
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'black',
      padding: '15px 20px',
      color: '#fff',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
      flexWrap: 'wrap',
    },
    logo: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: '5px',
    },
    navLinks: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
      justifyContent: 'center',
      width: '100%',
      marginTop: '10px',
    },
    navButton: {
      backgroundColor: 'transparent',
      border: '2px solid #FFCD29',
      padding: '8px 14px',
      borderRadius: '5px',
      color: '#fff',
      cursor: 'pointer',
      fontSize: '14px',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
    },
    activeNavButton: {
      backgroundColor: '#FFCD29',
      border: '2px solid #FFCD29',
      padding: '8px 14px',
      borderRadius: '5px',
      color: '#034694',
      cursor: 'pointer',
      fontSize: '14px',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      fontWeight: 'bold',
    },
    section: {
      backgroundColor: '#fff',
      maxWidth: '800px',
      margin: '30px auto',
      padding: '30px',
      paddingTop: '50px',
      borderRadius: '12px',
      boxShadow: '0 6px 16px rgba(108, 171, 221, 0.2)',
      textAlign: 'center',
      scrollMarginTop: '80px',
      borderTop: '4px solid #6CABDD',
    },
    title: {
      fontSize: '36px',
      fontWeight: '700',
      color: '#001C58',
      marginBottom: '25px',
      textTransform: 'uppercase',
      lineHeight: '1.2',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    },
    subtitle: {
      fontSize: '26px',
      fontWeight: '600',
      color: '#6CABDD',
      marginBottom: '20px',
      textTransform: 'capitalize',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
    },
    text: {
      fontSize: '17px',
      lineHeight: '1.7',
      color: '#444',
      marginBottom: '25px',
      padding: '0 12px',
      textAlign: 'center',
      fontWeight: 'bold',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '30px 0',
      width: '100%',
    },
    formSection: {
      backgroundColor: '#fff',
      maxWidth: '800px',
      margin: '30px auto',
      padding: '30px',
      borderRadius: '12px',
      boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
      textAlign: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      marginTop: '20px',
      alignItems: 'center',
      borderRadius: '12px',
      padding: '20px',
    },
    input: {
      width: '80%',
      padding: '14px',
      fontSize: '16px',
      color: 'black',
      borderRadius: '8px',
      border: '1px solid #ddd',
      backgroundColor: '#fff',
      outline: 'none',
      transition: 'border 0.3s',
    },
    submitButton: {
      backgroundColor: '#6CABDD',
      color: '#fff',
      border: 'none',
      padding: '14px 28px',
      borderRadius: '8px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      fontWeight: 'bold',
      marginTop: '10px',
      boxShadow: '0 4px 8px rgba(108, 171, 221, 0.3)',
    },
    priceTag: {
      backgroundColor: '#001C58',
      color: 'white',
      padding: '10px 15px',
      borderRadius: '8px',
      display: 'inline-block',
      fontWeight: 'bold',
      margin: '15px 0',
      boxShadow: '0 4px 8px rgba(0, 28, 88, 0.3)',
    },
  };

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <div style={styles.logo}>SELLY Technology Store</div>
        <div style={styles.navLinks}>
          <a href="#description" onClick={() => handleNavClick('description')} style={activeSection === 'description' ? styles.activeNavButton : styles.navButton}>Home</a>
          <a href="#storage" onClick={() => handleNavClick('storage')} style={activeSection === 'storage' ? styles.activeNavButton : styles.navButton}>Features</a>
          <a href="#contact" onClick={() => handleNavClick('contact')} style={activeSection === 'contact' ? styles.activeNavButton : styles.navButton}>Contact</a>
        </div>
      </nav>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <section id="description" style={styles.section}>
          <h1 style={styles.title}>Smart Storage and Strong Protection HDD</h1>
          <p style={styles.text}>Get peace of mind with our 500GB external hard drive. It&#39;s built for speed, safety, and everyday use. Store your photos, videos, and business files with confidence. Easy to carry, simple to use — the smart choice for work and life.</p>
          <div style={styles.imageContainer}>
            <Image src="/hdd.jpg" alt="HDD External Case and USB" width={500} height={300} style={styles.image} />
          </div>
        </section>

        <section id="storage" style={styles.section}>
          <h2 style={styles.subtitle}>Maximize Your Storage, Maximize Your Potential</h2>
          <p style={styles.text}>Say goodbye to limited storage. Our 500GB hard drive gives your business or personal data room to grow. Save videos, documents, backups, and more — all in one secure place. Perfect for entrepreneurs, content creators, and professionals who need fast, reliable storage.</p>
          <div style={styles.imageContainer}>
            <Image src="/storage.jpg" alt="500GB HDD Storage" width={500} height={300} style={styles.image} />
          </div>
          <h2 style={styles.subtitle}>Special Offer</h2>
          <div style={styles.priceTag}>Buy one for TSh 35,000 or get two for just TSh 30,000 each</div>
          <p style={styles.text}>Save TSh 10,000 with our bundle deal!</p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>Powered by SELLY Technology</h2>
          <p style={styles.text}>SELLY ensures faster, safer, and energy-efficient data management. Enjoy encryption and power-saving features in one device.</p>
        </section>

        <section id="contact" style={styles.formSection}>
          <h2 style={styles.subtitle}>Are you Interested? Share Your Info</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input type="text" name="username" placeholder="Enter your name" value={formData.username} onChange={handleChange} required style={styles.input} />
            <input type="tel" name="phone" placeholder="Enter phone number" value={formData.phone} onChange={handleChange} required style={styles.input} />
            <button type="submit" style={styles.submitButton}>Get Your HDD Now</button>
          </form>
        </section>
      </div>
    </div>
  );
}
