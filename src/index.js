import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme, Arwes, Words, Logo, Project, Button } from 'arwes';

const App = () => (
  <ThemeProvider theme={createTheme()}>
    <Arwes animate background='/img/background.jpg' pattern='/img/glow.png'>
    <div style={{ padding: '20px' }}>
            <Button animate>Cyberpunk</Button>
            {' '}
            <Button animate layer='success'>
              <i className='mdi mdi-chemical-weapon' /> Sci Fi
            </Button>
            {' '}
            <Button animate layer='alert'>
              High Tech <i className='mdi mdi-robot' />
            </Button>
        </div>
      <div style={{ padding: 20 }}>
        <Project
          animate
          header='PROJECT, OFFICIA DISCORDIA'
        >
          {anim => (
            <p><Words animate show={anim.entered}>
              A cyberpunk UI project
            </Words></p>
          )}
        </Project>
      </div>
      <Logo animate size={300} />
    </Arwes>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.querySelector('#root'));