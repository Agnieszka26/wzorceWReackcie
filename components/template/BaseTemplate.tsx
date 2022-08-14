export interface IBaseTemplate {}
import styles from './BaseTemplate.module.css';

const BaseTemplate: React.FC<IBaseTemplate> = () => {
  return <div>Hello world!</div>;
};

export default BaseTemplate;
