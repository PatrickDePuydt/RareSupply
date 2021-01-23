# Sequelize Installation & Notes

```bash
# Initialize
$: npm i sequelize
```

```bash
# Create Database
$: pgcli
	dreammachine> create database pokedex
	
  # Confirmation: `dreammachine@/tmp:pokedex>`
```

```bash
# Create Model
sequelize model:create --name pokemon --attributes name:string
```

```bash
# Run Migrations
sequelize db:migrate

sequelize db:migrate:undo
```