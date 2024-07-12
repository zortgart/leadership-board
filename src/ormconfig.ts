module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'leadership_board',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};