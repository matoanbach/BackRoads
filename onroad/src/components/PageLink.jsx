const PageLink = (props) => {
    return (
      <li key={props.id}>
        <a href={props.href} className="nav-link">
          {props.text}
        </a>
      </li>
    )
  }
  export default PageLink