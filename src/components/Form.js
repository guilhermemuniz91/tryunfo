import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    // const {
    //   cardName,
    //   cardDescription,
    //   cardAttr1,
    //   cardAttr2,
    //   cardAttr3,
    //   cardImage,
    //   cardRare,
    //   cardTrunfo,
    //   hasTrunfo,
    //   isSaveButtonDisabled,
    //   onInputChange,
    //   onSaveButtonClick,
    // } = this.props;

    return (
      <form>
        <label htmlFor="nomeDaCarta">
          Nome da Carta:
          <input
            type="text"
            id="nomeDaCarta"
            data-testid='name-input'
            name="cardName"
            // value={ cardName }
            // onChange={ onInputChange }
          />
        </label>
        <label htmlFor="descricaoCarta">
          Descrição da Carta:
          <textarea
            name="cardDescription"
            id="descricaoCarta"
            cols="30"
            rows="10"
            data-testid="description-input"
            // value={ cardDescription }
            // onChange={ onInputChange }
          />
        </label>
        <label htmlFor="forcaDaCarta">
          Atributo 1:
          <input
            name="cardAttr1"
            id="forcaDaCarta"
            type="number"
            data-testid="attr1-input"
            // value={ cardAttr1 }
            // onChange={ onInputChange }
          />
        </label>
        <label htmlFor="defesaDaCarta">
          Atributo 2:
          <input
            type="number"
            id="defesaDaCarta"
            data-testid="attr2-input"
            name="cardAttr2"
            // value={ cardAttr2 }
            // onChange={ onInputChange }
          />
        </label>
        <label htmlFor="speedDaCarta">
          Atributo 3:
          <input
            type="number"
            id="speedDaCarta"
            data-testid="attr3-input"
            name="cardAttr3"
            // value={ cardAttr3 }
            // onChange={ onInputChange }
          />
        </label>
        <label htmlFor="imagemDaCarta">
          Imagem da Carta:
          <input
            type="text"
            id="imagemDaCarta"
            data-testid="image-input"
            name="cardImage"
            // value={ cardImage }
            // onChange={ onInputChange }
          />
        </label>
        <label htmlFor="raridadeDaCarta">
          Raridade:
          <select
            name="cardRare"
            id="raridadeDaCarta"
            data-testid="rare-input"
            // value={ cardRare }
            // onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="superTrunfo">
          Super Trunfo?
          <input
            data-testid="trunfo-input"
            type="checkbox"
            id="superTrunfo"
            name="cardTrunfo"
            // checked={ cardTrunfo }
            // onChange={ onInputChange }
          />
        </label>
        <button
          type="button"
          data-testid="save-button"
          id="botaoSalvar"
          name="saveButton"
        //   disabled={ isSaveButtonDisabled }
        //   onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

// Form.propTypes = {
//   cardName: PropTypes.string.isRequired,
//   cardDescription: PropTypes.string.isRequired,
//   cardAttr1: PropTypes.string.isRequired,
//   cardAttr2: PropTypes.string.isRequired,
//   cardAttr3: PropTypes.string.isRequired,
//   cardImage: PropTypes.string.isRequired,
//   cardRare: PropTypes.string.isRequired,
//   cardTrunfo: PropTypes.bool.isRequired,
//   hasTrunfo: PropTypes.bool.isRequired,
//   isSaveButtonDisabled: PropTypes.bool.isRequired,
//   onInputChange: PropTypes.func.isRequired,
//   onSaveButtonClick: PropTypes.func.isRequired,
// };

export default Form;
