# twoot 클론하기
적당한 경로에 twoot을 클론하고, 디펜던시를 설치해봅시다.

## 클론
혹시 git을 설치 안 했다면 안 늦었으니 깔아주세요.

```sh
git clone https://gitlab.com/jeancf/twoot
cd twoot
```
위 명령을 실행해 twoot을 클론해 옵니다.
기본적으로 `master` 브랜치가 체크아웃되니 참고해주세요.

## 디펜던시 설치
twoot이 설치된 디렉토리에 가서, 다음을 실행해줍시다.
(python3 가상 환경을 활용하시려면 설정해주세요)

```sh
pip install beautifulsoup4 Mastodon.py youtube-dl2 pytz
```

`youtube-dl2`는 영상 파일의 미러링을 위해 사용되는 선택적 설치 라이브러리입니다.
얜 없어도 되지만 영상 미러링을 하려는 경우 반드시 필요합니다.

## 다음 단계
[실행 전 설정하기](./setup-twoot.md)