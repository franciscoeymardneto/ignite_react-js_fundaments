import React, { useState, useEffect } from 'react'
import RepositoryItem from './RepositoryItem'

import '../../styles/repositories.scss'


function RepositoryList(props) {

  const [repositories, setRepositories] = useState([])

  useEffect(()=>{
    fetch('https://api.github.com/users/franciscoeymardneto/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  },[])

  return (
    <section className="repository-list">
      <h1>RepositoryList</h1>
      <ul>
        {
          repositories.map(repository => {
            return <RepositoryItem key={repository.id} repository={repository} />
          })
        }
         
      </ul>
    </section>
  );
}

export default RepositoryList