import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

function NewsletterCard({ newsletters }) {
  return (
    <Accordion defaultActiveKey={null} className="w-full max-w-4xl mx-auto my-12">
  {newsletters.map((newsletter, index) => (
    <div
      key={index}
      className="transition duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-xl rounded-lg mb-4"
    >
      <Accordion.Item 
        eventKey={index.toString()} 
        className="rounded-lg overflow-hidden border-0"
      >
        <Accordion.Header 
          style={{
            backgroundColor: '#ABCCD6'
          }}
        >
          <span style={{
            color: '#54749D',
            fontWeight: 'bold',
            opacity: 1,
            visibility: 'visible'
          }}>
            {newsletter.date}
          </span>
        </Accordion.Header>

        <Accordion.Body 
          style={{
            backgroundColor: '#3A92A04D',
            color: 'black',
            opacity: 1,
            visibility: 'visible'
          }}
        >
          <div className="flex justify-center">
            <iframe
              src={newsletter.pdfUrl}
              width="100%"
              height="700"
              style={{
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                maxWidth: '800px'
              }}
              title={`Newsletter - ${newsletter.date}`}
            />
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  ))}
</Accordion>

  );
}

export default NewsletterCard;

