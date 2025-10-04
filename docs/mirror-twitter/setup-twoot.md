# twoot 설정
twoot은 `.toml` 파일로 설정하는데요, 이걸 이용해 설정하는 걸 권장합니다.

## 설정 파일 복사
```sh
cp default.toml filename.toml
```
위의 `filename`은 원하는 파일 이름으로 바꿔주세요. 영숫자 및 언더바만 쓸 걸 권장하긴 합니다.

## 설정 파일 편집
원하는 편집기(`nano`, `vim`, `code`, `gedit` 등 뭐든 좋습니다)로 복사한 파일을 열어 편집해봅시다.

> `.toml`에서 `#` 문자 이후에 나오는 내용은 그 줄이 끝날 때까지 주석으로 처리됩니다.

### 필수 설정 내용
```toml
[config]
# 트위터 계정 아이디 (`https://x.com/user_id`에서 user_id)
twitter_account = "" # "user_id"

# 마스토돈 서버 주소 (`https://example.com`에서 example.com)
mastodon_instance = "" # "example.com"

# 마스토돈 로그인 아이디 (이메일)
mastodon_user = "" # "me@example.com"
```

### 선택적 설정 내용
주요 내용은 아래와 같습니다. 전체 내용은 [여기](https://gitlab.com/jeancf/twoot/-/blob/master/default.toml?ref_type=heads)에서 확인!
```toml
[options]
# true로 하면 영상을 미러링합니다
#upload_videos = true # default: false

# 답글도 미러링합니다
#post_reply_to = true # default: false

# 링크의 리다이렉션을 해제합니다
#remove_link_redirections = true # default: false

# 링크의 트랙커를 끕니다
#remove_trackers_from_urls = true # default: false

# 푸터를 추가합니다
#footer = "#twitter #bot" # default: ""

# 원본 트윗 링크를 날려버립니다
#remove_original_tweet_ref = true # default: false

# 프사와 배사를 미러링합니다
#update_profile = true # default: false

# 얼마나 오래된 트윗까지 끌어올까요?
#tweet_max_age = 3 # default: 1, decimal value accepted

# 트윗이 올라오고 툿을 전송하는 데에 주는 지연을 설정합니다
#tweet_delay = 15 # default: 0

# 로그 레벨 설정
#log_level = "INFO" # list: DEBUG, INFO, WARNING, ERROR, CRITICAL, OFF
# default: "WARNING"
```

### 예시
이 예시는 실제 작동하는 봇의 예시가 아닙니다!

```toml
[config]
twitter_account = "maimai_official"
mastodon_instance = "planet.moe"
mastodon_user = "hotoras03@gmail.com"
[option]
remove_link_redirections = true
remove_trackers_from_urls = true
footer = "#maimaidx"
update_profile = true
tweet_max_age = 60
```

## 다음 단계
[실행 및 자동화](./launch-and-automate)