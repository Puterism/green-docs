import Styled from './HeadTitle.styles';
import { useEffect } from 'react';
import { CSVLink } from 'react-csv';
import { PrimaryButton } from '@fluentui/react';

const csvData = [
  ['Ahmed', 'Tomi', 'ah@smthing.co.com'],
  ['Raed', 'Labes', 'rl@smthing.co.com'],
  ['Yezzi', 'Min l3b', 'ymin@cocococo.com'],
];

const headers = ['First Name', 'Last Name', 'Email', 'Address', 'Postcode'];
const HeadTitle = ({ name }) => {
  useEffect(() => {
    //전체데이터 호출 -> 엑셀로 익스포트
  }, []);

  return (
    <Styled.Content>
      <div>
        <Styled.Maintitle>Hello, {name}</Styled.Maintitle>
        <Styled.Subtitle>
          Welcome to Junction Asia workspace. Find your goals and tasks!
        </Styled.Subtitle>
      </div>
      <CSVLink headers={headers} data={csvData} filename={'download'}>
        <PrimaryButton variant="success">Download CSV</PrimaryButton>
      </CSVLink>
    </Styled.Content>
  );
};

export default HeadTitle;
