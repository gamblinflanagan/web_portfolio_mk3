import { useState } from 'react';
import {  MessageSquare, Mail, Phone, Linkedin, Github, Send } from 'lucide-react';


const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
      };
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };
    
      const socialLinks = [
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Github, href: '#', label: 'Github'}
      ];
    

    return (
    <>
        <section className="py-20 relative" id="contact">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_#FF3366_0%,_transparent_50%)] opacity-20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_#33CCFF_0%,_transparent_50%)] opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#FF3366] to-[#33CCFF] text-transparent bg-clip-text">
              DO YOU HAVE A PROJECT TO DISCUSS?
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <MessageSquare className="w-6 h-6 text-[#33CCFF]" />
              <span className="text-2xl font-bold">GET IN TOUCH</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">CONTACT</h3>
                <a
                  href="mailto:joeyflanagan97@gmail.com"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>joeyflanagan97@gmail.com</span>
                </a>
                <a
                  href="tel:+19735702383"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>(973) 570-2383</span>
                </a>
                <a
                  href="tel:+18629552657"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>(862) 955-2657</span>
                </a>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">SOCIAL MEDIA</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6 group-hover:text-[#33CCFF] transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#33CCFF] focus:ring-1 focus:ring-[#33CCFF] transition-colors placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#33CCFF] focus:ring-1 focus:ring-[#33CCFF] transition-colors placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#33CCFF] focus:ring-1 focus:ring-[#33CCFF] transition-colors placeholder-gray-400 resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="relative group w-full"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#33CCFF] to-[#FF3366] rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-8 py-4 bg-[#0B0F19] rounded-lg leading-none flex items-center justify-center space-x-2">
                  <span className="bg-gradient-to-r from-[#33CCFF] to-[#FF3366] text-transparent bg-clip-text font-semibold">
                    SEND MESSAGE
                  </span>
                  <Send className="w-5 h-5 text-[#33CCFF]" />
                </div>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>)
    ;
};

export default Contact;