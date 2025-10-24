import { useState, useEffect } from 'react';
import axios from 'axios';
import './PetsList.css';

function PetsList() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/pets');
        console.log('Pets recebidos: ', response.data);
        
        setPets(response.data);
        setError(null);
      } catch (err) {
        setError('Erro ao carregar os pets: ' + err.message);
        console.error('Erro ao buscar pets:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  if (loading) {
    return <div className="loading">Carregando pets...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="pets-container">
      <h1>Lista de Pets</h1>
      <div className="pets-grid">
        {pets.map((pet) => (
          <div key={pet.id} className={`pet-card ${!pet.ativo ? 'inactive' : ''}`}>
            <div className="pet-header">
              <h2>{pet.nomePet}</h2>
              {!pet.ativo && <span className="badge-inactive">Inativo</span>}
            </div>
            
            <div className="pet-info">
              <div className="info-section">
                <h3>Informações do Pet</h3>
                <p><strong>ID:</strong> {pet.id}</p>
                <p><strong>Espécie:</strong> {pet.especie.nome} ({pet.especie.codigo})</p>
                <p><strong>Raça:</strong> {pet.raca.nome} ({pet.raca.codigo})</p>
                <p><strong>Peso:</strong> {pet.peso} kg</p>
                <p><strong>Altura:</strong> {pet.altura} m</p>
                <p><strong>Nascimento:</strong> {new Date(pet.nascimento).toLocaleDateString('pt-BR')}</p>
                <p><strong>Validade do Chip:</strong> {new Date(pet.validadeChip).toLocaleDateString('pt-BR')}</p>
              </div>

              <div className="info-section">
                <h3>Informações do Dono</h3>
                <p><strong>Nome:</strong> {pet.nomeDono}</p>
                <p><strong>CPF:</strong> {pet.cpfDono}</p>
                <p><strong>Email:</strong> {pet.emailDono}</p>
                <p><strong>Telefone:</strong> {pet.telefoneDono}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {pets.length === 0 && (
        <p className="no-pets">Nenhum pet encontrado.</p>
      )}
    </div>
  );
}

export default PetsList;
