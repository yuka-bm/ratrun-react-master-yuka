import "./SingleLinks.scss";

interface LinkItemProps {
  link: LinkItem[];
}

export interface LinkItem {
  id?: number;
  name: string;
  url?: string;
}

const SingleLinks: React.FC<LinkItemProps> = ({ link }) => {

  return (
    <div className="single-button">
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
