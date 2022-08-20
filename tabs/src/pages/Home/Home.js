import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Sidebar from '../../components/Sidebar/Sidebar';
import Styled from './Home.styles';

const Home = () => {
  return (
    <Layout>
      <Sidebar />
      <Styled.Home>
        <Styled.Title>홈</Styled.Title>
        <ul>
          <li>
            <Link to="/goals">골</Link>
          </li>
        </ul>
      </Styled.Home>
    </Layout>
  );
};

export default Home;
