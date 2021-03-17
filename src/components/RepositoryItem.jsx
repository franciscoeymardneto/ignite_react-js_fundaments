import React from 'react'


function RepositoryItem(props) {
  const { name, html_url, description } = props.repository
  return (
    <li>
      <strong>{name}</strong>
      <p>{description}</p>
      <a href={html_url}>Access repository</a>
    </li>
  );
}

export default RepositoryItem