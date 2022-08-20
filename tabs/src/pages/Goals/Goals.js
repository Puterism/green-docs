import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Styled from './Goals.styles';

const Goals = () => {
  return (
    <Layout>
      <Styled.Goals>
        <Styled.Title>골</Styled.Title>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
        </ul>
      </Styled.Goals>
    </Layout>
  );
};

export default Goals;
