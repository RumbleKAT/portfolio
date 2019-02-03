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
            img : [
                './resources/01/01.png','./resources/01/01.png','./resources/01/01.png'
            ],
            leftContent : 'https://github.com/RumbleKAT/Catch_Mouse',
            rightContent : '역할 : 게임 클라이언트 개발자 \n 백엔드 개발자 \n 그래픽 디자이너'
        },
        {
            type : 0,
            titleIdx : '01',
            title : '두더지를 잡아라',
            date : '2017년 05월',
            description : '먼저 Nodejs express 모듈을 사용해서 json 파일에다 유저의 정보를 저장하고 조회 할수 있는 기능을 가진 서버를 구성했습니다. 그리고 Github에 올려서 Azure와 연동을 하고 Openframeworks의 ofHttpresponse를 통해 서버로 데이터 전송했습니다.',
            img : [
                './resources/01/01.png','./resources/01/01.png','./resources/01/01.png'
            ],
            leftContent : '아쉬웠던 점: Openframeworks에서 안드로이드 빌드를 실행하여 직접 앱을 런칭하려 했지만 \n 버전 차이로 불가능했었습니다. 시간이 있었다면 다양한 스테이지를 구성해보고 싶었습니다.',
            rightContent : '역할: 게임 클라이언트 개발자 \n 백엔드 개발자 \n 그래픽 디자이너'
        },
        {
            type : 1,
            titleIdx : '02',
            title : 'Natural Fighter',
            date : '2017년 03월',
            description : '각 국의 미세먼지 데이터를 받아와서 미세먼지 농도에 따라 게임 난이도가 달라지는 타워 디펜스 게임을 제작해봤습니 다. 게임 클라이언트 엔진으로 Unity 3D c#을 이용했고 nodejs로 개발한 서버에서 각국의 미세먼지 데이터를 제공받았습니다.',
            img : [
                './resources/01/01.png','./resources/01/01.png','./resources/01/01.png'
            ],
            rightContent : [
                {
                    sub_title : '기획의도',
                    sub_description :[
                      '사용자가 선택한 도시에 따라서 환경요소가 다르며 이것을 통해 게임 난이도도 결정됩니다.',
                      '개인 농장에서는 자신의 나무를 지어서 나무들이 생성해 내는 요소들로 게임아이템들을 사서 플레이 의 효율성을 높였습니다.'  
                    ]
                },
                {
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
            img : [
                './resources/01/01.png','./resources/01/01.png','./resources/01/01.png'
            ],
            rightContent : [
                {
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
            img : [
                './resources/01/01.png','./resources/01/01.png'
            ],
            leftContent : [
                {
                    sub_title : '기획의도',
                    sub_description :[
                      '게임을플레이하고스코어를명예의전당에업데 이트 할 수 있습니다.',
                      '1위부터 5위까지 랭킹화면에서 닉네임과 등수를 볼 수 있어서 사용자끼리 경쟁을 유도합니다.',
                      'Microsoft Azure기반으로 서버를 만들어서 사용 자 닉네임과 랭킹을 관리합니다.'
                    ]
                }
            ],
            rightContent : [
                {
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
            type : 4
        }
    ]
};