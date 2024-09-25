// src/components/Work.jsx
import React from 'react'
import WorkItem from './WorkItem'


const data = [

    {
        year: 2024,
        title: 'BackEnd Developer - It Academy' ,
        duration: '5 months',
        details: 'Development of a backend for a profiles project using Laravel. Implementation of a well-documented REST API with Swagger. Use of Docker containers to ensure consistency in the development environment. Configuration and management of MySQL databases using PHPMyAdmin. Conducting tests and database migrations with PHPUnit and Artisan.'
    },
    // {
    //     year: 2024,
    //     title: 'Full Stack Developer - It Academy' ,
    //     duration: 'Feb 2024',
    //     details: 'Final Project: Development of a Dice Game API using Laravel. Key functionality implementation using Laravel. Role and permission management with Spatie. Secure authentication with Passport and OAuth2. Automated and integration testing with PHPUnit. Extensive testing with Postman.'
    // },
    {
        year: 2018,
        title: 'Accounting Technician - Asesoría Barcelona' ,
        duration: '4 years',
        details: 'Supervision of the accounting cycle and financial data analysis. Preparation of accounting entries and bank reconciliations. Preparation of accounting, financial, and tax information. Preparation of financial statements and tax filings. Experience with A3Wolters Kluwer software.'
    }
]
const Work = () => {
  return (
    <section id='work' className='work-section'>
        <h1 className='work-heading'>Work</h1>
        {data.map((item, idx) => (
            <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
        ))}
    </section>
  );
};

export default Work;
