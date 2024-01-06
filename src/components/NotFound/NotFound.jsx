import { useNavigate } from 'react-router-dom';

export function NotFound() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/');
  };
  
  return (
    <div>
      <button onClick={goBack}>go back</button>
      <img src="/src/assets/404.jpg" alt="Not Found" />
    </div>
  )
}