import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

/* esLint-disable */

function App() {
  // addEventListener('click', function(){

  // }) 기존 콜백함수, 아래는 ES6문법
  // addEventListener('click', () => {

  // })


  let posts = "강남 고기 맛집";
  // 정통적인 자바스크립트 데이터 바인딩
  // document.getElementById().innerHTML = ''?

  // [10, 100]; 이 두개를 a, b변수에 각각 담고 싶다면? es6문법
  //var[a, b] = [10, 100];


  let [글제목, 글제목변경] = useState('남자 코트 추천');
  let [글제목2, 글제목변경2] = useState(['남자 코트 추천', '은평구 맛집', '서울 날씨']);
  let [like, setLike] = useState(0);
  //let [title, setTilte] = useState(['남자 코트 추천', '은평구 맛집', '서울 날씨'])

  // function 제목바꾸기(){
  //   글제목변경2(['남자 코트 추천', '은평구 맛집', '서울 날씨']);
  // } 이건너무 하드코딩..

  function 제목바꾸기(){
    //deep copy. Array,Object 자료형은 복사하면 값 공유다. 복사가 아님 (reference data type)
    //spread opearator. ES6 문법
    //리액트 대 원칙 : Immutable data
    var newArray = [...글제목2];
    if(newArray[0].indexOf('남자') > -1){
      newArray[0] = '여자 코트 추천';
    }else{
      newArray[0] = '남자 코트 추천';
    }
    글제목변경2( newArray );
  }
  
  function 함수(){
    return 100
  }

  // let design = {color : 'blue', fontSize : '30px'}

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>{ posts }</h4>
        {/* <div style={ {color : 'blue', fontSize : '30px'} }>개발 Blog</div> */}
        {/* <div style={ design }>개발 Blog</div> */}
        <div>개발 Blog</div>
      </div>
      {/* <img src={logo}></img> */}
      {/* 클릭 한 다음에 제목바꾸기 함수 실행해야 하기 때문에 ()는 쓰지않는다 */}
      <button onClick={ 제목바꾸기 }>코트 성별 전환</button>
      <div className='list'>
        <h3> { 글제목2[0] } <span onClick={() => { setLike(like + 1) }}>👍</span> {like} </h3>
        <p>많이 눌러주세요</p>
        <h3> { 글제목2[1] } </h3>
        <p>연어 맛집 역촌 '잔'</p>
        <h3> { 글제목2[2] }</h3> 
        <p>어제보다 10도 낮아짐</p>        
        <hr/>
      </div>

      <Modal/>
      
    </div>
  );
}

function Modal(){
  return (
    <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p> 
        <p>상세내용</p>
    </div>
  )
}

export default App;
