import React, { useEffect } from 'react';
import { Card, CardBody } from 'reactstrap';
import ScrollReveal from 'scrollreveal';

export default function Header() {
  useEffect(() => {        // this fun call after page reload  hence use useEffect;
    // Initialize ScrollReveal
    ScrollReveal().reveal('.header-card', {
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out',
      origin: 'top',
      distance: '50px',
    });
  }, []);

  return (
    <div>
      <Card className='my-2 bg-warning mt-1 header-card'>
        <CardBody>
          <h1 className='text-center my-2'>Welcome to Courses Application</h1>
        </CardBody>
      </Card>
    </div>
  );
}
