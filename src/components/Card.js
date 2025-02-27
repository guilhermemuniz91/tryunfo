import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  isTrunfo(cardTrunfo) {
    if (cardTrunfo) {
      return (<p data-testid="trunfo-card">Super Trunfo</p>);
    }
    return (<p />);
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div>
        <h2 data-testid="name-card">
          Nome:
          {cardName}
        </h2>
        <img
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <p data-testid="description-card">
          Descrição:
          {cardDescription}
        </p>
        <ul>
          <li data-testid="attr1-card">
            Força:
            {cardAttr1}
          </li>
          <li data-testid="attr2-card">
            Defesa:
            {cardAttr2}
          </li>
          <li data-testid="attr3-card">
            Velocidade:
            {cardAttr3}
          </li>
        </ul>

        {this.isTrunfo(cardTrunfo)}

        <p data-testid="rare-card">{cardRare}</p>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
