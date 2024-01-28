import React, { useEffect } from 'react';
import { Container, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {

  useEffect(()=>{
    document.title="HomeComponent";
  })
  return (
    <div>
      <div className="jumbotron text-center mt-4 bg-info">
        <h1>LEARN CODE WITH PRAJWAL</h1>
        <p>This is developed by Prajwal for learning purposes</p>

        <Container>
          <Button color='primary' outline>Start Using</Button>
        </Container>
      </div>
    </div>
  );
}
