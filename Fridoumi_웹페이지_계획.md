# Fridoumi Website Plan

> AI Kitchen Assistant — Support/Marketing/Legal Pages (English primary, Korean secondary)
> Created: 2026-04-22

---

## 📌 Overview

### Purpose
Build a **bilingual (English primary / Korean secondary) static site** required for App Store review and launch.

### Required Pages (4 per language, 8 total)
| Page | Purpose | App Store Required |
|------|---------|---------------------|
| **Marketing Home** (`/`, `/ko`) | App intro, feature highlights | ⚠️ Recommended |
| **Support** (`/support`, `/ko/support`) | FAQ, contact | ✅ Required |
| **Privacy Policy** (`/privacy`, `/ko/privacy`) | GDPR/CCPA/App Store compliance | ✅ Required |
| **Terms of Use** (`/terms`, `/ko/terms`) | Required for paid subscriptions | ✅ Required |

### Language Strategy
- **Primary language**: English (`/`)
- **Secondary language**: Korean (`/ko/*`)
- **Auto-detection**: Redirect based on browser `Accept-Language` header (optional)
- **Language toggle**: EN/KR switch in header on every page

---

## 🎯 Tech Stack

### Recommended: **Static Site + GitHub Pages**

| Item | Choice | Reason |
|------|--------|--------|
| Framework | **Astro** or **plain HTML/CSS** | Simple build, strong SEO, i18n support |
| Hosting | **GitHub Pages** or **Cloudflare Pages** | Free, custom domain support |
| Domain | `fridoumi.app` or `fridoumi.com` | Brand ownership |
| SSL | Auto (provided by GitHub/Cloudflare) | Free |
| Analytics | **Plausible** or Google Analytics | Privacy-friendly recommended |

### i18n Implementation
- **Astro i18n routing** (recommended): Auto-routing via `src/pages/` and `src/pages/ko/`
- **Plain HTML**: Manual `/en/*.html`, `/ko/*.html` management
- **hreflang meta tags**: SEO and Google multilingual support

---

## 📂 Project Structure

```
fridoumi-web/
├── index.html                    # English home (default)
├── support.html                  # English support
├── privacy.html                  # English privacy policy
├── terms.html                    # English terms of use
├── ko/
│   ├── index.html                # Korean home
│   ├── support.html              # Korean support
│   ├── privacy.html              # Korean privacy policy
│   └── terms.html                # Korean terms of use
├── assets/
│   ├── css/style.css
│   ├── js/lang-switch.js         # Language switcher
│   ├── images/
│   │   ├── logo.svg
│   │   ├── screenshot-en-1.png   # English screenshots
│   │   ├── screenshot-ko-1.png   # Korean screenshots
│   │   └── app-store-badge-{en,ko}.svg
│   └── fonts/
│       └── PlusJakartaSans.woff2
├── sitemap.xml
├── robots.txt
└── README.md
```

---

## 📄 Page Details

### 1. Marketing Home

#### 🇺🇸 English (`/`) — Default

**Structure**:
```
┌─────────────────────────────────────┐
│ [Header] Logo       EN | KR  📱Get App│
├─────────────────────────────────────┤
│ [Hero]                              │
│  Fridoumi                           │
│  AI Kitchen Assistant               │
│  What can you cook with             │
│  what's in your fridge?             │
│  [App Store Badge]                  │
├─────────────────────────────────────┤
│ [Feature Grid]                      │
│  🧊 Smart Pantry                    │
│  ✨ AI Recipe Suggestions            │
│  📸 Receipt Scanner                 │
│  🛒 Smart Shopping List             │
│  🎨 My Recipes                      │
│  ☁️ iCloud Sync                      │
├─────────────────────────────────────┤
│ [Screenshots] 3~5 images            │
├─────────────────────────────────────┤
│ [Pricing]                           │
│  Free / Pro Monthly / Pro Annual    │
├─────────────────────────────────────┤
│ [Footer] Support · Privacy · Terms │
└─────────────────────────────────────┘
```

**Content Draft**:
```markdown
# Fridoumi — Your AI Kitchen Assistant

Can't remember what's in your fridge?
Throwing out food past its expiration date?
Fridoumi has you covered.

## Key Features
- 🧊 **Smart Pantry**: Track ingredients with expiration alerts
- ✨ **AI Recipe Suggestions**: Get recipes from what's in your fridge
- 📸 **Receipt Scanner**: Add ingredients with a single photo
- 🛒 **Smart Shopping List**: Auto-generate missing ingredients
- 🎨 **My Recipes**: Save your own creations
- ☁️ **iCloud Sync**: Access across all your devices

## Pricing
- **Free**: Basic pantry management, limited daily AI suggestions
- **Pro Monthly**: $3.99/month
- **Pro Annual**: $29.99/year (Save 37%)
```

---

#### 🇰🇷 Korean (`/ko`)

**Content Draft**:
```markdown
# Fridoumi — 당신의 AI 냉장고 도우미

냉장고에 뭐가 있는지 모르겠다고요?
유통기한을 까먹고 재료를 버리고 계신가요?
Fridoumi가 해결해드립니다.

## 주요 기능
- 🧊 **스마트 팬트리**: 재료 등록, 유통기한 알림
- ✨ **AI 레시피 추천**: 냉장고 재료로 만들 수 있는 요리 제안
- 📸 **영수증 스캔**: 사진 한 장으로 재료 자동 추가
- 🛒 **스마트 장보기**: 부족한 재료 자동 장바구니
- 🎨 **나만의 레시피**: 직접 만든 요리 저장
- ☁️ **iCloud 동기화**: 모든 기기에서 자동 동기화

## 가격
- **무료**: 기본 팬트리 관리, 하루 제한된 AI 추천
- **Pro 월간**: ₩5,900/월
- **Pro 연간**: ₩44,000/년 (33% 할인)
```

---

### 2. Support Page

#### 🇺🇸 English (`/support`) — Default

**⚠️ App Store Required**: Support URL must be entered in App Store Connect

**FAQ Draft (minimum 10)**:
1. **What is Fridoumi?**
   - Fridoumi is an AI-powered cooking assistant that recommends recipes based on what you have in your fridge.

2. **How do AI recommendations work?**
   - We automatically suggest the best recipes based on your registered ingredients. Pro subscribers get unlimited suggestions.

3. **How do I use the receipt scanner?**
   - In the Receipt Scanner screen, select a photo of your receipt and ingredients will be recognized automatically. This is a Pro feature.

4. **Receipt scanning isn't working.**
   - Make sure the receipt is clear and well-lit. Brighter environments produce better results.

5. **How do I cancel my subscription?**
   - Go to iPhone Settings → Apple ID → Subscriptions → Fridoumi → Cancel.

6. **What's included in Pro?**
   - Unlimited AI recommendations, receipt scanning, ad removal, and iCloud sync.

7. **Where is my data stored?**
   - All data is stored on your device and iCloud (Pro subscribers only). Fridoumi does not operate its own servers.

8. **What's your refund policy?**
   - We follow Apple's refund policy. Request refunds at [reportaproblem.apple.com](https://reportaproblem.apple.com).

9. **How do I set up notifications?**
   - Grant notification permission when first launching the app to receive expiration alerts 3 days before.

10. **What happens to my data if I delete the app?**
    - All local data on your device is deleted. iCloud data is managed separately.

**Contact**: `yoonseok84@gmail.com`

---

#### 🇰🇷 Korean (`/ko/support`)

**FAQ 초안 (최소 10개)**:
1. **Fridoumi는 어떤 앱인가요?**
   - AI가 당신의 냉장고 속 재료로 레시피를 추천하는 요리 도우미 앱입니다.

2. **AI 추천은 어떻게 작동하나요?**
   - 냉장고에 등록된 재료를 기반으로 최적의 레시피를 자동으로 추천합니다. Pro 구독 시 무제한 이용 가능합니다.

3. **영수증 스캔은 어떻게 사용하나요?**
   - 영수증 스캐너 화면에서 사진을 선택하면 재료가 자동으로 인식됩니다. Pro 구독자 전용 기능입니다.

4. **영수증 스캔이 작동하지 않습니다.**
   - 영수증이 선명하게 찍혀있는지 확인해주세요. 조명이 밝은 곳에서 촬영 시 인식률이 높습니다.

5. **구독을 해지하려면?**
   - iPhone 설정 → Apple ID → 구독 → Fridoumi에서 해지 가능합니다.

6. **Pro 구독에 무엇이 포함되나요?**
   - 무제한 AI 추천, 영수증 스캔, 광고 제거, iCloud 동기화

7. **데이터는 어디에 저장되나요?**
   - 모든 데이터는 기기 및 iCloud(Pro 구독 시)에만 저장됩니다. Fridoumi는 자체 서버를 운영하지 않습니다.

8. **환불 정책이 궁금해요.**
   - Apple의 환불 정책에 따릅니다. [reportaproblem.apple.com](https://reportaproblem.apple.com)에서 요청 가능합니다.

9. **알림은 어떻게 설정하나요?**
   - 앱 첫 실행 시 알림 권한을 허용하시면 유통기한 3일 전에 자동 알림이 전송됩니다.

10. **앱을 삭제하면 데이터는?**
    - 앱 삭제 시 기기의 모든 로컬 데이터가 삭제됩니다. iCloud에 동기화된 데이터는 별도 관리됩니다.

**문의**: `yoonseok84@gmail.com`

---

### 3. Privacy Policy

#### 🇺🇸 English (`/privacy`) — Default

**⚠️ App Store Required**

```markdown
# Privacy Policy

Last updated: April 22, 2026

## 1. Information We Collect

### Information You Provide
- Ingredient list in your fridge (stored locally)
- Recipe favorites (stored locally)
- User-created recipes (stored locally)

### Automatically Collected
- App version, iOS version (for error tracking)
- Purchase receipts (handled by Apple StoreKit)

### What We Don't Collect
- ❌ Name, email, phone number
- ❌ Location data
- ❌ Photo library (only receipt images are temporarily accessed when selected)
- ❌ Contacts, calendar

## 2. How We Use Your Information
- Provide AI recipe recommendations (ingredient data sent to AI service)
- Analyze receipts (Pro subscribers' receipt images sent to AI service)
- Verify subscription status (Apple StoreKit)

## 3. Third-Party Services
- **Apple StoreKit**: Subscription management
- **Apple iCloud**: Data sync (opt-in for Pro subscribers)
- **Google AdMob** (free users): Ad display ([AdMob Privacy Policy](https://policies.google.com/privacy))
- **AI Service Providers**: Recipe recommendations and receipt analysis

## 4. Data Storage Locations
- **Device Local**: SwiftData (pantry, recipes)
- **iCloud** (Pro subscribers): Apple iCloud (encrypted by Apple)
- **No Server Storage**: Fridoumi does not operate its own servers

## 5. Data Retention
- Local data: Until user deletion or app removal
- iCloud data: Per Apple's iCloud policy
- AI processing data: Discarded immediately after processing (no permanent storage)

## 6. Children's Privacy
- We do not knowingly collect information from children under 13.
- We will promptly delete any information if we discover it was collected from a child under 13.

## 7. Your Rights
- **Data Deletion**: All local data is deleted when you uninstall the app
- **iCloud Data Deletion**: iPhone Settings → Apple ID → iCloud → Turn off Fridoumi
- **Contact**: yoonseok84@gmail.com

## 8. Changes to This Policy
We will notify you of changes within the app and update this page.

## 9. Contact
- Email: yoonseok84@gmail.com
- Developer: YoonLab
```

---

#### 🇰🇷 Korean (`/ko/privacy`)

```markdown
# 개인정보처리방침

최종 수정일: 2026년 4월 22일

## 1. 수집하는 정보

### 사용자가 직접 입력하는 정보
- 냉장고 재료 목록 (로컬 저장)
- 레시피 즐겨찾기 (로컬 저장)
- 사용자가 만든 레시피 (로컬 저장)

### 자동 수집 정보
- 앱 버전, iOS 버전 (오류 추적 용도)
- 구매 영수증 (StoreKit, Apple 처리)

### 수집하지 않는 정보
- ❌ 이름, 이메일, 전화번호
- ❌ 위치 정보
- ❌ 사진 라이브러리 (영수증 선택 시 해당 이미지만 일시 접근)
- ❌ 연락처, 캘린더

## 2. 정보 사용 목적
- AI 레시피 추천 제공 (재료 정보를 AI 서비스에 전송)
- 영수증 분석 (Pro 구독자의 영수증 이미지를 AI 서비스에 전송)
- 구독 상태 확인 (Apple StoreKit)

## 3. 제3자 서비스
- **Apple StoreKit**: 구독 관리
- **Apple iCloud**: 데이터 동기화 (Pro 구독자 선택 시)
- **Google AdMob** (무료 사용자): 광고 표시 ([AdMob 개인정보처리방침](https://policies.google.com/privacy))
- **AI 서비스 제공자**: 레시피 추천 및 영수증 분석 처리

## 4. 데이터 저장 위치
- **기기 로컬**: SwiftData (팬트리, 레시피)
- **iCloud** (Pro 구독자): Apple iCloud (Apple이 암호화 관리)
- **서버 저장 없음**: Fridoumi는 자체 서버를 운영하지 않습니다

## 5. 데이터 보관 기간
- 로컬 데이터: 사용자가 직접 삭제하거나 앱 제거 시까지
- iCloud 데이터: Apple의 iCloud 정책에 따름
- AI 처리 데이터: 처리 직후 즉시 폐기 (영구 저장 없음)

## 6. 아동 개인정보 보호
- 13세 미만 아동으로부터 의도적으로 정보를 수집하지 않습니다.
- 13세 미만 아동의 정보가 수집된 사실을 알게 되면 즉시 삭제합니다.

## 7. 사용자 권리
- **데이터 삭제**: 앱 삭제 시 모든 로컬 데이터 삭제
- **iCloud 데이터 삭제**: iPhone 설정 → Apple ID → iCloud → Fridoumi 끄기
- **문의**: yoonseok84@gmail.com

## 8. 정책 변경
변경 시 앱 내 공지 및 본 페이지 업데이트

## 9. 연락처
- 이메일: yoonseok84@gmail.com
- 개발자: YoonLab
- 한국 개인정보 담당자: 최윤석
```

---

### 4. Terms of Use

#### 🇺🇸 English (`/terms`) — Default

```markdown
# Terms of Use

## 1. Service Overview
Fridoumi is an AI-powered fridge management and recipe recommendation app.

## 2. Subscription Service
### Pricing
- Pro Monthly: $3.99/month
- Pro Annual: $29.99/year

### Auto-Renewal
- Subscriptions automatically renew.
- Will be charged unless cancelled at least 24 hours before renewal.

### How to Cancel
iPhone Settings → Apple ID → Subscriptions → Fridoumi → Cancel Subscription

### Refunds
Per Apple's refund policy.

## 3. User Responsibilities
- No illegal use
- No reverse engineering
- No service disruption

## 4. Disclaimer
- No guarantee of accuracy or safety of AI-recommended recipes
- Users are responsible for food allergies and health issues
- Limited liability for service interruption or data loss

## 5. Intellectual Property
- App content is the property of YoonLab.
- User-entered data ownership belongs to the user.

## 6. Changes and Termination
Changes will be announced in-app. Service termination with 30 days' notice.

## 7. Governing Law
Laws of the Republic of Korea apply, under the jurisdiction of Seoul Central District Court.
```

---

#### 🇰🇷 Korean (`/ko/terms`)

```markdown
# 이용약관

## 1. 서비스 개요
Fridoumi는 AI 기반 냉장고 관리 및 레시피 추천 앱입니다.

## 2. 구독 서비스
### 요금
- Pro 월간: ₩5,900/월
- Pro 연간: ₩44,000/년

### 자동 갱신
- 구독은 자동으로 갱신됩니다.
- 갱신 24시간 전까지 해지하지 않으면 자동 결제됩니다.

### 해지 방법
iPhone 설정 → Apple ID → 구독 → Fridoumi → 구독 취소

### 환불
Apple 환불 정책에 따릅니다.

## 3. 사용자 의무
- 불법적 목적으로 사용 금지
- 리버스 엔지니어링 금지
- 서비스 방해 행위 금지

## 4. 면책 조항
- AI 추천 레시피의 정확성/안전성 보증 없음
- 식품 알레르기 등 건강 문제는 사용자 책임
- 서비스 중단, 데이터 손실에 대한 책임 제한

## 5. 지적재산권
- 앱 콘텐츠는 YoonLab의 자산입니다.
- 사용자가 입력한 데이터의 소유권은 사용자에게 있습니다.

## 6. 변경 및 종료
약관 변경 시 앱 내 공지. 서비스 종료 시 30일 전 공지.

## 7. 준거법
대한민국 법률 적용, 서울중앙지방법원 관할.
```

---

## 🛠 Implementation Plan

### Phase 1: Foundation (1~2 days)

- [ ] **Buy domain**
  - Candidates: `fridoumi.app` (~$30/year) / `fridoumi.com`
  - Registrars: Namecheap, Cloudflare Registrar

- [ ] **Create Git repository**
  ```
  github.com/yoonsea/fridoumi-web
  ```

### Phase 2: Content Writing (2 days)
- [ ] English marketing copy (based on this document)
- [ ] Korean marketing copy (based on this document)
- [ ] English privacy policy / terms of use
- [ ] Korean privacy policy / terms of use
- [ ] FAQ EN/KR, 10+ each

### Phase 3: Design & Implementation (3~4 days)
- [ ] Design system (matching app colors)
  - Primary: `#D97642` (orange)
  - Background: `#FAF8F5`
- [ ] Responsive layout (mobile first)
- [ ] **Language switcher UI** (EN/KR toggle in header)
- [ ] **Auto language detection** (browser locale-based redirect)
- [ ] **hreflang meta tags** (SEO)
  ```html
  <link rel="alternate" hreflang="en" href="https://fridoumi.app/" />
  <link rel="alternate" hreflang="ko" href="https://fridoumi.app/ko/" />
  <link rel="alternate" hreflang="x-default" href="https://fridoumi.app/" />
  ```
- [ ] App screenshots EN/KR, 3~5 each (iPhone 15 Pro)
- [ ] OG images, favicon

### Phase 4: Deployment (1 day)
- [ ] Deploy to GitHub Pages or Cloudflare Pages
- [ ] Connect custom domain
- [ ] Verify HTTPS
- [ ] SEO meta tags (separate title/description EN/KR)
- [ ] sitemap.xml (includes both languages), robots.txt

### Phase 5: App Integration (30 min)
- [ ] Update `SettingsView.swift`:
  ```swift
  // English locale (default)
  url: "https://fridoumi.app/terms"
  url: "https://fridoumi.app/privacy"
  // Korean locale
  url: "https://fridoumi.app/ko/terms"
  url: "https://fridoumi.app/ko/privacy"
  ```
- [ ] Add locale-based URL branching (via Bundle.main.preferredLocalizations)
- [ ] Update share URL (after App Store ID acquired)
- [ ] Enter Support/Privacy URLs in App Store Connect (both EN/KR)

---

## 🌐 i18n Implementation Details

### Auto language detection (JavaScript)
```javascript
// assets/js/lang-switch.js
(function() {
    const userLang = navigator.language.toLowerCase();
    const isKorean = userLang.startsWith('ko');
    const path = window.location.pathname;

    // Korean user arriving at English page → redirect to Korean
    if (isKorean && !path.startsWith('/ko')) {
        // Only redirect on first visit (check via localStorage)
        if (!localStorage.getItem('langChosen')) {
            window.location.href = '/ko' + path;
        }
    }
})();
```

### Language switcher button
```html
<div class="lang-switcher">
    <a href="/" onclick="localStorage.setItem('langChosen', 'en')">EN</a>
    <a href="/ko/" onclick="localStorage.setItem('langChosen', 'ko')">KR</a>
</div>
```

### App Store Connect locale-specific URLs
App Store Connect → App Information → **Localizable Info**:
- **English (en)** — Primary: Support URL `/support`, Privacy URL `/privacy`
- **Korean (ko)**: Support URL `/ko/support`, Privacy URL `/ko/privacy`

---

## 💰 Budget

| Item | Cost | Notes |
|------|------|-------|
| Domain (1 year) | ~$30 | .app or .com |
| Hosting | **Free** | GitHub/Cloudflare Pages |
| Email | **Free** | Cloudflare Email Routing |
| SSL | **Free** | Auto-provided |
| **Total** | **~$30/year** | |

---

## 🎨 Design References

**Benchmark sites**:
- [Bear App](https://bear.app) — Clean marketing + support/privacy structure
- [Things](https://culturedcode.com/things/) — Minimal app intro
- [Notion](https://notion.so) — Feature-focused layout, excellent i18n

**Core principles**:
- 📱 Mobile-first (80% traffic expected)
- ⚡ Fast loading (Lighthouse 90+)
- 🎨 Consistent with app (Plus Jakarta Sans font, orange accent)
- 🌏 **Full EN/KR support** (shared layout, translated content)
- 🔍 **SEO optimized** (hreflang, per-language sitemap)

---

## ✅ App Store Connect Submission

### English (en) locale — Primary
| Field | URL |
|-------|-----|
| **Support URL** | `https://fridoumi.app/support` |
| **Marketing URL** (optional) | `https://fridoumi.app` |
| **Privacy Policy URL** | `https://fridoumi.app/privacy` |
| **EULA** | `https://fridoumi.app/terms` |

### Korean (ko) locale
| 필드 | URL |
|------|-----|
| **Support URL** | `https://fridoumi.app/ko/support` |
| **Marketing URL** (선택) | `https://fridoumi.app/ko` |
| **Privacy Policy URL** | `https://fridoumi.app/ko/privacy` |
| **EULA** | `https://fridoumi.app/ko/terms` |

---

## 📅 Recommended Timeline

| Week | Tasks |
|------|-------|
| **Week 1** | Buy domain, write EN/KR content, design |
| **Week 2** | HTML/CSS implementation (8 pages EN/KR), i18n logic |
| **Week 3** | Deployment, update app links, submit to App Store |

---

## 🚀 Quick Start (MVP, 2 days)

For urgent delivery, a **minimal setup** works:

```
fridoumi-web/
├── index.html          # English single-page (anchor sections)
├── ko/
│   └── index.html      # Korean single-page
└── style.css
```

**Sections** (anchor links):
- `#home` — Marketing
- `#support` — FAQ
- `#privacy` — Privacy Policy
- `#terms` — Terms of Use

Place EN/KR switcher in header of each page.
Deployable on GitHub Pages at `{username}.github.io/fridoumi` — 2-day submission URL ready.

---

## 📝 Next Actions

1. [ ] Finalize domain name (`fridoumi.app` vs `fridoumi.com`)
2. [ ] Choose email address (`support@`)
3. [ ] Approve EN/KR content drafts (based on this document)
4. [ ] Start HTML/CSS implementation (English first → duplicate for Korean)
5. [ ] Shoot app screenshots (3~5 EN/KR each)
6. [ ] Test language switching UX (mobile/desktop)

---

## 📌 Pre-Launch Checklist

### English Pages (Primary)
- [ ] `/` home works
- [ ] `/support` 10+ FAQs
- [ ] `/privacy` "Last updated" date
- [ ] `/terms` correct USD pricing ($3.99/$29.99)

### Korean Pages
- [ ] `/ko` 홈 정상 작동
- [ ] `/ko/support` FAQ 10개 이상
- [ ] `/ko/privacy` 최종 수정일 기재
- [ ] `/ko/terms` 구독 요금 정확 (₩5,900/₩44,000)

### Common
- [ ] All pages mobile-responsive
- [ ] Language switcher works
- [ ] `hreflang` tags configured
- [ ] sitemap.xml includes both languages
- [ ] SSL (HTTPS) enabled
- [ ] 404 pages (EN/KR)
- [ ] Email address verified
