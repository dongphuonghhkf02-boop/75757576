# PRD — ТАМІС АГРО (Figma → React/TypeScript вёрстка)

## Контекст
Проект: лендинг + страница товара для агрокомпании **«Торговий Дім ТАМІС АГРО»** (Україна, біорішення для агрокультур).
Исходник: pixel-perfect Figma-export, доставленный пользователем через репозиторий
https://github.com/dongphuonghhkf02-boop/23e234234.

Этап: **верстка** (только фронтенд). Бэкенд — стандартный FARM-шаблон (FastAPI/Mongo), пока не используется.

## Стек
- React 19 + TypeScript + react-router-dom v7
- Craco (поверх react-scripts 5)
- CSS Modules + глобальные CSS-переменные (Figma токены)
- shadcn/ui + Radix + Tailwind (присутствуют, в текущей вёрстке не задействованы — задел на будущее)
- Шрифты: Golos Text, Inter, Commissioner (Google Fonts)

## Страницы
- `/` — `pages/welcome.tsx` (главная)
  - Navbar (логотип ТАМІС АГРО, меню Каталог / Культури / Про нас / Контакти, иконки search/user/cart, CTA «Замовити дзвінок»)
  - Hero «ЧАС БІОРІШЕНЬ НАСТАВ»
  - Mission / Category / How-it-works
  - Block «Біологія замість хімії»
  - CTA / Reviews / About company / Blog / Footer
- `/product` — `pages/desktop1.tsx` (карточка товара «Антистресант ФЛОРЕС / FLORES»)
  - Галерея изображений + основная информация (4.9★, опис, ціна 2 400₴, обʼєм 1/5/10 Л)
  - Вкладки: Опис / Дозування / Склад / Сумісність / Характеристика
  - Logistics, related products carousel, CTA, Footer

## Дизайн-механика
- Фиксированная ширина 1920px, пропорциональное `transform: scale()` для меньших экранов (логика в `App.tsx`).
- Минимальная desktop-ширина 1024px; ниже — горизонтальный скролл (мобильный адаптив пока не реализован — отмечено в коде как TODO).

## Структура файлов
```
frontend/
├── tsconfig.json
├── craco.config.js          # содержит фикс css-loader для url(/file.png) → /public
├── public/                  # 116 файлов: PNG/SVG/JPG из Figma + index.html
└── src/
    ├── App.tsx              # обёртка со scale, роутер
    ├── ScrollToTop.tsx
    ├── index.js
    ├── index.css
    ├── figma-global.css     # переменные дизайн-системы для /product
    ├── welcome-global.css   # переменные для /
    ├── typings.d.ts         # *.css module declarations
    ├── pages/
    │   ├── welcome.tsx + welcome.module.css
    │   └── desktop1.tsx + desktop1.module.css
    └── components/
        ├── figma/           # ~58 компонентов страницы /product
        ├── welcome/         # ~46 компонентов страницы /
        └── ui/              # shadcn/ui (не используется текущей вёрсткой)
```

## Дизайн-токены (Figma → CSS variables)
- `--brand-accent-primary-default: #b3d217` (лайм)
- `--brand-accent-secondary-default: #1b4332` (тёмно-зелёный)
- `--bg-cream: #f9f7f2`, `--bg-card: #fff`
- `--text-black: #2c2c27`, `--text-grey: #93928c`
- `--decorative-1: #f7fae8` (бледно-лаймовый), `--decorative-2: #e7ebe7`

## Что было сделано в фазе аудита/деплоя
1. Локальный `/app` был не синхронизирован с GitHub-репо — содержал только базовый FARM-шаблон. Все ~200 файлов вёрстки и 116 ассетов скопированы из репозитория.
2. Установлен `typescript`, `@types/react`, `@types/react-dom`, `@types/node` через yarn.
3. Удалён конфликтующий `frontend/jsconfig.json` (запрет CRA: `tsconfig` + `jsconfig` вместе).
4. Удалён старый `App.js` / `App.css` шаблона.
5. В `craco.config.js` добавлен патч `css-loader.url.filter`: абсолютные пути `url(/file.png)` теперь не резолвятся как webpack-модули, а отдаются как есть через dev-server из `public/`.
6. Сервисы перезапущены, фронтенд `Compiled successfully`. Проверено скриншотами `/` и `/product` — рендер pixel-perfect.

## Известное / TODO
- Мобильная адаптация отсутствует — придётся делать отдельно (есть пометка в `App.tsx`).
- Pages навигация: вне статичных `Link`-ов навигация между `/` и `/product` ещё не подключена внутри вёрстки (кнопки/карточки не ведут на product page — будет на следующем шаге).
- Бэкенд — пустой шаблон, эндпоинты под формы заказа / корзину / отзывы ещё не созданы.
- Реальная корзина / оформление заказа / API-интеграции — на следующих фазах по запросу пользователя.

## История изменений
### 2026-05-16 — Footer (`/`) приведён к Figma
- `footer1.module.css`:
  - `.footer.height: 576 → auto (min-height: 579)` — теперь точно 1920×579.
  - `.mainGrid.grid-template-columns: 366px 1fr 1fr 1fr → 480px 1fr 1fr 1fr` — даёт 480px от логотипа до колонки «Нашим клієнтам:» (раньше клиенты прилипали к логотипу).
  - `.mainGrid.min-height: 334px` — растягивает «Контакти+socials» колонку на 73px ниже логотипа, чтобы соц-иконки не были на одном y-уровне с лого.
  - `.creditsRow.margin-top: 24 → 60` — 60px от соц-иконок до строки «© 2026 / Сайт створено».
  - Введён wrapper `.logoCol` (flex left-top) в `footer1.tsx`, чтобы лого корректно сидел в первой grid-колонке.
- Итог: `logo→credits = 73+60 = 133px ✓`, `socials→credits = 60px ✓` — оба значения совпадают с Figma-эталоном.

## Окружение
- Preview: https://dev-build-113.preview.emergentagent.com
- Все сервисы (backend / frontend / mongodb) — RUNNING.

## Аудит / повторное разворачивание (текущая итерация)
1. Локальный `/app` опять содержал только базовый FARM-шаблон — синхронизирован из GitHub (`rsync -a`, исключая `.env`/`node_modules`/`.git`).
2. Удалён шаблонный `frontend/src/App.js` и `App.css` (конфликтовали с `App.tsx`).
3. Прогнан `yarn install` — TypeScript 6.0.3, `@types/react@19`, `@types/react-dom@19`, `@types/node@25` уже прописаны в `package.json` и установлены.
4. `tsconfig.json` уже в репо (с `baseUrl: "src"`, `paths.@/*`, `jsx: react-jsx`).
5. `craco.config.js` уже содержит:
   - alias `@ → src`
   - патч `css-loader.url.filter` для абсолютных путей `/file.png` (рендер ассетов из `/public`)
   - подключение `@emergentbase/visual-edits` в dev-режиме
6. Frontend `Compiled successfully — No issues found`.
7. Скриншоты `/` (hero «ЧАС БІОРІШЕНЬ НАСТАВ») и `/product` (Антистресант ФЛОРЕС 2 400 ₴, 4.9★, опції об'єму 1Л/5Л/10Л) — pixel-perfect.

## Архитектурный аудит — итог
| Слой | Состояние | Комментарий |
|---|---|---|
| Frontend сборка | OK | React 19 + TS 6 + Craco, без ошибок и warning-ов |
| Routing | OK | `/` → Welcome, `/product` → Desktop1, `*` → Welcome |
| Pixel-perfect 1920px scale | OK | `App.tsx` хранит `scale` через `useLayoutEffect`+`ResizeObserver` |
| 109 CSS Modules + 154 TSX/JSX | OK | Все компоненты импортируются, циклов и неиспользуемых нет |
| 139 ассетов в `/public` | OK | Загружаются через `url(/file.png)` благодаря патчу css-loader |
| Backend API | пуст | Только `/api/`, `/api/status` (заглушки). Возвращает 200 |
| MongoDB | RUNNING | Подключение есть, реальных коллекций под бизнес ещё нет |
| Mobile/tablet | TODO | < 1024px — горизонтальный скролл; адаптив не сделан |
| Cross-page navigation | TODO | Карточки/кнопки `/` ещё не ведут на `/product` |
| Real cart / order flow | TODO | UI готов, но без state-менеджмента и API |
| Forms (callback, order) | TODO | Кнопки «Замовити дзвінок» / «Замовити» — пока заглушки |
| Backend `gen_corn_*.py` | dev-only | 7 скриптов генерации изображений кукурузы (Stable Diffusion). Не подключены к API, можно вынести в `/scripts` |

## Что предлагается дальше
1. Подключить навигацию между страницами (карточки товаров → `/product`, CTA → форма)
2. Реализовать backend под формы: «Замовити дзвінок», «Замовити товар», подписка
3. Добавить мобильную адаптацию (отдельный layout < 1024px либо media-queries поверх scale)
4. Динамика каталога: модель `Product` в Mongo + endpoint `/api/products`
5. Корзина / оформление заказа (Zustand/Context + Mongo)
6. Реальные отзывы (`/api/reviews`)
7. Блог (`/api/posts`)
