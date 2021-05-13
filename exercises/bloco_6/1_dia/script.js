let states = {
     'AC': 'Acre',
     'AL': 'Alagoas',
     'AP': 'Amapá',
     'AM': 'Amazonas',
     'BA': 'Bahia',
     'CE': 'Ceará',
     'DF': 'Distrito Federal',
     'ES': 'Espírito Santo',
     'GO': 'Goías',
     'MA': 'Maranhão',
     'MT': 'Mato Grosso',
     'MS': 'Mato Grosso do Sul',
     'MG': 'Minas Gerais',
     'PA': 'Pará',
     'PB': 'Paraíba',
     'PR': 'Paraná',
     'PE': 'Pernambuco',
     'PI': 'Piauí',
     'RJ': 'Rio de Janeiro',
     'RN': 'Rio Grande do Norte',
     'RS': 'Rio Grande do Sul',
     'RO': 'Rondônia',
     'RR': 'Roraíma',
     'SC': 'Santa Catarina',
     'SP': 'São Paulo',
     'SE': 'Sergipe',
     'TO': 'Tocantins',
};

  function estados (array) {
      let select = document.querySelector('#state');
      for (key in array) {
          let objeto = document.createElement('option');
          objeto.value = key;
          objeto.innerHTML = array[key]
          select.appendChild(objeto);
      }
  }

  estados(states);