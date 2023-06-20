const SocialLink = (props) => {
  return (
    <li key={props.id}>
      <a href={props.href} target="_blank" class="nav-icon">
        <i class={props.icon}></i>
      </a>
    </li>
  );
};
export default SocialLink;
