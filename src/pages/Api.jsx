import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaSpinner } from 'react-icons/fa';  


const Api = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [displayMealsForTheDay, setDisplayMealsForTheDay] = useState(false);

  useEffect(() => {
    if (displayMealsForTheDay) {
      setLoading(true);
      setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then(response => response.json())
          .then(data => {
            setMeals(data);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching meals:", error);
            setLoading(false);
          });
      }, 1000);
    }
  }, [displayMealsForTheDay]);

  return (
    <Rue>
      <center>
        <h1>DevRuesha</h1>
        <h3>Fetch Api</h3>
        <Button onClick={() => setDisplayMealsForTheDay(true)}>Click Me </Button>

        {displayMealsForTheDay && loading && (
          <LoaderWrapper>
            <FaSpinner className="spinner" />
            <p>Fetching...</p>
          </LoaderWrapper>
        )}

        {displayMealsForTheDay && !loading && meals.length > 0 && (
          <MealsWrapper>
            {meals.map((meal, index) => (
              <MealCard key={index}>
                <h3>{meal.title}</h3>
                <p>{meal.body}</p>
              </MealCard>
            ))}
          </MealsWrapper>
        )}
      </center>

    
    </Rue>
  );
};

export default Api;

const Rue = styled.div`
margin-top: 80px;


`
const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  margin: 20px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const MealsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
  width: 80%;
  max-width: 1200px;
`;

const MealCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 1.5rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;

  .spinner {
    font-size: 2rem;
    animation: spin 1s linear infinite;
  }

  p {
    margin-top: 10px;
    font-size: 1.2rem;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
