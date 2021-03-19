
# The Readme
A Website for displaying Random Enchants from [Project Ascension](https://ascension.gg/)
Created by Samuel J. Segawa.

![Alt text](/re/assets/img/Screenshots/desktop.png?raw=true "Optional Title")
![Alt text](/re/assets/img/Screenshots/desktop_popup.png?raw=true "Optional Title")

## Overview
This site is build with pure PHP, js, jquery and CSS.
The tables are created via [Datatables](https://datatables.net/).
The data for the table is read from a database.

## Setup
copy `.env.example` to `.env` and add the following info:

### Include Path
    INCLUDE_PATH=""		//path to the base folder

Example:

    INCLUDE_PATH="/home/user/www/re/"

### Database info
    DB_HOST="DATABASE HOST"
    DB_NAME="DATABASE NAME"
    DB_USER="DATABASE USER"
    DB_PASS="DATABASE PASSWORD"
    DB_CHAR="CHARSET"

#### Datatables Settings

    DT_TABLE_NAME="TABLE NAME"

### Create Database
 Use the SQL from the following file to create the database.

    /re/src/Database/
    re_create_db.sql
    re_create_db_example_data.sql		//has example data

 Or if you have and existing Database then change the column names in the .env file.

 ### Icons
To display icons first add the icon to the following folder.

    /re/assets/img/icon/

Then add the icon name to the entry in the database under the `icon` row.
Icons are set to use 40px * 40px size.

You can disable the icon row by editing the Datatable settings.

    /re/src/js/datatables.js

    Line 45
    visible: true,		//change to false to disable

### Rarity
Rarity is currently hardcoded and are case sensitive :(
the following values are accepted

 - Common
 - Uncommon
 - Rare
 - Epic
 - Legendary
