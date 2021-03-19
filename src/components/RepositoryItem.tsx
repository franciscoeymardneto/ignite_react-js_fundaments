interface repositoryItem {
  repository: {
    name: string
    html_url: string
    description: string
  }
}

function RepositoryItem(props : repositoryItem) {
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