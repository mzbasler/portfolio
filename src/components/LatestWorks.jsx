import React from 'react';
import './LatestWorks.scss';

const LatestWorks = () => (
  <div className="latest-works box">
    <img
      className="work-image"
      src="https://via.placeholder.com/150"
      alt="Imagem do serviço" // Adicione uma descrição significativa aqui
    />
    <h2 className="work-title">Latest Work Title</h2>
    <p className="work-description">Description of the latest work.</p>
  </div>
);

export default LatestWorks;
