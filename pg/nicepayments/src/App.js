import React from 'react';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    // Load NicePay script dynamically
    const script = document.createElement('script');
    script.src = 'https://pay.nicepay.co.kr/v1/js/';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      this.setupNicePay();
    };
  }

  setupNicePay = () => {
    window.AUTHNICE.requestPay({
      clientId: 'S2_af4543a0be4d49a98122e01ec2059a56',
      method: 'card',
      orderId: '유니크한-주문번호',
      amount: 1004,
      goodsName: '나이스페이-상품',
      returnUrl: 'http://localhost:3000/serverAuth',
      fnError: function (result) {
        alert('개발자확인용 : ' + result.errorMsg + '');
      },
    });
  };

  render() {
    return (
      <div className="App">
        <h1>NicePay React App</h1>
        <button onClick={this.setupNicePay}>serverAuth 결제하기</button>
      </div>
    );
  }
}

export default App;