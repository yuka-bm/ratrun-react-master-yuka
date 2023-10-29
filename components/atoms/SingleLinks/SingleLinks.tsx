import "./SingleLinks.scss";

interface LinkItemProps {
  title: string;
  link: LinkItem[];
}

export interface LinkItem {
  name: string;
  url: string;
}

const SingleLinks: React.FC<LinkItemProps> = ({ title, link }) => {

  return (
    <div className="single-button">
      <h4>{title}</h4>
      <ul>
        {link.map((list, index) => (
          <li key={index}>
            <div className="options">
              <a href={list.url}>{list.name}</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleLinks;
