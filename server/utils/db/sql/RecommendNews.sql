create table if not exists recommend_news(
id varchar(64) not null,
img varchar(255) not null,
title varchar(255) not null,
url varchar(255) not null,
createdAt bigint not null,
updatedAt bigint not null,
version bigint not null,
primary key(id)
)engine=InnoDB charset=utf8;