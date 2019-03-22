var state = {
    pageIndex : 0,
    pageArray : [
        {
            type : -1,
            pageWriter : "송명진"
        },
        {
            type : 0,
            titleIdx : '01',
            title : '두더지를 잡아라',
            date : '2017년 05월',
            description : '두더지를 잡아라는 C++ 기반 오픈소스 라이브러리로 개발된 게임입니다. 시간에 따라 두더지와 토끼, 폭탄 두더지 등 다양한 게임요소들의 등장으로 단순함을 탈피하고 Microsoft Azure와의 연동으로 랭킹제를 제작했습니다.',
            contents : [
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 0, //-1 text type
                    sub_title : 'url',
                    sub_description : 'https://github.com/RumbleKAT/Catch_Mouse'
                },
                {
                    img_type : 0,
                    sub_title : '역할',
                    sub_description : '게임 클라이언트 개발자 \n 백엔드 개발자 \n 그래픽 디자이너'
                }
            ]
        },
        {
            type : 0,
            titleIdx : '01',
            title : '두더지를 잡아라',
            date : '2017년 05월',
            description : '먼저 Nodejs express 모듈을 사용해서 json 파일에다 유저의 정보를 저장하고 조회 할수 있는 기능을 가진 서버를 구성했습니다. 그리고 Github에 올려서 Azure와 연동을 하고 Openframeworks의 ofHttpresponse를 통해 서버로 데이터 전송했습니다.',
            contents: [
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 0,
                    sub_title : '아쉬웠던 점',
                    sub_description : 'Openframeworks에서 안드로이드 빌드를 실행하여 직접 앱을 런칭하려 했지만 \n 버전 차이로 불가능했었습니다. 시간이 있었다면 다양한 스테이지를 구성해보고 싶었습니다.'
                },
                {
                    img_type : 0,
                    sub_title : '역할',
                    sub_description : '게임 클라이언트 개발자 \n 백엔드 개발자 \n 그래픽 디자이너'
                }
            ]
        },
        {
            type : 1,
            titleIdx : '02',
            title : 'Natural Fighter',
            date : '2017년 03월',
            description : '각 국의 미세먼지 데이터를 받아와서 미세먼지 농도에 따라 게임 난이도가 달라지는 타워 디펜스 게임을 제작해봤습니 다. 게임 클라이언트 엔진으로 Unity 3D c#을 이용했고 nodejs로 개발한 서버에서 각국의 미세먼지 데이터를 제공받았습니다.',
            contents: [
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 0,
                    sub_title : '기획의도',
                    sub_description :[
                      '사용자가 선택한 도시에 따라서 환경요소가 다르며 이것을 통해 게임 난이도도 결정됩니다.',
                      '개인 농장에서는 자신의 나무를 지어서 나무들이 생성해 내는 요소들로 게임아이템들을 사서 플레이 의 효율성을 높였습니다.'  
                    ]
                },
                {
                    img_type : 0,
                    sub_title : '역할',
                    sub_description : '게임 백엔드 개발자 및 디자이너'
                }
            ]
        },
        {
            type : 1,
            titleIdx : '02',
            title : 'Natural Fighter',
            date : '2017년 03월',
            description : '각 국의 미세먼지 데이터를 받아와서 미세먼지 농도에 따라 게임 난이도가 달라지는 타워 디펜스 게임을 제작해봤습니 다. 게임 클라이언트 엔진으로 Unity 3D c#을 이용했고 nodejs로 개발한 서버에서 각국의 미세먼지 데이터를 제공받았습니다.',
            contents: [
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 0,
                    sub_title : '기획의도',
                    sub_description :[
                      '타워는 나무들로 이루어져 있는데 나무들이 미세먼 지 등 환경문제의 원인들을 잡아가면서 스코어를 늘리는 방식으로 움직입니다.',
                      '나무를 심고 업그레이드 하면서 먼지를 잡아서 산 소를 바꾸면서 사용자는 나무의 중요성을 한번 더 인식시킬 수 있습니다.'  
                    ]
                }
            ]
        },
        {
            type : 1,
            titleIdx : '02',
            title : 'Natural Fighter',
            date : '2017년 03월',
            description : '각 국의 미세먼지 데이터를 받아와서 미세먼지 농도에 따라 게임 난이도가 달라지는 타워 디펜스 게임을 제작해봤습니 다. 게임 클라이언트 엔진으로 Unity 3D c#을 이용했고 nodejs로 개발한 서버에서 각국의 미세먼지 데이터를 제공받았습니다.',
            /*
                content type 설정
            */
            contents : [
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 0,//-1 text type
                    sub_title : '기획의도',
                    sub_description :[
                      '게임을플레이하고스코어를명예의전당에업데 이트 할 수 있습니다.',
                      '1위부터 5위까지 랭킹화면에서 닉네임과 등수를 볼 수 있어서 사용자끼리 경쟁을 유도합니다.',
                      'Microsoft Azure기반으로 서버를 만들어서 사용 자 닉네임과 랭킹을 관리합니다.'
                    ]
                },
                {
                    img_type : 0,
                    sub_title : '아쉬운 점',
                    sub_description :[
                      '미세먼지 데이터를 받을 때 두 가지 웹사이트의 데이터를 파싱하여 데이터 값의 차이가 있어서 게임 난이도에 커다란 영향을 미쳤습니다.',
                      '나무를 심고 업그레이드 하면서 먼지를 잡아서 산소를 바꾸면서 사용자는 나무의 중요성을 한번 더 인식시킬 수 있습니다.',
                      'Individual farm 부분보다 타워디펜스 부분에 초 점을 맞춰서 개발을 진행하다보니 기획의도와는 다 르게 표현된 아쉬움이 있습니다.'
                    ]
                }
            ]
        },
        {
            type : 0,
            titleIdx : '03',
            title : '우리말 도우미',
            date : '2017년 01월',
            description : '카카오 플러스 친구 우리말 도우미를 제작했습니다. 우리말도우미란 국어단어, 3개국어 번역(영어, 일어, 중국 어), 백과사전 기능을 가진 채팅봇으로 REST API 설계에 맞게 HTTP 메서드를 이용하였습니다.(Get, Post, Put , Delete)',
            contents : [
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 0, //-1 text type
                    sub_title : 'url',
                    sub_description : 'https://github.com/RumbleKAT/kakao_autoreply'
                },
                {
                    img_type : 0,
                    sub_title : '', 
                    sub_description : ''
                }
            ]
        },
        {
            type : 0,
            titleIdx : '03',
            title : '우리말 도우미',
            date : '2017년 01월',
            description : '카카오 플러스 친구 우리말 도우미를 제작했습니다. 우리말도우미란 국어단어, 3개국어 번역(영어, 일어, 중국 어), 백과사전 기능을 가진 채팅봇으로 REST API 설계에 맞게 HTTP 메서드를 이용하였습니다.(Get, Post, Put , Delete)',
            contents : [
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 0, //-1 text type
                    sub_title : '아쉬운 점',
                    sub_description : '우리말 도우미를 사용하면서 사용자들의 의도를 좀더 명확하게 파악하는 기능이 추가되어야 한다고 생각했습니다. 그 해결 방법을 Microsoft Luis api에서 찾았고 사용자 데이터를 학습시켜 서비스를 업데이트 할 예정입니다.'
                },
                {
                    img_type : 0,
                    sub_title : '', 
                    sub_description : ''
                }
            ]
        },
        {
            type : 2,
            titleIdx : '04',
            title : '키즈마루',
            date : '2017년 07월',
            description : '골프존 자회사인 키즈 카페 업체인 키즈 마루에서 유아용 게임을 만들어 달라는 요청을 받아서 Unity 3D와 아두이노를 이용해서 개발을 진행했던 프로젝트입니다.',
            contents : [
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 0, //-1 text type
                    sub_title : '기획의도',
                    sub_description : [
                        '사용자는 9*9의 타일 위에서 움직입니다.',
                        '본인의 스타팅지점에서 빨간 목표지점으로 넘어가면 장애물이 늘어나게 되게 됩니다',
                        '가장 외곽의 지점에 도달하면 랜덤한 지역으로 텔레포트 됩니다.'
                    ]
                }
            ]
        },
        {
            type : 2,
            titleIdx : '04',
            title : '키즈마루',
            date : '2017년 07월',
            description : '골프존 자회사인 키즈 카페 업체인 키즈 마루에서 유아용 게임을 만들어 달라는 요청을 받아서 Unity 3D와 아두이노를 이용해서 개발을 진행했던 프로젝트입니다.',
            contents : [
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 0, //-1 text type
                    sub_title : '아쉬운 점',
                    sub_description : [
                        '기획했을 때 예상하지 못했던 문제점을 보고 팀원 간에 철저한 기획단계를 거쳤으면 더 좋은 결과물을 만들어 낼 수 있을거라는 아쉬움이 있습니다.'
                    ]
                },
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                }
            ]
        },
        {
            type : 1,
            titleIdx : '05',
            title : '피아노트 프로젝트',
            date : '2017년 12월',
            description : '피아노 교육용 IoT 디바이스로 Audiveris 악보인식 오픈소스를 이용하여 사용자의 개인 악보 데이터를 변환 변환된 악보를 기반으로 실제로 리듬게임을 할 수 있도록 SW 제작했습니다.',
            contents : [
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 0, //-1 text type
                    sub_title : '기획의도',
                    sub_description : [
                        'IoT피아노 보조 장치로써 집에 방치되어 있는 피아노에 부착하면 LED불빛을 이용하여 타 각건반을 표시하여 악보를 읽을 줄 몰라도 곡을 연주할 수 있게 해주며 적외선 센싱을 통 해 사용자의 연주를 인식',
                        '안드로이드/iOS 앱 으로 악보와 곡의 정보를 보여주며 게이미피케이션을 가미해 리듬게 임처럼 재미있게 연주에 대한 평가와 피드백을 얻을 수 있는 서비스'
                    ]
                },
                {
                    img_type : 0, //-1 text type
                    sub_title : '링크',
                    sub_description : [
                        'https://www.youtube.com/watch?v=SpHiasNyHsY',
                        'https://www.youtube.com/watch?v=G1rWi_WTBbM'
                    ]
                }
            ]
        },
        {
            type : 1,
            titleIdx : '05',
            title : '피아노트 프로젝트',
            date : '2017년 12월',
            description : '피아노 교육용 IoT 디바이스로 Audiveris 악보인식 오픈소스를 이용하여 사용자의 개인 악보 데이터를 변환 변환된 악보를 기반으로 실제로 리듬게임을 할 수 있도록 SW 제작했습니다.',
            contents: [
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 0, //-1 text type
                    sub_title : '기능',
                    sub_description : [
                        '서버로부터 곡의 정보를 받아와 소프트웨어에서 곡의 악 보와 타각건반을 시각화 하여 보여줌',
                        '안드로이드/iOS 디바이스로부터 타각건반의 데이터를 받 아와 피아노 건반 윗부분에 얹는 형태의 디바이스위의 LED 램프를 이용해 어떤 건반을 쳐야할지 보여줌',
                        '사용자가 LED 가이드를 따라 건반을 연주하면 Optical Sensor를 통해 사용자의 연주를 감지하여 해당 데이터를 소프트웨어로 전송',
                        '사용자의 연주데이터를 평가하는 알고리즘을 통해 점수를 보여주는 방식으로 사용자 에게 피드백을 제공'
                    ]
                }
            ]
        },
        {
            type : 1,
            titleIdx : '06',
            title : '메트로소프트 홈페이지',
            date : '2018년 03월',
            description : 'ReactJS를 활용한 웹 프론트 제작 프로젝트로 실제 호스팅하고 있는 홈페이지의 사이트 리뉴얼 작업',
            contents: [
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 0, //-1 text type
                    sub_title : '',
                    sub_description : ''
                },
                {
                    img_type : 0, //-1 text type
                    sub_title : '개발과정',
                    sub_description : [
                        'ReactJS로 개발을 진행',
                        '반복 렌더링 되는 부분을 따로 컴포넌트로 만들어서 컴포넌트를 불러오는 형식의 작업으로 진행',
                        'React-redux를 활용한 전체 state 제어 방식을 활용',
                        'JSON를 사용하여 웹 화면에 보여지는 컴포넌트를 저장 및 수정 가능하게 제작'
                    ]
                }
            ]
        },
        {
            type : 1,
            titleIdx : '07',
            title : 'DIY(Defence It Yourself)',
            date : '2018년 05월',
            description : '졸업작품 프로젝트로 제작한 DIY라는 타워 디펜스 게임의 백엔드 개발을 진행했습니다. Heroku와 Nodejs 그리고 MongoDB를 이용하여 사용자 데이터와 커스텀 타워, 맵 데이터를 저장, 수정할 수 있도록 제작했습니다.',
            contents: [
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 0, //-1 text type
                    sub_title : '개발과정',
                    sub_description : [
                        '리소스 지향 아키텍쳐(REST)를 기반으로 RESOURCE(uri), Verb(Http), Representations 3가지 구성으로 서버 내부를 구성',
                        '사용자 개인정보의 보호를 위해 비밀번호를 bcrypt-nodejs 모듈을 통해 해싱키로 변환',
                        '사용자의 비밀번호를 초기화 할 때 smtp 관련 모듈인 nodemailer를 사용하여 기존에 저장된 사용자의 이메일에 메일을 보내어 비밀번호를 확인할 수 있도록 제작',
                    ]
                },
                {
                    img_type : 0, //-1 text type
                    sub_title : '',
                    sub_description : ''
                },
            ]
        },
        {
            type : 1,
            titleIdx : '07',
            title : 'DIY(Defence It Yourself)',
            date : '2018년 05월',
            description : '졸업작품 프로젝트로 제작한 DIY라는 타워 디펜스 게임의 백엔드 개발을 진행했습니다. Heroku와 Nodejs 그리고 MongoDB를 이용하여 사용자 데이터와 커스텀 타워, 맵 데이터를 저장, 수정할 수 있도록 제작했습니다.',
            contents: [
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 0, //-1 text type
                    sub_title : '개발과정',
                    sub_description : [
                        'Http (Get, Post, Put, Delete)의 메서드에 맞게 데이터의 생성과 조회 수정, 삭제가 가능하도록 라우터 제작',
                        'Json Web Token을 이용하여 서버가 클라이언트에 요청 을 받을 때 마다, 해당 토큰의 유효함을 검증하고 해당하 는 응답을 보내주는 형식'
                    ]
                },
            ]
        },
        {
            type : 4,
            titleIdx : '08',
            title : 'Boost Cource Ace 2기',
            date : '2018년 08월',
            description : '커넥트 재단에서 진행하는 교육 활동인 부스트코스 에이스 풀스택 개발자 분야에 참여하면서 스프링 프레임 워크와 순수 ES6와 JQuery, Handlebar를 이용한 모의 네이버 예약 앱 서비스를 제작했습니다.',
            contents: [
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                },
                {
                    img_type : 1,
                    img_src : './resources/01/01.png'
                }
            ]
        },{
            type : 5,
            title : 'Thank You'
        }
    ]
};