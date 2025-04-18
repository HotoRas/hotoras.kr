# 닌텐도 스위치, 스위치 2 등...

닌텐도 스위치 시리즈에 대한 정보들을 정리하는 문서입니다.

라고 써놓고 아마 욕 좀 할 예정

## Nintendo Switch
형식 명칭: HAC-001
- CPU: NVIDIA Tegra X1 T210, A57 4@1.02GHz A53 4@disabled
  * 명령어셋: ARM AARCH64 ARMv8-A 표준 (32비트 직접실행 커널 수준 미지원)
  * Big.little ARM Cortex A57 4-Core + ARM Cortex A53 4-Core
  * 20nm 공정이다. 공정을 따지는 이유는 발열에 의한 지속 시간 차이 때문...
  * 리틀 코어는 비활성화 상태로 내장되어 있으며, 물리적으로 제거되어 있지 않아 커펌 상태에서는 활성화도 가능한 것으로 보인다.
  * 배터리 개선판(HAC-001(-01))에는 X1+가 탑재되었다. 16nm 공정이라는 걸 제외하고 바뀐 건 없다.
- GPU: NVIDIA 맥스웰 GM20B @768MHz
- RAM
  * SAMSUNG K4F6E304HB-MGCH 2+2GB Dual, LPDDR4 PC4-3200
  * 배터리 개선판의 경우 LPDDR4X PC4-3200으로 변경되었다.
- 저장 장치
  * 읽기/쓰기:
    - eMMC 5.1 32GB 내장 메모리  
      OS 영역은 약 4GB로, 별도의 파티션으로 나뉘어 있지는 않은 듯.
    - microSD XC 컨트롤러  
      최대 용량은 2.0TB이다.
  * 읽기 전용:
    - Nintendo Switch/Switch 2 소프트웨어용 게임 카드
      * 규격: 31x21x3.0
      * 용량: 1~32GB
      * 배터리 개선판에 IO 속도가 개선되었다.
- 디스플레이 장치: 6.2" HD 720p60 RGB 서브픽셀 IPS 패널
  * 픽셀 밀도: 236.87ppi
  * 터치: 정전식 10점 플라스틱 패널 터치
- 영상 출력
  * 디스플레이: 720p@60fps
  * 독 (USB3 Alt Mode HDMIlike): 최대 1080p@60fps
- 음성: Linear PCM 가상/물리 5.1채널 지원
- 무선 연결
  * Wi-Fi: 802.11b,g,n,ac (Wi-Fi 2~5) WPA/WPA2
  * BlueTooth: 4.1 (최대 8대: 조이콘 4쌍)
- 유선 네트워크: USB2LAN 어댑터 이용
  * 권장: Nintendo Wii LAN 네트워크 어댑터 (Cat.5e)
- 배터리: 3.7V 4310mAh
  * 게임에 따라 2.5~6.5시간, 배터리 개선판은 4.5~9시간
  * PD 39W 충전 가능: PD Adaptive Voltage 규격으로 충전 가능
- 어댑터: 프리볼트 1A -> 5V 1A / 15V 2.6A

갤럭시 S7, iPhone 6과 비슷한 성능을 보여주며 2017년에 나온 30만원대 친구임을 감안하면 성능이 낮은 건 아니다.

2019년에 공정 개선판("배터리 개선판", 형식명칭 HAC-001(-01))이 발매되었으며 공정 개선"만" 한 것이라 지속 시간이 1.3~1.8배로 늘어나고 IO 속도가 개선된 것 이외에는 차이가 없다.  
한국에 풀린 물량은 90% 이상이 이 공정 개선판이다.

컨트롤러에는 IR 카메라와 6축 자이로 센서를 탑재, AMIBO용으로 NFC 리더도 들어 있다.

그래픽 API는 OpenGL, Vulkan, NVIDIA NVN에 호환된다. 게임 엔진도 Unreal과 Unity 모두에서 지원하고 있다.
> Unity 엔진은 ARM 발적화라는 고질병과 적은 메모리 대역폭이라는 특성이 겹쳐 성능이 매우 안 좋은 상태로 나왔다. 현재는 로우레벨급에서 최적화가 되어 그나마 좀 나은 상태.
>
> Unreal 엔진은 기본 렌더링 방식이 대역폭을 많이 먹는 문제가 있어 상성이 매우 좋지 않았다. 피크민 4를 언리얼 엔진에서 개발하면서 이 문제는 거의 해결된 것으로 보인다.

닌텐도의 서버를 통하는 온라인 플레이는 유료로 가입해야 한다. 닌텐도 계정 하나당 동시에 하나의 기기에서만 이용 가능.

현재 시장에 있는 **모든** microSD 카드를 이용할 수 있다.

주변 장치(컨트롤러)는 정품의 경우 스틱의 내구도가 매우 안 좋다. 갈리는 문제도 있고, 쏠림 현상도 나타난다.

NFC 통신은 L스틱 위(L3 하단에 센서가 있음)에 올리면 가능.

## Nintendo Switch 2
2025년 4월 13일 기준 정보입니다. 대부분은 잘 모르겠다는 뜻.

형식 명칭: BEE-001
- CPU: NVIDIA Tegra T239 추정
  * ARM Cortex A78C MP8 CPU가 탑재되어 있다. AARCH64 ARMv8-A 표준.
  * 휴대 1.10GHz, 독모드 1.01Ghz
    * GPU에 성능을 몰아주려는 건지 독모드에서 클럭이 조금 줄어든다.
- GPU: NVIDIA Tegra T239 탑재 암페어(RTX 30) 1536 CUDA GPU 추정
  * 휴대 568MHz, 독모드 1007.3MHz
  * FP32에서 최대 3.09 TFLOPS로 Switch에 비해 7.8배
- NPU: NVIDIA Tensor 48x (99TOPS) 추정
- RAM: 12GB LPDDR5 추정
  * 휴대모드 PC5-4266, 독모드 PC5-6400 추정
- 저장 장치
  * 읽기/쓰기:
    - 내장 메모리: 256GB (표준 미확인)
    - 외장 메모리: microSDXC Express 컨트롤러
      * 참고로, 얘는 2024년에 돼서야 실물 제품이 나온 최신예 저장장치 표준이다.
  * 읽기 전용: Nintendo Switch/Switch 2 게임 카드
    - 용량: 1~64GB (메가바이트급이 있을 수도..?)
    - microSDXC Express 포트에 microSDXC 카드를 장착한 경우 **읽기 작업만 가능**하다.
- 디스플레이
  * 7.9" FHD 1080p@120 VBR HDR10 RGB 서브픽셀 IPS 패널
  * 터치: 멀티 터치 지원, 정전식
  * 외부 영상 출력은 최대 4K@60fps, 1440p@120fps
- 음성 입출력
  * 입력: 빌트인 마이크, 3.5mm 4극 단자 마이크 (모노)
  * 출력: 내장 스피커 (스테레오), 3.5mm (5.1ch), HDMI (5.1ch)
- 네트워크
  * 유선: LAN (독모드 연결시 지원, USB)
  * 무선: Wi-Fi 802.11b,g,n,ac,ax, BlueTooth, NFC (컨트롤러를 통해)
- 배터리: 3.7V 5220mAh
  * 지속 시간: 게임에 따라 2~6.5시간
  * 충전: 프리볼트 1.6A -> PD 60W
- 포트
  * 본체: 2x USB3 type C 포트 (충전 지원), 3.5mm 이어폰 단자
  * 독: USB3 type C 포트 (충전), USB3 포트, LAN 포트

실제 사양은 아직 알려진 바 없다.

<div id="switch2-microsd-express"></div>

위에서도 강조한 대로 일반 microSD 카드는 **사실상 사용 불가능**하다. microSD Express 카드를 사용해야 쓰기 작업이 가능하다. (물론 펌웨어단에서 막은 거라 어떻게 바뀔지 모른다)  
2025년 4월 현재 microSD Express 규격은 256GB가 전부이고, 512GB 모델은 기업용, 1TB 이상은 **발열 문제로 개발이 지연**되고 있으니 말 다 했다.  
(오프라인 매장도 microSDXC UHS-I까지만 판매하고 있기도 하고)

물론 microSDXC Express만 쓰기가 가능하도록 한 게임 플랫폼이 출시되기로 한 이상, 업계가 규모의 경제를 실현할 때까지 기다리는 것만이 답이다.

레이트레이싱과 DLSS를 지원한다.

GPU가 완전히 동일한 바이너리로 동작하지 않기 때문에, 일부 Nintendo Switch 게임은 Switch 2에서 동작할 수 없다.  
기계어 수준에서는 동일한 ARMv8-A인 CPU 부분에서도, sysop나 일부 어셈블리 코드, 시스템 API가 서로 다른 부분이 있어 Subsystem Layer를 통해 제공된다.
- Arcaea, SIXTAR GATE 시리즈는 일단 문제는 크게 없어 보인다.
- 태고의 달인 시리즈는 타격이 있다. (아얘 실행이 불가)

Nintendo Switch와 Switch 2에 모두 호환되는 게임은 Switch 패키지로, Switch 2에서 기능이 향상되는 경우 Switch 2 에디션 패키지로 발매된다.

<div id="switch2-edition-games"></div>

Switch 2 에디션 게임의 경우,
- Switch 2일 경우 추가 코드(보통 `call`을 쓸 테지만, `jmp`를 써서 전용 바이너리 섹터로 넘어가는 방법도 있다)를 실행하도록 하는 sysop를 이용해 게임 카드 자체에 포함되는 방법,
- 추가 데이터는 온라인 다운로드를 통해 로드하는 방법,
- **패키지에 실행 인증키만 담아 판매하는 방법**으로 제공된다.

컨트롤러의 스틱 구조가 변경되었으며, 조이콘의 트리거(L2, R2) 버튼이 커지고 SL/SR(XInput에서 L1, R1) 버튼의 크기가 커졌다.  
조이콘 충전 그립에 L4/R4가 추가되었으며, 원하는 기능으로 할당 가능. 페이스의 캡처 버튼과 C버튼을 할당하면 괜찮을 것 같다.  
NFC는 R3에서 가능.

프로콘의 경우 NFC가 로고부로 이동했고, 스틱의 구조 변경과 L4/R4 추가 외엔 큰 변경점은 없다.

추가된 외장 장치로 GameChat용 카메라(59800원)와 듀얼 스크린 특허가 공개되어 있다.

<div id="switch2-pricing-issue"></div>

일본 내수판은 일본어만 대응하고, eShop 국가 설정도 일본만 가능하다. 가격은 49,980엔.
또, 한국 발매가인 *세후* 64만 8000원은 일본 내수판을 포함해서 **전세계에서 2번째로 싸다**. 국제판의 일본 발매가도 **69,980엔(1000원=100엔 기준 69만 9800원, 세전)**로, 한국 발매가보다 비싸다.  
즉, 국제판의 가격대는 한국을 제외하면 전체적으로 세후 70만원~73만원에 맞춰져 있다.
- 미국: *소비세 세전* 449.99달러
- 영국: 395.99파운드
- 유럽: 469.99유로