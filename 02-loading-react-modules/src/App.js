

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
        </div>
    )
}

export default App
