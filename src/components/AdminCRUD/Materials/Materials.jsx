export const Materials = ({ items }) => {
  return (
    <ul>
      {items.map(item => {
        return (
          <li key={item.id}>
            <p>Title: {item.title}</p>
            <p>Link: {item.link}</p>
            <hr />
          </li>
        );
      })}
    </ul>
  );
};
