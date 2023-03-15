import Card from './components/Card/Card';
import './App.css';
import cardData from './cardData';
import Button from './components/Button/Button';

function App() {
  return (
    <div className='App'>
      <div className='sectionHeader'>
        <h1>Our Channels Review</h1>
        <p>
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment.
        </p>
      </div>
      <div className='cardList'>
        {cardData.map((item, i) => {
          return (
            <Card key={i} img={item.img} title={item.title} desc={item.desc} />
          );
        })}
      </div>
      <div className='sectionFooter'>
        <Button className='sectionFooter__btn'>Reveal all channels</Button>
      </div>
    </div>
  );
}

export default App;
