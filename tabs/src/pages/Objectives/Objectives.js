import Objectivebox from '../../components/Objectivebox/Objectivebox';
import Styled from './Objectives.styles';

const Objectives = ({ objectiveList }) => {
  // const fetchObjectives = useCallback(async () => {
  //   const response = await axios.get(
  //     'http://localhost:8888/tasks?parentTaskId=1&order=DESC&page=1&take=100'
  //   );

  //   const data = response.data.data;
  //   setObjectiveList(data);
  //   console.log(data);
  // }, []);

  // useEffect(() => {
  //   fetchObjectives();
  // }, [fetchObjectives]);

  return (
    <Styled.Content>
      <Styled.ObjectivesContainer>
        {objectiveList.map((item) => (
          <Objectivebox task={item} />
        ))}
      </Styled.ObjectivesContainer>
    </Styled.Content>
  );
};

export default Objectives;
