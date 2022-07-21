import night from './img/01-night.PNG'
import bears from './bears'


function App() {
    return (
        <div className='outer-container'>
            <img 
                alt='dawn' 
                className='display-img'
                src={require('./img/02-dawn.PNG')} />
            <img 
                alt='dusk' 
                className='display-img'
                src={require('./img/03-dusk.PNG')} />
            <img 
                alt='night' 
                className='display-img'
                src={night} />
            
            <img
                alt='dead'
                className='display-img'
                src='images/05-dead.png' />
            <img
                alt='unreal'
                className='display-img'
                src='images/04-unreal.png' />
            <img
                alt='finished'
                className='display-img'
                src='images/06-fin.png' />

            <img 
                alt='black' 
                className='display-img'
                src={bears.black} />
            <img 
                alt='cubs' 
                className='display-img'
                src={bears.cubs} />
            <img 
                alt='moon' 
                className='display-img'
                src={bears.moon} />
        </div>
    )
}

export default App
