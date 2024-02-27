import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Button } from 'antd';


interface ApiResponse {
  message: string;
  count: number;
}

const fetchData = async (): Promise<AxiosResponse<ApiResponse>> => {
  const data: AxiosResponse<ApiResponse> = await axios.get("http://localhost:8080/cnt");
  return data;
}

const countHandler = () => {
  console.log("handler")
}

function App() {
  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchDataAndUpdateState = async () => {
      try {
        const response = await fetchData();
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataAndUpdateState();
  }, []);

  console.log(data); // 데이터 확인용, 실제로는 UI에 표시하거나 다른 처리를 해야 할 것입니다.

  return (
    <div>
      <h1>API Data</h1>
      {data ? (
        <div>
          <p>Message: {data.message}</p>
          <p>Count: {data.count}</p>
          <Button onClick={countHandler}>ㅁㄴㅇㄹ</Button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
