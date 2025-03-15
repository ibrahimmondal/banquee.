'use client';
import { useState } from 'react';
import { Plus, X } from 'lucide-react'; 
const faqs = [
  {
    question: "How do I open a Banko account?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    question: "How do I order a new card?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    question: "How to change my account limits?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    question: "How does Banko premium works?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    question: "Can I have two Banko accounts?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='max-w-[1200px] m-auto py-20'>
        <div className='flex flex-col md:flex-row justify-between items-center p-8'>
        <div>
            <h1 className='font-normal md:text-7xl text-5xl'>Need help?</h1>
            <div>
           <div className='flex items-center gap-5 py-10'>
           <i className="fa-solid fa-phone text-[#5BB5A2] bg-[#E8F2EE] p-3 rounded-2xl"></i> 
            <div>
            <p className='text-[18px] font-normal'>+49 176 123 456</p>
            <p className='text-[#1A191E80]'>Support Hotline</p>
            </div>

           </div>
           <div className='flex items-center gap-5'>
           <i className="fa-solid fa-envelope-open text-[#5BB5A2] bg-[#E8F2EE] p-3 rounded-2xl"></i> 
            <div>
            <p className='text-[18px] font-normal'>+49 176 123 456</p>
            <p className='text-[#1A191E80]'>Support Hotline</p>
            </div>

           </div>
            </div>
            <button className="text-[15px] text-teal-500 py-10">Support  <i className="fa-solid fa-arrow-right "></i></button>
        </div>
        <div className="w-[500px] p-4 space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b">
          <button
            onClick={() => toggleFaq(index)}
            className="flex justify-between items-center w-full py-5 text-left"
          >
            <h3 className="text-lg font-medium">{faq.question}</h3>
            <span className="text-teal-600">
              {openIndex === index ? (
                <X className="w-5 h-5" />
              ) : (
                <Plus className="w-5 h-5" />
              )}
            </span>
          </button>
          {openIndex === index && (
            <div className="pb-5 text-gray-600">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
        </div>
    </section>
  );
}

