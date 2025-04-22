import { useState } from 'react';

const FAQSection = () => {
  const [activeQuestion, setActiveQuestion] = useState('What are the qualifications and experience of the caregivers?');

  const faqData = [
    {
      question: 'What is the caregiver-to-child ratio?',
      answer: 'Our caregiver-to-child ratio is 1:4 for infants, 1:6 for toddlers, and 1:8 for preschoolers, exceeding state requirements to ensure quality care and individual attention.'
    },
    {
      question: 'Are the staff members trained in first aid and CPR?',
      answer: 'Yes, all our staff members are required to maintain current certifications in First Aid and CPR, with annual refresher courses to ensure they are prepared for any emergency situation.'
    },
    {
      question: 'What are the qualifications and experience of the caregivers?',
      answer: 'Our caregivers are fully qualified with valid Early Childhood Education (ECE) certification and current Standard First Aid and CPR training, including infant and child CPR. They undergo thorough background checks, including vulnerable sector screening, to ensure a safe environment.'
    },
    {
      question: 'How do you handle sick children or illness outbreaks?',
      answer: 'We have a clear illness policy requiring children to be symptom-free for 24 hours before returning. During outbreaks, we implement enhanced cleaning protocols and may separate affected groups to prevent spread.'
    },
    {
      question: 'What types of activities do the children engage in?',
      answer: 'Our program includes age-appropriate activities focusing on creative play, early literacy, physical development, social skills, and exploratory learning through both structured and free-play periods.'
    },
    {
      question: 'Do you accommodate food allergies or special diets?',
      answer: 'Yes, we accommodate various dietary needs and allergies. Our facility is nut-free, and we work with parents to create safe meal plans for children with specific requirements.'
    },
    {
      question: 'Do you provide progress reports or updates?',
      answer: 'Parents receive daily updates through our mobile app, monthly newsletters, and formal progress reports every quarter discussing developmental milestones and achievements.'
    },
    {
      question: 'What is the cost and payment structure?',
      answer: 'Our fees are $X per week/month with a one-time registration fee of $Y. We offer sibling discounts and accept various payment methods including automatic bank transfers and credit cards.'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto p-4 font-sans">
      <h1 className="text-center text-2xl font-bold text-black mb-10">Frequent Questions and Answers</h1>
      
      <div className="flex flex-wrap gap-8">
        <div className="flex-1 min-w-[300px]">
          {faqData.map((faq) => (
            <div 
              key={faq.question}
              className={`p-4 mb-2 rounded cursor-pointer font-medium transition-all border ${
                activeQuestion === faq.question 
                  ? 'bg-orange-500 text-black border-orange-700' 
                  : 'bg-[#F8D8C1] text-black hover:bg-[#F8D8C1] border-gray-300'
              }`}
              onClick={() => setActiveQuestion(faq.question)}
            >
              {faq.question}
            </div>
          ))}
        </div>
        
        <div className="flex-1 min-w-[300px] bg-[#F8D8C1]-6 rounded border border-gray-300">
          <h2 className="text-center text-xl font-semibold text-black mb-6">Answers</h2>
          <div className="text-black text-lg leading-relaxed">
            {faqData.find(faq => faq.question === activeQuestion)?.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
