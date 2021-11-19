import { FC } from 'react';

interface IText {
  inline?: boolean;
}

const Text: FC<IText> = ({ inline, ...rest }) =>
  inline ? <span {...rest} /> : <p {...rest} />;

export default Text;
