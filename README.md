 dashboard-gh-pages

## Описание
Приложение позволяет просматривать менторам информацию по выполненным заданиям своих студентов.

## старт проекта:
- Склонировать проект: `git clone https://github.com/Pulya10c/dashboard-gh-pages.git`.
- Установить зависимости: `npm install`.
- Создать на [Github.com](https://github.com) репозиторий **'name'** и ветку **gh-pages**.
- В файле **package.json** прописываем: `"homepage": "https://<github-name>.github.io/<name>/"`.
- В папку **/script/_source/** положить файлы ['Tasks.xlsx', 'Mentor score.xlsx', 'Mentor-students pairs.xlsx'](https://drive.google.com/drive/folders/1ULj8KjnNNCgUdGunQ1TY00dNbCsqAsHW).
- Создать файл **data.json**, для этого в консоли запустить команду: `npm run create`.
- Создаем папку **build** с проектом и выкладываем ее в репозиторий **'name'** на [Github.com](https://github.com), для этого запускаем команду: `npm run deploy`
- Заходим на `https://<github-name>.github.io/<name>/` и пользуемся приложением.

## корректоровка данных
- скачанные из [папки](https://drive.google.com/drive/folders/1ULj8KjnNNCgUdGunQ1TY00dNbCsqAsHW) необходимо подкорректировать вручную следующую информацию в файле *'Mentor-students pairs.xlsx'*. Там должна содержаться корректная информафия о: github аккаунте ментора и его студентах(без ошибок и опечаток)б колличество студентов у ментора, ФИО ментора на закладках *pairs* и *second_name-to_github_account*.

## Автор проекта:
Social network | Link to Profile
-----|-----
**LinkedIn:** | [<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png" height="20" />](https://www.linkedin.com/in/aleh-serhiyenia-b11486a7/)
**facebook:** | [<img src="https://www.shoutmeloud.com/wp-content/uploads/2010/05/facebooklogo.jpg" height="25" />](https://web.facebook.com/profile.php?id=100011117050051&ref=bookmarks)
**telegram:** | [<img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" height="25" />](https://t.me/Pulya10c)
