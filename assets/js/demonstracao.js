const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('results-container');

const fakeGroups = [
  { name: 'Grupo de Cálculo I', members: 5, discipline: 'Cálculo I' },
  { name: 'Turma de Algoritmos', members: 3, discipline: 'Algoritmos' },
  { name: 'Estudo de Física Moderna', members: 4, discipline: 'Física Moderna' },
  { name: 'Grupo de Programação Web', members: 6, discipline: 'Programação Web' },
];

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  resultsContainer.innerHTML = '';

  if (searchTerm.trim() === '') {
    resultsContainer.innerHTML = '<p>Por favor, digite o nome da matéria.</p>';
    return;
  }

  const filteredGroups = fakeGroups.filter(group =>
    group.discipline.toLowerCase().includes(searchTerm)
  );

  if (filteredGroups.length === 0) {
    resultsContainer.innerHTML = '<p>Nenhum grupo encontrado para esta matéria.</p>';
    return;
  }

  filteredGroups.forEach(group => {
    const groupCard = document.createElement('div');
    groupCard.classList.add('group-card');
    groupCard.innerHTML = `
      <h3>${group.name}</h3>
      <p>Disciplina: ${group.discipline}</p>
      <p>Membros: ${group.members}</p>
    `;
    resultsContainer.appendChild(groupCard);
  });
});
