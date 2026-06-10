# PPC — редактирование сайта (CMS) и передача

## Что это
Визуальный редактор контента на **Sveltia CMS** по адресу **`ppc.space/admin`**.
Правки сохраняются коммитом в GitHub (`anzorkakashkin-bit/ppc-site`, ветка `main`),
а Cloudflare автоматически пересобирает и публикует сайт (обычно 1–2 минуты).

Через `/admin` редактируются:
- **Projects** — кейсы галереи (фото, видео, описание) → главная и `/work/<slug>`
- **FAQ** — вопросы/ответы на страницах услуг
- **Catalog brands** — бренды в каталоге
- **Services** — подзаголовки, цены, SEO услуг

> Контакты/реквизиты (`src/data/site.ts`) и проза на страницах (студия, «What it is»
> на услугах) пока правятся в коде — меняются редко.

---

## Доступ к редактору

`/admin` уже на сайте. Войти можно тремя способами — выбери удобный.

### Вариант A — по токену (проще всего, рекомендую) ✅
Ничего поднимать не нужно. На экране входа жмёшь **«Sign In Using Access Token»**
и вставляешь GitHub-токен.
1. GitHub → Settings → Developer settings → **Personal access tokens →
   Fine-grained tokens → Generate new token**.
2. Repository access: **Only select repositories → `ppc-site`**.
3. Permissions → Repository → **Contents: Read and write** (этого достаточно).
4. Срок — на твоё усмотрение (можно 1 год). Сгенерировать, скопировать токен.
5. На `ppc.space/admin` → «Sign In Using Access Token» → вставить токен.

Для другого редактора: либо он создаёт свой токен (нужно дать ему доступ на запись —
GitHub → репо → **Settings → Collaborators → Add people**, роль Write), либо см. вариант B.

### Вариант B — кнопка «Sign in with GitHub» (для нескольких не-тех. редакторов)
Чуть больше настройки, но логин в один клик. Нужен бесплатный воркер-авторизатор:
1. GitHub → Settings → Developer settings → **OAuth Apps → New OAuth App**:
   Homepage `https://ppc.space`, callback `https://<воркер>.workers.dev/callback`.
   Сохранить Client ID + Client Secret.
2. Развернуть воркер **https://github.com/sveltia/sveltia-cms-auth** в Cloudflare
   (кнопка «Deploy to Cloudflare»), задать переменные `GITHUB_CLIENT_ID`,
   `GITHUB_CLIENT_SECRET`, `ALLOWED_DOMAINS=ppc.space`.
3. В **`public/admin/config.yml`** заменить `base_url:` на URL воркера и закоммитить.

### Вариант C — локально, без логина
На экране входа **«Work with Local Repository»** (Chrome/Edge): выбрать папку
`ppc-site` на диске, править → изменения пишутся в файлы. Затем закоммитить
самому (`git commit && git push`). Удобно для локальной работы.

---

## Как пользоваться
1. Открыть `ppc.space/admin`, войти через GitHub.
2. Выбрать раздел (Projects / FAQ / Catalog / Services).
3. Внести правки. Для проекта: заполнить поля, загрузить hero-фото и доп. медиа.
4. **Save** (Publish) → правка уходит в GitHub → сайт обновится через ~1–2 минуты.

### Фото и видео
- Загружаются прямо в форме; складываются в `public/photos/uploads/`.
- CMS не сжимает картинки. Загружай уже разумного размера (длинная сторона ≤ ~1600px).
  Для «идеального» сжатия с генерацией миниатюр есть скрипт:
  `node scripts/optimize-case.mjs <папка-с-фото> <slug>` (кладёт webp в `public/photos/cases/<slug>/`).
- Видео — формат **mp4 (H.264)**, чтобы играло во всех браузерах (не .mov).

---

## Для разработчика (dev)
- Стек: **Astro 6 + Tailwind v4**, деплой через **Cloudflare Workers Builds** (push в `main`).
- Локально: `npm install` → `npm run dev` (http://localhost:4321). Сборка: `npm run build`.
- Контент-данные: `src/data/*.json` (правит CMS) + типы/обёртки в `src/data/*.ts`.
- Компоненты: `src/components/`, страницы: `src/pages/`, стили/токены: `src/styles/global.css`.
- Переменные окружения (Cloudflare → Build variables): `PUBLIC_WEB3FORMS_ACCESS_KEY` (форма заявок).
- Бэклог/заметки: `docs/qa-backlog.md`.
