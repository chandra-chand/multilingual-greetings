import {Component} from 'react'

import Item from './components/Item'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeId: languageGreetingsList[0].id}

  changeLanguage = activeId => {
    this.setState(activeId)
  }

  getGreeting = () => {
    const {activeId} = this.state
    const result = languageGreetingsList.find(i => i.id === activeId)
    return result
  }

  render() {
    const {activeId} = this.state
    const {imageUrl, imageAltText} = this.getGreeting()
    return (
      <div className="container">
        <h1 className="head">Multilingual Greetings</h1>
        <ul className="un-container">
          {languageGreetingsList.map(each => (
            <Item
              key={each.id}
              itemDetails={each}
              changeLanguage={this.changeLanguage}
              isActive={activeId === each.id}
            />
          ))}
        </ul>
        <img src={imageUrl} alt={imageAltText} />
      </div>
    )
  }
}

export default App
