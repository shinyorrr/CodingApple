import logo from './logo.svg';
import './App.css';
import React, { useState} from 'react';

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

  //let [글제목, 글제목변경] = useState('남자 코트 추천');
  let [title, setTilte] = useState(['남자 코트 추천', '은평구 맛집', '서울 날씨'])
  let [like, setLike] = useState(Array(title.length).fill(0));
  let [index, setIndex] = useState(0);
  let [inputText, setInputText] = useState('');
  
  
  //title이 정해져있지 않으면...?
  // useEffect(() => {
  //   setLike(Array(title.length).fill(0),[])
  // })

 
  //var arrayCopy = [];
  // for( var i=0; i<title.length; i++){
  //   arrayCopy.push(0);
  //   setLike(arrayCopy);
  // }

  // like.map(function(a,i){
  //   i < title.length-1 ? setLike(0) : null
  // })
  
  //useState 괄호안에는 UI의 현재상태 저장(false, 0, 닫힘 등등....형식은 자유)
  let [modal, setModal] = useState(false); 

  // [1,2,3].map(function(a){
  //   console.log(a);
  //   //return 'mapTest'
  // })

  // function 제목바꾸기(){
  //   글제목변경2(['남자 코트 추천', '은평구 맛집', '서울 날씨']);
  // } 이건너무 하드코딩..

  function ChangeTitle(){
    //deep copy. Array,Object 자료형은 복사하면 값 공유다. 복사가 아님 (reference data type)
    //spread opearator. ES6 문법
    //리액트 대 원칙 : Immutable data
    var newArray = [...title];
    if(newArray[0].indexOf('남자') > -1){
      newArray[0] = '여자 코트 추천';
    }else{
      newArray[0] = '남자 코트 추천';
    }
    setTilte( newArray );
  }

  function sorting(){
    var copy = [...title];
    copy.sort();
    setTilte(copy);
  }
  
  function 함수(){
    return 100
  }

  // let design = {color : 'blue', fontSize : '30px'}

  function AddTitle(){
    let titleCopy = [...title];
    titleCopy.push(inputText);
    setTilte(titleCopy);

    let likeCopy = [...like];
    likeCopy.push(0);
    setLike(likeCopy);

    setInputText('');
  }
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
      <button onClick={ ChangeTitle }>코트 성별 전환</button>
      {/* <button onClick={() => {
        let copy = 글제목2;
        copy[0] = '여자코트 추천';
        글제목변경2(copy);
      }} */}
      <button onClick={sorting}>정렬</button>
      {/* <div className='list'>
        <h3> { title[0] } <span onClick={() => { setLike(like + 1) }}>👍</span> {like} </h3>
        <p>많이 눌러주세요</p>
        <h3> { title[1] } </h3>
        <p>연어 맛집 역촌 '잔'</p>
        <h3 onClick={() => { setModal(!modal) }}> { title[2] }</h3> 
        <p>어제보다 10도 낮아짐</p>        
        <hr/>
      </div> */}
      {
       title.map(function(a , i){ // i => 반복문 돌 때마다 0부터 1씩 증가하는 정수
          return(
            <div className='list' key={i}>
              <h3 onClick={() => { setIndex(i); setModal(!modal) }} >
                { title[i] }  
                <span onClick={(e)=> {
                  e.stopPropagation(); //상위html로 퍼지는 이벤트버블링 막음            
                  let arrayCopy = [...like];
                  arrayCopy[i] = arrayCopy[i] +1;
                  setLike(arrayCopy);
                }}>👍</span> {like[i]}
                
              </h3>
              <p>날짜</p>
              <button onClick={()=>{
                let copyTitle = [...title];
                copyTitle.splice(i,1); //array i번째 index에서 1개 삭제
                setTilte(copyTitle);

                let copyLike = [...like];
                copyLike.splice(i,1);
                setLike(copyLike);
              }}>삭제</button>
            </div>
          )
        })
      }
      {/* e는 이벤트 객체 */}
      <input onChange={(e) => {
        setInputText(e.target.value);    
        // console.log(inputText);
        }}/>
      <button onClick={AddTitle}>등록</button>
      {/* <select/>
      <textarea/> */}

  

      {
        modal == true ? <Modal index={index} changeTitle={ChangeTitle}  color = {'yellow'} title = {title}/> : null //null은 비어있는 html 용으로 자주 사용
      }
      
    </div>
  );
}

function Modal(props){
  //return 안에는 <div>가 병렬적으로 올 수 없음
  //let [index, setIndex] = useState(0); 
  //state를 자식에 만들면 부모-> 자식 전송할 필요x 하지만 최상위에 두는게 보편적
  return (
    <div className='modal' style={{background : props.color}}>
        <h2>{props.title[props.index]}</h2>
        <p>날짜</p> 
        <p>상세내용</p>
        <button onClick={props.changeTitle}>글수정</button>
    </div>
  )
}

export default App;
