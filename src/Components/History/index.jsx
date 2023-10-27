import './History.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'react-bootstrap';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

function History({ historyArray }) {
  return (
    <div className='history-container'>
      <h4>History</h4>
      {historyArray ? (
        <Accordion defaultActiveKey={null}>
          {historyArray.map((item, index) => (
            <Accordion.Item key={index} eventKey={index.toString()}>
              <Accordion.Header className='centered-header'>
                <p className='space-between-p'>URL = {item.url}</p>
                <p>Method = {item.method.toUpperCase()}</p>
              </Accordion.Header>
              <Accordion.Body>
                <div>
                  <h2>Response Headers:</h2>
                  <JSONPretty
                    id='json-pretty-headers'
                    data={item.response.headers}
                  />
                  <h2>Response Data:</h2>
                  <JSONPretty id='json-pretty-data' data={item.response.data} />
                </div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      ) : null}
    </div>
  );
}

export default History;
