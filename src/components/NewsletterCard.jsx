import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

function NewsletterCard({ newsletters }) {
  return (
    <Accordion defaultActiveKey={null} className="w-full max-w-4xl mx-auto my-12">
      {newsletters.map((newsletter, index) => (
        <div
          key={index}
          className="transition duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-xl rounded-lg"
        >
          <Accordion.Item eventKey={index.toString()} style={{ backgroundColor: '#ABCCD6' }}>
            <Accordion.Header>
              <span style={{ color: '#54749D', fontWeight: 'bold' }}>{newsletter.date}</span>
            </Accordion.Header>
            <Accordion.Body>
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

