import React, { useEffect, useState } from 'react';
import  { useNavigate } from 'react-router-dom';
import img1 from '../../img/back_btn.png';
import img2 from '../../img/back_btn_on.png';
import './css/Project03.css';

export default function MyPortfolioProject () {

  const [scroll, setScrool] = useState(0);
  const navigate = useNavigate();

  const onScroll=()=>{
    setScrool(window.scrollY || document.documentElement.scrollTop);
  }
  const onClickBtn = () => {
    navigate(-1);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    window.scrollTo(0, 0);
}, []);

  return (
    <div id='project03'>
      <header id="header" className={scroll >= 99 ? "on" : ""}>
        <div className="container">
          <div className="back-btn">
            <button type='button' className={scroll >= 99 ? "on" : ""} onClick={onClickBtn}>
              <img src={scroll <= 99 ? img1 : img2} alt=""/>
            </button>
          </div>
          <div className="banner-img-box"></div>
        </div>
      </header>
      
      <div className="project03-main">
        <div className="container">
          <div className="main-title">
            <img src="./img/kurly_logo.png" alt="" />
            <h2>나만의 포트폴리오 개발</h2>
          </div>
          <div className="project-content">
            <div className="project-info">
              <h2>❗프로젝트 설명</h2>
              <p>
                저에 대한 간단한 소개와 기술 스택, 개발한 Project를 소개하는 홈페이지 입니다. 라이브러리를 최소한으로 사용하여 JavaScript로 동적인 효과를 구현하려고 노력했습니다.<br /> 
                해당 웹페이지에서 구현한 핵심 기능은 <span>2가지</span>입니다.
              </p>
              <ul>
                <li>&nbsp;네비게이션 클릭 시 스크롤 이동 구현</li>
                <li>&nbsp;슬라이드로 구성된 각 프로젝트 사진</li>
              </ul>
            </div>
            <div className="development-part">
              <h2 className='main-title'>❗개발 내용</h2>
              <h2 className='sub-title'><span>HTML, CSS를 사용한 정적인 페이지 구현</span></h2>
              <p>
                HTML로 웹 페이지의 구조를 시맨틱 태그를 사용하여 구현하였고,  SCSS로 페이지의 구조의 스타일을 추가하였습니다.
                포트폴리오 웹페이지다 보니 기능보다는 시각적인 효과를 중점에 두고 만들었습니다.
              </p>
              <h2 className='sub-title'><span>JavaScript를 사용한 동적인 페이지 구현</span></h2>
              <p>
                정적인 페이지를 구현하고, JavaScript로 동적인 기능을 추가했습니다. 기본적인 JavaScript로도 구현할 수 있는 기능들이라
                라이브러리 사용을 최소한으로 줄이면서 개발했습니다.
              </p>
              <h2 className='sub-title'><span>React Hooks, Router를 사용한 웹페이지 구현</span></h2>
              <p>
                UseState를 사용하여 보유 기술에 대한 설명 UI의 초기상태값을 정해주어 특정 조건 시 상태값이 변하게 만들어 Click Tooggle을 구현했으며,
                비슷한 방법으로 네비게이션 클릭 시 지정한 좌표로 Scroll되는 기능을 구현했습니다. <br />
                UseEffect에 Scroll 이벤트를 추가하여 컴포넌트가 렌더링 될때마다 스크롤이 페이지의 최상단으로 구현했습니다. <br /> 
                Router를 사용하여 부드러운 페이지 전환을 구현했고, UseNavigate Hook을 사용하여 버튼을 클릭 시 이전페이지로 돌아가는 기능을 구현했습니다.
              </p>
            </div>
            <div className="experience">
              <h2 className='experience-main-title'>❗성장 경험</h2>
              <h2 className='sub-title'><span>React로 만든 웹페이지</span></h2>
              <p>
                마켓컬리 프로젝트를 할때는 학원에서 진행한 프로젝트를 다시한번 만들었기 때문에 오류가 있어도 쉽게 찾아서 수정할 수 있었습니다.
                하지만 이 프로젝트는 처음부터 끝까지 눈에 보이는 모든 부분을 제가 구현했기 때문에 오류를 수정하는부분과 원하는 기능을 추가하는데 많은 시간이 걸렸습니다.
                그래도 오류를 수정하기 위해 많은 검색을 하면서 하나하나 수정해보니 해당 기능을 구현하기 위해 필요한 코드가 무엇인지, 그 코드가 어떻게
                실행되는지를 자세하게 알 수 있었습니다.
              </p>
              <h2 className='sub-title'><span>JavaScript와 jQuery, PHP를 활용한 동적인 페이지 개발</span></h2>
              <p>
                JavaScript를 이용한 터치 슬라이드 기능 구현과 jQuery를 이용한 Click, Keyup 이벤트들을 구현했으며, 
                메인 페이지와 서브 페이지를 php를 사용하여 동적으로 생성하였고 데이터베이스에 있는 데이터를 저장하고, 삭제하고, 추가하고 수정하는 작업을 진행하였습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};