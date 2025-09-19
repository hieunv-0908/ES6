import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const count = useSelector((state: any) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div>
        <h2>Counter </h2>
        < p > Giá trị hiện tại: { count } </>
            < button onClick = {() => dispatch({ type: 'INCREMENT' })}> Tăng </>
                < button onClick = {() => dispatch({ type: 'DECREMENT' })}> Giảm </>
                    </div>
  );
};

export default Counter;