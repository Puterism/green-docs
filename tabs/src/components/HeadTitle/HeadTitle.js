import Styled from './HeadTitle.styles';
import { useEffect } from 'react';
import { CSVLink } from 'react-csv';
import { PrimaryButton } from '@fluentui/react';
import axios from 'axios';

const csvData = [
  ['OKR', 'title', 'score', 'Progress'],
  ['Objective 1', 'junction asia', '1', '100'],

  ['Key Value 1', 'mission 1 - choose track', 2, 100],

  ['Key Value 1-1', 'ideation', 1, 100],
  ['Key Value 1-2', 'discussion', 3, 100],
  ['Key Value 1-3', 'choose', 5, 100],
  [],
  ['Key Value 2', 'mission 2 - First Draft Submission', 3, 100],
  ['Key Value 2-1', 'ppt & descrription file', 5, 100],
  ['Key Value 2-2', 'set up', 3, 100],
  ['Key Value 2-3', 'desgin draft', 3, 100],
  [],
  ['Key Value 3', 'mission 3 - First Draft Submission', 5, 80],
  ['Key Value 3-1', 'Front UI', 3, 80],
  ['Key Value 3-2', 'Back API', 3, 80],
  ['Key Value 3-3', 'deploy', 1, 0],
  ['Key Value 3-4', 'design', 3, 100],
  ['Key Value 3-4', 'prepare for presentation', 3, 100],
  [],
];

const getSubTask = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8888/tasks/${id}`);
  } catch (error) {
    console.log(error);
  }
};

const getObjectives = async (id) => {
  let idList = [];
  try {
    const response = await axios.get(`http://localhost:8888/tasks?parentTaskId=${id}&order=DESC`);
    const tasksList = response.data.data;

    Object.values(tasksList).map((item) => idList.push(item.id));

    if (idList.length === 0) {
      getSubTask(id).then((response) => console.log('getSubTask', response));
    } else {
      idList.map((id) => getObjectives(id));
    }
  } catch (error) {
    console.log(error);
  }
};

const HeadTitle = ({ name }) => {
  useEffect(() => {
    //getObjectives(1);
  }, []);

  return (
    <Styled.Content>
      <div>
        <Styled.Maintitle>Hello, {name}</Styled.Maintitle>
        <Styled.Subtitle>
          Welcome to Junction Asia workspace. Find your goals and tasks!
        </Styled.Subtitle>
      </div>
      <CSVLink data={csvData} filename={'download OKR'}>
        <PrimaryButton variant="success">Download CSV</PrimaryButton>
      </CSVLink>
    </Styled.Content>
  );
};

export default HeadTitle;
