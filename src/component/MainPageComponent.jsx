import React, { useEffect, useState } from 'react';
import  { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import {Fade, Flip} from 'react-reveal';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination])

export default function MainComponent () {
  const [frontendTextUi, setFrontendTextUi] = useState(false);
  const [backendTextui, setBackendTextUi] = useState(false);
  const [dbTextui, setDbTextUi] = useState(false);
  const [collaborationTextui, setCollaborationTextUi] = useState(false);

  const [isNavAboutme, setIsNavAboutme]= useState(false);
  const [isNavEducation, setIsNavEducation]= useState(false);
  const [isNavWork, setIsNavWork]= useState(false);
  const [isNavSkill, setIsNavSkill]= useState(false);
  const [isNavProject, setIsNavProject]= useState(false);
  const [isNavKurlyTeam, setIsKurlyTeam]= useState(false);
  const [isNavKurlyReact, setIsNavKurlyReact]= useState(false);
  const [isNavMyPage, setIsNavMyPage]= useState(false);

  // const [isVisible, setIsVisible] = useState(false);

  const [scroll, setScrool] = useState(0);

  const onScroll=()=>{  
    setScrool(window.scrollY || document.documentElement.scrollTop);
  }
  // 클릭한 메뉴로 부드럽게 이동
  const scrollToContent = (top) => {
    window.scrollTo({top: top, behavior: 'smooth'});
  }

  // section1,2 aside menu 클릭 시 해당 탑 값으로 스크롤 이동
  const onClickmenu = (e, top) => {
    e.preventDefault();
    scrollToContent(top);
  };

  // 컴포넌트가 실행될때(새로고침 시) 최초 한번만 실행 
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    window.scrollTo(0, 0);
}, []);

// Skill UI 클릭 시 상태 변경
  const onClickToggleFrontend=()=>{
    setFrontendTextUi (frontendTextUi => !frontendTextUi);
  }
  const onClickToggleBackend=()=>{
    setBackendTextUi (backendTextui => !backendTextui);
  }
  const onClickToggleDb=()=>{
    setDbTextUi (dbTextui => !dbTextui);
  }
  const onClickToggleCollaboration=()=>{
    setCollaborationTextUi (collaborationTextui => !collaborationTextui);
  }

// 스크롤 값에 따라 section2 aside menu list className 추가
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
  
      if (scrollY >= 199 && scrollY <= 1098) {
        setIsNavAboutme(true);
        setIsNavEducation(true);
        setIsNavWork(false);
        setIsNavSkill(false);
        setIsNavProject(false);
        setIsKurlyTeam(false);
        setIsNavKurlyReact(false);
        setIsNavMyPage(false);
      } else if (scrollY >= 1099 && scrollY <= 1796) {
        setIsNavAboutme(true);
        setIsNavEducation(false);
        setIsNavWork(true);
        setIsNavSkill(false);
        setIsNavProject(false);
        setIsKurlyTeam(false);
        setIsNavKurlyReact(false);
        setIsNavMyPage(false);
      } else if (scrollY >= 1797 && scrollY <= 2399) {
        setIsNavAboutme(false);
        setIsNavEducation(false);
        setIsNavWork(false);
        setIsNavSkill(true);
        setIsNavProject(false);
        setIsKurlyTeam(false);
        setIsNavKurlyReact(false);
        setIsNavMyPage(false);
      } else if (scrollY >= 2400 && scrollY <= 3153) {
        setIsNavAboutme(false);
        setIsNavEducation(false);
        setIsNavWork(false);
        setIsNavSkill(false);
        setIsNavProject(true);
        setIsKurlyTeam(true);
        setIsNavKurlyReact(false);
        setIsNavMyPage(false);
      } else if (scrollY >= 3154 && scrollY <= 3887) {
        setIsNavAboutme(false);
        setIsNavEducation(false);
        setIsNavWork(false);
        setIsNavSkill(false);
        setIsNavProject(true);
        setIsKurlyTeam(false);
        setIsNavKurlyReact(true);
        setIsNavMyPage(false);
      } else if (scrollY >= 3888 && scrollY <= 4547) {
        setIsNavAboutme(false);
        setIsNavEducation(false);
        setIsNavWork(false);
        setIsNavSkill(false);
        setIsNavProject(true);
        setIsKurlyTeam(false);
        setIsNavKurlyReact(false);
        setIsNavMyPage(true);
      } else {
        setIsNavEducation(false);
        setIsNavWork(false);
        setIsNavSkill(false);
        setIsNavProject(false);
        setIsKurlyTeam(false);
        setIsNavKurlyReact(false);
        setIsNavMyPage(false);
      }
    };
  
    window.addEventListener('scroll', onScroll);
  
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <main id='main'>
        <section id='section1' className='intro'>
          <Fade left duration={2000} delay={2000}>
            <aside className="sec1-aside">
              <nav className='menu-bar'>
                <ul className="main-title">
                  <li><a href="#!" onClick={(e) => onClickmenu(e, 0)}>Home</a></li>
                  <li><a href='#!' onClick={(e) => onClickmenu(e, 799)}>ABOUT ME</a></li>
                  <li><a href='#!' onClick={(e) => onClickmenu(e, 2398)}>SKILLS</a></li>
                  <li><a href='#!' onClick={(e) => onClickmenu(e, 3152)}>PROJECT</a></li>
                </ul>
                <ul className='github-email'>
                  <li><a href="mailto:kiik52.naver.com">kiik52.naver.com</a></li>
                  <li><a href="https://github.com/Ji-Jung-Ho" target="_blank">github.com/Ji-Jung-Ho</a></li>
                  <li><p>Last Update : 2023-05-15</p></li>
                </ul>
              </nav>
            </aside>
          </Fade>
            <article className="sec1-article">
              <div className="img-box">
              </div>
              <div className="main-title">
                  <Fade top duration={2000} delay={1000}>
                  <h2 className='info'>상상을 구현하는</h2>
                  </Fade>
                  <Flip top duration={1000} delay={2000}>
                  <h2 className='info-name'>
                    <span>지정호</span> 입니다.
                  </h2>
                  </Flip>
                  <Fade bottom duration={2000} delay={1000}>
                  <div className='info-subtitle'>
                    <span>프론트앤드 개발자를 목표로 노력하고 있습니다.</span>
                    <span>부족한 부분을 하나씩 채워가는 재미를 즐깁니다.</span>
                    <span>: 인생을 긍정적으로 살아가자라는 좌우명을 가지고 있습니다.</span>
                  </div>
                  </Fade>
              </div>
              <div className="down-arrow">
                <img src="./img/56747.png" alt="" />
              </div>

            </article>
        </section>
        <section id="section2" className='main-content'>
          <aside className='sec2-aside'>
            <Fade fraction={0.5}>
            <nav className='menu-bar'>
              <ul className="nav-main-title">
                <li><a href="#!" onClick={(e) => onClickmenu(e, 0)}>Home</a></li>
                <li>
                  <a href='#!' className={isNavAboutme ? 'nav-title-btn' : ''} onClick={(e) => onClickmenu(e, 799)}>ABOUT ME</a>
                  <div className="project-submenu">
                    <ul>
                      <li><a href="#!" className={isNavEducation ? 'nav-subtitle-btn' : ''} onClick={(e) => onClickmenu(e, 858)}>- Education</a></li>
                      <li><a href="#!" className={isNavWork ? 'nav-subtitle-btn' : ''} onClick={(e) => onClickmenu(e, 1653)}>- Work experience</a></li>
                    </ul>
                  </div>
                </li>
                <li><a href='#!' className={isNavSkill ? 'nav-title-btn' : ''} onClick={(e) => onClickmenu(e, 2398)}>SKILLS</a></li>
                <li>
                  <a href='#!' className={isNavProject ? 'nav-title-btn' : ''} onClick={(e) => onClickmenu(e, 3152)}>PROJECT</a>
                  <div className='project-submenu'>
                    <ul>
                      <li><a href="#!" className={isNavKurlyTeam ? 'nav-subtitle-btn' : ''} onClick={(e) => onClickmenu(e, 3152)}>- Kurly Team Project</a></li>
                      <li><a href="#!" className={isNavKurlyReact ? 'nav-subtitle-btn' : ''} onClick={(e) => onClickmenu(e, 3888)}>- Kurly 개인 Porject</a></li>
                      <li><a href="#!" className={isNavMyPage ? 'nav-subtitle-btn' : ''} onClick={(e) => onClickmenu(e, 4487)}>- 나의 포트폴리오 개발</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
            </Fade>
          </aside>
          <article className='sec2-article'>
            <div className="main-title">
              <h2>ABOUT ME</h2>
            </div>
            <div className="about-row-box">
              <div className="about-me">
                <div className="row1-left">
                  <div className="name">
                    <img src="./img/user-info.png" alt="name" />
                    <h2>이름</h2>
                  </div>
                  <div className="detail">
                      <p>지정호</p>
                  </div>
                </div>
                <div className="row1-center">
                  <div className="birth">
                    <img src="./img/birth.png" alt="name" />
                    <h2>생년월일</h2>
                  </div>
                  <div className="detail">
                      <p>1996.09.04</p>
                  </div>
                </div>
                <div className="row1-right">
                <div className="phone-number">
                    <img src="./img/phone-number.png" alt="name" />
                    <h2>전화번호</h2>
                  </div>
                  <div className="detail">
                      <p>010-5501-7918</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="education">
              <div className="edcation-main-title">
                <h2>#Educataion</h2>
              </div>
              <div className="education-content">
                <div className="education-school">
                  <h2>용인예술과학대학교 (구 용인송담대학교)</h2>
                  <ul>
                    <li>- 2015.03 ~ 2021.02 (졸업)</li>
                    <li>- 컴퓨터게임과</li>
                  </ul>
                </div>
                <div className="education-academy">
                  <h2>메가스터디 프론트엔드 5기</h2>
                  <ul>
                    <li>- 2022.07.15 ~ 2023.02.13</li>
                    <li>- 메가스터디 IT에서 진행하는 프론트엔드 개발자 양성 교육 과정</li>
                    <li>- 웹 프론트엔드 중심으로 백엔드의 기초와 함께 배우는 <span>자기 주도형 교육 과정</span></li>
                    <li>- <span>HTML</span>, <span>CSS</span>, <span>JS</span>, <span>jQuety</span>, <span>React.js</span>, <span>TypeScript</span> 외 다수</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="work-experience">
              <div className="work-experience-main-title">
                <h2>#WORK-EXPERIENCE</h2>
              </div>
              <div className="work-experience-content">
                <h1>카카오게임즈 - 모바일 운영팀 (2020.06.23 ~ 2022.06.21)</h1>
                <h2>- 게임에 대한 유저의 니즈를 파악하여 더 나은 환경에서 게임을 할 수 있도록 서비스를 제공</h2>
                <ul> 
                  <li>원활한 게임 환경을 제공하기 위해 유저 동향 실시간 모니터링</li>
                  <li>일일 데이터 관리 및 유저 관리</li>
                  <li>장애, 점검 히스토리 기록 및 게임 이슈 상황 수집</li>
                  <li>민감한 동향, 이슈사항을 수집하여 그래프로 시각화</li>
                  <li>불법 프로그램 사용자 제제 및 공식카페 악성 댓글 유저 제제</li>
                  <li>아이템 및 골드 현거래 일일 거래량 조사</li>
                  <li>이벤트 체크리스트 작성 및 기록</li>
                  <li>정상적인 게임 점검 확인 및 내·외부망에서의 게임 접속 확인</li>
                  <li>클린한 공식카페를 위한 불건전 게시글, 광고성 게시글, 댓글 삭제</li>
                  <li>이벤트 및 점검 공지사항 작성</li>
                  <li>공식 카페 활성화를 위한 게시글 댓글 기획안 작성</li>
                </ul>
              </div>
            </div>
            <div className="skill-main-title">
              <h2>SKILLS</h2>
            </div>
            <div className="skill-content">
              <div className={frontendTextUi ? "content-box frontend on" : "content-box frontend"} onClick={onClickToggleFrontend}>
                <p className='content-title'>Frontend</p>
                <img src="./img/frontend.png" alt="frontend-skills-img" />
                <div className="click-ui-container">
                  <div className="click-ui-content">
                    <h2>HTML5, CSS3, JS(ES6)</h2>
                    <div className="detail-box">
                      <p>
                      - HTML 시맨틱 태그 지키기 가능 <br/>
                      - CSS의 유형별 선언 및 사용 <br/>
                      - Flex속성 활용 가능 <br/>
                      - JavaScript, jQuery를 활용하여 동적인 웹 페이지 구축 가능 <br/>
                      - jQuery를 활용하여 이벤트 구현 가능 <br/>
                      - Ajax를 이용하여 비동기 방식으로 웹 페이지 구축 가능 <br/>
                      </p>
                    </div>
                    <h2>React</h2>
                      <div className="detail-box">
                        <p>
                        - 리액트 개발환경 설정과 Virtual DOM 개념 이해 <br/>
                        - JSX, TSX 사용과 함수형 컴포넌트 작성 가능 <br/>
                        - TypeScript를 사용하여 변수 타입 명시 가능 <br/>
                        - state, props 개념 및 데이터의 흐름 이해 <br/>
                        - Axios를 활용하여 비동기 통신이 가능한 웹페이지 구현 경험 <br/>
                        - Hook을 사용하여 React.state, useEffect 등 생명주기 연동 가능 <br/>
                        - React-router-dom을 사용한 페이지 이동 구현
                        </p>
                      </div>
                  </div>
                </div>
              </div>            
              <div className={backendTextui ? "content-box backend on" : "content-box backend"} onClick={onClickToggleBackend}>
                <p className='content-title'>Backend</p>
                <img src="./img/backend.png" alt="" />
                <div className="click-ui-container">
                  <div className="click-ui-content">
                    <h2>PHP</h2>
                    <div className="detail-box">
                      <p>
                      - 웹문서를 모듈화하여 연동 후 활용 가능 <br/>
                      - RESTFUL API 구현
                      </p>
                    </div>
                    <h2>Node.js</h2>
                      <div className="detail-box">
                        <p>
                        - Node.js 기반 서버의 웹페이지 구축 가능 <br/>
                        </p>
                      </div>
                  </div>
                </div>
              </div>            
              <div className={dbTextui ? "content-box db on" : "content-box db"} onClick={onClickToggleDb}>
                <p className='content-title'>DataBase</p>
                <img src="./img/mysql.png" alt="db-skills-img" />
                <div className="click-ui-container">
                  <div className="click-ui-content">
                    <h2>MySQL</h2>
                    <div className="detail-box">
                      <p>
                        - MySQL 테이블 생성, 수정, 삭제 가능 <br/>
                        - 데이터 삽입, 수정, 조회, 삭제 활용 가능
                      </p>
                    </div>
                  </div>
                </div>
              </div>            
              <div className={collaborationTextui ? "content-box collaboration on" : "content-box collaboration"} onClick={onClickToggleCollaboration}>
                <p className='content-title'>GitHub, Git</p>
                <img src="./img/github.png" alt="collaboration-skills-img" />
                <div className="click-ui-container">
                  <div className="click-ui-content">
                    <h2>GitHub, Git</h2>
                    <div className="detail-box">
                      <p>
                        - GitHub를 통한 레포지토리 관리 <br/>
                        - Git 명령어를 사용하여 홈페이지 배포 가능 <br/>
                        - Git, Node.js를 통한 빌드 가능
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill-msg">
              <h2>❗화면을 클릭해 주세요!</h2>
            </div>         
            </div>
            <div className="project-main-title">
              <h2>PROJECT</h2>
            </div>
            <div className="project-content">
              <div className="content-01">
                <div className="content-title">
                  <h2>Kurly Project (팀)</h2>
                </div>
                <div className="project-info-01">
                  <div className="swiper-container">
                    <Swiper
                      pagination = {{
                        el: '.swiper-pagination-01',
                        clickable: true,
                        bulletClass:"custom_bullet",
                        bulletActiveClass: "swiper-pagination-custom-bullet-active",
                        renderBullet: function (index, className) {
                          return `<button class="${className}"><img src="./img/project01-img/kurly_jquery_preview_${index + 1}.png" alt="Page ${index + 1}" /></button>`;
                        }}}
                      navigation={{
                        nextEl: '.project-01-next-btn',
                        prevEl: '.project-01-prev-btn'
                      }}
                      slidesPerView = {1}
                      loop = {true}
                    >
                      <SwiperSlide><img src="./img/project01-img/kurly_jquery_preview_1.png" alt="kurly_jQuery_img1" /></SwiperSlide>
                      <SwiperSlide><img src="./img/project01-img/kurly_jquery_preview_2.png" alt="kurly_jQuery_img2" /></SwiperSlide>
                      <SwiperSlide><img src="./img/project01-img/kurly_jquery_preview_3.png" alt="kurly_jQuery_img3" /></SwiperSlide>
                      <SwiperSlide><img src="./img/project01-img/kurly_jquery_preview_4.png" alt="kurly_jQuery_img4" /></SwiperSlide>
                      <SwiperSlide><img src="./img/project01-img/kurly_jquery_preview_5.png" alt="kurly_jQuery_img5" /></SwiperSlide>
                      <SwiperSlide><img src="./img/project01-img/kurly_jquery_preview_6.png" alt="kurly_jQuery_img6" /></SwiperSlide>
                    </Swiper>
                    <button className="project-01-next-btn">
                      <img src="./img/swiper-nav-btn.png" alt="" />
                    </button>
                    <button className="project-01-prev-btn">
                      <img src="./img/swiper-nav-btn.png" alt="" />
                    </button>
                    <div className="swiper-pagination-01"></div>
                  </div>
                  <div className="info">
                    <p>마켓컬리 홈페이지 클론 코딩입니다. <span>Node서버 기반으로 HTML, CSS, JavaScript, jQuery를 사용하여 개발</span>하였으며, 스터디를 구성하여 팀 프로젝트로 마켓컬리의 상품페이지와 회원가입 페이지를 구현했습니다.</p>
                    <div className="development-info">
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>개발 기간</p>
                        <p className='right-p'>2022-12 ~ 2023-01</p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>개발 인원</p>
                        <p className='right-p'>3명</p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>Frontend</p>
                        <p className='right-p'>HTML,&nbsp;CSS,&nbsp;javascript,&nbsp;jQuery</p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>Backend</p>
                        <p className='right-p'>PHP,&nbsp;Node.js</p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>DB</p>
                        <p className='right-p'>MySQL</p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>URL</p>
                        <p className='right-p'><a href='https://kiik52.com/kurly' target='_blank' rel='noopener noreferrer'>홈페이지 바로가기</a></p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>배포</p>
                        <p className='right-p'>닷홈 웹 호스팅을 사용한 홈페이지 배포</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="view-detail-btn">
                  <Link to='/project01'>
                    <button >
                    자세히보기
                    </button>
                  </Link>
                </div>
              </div>
              <div className="content-02">
                <div className="content-title">
                  <h2>Kurly Project (개인)</h2>
                </div>
                <div className="project-info-02">
                  <div className="swiper-container">
                    <Swiper
                      pagination = {{
                        el: '.swiper-pagination-02',
                        clickable: true,
                        bulletClass:"custom_bullet",
                        bulletActiveClass: "swiper-pagination-custom-bullet-active",
                        renderBullet: function (index, className) {
                          return `<button class="${className}"><img src="./img/project02-img/kurly_react_preview_${index + 1}.png" alt="Page ${index + 1}" /></button>`;
                        }}}
                      navigation={{
                        nextEl: '.project-02-next-btn',
                        prevEl: '.project-02-prev-btn'
                      }}
                      slidesPerView = {1}
                      loop = {true}
                    >
                      <SwiperSlide><img src="./img/project02-img/kurly_react_preview_1.png" alt="kurly_react_img1" /></SwiperSlide>
                      <SwiperSlide><img src="./img/project02-img/kurly_react_preview_2.png" alt="kurly_react_img2" /></SwiperSlide>
                      <SwiperSlide><img src="./img/project02-img/kurly_react_preview_3.png" alt="kurly_react_img3" /></SwiperSlide>
                      <SwiperSlide><img src="./img/project02-img/kurly_react_preview_4.png" alt="kurly_react_img4" /></SwiperSlide>
                      <SwiperSlide><img src="./img/project02-img/kurly_react_preview_5.png" alt="kurly_react_img5" /></SwiperSlide>
                      <SwiperSlide><img src="./img/project02-img/kurly_react_preview_6.png" alt="kurly_react_img6" /></SwiperSlide>
                    </Swiper>
                    <button className="project-02-next-btn">
                      <img src="./img/swiper-nav-btn.png" alt="" />
                    </button>
                    <button className="project-02-prev-btn">
                      <img src="./img/swiper-nav-btn.png" alt="" />
                    </button>
                    <div className="swiper-pagination-02"></div>
                  </div>
                  <div className="info">
                    <p>마켓컬리 홈페이지 클론 코딩입니다. <span className='color'>Node서버 기반으로 HTML, CSS, JavaScript, jQuery, React를 사용하여 개발</span>하였으며, <span className='underscore'>팀 프로젝트로 만든 마켓컬리를 React를 사용하여 다시 만든 프로젝트</span>입니다. </p>
                    <div className="development-info">
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>개발 기간</p>
                        <p className='right-p'>2022-01 ~ 2023-04</p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>개발 인원</p>
                        <p className='right-p'>1명</p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>Frontend</p>
                        <p className='right-p'>HTML,&nbsp;CSS,&nbsp;javascript,&nbsp;jQuery&nbsp;React</p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>Backend</p>
                        <p className='right-p'>PHP,&nbsp;Node.js</p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>DB</p>
                        <p className='right-p'>MySQL</p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>URL</p>
                        <p className='right-p'><a href='https://ji-jung-ho.github.io/kurly_react_230419/' target='_blank' rel='noopener noreferrer'>홈페이지 바로가기</a></p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>배포</p>
                        <p className='right-p'>개인 도메인을 사용하여 GitHub 홈페이지 배포</p>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div className="view-detail-btn">
                  <Link to='/project02'>
                    <button >
                    자세히보기
                    </button>
                  </Link>
                </div>
              </div>
              <div className="content-03">
                <div className="content-title">
                  <h2>My Portfolio page Project</h2>
                </div>
                <div className="project-info-03">
                  <img src="./img/mypage.png" alt="" />
                  <div className="info">
                    <p>React를 사용한 포트폴리오 홈페이지 입니다. 저에 대한 간단한 설명과 보유스킬 및 지금까지 진행했던 포트폴리오를 소개하는 홈페이지 입니다.</p>
                    <div className="development-info">
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>개발 기간</p>
                        <p className='right-p'>2022-04 ~ 2023-05</p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>개발 인원</p>
                        <p className='right-p'>1명</p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>Frontend</p>
                        <p className='right-p'>HTML,&nbsp;CSS,&nbsp;Javascript,&nbsp;React</p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>Backend</p>
                        <p className='right-p'>Node.js</p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>URL</p>
                        <p className='right-p'><a href='https://kiik52.com/kurly' target='_blank' rel='noopener noreferrer'>홈페이지 바로가기</a></p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>배포</p>
                        <p className='right-p'>GitHub 홈페이지 배포</p>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div className="view-detail-btn">
                  <Link to='/project03'>
                    <button >
                    자세히보기
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            
          </article>
        </section>
        <div className="footer">
          <h2>Copyright © JungHo Ji. All rights reserved.</h2>
        </div>
      </main>
    </>
  );
};
