import React, { useState } from 'react';

function Skills() {
  const roles = [
    {
      company: 'Telstra',
      url: 'https://www.telstra.com.au/',
      title: 'Backend Software Engineer',
      range: 'Mar 2025 — Present',
      bullets: [
        'Developed Java microservices using Spring Boot and Play Framework, deployed on Kubernetes with Docker containers across AWS EC2.',
        'Built serverless pipelines with AWS Lambda (Node.js/Python), Glue workflows, and DynamoDB for high-volume payment processing.',
        'Implemented Infrastructure as Code using Terraform with automated CI/CD through Bamboo and GitLab.',
        'Integrated GraphQL APIs with Braintree fintech platform, utilizing Redis caching and monitoring via New Relic, Splunk, CloudWatch.',
      ],
    },
    {
      company: 'UNSW',
      url: 'https://www.unsw.edu.au',
      title: 'Casual Academic — COMP6080',
      range: 'Sep 2024 — Present',
      bullets: [
        'Delivered tutorials and labs on HTML5, CSS3, JavaScript ES6+, and React with advanced state management.',
        'Designed assessment frameworks for front-end testing, asynchronous programming, and web accessibility standards.',
        'Developed curriculum covering UI/UX principles, responsive design, and modern JavaScript build tools.',
        'Provided debugging assistance for React applications, API integration, and cross-browser compatibility.',
      ],
    },
    {
      company: 'Telstra',
      url: 'https://www.telstra.com.au/',
      title: 'QA Test Engineer',
      range: 'Feb 2024 — Mar 2025',
      bullets: [
        'Developed automated test suites for iOS and Android applications using mobile testing frameworks.',
        'Implemented regression testing automation across MyTelstra, JB Hi-Fi, TGG, and Boost applications.',
        'Built custom automation scripts for new features integrated with CI/CD pipelines.',
        'Engineered adaptive testing frameworks handling UI changes across multiple platforms.',
      ],
    },
    {
      company: 'Peak Medical',
      url: 'https://www.peakmedical.ai/',
      title: 'Intern Software Engineer',
      range: 'Feb 2023 — May 2023',
      bullets: [
        'Developed Flutter mobile application with Firebase backend for real-time data sync and authentication.',
        'Implemented QR code functionality using native APIs to streamline user registration workflows.',
        'Built bidirectional user mapping system connecting healthcare providers and patients via QR-based linking.',
        'Collaborated in agile sprints with daily scrums, delivering features using version control practices.',
      ],
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <div name='skills' className='w-full h-full bg-[#0a192f]'>
      <div
        className='min-h-[600px] max-w-[80%] w-[1000px] mx-auto flex justify-center items-center'
        data-aos='fade-up'
        data-aos-delay='500'
      >
        <div className='max-w-[700px]'>
          <p className='text-3xl font-bold inline border-b-2 border-[#64ffda] text-[#ccd6f6]'>
            Where I’ve Worked
          </p>

          <div className='mt-11 text-[#a8b2d1] flex'>
            {/* Tabs */}
            <div className='relative z-10 w-max'>
              <ul className='hidden sm:block relative'>
                {roles.map((r, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => setActive(idx)}
                      className={`w-full h-[42px] px-5 text-left border-l-2 border-[#112240] ${
                        active === idx ? 'text-[#64ffda]' : 'text-[#8892b0]'
                      } hover:bg-[#112240] text-xs font-[Montserrat]`}
                    >
                      {r.company}
                    </button>
                  </li>
                ))}
              </ul>
              {/* Moving highlight bar */}
              <div
                className='hidden sm:block absolute top-0 left-0 w-[2px] h-[42px] bg-[#64ffda] rounded'
                style={{
                  transform: `translateY(${active * 42}px)`,
                  transition: 'transform 250ms cubic-bezier(0.645, 0.045, 0.355, 1) 100ms',
                }}
              />
            </div>

            {/* Panel */}
            <div key={active} className='relative w-full ml-5 sm:ml-6 panel-blink'>
              <div className='text-[#ccd6f6] mb-1'>
                <h4 className='font-bold text-lg'>
                  {roles[active].title}{' '}
                  <a
                    href={roles[active].url}
                    target='_blank'
                    className='text-[#64ffda] text-underline'
                  >
                    &nbsp;@ {roles[active].company}
                  </a>
                </h4>
                <h5 className='opacity-70 text-sm'>{roles[active].range}</h5>
              </div>

              <ul className='relative flex flex-col justify-evenly h-full text-[#a8b2d1]'>
                {roles[active].bullets.map((b, i) => (
                  <li key={i} className='before-arrow pl-7 text-[15px]'>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
