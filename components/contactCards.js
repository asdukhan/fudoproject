import { useEffect, useState } from "react";
import Image from 'next/image'


function ContactCards() {
  const [contacts, setContacts] = useState()
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    fetch('http://54.169.31.224:3000/contact')
      .then(response => response.json())
      .then(data => {
        setContacts(data.data)
        setIsLoading(false)
      })
  }, [])
  if (isLoading) {
    return <p>Loading....</p>
  }
  if (!contacts) {
    return <p>No List to show</p>
  }
  return (

    <div className="bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto sm:py-16 lg:py-8 lg:max-w-none">
          <div className="lg:grid lg:grid-cols-3 lg:gap-x-6">
            {contacts.map((callout) => (
              <div key={callout.slug} className="group relative bg-white hover:bg-yellowBg hover:shadow-md p-8 rounded-2xl mx-auto w-full mb-4">
                <div className="mx-auto object-center text-center">
                  <Image
                    src={callout.icon}
                    alt={callout.imageAlt}
                    width={'72px'}
                    height={'72px'}
                    className="w-16 h-16 mx-auto object-center object-cover"
                  />
                </div>
                <h3 className="mt-6 text-2xl text-gray-800 text-center">
                  <a href={callout.href}>
                    <span className="absolute inset-0 text-center capitalize" />
                    {callout.title}
                  </a>
                </h3>
                <p className="text-md text-gray-500 text-center">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


export default ContactCards