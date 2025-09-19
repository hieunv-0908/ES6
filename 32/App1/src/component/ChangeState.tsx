import { useSelector, useDispatch } from 'react-redux';

const ChangeState = () => {
  const company = useSelector((state: any) => state.company.company);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{company}</h2>
      <button onClick={() => dispatch({ type: 'CHANGE_COMPANY' })}>
        Change state
      </button>
    </div>
  );
};

export default ChangeState;F