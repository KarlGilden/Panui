import {useParams} from 'react-router-dom';

const Learn = () => {

    let {id} = useParams();

  return (
    <div>
        {id}
    </div>
  )
}

export default Learn