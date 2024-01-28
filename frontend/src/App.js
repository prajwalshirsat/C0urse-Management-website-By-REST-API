import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
import Header from './components/Header';
import Course from './components/Course';
import Allcourses from './components/Allcourses';
import Addcourse from './components/Addcourse';
import Leftoptions from './components/Leftoptions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <div style={{backgroundColor: "grey "}}>
        <Router>
          <ToastContainer />
          <Container>
            <Header  />
            <Row>
              <Col md={4}>
                <Leftoptions />
              
              </Col>
              <Col md={8}>
                <Routes>
                  <Route path="/" element={<Home />}  />
                  <Route path="/addcourses" element={<Addcourse />} />
                  <Route path="/viewcourses" element={<Allcourses />} />
                </Routes>
              </Col>
            </Row>
          </Container>
        </Router>
      </div>
    </>
  );
}

export default App;
