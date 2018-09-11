CREATE TABLE IF NOT EXISTS article(
id VARCHAR(64) NOT NULL,
title VARCHAR(255) NOT NULL,
content TEXT NOT NULL,
images VARCHAR(255) NOT NULL,
category INT NOT NULL,
author VARCHAR(255) NOT NULL,
post_time BIGINT NOT NULL,
createdAt BIGINT NOT NULL,
updatedAt BIGINT NOT NULL,
version BIGINT NOT NULL,
PRIMARY KEY(id)
)ENGINE=InnoDB CHARSET=utf8;

create table if not exists recommend_cartoons(
id varchar(64) not null,
img varchar(255) not null,
title varchar(255) not null,
url varchar(255) not null,
article_id varchar(64) not null,
createdAt bigint not null,
updatedAt bigint not null,
version bigint not null,
primary key(id),
foreign key(article_id) references article(id)
)engine=InnoDB charset=utf8;