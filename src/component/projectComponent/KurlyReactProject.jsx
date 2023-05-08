import React, { useEffect, useState } from 'react';
import  { useNavigate } from 'react-router-dom';
import img1 from '../../img/back_btn.png';
import img2 from '../../img/back_btn_on.png';
import './css/Project02.css';

export default function Project02Component () {

  const [scroll, setScrool] = useState(0);
  const navigate = useNavigate();

  const onScroll=()=>{
    setScrool(window.scrollY || document.documentElement.scrollTop);
  }
  const onClickBackBtn = () => {
    navigate(-1);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    window.scrollTo(0, 0);
    window.history.scrollRestoration = 'manual';

    
}, []);

  return (
    <div id='project02'>
      <header id="header" className={scroll >= 99 ? "on" : ""}>
        <div className="container">
          <div className="back-btn">
            <button type='button' className={scroll >= 99 ? "on" : ""} onClick={onClickBackBtn}>
              <img src={scroll <= 99 ? img1 : img2} alt=""/>
            </button>
          </div>
          <div className="banner-img-box"></div>
        </div>
      </header>
      
      <div className="project02-main">
        <div className="container">
          <div className="main-title">
            <img src="./img/kurly_logo.png" alt="" />
            <h2><strong>마켓컬리</strong> 클론코딩 (개인)</h2>
          </div>
          <div className="project-content">
            <div className="project-info">
              <h2>❗프로젝트 설명</h2>
              <p className='explanation'>
                Jquery를 사용하여 만든 마켓컬리 팀 프로젝트를 React를 사용하여 재구현한 홈페이지 입니다. jQuery에서 사용할 수 있는 부분은 사용하고
                추가로 구현하지 못했던 부분 등을 스스로 구현한 팀 프로젝트보다 마켓컬리 본 사이트에 가까운 홈페이지 입니다. <br />
              </p>
              <p><strong>마켓컬리</strong> 프로젝트에서 구현한 핵심 기능은 <span>3가지</span>입니다.</p>
              <ul>
                <li>&nbsp;애니메이션과 슬라이드로 구성된 메인 페이지</li>
                <li>&nbsp;4개의 테마(신상품, 베스트, 알뜰쇼핑, 특가/혜택)로 나뉘어져 있는 상품 소개 페이지</li>
                <li>&nbsp;회원가입 페이지와 DB와 연동하여 회원가입 기능 구현</li>
              </ul>
            </div>
            <div className="development-part">
              <h2 className='main-title'>❗개발 내용</h2>
              <h2 className='sub-title'><span>Cookie, LocalStorage를 이용한 2개의 모달창</span></h2>
              <p>
                홈페이지를 들어가면 제일 먼저 나오는 메인 모달창과, 페이지 상단에 위치한 탑 모달창을 구현했습니다.
                메인모달의 '다시 안보기'와 탑 모달의 X 버튼을 클릭하면 각각 Cookie와 LocalStorage에 해당 값을 저장하여 
                메인 모달의 경우 LocalStorage의 저장된 값을 지우지 않으면 다시 볼수 없고, 탑 모달의 경우 24시간이 지나면 다시 보이게끔 구현했습니다.
              </p>
              <h2 className='sub-title'><span>Axios를 통한 REST API 호출</span></h2>
              <p>
                HTTP 통신 라이브러리인 Axios를 사용해서 HTTP Method인 GET과 POST 방식으로 
                MySQL 서버에 저장된 회원데이터를 가져오는 '중복확인' 기능과 회원가입 페이지에서 작성된 데이터를
                서버로 보내주는 '가입하기'를 구현하여 회원가입이 정상적으로 이루어지도록 REST API를 호출했습니다.
              </p>
              <h2 className='sub-title'><span>Router를 사용하여 부드러운 페이지 전환 구현</span></h2>
              <p>
                Router를 사용하여 header에서 각각의 페이지로 부드럽게 전환하도록 구현했습니다. 
                useNavigate으로 회원가입 페이지에서 데이터 입력 후 '가입하기' 클릭 시 데이터 전송과 동시에 intro.main으로 
                페이지가 전환되도록 구현했습니다.
              </p>
              <h2 className='sub-title'><span>회원가입 페이지 추가 기능 구현</span></h2>
              <p>
                ConfirmModal 팝업창을 만들어서 회원가입 페이지에서 '중복확인', 휴대폰 '인증번호 받기' 클릭 시 모달에 메시지를 추가하여 팝업창을 확인할 수 있게 구현했습니다.
                같은 방식으로 한번 더 배운걸 반복하기 위해 이용약관동의 '약관보기'도 모달이 출력되게 구현했습니다. <br />
                비동기 처리 방식인 Promise를 사용하여 입력된 주소값을 SessionStorage에 저장하여 새로고침을 해도 한번 저장된 주소값이 유지되게 구현했습니다.
              </p>
            </div>
            <div className="experience">
              <h2 className='experience-main-title'>❗성장 경험</h2>
              <h2 className='sub-title'><span>CORS를 통한 엑세스 요청</span></h2>
              <p>
              리액트 서버와 PHP/MYSQL 서버주소가 서로 다르기 때문에 데이터베이스에 접속이 불가능했습니다. 
              이러한 이슈를 해결하기 위해 PHP로 만든 MySQL insert문에서 접속 허락 헤더문을 추가해 서버와 접속 가능하게 구현했습니다.
              </p>
              <h2 className='sub-title'><span>JavaScript 라이브러리에 대한 이해</span></h2>
              <p>
                jQuery로 만들었던 프로젝트를 React로 바꾸면서 각 라이브러리의 작동 방식을 알 수 있었습니다.
                PHP 파일로 다 나눠서 관리했던 jQuery와 달리 React에서는 컴포넌트로 세부적으로 관리할 뿐만 아니라 
                최상위 컴포넌트인 WrapComponent에서 useState를 사용하여 상태관리를 하고, 
                Props를 하위 컴포넌트에게 데이터를 전달하는걸 알게되었습니다.
                TypeScript를 사용하여 각 변수에 타입을 명시하여 코드의 에러를 사전에 방지할 수 있다는걸 배웠습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};