import React, { useState } from 'react';

const LottoGenerator = () => {
  const [numbers, setNumbers] = useState([]);

  const generateLottoNumbers = () => {
    const generatedNumbers = [];
    while (generatedNumbers.length < 6) {
      const randomNumber = Math.floor(Math.random() * 45) + 1;
      if (!generatedNumbers.includes(randomNumber)) {
        generatedNumbers.push(randomNumber);
      }
    }
    generatedNumbers.sort((a, b) => a - b);
    setNumbers(generatedNumbers);
  };

  return (
    <div>
      <h1>로또 번호 생성기</h1>
      <button onClick={generateLottoNumbers}>번호 생성</button>
      {numbers.length > 0 && (
        <div>
          <h2>추천 로또 번호:</h2>
          <ul>
            {numbers.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LottoGenerator;
