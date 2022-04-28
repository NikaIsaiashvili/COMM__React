import {useState} from 'react';
import Form from "./components/Form";
import OutputField from "./components/OutputField";


function App() {
      const [formData, setformData] = useState([]);
return (
<main className="container">
      <Form  onSubmit={(data) => setformData([...formData, data])}/>
      <OutputField formData={formData}/>
      </main>
)
}

export default App;
