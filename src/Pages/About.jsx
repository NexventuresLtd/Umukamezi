import { Link } from 'react-router-dom'
import { BuildingOfficeIcon, UsersIcon, MapPinIcon, ClockIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

function About() {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'With over 15 years in the photography industry, Sarah founded Umukamezi to provide professionals with the best equipment.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Head of Sales',
      bio: 'Michael brings a decade of experience in customer relations and sales strategy to our team.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 3,
      name: 'David Wilson',
      role: 'Technical Expert',
      bio: 'Our in-house gear specialist with extensive knowledge of all things photography and videography.',
      image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      role: 'Customer Support',
      bio: 'Emily ensures every customer gets the support they need to make the right purchasing decisions.',
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
          alt="Our Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">About Umukamezi</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Empowering creatives with premium equipment and expert knowledge since 2010
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 mb-6">
              Founded in 2010 by professional photographer Sarah Johnson, Umukamezi began as a small store catering to local photographers. 
              Frustrated by the lack of specialized equipment retailers that truly understood the needs of professionals, Sarah set out to 
              create a different kind of store.
            </p>
            <p className="text-gray-700 mb-6">
              What started as a single location has grown into a trusted name in the professional photography and videography community, 
              with an online store serving customers worldwide. Our team of experts are all working professionals who understand the 
              challenges and needs of creative work.
            </p>
            <p className="text-gray-700">
              Today, we're proud to offer one of the most comprehensive selections of professional equipment, backed by unparalleled 
              customer service and technical support.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 bg-indigo-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 mb-6">
                At Umukamezi, our mission is simple: to provide photographers, videographers, and content creators with the best 
                equipment, knowledge, and support to bring their creative visions to life.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <BuildingOfficeIcon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Quality Products</h3>
                    <p className="text-gray-600">
                      We carefully curate our selection to offer only the best, most reliable equipment from trusted brands.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <UsersIcon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Expert Advice</h3>
                    <p className="text-gray-600">
                      Our team consists of working professionals who understand your needs and challenges.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <MapPinIcon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Community Focus</h3>
                    <p className="text-gray-600">
                      We're committed to supporting and growing the creative community through workshops and events.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <ClockIcon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Fast Support</h3>
                    <p className="text-gray-600">
                      We offer quick, knowledgeable support to help you get back to creating as soon as possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-indigo-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Location</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-96 w-full">
              {/* Embedded Google Map */}
              <iframe
                title="Umukamezi Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215373510143!2d-73.9878449241646!3d40.74844047138962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1689877605848!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start">
                <MapPinIcon className="h-6 w-6 text-indigo-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Address</h3>
                  <p className="text-gray-600">123 Photography Avenue</p>
                  <p className="text-gray-600">New York, NY 10001</p>
                  <p className="text-gray-600">United States</p>
                </div>
              </div>
              <div className="flex items-start">
                <ClockIcon className="h-6 w-6 text-indigo-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
                  <p className="text-gray-600">Saturday: 10am - 4pm</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <PhoneIcon className="h-6 w-6 text-indigo-600 mr-4 mt-1" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Contact</h3>
                  <p className="text-gray-600">Phone: (555) 123-4567</p>
                  <p className="text-gray-600">Email: info@umukamezi.com</p>
                  <div className="flex space-x-4 mt-2">
                    <a href="#" className="text-indigo-600 hover:text-indigo-800">
                      <span className="sr-only">Facebook</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800">
                      <span className="sr-only">Instagram</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-indigo-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're a beginner or a seasoned professional, we have the equipment and expertise to support your creative journey.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/contact"
              className="inline-block bg-white text-indigo-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/products"
              className="inline-block border border-white text-white hover:bg-indigo-700 font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;