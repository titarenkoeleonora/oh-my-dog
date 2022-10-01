import { FC } from "react";
import Error from "../shared/error";
import { List, Picture } from "./styles";

type Props = {
  picturesList: string[];
};

const PicturesList: FC<Props> = ({ picturesList }) => {
  if (!picturesList.length) return (
    <Error>
      Ooops... it seems like we don't have any photos. Maybe you what to choose another option or photo
    </Error>
  );

  return (
    <List>
      {picturesList.map((picture, index) => (
        <li key={picture + index}>
          <Picture src={picture} />
        </li>
      ))}
    </List>
  );
};

export default PicturesList;