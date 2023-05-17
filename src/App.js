import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    deckList: [],
  };

  handleChange = (event) => {
    const { target } = event;
    const { name } = target;
    const valueField = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: valueField,
    }, this.validationFields);
  };

  validationFields = () => {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare } = this.state;
    const maxAttribute = 90;
    const maxAttributeSum = 210;
    const isCardNameValid = cardName.length > 0;
    const isCardDescriptionValid = cardDescription.length > 0;
    const isCardImageValid = cardImage.length > 0;
    const isCardRareValid = cardRare.length > 0;
    const isCardAttr1Valid = Number(cardAttr1) >= 0 && Number(cardAttr1) <= maxAttribute;
    const isCardAttr2Valid = Number(cardAttr2) >= 0 && Number(cardAttr2) <= maxAttribute;
    const isCardAttr3Valid = Number(cardAttr3) >= 0 && Number(cardAttr3) <= maxAttribute;
    const cardAttrSum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const isCardAttrSumValid = cardAttrSum <= maxAttributeSum;
    const isFormValid = (isCardNameValid
      && isCardDescriptionValid
      && isCardImageValid
      && isCardRareValid
      && isCardAttr1Valid
      && isCardAttr2Valid
      && isCardAttr3Valid
      && isCardAttrSumValid);
    this.setState({
      isSaveButtonDisabled: !(isFormValid),
    });
  };

  onSaveButtonClick = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, deckList } = this.state;
    const newCard = ({
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    });
    if (newCard.cardTrunfo) this.setState({ hasTrunfo: true });
    deckList.push(newCard);
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    });
  };

  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, deckList } = this.state;

    return (
      <main>
        <header><h1>Tryunfo</h1></header>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.handleChange }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <h2>Preview do Deck</h2>
        <ul>
          {deckList.map((card) => (
            <li key={ card.cardName }>
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default App;
