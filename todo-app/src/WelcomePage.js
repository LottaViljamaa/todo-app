import './App.css';
import t from './translations/en';
import translations from './translations/en';

function FirstPage() {
  return (
    <div className="Welcome">
     <h1>{t.welcome.header}</h1>
     <p>{t.welcome.todos}</p>
     <p>{t.welcome.manual}</p>
     <p>{t.welcome.note}</p>
    </div>
  )
}
export default FirstPage;


