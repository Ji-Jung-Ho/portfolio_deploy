import React, { useEffect, useState } from 'react';
import  { Link } from 'react-router-dom';

export default function MainComponent () {
  const [frontendTextUi, setFrontendTextUi] = React.useState(false);
  const [backendTextui, setBackendTextUi] = React.useState(false);
  const [dbTextui, setDbTextUi] = React.useState(false);
  const [collaborationTextui, setCollaborationTextUi] = React.useState(false);

  const [scroll, setScrool] = useState(0);

  // 스크롤 탑 값을 구하는 함수
  const onScroll=()=>{  
    setScrool(window.scrollY || document.documentElement.scrollTop);
  }
  // 클릭한 메뉴로 부드럽게 이동
  const scrollToContent = (top) => {
    window.scrollTo({top: top, behavior: 'smooth'});
  }
  const onClickmenu = (e, top) => {
    e.preventDefault();
    scrollToContent(top);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    window.scrollTo(0, 0);
}, []);

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

  // 스크롤 탑값을 구하기 위한 함수 추후 삭제 예정
  const scrolltop=()=>{
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    console.log(scrollPosition);
  }

  return (
    <>
      <main id='main'>
        <section id='section1' className='intro'>
            <aside className="sec1-aside">
              <nav className='menu-bar'>
                <ul className="main-title">
                  <li><a href="#!" onClick={(e) => onClickmenu(e, 0)}>Home</a></li>
                  <li><a href='#!' onClick={(e) => onClickmenu(e, 799)}>ABOUT ME</a></li>
                  <li><a href='#!' onClick={(e) => onClickmenu(e, 3698)}>SKILLS</a></li>
                  <li><a href='#!' onClick={(e) => onClickmenu(e, 4387)}>PROJECT</a></li>
                </ul>
                <ul className='github-email'>
                  <li><a href="mailto:kiik52.naver.com">kiik52.naver.com</a></li>
                  <li><a href="https://github.com/Ji-Jung-Ho" target="_blank">github.com/Ji-Jung-Ho</a></li>
                  <li><p>Last Update : 2023-04-27</p></li>
                </ul>
              </nav>
            </aside>
            <article className="sec1-article">
              <div className="img-box">
                <img src="./img/main-bg.jfif" alt="" />
              </div>
              <div className="main-title">
                <h2 className='info'>상상을 구현하는걸 좋아하는</h2>
                <h2 className='info-name'>지정호 <span>입니다.</span></h2>
                <h2 className='info-subtitle'>프론트엔드 개발자가 되는게 첫번째 목표입니다.</h2>
                <h2 className='info-text-motto'>: 긍정적인 마인드로 문제를 해결하자</h2>
              </div>
            </article>
        </section>
        <section id="section2" className='main-content'>
          <aside className='sec2-aside'>
            <nav className='menu-bar'>
              <ul className="nav-main-title">
                <li><a href="#!" onClick={(e) => onClickmenu(e, 0)}>Home</a></li>
                <button onClick={scrolltop}>스크롤값</button>
                <li>
                  <a href='#!' onClick={(e) => onClickmenu(e, 799)}>ABOUT ME</a>
                  <div className="project-submenu">
                    <ul>
                      <li><a href="#!" onClick={(e) => onClickmenu(e, 958)}>- Education</a></li>
                      <li><a href="#!" onClick={(e) => onClickmenu(e, 1708)}>- Work experience</a></li>
                      <li><a href="#!" onClick={(e) => onClickmenu(e, 2508)}>- Self InterView</a></li>
                    </ul>
                  </div>
                </li>
                <li><a href='#!' onClick={(e) => onClickmenu(e, 3698)}>SKILLS</a></li>
                <li>
                  <a href='#!' onClick={(e) => onClickmenu(e, 4387)}>PROJECT</a>
                  <div className='project-submenu'>
                    <ul>
                      <li><a href="#!" onClick={(e) => onClickmenu(e, 4387)}>- Kurly Team Project</a></li>
                      <li><a href="#!" onClick={(e) => onClickmenu(e, 5087)}>- Kurly 개인 Porject</a></li>
                      <li><a href="#!" onClick={(e) => onClickmenu(e, 5613)}>- 나의 포트폴리오 개발</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </aside>
          <article className='sec2-article'>
            <div className="main-title">
              <h2>About Me</h2>
            </div>
            <div className="about-row-box">
              <div className="about-me-row1">
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
              {/* <div className="about-me-row2">
                <div className="row2-left">
                  <div className="address">
                    <img src="./img/address.png" alt="name" />
                    <h2>주소</h2>
                  </div>
                  <div className="detail">
                      <p>경기도 광주시 현산로 99</p>
                  </div>
                </div>
                <div className="row2-center">
                  <div className="email">
                    <img src="./img/email.png" alt="name" />
                    <h2>이메일</h2>
                  </div>
                  <div className="detail">
                      <p>kiik52@naver.com</p>
                  </div>
                </div>
                <div className="row2-right">
                <div className="github">
                    <img src="./img/github_icon-icons.com_62793.png" alt="GithubImg" />
                    <h2>깃허브</h2>
                  </div>
                  <div className="detail">
                      <p>010-5501-7918</p>
                  </div>
                </div>
              </div> */}
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
                    {/* <li><img src="./img/academy-it.png" alt="" /></li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="work-experience">
              <div className="work-experience-main-title">
                <h2>#Work-Experience</h2>
              </div>
              <div className="work-experience-content">
                <h1>카카오게임즈 - 모바일 운영팀 (2020.06.23 ~ 2022.06.21)</h1>
                <h2>- 고객의 니즈를 파악하여 더 나은 환경에서 게임을 할 수 있도록 서비스를 제공</h2>
                <ul> 
                  <li>원활한 게임 환경을 제공하기 위해 <span>유저 동향 실시간 모니터링</span></li>
                  <li>일일 데이터 관리 및 유저 관리</li>
                  <li>장애, 점검 히스토리 기록 및 게임 이슈 상황 수집</li>
                  <li>민감한 동향을 수집하여 그래프로 시각화</li>
                  <li>불법 프로그램 사용자 제제 및 공식카페 악질 댓글 유저 제제</li>
                  <li>아이템 및 골드 현거래 일일 거래량 조사</li>
                  <li>이벤트 체크리스트 작성</li>
                  <li>정상적인 게임 점검 확인 및 내·외부망 게임 접속 확인</li>
                  <li>클린한 공식카페를 위한 불건전 게시글, 광고성 게시글, 댓글 삭제</li>
                  <li>이벤트 및 점검 공지사항 작성</li>
                  <li>공식 카페 활성화를 위한 게시글 댓글 기획안 작성</li>
                </ul>
              </div>
            </div>
            <div className="interview-main-title">
              <h1>#Self InterView</h1>
            </div>
            <div className="interview-box">
              <div className="row-1">
                <div className="interview-sub-title-0102">
                  <h2 className="interview-0102"><img src="./img/q.png" alt="" />개발자가 되고 싶은 이유</h2>
                  <div className="content-box">
                    <p className='content'>
                      10년뒤의 제 모습을 떠올렸을때 지금보다 열정이 좀 식어있을지라도 여전히 타오르는 모습이기를 원했습니다.  그러려면 이 각박한 세상속에서 도태되지 않아야 하고,
                      저 스스로의 발전과 그 발전을 뒷받침해줄 노력만이 정답이라고 생각했습니다. <br/><br/> 이런 생각을 하던 중 우연한 계기로 프론트엔드를 알게되었고, '사용자가 가장 먼저 보는곳' 이라는 프론트엔드 업무에 흥미를 느꼈고,
                      이후 지속적으로 관심을 가지게 되었습니다. <br/> 가장 큰 흥미를 느낀건 내가 상상해왔던 것들을 눈에 보이게 만들수 있고, 정적인 페이지를 동적인 페이지로 바꾸는 방법을 알아가는게 너무 재미있었습니다. 개발이야말로
                      무한한 발전 가능성을 보았고, 꾸준한 노력을 통해 저의 미래를 현재보다 빛나게 할 수 있는 일이란걸 확신했습니다. 이러한 이유로 개발자를 목표로 제 2의 인생을 시작하게 되었습니다.
                    </p>
                  </div>
                </div>
                <div className="interview-sub-title-0102">
                  <h2 className="interview-0102"><img src="./img/q.png" alt="" />개발자가 되기 위한 노력</h2>
                  <div className="content-box">
                    <p className='content'>
                      회사를 그만 두기 전에는 쉬는날마다 HTML, CSS, JavaScript에 대한 인터넷 강의를 수강했고, 서점에서 웹 개발자에 대한 책을 사서 공부를 했습니다. 하지만 쉬는날에만
                      공부하기에 웹개발에 빠져버린 저는 학원을 다니기 위해 회사를 그만두었습니다. <br/><br/> 학원에선 웹개발의 심화과정을 배웠으며 부족한 부분들은 강사님께 질문을 하거나 개발 커뮤니티, 인터넷 검색, 유튜브 등을 통해  
                      하나씩 배워갔습니다. 코드를 외우려고 하지 않고 최대한 이해하려고 노력했으며, 이해가 되지 않는 부분은 쉬운 예시를 따로 만들면서 반복 작업을 했습니다. 이러한 과정에서 몇개의
                      홈페이지를 제작했으며, 여러명이서 개발하는 경험도 느껴보고 싶어 스터디를 구성해서 팀 프로젝트를 개발했습니다. <br/><br/>
                      많은 사람들이 요즘은 개발하기 쉬워졌다고 말하지만 저는 반은 맞고 반은 틀리다고 생각합니다. 개발하는데 도움을 주는 영상 및 교재가 잘되있는건 사실이지만, 중요한건 본인이 개발에 대한 노력과 열정의 크기라고 생각합니다.
                      그렇기에 저는 오늘도 개발자가 되기 위해 노력하고 있습니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row-2">
                <div className="interview-sub-title-0304">
                  <h2 className="interview-0304"><img src="./img/q.png" alt="" className='q-img' />원활한 의사소통과 협업능력을 갖춘 인재</h2>
                  <div className="content-box">
                    <p className='content'>
                    개발자에게 커뮤니케이션과 협업 능력은 필수라고 생각합니다. 프론트엔드 업무를 하다보면 기획자, 디자이너, 백엔드 개발자와 기본적으로 소통을 하게 될텐데 의사소통이 제대로 이루어지지 않는다면 저뿐만 아니라 같이 협업하는 사람과 트러블이 발생할거라 생각합니다. <br/><br/>
                    저는 이러한 트러블이 발생하는걸 조금이라도 줄일 수 있는 경험을 해왔습니다. <br /> 카카오게임즈 모바일 운영팀에 있을 때 교대 근무를 하기 전 근무했을때까지 각 게임별 크리티컬한 이슈에 대한 정리와 이후 유저들의 동향 및 주의깊게 봐야할 상황을 정리해 두어 다음 교대자에게 자세하게 전달해주었습니다.
                    이 행동으로 인해 다음 근무자는 훨씬 빨리 게임에 대한 이슈 사항들을 파악할 수 있었으며, 정리해놓은 중요 사항을 토대로 근무하여 해당 이슈 및 다른 이슈에 대해 즉각적인 반응을 할 수 있었습니다. <br/><br/> 그 외에 팀장님과의 1:1 면담을 통한 분석서 보고, 동료들과의 업무 메뉴얼을 리뉴얼 했던 경험 등 이 외에도 많은 사람들과의 능동적인 의사소통의 경험이 있습니다.
                    능동적인 의사소통이 이번에 팀 프로젝트를 하면서 많은 도움이 되었습니다. 주도적으로 팀을 이끌었고, 각자의 의견을 조율하여 프로젝트가 끝나는 마지막까지 원활한 진행으로 유종의미를 거둘 수 있었습니다.
                    </p>
                  </div>
                </div>
                <div className="interview-sub-title-0304">
                  <h2 className="interview-0304"><img src="./img/q.png" alt="" />앞으로의 포부</h2>
                  <div className="content-box">
                    <p className='content'>
                    프론트엔드 개발 직무는 고객이 보는 모든 것을 개발하는 직무입니다. 즉 고객이 가장 먼저 보는 부분을 담당하므로 회사의 첫 인상을 만드는 것이라 생각합니다. 저는 이러한 업무가 굉장히 매력적이라 생각하며 고객의 반응을 보고 즉각 반영하는 개발팀에 이바지 할 수 있는 핵심 구성원이 되고 싶습니다.<br/><br/>
                    디바이스와 브라우저는 점점 더 다양해지고 있고 이에 맞는 웹 환경을 고객들에게 제공해주기 위해 저는 프론트엔드 개발자로서 고객과 회사를 이어주는 믿음직한 중간다리 역할을 할 것입니다.
                    프론트엔드 개발 분야는 다른 분야에 비해 트렌드가 빠릅니다. 이에 뒤처지지 않게 저는 하나의 기술을 익혔다고 해서 그 기술에 계속 안주하지 않고 새로운 기술과 트렌드를 꾸준하게 익히도록 노력할 것입니다.
                    끊임없는 학습을 통해 사용자 인터페이스와 사용자 경험을 기술적으로 정확하게 구현할 수 있도록 항상 노력하고 사용자의 입장에서 생각하겠습니다.<br/><br/>
                    저는 앞으로 온라인 비즈니스의 확장이 더 심해질 것이라 생각합니다. 때문에 고객들은 점점 온라인 웹사이트를 점점 많이 접할 것이고 이에 따라 프론트엔드 개발 직무는 비전이 있다고 생각합니다.
                    새로운 기술을 배우고 익히는 것을 좋아하는 저에게 있어 회사의 프론트엔드 개발 직무는 역량을 발휘하며 함께 성장해나갈 수 있는 가장 적합한 직무라고 확신합니다.
                    </p>
                  </div>
                </div>
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
                        - React-router-dom을 사용한 페이지 이동
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
                <img src="./img/db.png" alt="db-skills-img" />
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
                <img src="./img/collaboration.png" alt="collaboration-skills-img" />
                <div className="click-ui-container">
                  <div className="click-ui-content">
                    <h2>GitHub, Git</h2>
                    <div className="detail-box">
                      <p>
                        - GitHub를 통한 레포지토리 관리 <br/>
                        - Git bash를 이용하여 홈페이지 배포 가능
                      </p>
                    </div>
                  </div>
                </div>
              </div>            
            </div>
            <div className="project-main-title">
              <h2>PROJECT</h2>
            </div>
            <div className="project-content">
              <div className="content-01">
                <div className="content-title">
                  <h2>MarKet-Kurly Project (팀)</h2>
                </div>
                <div className="project-info-01">
                  <img src="./img/kurly-jquery.png" alt="" />
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
                <Link to='/project01'>
                  <button className='view-detail-btn'>
                  자세히보기
                  </button>
                </Link>
              </div>
              <div className="content-02">
                <div className="content-title">
                  <h2>MarKet-Kurly Project (개인)</h2>
                </div>
                <div className="project-info-02">
                  <img src="./img/kurly-react.png" alt="" />
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
                <Link to="/project02">
                  <button className='view-detail-btn'>
                    자세히보기
                  </button>
                </Link>
              </div>
              <div className="content-03">
                <div className="content-title">
                  <h2>My Page Project</h2>
                </div>
                <div className="project-info-03">
                  <img src="./img/mypage.png" alt="" />
                  <div className="info">
                    <p>React를 사용한 포트폴리오 홈페이지 입니다. 저에 대한 간단한 설명과 보유스킬 및 지금까지 진행했던 포트폴리오를 소개하는 홈페이지 입니다.</p>
                    <div className="development-info">
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>개발 기간</p>
                        <p className='right-p'>2022-04 ~ 2023-04</p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>개발 인원</p>
                        <p className='right-p'>1명</p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>Frontend</p>
                        <p className='right-p'>HTML,&nbsp;CSS,&nbsp;javascript,&nbsp;React</p>
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
                <Link to='project03'>
                  <button className='view-detail-btn'>
                    자세히보기
                  </button>
                </Link>
              </div>
            </div>
            
          </article>
        </section>
        <div className="footer">
          <h2>Copyright © JungHo Ji. All rights reserved.</h2>
        </div>
        
        {/* <section id="section3">
          <div className="sec3-container">
            <h2>Copyright © JungHo Ji. All rights reserved</h2>
          </div>
        </section> */}
      </main>
    </>
  );
};
