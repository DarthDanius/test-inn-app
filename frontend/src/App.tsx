import './App.css';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHook'
import { FormInn } from '@components/Forms/FromInn'
import { Modals } from '@components/Modals/Modals'
import { Info } from '@components/Info/Info'
import { getDataByINN } from '@redux/slices/companiesSlice';

function App() {
  const dispatch = useAppDispatch()
  const companyData = useAppSelector(state => state.company.companyData) as string 
  
  return (
    <div className="app">
      <header className="app-header">
        <Container className="d-flex justify-content-between">
            <FormInn onSubmit={(inn: string) => dispatch(getDataByINN(inn))} />
        </Container>
      </header>

      <main className="app-main">
        <Container className='py-3'>
          <Row>
            <Info data={companyData}/>
          </Row>
        </Container>
      </main>

      <footer className="app-footer">
        <Container>
          <Row>

          </Row>
        </Container>
      </footer>
      <Modals />
    </div>
  );
}

export default App;
