<img src="./readme_images/logo.jpg" width="300" alt="Rare Supply">

&nbsp;

# Installation
**1. Download repo**
```bash
git clone git@github.com:PatrickDePuydt/RareSupply.git
# 👉 terminal (where you want to download the code to)
```

**2. Install dependencies**
```bash
npm install
# 👉 terminal (in project root directory)
```

**3. Create database**
```
createdb pearl_syrup_development
# 👉 terminal (doesn't matter where you are)
```

**4. Run Migrations**
```
sequelize db:migrate
# 👉 terminal (project root)
```

**5. Fire up server**
```
nodemon
# 👉 terminal (project root)
```

***

## Backstory
| What I thought I was building | What I ended up building |
|:-----------:|:------------:|
| <img src="./readme_images/shark_1.jpeg" width="300" alt="Shark"> | <img src="./readme_images/shark_2.jpeg" width="300" alt="Unorthodox Shark"> |

&nbsp;
&nbsp;

<img src="./readme_images/monsterweekend.jpg" width="500" alt="Monster Weekend" style="margin: auto; display: block;">

### What happened

| Stage of grief | Screenshot |
|:-----------:|:------------:|
| <p style="width: 100px;">Beta: Original ERD</p> |  <img src="./readme_images/erds/1.png"/> |
| <p style="width: 100px;">Gen2: User has many bookmarks, user has many boards.</p> |  <img src="./readme_images/erds/2.png"/> |
| <p style="width: 100px;">V3: User has many treasures, tags have many treasure tags.</p> |  <img src="./readme_images/erds/3.png"/> |
| <p style="width: 100px;">V4: Potential... right ERD?</p> |  <img src="./readme_images/erds/4.png"/> |
