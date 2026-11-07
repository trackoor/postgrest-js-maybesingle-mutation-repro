create role anon nologin;
create table c(id int primary key, v text);
grant usage on schema public to anon;
grant all on c to anon;
