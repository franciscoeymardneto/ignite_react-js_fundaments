import React from 'react'
import RepositoryItem from './RepositoryItem'

import '../../styles/repositories.scss'

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
}

function RepositoryList(props) {
  return (
    <section className="repository-list">
      <h1>RepositoryList</h1>

      <ul>
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}

export default RepositoryList